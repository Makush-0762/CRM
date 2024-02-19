import React, { Component } from 'react';
import Layout from '../layout/Layout.js';
import '../../App.css';
import Main from '../layout/Main.js';

export default class CustomersItem1 extends Component {
    render() {
        return (
            <Layout>
                <Main classN="otherPage">
                    <p style={{ fontSize: '72px' }}>/Customers/Customers item1</p>
                </Main>
            </Layout>
        );
    }
}
