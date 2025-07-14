
export interface Task {
  id: string;
  title: string;
  time: string;
}
export type RootStackParamList = {
  Dashboard: undefined;
  AddTask: undefined;
  GetStarted:undefined;
 
};
export interface FormValues {
  task: string;
  time: string;
}

export interface TaskFormProps {
  onAddTask: (task: FormValues) => void;
}