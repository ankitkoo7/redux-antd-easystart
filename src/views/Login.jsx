import { Avatar, Button, Checkbox, Form, Input } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginAction } from "../store/_actions/authAction";
import { BiUser } from "react-icons/bi";
export const Login = () => {
  const dispatch = useDispatch();
  const nagivate = useNavigate();

  const initialValues = {
    username: "",
    password: "",
    remember: true,
  };

  const onFinish = (values) => {
    dispatch(loginAction(values, nagivate));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="login-form">
      <Avatar
        style={{ backgroundColor: "#1890ff", marginBottom: "1rem" }}
        size={75}
        icon={<BiUser />}
      />
      <Form
        name="basic"
        initialValues={initialValues}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <h4 className="title">Antd Login Form</h4>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
