import React from 'react';
import Layout from './layout/Layout.js';
import Main from './layout/Main.js';

export default function Dashboard() {
    return (
        <Layout>
            <Main classN="otherPage">
                <p style={{ fontSize: '72px' }}>/Dashboard</p>
            </Main>
        </Layout>
    );
}
