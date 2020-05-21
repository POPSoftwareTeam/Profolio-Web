import React,{useEffect} from 'react';
import APIPhotoService from '../Services/APIPhotoService';
import {PhotoCard} from "./shared/PhotoCard"
import "../css/PhotoCard.scss"
import { RouteComponentProps } from 'react-router';



const MyPhotos:React.FC<RouteComponentProps> = props => {
    let [myImages,setMyImages] = React.useState<[string]>([""]);
    let [ready,setReady] = React.useState<boolean>(false)
    const SharePhoto = function(photo: string){
        props.history.push({
            pathname: '/SharePhoto',
            state: { photo: photo }
        })
    }

    const DeletePhoto = async function(photo:string){
        let iphotoservice = new APIPhotoService;
        let response = await iphotoservice.DeletePhoto(photo);
        console.log(response)
        props.history.push({pathname: "/Myphotos"})
    }

    const ViewFullPhoto = function(photo: string){
        props.history.push({
            pathname: '/FullPhoto',
            state: { photo: photo }
        })
    }

    useEffect(() => {
        const setup = async () => {
            let iphotoservice = new APIPhotoService;
            var photos = await iphotoservice.GetMyPhotoNames();
            await myImages.push(...photos);
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
                    <div className="photocard">
                        <div onClick={()=>ViewFullPhoto(myImages[i])} className="photocard-photo">
                            <PhotoCard key={key} photo={myImages[i]} />
                        </div>
                        <div className="button-warning" onClick={()=>DeletePhoto(myImages[i])}>Remove</div>
                        <div className="button" onClick={()=>SharePhoto(myImages[i])}>share this image</div>
                    </div>
                    ))}
            </div>
           </>
        )
    }

}




export default MyPhotos;