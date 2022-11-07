import {FC} from 'react';

import Icon from '@/core-ui/icon';

export const Piority: FC = () => {
  return (
    <div className="piority">
      <p className="title">Piority</p>
      <div className="piority-type">
        <Icon name="ico-arrow-up" className="text-green-500" />
        <p>Coming soon</p>
      </div>
    </div>
  );
};
export default Piority;
