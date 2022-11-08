import {FC} from 'react';

import Input from '@/core-ui/input';

export const Point: FC = () => {
  return (
    <div className="point">
      <p className="title">Point</p>
      <Input name="point-num" placeholder="Coming soon" />
    </div>
  );
};
export default Point;
