import CreateStudentForm from "@/components/create-studetn-form/CreateStudentForm";
import Box from "@/components/ui/Box";
import Title from "@/components/ui/Title";
import { memo } from "react";

const CreateStudent = () => {
  return (
    <div>
      <Box>
        <Title>Manage Student</Title>
      </Box>
      <Box>
        <CreateStudentForm />
      </Box>
    </div>
  );
};

export default memo(CreateStudent);
