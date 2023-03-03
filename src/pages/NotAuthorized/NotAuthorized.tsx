import React, { FC } from "react";
import { Landing as LandingLayout } from "../../layouts";
import { Link } from "react-router-dom";

interface IProps {}

export const NotAuthorized: FC<IProps> = (props: IProps): JSX.Element => {
  return (
    <LandingLayout>
      You are not authorized, you will be redirect to <Link to="/">home</Link> page.
    </LandingLayout>
  );
};
