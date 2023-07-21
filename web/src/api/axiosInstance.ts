import axios from "axios";

export const api = axios.create({
  baseURL: 'https://shopping-cart-server.onrender.com/',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
})