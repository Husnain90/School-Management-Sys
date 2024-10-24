import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useGetRole } from "../customHooks/getLocalData";

type Props = {
  children: React.ReactNode;
};

const TeacherRoutes = ({ children }: Props) => {
  const data = useGetRole("data");

  return data?.split(" ")[0] === "Teacher" ? <>{children}</> : <Navigate to="/" />;
};

export default TeacherRoutes;
