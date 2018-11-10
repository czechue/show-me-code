import { createSolution, getAllSolutions } from '../controllers/solutionsCtrl';

const apiSolutionsUrl = '/api/solutions';

export const solutionRoutes = (app: any) => {
    app.get(apiSolutionsUrl, getAllSolutions);
    app.post(apiSolutionsUrl, createSolution);
};
