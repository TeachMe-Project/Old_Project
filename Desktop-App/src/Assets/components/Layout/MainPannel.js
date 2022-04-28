import StudentDashboard from "./StudentDashboard"
import {BrowserRouter as Router,Routes,Route,Link,useParams,useRouteMatch} from "react-router-dom";

const MyCourses = () => {
    return <div>My Courses TEST!@#</div>
  }

const routes = [
    {
      path: "/",
      exact: true,
      main: () => <StudentDashboard/>
    },
    {
      path: "/mycourses",
      main: () => <MyCourses/>
    },
    {
      path: "/myteachers",
      main: () => <h2>teachers</h2>
    },
    {
      path: "/settings",
      main: () => <h2>Settings</h2>
    }
  ];

 

  export default function MainPanel() {
    return (
<Routes>
     
{routes.map((route, index) => (
   // You can render a <Route> in as many places
   // as you want in your app. It will render along
   // with any other <Route>s that also match the URL.
   // So, a sidebar or breadcrumbs or anything else
   // that requires you to render multiple things
   // in multiple places at the same URL is nothing
   // more than multiple <Route>s.
   <Route
     key={index}
     path={route.path}
     exact={route.exact}
     element={<route.main />}
   />
 ))}
</Routes>)}