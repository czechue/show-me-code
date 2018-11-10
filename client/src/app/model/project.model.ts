import { Solution } from './solution.model';
import { Task } from './task.model';

export type Project = {
  _id: string;
  __v: number;
} & ProjectRequest;

export interface ProjectRequest {
  title: string;
  user?: string;
  createdAt?: string;
  picture: string;
  skillCategory: string;
  filesUrl: string;
  repoUrl: string;
  tasks: Array<Task>;
  solutions?: Array<Solution>;
}
