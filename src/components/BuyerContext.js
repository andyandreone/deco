import React, { useContext, useState } from "react";

export const DataBuyerContext = React.createContext();
export const UpdateDataBuyerContext = React.createContext();

export function useBuyerContext() {
    return useContext(DataBuyerContext);
  }

export function useUpdateDataBuyerContext() {
    return useContext(UpdateDataBuyerContext);
  }  

export function BuyerContext({children}) {
    const [data, setData] = useState([]);

const updateData = (email, name, phone) =>{
    const buyer = {
        email: email,
        name: name,
        phone: phone,
    }
    setData(buyer);

}

    return (
        <BuyerContext.Provider value={data}>
            <UpdateDataBuyerContext.Provider value={updateData}>
                     {children}
            </UpdateDataBuyerContext.Provider>
        </BuyerContext.Provider>
    )
}


