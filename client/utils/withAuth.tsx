import React from 'react';
import router from 'next/router';
import { authService } from 'services';

const withAuth = <P extends object>(Component: React.ComponentType<P>) =>
    class WithAuth extends React.Component<P> {
        componentDidMount() {
            if (!authService.isLoggedIn) {
                router.push('/auth');
            }
        }

        render() {
            const { ...props } = this.props;
            return !authService.isLoggedIn ? null : <Component {...(props as P)} />;
        }
    };

export { withAuth };
