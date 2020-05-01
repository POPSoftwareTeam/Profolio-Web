import React from 'react';
import APIAuthenticationService from './Services/APIAuthenticationService';
import APIPhotoService from './Services/APIPhotoService';
import { User } from './Models/UserModel';


const App:React.FC = props => {
    let [image, setImage] = React.useState<File|null>();


    const submitCharityToAPI = async () => {
      console.error("hhahaha")
      let authservice = new APIAuthenticationService()
      let token =  await authservice.Login(new User("kyler.daybell96@gmail.com","kyler"))
      if(token){
        let photoservice = new APIPhotoService();
        await photoservice.UploadPhoto(token,image);
        console.log(image);
      }
    }
    
    return (
      <>
        <form>
            <h3>PhotoUpload</h3>
            <input type="file" onChange={(event:any) => setImage(event.target.files[0])}></input>
            <button type="button" onClick={async ()=> await submitCharityToAPI()}>Submit</button>
        </form>
       </>
    )
}




export default App;
