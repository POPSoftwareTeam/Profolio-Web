import React, { Component, FunctionComponent} from 'react';
import { Photo } from '../../Models/PhotoModel';
import "../../css/PhotoCard.scss"

interface PhotoCardProps {
    photo: Photo
}

export const PhotoCard: FunctionComponent<PhotoCardProps> = (props) => {
    const shareImage = function(photo: Photo){
        console.log(photo.imagename)
    }
    return(                
    <>
        <div className="photocard">
            <img src={props.photo.base64file}  alt={props.photo.imagename}/>
            <div className="button" onClick={()=>shareImage(props.photo)}>share this image</div>
        </div>
    </>
    )
};