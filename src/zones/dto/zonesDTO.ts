
import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNumber, IsString } from "class-validator";


export class zonesDTO{
    @IsString()
    @ApiProperty({type: String, description: "zone name"})
    readonly name: string;

    @IsNumber()
    @ApiProperty({type: Number, description: "zone temperature"})
    readonly temperature: number;

    @IsNumber()
    @ApiProperty({type: Number, description: "zone humidity"})
    readonly humidity: number;

    @ApiProperty({type: Object, description: "light values like pin_id, name and updated at"})
    readonly light:object

    @ApiProperty({type: Object, description: "pump values like pin_id, name and updated at"})
    readonly pump:object

    @ApiProperty({type: Object, description: "fan values like pin_id, name and updated at"})
    readonly fan:object

    @ApiProperty({type: Object, description: "misc values like pin_id, name and updated at"})
    readonly misc:object
}

