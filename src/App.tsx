import { memo } from "react";
import { useRoutes } from "react-router-dom";

import Dashboard from "./pages/dashboard";
import Statistic from "./pages/statistic";
import Students from "./pages/students";
import CreateStudent from "./pages/create-student";
import Bookmark from "./pages/bookmark";

import StudentAll from "@/components/student-view/StudentAll";
import StudentMale from "@/components/student-view/StudentMale";
import StudentFemale from "@/components/student-view/StudentFemale";
import CreateStudentForm from "@/components/create-studetn-form/CreateStudentForm";

const App = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Dashboard />,
      children: [
        { index: true, element: <Statistic /> },
        {
          path: "students",
          element: <Students />,
          children: [
            { index: true, element: <StudentAll /> }, 
            { path: "male", element: <StudentMale /> },
            { path: "female", element: <StudentFemale /> },
            { path: "create", element: <CreateStudentForm /> },
          ],
        },
        { path: "create-student", element: <CreateStudent /> },
        { path: "bookmark", element: <Bookmark /> },
      ],
    },
  ]);

  return routes;
};

export default memo(App);
