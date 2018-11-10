import { Request, Response } from 'express';
import { Project } from '../models/Project';
import { Task } from '../models/Task';
import { User } from '../models/User';

export const getAllProjects = async (
    req: Request,
    res: Response,
    next: () => void
) => {
    const allProjects = await Project.find({}).populate({
        path: 'solutions',
        populate: {
            model: 'User',
            path: 'user',
            select: 'name'
        }
    });

    res.send(allProjects);
};

export const getProject = async (
    req: Request,
    res: Response,
    next: () => void
) => {
    const project = await Project.findOne({ _id: req.params.id }).populate({
        path: 'solutions',
        populate: {
            model: 'User',
            path: 'user'
        }
    });

    res.send(project);
};

export const getProjectSolutions = async (
    req: Request,
    res: Response,
    next: (err: any) => void
) => {
    const projectSolutions = await Project.findOne({ _id: req.params.id })
        .select('solutions')
        .populate({
            path: 'solutions',
            populate: {
                model: 'User',
                path: 'user'
            }
        });

    try {
        res.send(projectSolutions);
    } catch (err) {
        next(err);
    }
};

export const createProject = async (
    req: Request,
    res: Response,
    next: () => void
) => {
    const {
        createdAt,
        filesUrl,
        picture,
        repoUrl,
        skillCategory,
        tasks,
        title,
        user
    } = req.body;
    const newProject = new Project({
        createdAt,
        filesUrl,
        picture,
        repoUrl,
        skillCategory,
        tasks,
        title,
        user
    });

    try {
        await User.findByIdAndUpdate(user, {
            $push: { projects: newProject._id }
        });
        await newProject.save();
        res.send(newProject);
    } catch (err) {
        console.log(err);
        res.send(err);
    }
};

export const updateProject = async (
    req: Request,
    res: Response,
    next: (err: any) => void
) => {
    const { id } = req.params;

    try {
        await Project.findByIdAndUpdate(id, req.body);
        const updatedProject = await Project.findById(id);
        res.send(updatedProject);
    } catch (err) {
        next(err);
    }
};

export const deleteProject = async (
    req: Request,
    res: Response,
    next: (err: any) => void
) => {
    const { id } = req.params;

    // need to find the User who created the project and remove it


    try {
        const removedProject = await Project.findByIdAndRemove(id);
        res.send(removedProject);
    } catch (err) {
        next(err);
    }
};