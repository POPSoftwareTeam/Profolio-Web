import React,{useEffect} from 'react';
import APIPhotoService from '../Services/APIPhotoService';



const MyPhotos:React.FC = props => {
    let [myImages,setMyImages] = React.useState<[string]>([""]);
    //let myImages:[string] = [""];
    useEffect(() => {
        const setup = async () => {
            let iphotoservice = new APIPhotoService;
            let photos = await iphotoservice.GetMyPhotos();
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
        <h1>Your Photos</h1>
        {myImages.map((image2, index) => (
            <img src={image2} key={index} />
          ))}
       </>
    )
}




export default MyPhotos;