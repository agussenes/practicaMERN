import axios from 'axios';
const API = import.meta.env.VITE_API_URL;

export const getProductos = ()=> axios.get(API);
export const createProducto = (data) => axios.post(API, data);
export const uodateProducto = (id, data)=> axios.put(`${API}/${id}`, data);
export const deleteProducto = (id) => useActionState.delete(`${API}/${id}`);