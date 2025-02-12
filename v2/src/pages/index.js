import React from 'react';
import Layout from '@theme/Layout';

function Hello() {
    return (
        <Layout title="Hello">
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '50vh',
                    fontSize: '20px',
                }}>
                <p>
                    <a href="/docs/community/introduction">Click here</a> to see the docs
                </p>
            </div>
        </Layout>
    );
}

export default Hello;