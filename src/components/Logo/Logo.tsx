import React, { FC } from "react";

interface IProps {
  vertical?: Boolean;
}

export const Logo: FC<IProps> = (props: IProps): JSX.Element => {
  return (
    <div>
      <img src="images/logo-soup.png" alt="Cookify" />
      <h5>JWP</h5>
    </div>
  );
};
