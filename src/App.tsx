import { TeacherContext } from "./context/Teacher";
import { useContext } from "react";
import Signup from "./Pages/Signup";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { TeacherProvider } from "./context/Teacher";
import TeacherData from "./Pages/TeacherData";
import { Provider } from "react-redux";
import { store } from "./Store/store";
import "./App.css";

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
              <Route path="/teacherdata" element={<TeacherData />} />
            </Routes>
          </TeacherProvider>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
