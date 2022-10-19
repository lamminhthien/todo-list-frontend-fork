import Button from '@/core-ui/button';
import Icon from '@/core-ui/icon';
import {useStateAuth} from '@/states/auth/context';

import styles from './style.module.scss';

interface IProp {
  nameTodo: string;
  onEdit: () => void;
  onDelete: () => void;
  onShare: () => void;
  onAddTask: () => void;
  userId: string;
}

export default function ToolbarDetail({nameTodo, onEdit, onDelete, onShare, onAddTask, userId}: IProp) {
  const auth = useStateAuth();
  return (
    <>
      <div className={styles['toolbar-detail']}>
        <div className="toolbar">
          <div className="left">
            {/* List Title */}
            <div className="title">
              <h2>{nameTodo}</h2>
            </div>
          </div>
          <div className="right">
            {/* Check if (userId from list) equal to current (userId authed) to show edit button and delete button */}
            {auth?.id === userId && (
              <>
                {/* List Edit Button */}
                <Button className="btn-edit" startIcon={<Icon name="ico-edit" />} onClick={onEdit}>
                  <span className="h5 font-medium">Edit</span>
                </Button>
                {/* List Delete Button */}
                <Button startIcon={<Icon name="ico-trash-2" />} onClick={onDelete}>
                  <span className="h5 font-medium">Delete List</span>
                </Button>
              </>
            )}
            {/* List Share Button */}
            <Button className="btn-share" startIcon={<Icon name="ico-share-2" />} onClick={onShare}>
              <span className="h5 font-medium">Share</span>
            </Button>
            {/* List Add Button */}
            <Button className="btn-add-todo" startIcon={<Icon name="ico-plus-circle" />} onClick={onAddTask}>
              <span className="h5 font-medium">Add Task</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
