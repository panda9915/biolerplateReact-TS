import React, { FC } from "react";
import { Landing as LandingLayout } from "../../layouts";

interface IProps {}

export const Main: FC<IProps> = (props: IProps): JSX.Element => {
  return (
    <LandingLayout>
      Main page
    </LandingLayout>
  );
};
