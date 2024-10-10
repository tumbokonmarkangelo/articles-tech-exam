import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useUsersStore = create(
  persist(
    (set) => ({
      users: undefined,
      setUsers: (users) => set(() => ({ users })),
    }),
    {
      name: "users-storage",
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({
        users: state.users,
      }),
    }
  )
);
