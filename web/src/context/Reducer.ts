/* eslint-disable @typescript-eslint/no-explicit-any */
import { type IContext } from './Context'

interface IDispatch {
  type: ActionTypes
  payload: any
}

export enum ActionTypes {
  toggleProducts = 'toggleProducts',
}

export const contextReducer = (state: IContext, { payload, type }: IDispatch): any => {
  switch (type) {
    case ActionTypes.toggleProducts:
      return {
        ...state,
        products: [...payload]
      }
    default:
      throw new Error('Unknown action')
  }
}