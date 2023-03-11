import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Guillaume Augustoni</title>
        <meta name="description" content="Blog of Guillaume Augustoni" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🚧</text></svg>"/>
      </Head>
      <main className={`${styles.main} ${inter.className}`} >
          🚧 Site en construction 🚧
      </main>
    </>
  )
}
