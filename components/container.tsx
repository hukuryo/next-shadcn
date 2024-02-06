import React from "react";

type container = {
  children: React.ReactNode;
  pageTitle: string;
};

export const Container = ({ children, pageTitle }: container) => {
  return (
    <main className="container">
      <p>{pageTitle}</p>
      {children}
    </main>
  );
};
