export interface Light{
    pin_id : number;
    name: string;
    status_on : boolean;
    updatedAt: Date;
}

export interface Pump{
    pin_id : number;
    name: string;
    status_on : boolean;
    updatedAt: Date;
}

export interface Fan{
    pin_id : number;
    name: string;
    status_on : boolean;
    updatedAt: Date;
}

export interface Misc{
    pin_id : number;
    name: string;
    status_on : boolean;
    updatedAt: Date;
}


export interface Zone{
    id? : string;
    name: string;
    temperature: number;
    humidity: number;
    light: {Light};
    pump: {Pump};
    fan: {Pump};
    misc: {Misc};
    createdAt? : Date;
    updatedAt? : Date;
}