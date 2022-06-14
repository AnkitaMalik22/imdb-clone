import Head from 'next/head'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Result from '../components/Result'
import requests from '../utils/requests'

export default function Home({results}) {
  // console.log(results);
  return (
    <div >
      <Head>
        <title>IMDB Clone</title>
        <meta name="description" content="Generated by create next app & tailwind css" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />
      {/* Navbar */}
      <Navbar />
      {/* Results */}
      <Result results={results} />


    </div>
  )
}
export async function getServerSideProps(context){
  const genre=context.query.genre || 'fetchTrending';
  const request=await fetch(`https://api.themoviedb.org/3${requests[genre].url}`)
  .then(response=>response.json())
  // .then(data=>console.log(data))
  return{
    props:{
      results:request.results
    }
  }
}
