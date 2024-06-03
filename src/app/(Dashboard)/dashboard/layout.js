"use client"
import React ,{useEffect,useState} from 'react';
import AntdDrawer from "../../components/AntdDrawer"
import { useRouter } from 'next/navigation';

const Layout = ({children}) => {
  const router=useRouter()
const [storedUser,setStoredUser]=useState()
  useEffect(() => {
    // Get user data from local storage
    const user = localStorage.getItem('user');
    if (user) {
      setStoredUser(JSON.parse(user));
    }
   if(!storedUser){
    router.push('/login')
   }
  }, [router,storedUser]);
  console.log(storedUser)
      return (
          
                 <AntdDrawer>
                   {children}
                 </AntdDrawer>
           
      );
};

export default Layout;