import {StorageAction, StorageActionEnum, StorageState} from "./types";

const initialState: StorageState = {
  username: 'default user'
}

export default function storageReducer(
  state = initialState,
  action: StorageAction
):StorageState {
  switch (action.type) {
    case StorageActionEnum.SET_USERNAME:
      return {...state, username: action.payload}
    default:
      return state;
  }
}