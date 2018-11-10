import { Request, Response } from 'express';

export const authRedirect = async (
    req: Request,
    res: Response,
    next: Function
) => {
    res.redirect('/api/projects');
};

export const authLogout = async (
    req: Request,
    res: Response,
    next: Function
) => {
    req.logout();
    res.redirect('/');
};

export const authCurrentUser = async (
    req: Request,
    res: Response,
    next: Function
) => {
    res.send(req.user);
};
