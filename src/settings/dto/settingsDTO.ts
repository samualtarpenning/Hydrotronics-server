
import { IsString } from "class-validator";

export class SettingsDTO{
    
    @IsString()
    readonly settings_title: string;
}

// export class SettingItemDTO{

// }