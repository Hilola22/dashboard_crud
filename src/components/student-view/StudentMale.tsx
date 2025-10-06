import { useUser } from "@/api/hooks/useStudent";
import StudentView from "./StudentView";

const StudentMale = () => {
  const { getUsers } = useUser();
  const { data } = getUsers();

  const filtered = data?.filter((user: any) => user.gender === "male");

  return <StudentView data={filtered || []} />;
};

export default StudentMale;
