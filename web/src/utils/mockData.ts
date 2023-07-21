import { api } from "../api/axiosInstance";

export const mockData = [
  {
    name: 'Samsung Galaxy A14',
    price: 999,
    image: 'http://http2.mlstatic.com/D_785935-MLA69242565747_052023-I.jpg',
  },
  {
    name: 'Samsung Galaxy A04e',
    price: 793,
    image: 'http://http2.mlstatic.com/D_974609-MLA53352720362_012023-I.jpg',
  },
  {
    name: ' Motorola Moto G32',
    price: 1244.9,
    image: 'http://http2.mlstatic.com/D_960487-MLA54126902851_032023-I.jpg',
  },
  {
    name: 'Samsung Galaxy A03',
    price: 790,
    image: 'http://http2.mlstatic.com/D_800817-MLU69497677869_052023-I.jpg',
  },
  {
    name: 'Samsung Galaxy A34',
    price: 1745,
    image: 'http://http2.mlstatic.com/D_949465-MLA54688498341_032023-I.jpg',
  },
  {
    name: 'Samsung Galaxy A04s',
    price: 799,
    image: 'http://http2.mlstatic.com/D_664292-MLA53289725430_012023-I.jpg',
  },
  {
    name: 'Samsung Galaxy Galaxy M53 5g',
    price: 1939.9,
    image: 'http://http2.mlstatic.com/D_614228-MLA50709855829_072022-I.jpg',
  },
  {
    name: ' Moto G42 Dual Sim',
    price: 989,
    image: 'http://http2.mlstatic.com/D_720162-MLA51931598746_102022-I.jpg',
  },
  {
    name: 'Xiaomi Redmi 10',
    price: 784,
    image: 'http://http2.mlstatic.com/D_954510-MLA51163159088_082022-I.jpg',
  },
  {
    name: 'Celular Positivo S509',
    price: 359.7,
    image: 'http://http2.mlstatic.com/D_629650-MLB43656508992_102020-I.jpg',
  }
];

export const populateDB = async () => {
  for (const product of mockData) {
    api.post('/products', product);
  }
};
