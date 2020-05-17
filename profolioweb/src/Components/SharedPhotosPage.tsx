import React,{useEffect} from 'react';
import APIPhotoService from '../Services/APIPhotoService';



const SharedPhotos:React.FC = props => {
    let [myImages,setMyImages] = React.useState<[string]>([""]);
    useEffect(() => {
        const setup = async () => {
            let iphotoservice = new APIPhotoService;
            let photos = await iphotoservice.GetSharedPhotos();
            console.log(photos)
            let images:[string] = [""];
            for(let item in photos){
                let newimage = await iphotoservice.GetLowResPhoto(photos[item])
                if(newimage){
                    images.push(newimage);
                }
            }
            images.shift();
            setMyImages(images)
        };
        setup();
    },[]);
    
    return (
      <>
        <h1>Shared with you</h1>
        {myImages.map((image2, index) => (
            <img src={image2} key={index} />
          ))}
       </>
    )
}




export default SharedPhotos;