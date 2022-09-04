import {GetStaticProps} from 'next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import Link from 'next/link';

import {ROUTES} from '@/configs/routes.config';
import Button from '@/core-ui/button';
import LayoutDefault from '@/layouts/default';

export default function PageHome() {
  return (
    <Button>
      <Link href={ROUTES.QUICKPLAY}>
        <a>Quick play</a>
      </Link>
    </Button>
  );
}

PageHome.Layout = LayoutDefault;

export const getStaticProps: GetStaticProps = async ({locale}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['common']))
    }
  };
};
