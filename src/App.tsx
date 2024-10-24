import { TeacherContext } from "./context/Teacher";
import { useContext } from "react";
import Signup from "./Pages/Signup";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { TeacherProvider } from "./context/Teacher";
import TeacherData from "./Pages/TeacherData";
import { Provider } from "react-redux";
import { store } from "./Store/store";
import "./App.css";
import StudentData from "./Pages/StudentData";
import { useGetRole } from "./customHooks/getLocalData";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import StudentRoutes from "./RoleRoutes/StudentRole";
import TeacherRoutes from "./RoleRoutes/TeacherRole";

function App() {
  const teacherContext = useContext(TeacherContext);
  const data = useGetRole("data");
  const role = data?.split(" ")[0];

  console.log(role);

  // useEffect(() => {
  //   console.log("Data:", data);
  //   console.log("Role:", role);
  // }, [data, role]);

  return (
    <div className="">
      <Provider store={store}>
        <BrowserRouter>
          <TeacherProvider>
            {/* {data ? (
              <Routes>
                {role === "Student" ? (
                  <Route path="/studentdata" element={<StudentData />} />
                ) : (
                  <Route path="/teacherdata" element={<TeacherData />} />
                )}
              </Routes>
            ) : (
              <Routes>
                <Route path="/" element={<Signup />} />
              </Routes>
            )} */}
            <Routes>
              <Route
                path="/"
                element={
                  role === "Teacher" ? 
                  (
                    
                    <Navigate to="/teacherdata" />
                  ) : role === "Student" ? (
                    <Navigate to="/studentdata" />
                  ) : (
                    <Navigate to="/signup" />
                  )
                } />
              <Route path="/signup" element={<Signup />} />
              <Route
                path="/studentdata"
                element={
                  <PrivateRoutes>
                    <StudentRoutes>
                      <StudentData />
                    </StudentRoutes>
                  </PrivateRoutes>
                }
              />
              <Route
                path="/teacherdata"
                element={
                  <PrivateRoutes>
                    <TeacherRoutes>
                      <TeacherData />
                    </TeacherRoutes>
                  </PrivateRoutes>
                }
              />
            </Routes>
          </TeacherProvider>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
