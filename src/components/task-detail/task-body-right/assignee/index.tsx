import {FC} from 'react';

import Icon from '@/core-ui/icon';

const Assignee: FC = () => {
  return (
    <div className="assignee">
      <p className="title">Assignee</p>
      <div className="user">
        <Icon name="ico-user" />
        <p>Coming soon</p>
      </div>
    </div>
  );
};
export default Assignee;
