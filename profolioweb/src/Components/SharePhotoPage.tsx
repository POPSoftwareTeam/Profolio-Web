import React, { Component, FunctionComponent} from 'react';
import APIPhotoService from '../Services/APIPhotoService'
import { PhotoCard } from './shared/PhotoCard';
import MainButton from './shared/MainButton';

const SharePhoto: FunctionComponent<any> = (props:any) => {
    let [username,setUsername] = React.useState<string>("");
    let [permission,setPermission] = React.useState<"Low_Res"|"Full_Res">("Low_Res")
    
    const shareImage = async function(props:any){
        let photoservice = new APIPhotoService();
        await photoservice.SharePhoto(props.location.state.photo,username,permission)
    }
    return(                
    <>
        <div className="photocard">
            <PhotoCard  photo={props.location.state.photo} />
        </div>
        <div>
            <input
                  type="email"
                  className="email"
                  placeholder="Email"
                  name="name"
                  value={username}
                  onChange={(event: any) => setUsername(event.target.value)}
                />
        <select value={permission} onChange={(event: any) => setPermission(event.target.value)}>
            <option value="Low_Res">low resolution</option>
            <option value="Full_Res">full resolution</option>
          </select>

          <div className="buttonBox">
               <MainButton text={"Share"} onClick={async () => await shareImage(props)}/>
            </div>

        </div>
    </>
    )
};

export default SharePhoto;