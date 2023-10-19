
import styles from './page.module.css'
import Image from 'next/image'
import Hawaii from '../public/hawaii.png'
import Cyprus from '../public/cyprus.png'
import Bali from '../public/bali.png'
import Seta from '../public/arrow-right.svg'

function Botao({ x, y }) {
  return (
    <button style={{ left: x, top: y }} className={styles.botaoIniciar}>Iniciar</button>
  )
}

function Card({ localidade, imagem}) {
  return (
    <div className={styles.card}>
      <p className={styles.localidade}>{localidade}</p>
      <Image src={Seta} />
      <Image src={imagem} />
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Botao x={135} y={560} />
      <Card localidade="Hawaii" imagem={Hawaii}/>
      <Card localidade="Cyprus" imagem={Cyprus}/>
      <Card localidade="Bali" imagem={Bali}/>
    </>
  )
}
