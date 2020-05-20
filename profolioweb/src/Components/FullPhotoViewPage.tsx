import React, { Component, FunctionComponent} from 'react';
import APIPhotoService from '../Services/APIPhotoService'
import { PhotoCard } from './shared/PhotoCard';
import { FullPhoto } from './shared/FullPhoto';

const FullPhotoView: FunctionComponent<any> = (props:any) => {
    return(                
    <>
        <div className="fullphoto">
            <FullPhoto photo={props.location.state.photo} />
        </div>
    </>
    )
};

export default FullPhotoView;