import { Link } from 'react-router-dom';

interface LinkComponentProps {
  to: string;
  children: React.ReactNode;
}

export const LinkComponent = ({ to, children }: LinkComponentProps) => (
  <Link to={to}>{children}</Link>
);
