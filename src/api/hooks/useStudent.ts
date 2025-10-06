import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "..";
import { useNavigate } from "react-router-dom";

export interface IUser {
  id: string;
  f_name: string;
  l_name: string;
  gender: "male" | "female";
  address: string;
}

export const useUser = () => {
  const client = useQueryClient();
  const navigate = useNavigate();

  const getUsers = () =>
    useQuery<any, any>({
      queryKey: ["userKey"],
      queryFn: () => api.get("user").then((res) => res.data),
    });

  const createUser = useMutation<any, any, any>({
    mutationFn: (body: any) => api.post("user", body).then((res) => res.data),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["userKey"] });
      navigate("/students")
      
    },
  });

  const updateUser = useMutation<any, any, any>({
    mutationFn: (body: any) =>
      api.put(`user/${body.id}`, body).then((res) => res.data),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["userKey"] });
    },
  });

  const deleteUser = useMutation<any, any, any>({
    mutationFn: (id: any) => api.delete(`user/${id}`).then((res) => res.data),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["userKey"] });
    },
  });

  return { getUsers, createUser, updateUser, deleteUser };
};