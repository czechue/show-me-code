import { Project } from './project.model';
import { Solution } from './solution.model';

export interface User {
  id: string;
  googleId: string;
  name: string;
  projects: [Project];
  solutions: [Solution];
}
