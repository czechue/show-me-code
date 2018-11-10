import {
    authCurrentUser,
    authRedirect,
    authLogout
} from '../controllers/authCtr';
import passport from 'passport';

export const authRoutes = (app: any) => {
    app.get(
        '/auth/google',
        passport.authenticate('google', { scope: ['profile', 'email'] })
    );
    app.get(
        '/auth/google/callback',
        passport.authenticate('google'),
        authRedirect
    );
    app.get('/api/logout', authLogout);
    app.get('/api/current_user', authCurrentUser);
};
