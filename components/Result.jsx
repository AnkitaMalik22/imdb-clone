import React from 'react'

function Result({results}) {
  console.log(results);
  return (
    <div>{results.map((result)=>(
    <h1>{result.title}</h1>
    ))}</div>
  )
}
export default Result;