import React,{useEffect} from 'react';
import APIPhotoService from '../Services/APIPhotoService';
import {PhotoCard} from "./shared/PhotoCard"
import "../css/PhotoCard.scss"



const MyPhotos:React.FC = props => {
    let [myImages,setMyImages] = React.useState<[string]>([""]);
    let [ready,setReady] = React.useState<boolean>(false)
    useEffect(() => {
        const setup = async () => {
            let iphotoservice = new APIPhotoService;
            var photos = await iphotoservice.GetMyPhotoNames();
            await myImages.push(...photos);
            console.log("myImages",myImages)
            myImages.shift();
            setReady(true)
        };
        setup();
    },[]);
    
    if(!ready){
        return(
            <h1>LOADING....</h1>
        )
    }else{
        return (
          <>
            <h1>Your Photos</h1>
            <div className = "photo-holder">
                {myImages.map((key,i) => (
                    <PhotoCard key={key} photo={myImages[i]} />
                    ))}
            </div>
           </>
        )
    }

}




export default MyPhotos;