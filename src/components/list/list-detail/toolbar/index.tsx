import {MenuItem, Select} from '@mui/material';

import Button from '@/core-ui/button';
import Icon from '@/core-ui/icon';
import {IListResponse} from '@/data/api/types/list.type';
import {useStateAuth} from '@/states/auth';

import styles from './style.module.scss';

interface IProp {
  todolist: IListResponse;
  onEdit: () => void;
  onDelete: () => void;
  onShare: () => void;
  onAddTask: () => void;
  filterValue: number;
  onFilter: (value: number) => void;
}
export default function ToolbarDetail({todolist, onEdit, onDelete, onShare, onAddTask, onFilter, filterValue}: IProp) {
  const statusFilters = todolist.status.sort((a, b) => a.index - b.index);

  const auth = useStateAuth();
  return (
    <>
      <div className={styles['toolbar-detail']}>
        <div className="toolbar">
          <div className="left">
            {/* List Title */}
            <div className="title">
              <h2>
                {todolist.name}
                <Button startIcon={<Icon name="ico-star" className="text-yellow-400" />} />
              </h2>
            </div>
          </div>
          <div className="right">
            {/* List Delete Button */}
            {auth?.id === todolist.userId && (
              <Button startIcon={<Icon name="ico-trash-2" />} onClick={onDelete}>
                <span className="h5 font-medium">Delete List</span>
              </Button>
            )}
            {/* List Share Button */}
            <Button startIcon={<Icon name="ico-share-2" />} onClick={onShare}>
              <span className="h5 font-medium">Share</span>
            </Button>
            {/* List Add Button */}
            {/* This add task button will only appear when visibility in this list = public */}
            {(auth?.id === todolist.userId || todolist.visibility === 'PUBLIC') && (
              <Button className="btn-add-todo" startIcon={<Icon name="ico-plus-circle" />} onClick={onAddTask}>
                <span className="h5 font-medium">Add Task</span>
              </Button>
            )}
            {/* List All Button */}
            <div className="filter">
              <div className="filter-icon">
                <Icon name="ico-filter" />
              </div>
              <Select value={filterValue} className="select" sx={{fontFamily: 'inherit'}} onChange={e => onFilter(e.target.value as number)}>
                <MenuItem
                  key={0}
                  value={0}
                  sx={{color: '#000000', justifyContent: 'end', fontFamily: 'inherit', margin: '0', padding: '4px 16px', height: 40, minHeight: 40}}
                >
                  <div className="text-h5 font-medium" style={{padding: '3px 0px 5px', borderRadius: '4px'}}>
                    All
                  </div>
                </MenuItem>
                {statusFilters.map(({id, name, color}) => {
                  return (
                    <MenuItem
                      key={id}
                      value={id}
                      sx={{color, justifyContent: 'end', fontFamily: 'inherit', margin: '0', padding: '4px 16px', height: 40, minHeight: 40}}
                    >
                      <div className="text-h5 font-medium" style={{color, backgroundColor: color + '32', padding: '3px 8px 5px', borderRadius: '4px'}}>
                        {name}
                      </div>
                    </MenuItem>
                  );
                })}
              </Select>
            </div>
            {/* List Settings Button */}
            {auth?.id === todolist.userId && (
              <Button startIcon={<Icon name="ico-settings" />} onClick={onEdit}>
                <span className="h5 font-medium">Settings</span>
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
