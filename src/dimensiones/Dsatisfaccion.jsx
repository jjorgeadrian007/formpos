

import {  useNavigate } from "react-router-dom";
import { Preguntas } from "./PreguntasSatisfaccion";

export const Dsatisfaccion = () => {

  const navigate=useNavigate();

  // CAMBIAR CON EL ID  DE LA MAESTRIA 
  const maestriaId=1

  const {PreguntasCalidadD1,PreguntaAconte, Preguntas13D1,Preguntas14D1M1,
    Preguntas14DMInfor,Preguntas14DMatFisica,Preguntas14DMQuiBio,Preguntas14DMDiversidad,Preguntas14DMIngles,
    Preguntas14DMLite,Preguntas14DMInic,
    Preguntas15D1, opcionesG1,opcionesG2 ,disableF,enableF, 
    p1,	p2,	p3,	p4,	p5,	p6,	p7,	p8,	p9,	p10,p11,p12,p13, p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,
    p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38
        }=Preguntas()
  
       const env=(e)=>{
        e.preventDefault();
        const bloque1={
          p1:p1,
          p2:p2,
          p3:p3,
          p4:p4,
          p5:p5,
          p6:p6,
          p7:p7,
          p8:p8,
          p9:p9,
          p10:p10,
          p11:p11,

          p12:p12,
          p13:p13, 

          p14:p14,
          p15:p15,
          p16:p16,
          p17:p17,
          p18:p18,
          p19:p19,
          p20:p20,
          p21:p21,
          p22:p22,
          p23:p23,
          p24:p24,

          p25:p25,
          p26:p26,
          p27:p27,
          p28:p28,

          p29:p29,
          p30:p30,
          p31:p31,
          p32:p32,
          p33:p33,
          p34:p34,
          p35:p35,
          p36:p36,
          p37:p37,
          p38:p38

        }
        
        console.log(bloque1)
        return navigate('/reputacion');
      }
    
      return (
    <div className="container lg-12 md-12 mt-2">
        
      <div className="card card-title text-white bg-secondary bg-gradient " data-bs-toggle="collapse"  >
        <div className="px-3 py-2">
        <i className="bi bi-file-arrow-up-fill mx-2"></i><b>1. SATISFACCIÓN</b>
        </div>
      </div>

   
        
         {/* COLLAPSE PREGUNTA 1.1 D1 */}
          
            <form onSubmit={env}>

            <div className="card card-title " data-bs-toggle="collapse" href="#collapse11" role="button" >
             <div className="px-3 py-2"><b>1.1	Indique el nivel de satisfacción en la calidad de la formación académica recibida según los siguientes criterios</b></div>
           </div>
            <div className={((p16.length > 0) )? 'collapse': 'collapse show' } id="collapse11">
                <div className="card card-body">
                    <div className="row g-2">

                        {/* CARGA DINAMICA bloque PREGUNTA 1.1 D1 */}
                         {PreguntasCalidadD1.map(opcion => 
                         <div key={opcion.id} className="form-floating ">
                          <select disabled={opcion.value>0 ? enableF:disableF} className="form-select" aria-label={opcion.id} required  onChange={opcion.funcion}>
                            {opcionesG1.map(opcion => <option key={opcion.value}  value={opcion.value} >{opcion.name}</option>)}
                          </select>
                          <label htmlFor={opcion.id} className="text-primary"><h5>{opcion.enunciado}</h5></label>
                         </div>
                        )}
                        {/* FIN  CARGA DINAMICA BLOQUE PREGUNTA 1.1 D1 */}
                  </div>                    
                </div>
            </div>
            {/* FIN COLLAPSE PREGUNTA 1.1 D1 */}

                {
                          ((p1.length> 0)&&(p2.length> 0)&&(p3.length> 0)&&(p4.length> 0)&&(p5.length> 0)&&(p6.length> 0)&&(p7.length> 0)&&(p8.length> 0)&&(p9.length> 0)&&(p10.length> 0)&&(p11.length> 0)
                          &&(p12.length> 0)&&(p13.length> 0)&&(p14.length> 0)&&(p15.length> 0)) 
                          ?
                              <>

                              {/* PREGUNTA 12  */}
                                    <div className="card card-body my-2">
                                    <div className="row g-2">
                                        <label htmlFor="p12"><b>{PreguntaAconte[0].enunciado}</b></label>
                                        <select  className="form-select" id="p12" aria-label=".form-select-sm" required   onChange={PreguntaAconte[0].funcion} >
                                        {opcionesG2.map(opcion => <option key={opcion.value}  value={opcion.value} >{opcion.name}</option>)}
                                        </select>
                                  </div>
                                  </div>

                                {/* FIN PREGUNTA 12  */}

                              </>
                          :
                              <div className="my-2 alert alert-danger" role="alert">Llene todos los campos</div>
                }

                
                {/* COLLAPSE PREGUNTA 1.3 D1 */}
                {       
                      ((p16.length> 0)) 
                      ?
                      <>          
                     
                     <div className="card card-title" data-bs-toggle="collapse" href="#collapseP13D1" role="button" >
                      <div className="px-3 py-2"><b>1.3	¿Cuál es el nivel de satisfacción con respecto a las competencias genéricas adquiridas durante el programa de maestría?</b></div>
                      </div>
                            <div className={((p17.length> 0) && (p18.length> 0) && (p19.length> 0) && (p20.length> 0)&& (p21.length> 0)&& (p22.length> 0)&& (p23.length> 0)&& (p24.length> 0)
                            && (p25.length> 0)&& (p26.length> 0)&& (p27.length> 0)) ? 'collapse':'collapse show'} id="collapseP13D1">
                                <div className="card card-body">
                                    <div className="row g-2">

                                        {/* CARGA DINAMICA bloque PREGUNTA 1.3 D1 */}
                                        {Preguntas13D1.map(opcion => 
                                        <div key={opcion.id} className="form-floating ">
                                          <select disabled={opcion.value>0 ? enableF:disableF} className="form-select" aria-label={opcion.id} required  onChange={opcion.funcion}>
                                            {opcionesG1.map(opcion => <option key={opcion.value}  value={opcion.value} >{opcion.name}</option>)}
                                          </select>
                                          <label htmlFor={opcion.id} className="text-primary"><h5>{opcion.enunciado}</h5></label>
                                        </div>
                                        )}
                                        {/* FIN  CARGA DINAMICA BLOQUE PREGUNTA 1.3 D1 */}
                                  </div>                    
                                </div>
                            </div>
                      </>     
                       :
                       <h1></h1>   
                  } 
                  {/* fIN COLLAPSE PREGUNTA 1.3 D1 */}



               {/*  PREGUNTA MAESTRIA MATEMATICA 1.4 D1 */}
                  {maestriaId==1?

                  <>
                   { ((p17.length> 0) && (p18.length> 0) && (p19.length> 0) && (p20.length> 0)&& (p21.length> 0)&& (p22.length> 0)&& (p23.length> 0)&& (p24.length> 0)
                      && (p25.length> 0)&& (p26.length> 0)&& (p27.length> 0))
                      ?
                      <>
                      <div className="card card-title my-2" data-bs-toggle="collapse" href="#collapseP14D1" role="button" >
                      <div className="px-3 py-2 "><b>1.4	Cómo ha contribuido el programa de maestría al desarrollo de las competencias del perfil de egreso.</b></div>
                      </div>
                            <div className={((p32.length> 0) && (p33.length> 0) && (p34.length> 0) && (p35.length> 0)
                            && (p36.length> 0) && (p37.length> 0)&& (p38.length> 0)   )? 'collapse': 'collapse show'} id="collapseP14D1">
                                <div className="card card-body">
                                    <div className="row g-2">
                                        {/* CARGA DINAMICA bloque PREGUNTA 1.4 D1 */}
                                        {Preguntas14D1M1.map(opcion => 
                                        <div key={opcion.id} className="card card-body my-2">
                                          <label htmlFor={opcion.id}><b>{opcion.enunciado}</b></label>
                                          <select disabled={opcion.value>0 ? enableF:disableF} className="form-select" aria-label={opcion.id} required  onChange={opcion.funcion}>
                                            {opcionesG2.map(opcion => <option key={opcion.value}  value={opcion.value} >{opcion.name}</option>)}
                                          </select>
                                          
                                        </div>
                                        )}
                                        {/* FIN  CARGA DINAMICA BLOQUE PREGUNTA 1.4 D1 */}
                                  </div>                    
                                </div>
                            </div>
                      </>   
                      :
                      <h1></h1>
                   }

                  </>
                  :
                  <h1></h1>
                  }

                {/*  FIN DE PREGUNTAS  MAESTRIA MATEMATICA 1.4 D1 */}





               {/*  PREGUNTAS MAESTRIA INFORMATICA 1.4 D1 */}
                  {maestriaId==2?

                  <>
                   { ((p17.length> 0) && (p18.length> 0) && (p19.length> 0) && (p20.length> 0)&& (p21.length> 0)&& (p22.length> 0)&& (p23.length> 0)&& (p24.length> 0)
                      && (p25.length> 0)&& (p26.length> 0)&& (p27.length> 0))
                      ?
                      <>
                      <div className="card card-title my-2" data-bs-toggle="collapse" href="#collapseP14D1" role="button" >
                      <div className="px-3 py-2 "><b>1.4	Cómo ha contribuido el programa de maestría al desarrollo de las competencias del perfil de egreso.</b></div>
                      </div>
                            <div className={((p32.length> 0) && (p33.length> 0) && (p34.length> 0) && (p35.length> 0)
                            && (p36.length> 0) && (p37.length> 0)&& (p38.length> 0)   )? 'collapse': 'collapse show'} id="collapseP14D1">
                                <div className="card card-body">
                                    <div className="row g-2">
                                        {/* CARGA DINAMICA bloque PREGUNTA 1.4 D1 */}
                                        {Preguntas14DMInfor.map(opcion => 
                                        <div key={opcion.id} className="card card-body my-2">
                                          <label htmlFor={opcion.id}><b>{opcion.enunciado}</b></label>
                                          <select disabled={opcion.value>0 ? enableF:disableF} className="form-select" aria-label={opcion.id} required  onChange={opcion.funcion}>
                                            {opcionesG2.map(opcion => <option key={opcion.value}  value={opcion.value} >{opcion.name}</option>)}
                                          </select>
                                          
                                        </div>
                                        )}
                                        {/* FIN  CARGA DINAMICA BLOQUE PREGUNTA 1.4 D1 */}
                                  </div>                    
                                </div>
                            </div>
                      </>   
                      :
                      <h1></h1>
                   }

                  </>
                  :
                  <h1></h1>
                  }
                {/*  FIN DE PREGUNTAS  MAESTRIA INFORMATICA 1.4 D1 */}
                
                



                 {/*  PREGUNTAS MAESTRIA MATEMATICA Y FISICA 1.4 D1 */}
                  {maestriaId==3?
                  <>
                   { ((p17.length> 0) && (p18.length> 0) && (p19.length> 0) && (p20.length> 0)&& (p21.length> 0)&& (p22.length> 0)&& (p23.length> 0)&& (p24.length> 0)
                      && (p25.length> 0)&& (p26.length> 0)&& (p27.length> 0))
                      ?
                      <>
                      <div className="card card-title my-2" data-bs-toggle="collapse" href="#collapseP14D1" role="button" >
                      <div className="px-3 py-2 "><b>1.4	Cómo ha contribuido el programa de maestría al desarrollo de las competencias del perfil de egreso.</b></div>
                      </div>
                            <div className={((p32.length> 0) && (p33.length> 0) && (p34.length> 0) && (p35.length> 0)
                            && (p36.length> 0) && (p37.length> 0)&& (p38.length> 0)   )? 'collapse': 'collapse show'} id="collapseP14D1">
                                <div className="card card-body">
                                    <div className="row g-2">
                                        {/* CARGA DINAMICA bloque PREGUNTA 1.4 D1 */}
                                        {Preguntas14DMatFisica.map(opcion => 
                                        <div key={opcion.id} className="card card-body my-2">
                                          <label htmlFor={opcion.id}><b>{opcion.enunciado}</b></label>
                                          <select disabled={opcion.value>0 ? enableF:disableF} className="form-select" aria-label={opcion.id} required  onChange={opcion.funcion}>
                                            {opcionesG2.map(opcion => <option key={opcion.value}  value={opcion.value} >{opcion.name}</option>)}
                                          </select>
                                          
                                        </div>
                                        )}
                                        {/* FIN  CARGA DINAMICA BLOQUE PREGUNTA 1.4 D1 */}
                                  </div>                    
                                </div>
                            </div>
                      </>   
                      :
                      <h1></h1>
                   }

                  </>
                  :
                  <h1></h1>
                  }
                {/*  FIN DE PREGUNTAS  MAESTRIA MATEMATICA Y FISICA 1.4 D1 */}            
  
         
                            
                 {/*  PREGUNTAS MAESTRIA QUIMICA Y BIOLOGIA 1.4 D1 */}
                 {maestriaId==4?
                  <>
                   { ((p17.length> 0) && (p18.length> 0) && (p19.length> 0) && (p20.length> 0)&& (p21.length> 0)&& (p22.length> 0)&& (p23.length> 0)&& (p24.length> 0)
                      && (p25.length> 0)&& (p26.length> 0)&& (p27.length> 0))
                      ?
                      <>
                      <div className="card card-title my-2" data-bs-toggle="collapse" href="#collapseP14D1" role="button" >
                      <div className="px-3 py-2 "><b>1.4	Cómo ha contribuido el programa de maestría al desarrollo de las competencias del perfil de egreso.</b></div>
                      </div>
                            <div className={((p32.length> 0) && (p33.length> 0) && (p34.length> 0) && (p35.length> 0)
                            && (p36.length> 0) && (p37.length> 0)&& (p38.length> 0)   )? 'collapse': 'collapse show'} id="collapseP14D1">
                                <div className="card card-body">
                                    <div className="row g-2">
                                        {/* CARGA DINAMICA bloque PREGUNTA 1.4 D1 */}
                                        {Preguntas14DMQuiBio.map(opcion => 
                                        <div key={opcion.id} className="card card-body my-2">
                                          <label htmlFor={opcion.id}><b>{opcion.enunciado}</b></label>
                                          <select disabled={opcion.value>0 ? enableF:disableF} className="form-select" aria-label={opcion.id} required  onChange={opcion.funcion}>
                                            {opcionesG2.map(opcion => <option key={opcion.value}  value={opcion.value} >{opcion.name}</option>)}
                                          </select>
                                          
                                        </div>
                                        )}
                                        {/* FIN  CARGA DINAMICA BLOQUE PREGUNTA 1.4 D1 */}
                                  </div>                    
                                </div>
                            </div>
                      </>   
                      :
                      <h1></h1>
                   }

                  </>
                  :
                  <h1></h1>
                  }
                {/*  FIN DE PREGUNTAS  MAESTRIA ATENCION A LA DIVERSIDAD 1.4 D1 */}        





                 {/*  PREGUNTAS MAESTRIA ATENCION A LA DIVERSIDAD 1.4 D1 */}
                 {maestriaId==5?
                  <>
                   { ((p17.length> 0) && (p18.length> 0) && (p19.length> 0) && (p20.length> 0)&& (p21.length> 0)&& (p22.length> 0)&& (p23.length> 0)&& (p24.length> 0)
                      && (p25.length> 0)&& (p26.length> 0)&& (p27.length> 0))
                      ?
                      <>
                      <div className="card card-title my-2" data-bs-toggle="collapse" href="#collapseP14D1" role="button" >
                      <div className="px-3 py-2 "><b>1.4	Cómo ha contribuido el programa de maestría al desarrollo de las competencias del perfil de egreso.</b></div>
                      </div>
                            <div className={((p32.length> 0) && (p33.length> 0) && (p34.length> 0) && (p35.length> 0)
                            && (p36.length> 0) && (p37.length> 0)&& (p38.length> 0)   )? 'collapse': 'collapse show'} id="collapseP14D1">
                                <div className="card card-body">
                                    <div className="row g-2">
                                        {/* CARGA DINAMICA bloque PREGUNTA 1.4 D1 */}
                                        {Preguntas14DMDiversidad.map(opcion => 
                                        <div key={opcion.id} className="card card-body my-2">
                                          <label htmlFor={opcion.id}><b>{opcion.enunciado}</b></label>
                                          <select disabled={opcion.value>0 ? enableF:disableF} className="form-select" aria-label={opcion.id} required  onChange={opcion.funcion}>
                                            {opcionesG2.map(opcion => <option key={opcion.value}  value={opcion.value} >{opcion.name}</option>)}
                                          </select>
                                          
                                        </div>
                                        )}
                                        {/* FIN  CARGA DINAMICA BLOQUE PREGUNTA 1.4 D1 */}
                                  </div>                    
                                </div>
                            </div>
                      </>   
                      :
                      <h1></h1>
                   }

                  </>
                  :
                  <h1></h1>
                  }
                {/*  FIN DE PREGUNTAS  MAESTRIA ATENCION A LA DIVERSIDAD 1.4 D1 */}   




                 {/*  PREGUNTAS MAESTRIA INGLES 1.4 D1 */}
                 {maestriaId==6?
                  <>
                   { ((p17.length> 0) && (p18.length> 0) && (p19.length> 0) && (p20.length> 0)&& (p21.length> 0)&& (p22.length> 0)&& (p23.length> 0)&& (p24.length> 0)
                      && (p25.length> 0)&& (p26.length> 0)&& (p27.length> 0))
                      ?
                      <>
                      <div className="card card-title my-2" data-bs-toggle="collapse" href="#collapseP14D1" role="button" >
                      <div className="px-3 py-2 "><b>1.4	Cómo ha contribuido el programa de maestría al desarrollo de las competencias del perfil de egreso.</b></div>
                      </div>
                            <div className={((p32.length> 0) && (p33.length> 0) && (p34.length> 0) && (p35.length> 0)
                            && (p36.length> 0) && (p37.length> 0)&& (p38.length> 0)   )? 'collapse': 'collapse show'} id="collapseP14D1">
                                <div className="card card-body">
                                    <div className="row g-2">
                                        {/* CARGA DINAMICA bloque PREGUNTA 1.4 D1 */}
                                        {Preguntas14DMIngles.map(opcion => 
                                        <div key={opcion.id} className="card card-body my-2">
                                          <label htmlFor={opcion.id}><b>{opcion.enunciado}</b></label>
                                          <select disabled={opcion.value>0 ? enableF:disableF} className="form-select" aria-label={opcion.id} required  onChange={opcion.funcion}>
                                            {opcionesG2.map(opcion => <option key={opcion.value}  value={opcion.value} >{opcion.name}</option>)}
                                          </select>
                                          
                                        </div>
                                        )}
                                        {/* FIN  CARGA DINAMICA BLOQUE PREGUNTA 1.4 D1 */}
                                  </div>                    
                                </div>
                            </div>
                      </>   
                      :
                      <h1></h1>
                   }

                  </>
                  :
                  <h1></h1>
                  }
                {/*  FIN DE PREGUNTAS  MAESTRIA INGLES 1.4 D1 */}   




                 {/*  PREGUNTAS MAESTRIA LITERATURA 1.4 D1 */}
                 {maestriaId==7?
                  <>
                   { ((p17.length> 0) && (p18.length> 0) && (p19.length> 0) && (p20.length> 0)&& (p21.length> 0)&& (p22.length> 0)&& (p23.length> 0)&& (p24.length> 0)
                      && (p25.length> 0)&& (p26.length> 0)&& (p27.length> 0))
                      ?
                      <>
                      <div className="card card-title my-2" data-bs-toggle="collapse" href="#collapseP14D1" role="button" >
                      <div className="px-3 py-2 "><b>1.4	Cómo ha contribuido el programa de maestría al desarrollo de las competencias del perfil de egreso.</b></div>
                      </div>
                            <div className={((p32.length> 0) && (p33.length> 0) && (p34.length> 0) && (p35.length> 0)
                            && (p36.length> 0) && (p37.length> 0)&& (p38.length> 0)   )? 'collapse': 'collapse show'} id="collapseP14D1">
                                <div className="card card-body">
                                    <div className="row g-2">
                                        {/* CARGA DINAMICA bloque PREGUNTA 1.4 D1 */}
                                        {Preguntas14DMLite.map(opcion => 
                                        <div key={opcion.id} className="card card-body my-2">
                                          <label htmlFor={opcion.id}><b>{opcion.enunciado}</b></label>
                                          <select disabled={opcion.value>0 ? enableF:disableF} className="form-select" aria-label={opcion.id} required  onChange={opcion.funcion}>
                                            {opcionesG2.map(opcion => <option key={opcion.value}  value={opcion.value} >{opcion.name}</option>)}
                                          </select>
                                          
                                        </div>
                                        )}
                                        {/* FIN  CARGA DINAMICA BLOQUE PREGUNTA 1.4 D1 */}
                                  </div>                    
                                </div>
                            </div>
                      </>   
                      :
                      <h1></h1>
                   }

                  </>
                  :
                  <h1></h1>
                  }
                {/*  FIN DE PREGUNTAS  MAESTRIA LITERATURA 1.4 D1 */}   





                 {/*  PREGUNTAS MAESTRIA INICIAL 1.4 D1 */}
                 {maestriaId==8?
                  <>
                   { ((p17.length> 0) && (p18.length> 0) && (p19.length> 0) && (p20.length> 0)&& (p21.length> 0)&& (p22.length> 0)&& (p23.length> 0)&& (p24.length> 0)
                      && (p25.length> 0)&& (p26.length> 0)&& (p27.length> 0))
                      ?
                      <>
                      <div className="card card-title my-2" data-bs-toggle="collapse" href="#collapseP14D1" role="button" >
                      <div className="px-3 py-2 "><b>1.4	Cómo ha contribuido el programa de maestría al desarrollo de las competencias del perfil de egreso.</b></div>
                      </div>
                            <div className={((p32.length> 0) && (p33.length> 0) && (p34.length> 0) && (p35.length> 0)
                            && (p36.length> 0) && (p37.length> 0)&& (p38.length> 0)   )? 'collapse': 'collapse show'} id="collapseP14D1">
                                <div className="card card-body">
                                    <div className="row g-2">
                                        {/* CARGA DINAMICA bloque PREGUNTA 1.4 D1 */}
                                        {Preguntas14DMInic.map(opcion => 
                                        <div key={opcion.id} className="card card-body my-2">
                                          <label htmlFor={opcion.id}><b>{opcion.enunciado}</b></label>
                                          <select disabled={opcion.value>0 ? enableF:disableF} className="form-select" aria-label={opcion.id} required  onChange={opcion.funcion}>
                                            {opcionesG2.map(opcion => <option key={opcion.value}  value={opcion.value} >{opcion.name}</option>)}
                                          </select>
                                          
                                        </div>
                                        )}
                                        {/* FIN  CARGA DINAMICA BLOQUE PREGUNTA 1.4 D1 */}
                                  </div>                    
                                </div>
                            </div>
                      </>   
                      :
                      <h1></h1>
                   }

                  </>
                  :
                  <h1></h1>
                  }
                {/*  FIN DE PREGUNTAS  MAESTRIA INICIAL 1.4 D1 */}   



                 {/* COLLAPSE PREGUNTA 1.5 D1 */}
                {       
                      ((p28.length> 0) && (p29.length> 0) && (p30.length> 0) && (p31.length> 0) )
                      ?
                      <>          
                     
                     <div className="card card-title my-2" data-bs-toggle="collapse" href="#collapseP15D1" role="button" >
                      <div className="px-3 py-2 "><b>1.5	Indique su nivel de satisfacción con respecto a los recursos y servicios recibidos.</b></div>
                      </div>
                            <div className='collapse show' id="collapseP15D1">
                                <div className="card card-body">
                                    <div className="row g-2">

                                        {/* CARGA DINAMICA bloque PREGUNTA 1.5 D1 */}
                                        {Preguntas15D1.map(opcion => 
                                        <div key={opcion.id} className="card card-body my-2">
                                          <label htmlFor={opcion.id}><b>{opcion.enunciado}</b></label>
                                          <select disabled={opcion.value>0 ? enableF:disableF} className="form-select" aria-label={opcion.id} required  onChange={opcion.funcion}>
                                            {opcionesG1.map(opcion => <option key={opcion.value}  value={opcion.value} >{opcion.name}</option>)}
                                          </select>
                                          
                                        </div>
                                        )}
                                        {/* FIN  CARGA DINAMICA BLOQUE PREGUNTA 1.5 D1 */}
                                  </div>                    
                                </div>
                            </div>
                      </>     
                       :
                       <h1></h1>   
                  } 
                  {/* fIN COLLAPSE PREGUNTA 1.5 D1 */}
                
                    <button className="btn btn-primary my-1 " type="submit" >Siguiente</button>
                    
            </form>
 
    </div> 
   

      )
    }
    