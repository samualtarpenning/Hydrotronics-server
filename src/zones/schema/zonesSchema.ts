import * as mongoose from 'mongoose'

export const ZoneSchema = new mongoose.Schema({
    name : {type: String},
    active: {type: Boolean, default: true},
    light: {
        pin_id: Number,
        name : {type: String},
        status_on: {type: Boolean, default: false},
        updatedAt: Date
    },
    pump: {
        pin_id: Number,
        name : {type: String},
        status_on: {type: Boolean, default: false},
        updatedAt: Date
    },
    fan: {
        pin_id: Number,
        name : {type: String},
        status_on: {type: Boolean, default: false},
        updatedAt: Date
    },
    misc: {
        pin_id: Number,
        name : {type: String},
        status_on: {type: Boolean, default: false},
        updatedAt: Date
    },
    temperature: Number,
    humidity: Number,
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updatedAt'} })



// i user service but we can rename it. (light, pump, etc)
export const ServiceSchema = new mongoose.Schema({
    name : {type: String},
    pin_id: Number,
    status_on: {type: Boolean, default: false},
    //i removed updated_at because it will be automatically added by mongoose
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updatedAt'} })

export const ZoneSchemaN = new mongoose.Schema({
    name : {type: String},
    active: {type: Boolean, default: true},
    services: [ServiceSchema], // services like light, pump etc
    temperature: Number,
    humidity: Number,
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updatedAt'} })

