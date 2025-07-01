import { useEffect, useState } from 'react';

import type { TimeFormat } from '../types';
import { timeSinceLast } from '../utils/functions';

export const useLastOnline = (lastOnline: number) => {
  const [sinceLastOnline, setSinceLastOnline] = useState<TimeFormat>(() =>
    lastOnline ? timeSinceLast(lastOnline) : '00:00:00',
  );

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
