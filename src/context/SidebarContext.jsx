//  sidebar context
import { createContext, useContext, useState } from 'react';
import { ProductCartContext } from './ProductContext';

const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
    const [sidebar, setSidebar] = useState(false);
    const { cart} = useContext(ProductCartContext);
    console.log(cart)

    const setSidebarContext = (item) => {
        setSidebar(item);
    };


    return (
        <SidebarContext.Provider value={{ sidebar, setSidebarContext }}>
            {children}
        </SidebarContext.Provider>
    );
};

export { SidebarContext, SidebarProvider };
