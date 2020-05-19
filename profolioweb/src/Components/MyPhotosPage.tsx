import React,{useEffect} from 'react';
import APIPhotoService from '../Services/APIPhotoService';
import {PhotoCard} from "./shared/PhotoCard"
import {Photo} from "../Models/PhotoModel"
import "../css/PhotoCard.scss"



const MyPhotos:React.FC = props => {
    let [myImages,setMyImages] = React.useState<[Photo]>([new Photo("flip","off")]);
    useEffect(() => {
        const setup = async () => {
            let iphotoservice = new APIPhotoService;
            var photos = await iphotoservice.GetMyPhotos();
            setMyImages(photos)
            console.log("Photos",photos)
            console.log("myImages",myImages)
        };
        setup();
    },[]);
    
    return (
      <>
        <h1>Your Photos</h1>
        <div className = "photo-holder">
            {myImages.map((i,key) => (
                <PhotoCard key={key} photo={i} />
                ))}
        </div>
       </>
    )
}




export default MyPhotos;