import { createContext } from 'react'
import { type IProduct } from './Provider'

export interface IContext {
  products: IProduct[]
  toggleProducts: (body: IProduct[]) => void
}

const defaultState = {
  image: '',
  name: '',
  price: 0
}

export const Context = createContext<IContext>({
  products: [defaultState],
  toggleProducts: () => { }
})