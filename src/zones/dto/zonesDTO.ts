
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsBoolean, IsNumber, IsString, ValidateNested } from "class-validator";

class Light{
    readonly pin: number
    readonly name: string
    readonly updatedAt: Date
}
class Pump{
    readonly pin: number
    readonly name: string
    readonly updatedAt: Date
}
class Fan{
    readonly pin: number
    readonly name: string
    readonly updatedAt: Date
}

class Misc{
    readonly pin: number
    readonly name: string
    readonly updatedAt: Date
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

    @Type(() => Light)
    @ValidateNested()
    @ApiProperty({type: Object, description: "light values like pin_id, name and updated at"})
    readonly light:Light

    @Type(() => Pump)
    @ValidateNested()
    @ApiProperty({type: Object, description: "pump values like pin_id, name and updated at"})
    readonly pump:Pump

    @Type(() => Fan)
    @ValidateNested()
    @ApiProperty({type: Object, description: "fan values like pin_id, name and updated at"})
    readonly fan:Fan

    @Type(() => Misc)
    @ValidateNested()
    @ApiProperty({type: Object, description: "misc values like pin_id, name and updated at"})
    readonly misc:Misc
}

