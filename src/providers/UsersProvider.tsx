import { ReactNode, createContext, useEffect, useState } from "react";
import { IUser } from "../interfaces";
import { UsersService } from "../services/UsersService";

interface UsersProviderProps {
  children: ReactNode;
}

export const UsersContext = createContext<{
  users: IUser[];
  loading: boolean;
  error: any;
}>({
  users: [],
  loading: false,
  error: undefined,
});

export const UsersProvider = ({ children }: UsersProviderProps) => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const data = await UsersService.getUsers();
      setUsers(data);
    } catch (err) {
      setError("Erro ao buscar produtos.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <UsersContext.Provider value={{ users, loading, error }}>
      {children}
    </UsersContext.Provider>
  );
};
