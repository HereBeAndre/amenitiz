import type { TimeFormat } from '../types';

export const timeSinceLast = (lastOnline: number): TimeFormat => {
  const nowInSeconds = Math.floor(Date.now() / 1000);
  const seconds = nowInSeconds - lastOnline;

  const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
  const s = String(seconds % 60).padStart(2, '0');

  // HH:mm:ss format
  return `${h}:${m}:${s}`;
};
