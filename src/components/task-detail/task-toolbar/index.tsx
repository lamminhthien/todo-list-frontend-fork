import classNames from 'classnames';
import Image from 'next/image';
import {FC} from 'react';

import useToast from '@/core-ui/toast';
import api from '@/data/api';
import useTask from '@/states/task/use-task';
import {IBaseProps} from '@/types';
import {TaskTypeData} from '@/utils/constant';
import {ToastContents} from '@/utils/toast-content';

import Left from './left';
import Right from './right';
import style from './style.module.scss';
import Type from './type';

const TaskToolbar: FC<IBaseProps> = ({className}) => {
  const toast = useToast();
  const {task, update} = useTask();
  const taskSymbol = task?.todolist.taskSymbol;
  const order = task?.order;
  const taskType = TaskTypeData.find(x => x.text === task.type);

  const onSelectType = (type: string) => {
    api.task
      .update({id: task.id, type})
      .then(update)
      .catch(() => toast.show({type: 'danger', title: 'Type', content: ToastContents.ERROR}));
  };

  return (
    <div className={classNames(style.toolbar, className)}>
      <div className="header">
        <Type
          data={TaskTypeData}
          title="CHANGE ISSUE TYPE"
          trigger={
            <div className="rounded bg-slate-100 p-1 px-2 text-h7">
              <Image src={`/icons/${taskType?.icon}`} alt={taskType?.text} width={24} height={24} />
            </div>
          }
          onSelect={value => {
            onSelectType(value);
          }}
        />
        {taskSymbol && order && <p>{`${taskSymbol}-${order}:`}</p>}
        <Left className="left" />
        <Right className="right" />
      </div>
    </div>
  );
};
export default TaskToolbar;
