import styles from '@/styles/Acceuil.module.css'
export default function Page() {
    return Hook();
}

function Hook(){
    return <div className={styles.hook}>
        <h3>Vous cherchez un développeur Java ou un ingénieur en science des données ? </h3>
        <h3>Ne cherchez pas plus loin, c&apos;est <div className={styles.nom}><h3>Guillaume Augustoni</h3> </div> qu&apos;il vous faut</h3>
    </div>;
}