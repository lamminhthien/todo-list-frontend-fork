import React from 'react';
import {InferGetStaticPropsType} from 'next';

import {getStaticProps} from '@/data/ssr/home.ssr';
import ModalCreateNew from '@/components/modal-create-new';
import LayoutDefault from '@/layouts/default';
import ModalContext from '@/contexts/modal.context';
import ButtonModal from '@/components/button-modal';
import UseModalInitialState from '@/hooks/useModalInitialState';
export {getStaticProps};

export default function PageHome({}: InferGetStaticPropsType<typeof getStaticProps>) {
  const modalAppContext = UseModalInitialState();

  return (
    <>
      <ModalContext.Provider value={modalAppContext}>
        <ButtonModal />
        {/* <ModalCreateNew heading="Create New List" placeholder="Enter your list" cancel="Cancel" create="Create" /> */}
        <ModalCreateNew heading="Add New To-Do" placeholder="Enter your task" cancel="Close" create="Add New" />
      </ModalContext.Provider>
    </>
  );
}

PageHome.Layout = LayoutDefault;
