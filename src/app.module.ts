import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import keys from './config/keys';
import { SettingsModule } from './settings/settings.module';

@Module({
  imports: [MongooseModule.forRoot("mongodb+srv://hydromanager:G$zy9uwF6UHtn!i@hydro.8dhb5.mongodb.net/hydro_dev?retryWrites=true&w=majority"), AuthModule, SettingsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
