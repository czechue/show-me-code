import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import { Task } from './Task';

const ProjectSchema = new Schema({
    title: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    solutions: [{ type: Schema.Types.ObjectId, ref: 'Solution' }],
    createdAt: { type: Date, default: Date.now() },
    picture: String,
    skillCategory: String,
    filesUrl:String,
    repoUrl: String,
    tasks: [Task]
});

export const Project = mongoose.model('Project', ProjectSchema);