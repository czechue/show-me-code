import { Project } from './project.model';

export interface State {
  projects: Project[] | undefined;
}
