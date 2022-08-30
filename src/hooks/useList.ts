import API from '@/api/network/todo-list';
import {ITodoList} from '@/api/network/todo-list';
import {useEffect, useState} from 'react';

const useList = () => {
  const [list, setList] = useState<ITodoList[] | null>(null);
  const fetchData = async () => {
    await API.getTodoLists().then(res => {
      if (res.status == 200) {
        setList(res.data);
      }
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return {list, fetchData};
};

export default useList;