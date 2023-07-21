import { type ReactNode, useCallback, useReducer } from 'react'
import { Context } from './Context'
import { ActionTypes, contextReducer } from './Reducer'

export interface IProduct {
  _id: string
  image: string
  name: string
  price: number
}

interface IProps {
  children: ReactNode
}

function Provider({ children }: IProps): JSX.Element {
  const [state, dispatch] = useReducer(contextReducer, { products: [] })

  const toggleProducts = useCallback((body: IProduct) => {
    dispatch({
      type: ActionTypes.toggleProducts,
      payload: body
    })
  }, [dispatch])

  const toggleRemoveProducts = useCallback((body: IProduct) => {
    dispatch({
      type: ActionTypes.toggleRemoveProducts,
      payload: body
    })
  }, [dispatch])

  return (
    <Context.Provider value= {{ ...state, toggleProducts, toggleRemoveProducts }}>
      { children }
    </Context.Provider>
  )
}

export default Provider