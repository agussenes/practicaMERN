import React, { useEffect, useState } from 'react';
import { getProductos } from '../services/productoService';
const url_img = import.meta.env.VITE_URL_IMG;



export const Home = () => {


    const [productos, setProductos] = useState([]);

    useEffect(() => {
        getProductos().then(res => setProductos(res.data));
    }, []);


    return (
        <div className='container-fluid'>
            <div className='container-fluid fixed-top bg-dark text-light p-4 text-center'>
                <h1>esto es un navbar</h1>
            </div>
            <div className='listaDeProductos container' style={{ marginTop: '100px' }}>
                <div className='text-center'><h1 className='fw-bold'>Productos disponibles</h1></div>
                <div className="contenedorProductos d-flex flex-wrap gap-2">
                    {productos.map(p => (
                        <div className='card' key={p._id}>
                            <img src={`${url_img}${p.imagen}`} alt={p.nombre} />
                            <h2>{p.nombre}</h2>
                            <p>Precio:{p.precio}</p>
                            <p>{p.descripcion}</p>
                            <p>{p.stock}</p>

                        </div>
                    ))}
                </div>

            </div>

        </div>
    )
}
