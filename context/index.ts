import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  name: string;
  sub: number;
}

interface UserState {
  user: {
    name: string;
    sub: number;
  } | null;
  setUser: (user: User, token: string) => void;
  token: string | null;
}

const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      setUser: (user: User, token: string) => set({ user: user, token }),
    }),
    {
      name: "user-storage", // name of the item in the storage (must be unique)
    }
  )
);

export default useUserStore;
