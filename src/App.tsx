import { TeacherContext } from "./context/Teacher";
import { useContext } from "react";
import Signup from "./Pages/Signup";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { TeacherProvider } from "./context/Teacher";
import TeacherData from "./Pages/TeacherData";
import { Provider } from "react-redux";
import { store } from "./Store/store";
import "./App.css";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import TeacherRoutes from "./RoleRoutes/TeacherRole";
import StudentRoutes from "./RoleRoutes/StudentRole";
import StudentData from "./Pages/StudentData";

function App() {
  const teacherContext = useContext(TeacherContext);
  console.log("in the app", teacherContext?.state);
  return (
    <div className="">
      <Provider store={store}>
        <BrowserRouter>
          <TeacherProvider>
            <Routes>
              <Route path="/" element={<Signup />} />
              <Route path="/app" element={<App />} />
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
            </Routes>
          </TeacherProvider>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
