import React, {useState} from 'react';
import LayoutDefault from '@/layouts/default';
import {useRouter} from 'next/router';
import Button from '@/components/button';
import ModalCreateNew from '@/components/modal-create-new';

export default function PageHome() {
  const router = useRouter();
  const [createNewVisible, setCreateNewVisible] = useState<boolean>(false);

  return (
    <>
      <Button onClick={() => router.push('/quick-play')}>Quick play</Button>
      <Button className="new-class" text="AHAHAHAHA" theme="white" onClick={() => setCreateNewVisible(true)} />

      <ModalCreateNew open={createNewVisible} onClose={() => setCreateNewVisible(false)} />
    </>
  );
}

PageHome.Layout = LayoutDefault;
