export interface Solution {
  createdAt: string;
  stack: Array<string>;
  tools: Array<string>;
  _id: string;
  user: {
    _id: string;
    name: string;
  };
  project: string;
  approved: boolean;
  waiting: boolean;
  liveUrl: string;
  repoUrl: string;
  lsScore: number;
  intScore: number;
  tasksScore: number;
  __v: number;
}

export interface ProjectSolutions {
  solutions: Array<Solution>;
  _id: string;
}
