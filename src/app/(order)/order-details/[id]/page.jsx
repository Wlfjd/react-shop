import React from "react";

function OrderDetails({ params, searchParams }) {
  const { id } = params;
  console.log(searchParams);
  return <div>OrderDetails{id}</div>;
}

export default OrderDetails;
