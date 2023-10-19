
import styles from './page.module.css'

function Botao({x,y}){
  return(
    <button style={{left:x, top:y}} className={styles.botaoIniciar}>Iniciar</button>
  )
}

export default function Home() {
  return (
    <Botao x={135} y={560}/>
  )
}
