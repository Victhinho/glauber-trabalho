import './globals.css'
import styles from './styles.module.css'
// import { Quicksand } from 'next/font/google'
export const metadata = {
  title: 'Travel Landing Page',
}



function Logo(){
  return(
    <p className={styles.logo}>Ready<span className={styles.comercial}>&</span>Go</p>
  )
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo>Ready&Go</Logo>
        </header>
        
        {children}</body>
    </html>
  )
}
