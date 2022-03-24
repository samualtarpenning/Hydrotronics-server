
import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";


export class SettingsDTO{
    @IsString()
    @ApiProperty({type: String, description: "settings title"})
    readonly settings_title: string;
}

// export class SettingItemDTO{

// }