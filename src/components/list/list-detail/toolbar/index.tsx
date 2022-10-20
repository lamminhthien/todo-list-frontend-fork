import Button from '@/core-ui/button';
import Icon from '@/core-ui/icon';

// import {useStateAuth} from '@/states/auth/context';
import styles from './style.module.scss';

interface IProp {
  nameTodo: string;
  onEdit: () => void;
  onDelete: () => void;
  onShare: () => void;
  onAddTask: () => void;
  userId: string;
}

export default function ToolbarDetail({nameTodo, onEdit, onDelete, onShare, onAddTask}: IProp) {
  // const auth = useStateAuth();
  return (
    <>
      <div className={styles['toolbar-detail']}>
        <div className="toolbar">
          <div className="left">
            {/* List Title */}
            <div className="title">
              <h2>
                {nameTodo}
                <Button startIcon={<Icon name="ico-star" className="text-yellow-400" />} />
              </h2>
            </div>
          </div>
          <div className="right">
            {/* List Delete Button */}
            <Button startIcon={<Icon name="ico-trash-2" />} onClick={onDelete}>
              <span className="h5 font-medium">Delete List</span>
            </Button>
            {/* List Share Button */}
            <Button startIcon={<Icon name="ico-share-2" />} onClick={onShare}>
              <span className="h5 font-medium">Share</span>
            </Button>
            {/* List Add Button */}
            <Button className="btn-add-todo" startIcon={<Icon name="ico-plus-circle" />} onClick={onAddTask}>
              <span className="h5 font-medium">Add Task</span>
            </Button>
            {/* List All Button */}
            <Button startIcon={<Icon name="ico-filter" />}>
              <span className="h5 font-medium">All</span>
            </Button>
            {/* List Settings Button */}
            <Button startIcon={<Icon name="ico-settings" />} onClick={onEdit}>
              <span className="h5 font-medium">Settings</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
