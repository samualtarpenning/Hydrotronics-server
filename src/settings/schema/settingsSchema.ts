import * as mongoose from 'mongoose'


export const SettingValueSchema = new mongoose.Schema({
    duration: Number
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updatedAt'} })


export const SettingSchema = new mongoose.Schema({
    settings_title: String,
    settings_value: [SettingValueSchema]
    
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updatedAt'} })

