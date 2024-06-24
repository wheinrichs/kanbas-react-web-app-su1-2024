export interface Assignment {
    _id: string;
    title: string;
    description: string;
    course: string;
    due: string;
    available: string;
    points: number;
  }
  
  export interface AssignmentsState {
    assignments: Assignment[];
  }