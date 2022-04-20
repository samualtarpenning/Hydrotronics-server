import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiBody, ApiNotAcceptableResponse, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { editZoneDTO, zonesDTO } from './dto/zonesDTO';
import { Zone } from './interface/zonesInterface';
import { ZonesService } from './zones.service';

@Controller('zones')
export class ZonesController {
    constructor(private readonly zonesService: ZonesService){}

// ZONES : 
// create zone   	 	/zones/createzone 
    @UseGuards(AuthGuard('jwt'))
    @Post('/createzone')
    @ApiUnauthorizedResponse({description : "invalid credentials"})
    @ApiBody({type: zonesDTO})
    @ApiBearerAuth()
    async createAZone(@Body() body: zonesDTO):Promise<Zone | {}>{
            return await this.zonesService.createZone(body);
    }

// edit zone		/zone/editzone/:zoneID
    @UseGuards(AuthGuard('jwt'))
    @Put('/editzone/:id')
    @ApiUnauthorizedResponse({description : "invalid credentials"})
    @ApiNotAcceptableResponse({description : "You cannot edit a non existent zone"})
    @ApiBearerAuth()
    async editzone(@Param('id') id, @Body() body: editZoneDTO):Promise<Zone>{
        return await this.zonesService.editZone(id, body);
    }


// view all zones		/zones/viewall
    @UseGuards(AuthGuard('jwt'))
    @Get("/getallzones")
    @ApiUnauthorizedResponse({description : "invalid credentials"})
    @ApiBearerAuth()
    async viewall():Promise<Zone[]>{
        return await this.zonesService.getAllZones()
    }

// view specific zone  	/zone/zonedetail/:zoneID
    @UseGuards(AuthGuard('jwt'))
    @Get('/zonedetail/:id')
    @ApiUnauthorizedResponse({description : "invalid credentials"})
    @ApiBearerAuth()
    async getAZone(@Param('id') id):Promise<Zone>{
        return await this.zonesService.getAZone(id)
    }

// delete zone  		/zone/deletezone/:zoneID  
    @UseGuards(AuthGuard('jwt'))
    @Delete('/deletezone/:id')
    @ApiUnauthorizedResponse({description : "invalid credentials"})
    @ApiBearerAuth()
    async deleteAZone(@Param('id') id):Promise<Zone>{
        return await this.zonesService.deleteZone(id)
    }

// ZONE SERVICE:
// @description add new service to a zone: eg add light
// add service: 		/zone/:zoneID/createservice

// @edit edit existing service in an existing zone: eg edit light in zoneA
// Edit service: 		/zone/:zoneID/editservice/:serviceid

// @delete: delete existing service in an existing zone: eg edit light in zoneA
// Edit service: 		/zone/:zoneID/deleteservice/:serviceid
    
   
    
       
}
