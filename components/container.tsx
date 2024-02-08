import React from "react";

type container = {
  children: React.ReactNode;
  pageTitle: string;
};

export const Container = ({ children, pageTitle }: container) => {
  return (
    <main className="container mt-5">
      <h1 className="text-4xl font-semibold">{pageTitle}</h1>
      {children}
    </main>
  );
};
