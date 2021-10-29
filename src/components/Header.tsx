import React, { useState } from 'react';
import { Layout, Typography, Spin, Dropdown, Menu, Button, Avatar } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { DownOutlined } from '@ant-design/icons';

const { Header } = Layout;
const { Text } = Typography;

const AppHeader = () => {
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleNavToClick = (path: string) => {
        router.push(path);
    };

    return (
        <Header className="container">
            <div className="content">
                <Link href="/">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a>
                        <Text className="logo">Acquisitions</Text>
                    </a>
                </Link>
                <div>
                    {isLoading ? (
                        <Spin />
                    ) : (
                        <>
                            {isLoggedIn ? (
                                <>
                                    <Dropdown
                                        overlay={
                                            <Menu>
                                                <Menu.Item>
                                                    <Button
                                                        type="primary"
                                                        // onClick={handleLogout}
                                                    >
                                                        Profile
                                                    </Button>
                                                </Menu.Item>
                                                <Menu.Item>
                                                    <Button
                                                        type="link"
                                                        danger
                                                        // onClick={handleLogout}
                                                    >
                                                        Logout
                                                    </Button>
                                                </Menu.Item>
                                            </Menu>
                                        }
                                        placement="bottomRight">
                                        <Button>
                                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                        </Button>
                                    </Dropdown>
                                </>
                            ) : (
                                <>
                                    <Button type="primary" onClick={() => handleNavToClick('/login')}>
                                        Log in
                                    </Button>
                                    <Text type="secondary">or</Text>
                                    <Button
                                        className="create-account"
                                        type="link"
                                        onClick={() => handleNavToClick('/signup')}>
                                        Create account
                                    </Button>
                                </>
                            )}
                        </>
                    )}
                </div>
            </div>
        </Header>
    );
};
export default AppHeader;
