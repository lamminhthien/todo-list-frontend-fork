import http from '@/data/http';
import {IAppContext} from '@/types';

export const useAppValue = () => {
  const initialState: IAppContext = {menuVisible: false, modalCreateNewVisible: false, setting: {name: 'ABC'}};
  const getSetting = async () => {
    const setting = await http.settings.all({});
    initialState.setting = setting.data.attributes;
  };
  getSetting();
  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case 'TOGGLE_MAINMENU': {
        state.menuVisible = action.payload.menuVisible;
        return {...state};
      }
      case 'TOGGLE_CREATE_NEW': {
        state.modalCreateNewVisible = action.payload.modalCreateNewVisible;
        return {...state};
      }

      default:
        throw new Error(`Unknown action: ${action.type}`);
    }
  };
  return {reducer, initialState};
};
export default useAppValue;
