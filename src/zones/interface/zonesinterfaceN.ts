
export interface ZoneN{
    id? : string;
    name: string;
    temperature: number;
    humidity: number;
    Services: [Service?] 
    active: boolean;
    createdAt? : Date;
    updatedAt? : Date;
}

//another group name for light, pump, etc
// so as to avoid confusion with settings module
export interface Service{
    id? : string;
    name: string;
    pin_id: number;
    status_on: boolean;
    createdAt? : Date;
    updatedAt? : Date;
}


