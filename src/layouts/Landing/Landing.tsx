import React, { FC } from "react";
import { Footer, Header } from "../../components";
import { classes } from "../../utils";

interface IProps {
  main?: {
    className?: string;
  };
  children?: React.ReactNode | React.ReactNode[];
}

export const Landing: FC<IProps> = ({ main, children }: IProps): JSX.Element => {
  return (
    <div>
      <Header />
      <main className={classes(main?.className)}>
        {children}
      </main>
      <Footer />
    </div>
  );
};
