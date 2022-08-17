import {InferGetStaticPropsType} from 'next';
import React from 'react';

import {getStaticProps} from '@/data/ssr/home.ssr';
import LayoutDefault from '@/layouts/default';
import ModalCreateNew from '@/components/modal-create-new';

export {getStaticProps};

export default function PageHome({}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <ModalCreateNew />;
}

// PageHome.Layout = LayoutDefault;
