import React from "react";

type params = {
  id: string;
};

export default function page({ params }) {
  return <div>{params.id}</div>;
}
