import React from 'react';
import { useRouter } from 'next/router';
import { Layout } from 'antd';
import Header from './Header';
import Footer from './Footer';
import SideNav from './SideNav';

const { Content, Sider } = Layout;

type TProps = {
    children: JSX.Element;
};

const AppLayout = ({ children }: TProps) => {
    const router = useRouter();

    const isSideNavHidden =
        router.pathname === '/login' || router.pathname === '/signup' || router.pathname === '/forgot-password';

    return (
        <Layout className="layout">
            <Header />
            <Layout>
                <Sider theme="light" hidden={isSideNavHidden}>
                    <SideNav />
                </Sider>
                <Content>{children}</Content>
            </Layout>
            <Footer />
        </Layout>
    );
};

export default AppLayout;
