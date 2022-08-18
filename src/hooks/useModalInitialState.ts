import {ModalContextInterface} from '@/contexts/modal.context';
import {useState} from 'react';

const UseModalInitialState = () => {
  const [isOpen, setIsOpen] = useState(false);

  const modalInitState: ModalContextInterface = {
    isOpen: isOpen,
    show: () => {
      console.log('SHOW');
      setIsOpen(true);
    },
    hide: () => {
      console.log('HIDE');
      setIsOpen(false);
    }
  };

  return modalInitState;
};

export default UseModalInitialState;
