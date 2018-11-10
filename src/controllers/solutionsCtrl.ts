import { Request, Response } from 'express';
import { Solution } from '../models/Solution';
import { Project } from '../models/Project';
import { User } from '../models/User';

export const getAllSolutions = async (
    req: Request,
    res: Response,
    next: Function
) => {
    const allSolutions = await Solution.find({});

    try {
        res.send(allSolutions);
    } catch (err) {
        next(err);
    }
};

export const createSolution = async (
    req: Request,
    res: Response,
    next: Function
) => {
    const {
        user,
        project,
        approved,
        waiting,
        createdAt,
        stack,
        tools,
        liveUrl,
        repoUrl,
        lsScore,
        intScore,
        tasksScore
    } = req.body;
    const solution = new Solution({
        user,
        project,
        approved,
        waiting,
        createdAt,
        stack,
        tools,
        liveUrl,
        repoUrl,
        lsScore,
        intScore,
        tasksScore
    });

    try {
        const projectSolution = await Project.findOneAndUpdate({_id: project}, {
            $push: { solutions: solution }
        });
        await User.findOneAndUpdate(user, { $push: { solutions: solution } });
        await solution.save();
        res.send(solution);
    } catch (err) {
        next(err);
    }
};