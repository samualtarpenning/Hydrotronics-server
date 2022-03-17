import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { AuthService } from '../auth.service';
import keys from 'src/config/keys';

@Injectable()
export class JWTStrategy extends PassportStrategy(Strategy, 'jwt'){
    
    constructor() {
        super({
          jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
          ignoreExpiration: false,
          secretOrKey: keys.jwtSecret,
        });
      }

      async validate(payload: any) {
        return { pin: payload.pin };
      }









}