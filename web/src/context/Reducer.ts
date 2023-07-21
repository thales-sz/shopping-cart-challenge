/* eslint-disable @typescript-eslint/no-explicit-any */
import { type IContext } from './Context'

interface IDispatch {
  type: ActionTypes
  payload: any
}

export enum ActionTypes {
  toggleProducts = 'toggleProducts',
  toggleRemoveProducts = 'toggleRemoveProducts'
}

export const contextReducer = (state: IContext, { payload, type }: IDispatch): any => {
  switch (type) {
    case ActionTypes.toggleProducts:
      return {
        ...state,
        products: [
          ...state.products,
          payload
        ]
      }
    case ActionTypes.toggleRemoveProducts:
      return {
        products: state.products.filter((product) => product.name !== payload.name)
      }
    default:
      throw new Error('Unknown action')
  }
}