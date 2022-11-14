import classNames from 'classnames';
import {FC} from 'react';
import {Controller, useForm} from 'react-hook-form';

import DatePicker from '@/components/common/date-picker';
import useTask from '@/components/task-detail/hooks/use-task';
import api from '@/data/api';
import {IBaseProps} from '@/types';

interface IProps extends IBaseProps {
  dueDate: Date;
}

interface IFormInputs {
  dueDate: Date;
}

const DueDate: FC<IProps> = ({className, dueDate}) => {
  const {control} = useForm<IFormInputs>();
  const {task} = useTask();

  const handleSubmit = (date?: Date) => {
    if (date) api.task.update({id: task.id, dueDate: date});
  };

  return (
    <div className={classNames('due-date', className)}>
      <p className="title">Due date</p>
      <Controller
        name="dueDate"
        rules={{required: true}}
        control={control}
        render={({field}) => (
          <DatePicker
            format="DD/MM/YYYY"
            value={dueDate}
            onChange={text => {
              field.onChange(text);
              handleSubmit(text);
            }}
          />
        )}
      />
    </div>
  );
};
export default DueDate;
