import React from 'react';
import Header from '../components/header';
import Margin from '../components/container';
import Head from 'next/head';

const layout =(props)=>{
    return(
        <Margin>
            <Head>    <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
        ></link></Head>
    
            <Header></Header>
            
    {props.children}
   
    
    </Margin>
    )

}
export default layout;