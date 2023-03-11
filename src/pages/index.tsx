import Head from 'next/head'
import styles from '@/styles/Acceuil.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Guillaume Augustoni</title>
        <meta name="description" content="Blog of Guillaume Augustoni" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🚧</text></svg>"/>
      </Head>
      <main >
          <div className={styles.hook}>
          <h3>Vous cherchez un développeur Java ou un ingénieur en science des données ? </h3>
          <h3>Ne cherchez pas plus loin, c&apos;est <div className={styles.nom}><h3>Guillaume Augustoni</h3> </div> qu&apos;il vous faut</h3>
      </div>
      </main>
    </>
  )
}
