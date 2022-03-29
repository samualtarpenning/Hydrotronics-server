import {Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/authDto';
import { accessToken } from './interface/user.interface';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService){}


    @Post('login')
    @ApiOkResponse({description: "accessToken generated"})
    @ApiBody({type: AuthDto})
    @ApiUnauthorizedResponse({description: "Invalid or no credentials"})
    login (@Body() dto: AuthDto):accessToken {
        return this.authService.signinLocal(dto)
    }

    //this will be removed later
    @Post("register")
    async register (@Body() dto: AuthDto):Promise<{}> {
        return this.authService.register(dto)
    }


    
}
