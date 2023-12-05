import { ReactNode } from 'react';

type AuthProps = {
  children: ReactNode;
};

export function AuthRequired({ children }: AuthProps) {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}
