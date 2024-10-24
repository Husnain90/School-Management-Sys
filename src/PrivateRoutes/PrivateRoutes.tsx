import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useGetRole } from "../customHooks/getLocalData";

type Props = {
  children: React.ReactNode;
};

const PrivateRoutes = ({ children }: Props) => {
  const data = useGetRole("data");

  return data?.split(" ")[1] === "true" ? <>{children}</> : <Navigate to="/" />;
};

export default PrivateRoutes;
