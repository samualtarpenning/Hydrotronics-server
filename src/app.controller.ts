import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //authorization @UseGuards(AuthGuard('jwt')): this protects the route below from been accessed without valid token
  @UseGuards(AuthGuard('jwt'))
  @Get('')
  getHello(): string {
    return this.appService.getHello();
  }
}
