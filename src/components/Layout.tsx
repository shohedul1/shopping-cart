'use client';
import {SessionProvider} from 'next-auth/react';
import { store } from '@/redux/store';
import { Provider } from 'react-redux'

const Layout = ({children}:{children:React.ReactNode}) => {
  return (
   <Provider store={store} >
     <SessionProvider>
        {children}
    </SessionProvider>
   </Provider>
    
  )
}

export default Layout;

