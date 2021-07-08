import React, { useState } from "react";

const Display = (props) => {

  const [total, setTotal] = useState(0);

  return <div className="display">{/* Display any props data here */}{ total }</div>;
};

export default Display;
