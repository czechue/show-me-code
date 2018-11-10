import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const Task = new Schema({
    taskTitle: String,
    content: String,
    points: Number
});