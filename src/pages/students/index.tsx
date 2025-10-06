import { memo } from "react";
import Box from "@/components/ui/Box";
import Title from "@/components/ui/Title";
import { NavLink, Outlet } from "react-router-dom";

const Student = () => {
  const getLinkClass = (isActive: boolean) =>
    isActive
      ? "border-b-2 border-blue-500 text-blue-500"
      : "border-b-2 border-transparent text-gray-600";

  return (
    <div>
      <Box>
        <div className="flex justify-between">
          <Title>Students</Title>
        </div>
      </Box>

      <Box>
        <div className="flex gap-6">
          <NavLink
            to=""
            end
            className={({ isActive }) => getLinkClass(isActive)}
          >
            All
          </NavLink>
          <NavLink
            to="male"
            className={({ isActive }) => getLinkClass(isActive)}
          >
            Male
          </NavLink>
          <NavLink
            to="female"
            className={({ isActive }) => getLinkClass(isActive)}
          >
            Female
          </NavLink>
        </div>
      </Box>
      <Box>
        <Outlet />
      </Box>
    </div>
  );
};

export default memo(Student);
