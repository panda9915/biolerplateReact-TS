import React, { FC } from "react";
import { Authorization as AuthorizationLayout, Landing as LandingLayout } from "../../layouts";
import { useApi, useAuthorization } from "../../hooks";
import { Button, Form, Input } from "antd";

interface IProps {}

export const SignIn: FC<IProps> = (props: IProps): JSX.Element | null => {
  const api = useApi();
  const { isAuthorized, setAuthorization } = useAuthorization();

  const onFinish = ({ username, password }: { username: string; password: string }) => {
    api.authorization.signIn({ username, password, loader: "Process sign in..." })
      .then(({ accessToken, refreshToken, user }) => {
        setAuthorization(accessToken, user, refreshToken);
      })
      .catch(() => {
        // TODO: Add notification!
      });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return !isAuthorized ? (
    <AuthorizationLayout>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ username: "", password: "" }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[ { required: true, message: "Please input your username!" } ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[ { required: true, message: "Please input your password!" } ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </AuthorizationLayout>
  ) : (
    <LandingLayout main={{ className: "d-flex justify-content-center" }}>
      <div>You are authorized!</div>
    </LandingLayout>
  );
};
