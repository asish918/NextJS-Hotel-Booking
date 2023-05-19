import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Airbnb</title>
        <meta name="description" content="Airbnb clone 2.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='text-rose-500 text-2xl'>
        Hello Airbnb clone
      </div>
    </div>
  );
} 
