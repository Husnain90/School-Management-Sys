import { Teacher } from "./TeacherInterface";

export interface TeacherContextType {
  state: Teacher;
  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
  setEmail: (email: string) => void;
  setPhoneNumber: (phoneNumber: number) => void;
  setSignUp: (isSignUp: boolean) => void;
}

