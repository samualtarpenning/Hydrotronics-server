import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsBoolean, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";


//
export class servicesDTO{ 
    @IsString()
    @ApiProperty({type: String, description: "zone service name name, eg: light"})
    readonly name: string;
    @IsNumber()
    @ApiProperty({type: Number, description: "zone service id: eg 1, 2"})
    readonly pin_id: number;
}

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
}


export class editZoneDTO{
    @IsString()
    @ApiProperty({type: String, description: "zone name"})
    @IsOptional()
    readonly name: string;

    @IsNumber()
    @ApiProperty({type: Number, description: "zone temperature"})
    @IsOptional()
    readonly temperature: number;

    @IsNumber()
    @ApiProperty({type: Number, description: "zone humidity"})
    @IsOptional()
    readonly humidity: number;

}