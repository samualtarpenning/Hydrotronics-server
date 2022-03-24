import { Injectable, NotFoundException } from '@nestjs/common';
import { SettingsDTO } from './dto/settingsDTO';
import {Model} from "mongoose"
import { InjectModel } from '@nestjs/mongoose';
import { Setting, SubSetting } from './interface/settingsInterface';
// import {SettingsDTO} from "dto/SettingsDTO";
@Injectable()
export class SettingsService {
    constructor(@InjectModel('Setting') private readonly settingsModel:Model<Setting>){}

    //get all settings 
    async getAllSettings():Promise<Setting[] | null>{
        return await this.settingsModel.find();
    }

    //get setting by id
    async getASettings(settings_title: string):Promise<Setting | null>{
        let settingFound = await this.settingsModel.findOne({settings_title : settings_title});
        if(settingFound == null || settingFound == undefined || !settingFound){
            throw new NotFoundException('Post not found.');
        }
        return settingFound;
    }

    //create setting
    async createSetting(setting: SettingsDTO):Promise<Setting>{
        const newSetting =new this.settingsModel(setting)
        return await newSetting.save()
    }

    //remove setting
    async delete(title: string):Promise<Setting> {
        return await this.settingsModel.findOneAndDelete({settings_title : title})
    }


    //update setting by Id
    async update(settings_title:string, setting: Setting):Promise<Setting>{
        let settingFound = await this.settingsModel.findOne({settings_title : settings_title});
        if(settingFound == null || settingFound == undefined || !settingFound){
            throw new NotFoundException('Post not found.');
        }
        return await this.settingsModel.findOneAndUpdate({settings_title: settings_title}, {setting}, {new:true})
         
    }








}
