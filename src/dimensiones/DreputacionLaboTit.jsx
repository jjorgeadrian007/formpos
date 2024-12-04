import { useNavigate } from "react-router-dom";
import { PreguntasReplab } from "./PreguntasRepLab"



export const DreputacionLaboTit = () => {

  const navigate=useNavigate();

    const {Pregunta221, Opciones221, Pregunta331, Opciones331,Pregunta332, Pregunta333, Opciones333,
      Pregunta334, Opciones334,Pregunta335, Opciones335,Pregunta336, Opciones336,
      Pregunta337, Opciones337,
      Pregunta411, Opciones411,
      Pregunta442, Opciones442,
      Pregunta443,
      Pregunta551
      ,p39, p40, p41, p42, p43, p44, p45, p46, p47, p48, p49,p50, 
      p51,
      p52, p53, p54 }=PreguntasReplab()

      const env=(e)=>{
        e.preventDefault()
  
        if ((p40=='Si') && (p51=='Si')){
        const Bloque23={
          p221:p39,
          p331:p40,
  
          p3321:p41,
          p3322:p42,
          p3323:p43,
          p3324:p44,
          p3325:p45,
          p333:p46,
          p334:p47,
          p335:p48,
          p336:p49,

          p337:null,

          p441:p51,
          p442:p52,
          p443:p53,
          p551:p54,

  
        }
        console.log(Bloque23)
        return navigate('/investigacion');
      } else if ((p40=='Si') && (p51=='No')){
        const Bloque23={
          p221:p39,
          p331:p40,
  
          p3321:p41,
          p3322:p42,
          p3323:p43,
          p3324:p44,
          p3325:p45,
          p333:p46,

          p334:p47,
          p335:p48,
          p336:p49,

          p337:null,

          p441:p51,
          p442:null,
          p443:null,
          p551:p54,
        }
        console.log(Bloque23)
        return navigate('/investigacion');
      }else if ((p40=='No') && (p51=='Si')){
        const Bloque23={
          p221:p39,
          p331:p40,
  
          p3321:null,
          p3322:null,
          p3323:null,
          p3324:null,
          p3325:null,
          p333:null,
          p334:null,
          p335:null,
          p336:null,


          p337:p50,

          p441:p51,

          p442:p52,
          p443:p53,
          p551:p54,
  
        }
        console.log(Bloque23)
        return navigate('/investigacion');
      }
      else if ((p40=='No') && (p51=='No')){
        const Bloque23={
          p221:p39,
          p331:p40,
  
          p3321:null,
          p3322:null,
          p3323:null,
          p3324:null,
          p3325:null,
          p333:null,
          p334:null,
          p335:null,
          p336:null,


          p337:p50,

          p441:p51,

          p442:null,
          p443:null,
          p551:p54,
  
        }
        console.log(Bloque23)
        return navigate('/investigacion');
      }

      }


    
    
      return (
  <div className="container lg-12 md-12 mt-2">

    <form onSubmit={env}>
    

      <div className="card card-title text-white bg-secondary bg-gradient " data-bs-toggle="collapse"  >
       <div className="px-3 py-2">
       <i className="bi bi-graph-up-arrow mx-2"></i><b>2. REPUTACION</b>
        </div>
      </div>


      <div className="card card-body my-2 ">
        <div className="row g-2">
          <label htmlFor={Pregunta221[0].id}><b>{Pregunta221[0].enunciado}</b></label>
          <select className="form-select" id={Pregunta221[0].id} aria-label=".form-select-sm" required onChange={Pregunta221[0].funcion} >
          {Opciones221.map(opcion => <option key={opcion.value}  value={opcion.name} >{opcion.name}</option>)}
          </select>
        </div>
      </div>

      
      {/*  PREGUNTAS 3 SITUACIÓN LABORAL ACTUAL*/}

      <div className="card card-title text-white bg-secondary bg-gradient " data-bs-toggle="collapse"  >
       <div className="px-3 py-2">
       <i className="bi bi-duffle-fill mx-2"></i><b>3. SITUACIÓN LABORAL ACTUAL</b>
        </div>
      </div>      

      {/*  PREGUNTA 331*/}
      <div className="card card-body my-2">
        <div className="row g-2">
          <label htmlFor={Pregunta331[0].id}><b>{Pregunta331[0].enunciado}</b></label>
          <select disabled={p39.length>0?false:true}  className="form-select" id={Pregunta331[0].id} aria-label=".form-select-sm" required onChange={Pregunta331[0].funcion} >
          {Opciones331.map(opcion => <option key={opcion.value}  value={opcion.name} >{opcion.name}</option>)}
          </select>
        </div>
      </div>

      { p40=='Si' 
      
      ? 
      
        <div>
          {/*  PREGUNTAS EN CASO SI */}
        <div className="card card-title " data-bs-toggle="collapse" href="#collapse11" role="button" >
          <div className="px-3 py-2"><b>3.2	Información de la Institución/Organización donde trabaja:</b></div>
        </div>
         <div className= 'collapse show'  id="collapse11">
             <div className="card card-body">

             {/*  PREGUNTAS EMPLEADOR */}
              
                 <div className="row g-2">

                  {/*  PREGUNTAS EMPLEADOR 332*/}
                      {Pregunta332.map(opcion => 
                      <div key={opcion.id}>
                      
                       <label htmlFor={opcion.id}><b>{opcion.enunciado}</b></label>
                       <input  className="form-control" type="text" id={opcion.id} aria-label=".form-select-sm" required   onChange={opcion.funcion} /> 
                      </div>
                     )}   
                      </div>   

                    {/*  PREGUNTAS EMPLEADOR 333*/}   
                      <div className="card card-body my-2">
                        <div className="row g-2">
                          <label htmlFor={Pregunta333[0].input}><b>{Pregunta333[0].enunciado}</b></label>
                          <select  className="form-select" id={Pregunta333[0].input} aria-label=".form-select-sm" required onChange={Pregunta333[0].funcion} >
                          {Opciones333.map(opcion => <option key={opcion.value}  value={opcion.name} >{opcion.name}</option>)}
                          </select>
                        </div>
                      </div>

                    {/*  PREGUNTAS EMPLEADOR 334*/}   
                      <div className="card card-body my-2">
                        <div className="row g-2">
                          <label htmlFor={Pregunta334[0].id}><b>{Pregunta334[0].enunciado}</b></label>
                          <select  className="form-select" id={Pregunta334[0].id} aria-label=".form-select-sm" required onChange={Pregunta334[0].funcion} >
                          {Opciones334.map(opcion => <option key={opcion.value}  value={opcion.name} >{opcion.name}</option>)}
                          </select>
                        </div>
                      </div>

                    {/*  PREGUNTAS EMPLEADOR 335*/}   
                    <div className="card card-body my-2">
                        <div className="row g-2">
                          <label htmlFor={Pregunta335[0].id}><b>{Pregunta335[0].enunciado}</b></label>
                          <select  className="form-select" id={Pregunta335[0].id} aria-label=".form-select-sm" required onChange={Pregunta335[0].funcion} >
                          {Opciones335.map(opcion => <option key={opcion.value}  value={opcion.name} >{opcion.name}</option>)}
                          </select>
                        </div>
                      </div>
                      

                    {/*  PREGUNTAS EMPLEADOR 336*/}   
                    <div className="card card-body my-2">
                        <div className="row g-2">
                          <label htmlFor={Pregunta336[0].id}><b>{Pregunta336[0].enunciado}</b></label>
                          <select  className="form-select" id={Pregunta336[0].id} aria-label=".form-select-sm" required onChange={Pregunta336[0].funcion} >
                          {Opciones336.map(opcion => <option key={opcion.value}  value={opcion.name} >{opcion.name}</option>)}
                          </select>
                        </div>
                      </div>                      

             
             </div>
         </div>
         </div> 
      : <h1></h1>
      }

      {
     p40=='No'
     ?
    
      <div className="card card-body my-2">
        {/* PREGUNTAS EN CASO NO * PREGUNTA 338*/}
        <div className="row g-2">
          <label htmlFor={Pregunta337[0].id}><b>{Pregunta337[0].enunciado}</b></label>
          <select  className="form-select" id={Pregunta337[0].id} aria-label=".form-select-sm" required onChange={Pregunta337[0].funcion} >
          {Opciones337.map(opcion => <option key={opcion.value}  value={opcion.name} >{opcion.name}</option>)}
          </select>
        </div>
      </div>
      :<h1></h1>
  
      }




      {/* PREGUNTAS 4.	EDUCACIÓN CONTINUA*/}

      <div className="card card-title text-white bg-secondary bg-gradient " data-bs-toggle="collapse"  >
       <div className="px-3 py-2">
       <i className="bi bi-globe-americas mx-2"></i><b>4. EDUCACIÓN CONTINUA</b>
        </div>
      </div>      

        {/*  PREGUNTA 411*/}
        <div className="card card-body my-2">
        <div className="row g-2">
          <label htmlFor={Pregunta411[0].id}><b>{Pregunta411[0].enunciado}</b></label>
          <select disabled={((p39.length>0)&&(p40.length>0))?false:true}  className="form-select" id={Pregunta411[0].id} aria-label=".form-select-sm" required onChange={Pregunta411[0].funcion} >
          {Opciones411.map(opcion => <option key={opcion.value}  value={opcion.name} >{opcion.name}</option>)}
          </select>
        </div>
        </div>



        {/* COLLAPSE PREGUNTA 442 D1 */}
        {       
                      ((p51=='Si')) 
                      ?
                      <>          
                           
                                <div className="card card-body">
                                    <div className="row g-2">

                                        {/* CARGA DINAMICA bloque PREGUNTA 442 D1*/}
                                      <label htmlFor={Pregunta442[0].id}><b>{Pregunta442[0].enunciado}</b></label>
                                      <select  className="form-select" id={Pregunta442[0].id} aria-label=".form-select-sm" required onChange={Pregunta442[0].funcion} >
                                      {Opciones442.map(opcion => <option key={opcion.value}  value={opcion.name} >{opcion.name}</option>)}
                                      </select>
                                        {/* FIN  CARGA DINAMICA BLOQUE PREGUNTA 442 D1 */}

                                        {Pregunta443.map(opcion => 
                                        <div key={opcion.id}>
                                        <label htmlFor={opcion.id}><b>{opcion.enunciado}</b></label>
                                        <input  className="form-control" type="text" id={opcion.id} aria-label=".form-select-sm" required   onChange={opcion.funcion} /> 
                                        </div>
                     )}                                           
                                  </div>                    
                                </div>
                        
                      </>     
                      :
                      <h1></h1>   
                  } 
                  {/* fIN  PREGUNTA 442  */}

               {/*FIN  PREGUNTAS 4 */}


         
                  {/* PREGUNTAS 5.	EDUCACIÓN CONTINUA*/}
                  <div className="card card-title text-white bg-secondary bg-gradient " data-bs-toggle="collapse"  >
                  <div className="px-3 py-2">
                  <i className="bi bi-hand-thumbs-up-fill mx-2"></i><b>5. RECOMENDACIONES Y SUGERENCIAS</b>
                    </div>
                  </div>                   
      
                    <div className="card card-body my-2">
                    <div className="row g-2">
                      <label htmlFor={Pregunta551[0].id}><b>{Pregunta551[0].enunciado}</b></label>
                      <textarea disabled={((p39.length>0)&&(p40.length>0)&&(p51.length>0))?false:true}  className="form-control" id={Pregunta551[0].id} placeholder="Deja tu comentario" required onChange={Pregunta551[0].funcion} ></textarea>

                    </div>
                  </div>





      <button className="btn btn-primary my-1 " type="submit" >Siguiente</button>


    </form>
        
        
  </div> 
   

      )
    }
    