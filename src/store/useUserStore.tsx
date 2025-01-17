import { create } from 'zustand';

type User ={
  name:string;
  email:string;
  password:string;
}

type UserStore ={
  users: User[];
  addUser:(user:User)=>void;
}

export const useUserStore = create<UserStore>((set)=>({
  users:[],
  addUser: (user) =>
    set((state) => ({
      users: [
        ...state.users, user
      ],
    })),
}))