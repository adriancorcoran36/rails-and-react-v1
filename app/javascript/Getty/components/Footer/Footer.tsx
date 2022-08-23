import React from "react";

export const Footer: React.FunctionComponent = () => (
  <footer>
    {contentColumn}
    {solutionsColumn}
    {toolsColumn}
    {companyColumn}
  </footer>
);

const contentColumn = (
  <div>
    <h4>Content</h4>
    <p>Royalty-free Creative</p>
    <p>Video</p>
    <p>Editorial</p>
    <p>Archive</p>
    <p>Custom Content</p>
    <p>Creative Collections</p>
  </div>
);

const solutionsColumn = (
  <div>
    <h4>Solutions</h4>
    <p>Overview</p>
    <p>Plans and pricing</p>
    <p>Premium Access</p>
    <p>Assignments</p>
  </div>
);

const toolsColumn = (
  <div>
    <h4>Tools & Services</h4>
    <p>Media Manager</p>
    <p>Rights and clearance</p>
    <p>Plug-ins and extensions</p>
    <p>Creative Insights</p>
    <p>VisualGPS</p>
    <p>VisualGPS Insights</p>
    <p>API Integration</p>
    <p>Search guide</p>
  </div>
);

const companyColumn = (
  <div>
    <h4>Company</h4>
    <p>About us</p>
    <p>Corporate responsibility</p>
    <p>Careers</p>
    <p>Apply to be a contributor</p>
    <p>Newsroom</p>
    <p>Investor</p>
  </div>
);
