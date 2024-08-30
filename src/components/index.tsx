import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Mi Aplicación</title>
        <meta name="description" content="Mi aplicación con Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Bienvenido a Mi Aplicación</h1>
        <Link href="/about">Ir a la página de Acerca de</Link>
      </main>

      <footer>
        <p>Footer</p>
      </footer>
    </div>
  )
}

export default Home
