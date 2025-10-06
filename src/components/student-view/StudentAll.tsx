import { useUser } from "@/api/hooks/useStudent";
import StudentView from "./StudentView";

const StudentAll = () => {
  const { getUsers } = useUser();
  const { data } = getUsers();

  return <StudentView data={data || []} />;
};

export default StudentAll;
