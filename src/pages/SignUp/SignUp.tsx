import React, { FC } from "react";
import { Authorization as AuthorizationLayout, Landing as LandingLayout } from "../../layouts";
import { useApi, useAuthorization } from "../../hooks";
import { FormikProvider, useFormik } from "formik";

interface IProps {}

export const SignUp: FC<IProps> = (props: IProps): JSX.Element => {
  const api = useApi();
  const { isAuthorized } = useAuthorization();

  const form = useFormik({
    initialValues: { email: "", password: "", confirmPassword: "", firstname: "", lastname: "" },
    onSubmit: ({ email, lastname, firstname, password }) => {
      api.authorization.signUp({ email, lastname, firstname, password, loader: "Creating account..." })
        .then(() => {
          form.resetForm();
        });
    },
  });

  return !isAuthorized ? (
    <AuthorizationLayout>
      <FormikProvider value={form}>
        <form className="text-white" autoComplete="off" onSubmit={form.handleSubmit} noValidate>
          <h1 className="fs-1 ms-4 mb-0 text-bright">Create account</h1>
          <button type="submit">Submit</button>
        </form>
      </FormikProvider>
    </AuthorizationLayout>
  ) : (
    <LandingLayout>
      <div>You are authorized!</div>
    </LandingLayout>
  );
};
