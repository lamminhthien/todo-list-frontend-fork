import {useEffect} from 'react';

import socket, {socketUpdateList} from '@/data/socket';
import {SOCKET_EVENTS} from '@/data/socket/type';
import {useStateAuth} from '@/states/auth';
import useLists from '@/states/lists/use-lists';
import useModals from '@/states/modals/use-modals';

import ModalCreateList from './modal-create-update-list/modal-create-list';
import ModalUpdateList from './modal-create-update-list/modal-update-list';
import ModalCreateUpdateTask from './modal-create-update-task';
import ModalDelete from './modal-delete';
import ModalShare from './modal-share';

const Modal = () => {
  const auth = useStateAuth();
  const {get} = useLists();
  const {isOpenModal, setIsOpenModal} = useModals();
  const {selectedTask, selectedTodolist} = useModals();

  const onClose = () => {
    setIsOpenModal(null);
  };

  useEffect(() => {
    if (auth) {
      socket.auth = {...auth, listID: selectedTodolist?.id};
      socket.connect();
    }

    socket.on(SOCKET_EVENTS.reconnect, attempt => {
      console.log('SocketIO', SOCKET_EVENTS.reconnect, attempt);
    });

    socket.on(SOCKET_EVENTS.updateList, () => {
      console.log('SocketIO', SOCKET_EVENTS.updateList);
    });

    return () => {
      socket.off(SOCKET_EVENTS.reconnect);
      socket.off(SOCKET_EVENTS.updateList);
    };
  }, [auth]);

  return (
    <>
      <ModalCreateUpdateTask open={isOpenModal.task} onClose={onClose} taskData={selectedTask} todolistData={selectedTodolist} onSuccess={socketUpdateList} />
      <ModalCreateList open={isOpenModal.list} onClose={onClose} />
      {selectedTask && <ModalDelete open={isOpenModal.deleteTask} onClose={onClose} data={selectedTask} />}
      {selectedTodolist && <ModalDelete open={isOpenModal.deleteList} onClose={onClose} data={selectedTodolist} onSuccess={get} />}
      {selectedTodolist && (
        <ModalUpdateList
          open={isOpenModal.settings}
          onClose={onClose}
          data={selectedTodolist}
          onSuccess={() => {
            socketUpdateList();
            get();
          }}
        />
      )}
      {selectedTodolist && <ModalShare open={isOpenModal.share} onClose={onClose} data={selectedTodolist} />}
    </>
  );
};

export default Modal;
