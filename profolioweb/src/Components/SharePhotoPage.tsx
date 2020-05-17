import React, { Component, FunctionComponent} from 'react';
import { Photo } from '../Models/PhotoModel';
import APIPhotoService from '../Services/APIPhotoService'

const SharePhoto: FunctionComponent<any> = (props:Photo) => {
    let [username,setUsername] = React.useState<string>("");
    let [photoName,setPhotoName] = React.useState<string>("");
    let [permission,setPermission] = React.useState<"Low_Res"|"Full_Res">("Low_Res")
    const shareImage = async function(props:any){
        console.log("sharing the image")
        console.log(username);
        console.log(photoName);
        let photoservice = new APIPhotoService();
        await photoservice.SharePhoto(photoName,username,permission)
    }
    return(                
    <>
        <img src={props.base64file}  alt={props.imagename}/>
        <div>
            <input
                  type="email"
                  className="email"
                  placeholder="Email"
                  name="name"
                  value={username}
                  onChange={(event: any) => setUsername(event.target.value)}
                />
            <input
                type="text"
                className="text"
                placeholder="Image Name"
                name="name"
                value={photoName}
                onChange={(event: any) => setPhotoName(event.target.value)}
            />
        <select value={permission} onChange={(event: any) => setPermission(event.target.value)}>
            <option value="Low_Res">low resolution</option>
            <option value="lime">full resolution</option>
          </select>
            <div className="button" onClick={()=>shareImage(props)}>share this image</div>
        </div>
    </>
    )
};

export default SharePhoto;