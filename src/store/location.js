import { create } from "zustand";
import { immer } from "zustand/middleware";

const DEFAULT_LOCATION = location.work;

const useLocationStore = create(
  immer((set) => ({
    activeLocation: DEFAULT_LOCATION,

    setActiveLocation: (location = null) =>
      set((state) => {
        state.activeLocation = location;
      }),

    resetLocation: () =>
      set((state) => {
        state.activeLocation = DEFAULT_LOCATION;
      }),
  }))
);


export default useLocationStore;