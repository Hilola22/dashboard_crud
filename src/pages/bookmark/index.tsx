import StudentView from "@/components/student-view/StudentView";
import Box from "@/components/ui/Box";
import Title from "@/components/ui/Title";
import { memo } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../lib";

const Bookmark = () => {

  const saved = useSelector((state: RootState) => state.bookMark.value);
  
  return (
    <div>
      <Box>
        <Title>Bookmark</Title>
      </Box>
      <StudentView data={saved} />
    </div>
  );
};

export default memo(Bookmark);
