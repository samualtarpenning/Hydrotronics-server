import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import keys from './config/keys';
import { SettingsModule } from './settings/settings.module';
import { ConfigModule } from '@nestjs/config';
import { configuration } from './config/configuration';

@Module({
  imports: [ConfigModule.forRoot({ 
    envFilePath: `${process.cwd()}/config/env/${process.env.NODE_ENV}.env`,
    load: [configuration] 
 }), 
 MongooseModule.forRoot(process.env.NODE_ENV === "development" ? keys.development.mongoUri : keys.production.mongoUri), 
 AuthModule, 
 SettingsModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
