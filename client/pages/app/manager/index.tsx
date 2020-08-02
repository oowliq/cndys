import React from 'react';
import { NextPage } from 'next';
import { withLayout, AppLayout } from 'layout';
import { withTheme } from 'theme';
import Head from 'next/head';

const ManagerPage: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Manager</title>
            </Head>
            Manager
        </div>
    );
};

export default withTheme(withLayout(ManagerPage, AppLayout));
