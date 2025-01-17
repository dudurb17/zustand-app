import { create } from 'zustand';

type User ={
  id:number;
  name:string;
  email:string;
  password:string;
}

type UserStore ={
  users: User[];
  addUser:(user:User)=>void;
}

const useUserStore = create<UserStore>((set)=>({
  users:[],
  addUser:(user)=>set((state)=>({
    users:[...state.users, user]
  }))
}))