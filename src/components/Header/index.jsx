import styles from './Header.module.css'

const Header = () => {
   return(
      <div className={styles.header} >
         <h1 className={styles.title}>Calculadora de IMC</h1>
         <p className={styles.text}>Calcule aqui seu indice de massa corporal, saúde é o que interessa, o resto não tem pressa!</p>
      </div>
   )
}

export default Header