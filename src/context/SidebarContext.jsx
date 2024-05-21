//  sidebar context
import { createContext, useState } from 'react';

const SidebarContext = createContext();
// eslint-disable-next-line
const SidebarProvider = ({ children }) => {
    const [sidebar, setSidebar] = useState(false);      

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
