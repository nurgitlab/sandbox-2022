export interface StorageState {
  username: string;
}

export enum StorageActionEnum {
  SET_USERNAME = "SET_USERNAME",
}

export interface SetUsernameAction {
  type: StorageActionEnum.SET_USERNAME,
  payload: string
}

export type StorageAction = SetUsernameAction
