import { memo, useEffect, useState, type FormEvent } from "react";
import Title from "../ui/Title";
import { REGIONS } from "../../static";
import { useUser } from "../../api/hooks/useStudent";
import { useLocation, useNavigate } from "react-router-dom";

const CreateStudentForm = () => {
  const { getUsers, createUser, updateUser } = useUser();
  const { data: users } = getUsers();
  const navigate = useNavigate();

  const [f_name, setFName] = useState("");
  const [l_name, setLName] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");

  const { state } = useLocation();
  const editingItem = state?.editingItem;

  useEffect(() => {
    if (editingItem) {
      setFName(editingItem.f_name);
      setLName(editingItem.l_name);
      setGender(editingItem.gender);
      setAddress(editingItem.address);
    }
  }, [editingItem]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const student = { f_name, l_name, gender, address };

    const isDuplicate = users?.some(
      (u: any) =>
        u.f_name.toLowerCase() === f_name.toLowerCase().trim() &&
        u.l_name.toLowerCase() === l_name.toLowerCase().trim() &&
        u.id !== editingItem?.id 
    );

    if (isDuplicate) {
      alert("Bu ism va familiyadagi foydalanuvchi allaqachon mavjud!");
      return;
    }
    if (editingItem) {
      updateUser.mutate(
        { id: editingItem.id, ...student },
        {
          onSuccess: () => navigate("/students"),
        }
      );
    } else {
      createUser.mutate(student);
    }
  };

  return (
    <div className="max-w-[600px] w-full">
      <Title className="mb-3">
        {editingItem ? "Update Student" : "Create Student"}
      </Title>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-full border rounded-xl h-10 indent-3 border-slate-200 mb-3"
          placeholder="First name"
          value={f_name}
          onChange={(e) => setFName(e.target.value)}
          required
        />
        <input
          type="text"
          className="w-full border rounded-xl h-10 indent-3 border-slate-200 mb-3"
          placeholder="Last name"
          value={l_name}
          onChange={(e) => setLName(e.target.value)}
          required
        />
        <select
          className="w-full border rounded-xl h-10 indent-2 border-slate-200 mb-3"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
        >
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <select
          className="w-full border rounded-xl h-10 indent-2 border-slate-200 mb-3"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        >
          <option value="" hidden>
            Address
          </option>
          {REGIONS.map((region: string, inx: number) => (
            <option key={inx} value={region}>
              {region}
            </option>
          ))}
        </select>
        <button
          className="w-full rounded-xl h-10 mb-3 bg-blue-500 text-white"
          disabled={createUser.isPending || updateUser.isPending}
        >
          {createUser.isPending || updateUser.isPending
            ? "Loading..."
            : editingItem
            ? "Update"
            : "Submit"}
        </button>

        {editingItem && (
          <button
            type="button"
            onClick={() => navigate("/students")}
            className="w-full rounded-xl h-10 mb-3 bg-orange-300 text-white"
          >
            Cancel
          </button>
        )}
      </form>
    </div>
  );
};

export default memo(CreateStudentForm);
