import React,{useEffect} from 'react';
import APIPhotoService from '../Services/APIPhotoService';



const MyPhotos:React.FC = props => {
    let [myImages] = React.useState<[string]>([""]);
    useEffect(() => {
        const setup = async () => {
            let iphotoservice = new APIPhotoService;
            let photos = await iphotoservice.GetMyPhotos();
            for(let item in photos){
                let newimage = await iphotoservice.GetLowResPhoto(photos[item])
                if(newimage){
                    myImages.push(newimage);
                }
            }
            myImages.shift();
            console.log(myImages)
        };
        setup();
    });
    
    return (
      <>
        <h1>Your Photos</h1>
        <img src={myImages[0]}/>
       </>
    )
}




export default MyPhotos;