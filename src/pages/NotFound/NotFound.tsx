import React, { FC } from "react";
import { Landing as LandingLayout } from "../../layouts";

interface IProps {}

export const NotFound: FC<IProps> = (props: IProps): JSX.Element => {
  return (
    <LandingLayout>
      404, Not found!
    </LandingLayout>
  );
};
