import * as mongoose from 'mongoose'


// i user service but we can rename it. (light, pump, etc)
export const ServiceSchema = new mongoose.Schema({
    name : {type: String},
    pin_id: Number,
    status_on: {type: Boolean, default: false},
    //i removed updated_at because it will be automatically added by mongoose
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updatedAt'} })

export const ZoneSchema = new mongoose.Schema({
    name : {type: String},
    active: {type: Boolean, default: true},
    services: [ServiceSchema], // services like light, pump etc
    temperature: Number,
    humidity: Number,
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updatedAt'} })

