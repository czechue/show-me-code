import {getAllUsers, getUser} from '../controllers/usersCtrl';

const apiUserUrl = '/api/users';

export const userRoutes = (app: any) => {
    app.get(apiUserUrl, getAllUsers);
    app.get(`${apiUserUrl}/:id`, getUser);
};
