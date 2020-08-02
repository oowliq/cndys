import React, { useEffect } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

const MainPage: NextPage = () => {
    const router = useRouter();

    useEffect((): void => {
        router.push('auth');
    }, []);

    return <div>Main page</div>;
};

export default MainPage;
