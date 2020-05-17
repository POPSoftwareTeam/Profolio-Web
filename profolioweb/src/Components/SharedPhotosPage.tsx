import React,{useEffect} from 'react';
import APIPhotoService from '../Services/APIPhotoService';
import { PhotoCard } from './shared/PhotoCard';
import {Photo} from "../Models/PhotoModel"



const SharedPhotos:React.FC = props => {
    let [myImages,setMyImages] = React.useState<[Photo]>([new Photo("","")]);
    useEffect(() => {
        const setup = async () => {
            let iphotoservice = new APIPhotoService;
            let photos:[Photo] = await iphotoservice.GetSharedPhotos();
            setMyImages(photos);
            console.log("Photos",photos)
            console.log("myImages",myImages)
        };
        setup();
    },[]);
    
    return (
      <>
        <h1>Shared with you</h1>
        {myImages.map((image2) => (
            <PhotoCard props={image2} />
          ))}
       </>
    )
}


export default SharedPhotos;