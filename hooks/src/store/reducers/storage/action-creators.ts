import {SetUsernameAction, StorageActionEnum} from "./types";

export const StorageActionCreators = {
  setUsername: (username: string): SetUsernameAction => ({
    type: StorageActionEnum.SET_USERNAME,
    payload: username
  })
}