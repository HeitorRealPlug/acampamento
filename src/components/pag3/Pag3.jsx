import styles from "./Pag3.module.css"

function Pag3() {
    return(
        <div>

            <iframe className={styles.mapa1} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.9569520627806!2d-48.02690692477963!3d-22.43064602102784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c79f613f8b994f%3A0x88a60bc2863e6435!2sCachoeira%203%20Quedas!5e0!3m2!1spt-BR!2sbr!4v1699359475346!5m2!1spt-BR!2sbr" style={{border: "0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <div>
                <footer className={styles.fo}></footer>
            </div>
        </div>

    )
}

export default Pag3