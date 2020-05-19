import React, { Component, FunctionComponent, useEffect} from 'react';
import { Photo } from '../../Models/PhotoModel';
import "../../css/PhotoCard.scss"
import APIPhotoService from '../../Services/APIPhotoService';

interface PhotoCardProps {
    photo:any;
}

export const PhotoCard: FunctionComponent<PhotoCardProps> = (props) => {
    let [myImage,setMyImage] = React.useState<Photo>(new Photo("",""));
    let [ready,setReady] = React.useState<boolean>(false)
    const shareImage = function(photo: Photo){
        console.log(photo.imagename)
    }
    useEffect(() => {
        const setup = async () => {
            let iphotoservice = new APIPhotoService;
            var photo = await iphotoservice.GetLowResPhotoFile(props.photo);
            setMyImage(photo);
            //setReady(true);
        };
        setup();
    },[]);


    if(!ready){
        return(            
        <div className="photocard">
            <div className="loading"></div>
            <div className="button" onClick={()=>shareImage(myImage)}>share this image</div>
        </div>
    )
    }else{
        return(                
        <>
            <div className="photocard">
                <img src={myImage.base64file}  alt={myImage.imagename}/>
                <div className="button" onClick={()=>shareImage(myImage)}>share this image</div>
            </div>
        </>
        )
    }
};