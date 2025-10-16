import React, { createContext, useState } from 'react'


export const ShopContext=createContext();
const Contextprovider = ({children}) => {

    const [customersList, setCustomersList] = useState([]);
    const [alltransacrions, setAlltransactions] = useState([]);
    const [allcredit,setAllcredit]=useState('')
  return (
    <ShopContext.Provider value={{customersList,setCustomersList,alltransacrions,setAlltransactions,allcredit,setAllcredit}}>
        {children}
    </ShopContext.Provider>
  )
}

export default Contextprovider
