import React, { useState } from "react";

const MyName = () => {
  const [name, setName] = useState("");

  const PrintName = () => {
    setName("ron");
    console.log("succese");
  };

  return (
    <div>
      <button onClick={PrintName}>Print</button>
      <div>{name}</div>
    </div>
  );
};

export default MyName;
