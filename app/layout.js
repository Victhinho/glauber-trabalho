import './globals.css'
import styles from './styles.module.css'
import Image from 'next/image'
// import { Quicksand } from 'next/font/google'
export const metadata = {
  title: 'Travel Landing Page',
}



function Logo({x, y}){
  return(
    <p style={{left: x, top: y}} className={styles.logo}>Ready<span className={styles.comercial}>&</span>Go</p>
  )
}

function ItemMenu({nome}){

  return(
    <p className={styles.itemMenu}>{nome}</p>
  );
}

function Menu({children, x, y}){

    return(
      <ul style={{left: x, top: y}} className={styles.menu}>
        {children.map((itemMenu) => (<li key={itemMenu.nome}>{itemMenu}</li>))}
      </ul>
    );
}

function Text1({x,y, titulo, subTitulo}){
  return(
    <div style={{left: x, top: y}} className={styles.caixaDeTitulo}>
      <p className={styles.text1}> {titulo}</p>
      <p className={styles.text2}>{subTitulo} </p>
    </div>
  );
}

function Phone({x,y, numero}){
  return(
    <div style={{left: x, top: y}} className={styles.caixaDePhone}>
      <Image src='/phoneicon.svg' width={19} height={19}/>
      <p className={styles.numero}>{numero}</p>
    </div>
  )
}



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo x={135} y={53}/>
          <Menu x={435} y={60}>
          <ItemMenu nome="Home"/>
          <ItemMenu nome="About"/>
          <ItemMenu nome="Contact"/>
          <ItemMenu nome="Blog"/>
          <ItemMenu nome="Videos"/>
          </Menu>
          <Text1 x={135} y={230} titulo={"Your perfect honeymoon"} subTitulo={"Mayami is more than a honeymoon destination – it’s a perfect romantic spot for couples who like  spending time in beach. "}/>
          <Phone x={1102} y={63} numero={"+38(097)8849989"}/>
        </header>
        {children}</body>
    </html>
  )
}
