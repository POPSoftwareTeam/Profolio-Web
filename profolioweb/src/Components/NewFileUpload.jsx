import React, { Component } from 'react'
import DragAndDrop from './shared/DragAndDrop'
import APIPhotoService from '../Services/APIPhotoService'
import MainButton from "./shared/MainButton";
import "../css/form.scss"

class FileList extends Component {
state = {
    files: [
    ]
  }
 handleDrop = (files) => {
    let fileList = this.state.files
    for (var i = 0; i < files.length; i++) {
      if (!files[i].name) return
      fileList.push({status:"Waiting",file:files[i]})
    }
    this.setState({files: fileList})
  }


  
  UploadPhotos = async () => {
    let photoservice = new APIPhotoService();
    let files = this.state.files
    for(let i in files){
      files[i].status = "In Progress";
      this.forceUpdate()
      let result = await photoservice.UploadPhoto(files[i].file);
      if(result){
        files[i].status = "Finished"
      }else{
        files[i].status = "Failed"
      }
      this.forceUpdate()
    }
  };


render() {
    return (
      <>
      <DragAndDrop handleDrop={this.handleDrop}>
        <div className="drag-and-drop" >
          <h1>drop files here</h1>
          {this.state.files.map((file) =>
          <>
            <h2>{file.file.name} -- {file.status}</h2>
          </>
          )}
        </div>
      </DragAndDrop>
      <div className="buttonBoxCenter" >
        <MainButton text={"Start Upload"} onClick={async () => await this.UploadPhotos()}/>
      </div>
      </>
    )
  }
}
export default FileList