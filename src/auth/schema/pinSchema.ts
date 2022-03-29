import * as mongoose from 'mongoose'


export const PinSchema = new mongoose.Schema({
    pin: [Number],
    pinCheck : String, 
    active: {type: Boolean, default: true},
    last_login: { type: Date, default: Date.now }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updatedAt'} })

