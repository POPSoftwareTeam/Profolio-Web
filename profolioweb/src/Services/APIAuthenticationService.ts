import { User } from "../Models/UserModel";
import { Token } from "../Models/TokenModel";

export default class APIAuthenticationService{
    readonly api = "http://api.profolio.photos"
    public async Register(user:User){
        let newurl = this.api+"/Register";
        let body = JSON.stringify({User:user});
        let headers = { "Content-Type": "application/json" };
        let response = await fetch(newurl, {
            method: "POST",
            mode: "cors",
            headers: headers,
            body: body
        }).then(response => response.json())
        if(response.Status == "success"){
            return true;
        }
        return false
    }
    public async Login(user:User){
        let newurl = this.api+"/Login";
        let body = JSON.stringify({User:user});
        let headers = { "Content-Type": "application/json" };
        let response = await fetch(newurl, {
            method: "POST",
            mode: "cors",
            headers: headers,
            body: body
        }).then(response => response.json())
        if(response.Status == "success"){
            localStorage.setItem('token',response.accessToken)
            return(new Token(response.accessToken))
        }
        return null;
    }
}