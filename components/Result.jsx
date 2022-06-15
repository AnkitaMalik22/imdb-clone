import React from 'react'
import Card from './Card';

function Result({results}) {
  // console.log(results);
  return (
    <div className='bg-gray-700 text-gray-200 select-none sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  2xl:grid-cols-5 '>
      {results.map((result)=>(
    // <h1 key={result.id} >{result.title}</h1>
    <Card result={result} key={result.id}/>
    ))}</div>
  )
}
export default Result;