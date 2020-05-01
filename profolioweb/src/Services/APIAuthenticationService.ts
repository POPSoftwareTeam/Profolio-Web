import { User } from "../Models/UserModel";
import { Token } from "../Models/TokenModel";

export default class APIAuthenticationService{
    readonly api = "http://206.189.218.168"
    public async RegisterClient(user:User){
        let newurl = this.api+"/Register/Client";
        let body = JSON.stringify({User:user});
        let headers = { "Content-Type": "application/json" };
        let response = await fetch(newurl, {
            method: "POST",
            mode: "cors",
            headers: headers,
            body: body
        })
        let responseJson = await response.json();
    }
    public async RegisterPhotographer(user:User){
        let newurl = this.api+"/Register/Photographer";
        let body = JSON.stringify({User:user});
        console.log(body)
        let headers = { "Content-Type": "application/json" };
        let response = await fetch(newurl, {
            method: "POST",
            mode: "cors",
            headers: headers,
            body: body
        })
        let responseJson = await response.json();
        console.log(responseJson)
    }
    public async Login(user:User){
        let newurl = this.api+"/Login";
        let body = JSON.stringify({User:user});
        console.log(body)
        let headers = { "Content-Type": "application/json" };
        let response = await fetch(newurl, {
            method: "POST",
            mode: "cors",
            headers: headers,
            body: body
        })
        let responseJson = await response.json();
        if(responseJson.Status == "success"){
            return(new Token(responseJson.accessToken))
        }
    }
}