import React, { Component, FunctionComponent} from 'react';
import { Photo } from '../../Models/PhotoModel';


interface PhotoCardProps {
    photo: Photo
}

export const PhotoCard: FunctionComponent<PhotoCardProps> = (props) => {
    const shareImage = function(photo: Photo){
        
    }
    return(                
    <>
        <img src={props.photo.base64file}  alt={props.photo.imagename}/>
        <div>
            <div className="button" onClick={()=>shareImage(props.photo)}>share this image</div>
        </div>
    </>
    )
};