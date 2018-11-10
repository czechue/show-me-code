import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const SolutionSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    project: { type: Schema.Types.ObjectId, ref: 'Project' },
    approved: Boolean,
    waiting: Boolean,
    createdAt: { type: Date, default: Date.now() },
    stack: [String],
    tools: [String],
    liveUrl: String,
    repoUrl: String,
    lsScore: Number,
    intScore: Number,
    tasksScore: Number
});

export const Solution = mongoose.model('Solution', SolutionSchema);