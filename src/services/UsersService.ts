import { RESOURCERS } from "../constants";
import { instanceAxios } from "../lib/axios";

const RESOURCE = RESOURCERS.USUARIOS;

// export const getUsers = async () => {
//   try {
//     const response = await instanceAxios.get(RESOURCE);
//     return response.data;
//   } catch (error) {
//     throw new Error("Erro to get users");
//   }
// };

// export const getUserById = async (id: number) => {
//   try {
//     const response = await instanceAxios.get(`${RESOURCE}/${id}`);
//     return response.data;
//   } catch (error) {
//     throw new Error("Erro ao buscar o produto.");
//   }
// };

export const UsersService = {
  getUsers: async () => {
    try {
      const response = await instanceAxios.get(RESOURCE);
      await new Promise((res) => setTimeout(() => res({}), 5000));
      return response.data;
    } catch (error) {
      throw new Error("Erro to get all users");
    }
  },
  getUserById: async (id: number) => {
    try {
      const response = await instanceAxios.get(`${RESOURCE}/${id}`);
      await new Promise((res) => setTimeout(() => res({}), 5000));
      return response.data;
    } catch (error) {
      throw new Error("Erro to get an user by id.");
    }
  },
};
