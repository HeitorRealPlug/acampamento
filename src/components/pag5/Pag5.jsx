import styles from "./Pag5.module.css"

function Pag5() {
    return(
        <div className={styles.tudinho}>
            <p className={styles.av}>AVALIE NOSSO SITE!</p>
            <img className={styles.star} src="/estrelas.png"/>

            <div>
                <footer className={styles.rodape}></footer>
            </div>
        </div>
    )
}

export default Pag5