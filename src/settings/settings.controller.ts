import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { SettingsDTO } from './dto/settingsDTO';
import { Setting } from './interface/settingsInterface';
import { SettingsService } from './settings.service';

@Controller('settings')
export class SettingsController {
    constructor(private readonly settingsService: SettingsService){}

// get all settings 
@UseGuards(AuthGuard('jwt'))
@Get()
    async getAllSettings():Promise<Setting[]>{
        return await this.settingsService.getAllSettings()
    }

// get a specific setting
@UseGuards(AuthGuard('jwt'))
@Get(':title')
    async getASettings(@Param('title') title):Promise<Setting>{
        return await this.settingsService.getASettings(title)
    }

//create a setting 
@UseGuards(AuthGuard('jwt'))
@Post()
    async createASetting(@Body() body: SettingsDTO):Promise<Setting>{
        return await this.settingsService.createSetting(body);
    }

//delete a setting
@UseGuards(AuthGuard('jwt'))

@Delete(":title")
    deleteAsetting(@Param('title') title):Promise<Setting>{
        return this.settingsService.delete(title)
    }


//edit a setting 
// @UseGuards(AuthGuard('jwt'))
// @Put(":title")
//     async editASetting(@Body() settingDto: SettingsDTO, @Param('title') title):Promise<Setting> {
//         return this.settingsService.update(title, settingDto.settings_title)
//     }

//create a setting item
//updating a setting item
//get a setting item








}
