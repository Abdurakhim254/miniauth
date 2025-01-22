import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { AuthService } from "../auth.service";
import {Strategy} from "passport-local"


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(
        private authservice:AuthService
    ){
        super({usernameField:'email'})
    }
    async validate(email:string,password:string):Promise<any>{
        console.log("1")
        const user=await this.authservice.validateuser(email,password)
        console.log(user)

        if(!user){
            throw new UnauthorizedException()
        }
        return user
    }

}