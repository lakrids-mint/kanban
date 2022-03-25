export interface Task {
    id: string;
    name: string; 
    status: 'BACKLOG' |'DOING'| 'DONE'
  }