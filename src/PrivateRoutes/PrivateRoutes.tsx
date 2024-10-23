import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TeacherContext } from "../context/Teacher";

type Props = {
  children: React.ReactNode;
};

const PrivateRoutes = ({ children }: Props) => {
  const teacherContext = useContext(TeacherContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (teacherContext?.state.isSignUp === false) {
      navigate("/"); // Redirect to the home page if not signed up
    }
  }, [teacherContext?.state.isSignUp, navigate]); // Re-run when isSignUp changes

  if (teacherContext?.state.isSignUp) {
    return <>{children}</>; // Render children if signed up
  }

  return null; // Or render a fallback (like a loader) until the redirect happens
};

export default PrivateRoutes;
