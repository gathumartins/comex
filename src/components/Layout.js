import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
    return (
        <Fragment>
            <Header />
            <main id="primary">
                {children}
            </main>
            <Footer />
        </Fragment>
    )
}

export default Layout;
