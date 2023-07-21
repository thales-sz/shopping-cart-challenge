import { type ReactNode, useCallback, useReducer } from 'react'
import { Context } from './Context'
import { ActionTypes, contextReducer } from './Reducer'

export interface IProduct {
  image: string
  name: string
  price: number
}

interface IProps {
  children: ReactNode
}

const defaultState = {
  image: '',
  name: '',
  price: 0
}

function Provider({ children }: IProps): JSX.Element {
  const [state, dispatch] = useReducer(contextReducer, { products: [defaultState] })

  const toggleProducts = useCallback((body: IProduct[]) => {
    dispatch({
      type: ActionTypes.toggleProducts,
      payload: body
    })
  }, [dispatch])

  return (
    <Context.Provider value= {{ ...state, toggleProducts }}>
      { children }
    </Context.Provider>
  )
}

export default Provider