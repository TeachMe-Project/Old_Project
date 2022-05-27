import * as React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Dashboard from "./Dashboard";
import MyCourses from "./MyCourses";
import MyTeachers from "./MyTeachers";
import Settings from "./Settings";
import StudentProfile from "./StudentProfile";
import { Course } from "./Course";
import Signup from "../../Signup/Signup";
import StudentSignup from "../../Signup/StudentSignup";
import TeacherSignup from "../../Signup/TeacherSignup";
import InstituteSignup from "../../Signup/InstituteSignup";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Dashboard />,
  },
  {
    path: "/mycourses",
    main: () => <MyCourses />,
  },
  {
    path: "/myteachers",
    main: () => <MyTeachers />,
  },
  {
    path: "/settings",
    main: () => <Settings />,
  },
  {
    path: "/userprofile",
    main: () => <StudentProfile />,
  },
  {
    path: "/course",
    main: () => <Course />,
  },
  {
    path: "/signup",
    exact: true,
    main: () => <Signup />,
  },
  {
    path: "/studentSignup",
    exact: true,
    main: () => <StudentSignup />,
  },
  {
    path: "/teacherSignup",
    exact: true,
    main: () => <TeacherSignup />,
  },
  {
    path: "/instituteSignup",
    exact: true,
    main: () => <InstituteSignup />,
  },
];

export default function MainPanel() {
  return (
    <div className="MainPanel">
    <Routes>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          caseSensitive={route.exact}
          element={<route.main />}
        />
      ))}
    </Routes>
    </div>
  );
}

