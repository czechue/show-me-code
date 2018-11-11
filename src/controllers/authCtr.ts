import { Request, Response } from 'express';

export const authRedirect = async (
    req: Request,
    res: Response,
    next: Function
) => {
    res.redirect('/projects');
};

export const authLogout = async (
    req: any,
    res: Response,
    next: Function
) => {
    req.logout();
    res.redirect('/');
};

export const authCurrentUser = async (
    req: any,
    res: Response,
    next: Function
) => {
    res.send(req.user);
};
