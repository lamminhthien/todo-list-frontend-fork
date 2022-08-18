import {InferGetStaticPropsType} from 'next';
import React, {useContext, useState} from 'react';

import {getStaticProps} from '@/data/ssr/home.ssr';
// import LayoutDefault from '@/layouts/default';
import ModalCreateNew from '@/components/modal-create-new';
import {useAppContext, useAppDispatchContext} from '@/contexts/app.context';

export {getStaticProps};

export default function PageHome({}: InferGetStaticPropsType<typeof getStaticProps>) {
  // const dispatch = useAppDispatchContext();
  // const appContext = useAppContext();

  // const toggleModal = (state: boolean) => {
  //   dispatch({type: 'TOGGLE_CREATE_NEW', payload: {modalCreateNewVisible: state}});
  // };

  return (
    <>
      <ModalCreateNew />
    </>
  );
}

// PageHome.Layout = LayoutDefault;
