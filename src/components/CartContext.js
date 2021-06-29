import React,{useContext, useState} from 'react'
import '../css/CartContext.css'
 

export const DataContext = React.createContext();
export const UpdateDataContext = React.createContext();

export function useDataContext(){
    return useContext(DataContext)
}

export function useDataUpdateContext() {
    return useContext(UpdateDataContext);
  }

export function CartContext({children}) {

      const [data, setData] = useState([]);
      const updateData = (id,title, price, image,description, count) => {
        const producto = {
          id: id,
          titulo: title,
          precio: price,
          imagen: image,
          descripcion: description,
          cantidad: count,
        };
        const array = [...data];
        array.push(producto);
        return setData(array);
      };

    return (
      <DataContext.Provider value={data}>
          <UpdateDataContext.Provider value={updateData}>
          {children}
          </UpdateDataContext.Provider>   
      </DataContext.Provider>
    )
}

export default CartContext
