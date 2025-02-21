import { useContext } from "react";
import { UsersContext } from "../providers/UsersProvider";

export const useUsers = () => {
  return useContext(UsersContext);
};
