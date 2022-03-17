import {Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/authDto';
import { accessToken } from './interface/user.interface';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService){}

    @Post('login')
    login (@Body() dto: AuthDto):accessToken {
        return this.authService.signinLocal(dto)
    }

    
}
