import { GetStaticProps } from 'next/types';
import type { ReactElement } from 'react';

import { NextPageWithLayout } from './_app';
import BLayout from 'components/layouts/blayout';

interface IProps {
  products: any;
}

const About: NextPageWithLayout<IProps> = (props) => {
  const { products } = props;
  return (
    <div>
      {products?.map((p: any) => (
        <div key={p.name}>{p?.name}</div>
      ))}
    </div>
  );
};

About.getLayout = (page: ReactElement) => {
  return <BLayout>{page}</BLayout>;
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      products: [
        {
          name: 'abc',
        },
        {
          name: 'xyz',
        },
      ],
    },
  };
};

export default About;
