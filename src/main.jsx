import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './Route/route.jsx'
import { RouterProvider } from 'react-router-dom'
import Authprovider from './Provider/Authprovider'

import {
 
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>   
   <Authprovider>
   <QueryClientProvider client={queryClient}>
   
   <RouterProvider router={router} />
   
    </QueryClientProvider>
  
   
   </Authprovider>
  </React.StrictMode>
 
) 
