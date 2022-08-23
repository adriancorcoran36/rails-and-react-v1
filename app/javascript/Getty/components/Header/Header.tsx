import React from "react";
import { Logo, Nav, UserNav } from "../index";

export const Header: React.FunctionComponent = () => (
  <section id="header">
    <Nav />
    <Logo />
    <UserNav />
  </section>
);
