import { useUser } from "@/api/hooks/useStudent";
import StudentView from "./StudentView";

const StudentFemale = () => {
  const { getUsers } = useUser();
  const { data } = getUsers();

  const filtered = data?.filter((user: any) => user.gender === "female");

  return <StudentView data={filtered || []} />;
};

export default StudentFemale;
