import {useEffect, useState} from 'react';

import useTodolist from '@/states/todolist/use-todolist';

import ModalShare from './modal-share';

const Modal = () => {
  const {todolist, initial} = useTodolist();

  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    initial('k7rks');
  }, []);

  return (
    <>
      {/* <ModalCreateUpdateList open={open} onClose={onCloses} />
      <ModalCreateUpdateTask open={open} onClose={onCloses} />
      <ModalDelete open={open} onClose={onCloses} /> */}
      <button onClick={() => setOpen(true)}>Open modal share</button>
      <ModalShare open={open} onClose={onClose} data={todolist} />
    </>
  );
};

export default Modal;
