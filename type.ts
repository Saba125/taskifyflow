export type BoardWithTasks = {
  id: string;
  name: string;
  profileId: string;
  organizationId: string;
  color: string | null;
  createdAt: Date;
  updatedAt: Date;
  Tasks: {
    id: string;
    profileId: string;
    taskTitle: string;
    taskContent: string;
    completed: boolean;
    boardId: string;
    createdAt: Date;
    updatedAt: Date;
    // Include other necessary properties for tasks
  }[];
}[];
