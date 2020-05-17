export class Photo{
    public readonly base64file:string;
    public readonly imagename:string;
    constructor(ImageName:string,Base64File:string){
        this.base64file = Base64File;
        this.imagename = ImageName;
    }
}