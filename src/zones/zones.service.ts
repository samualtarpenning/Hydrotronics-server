import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { zonesDTO } from './dto/zonesDTO';
import { Zone } from './interface/zonesInterface';
import {Model} from "mongoose"
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ZonesService {
    constructor(@InjectModel('Zone') private readonly zonesModel:Model<Zone>){}

    //create zone
    async createZone(zone: zonesDTO):Promise<Zone | {}>{
        // check if zone name exist and return error
        let zoneExist = await this.zonesModel.findOne({ name: zone.name })
        
        if( zoneExist ===  null){
            //zone name does not exist, create zone
            console.log({zoneExist})
            const newZone =new this.zonesModel(zone)
            return await newZone.save()
        }
        
        //throw error, zone name exist
        return {
            status: "error",
            code: "401",
            message: "Zone name exist"
        }
        
    }

}
