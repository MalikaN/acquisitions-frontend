import React from 'react';

import { Form, Input, Button, Row, Col } from 'antd';
import { Formik, FormikErrors } from 'formik';
import Link from 'next/link';

// assets
import eyeInVisible from '../assets/hide.svg';
import eyeVisible from '../assets/show.svg';

const Login = () => {
    const submitForm = () => {};
    const validate = (values): FormikErrors => {};

    return (
        <div>
            <Row className="justify-center">
                <Col xs={24} md={10} lg={8} xl={8}>
                    <div className="inner-card">
                        <h3 className="heading-section">Sign in</h3>
                        <Formik
                            initialValues=""
                            validate={validate}
                            onSubmit={submitForm}
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                marginTop: 10,
                            }}>
                            {({ errors, handleChange, handleSubmit, values }) => (
                                <Form onFinish={handleSubmit} layout="vertical" colon={false}>
                                    <Form.Item
                                        label="Email"
                                        help={errors.email}
                                        validateStatus={errors.email ? 'error' : ''}>
                                        <Input
                                            type="email"
                                            name="email"
                                            className="form-input"
                                            value={values.email}
                                            onChange={handleChange}
                                            placeholder="example@email.com"
                                            size="large"
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        label="Password"
                                        name="password"
                                        help={errors.password}
                                        validateStatus={errors.password ? 'error' : ''}
                                        style={{ marginTop: 15 }}>
                                        <Input.Password
                                            name="password"
                                            className="form-input"
                                            value={values.password}
                                            onChange={handleChange}
                                            type="password"
                                            size="large"
                                            iconRender={(visible) =>
                                                visible ? (
                                                    <img src={eyeVisible} alt="eye-visible" />
                                                ) : (
                                                    <img src={eyeInVisible} alt="eye-invisible" />
                                                )
                                            }
                                        />
                                    </Form.Item>
                                    <Form.Item colon={false} style={{ marginTop: 30 }}>
                                        <Row>
                                            <Button
                                                type="primary"
                                                htmlType="submit"
                                                // loading={loading}
                                                size="large"
                                                className="primarycta"
                                                block>
                                                Sign in
                                            </Button>
                                            <div style={{ margin: '20px 0' }}>
                                                {'Forgot password? '}
                                                <Link href="/forgot-password" style={{ fontWeight: 600 }}>
                                                    Reset here
                                                </Link>
                                            </div>
                                        </Row>
                                    </Form.Item>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={24} lg={0}>
                    <div
                        style={{
                            margin: 0,
                            fontSize: 14,
                            display: 'flex',
                            justifyContent: 'left',
                            marginLeft: 10,
                        }}>
                        New to Rooster?
                        <Link href="/create-account" style={{ marginLeft: 10, fontWeight: 600 }}>
                            &nbsp;Register now
                        </Link>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Login;
