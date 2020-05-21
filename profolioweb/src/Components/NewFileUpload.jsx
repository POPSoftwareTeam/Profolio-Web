import React, { Component } from 'react'
import DragAndDrop from './shared/DragAndDrop'
import APIPhotoService from '../Services/APIPhotoService'
import {Token} from "../Models/TokenModel"
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
      fileList.push({status:"not uploaded",file:files[i]})
    }
    this.setState({files: fileList})
  }


  
  submitCharityToAPI = async () => {
    let photoservice = new APIPhotoService();
    let files = this.state.files
    for(let i in files){
      console.log(files[i])
      let result = await photoservice.UploadPhoto(files[i].file);
      if(result){
        files[i].status = "Finished"
      }else{
        files[i].status = "Failed"
      }
      console.log(files[i])
      this.forceUpdate()
    }
  };


render() {
    return (
      <>
      <h1>drop your files in the grey square</h1>
      <DragAndDrop handleDrop={this.handleDrop}>
        <div className="drag-and-drop" style={{height: 300, width: 250}}>
          {this.state.files.map((file) =>
          <>
            <div>{file.file.name}</div>
            <div>{file.status}</div>
          </>
          )}
        </div>
      </DragAndDrop>
        <div className="file upload" onClick={ async()=>await this.submitCharityToAPI()}>Click me</div>
      </>
    )
  }
}
export default FileList