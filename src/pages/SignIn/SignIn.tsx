import React, { FC } from "react";
import { Authorization as AuthorizationLayout, Landing as LandingLayout } from "../../layouts";
import { useApi, useAuthorization } from "../../hooks";
import { FormikProvider, useFormik } from "formik";
import { signInSchema } from "./SignIn.form";

interface IProps {}

export const SignIn: FC<IProps> = (props: IProps): JSX.Element | null => {
  const api = useApi();
  const { isAuthorized, setAuthorization } = useAuthorization();

  const signInForm = useFormik({
    initialValues: { emailfmt: "", password: "" }, // Don't change [emailfmt] field name!
    validationSchema: signInSchema,
    onSubmit: ({ emailfmt: username, password }) => {
      api.authorization.signIn({ username, password, loader: "Process sign in..." })
        .then(({ accessToken, refreshToken, user }) => {
          setAuthorization(accessToken, user, refreshToken);
        })
        .catch(() => {
          // TODO: Add notification!
        });
    },
  });

  return !isAuthorized ? (
    <AuthorizationLayout>
      <FormikProvider value={signInForm}>
        <form autoComplete="off" onSubmit={signInForm.handleSubmit} noValidate>
          <h1>Welcome</h1>
          <button type="submit">sub</button>
        </form>
      </FormikProvider>
    </AuthorizationLayout>
  ) : (
    <LandingLayout main={{ className: "d-flex justify-content-center" }}>
      <div>You are authorized!</div>
    </LandingLayout>
  );
};
