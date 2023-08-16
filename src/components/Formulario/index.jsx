import { useState } from "react"
import styles from './Formulario.module.css'

const Formulario = () => {
   let [peso, setPeso] = useState(0);
   let [altura, setAltura] = useState(0);

   const calculadoraImc = () => {
      const quadradoAltura = altura * altura;
      const resultado = peso / quadradoAltura;

      if (resultado >= 40){
         return (
            <div className={styles.red}>
               <p>Seu IMC é de {resultado.toString().substring(0, 4)}</p>
               <b>Você esta com obesidade extrema!</b>
            </div>
         )
      } else if (resultado >= 30) {
         return (
            < div className={styles.orange}>
               <p>Seu IMC é de: {resultado.toString().substring(0, 4)}</p>
               <b>Você esta com obesidade!</b>
            </div>
         )
      } else if (resultado >= 25) {
         return (
            <div className={styles.yellow}>
               <p>Seu IMC é de: {resultado.toString().substring(0, 4)}</p>
               <b>Você esta com excesso de pesso!</b>
            </div>
         )
      } else if (resultado >= 18.5) {
         return (
            <div className={styles.green}>
               <p>Seu IMC é de: {resultado.toString().substring(0, 4)}</p>
               <b>Você esta no seu peso normal!</b>
            </div>
         )
      }  else if (resultado >= 0) {
         return (
            <div className={styles.blue}>
               <p>Seu IMC é de: {resultado.toString().substring(0, 4)}</p>
               <b>Você esta com baixo peso!</b>
            </div>
         )
      }  
      
   }
   return(
      <>
         <form className={styles.form}>
            <input className={styles.input} type="number" required placeholder="Sua altura ex: 1.70" onChange={evento => setAltura(evento.target.value)} />
            <input className={styles.input} type="number" required placeholder="Seu peso ex: 80" onChange={evento => setPeso(evento.target.value)}/>
         </form>
         <div className={styles.answer}>
            {calculadoraImc()}
         </div>
         <img className={styles.image} src="https://caradebarro.com.br/wp-content/uploads/2023/01/tabela-de-calculo-de-imc-ciclismo-emagrecimento.jpg" alt="" />
      </>
   )
}

export default Formulario