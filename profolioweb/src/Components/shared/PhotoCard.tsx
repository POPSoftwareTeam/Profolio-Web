import React, { Component, FunctionComponent} from 'react';
import { Photo } from '../../Models/PhotoModel';




export const PhotoCard: FunctionComponent<any> = (props:Photo) => {
    const shareImage = function(props:Photo){
        
    }
    return(                
    <>
        {console.log(props.base64file)}
        {console.log(props.imagename)}
        <img src={props.base64file}  alt={props.imagename}/>
        <div>
            <div className="button" onClick={()=>shareImage(props)}>share this image</div>
        </div>
    </>
    )
};