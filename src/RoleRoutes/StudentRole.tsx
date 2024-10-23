import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useGetRole } from "../customHooks/getLocalData";

type Props = {
  children: React.ReactNode;
};

const StudentRoutes = ({ children }: Props) => {
  const data = useGetRole("data");

  return data?.split(" ")[0] === "Student" ? <>{children}</> : <Navigate to="/" />;
};

export default StudentRoutes;
