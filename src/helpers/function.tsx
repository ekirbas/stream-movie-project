export const CreateUniqKey = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    (c: string) => {
      var r: number = (Math.random() * 16) | 0,
        v: number = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    }
  );
};

interface Array<T> {
  toGroup(a: any): T;
}
Object.defineProperty(Array.prototype, "toGroup", {
  value: function (callbackFn: any) {
    return this.reduce((a: any, b: any) => {
      const key = callbackFn(b);
      const groupName = key == null ? "notTaken" : key;
      return { ...a, [groupName]: groupName in a ? [...a[groupName], b] : [b] };
    }, {});
  },
});

/* çoklu state leri tek yere toplayıp tek setstate üzerinden hepsini güncelleyebiliyorsun */
import { useReducer, Reducer } from "react";

export function useCustomReducer<T>(initialState: T) {
  const reducer: Reducer<T, Partial<T>> = (prev, curr) => ({
    ...prev,
    ...curr,
  });

  const [state, dispatch] = useReducer(reducer, initialState);

  const setState = (update: Partial<T>) => {
    dispatch(update);
  };

  return [state, setState] as const;
}

import React, { useState } from "react";

/* export kısmını bununla kaplıyorsun verdiği değerleri kullanabiliyorsun isLoading */
export function withLoading(WrappedComponent: any) {
  return function WithLoading(props: any) {
    const [isLoading, setIsLoading] = useState(false);

    const startLoading = () => {
      setIsLoading(true);
    };

    const stopLoading = () => {
      setIsLoading(false);
    };

    return (
      <WrappedComponent
        {...props}
        isLoading={isLoading}
        startLoading={startLoading}
        stopLoading={stopLoading}
      />
    );
  };
}
