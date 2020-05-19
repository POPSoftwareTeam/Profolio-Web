import React,{useEffect} from 'react';
import APIPhotoService from '../Services/APIPhotoService';
import {PhotoCard} from "./shared/PhotoCard"
import "../css/PhotoCard.scss"



const MyPhotos:React.FC = props => {
    let [myImages,setMyImages] = React.useState<[string]>([""]);
    useEffect(() => {
        const setup = async () => {
            let iphotoservice = new APIPhotoService;
            var photos = await iphotoservice.GetMyPhotoNames();
            myImages.push(...photos);
            console.log("myImages",myImages)
            myImages.shift();
        };
        setup();
    },[myImages]);
    
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