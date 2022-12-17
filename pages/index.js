import Head from 'next/head'
import Banner from '../components/Banner'

export default function Home() {
  return (
    <>
    <Head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Hotel de Perros</title>
      <meta name="description" content="Estadia para perros" />
      {/* <link rel="icon" href="/favicon.ico" /> */}
    </Head>
    <Banner/>
    </>
  )
}
