import {chicas} from './db.js'

const reverso=[...document.querySelectorAll('.tapa')]
let fondos=[...document.querySelectorAll('.index-row-img')]
const botonRandom=document.querySelector('.index-random-button')
let random=Math.round(Math.random()*(15-1)+1)
const adivina=document.querySelector('.index-main-img-adivina')
const titulo=document.querySelector('.index-h1')

botonRandom.style.display='block'

let index=0;

fondos.map(fondo=>{

    fondo.setAttribute('id',`${index++}`)
   
    return fondo

})



   function limpiarIntervalo(final){
       clearTimeout(final)
   }
   

       //9.ejecuta pulsa carta y pasa las variables de las cartas
      function pulsaCarta(fondo,adivina,adivinaTime,reversoTime){
        
       clearTimeout(adivinaTime)
       clearTimeout(reversoTime)
         
      //10.cuando pulsamos carta nos compara si esa carta es igual 
      //a la carta que tenemos abajo descubierta
       
      fondo.addEventListener('click',()=>{
          
         if(fondo.style.backgroundImage===adivina.style.backgroundImage){
             
            titulo.innerHTML=`¡¡¡¡¡CORRECTO!!!!`
             titulo.style.color='#6EDB62'
             titulo.style.backgroundColor='#2E5C29'
             let final=setTimeout(() => {
                window.location.reload()
             },3000);
             limpiarIntervalo()
          
            }else{
            titulo.innerHTML=`¡¡¡¡¡INCORRECTO!!!!`
            titulo.style.color='#DB443E'
            titulo.style.backgroundColor='#5C151C'
            let final=setTimeout(() => {
                window.location.reload()
             },3000);
            limpiarIntervalo()
          }
      })
      
      }

      
    
 




//1.LISTENERS (primero la logica al pulsar boton)

botonRandom.addEventListener('click',(e)=>{
 
    botonRandom.disabled='true'
    //2.sin existe pulsacion del boton generar
        if(random){
     //3.mapeo cartas en otro orden     
        fondos.map(fondo=>fondo.setAttribute('id',`${random-fondo.id}`))
         
        //4.mapeamos otra fondos con la nueva configuración
       fondos.map(fondo=>{
        
  
       
      //5.Según el random (aleatorio) se renderizan las cartas
       
     if(fondo.id==='0'){
        fondo.style.backgroundImage=`url(${chicas[0].img})`
        fondo.style.backgroundSize='cover'
        }
    
       if(fondo.id==='-1' || fondo.id==='15'){
        fondo.style.backgroundImage=`url(${chicas[1].img})`
        fondo.style.backgroundSize='cover'
        fondo.style.backgroundPosition='-20px'                  
       }
       if(fondo.id==='-2' || fondo.id==='14'){
        fondo.style.backgroundImage=`url(${chicas[2].img})`
        fondo.style.backgroundSize='cover'                  
       }
       if(fondo.id==='-3' || fondo.id==='13'){
        fondo.style.backgroundImage=`url(${chicas[3].img})`
        fondo.style.backgroundSize='cover' 
        fondo.style.backgroundPositionX='-20px'                 
       }
       if(fondo.id==='-4' || fondo.id==='12'){
        fondo.style.backgroundImage=`url(${chicas[4].img})`
        fondo.style.backgroundSize='cover'  
       }
       if(fondo.id==='-5' || fondo.id==='11'){
        fondo.style.backgroundImage=`url(${chicas[5].img})`
        fondo.style.backgroundSize='cover'  
       }
       if(fondo.id==='-6' || fondo.id==='10'){
        fondo.style.backgroundImage=`url(${chicas[6].img})`
        fondo.style.backgroundSize='cover' 
        fondo.style.backgroundPositionX='-20px'
       }
       if(fondo.id==='-7' || fondo.id==='9'){
        fondo.style.backgroundImage=`url(${chicas[7].img})`
        fondo.style.backgroundSize='cover'                  
       }
       if(fondo.id==='-8' || fondo.id==='8'){
        fondo.style.backgroundImage=`url(${chicas[8].img})`
        fondo.style.backgroundSize='cover'                  
       }
       if(fondo.id==='-9' || fondo.id==='7'){
        fondo.style.backgroundImage=`url(${chicas[9].img})`
        fondo.style.backgroundSize='cover'                  
       }
       if(fondo.id==='-10' || fondo.id==='6'){
        fondo.style.backgroundImage=`url(${chicas[10].img})`
        fondo.style.backgroundSize='cover'
        fondo.style.backgroundPosition='-23px'                  
       }
       if(fondo.id==='-11' || fondo.id==='5'){
        fondo.style.backgroundImage=`url(${chicas[11].img})`
        fondo.style.backgroundSize='cover'                  
       }
       if(fondo.id==='-12' || fondo.id==='4'){
        fondo.style.backgroundImage=`url(${chicas[12].img})`
        fondo.style.backgroundSize='cover'                  
       }
       if(fondo.id==='-13' || fondo.id==='3'){
        fondo.style.backgroundImage=`url(${chicas[13].img})`
        fondo.style.backgroundSize='cover' 
       }
       if(fondo.id==='-14' || fondo.id==='2'){
        fondo.style.backgroundImage=`url(${chicas[14].img})`
        fondo.style.backgroundSize='cover'  
        fondo.style.backgroundPositionX='-30px'                
       }
       if(fondo.id==='-15' || fondo.id==='1'){
        fondo.style.backgroundImage=`url(${chicas[15].img})`
        fondo.style.backgroundSize='cover'  
       }
          
       //6.Cuando pasen 2 segundos muestrame chicas
       let reversoTime=setTimeout(()=>{
       reverso.map(rever=>rever.style.backgroundColor='transparent')
 
       
        
      },2000)
      //7.Cuando pasen 7 segundos esconde chicas, muestra la 
      //chica que hay que acertar y llama a función que esta arriba 
      //pulsaCarta
      
      let adivinaTime=setTimeout(()=>{
        adivina.style.backgroundImage=`url(${chicas[`${random}`].img})`
        adivina.style.backgroundSize='cover'
        reverso.map(rever=>rever.style.backgroundColor='violet')
        pulsaCarta(fondo,adivina,adivinaTime,reversoTime)
      },7000)
   
      
          
    })
        
    }    
    
    })
       

    
     
        
