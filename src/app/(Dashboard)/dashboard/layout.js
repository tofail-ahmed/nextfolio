"use client"
import React ,{useEffect} from 'react';
import AntdDrawer from "../../components/AntdDrawer"
const Layout = ({children}) => {
  // useEffect(() => {
  //   // Get user data from local storage
  //   const user = localStorage.getItem('user');
  //   if (user) {
  //     setStoredUser(JSON.parse(user));
  //   }
  // }, []);
      return (
          
                 <AntdDrawer>
                   {children}
                 </AntdDrawer>
           
      );
};

export default Layout;