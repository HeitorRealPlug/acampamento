import styles from "./Pag4.module.css"

function Pag4() {
    return(
        <div>
            <div><p className={styles.texto2}>PROGRAMA DE AFILIADOS</p></div>
            <div className={styles.alguns}>
                <p className={styles.novi}>NOVIDADES DIÁRIAS SOBRE PASSEIOS TURÍSTICOS

                    SORTEIOS MENSAIS DE PACOTES DE VIAGENS</p>

                <img className={styles.aflimg} src="/afl.png"/>

            </div>
            <div>
                <footer className={styles.rodape0}></footer>
            </div>
        </div>

    )
}

export default Pag4