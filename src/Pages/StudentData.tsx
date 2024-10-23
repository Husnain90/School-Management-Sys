import React from "react";
import { RootState } from "../Store/store";
import { useSelector } from "react-redux";

type Props = {};

const StudentData = (props: Props) => {
  const student = useSelector((state: RootState) => state.student);
  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <div>
        Your first name is <strong>{student.firstName}</strong>
      </div>
      <div>
        Your last name is <strong>{student.lastName}</strong>
      </div>
      <div>
        Your Email is <strong>{student.email}</strong>
      </div>
      <div>
        Your phone number is <strong>{student.phoneNumber}</strong>
      </div>
      <div>
        You are a <strong>Student</strong>
      </div>
    </div>
  );
};

export default StudentData;
