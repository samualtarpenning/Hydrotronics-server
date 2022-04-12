export interface Setting{
    id? : string;
    settings_title: string;
    settings_values: [SubSetting?];
    created_at?: Date;
    updatedAt?: Date;
}

export interface SubSetting{
    id? : string;
    duration: Number
    createdAt? : Date;
    updatedAt? : Date;
}