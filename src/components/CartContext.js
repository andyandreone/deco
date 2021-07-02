import React, { useContext, useState } from "react";
import "../css/CartContext.css";

export const DataContext = React.createContext();
export const UpdateDataContext = React.createContext();
export const DeleteItemDataContext = React.createContext();

export function useDataContext() {
  return useContext(DataContext);
}
export function useDataUpdateContext() {
  return useContext(UpdateDataContext);
}
export function useDeleteItemDataContext() {
  return useContext(DeleteItemDataContext);
}
export function CartContext({ children }) {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState([]);
  const updateData = (id, title, price, image, description, count) => {
    const producto = {
      id: id,
      titulo: title,
      precio: price,
      imagen: image,
      descripcion: description,
      cantidad: count,
    };

    const indexArray = [...index];
    const array = [...data];
    const indexProducto = indexArray.indexOf(producto.id);
    if (indexProducto == "-1") {
      indexArray.push(producto.id);
      setIndex(indexArray);
      array.push(producto);
      return setData(array);
    } else {
      array[indexProducto].cantidad += producto.cantidad;
      return setData(array);
    }
  };

  const deleteData = (id) => {
    let array = [...data];
    array.splice(index.indexOf(id), 1);
    index.splice(index.indexOf(id), 1);
    setIndex(index);
    return setData(array);
  };

  return (
    <DataContext.Provider value={data}>
      <UpdateDataContext.Provider value={updateData}>
        <DeleteItemDataContext.Provider value={deleteData}>
          {children}
        </DeleteItemDataContext.Provider>
      </UpdateDataContext.Provider>
    </DataContext.Provider>
  );
}

export default CartContext;
