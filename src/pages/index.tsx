import React, {useState} from 'react';
import LayoutDefault from '@/layouts/default';
import {useRouter} from 'next/router';
import Button from '@/core-ui/button';
import ModalCreateList from '@/components/modal-create-list';
import ModalCreateTask from '@/components/modal-create-task';

export default function PageHome() {
  const router = useRouter();
  const [createListOpen, setCreateListOpen] = useState<boolean>(false);
  const [createTaskOpen, setCreateTaskOpen] = useState<boolean>(false);

  const handleCloseModalList = () => {
    setCreateListOpen(false);
  };

  const handleCloseModalTask = () => {
    setCreateTaskOpen(false);
  };

  return (
    <>
      <Button onClick={() => router.push('/quick-play')}>Quick play</Button>
      <Button
        className="new-class"
        text="Open Modal Create List"
        theme="white"
        onClick={() => setCreateListOpen(true)}
      />
      <Button
        className="new-class"
        text="Open Modal Create Task"
        theme="white"
        onClick={() => setCreateTaskOpen(true)}
      />

      <ModalCreateList open={createListOpen} onClose={handleCloseModalList} />
      <ModalCreateTask open={createTaskOpen} onClose={handleCloseModalTask} />
    </>
  );
}

PageHome.Layout = LayoutDefault;
