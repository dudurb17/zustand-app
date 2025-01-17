import { create } from "zustand";

type User = {
  name: string;
  email: string;
  password: string;
};

type UserStore = {
  users: User[];
  addUser: (user: User) => void;
  login: (user: { email: string; password: string }) => void;
  isLogged:boolean
};

export const useUserStore = create<UserStore>((set) => ({
  users: [],
  isLogged:false,
  addUser: (user) =>
    set((state) => ({
      users: [...state.users, user],
    })),
  login: (user) =>
    set((state) => {

      const teste = state.users.filter((item) => item.email===user.email).length >0;
      if(teste) state.isLogged =true
      return {};
    }),
}));
