import React from 'react';

const withLayout = <P extends object>(Component: React.ComponentType<P>, Layout: React.ComponentType) =>
    class WithLayout extends React.Component<P> {
        render() {
            const { ...props } = this.props;
            return (
                <Layout>
                    <Component {...(props as P)} />
                </Layout>
            );
        }
    };

export { withLayout };
