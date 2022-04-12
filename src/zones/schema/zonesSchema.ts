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

