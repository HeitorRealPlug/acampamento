import styles from "./Pag1.module.css"

function Pag1() {
    return(
        <div className={styles.tudo}>
        <div>
           <h1 className={styles.texto}>ALGUNS EQUIPAMENTOS PARA O SEU ACAMPAMENTO...</h1>
            <div className={styles.itens}>
                <img className={styles.mochilaimg} src="/mochila.png"/>
                <img className={styles.cabanaimg} src="/cabana.png"/>
                <img className={styles.lanternaimg} src="/lanterna.png"/>
            </div>
            <div className={styles.txts}>
                <p className={styles.mochilatxt}>MOCHILA ACAMPAMENTO</p>
                <p className={styles.cabanatxt}>TENDA ACAMPAMENTO</p>
                <p className={styles.lanternatxt}>LANTERNA ACAMPAMENTO</p>

            </div>
        </div>
        </div>
    )
}

export default Pag1