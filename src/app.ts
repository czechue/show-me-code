import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import passport from 'passport';
const cookieSession = require('cookie-session');
const keys = require('./config/keys');

// Routes
import { projectRoutes } from './routes/projectRoutes';
import { solutionRoutes } from './routes/solutionRoutes';
import { userRoutes } from './routes/userRoutes';
import { authRoutes } from './routes/authRoutes';

require('./services/passport');

mongoose.Promise = global.Promise;
if (process.env.NODE_ENV !== 'test') {
    mongoose.connect(
        keys.mongoURI,
        { useNewUrlParser: true }
    );
}
const app = express();

app.use(bodyParser.json());

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);
userRoutes(app);
projectRoutes(app);
solutionRoutes(app);

// error handler
app.use((err: Error, req: Request, res: Response, next: Function) => {
    res.status(422).send({ error: err.message });
});

export default app;
