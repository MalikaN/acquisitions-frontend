/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Link from 'next/link';
import { Form, Input, Button, Row, Col, Typography } from 'antd';
import { Formik, FormikErrors } from 'formik';

// assets
import eyeInVisible from '../assets/hide.svg';
import eyeVisible from '../assets/show.svg';

const { Text } = Typography;

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const SignUp = (): JSX.Element => {
    const validate = (values) => {};

    const submitForm = async (values) => {};

    return (
        <div>
            <Row className="justify-center">
                <Col>
                    <div className="inner-card">
                        <h2>Signup</h2>

                        <Formik
                            initialValues={{
                                firstName: '',
                                lastName: '',
                                email: '',
                                password: '',
                            }}
                            validate={validate}
                            onSubmit={submitForm}
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                marginTop: 10,
                            }}>
                            {({ errors, handleChange, handleSubmit, values }) => (
                                <Form onFinish={handleSubmit} layout="vertical" colon={false}>
                                    <Row gutter={16} justify="space-between">
                                        <Col span={12}>
                                            <Form.Item
                                                label="First name"
                                                help={errors.firstName}
                                                validateStatus={errors.firstName ? 'error' : ''}>
                                                <Input
                                                    name="firstName"
                                                    className="form-input"
                                                    onChange={handleChange}
                                                    value={values.firstName}
                                                    size="large"
                                                />
                                            </Form.Item>
                                        </Col>
                                        <Col span={12}>
                                            <Form.Item
                                                label="Last name"
                                                help={errors.lastName}
                                                validateStatus={errors.lastName ? 'error' : ''}>
                                                <Input
                                                    name="lastName"
                                                    className="form-input"
                                                    onChange={handleChange}
                                                    value={values.lastName}
                                                    size="large"
                                                />
                                            </Form.Item>
                                        </Col>
                                    </Row>

                                    <Form.Item
                                        label="Email address"
                                        help={errors.email}
                                        validateStatus={errors.email ? 'error' : ''}
                                        style={{ marginTop: 5 }}>
                                        <Input
                                            type="email"
                                            name="email"
                                            className="form-input"
                                            placeholder="example@email.com"
                                            onChange={handleChange}
                                            value={values.email}
                                            size="large"
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        label={<span>Password&nbsp;</span>}
                                        help={errors.password}
                                        validateStatus={errors.password ? 'error' : ''}
                                        style={{ marginTop: 14 }}>
                                        <Input.Password
                                            name="password"
                                            className="form-input"
                                            onChange={handleChange}
                                            value={values.password}
                                            type="password"
                                            size="large"
                                            iconRender={(visible) =>
                                                visible ? (
                                                    <img src={eyeVisible} alt="" />
                                                ) : (
                                                    <img src={eyeInVisible} alt="" />
                                                )
                                            }
                                        />
                                    </Form.Item>
                                    <div style={{ marginTop: 30 }}>
                                        <Button
                                            block
                                            type="primary"
                                            htmlType="submit"
                                            // loading={loading}
                                            size="large"
                                            className="primarycta"
                                            style={{
                                                borderRadius: 5,
                                            }}>
                                            Create profile
                                        </Button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                        <Row>
                            <Col xs={0} md={24} lg={24} xl={24}>
                                <div
                                    style={{
                                        padding: '1rem 0rem',
                                        marginTop: '3rem',
                                        textAlign: 'center',
                                        fontSize: 14,
                                    }}>
                                    Already have an account? &nbsp;
                                    <Link href="/sign-in">Sign in</Link>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default SignUp;
