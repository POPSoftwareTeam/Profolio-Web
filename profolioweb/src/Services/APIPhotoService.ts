import { Token } from "../Models/TokenModel";
import { Photo } from "../Models/PhotoModel";

export default class APIPhotoService{
    readonly api = "http://206.189.218.168"
    public async UploadPhoto(file:any){
        //getting token from local storage
        let token = new Token(localStorage.getItem('token') ?? "");
        
        let newurl = this.api+"/Photos/Upload"
        let formData = new FormData()
        formData.append('avatar',file,'image.jpg')
        let headers = {  
            "Authorization": "Bearer "+token.key
        };
        let response = await fetch(newurl, { 
            method: "POST",
            mode: "cors",
            headers: headers,
            body: formData
        })
        let responseJson = await response.json();
    }
    public async GetMyPhotoNames():Promise<string[]>{
        let token = new Token(localStorage.getItem('token') ?? "");
        
        let newurl = this.api+"/Photos/MyPhotos"
        let headers = {  
            "Authorization": "Bearer "+token.key
        };
        let response = await fetch(newurl, { 
            method: "GET",
            mode: "cors",
            headers: headers,
        })
        let responseJson = await response.json();
        if(responseJson.Status == "success"){
            return responseJson.Data;
        }else{
            return [""]
        }
    }
    public async GetSharedPhotoNames():Promise<string[]>{
        let token = new Token(localStorage.getItem('token') ?? "");
        
        let newurl = this.api+"/Photos/SharedWithMe"
        let headers = {  
            "Authorization": "Bearer "+token.key
        };
        let response = await fetch(newurl, { 
            method: "GET",
            mode: "cors",
            headers: headers,
        })
        let responseJson = await response.json();
        if(responseJson.Status == "success"){
            return responseJson.Data;
        }else{
            return [""]
        }
    }
    public async GetLowResPhotoFile(photoname:string):Promise<Photo>{
        let newimage = await this.GetLowResPhoto(photoname)
        if(newimage){
            return new Photo(photoname,newimage);
        }
        return new Photo("","")
    }


    public async GetFullResPhotoFile(photoname:string):Promise<Photo>{
        let newimage = await this.GetFullResPhoto(photoname)
        if(newimage){
            return new Photo(photoname,newimage);
        }
        return new Photo("","")
    }

    public async GetSharedPhotos():Promise<[Photo]>{
        let photos = await this.GetSharedPhotoNames();
        let images:[Photo] = [new Photo("","")];
        for(let i in photos){
            let newimage = await this.GetLowResPhoto(photos[i])
            if(newimage){
                images.push(new Photo(photos[i],newimage));
            }
        }
        images.shift()
        return images
    }

    public async GetLowResPhoto(filename:string):Promise<string|null>{
        try{
            let token = new Token(localStorage.getItem('token') ?? "");

            let newurl = this.api+"/Photos/LowRes/"+filename
            let headers = {  
                "Authorization": "Bearer "+token.key
            };
            let response = await fetch(newurl, { 
                method: "GET",
                mode: "cors",
                headers: headers,
            }).then(function(response) {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            }).then(response=>response.blob())


            const reader = new FileReader();
            await new Promise((resolve, reject) => {
                reader.onload = resolve;
                reader.onerror = reject;
                reader.readAsDataURL(response);
            });
            let base64data = reader.result?.toString()
            return base64data ?? null;
        }catch(error){
            return null
        }
    }

    public async GetFullResPhoto(filename:string):Promise<string|null>{
        try{
            let token = new Token(localStorage.getItem('token') ?? "");

            let newurl = this.api+"/Photos/FullRes/"+filename
            let headers = {  
                "Authorization": "Bearer "+token.key
            };
            let response = await fetch(newurl, { 
                method: "GET",
                mode: "cors",
                headers: headers,
            }).then(function(response) {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            }).then(response=>response.blob())

            
                const reader = new FileReader();
                await new Promise((resolve, reject) => {
                    reader.onload = resolve;
                    reader.onerror = reject;
                    reader.readAsDataURL(response);
                });
                let base64data = reader.result?.toString()
                return base64data ?? null;
            
        }catch(error){
            console.log(error)
            return null
        }
    }

    public async SharePhoto(photo:string,email:string,permission:"Full_Res"|"Low_Res"):Promise<Boolean>{
        let token = new Token(localStorage.getItem('token') ?? "");

        let newurl = this.api+"/Photos/GrantClientPermissions"
        let headers = {  
            "Content-Type": "application/json",
            "Authorization": "Bearer "+token.key
        };
        let body = JSON.stringify({Email:email,Photo:photo,Permission:permission})
        let response = await fetch(newurl, { 
            method: "Post",
            mode: "cors",
            body:body,
            headers: headers,
        }).then(response=>response.json())
        return true;
    }

    public async DeletePhoto(photo:string):Promise<boolean>{
        let token = new Token(localStorage.getItem('token') ?? "");

        let newurl = this.api+"/Photos/Delete/"+photo
        let headers = {  
            "Content-Type": "application/json",
            "Authorization": "Bearer "+token.key
        };
        let response = await fetch(newurl, { 
            method: "Get",
            mode: "cors",
            headers: headers
        }).then(response=>response.json())
        return true;
    }
}