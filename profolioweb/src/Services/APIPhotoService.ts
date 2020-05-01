import { Token } from "../Models/TokenModel";
const fs = require('fs')

export default class APIPhotoService{
    readonly api = "http://206.189.218.168"
    public async UploadPhoto(token:Token,file:any){
        console.error("in the fetch")
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
        console.log(responseJson)
    }
}