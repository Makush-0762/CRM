import React from 'react';
import Layout from '../layout/Layout.js';
import Main from '../layout/Main.js';

export default function Product() {
    return (
        <Layout>
            <Main classN="otherPage">
                <p style={{ fontSize: '72px' }}>/Product</p>
            </Main>
        </Layout>
    );
}
