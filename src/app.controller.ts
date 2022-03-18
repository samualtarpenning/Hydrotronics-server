import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //authorization @UseGuards(AuthGuard('jwt')): this protects the route below from been accessed without valid token
  @UseGuards(AuthGuard('jwt'))
  @Get('')
  @ApiBearerAuth()
  getHello(): {} {
    return this.appService.getHello();
  }
}
