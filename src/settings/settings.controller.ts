import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiBody, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { SettingsDTO } from './dto/settingsDTO';
import { Setting } from './interface/settingsInterface';
import { SettingsService } from './settings.service';

@Controller('settings')
export class SettingsController {
    constructor(private readonly settingsService: SettingsService){}

// get all settings 
@UseGuards(AuthGuard('jwt'))
@Get("/getsettings")
@ApiUnauthorizedResponse({description : "invalid credentials"})
@ApiBearerAuth()
    async getAllSettings():Promise<Setting[]>{
        return await this.settingsService.getAllSettings()
    }

// get a specific setting
@UseGuards(AuthGuard('jwt'))
@Get('/getsetting/:id')
@ApiUnauthorizedResponse({description : "invalid credentials"})
@ApiBearerAuth()
    async getASettings(@Param('id') id):Promise<Setting>{
        return await this.settingsService.getASettings(id)
    }

//create a setting 
@UseGuards(AuthGuard('jwt'))
@Post('/createsetting')
@ApiUnauthorizedResponse({description : "invalid credentials"})
@ApiBody({type: SettingsDTO})
@ApiBearerAuth()
    async createASetting(@Body() body: SettingsDTO):Promise<Setting>{
        return await this.settingsService.createSetting(body);
    }

//delete a setting
@UseGuards(AuthGuard('jwt'))
@ApiUnauthorizedResponse({description : "invalid credentials"})
@Delete("/removesetting/:id")
@ApiBearerAuth()
    deleteAsetting(@Param('id') id):Promise<Setting>{
        return this.settingsService.delete(id)
    }


//edit a setting 
// @UseGuards(AuthGuard('jwt'))
// @ApiBody({type: SettingsDTO})
// @Put(":title")
//     async editASetting(@Body() settingDto: SettingsDTO, @Param('title') title):Promise<Setting> {
//         return this.settingsService.update(title, settingDto.settings_title)
//     }

//create a setting item
//updating a setting item
//get a setting item








}
