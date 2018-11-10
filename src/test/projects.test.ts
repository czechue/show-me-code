import request, { Response } from 'supertest';
import mongoose, { Schema } from 'mongoose';
import app from '../app';
import { Project } from '../models/Project';
import { Task } from '../models/Task';
import { Solution } from '../models/Solution';
import { User } from '../models/User';

let mockProject = {
    title: 'Nice Title'
};

let mockSolution = {
    approved: true
};

let mockUser = { name: 'Joe' };

beforeAll(done => {
    mongoose.connect(
        'mongodb://localhost/test-nice-code',
        { useNewUrlParser: true }
    );
    mongoose.connection.once('open', () => done()).on('error', () => {
        console.warn('Warning', Error);
    });
});

beforeEach(done => {
    const { projects, solutions, users } = mongoose.connection.collections;
    projects.drop(() => {
        solutions.drop(() => {
            users.drop(() => {
                done();
            });
        });
    });
});

describe('Projects Routes:', () => {
    it('/api/projects GET - should return 200 OK', done => {
        return request(app)
            .get('/api/projects')
            .expect(200, done);
    });

    it('/api/projects/:id GET - should return 200 OK', done => {
        const project = new Project({ title: 'Lol' });
        return request(app)
            .get('/api/projects/' + project._id)
            .expect(200, done);
    });

    it('/api/projects/:id GET - should return project with proper title', done => {
        const project = new Project(mockProject);

        project.save().then(() => {
            request(app)
                .get('/api/projects/' + project._id)
                .end((err: Error, res: Response) => {
                    expect(res.body.title).toBe('Nice Title');
                    done();
                });
        });
    });
});

describe('Associations', () => {
    let project: any, solution: any, userJoe: any;

    beforeEach(done => {
        userJoe = new User(mockUser);
        project = new Project(mockProject);
        solution = new Solution(mockSolution);

        project.solutions.push(solution);
        project.user = userJoe;
        solution.user = userJoe;
        solution.project = project;
        userJoe.projects.push(project);
        userJoe.solutions.push(solution);

        Promise.all([project.save(), solution.save(), userJoe.save()]).then(
            () => {
                done();
            }
        );
    });

    it('project saves a relation between user and solutions', done => {
        Project.findOne({ title: 'Nice Title' })
            .populate([
                { path: 'solutions', model: 'Solution' },
                {
                    path: 'user',
                    model: 'User',
                    populate: [
                        { path: 'solutions', model: 'Solution' },
                        { path: 'projects', model: 'Project' }
                    ]
                }
            ])
            .then((project: any) => {
                if (project) {
                    console.log(project.user.projects);
                    expect(project.solutions[0].approved).toBe(true);
                    expect(project.user.name).toBe('Joe');
                    done();
                }
            });
    });
});
