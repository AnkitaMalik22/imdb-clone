import React from 'react'
import Card from './Card';

function Result({results}) {
  // console.log(results);
  return (
    <div>{results.map((result)=>(
    // <h1 key={result.id} >{result.title}</h1>
    <Card result={result} key={result.id}/>
    ))}</div>
  )
}
export default Result;