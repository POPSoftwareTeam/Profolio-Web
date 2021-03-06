import React from "react";
import APIAuthenticationService from "../Services/APIAuthenticationService";
import APIPhotoService from "../Services/APIPhotoService";
import { User } from "../Models/UserModel";
import { Token } from "../Models/TokenModel";
import MainButton from "./shared/MainButton";

const FileUpload: React.FC = (props) => {
  let [image, setImage] = React.useState<File | null>();

  const submitCharityToAPI = async () => {
    let photoservice = new APIPhotoService();
    await photoservice.UploadPhoto(image);
  };

  return (
    <>
      <form>
        <h1>Upload a photo</h1>
        <input
          type="file"
          onChange={(event: any) => setImage(event.target.files[0])}></input>
        <div className="buttonBox">
            <MainButton text={"Submit"} onClick={async () => await submitCharityToAPI()}/>
        </div>
      </form>
    </>
  );
};

export default FileUpload;
