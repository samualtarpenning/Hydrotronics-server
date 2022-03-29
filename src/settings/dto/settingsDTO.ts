
import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsString } from "class-validator";


export class SettingsDTO{
    @IsString()
    @ApiProperty({type: String, description: "settings title"})
    readonly settings_title: string;

    // @IsBoolean()
    // @ApiProperty({type: Boolean, description: "settings title"})
    // readonly 
}

// export class SettingItemDTO{

// }