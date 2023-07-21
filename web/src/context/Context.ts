import { createContext } from 'react';
import { type IProduct } from './Provider';

export interface IContext {
  products: IProduct[];
  toggleProducts: (body: IProduct) => void;
  toggleRemoveProducts: (body: IProduct) => void;
}

export const Context = createContext<IContext>({
  products: [],
  toggleProducts: () => {},
  toggleRemoveProducts: () => {},
});
