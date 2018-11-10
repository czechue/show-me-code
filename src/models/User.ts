import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    googleId: String,
    name: String,
    projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }],
    solutions: [{ type: Schema.Types.ObjectId, ref: 'Solution' }]
});

export const User = mongoose.model('User', UserSchema);