import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { zonesDTO, editZoneDTO } from './dto/zonesDTO';
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
    //get all zones
     async getAllZones():Promise<Zone[] | null>{
        return await this.zonesModel.find();
    }
    //get specific zone by id
    async getAZone(id: string):Promise<Zone | null>{
        let zoneFound = await this.zonesModel.findOne({_id : id});
        if(zoneFound == null || zoneFound == undefined || !zoneFound){
            throw new NotFoundException('Zone not found.');
        }
        return zoneFound;
    }
    //edit zone
    async editZone(id:string, body: editZoneDTO):Promise<Zone | null>{
        let zoneFound = await this.zonesModel.findOne({_id : id});
        if(zoneFound == null || zoneFound == undefined || !zoneFound){
            throw new NotFoundException('Zone not found.');
        }
        let editedZone =await this.zonesModel.findByIdAndUpdate(
            id,
            { $set: body },
            { new: true }
          );
          return editedZone
    }

    //delete zone
    async deleteZone(id:string):Promise<any>{
        return await this.zonesModel.findByIdAndRemove(id);
    }

    



    

    










}
