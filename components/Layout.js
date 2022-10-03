import Head from 'next/head';
import React, { Fragment } from 'react'
import Banners from './Banners';
import Navbars from './Navbars';

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Safs - Factura Rapido...!</title>
                <meta name="description" content="Factura mas rapido con Safs" />
                <link rel="icon" href="/sf.png" />
            </Head>
            <Navbars></Navbars>
            <Banners></Banners>
            {children}
        </>
    )
}
export default Layout;
