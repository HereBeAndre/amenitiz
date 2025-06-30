import { useLastOnline } from "../../hooks/useLastOnline";

interface TimeSinceLastOnlineProps {
  lastOnline: number;
}

export const TimeSinceLastOnline = ({
  lastOnline,
}: TimeSinceLastOnlineProps) => {
  const sinceLastOnline = useLastOnline(lastOnline);

  return (
    <>
      <strong>Time since last online:</strong> {sinceLastOnline}
    </>
  );
};
