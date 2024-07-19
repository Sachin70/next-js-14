import { useState } from "react";

type CallbackFunction<T> = (...args: T[]) => void;

type ThrottleOptions<T> = {
  callback: CallbackFunction<T>;
  delay: number;
};

export function useThrottle(callback: CallbackFunction<any>, delay: number) {
  //   const { callback, delay } = options;

  const [isThrottled, setIsThrottled] = useState(false);

  function throttledCallback(...args: any) {
    if (!isThrottled) {
      callback(...args);
      setIsThrottled(true);
      setTimeout(() => setIsThrottled(false), delay);
    }
  }

  return throttledCallback;
}
