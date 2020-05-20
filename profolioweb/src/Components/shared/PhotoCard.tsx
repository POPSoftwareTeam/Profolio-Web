import React, { Component, FunctionComponent, useEffect} from 'react';
import { Photo } from '../../Models/PhotoModel';
import "../../css/PhotoCard.scss"
import APIPhotoService from '../../Services/APIPhotoService';
import { withRouter } from 'react-router'

interface PhotoCardProps {
    photo:any;
}

export const PhotoCard: FunctionComponent<PhotoCardProps> = (props) => {
    let [myImage,setMyImage] = React.useState<Photo>(new Photo("",""));
    let [ready,setReady] = React.useState<boolean>(false)

    useEffect(() => {
        const setup = async () => {
            let iphotoservice = new APIPhotoService;
            var photo = await iphotoservice.GetLowResPhotoFile(props.photo);
            setMyImage(photo);
            setReady(true);
        };
        setup();
    },[]);


    if(!ready){
        return(            
            <div className="loading"></div>
    )
    }else{
        return(                
        <>
                <img src={myImage.base64file}  alt={myImage.imagename}/>
        </>
        )
    }
};