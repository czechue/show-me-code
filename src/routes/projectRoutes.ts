import {
    createProject,
    getAllProjects,
    getProject,
    getProjectSolutions,
    updateProject,
    deleteProject
} from '../controllers/projectsCtrl';

const apiProjectsUrl = '/api/projects';

export const projectRoutes = (app: any) => {
    app.get(apiProjectsUrl, getAllProjects);
    app.get(`${apiProjectsUrl}/:id`, getProject);
    app.get(`${apiProjectsUrl}/:id/solutions`, getProjectSolutions);
    app.post(`${apiProjectsUrl}`, createProject);
    app.put(`${apiProjectsUrl}/:id`, updateProject);
    app.delete(`${apiProjectsUrl}/:id`, deleteProject);
};
