import React from "react";

export const Result = React.memo(({n = 0}) => {
  console.log('Result rerender')
  return (
    <div>
      Here
      <h1>{n}</h1>
    </div>
  )
})