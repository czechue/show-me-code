import { Request, Response } from 'express';
import { User } from '../models/User';

export const getAllUsers = async (
    req: Request,
    res: Response,
    next: Function
) => {
    const allUsers = await User.find({}).select('name');

    try {
        res.send(allUsers);
    } catch (err) {
        next(err);
    }
};

export const getUser = async (req: Request, res: Response, next: Function) => {
    const user = await User.findOne({ _id: req.params.id }).populate([
        {
            path: 'solutions',
            model: 'Solution'
        },
        {
            path: 'projects',
            model: 'Project'
        }
    ]);

    try {
        res.send(user);
    } catch (err) {
        next(err);
    }
};
