
export interface Task {
  id: string;
  title: string;
  time: string;
}
export type RootStackParamList = {
  Dashboard: undefined;
  AddTask: undefined;
  GetStarted:undefined;
  Login:undefined;
  Registration:undefined
 
};
export interface FormValues {
  task: string;
  time: string;
}
export interface RegistrationValues {
  name:string;
  email: string;
  password: string;
  confirmPassword:string

}
export interface LoginValues {
  email: string;
  password: string;
 

}

export interface TaskFormProps {
  onAddTask: (task: FormValues) => void;
}