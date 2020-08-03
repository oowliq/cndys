import { useEffect } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

const MainPage: NextPage = () => {
    const router = useRouter();

    useEffect((): void => {
        router.replace('/app/manager');
    });
    return null;
};

export default MainPage;
