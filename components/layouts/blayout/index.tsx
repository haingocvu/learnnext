import type { ReactElement } from 'react';
import NavBar from './navbar';

interface IProps {
  children: ReactElement;
}

const BLayout = (props: IProps) => {
  const { children } = props;
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
};

export default BLayout;
