import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import Dashboard from "./Dashboard";
import MyCourses from "./MyCourses";
import MyTeachers from "./MyTeachers";
import Settings from "./Settings";

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
];

export default function MainPanel() {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          element={<route.main />}
        />
      ))}
    </Routes>
  );
}

