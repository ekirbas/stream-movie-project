import React from "react";
import { StoreApi, UseBoundStore } from "zustand";
import { useApiStore } from "../store/store";
import { ApiStore } from "../models/storeType";

export const useMulti = <T extends object, K extends keyof T>(
  useStoreFn: UseBoundStore<StoreApi<T>>,
  ...items: K[]
): Pick<T, K> => {
  return items.reduce(
    (carry, item) => ({
      ...carry,
      // No need to use useShallow here, as we fetch the objects one by one
      [item]: useStoreFn((state) => state[item]),
    }),
    {}
  ) as Pick<T, K>;
};
export const useStoreMulti = (...items: Array<keyof ApiStore>) =>
  useMulti(useApiStore, ...items);
