import React from "react";
import { Header, Footer, ContentWrapper } from "../../components";

export const Page: React.FunctionComponent = ({ children }) => (
  <div>
    <Header />
    <ContentWrapper>{children}</ContentWrapper>

    <Footer />
  </div>
);
