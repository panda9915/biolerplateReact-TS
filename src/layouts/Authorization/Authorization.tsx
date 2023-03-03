import React, { FC } from "react";
import { classes } from "../../utils";

interface IProps {
  main?: {
    className?: string;
  };
  children?: React.ReactNode | React.ReactNode[];
}

export const Authorization: FC<IProps> = ({ main, children }: IProps): JSX.Element => {
  return (
    <main className={classes(main?.className)}>
      {children}
    </main>
  );
};
