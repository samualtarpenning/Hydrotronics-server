import { Module } from '@nestjs/common';
import { ZonesController } from './zones.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ZoneSchema } from './schema/zonesSchema';
import {ZonesService} from './zones.service';


@Module({
  imports: [MongooseModule.forFeature([{name: 'Zone', schema: ZoneSchema}])],
  controllers: [ZonesController],
  providers: [ZonesService]
})
export class ZonesModule {}
