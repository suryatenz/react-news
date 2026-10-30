import React from "react";

export default function Tests() {
  const data = [
    {
      id: "550",
      name: "surya",
    },
    {
      id: "549",
      name: "snake",
    },
    {
      id: "504",
      name: "dal",
    },
  ];

  const ret = data.map((da) => {
    const itemsa = `${da.id}-${da.name}`;
    return <li key={da.id}>
        <p>{itemsa}</p></li>;
  });

  return (
    <div>
      <ul>{ret}</ul>
    </div>
  );
}
