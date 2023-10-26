
import styles from './page.module.css'
import Image from 'next/image'

import Hawaii from '../public/hawaii.png'
import Cyprus from '../public/cyprus.png'
import Bali from '../public/bali.png'
import Seta from '../public/arrow-right.svg'

import Nuvem1 from '../public/nu.svg'
import Nuvem2 from '../public/vem.svg'
import Elipse from '../public/Elipse.svg'
import Palmeira from '../public/Palms.svg'

function Botao({ x, y }) {
  return (
    <button style={{ left: x, top: y }} className={styles.botaoIniciar}>Iniciar</button>
  )
}

function Card({ localidade, imagem}) {
  return (
    <div className={styles.card}>
      <div className={styles.cabecalhoCard}>
        <p className={styles.localidade}>{localidade}</p>
        <Image src={Seta} />
      </div>
      <Image src={imagem} className={styles.imagem}/>
    </div>
  )
}

function Cards({children, x, y}) {
  return(
    <div style={{left:x, top: y}} className={styles.cards} >
      {children}
    </div>
  )
}

function Palms({x, y, w, z}){
  return(
    <div style={{left:x, top:y, bottom:w, right:z }} className={styles.palms}>
        <Image src={Nuvem1} className={styles.nuvem1}/>
        <Image src={Nuvem2} className={styles.nuvem2}/>
        <Image src={Elipse} className={styles.elipse}/>
        <Image src={Palmeira} className={styles.plameira}/>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Botao x={135} y={601} />
      <Cards x={135} y={801}>
        <Card localidade="Hawaii" imagem={Hawaii}/>
        <Card localidade="Cyprus" imagem={Cyprus}/>
        <Card localidade="Bali" imagem={Bali}/>
      </Cards>
      <Palms x={646} y={191}/>
      
    </>
  )
}
