import React, { FC } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { withCheckAuthorization } from "../../hocs";
import * as Page from "../../pages";

interface IProps {}

const PageProfileWithCheckAuthorization = withCheckAuthorization(Page.Profile);
const PageMainWithCheckAuthorization = withCheckAuthorization(Page.Main);
export const Router: FC<IProps> = (props: IProps): JSX.Element => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Page.Home />} />
        <Route path="/sign-in" element={<Page.SignIn />} />
        <Route path="/sign-up" element={<Page.SignUp />} />
        <Route path="/profile" element={<PageProfileWithCheckAuthorization />} />
        <Route path="/main" element={<PageMainWithCheckAuthorization />} />
        <Route path="*" element={<Page.NotFound />} />
      </Routes>
    </HashRouter>
  );
};
