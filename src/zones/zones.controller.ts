import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiBody, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { zonesDTO } from './dto/zonesDTO';
import { Zone } from './interface/zonesInterface';
import { ZonesService } from './zones.service';

@Controller('zones')
export class ZonesController {
    constructor(private readonly zonesService: ZonesService){}

    //create zone
    @UseGuards(AuthGuard('jwt'))
    @Post('/createzone')
    @ApiUnauthorizedResponse({description : "invalid credentials"})
    @ApiBody({type: zonesDTO})
    @ApiBearerAuth()
    async createASetting(@Body() body: zonesDTO):Promise<Zone | {}>{
            return await this.zonesService.createZone(body);
    }

    //get all zones
    @UseGuards(AuthGuard('jwt'))
    @Get("/getallzones")
    @ApiUnauthorizedResponse({description : "invalid credentials"})
    @ApiBearerAuth()
    async getAllZones():Promise<Zone[]>{
        return await this.zonesService.getAllZones()
    }



    
}
