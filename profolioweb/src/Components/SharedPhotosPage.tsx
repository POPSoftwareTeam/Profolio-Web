import React,{useEffect} from 'react';
import APIPhotoService from '../Services/APIPhotoService';
import { PhotoCard } from './shared/PhotoCard';
import {Photo} from "../Models/PhotoModel"
import { RouteComponentProps } from 'react-router';



const SharedPhotos:React.FC<RouteComponentProps> = props => {
    let [myImages,setMyImages] = React.useState<[string]>([""]);
    let [ready,setReady] = React.useState<boolean>(false)
    const ViewFullPhoto = function(photo: string){
        props.history.push({
            pathname: '/FullPhoto',
            state: { photo: photo }
        })
    }

    useEffect(() => {
        const setup = async () => {
            let iphotoservice = new APIPhotoService;
            var photos = await iphotoservice.GetSharedPhotoNames();
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
            <h1>Shared With You</h1>
            <div className = "photo-holder">
                {myImages.map((key,i) => (
                    <div className="photocard">
                        <div onClick={()=>ViewFullPhoto(myImages[i])} className="photocard-photo">
                            <PhotoCard key={key} photo={myImages[i]} />
                        </div>
                    </div>
                    ))}
            </div>
           </>
        )
    }
}


export default SharedPhotos;