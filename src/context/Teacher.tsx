import React, { createContext, useState } from "react";
import { Teacher } from "./TeacherInterface";
import { TeacherContextType } from "./TeacherContextType";

const initialTeacherState: Teacher = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: null,
  isSignUp: false,
};

interface contextPropsType {
  children: React.ReactNode;
}

export const TeacherContext = createContext<TeacherContextType | null>(null);

export const TeacherProvider = ({ children }: contextPropsType) => {
  const [state, setState] = useState<Teacher>(initialTeacherState);
  const setFirstName = (firstName: string) =>
    setState((prevState) => ({ ...prevState, firstName }));
  const setLastName = (lastName: string) =>
    setState((prevState) => ({ ...prevState, lastName }));
  const setEmail = (email: string) =>
    setState((prevState) => ({ ...prevState, email }));
  const setPhoneNumber = (phoneNumber: number) =>
    setState((prevState) => ({ ...prevState, phoneNumber }));
  const setSignUp = (isSignUp:boolean)=>
    setState((prevState)=>({...prevState,isSignUp}))
  

  return (
    <TeacherContext.Provider
      value={{ state, setFirstName, setLastName, setEmail, setPhoneNumber ,setSignUp }}
    >
      {children}
    </TeacherContext.Provider>
  );
};
