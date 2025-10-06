import { memo, type FC } from "react";
import Box from "../ui/Box";
import { Bookmark, SquarePen, Trash } from "lucide-react";
import { useUser, type IUser } from "../../api/hooks/useStudent";
import { useDispatch, useSelector } from "react-redux";
import { toggleSave } from "../../lib/features/bookMarkSlice";
import type { RootState } from "../../lib";
import { useNavigate } from "react-router-dom";

export interface IProps {
  data: IUser[],
}

const StudentView: FC<IProps> = (props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const saved = useSelector((state: RootState) => state.bookMark.value);


  const { deleteUser} = useUser()
  const { data } = props;

  const handleUpdate = (item: IUser) => {
    navigate("/create-student", { state: { editingItem: item } });
  };

  const handleDelete = (id: string)=> {
    deleteUser.mutate(id)
  }

  return (
    <Box>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-3">
        {data?.map((item: any) => (
          <div className="border border-slate-200 p-4 rounded-xl text-center">
            <div className="relative">
              <div className="size-20 rounded-full grid place-items-center bg-slate-200 mx-auto">
                <span className="text-4xl font-bold text-slate-400">
                  {item.f_name[0]}
                </span>
              </div>
              <div className="absolute top-0 right-0 flex flex-col gap-3">
                <button
                  onClick={() => 
                    dispatch(toggleSave(item))
                  }
                  className="cursor-pointer"
                >
                  {saved.some((book) => book.id === item.id) ? (
                    <Bookmark className="text-purple-600" />
                  ) : (
                    <Bookmark size={20} />
                  )}
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="cursor-pointer"
                >
                  <Trash className="size-5 text-red-500" />
                </button>
                <button
                  
                  onClick={() => handleUpdate(item)}
                  className="cursor-pointer"
                >
                  <SquarePen className="size-5 text-green-600" />
                </button>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="font-bold">
                {item.f_name}
                {item.l_name}
              </h3>
              <p>{ item.address}</p>
            </div>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default memo(StudentView);
