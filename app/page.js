
import styles from './page.module.css'
import Image from 'next/image'
import Hawaii from '../public/hawaii.png'
import Cyprus from '../public/cyprus.png'
import Bali from '../public/bali.png'
import Seta from '../public/arrow-right.svg'
import Facebook from '../public/facebook.svg'
import Twitter from '../public/twitter.svg'
import Linkedin from '../public/linkedin.svg'

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

function Social(imagem){
  return(
    <Image src={imagem} className={styles.imagemRedesSociais}/>
  )
}

function Sociais({children, x, y}) {
  return(
    <div style={{left: x, top: y}} className={styles.social}>
      {children}
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
      <Sociais x={1175} y={843}>
        <Social imagem={Facebook}/>
        <Social imagem={Twitter}/>
        <Social imagem={Linkedin}/>
      </Sociais>
    </>
  )
}
