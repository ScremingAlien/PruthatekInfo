"use client";
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from "@mantine/core";
import Navbar from "./Navbar";
import Footer from './Footer';
import { Provider } from 'react-redux';
import Store from '../utils/Redux/Store';
import { Notifications } from '@mantine/notifications';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GraphQLClient } from "graphql-request";



export const gqlClient = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHQL_API);

export const queryClient = new QueryClient();


export default function Wrapper({ children }) {


     const theme = createTheme({
          fontFamily: 'var(--font-manrope)',
          headings: {
               fontFamily: 'var(--font-manrope)',
               fontWeight: '500',
          }
     });



     return (
          <MantineProvider theme={theme}>
               <QueryClientProvider client={queryClient}>
                    <Provider store={Store}>
                    
                         {children}
                              
                         <Notifications />
                    </Provider>
               </QueryClientProvider>
          </MantineProvider>
     );
}
