import React from 'react';
import APIAuthenticationService from '../Services/APIAuthenticationService';
import APIPhotoService from '../Services/APIPhotoService';
import { User } from '../Models/UserModel';
import { Token } from '../Models/TokenModel';


const FileUpload:React.FC = props => {
    let [image, setImage] = React.useState<File|null>();


    const submitCharityToAPI = async () => {

        let photoservice = new APIPhotoService();
        await photoservice.UploadPhoto(new Token(""),image);
        console.log(image);
    }
    
    return (
      <>
        <form>
            <h1>Upload a photo</h1>
            <input type="file" onChange={(event:any) => setImage(event.target.files[0])}></input>
            <button type="button" onClick={async ()=> await submitCharityToAPI()}>Submit</button>
        </form>
        <h1>mike where is my button</h1>
       </>
    )
}




export default FileUpload;