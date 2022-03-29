import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AuthDto } from './dto/authDto';
import {Model} from "mongoose"
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interface/user.interface';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService, @InjectModel('Pin') private readonly pinModel:Model<User>){}
   async signinLocal(code:AuthDto):Promise<{}>{
        // VALIDATE PIN
        //validate pin is in the body of code sent
        if(code.pin === null || code.pin === undefined){
            return {
                status: "error",
                code: "401",
                message: "Pin number required"
            }
        }

        //validate it is an array
        if(!Array.isArray(code.pin)){
            return {
                status: "error",
                code: "401",
                message: "Invalid Pin number"
            }
        }
        //validate it has length of four
        if(code.pin.length !== 4){
            return {
                status: "error",
                code: "401",
                message: "Invalid Pin number"
            }
        }
        // ensure all elements are numbers
        if(!this.onlyNumbers(code.pin)){
            return {
                status: "error",
                code: "401",
                message: "Invalid Pin number"
            }
        }

        //flatten it and ensure it has just four individual
        const pinflat = code.pin.join("");
        if(pinflat.length !== 4){
            return {
                status: "error",
                code: "401",
                message: "Invalid Pin number"
            }
        }

        //finally, pin is correct, convert it to jwt and send to frontend

        // check if pin is in db

        let pinCheck = JSON.stringify(code.pin)
        const pinExist = await this.pinModel.findOneAndUpdate({ pinCheck: pinCheck }, {active: true}, { new: true });
        if(pinExist == null || pinExist == undefined){
            throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
        }
        
        
        return await {jwt : this.signPin(pinflat), last_login: pinExist.updatedAt};
    }

    // sign pin with jwt and return token
    signPin(pin: string){
        return this.jwtService.sign({
            jwt: pin
        })
    }

    //validate only numbers in array
    onlyNumbers(array: any) {
        return array.every(element => {
          return typeof element === 'number';
        });
    }

    //this will be removed later
    async register(code: AuthDto): Promise<User>{
        let pin = code.pin
        let pinCheck = JSON.stringify(pin)
        const newPin = new this.pinModel({pin, pinCheck});
        return await newPin.save();
    }

}
