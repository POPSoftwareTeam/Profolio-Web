import React, { Component, FunctionComponent} from 'react';
import { Photo } from '../../Models/PhotoModel';




export const PhotoCard: FunctionComponent<any> = (props:Photo) => {
    let [username,setUsername] = React.useState<[string]>([""]);
    const shareImage = function(props:Photo){
        
    }
    return(                
    <>
        <img src={props.base64file}  alt={props.imagename}/>
        <div>
            <div className="button" onClick={()=>shareImage(props)}>share this image</div>
        </div>
    </>
    )
};