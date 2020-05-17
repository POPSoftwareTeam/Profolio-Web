import React, { Component, FunctionComponent} from 'react';
import { Photo } from '../../Models/PhotoModel';
import APIPhotoService from '../../Services/APIPhotoService'

export const PhotoCard: FunctionComponent<any> = (props:Photo) => {
    let [username,setUsername] = React.useState<[string]>([""]);
    const shareImage = function(props:any){
        console.log("sharing the image")
        console.log(username);
        console.log(props)
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
            <div className="button" onClick={()=>shareImage(props)}>share this image</div>
        </div>
    </>
    )
};