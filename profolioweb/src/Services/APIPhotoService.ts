import { Token } from "../Models/TokenModel";

export default class APIPhotoService{
    readonly api = "http://206.189.218.168"
    public async UploadPhoto(token:Token,file:any){
        //getting token from local storage
        token = new Token(localStorage.getItem('token') ?? token.key)
        
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
    public async GetMyPhotos():Promise<string[]>{
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
    public async GetLowResPhoto(filename:string):Promise<string|null>{
        let token = new Token(localStorage.getItem('token') ?? "");

        let newurl = this.api+"/Photos/LowRes/"+filename
        let headers = {  
            "Authorization": "Bearer "+token.key
        };
        let response = await fetch(newurl, { 
            method: "GET",
            mode: "cors",
            headers: headers,
        }).then(response=>response.blob())


        const reader = new FileReader();
        await new Promise((resolve, reject) => {
            reader.onload = resolve;
            reader.onerror = reject;
            reader.readAsDataURL(response);
          });
        let base64data = reader.result?.toString()
        return base64data ?? null;
    }
}