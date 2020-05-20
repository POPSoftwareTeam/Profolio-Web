import React, { Component, FunctionComponent, useEffect} from 'react';
import { Photo } from '../../Models/PhotoModel';
import "../../css/PhotoCard.scss"
import APIPhotoService from '../../Services/APIPhotoService';
import { withRouter } from 'react-router'

interface FullPhotoProps {
    photo:any;
}

export const FullPhoto: FunctionComponent<FullPhotoProps> = (props) => {
    let [myImage,setMyImage] = React.useState<Photo>(new Photo("",""));
    let [ready,setReady] = React.useState<boolean>(false)

    useEffect(() => {
        const setup = async () => {
            let iphotoservice = new APIPhotoService;
            var photo = await iphotoservice.GetFullResPhotoFile(props.photo);
            setMyImage(photo);
            setReady(true);
            console.log("done")
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