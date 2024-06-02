import React from 'react';
import AntdDrawer from "../../components/AntdDrawer"
const layout = ({children}) => {
      return (
          
                 <AntdDrawer>
                   {children}
                 </AntdDrawer>
           
      );
};

export default layout;