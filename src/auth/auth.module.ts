import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import keys from 'src/config/keys';
import { JWTStrategy } from './strategy/jwt-strategy';

@Module({
  imports: [JwtModule.register({
    secret: keys.jwtSecret,
    signOptions: { expiresIn: '900s' },
  })],
  providers: [AuthService, JWTStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
