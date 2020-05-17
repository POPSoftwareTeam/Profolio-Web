import React,{useEffect} from 'react';
import APIPhotoService from '../Services/APIPhotoService';
import { PhotoCard } from './shared/PhotoCard';
import {Photo} from "../Models/PhotoModel"



const SharedPhotos:React.FC = props => {
    let [myImages,setMyImages] = React.useState<[Photo]>([new Photo("flip","off")]);
    useEffect(() => {
        const setup = async () => {
            let iphotoservice = new APIPhotoService;
            var photos = await iphotoservice.GetSharedPhotos();
            setMyImages(photos)
            console.log("Photos",photos)
            console.log("myImages",myImages)

        };
        setup();
    },[]);
    
    return (
      <>
        <h1>Your Photos</h1>
        {myImages.map((i,key) => (
            <PhotoCard key={key} photo={i} />
          ))}
       </>
    )
}


export default SharedPhotos;