import { useEffect, useState } from "react";
import { timeSinceLast } from "../utils/functions";
import type { TimeFormat } from "../types";

export const useLastOnline = (lastOnline: number | undefined) => {
  const [sinceLastOnline, setSinceLastOnline] =
    useState<TimeFormat>("00:00:00");

  useEffect(() => {
    const interval = setInterval(() => {
      if (lastOnline) {
        setSinceLastOnline(timeSinceLast(lastOnline));
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [lastOnline]);

  return sinceLastOnline;
};
