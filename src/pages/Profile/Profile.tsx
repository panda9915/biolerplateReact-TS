import React, { FC } from "react";
import { Landing as LandingLayout } from "../../layouts";

interface IProps {}

export const Profile: FC<IProps> = (props: IProps): JSX.Element => {
  return (
    <LandingLayout>
      Profile page
    </LandingLayout>
  );
};
