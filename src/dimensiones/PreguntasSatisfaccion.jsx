import { useState } from "react"

export const Preguntas = () => {

 
    const [p1, setP1] = useState(0)
    const [p2, setP2] = useState(0)
    const [p3, setP3] = useState(0)
    const [p4, setP4] = useState(0)
    const [p5, setP5] = useState(0)
    const [p6, setP6] = useState(0)
    const [p7, setP7] = useState(0)
    const [p8, setP8] = useState(0)
    const [p9, setP9] = useState(0)
    const [p10, setP10] = useState(0)
    const [p11, setP11] = useState(0)
    const [p12, setP12] = useState('')
    const [p13, setP13] = useState('')
    const [p14, setP14] = useState(0)
    const [p15, setP15] = useState(0)
    const [p16, setP16] = useState(0)
    const [p17, setP17] = useState(0)
    const [p18, setP18] = useState(0)
    const [p19, setP19] = useState(0)
    const [p20, setP20] = useState(0)
    const [p21, setP21] = useState(0)
    const [p22, setP22] = useState(0)
    const [p23, setP23] = useState(0)
    const [p24, setP24] = useState(0)
    const [p25, setP25] = useState(0)
    const [p26, setP26] = useState(0)
    const [p27, setP27] = useState(0)
    const [p28, setP28] = useState(0)
    const [p29, setP29] = useState(0)
    const [p30, setP30] = useState(0)
    const [p31, setP31] = useState(0)
    const [p32, setP32] = useState(0)
    const [p33, setP33] = useState(0)
    const [p34, setP34] = useState(0)
    const [p35, setP35] = useState(0)
    const [p36, setP36] = useState(0)
    const [p37, setP37] = useState(0)
    const [p38, setP38] = useState(0)



  

    const PreguntasCalidadD1 = [
        {   
            id:1,
            value: 1,
            enunciado: "Formación teórica para el fortalecimiento de competencias profesionales.",
            funcion: (e)=>{setP1(e.target.value)}
        }, 
        {
          id:2,
          value: p1,
          enunciado: "Formación práctica para el fortalecimiento de competencias profesionales.",
          funcion: (e)=>{setP2(e.target.value)}
        },
        {
          id:3,
          value: p2,
          enunciado: "Metodología de la enseñanza empleada.",
          funcion: (e)=>{setP3(e.target.value)}
        },
        {
          id:4,
          value: p3,
          enunciado: "Integración de innovaciones tecnológicas.",
          funcion: (e)=>{setP4(e.target.value)}
        },
        {
          id:5,
          value: p4,
          enunciado: "Acompañamiento a través de tutorías académicas.",
          funcion: (e)=>{setP5(e.target.value)}
        },
        {
          id:6,
          value: p5,
          enunciado: "Afinidad del cuerpo docente con la asignatura dictada.",
          funcion: (e)=>{setP6(e.target.value)}
        },
        {
          id:7,
          value: p6,
          enunciado: "Formación académica ligada al proceso de titulación.",
          funcion: (e)=>{setP7(e.target.value)}
        },
        {
          id:8,
          value: p7,
          enunciado: "Articulación de la investigación formativa durante el proceso académico.",
          funcion: (e)=>{setP8(e.target.value)}
        },
        {
          id:9,
          value: p8,
          enunciado: "La investigación con fines de titulación aporta a la resolución de problemas socio educativos.",
          funcion: (e)=>{setP9(e.target.value)}
        },
        {
          id:10,
          value: p9,
          enunciado: "Facilidad para participar en proyectos de investigación.",
          funcion: (e)=>{setP10(e.target.value)}
        },
        {
          id:11,
          value: p10,
          enunciado: "Articulación de la vinculación con la sociedad al proceso académico e investigativo.",
          funcion: (e)=>{setP11(e.target.value)}
        }
        ,
        {
          id:12,
          value: p11,
          enunciado: "Acompañamiento en las actividades académicas de vinculación.",
          funcion: (e)=>{setP12(e.target.value)}
        }
        ,
        {
          id:13,
          value: p12,
          enunciado: "Gestión administrativa de los procesos necesarios para desarrollar su proyecto de vinculación.",
          funcion: (e)=>{setP13(e.target.value)}
        },
        {
          id:14,
          value: p13,
          enunciado: "Acompañamiento en las actividades académicas de titulación.",
          funcion: (e)=>{setP14(e.target.value)}
        },
        {
          id:15,
          value: p14,
          enunciado: "Gestión administrativa de los procesos necesarios para desarrollar su proyecto de titulación.",
          funcion: (e)=>{setP15(e.target.value)}
        }
    ];


    const PreguntaAconte = [
  
      {
        id: 16,
        enunciado: "1.2	Indique el aporte de los contenidos de los módulos del programa de maestría a su ejercicio profesional.",
        funcion: (e)=>{setP16(e.target.value)}
      },
  ];



const Preguntas13D1 = [
  {   
      id:17,
      value: 1,
      enunciado: "Capacidad de comunicación oral y escrita.",
      funcion: (e)=>{setP17(e.target.value)}
  }, 
  {
    id:18,
    value: p17,
    enunciado: "Capacidad en el manejo de las tic.",
    funcion: (e)=>{setP18(e.target.value)}
  },
  {
    id:19,
    value: p18,
    enunciado: "Compromiso ético",
    funcion: (e)=>{setP19(e.target.value)}
  },
  {
    id:20,
    value: p19,
    enunciado: "Capacidad de aplicar los conocimientos en la práctica.",
    funcion: (e)=>{setP20(e.target.value)}
  },
  {
    id:21,
    value: p20,
    enunciado: "Capacidad para identificar, plantear y resolver problemas.",
    funcion: (e)=>{setP21(e.target.value)}
  },
  {
    id:22,
    value: p21,
    enunciado: "Capacidad creativa.",
    funcion: (e)=>{setP22(e.target.value)}
  },
  {
    id:23,
    value: p22,
    enunciado: "Capacidad de análisis y síntesis.",
    funcion: (e)=>{setP23(e.target.value)}
  },
  {
    id:24,
    value: p23,
    enunciado: "Capacidad de investigación.",
    funcion: (e)=>{setP24(e.target.value)}
  },
  {
    id:25,
    value: p24,
    enunciado: "Capacidad de trabajo en equipo y liderazgo.",
    funcion: (e)=>{setP25(e.target.value)}
  },
  {
    id:26,
    value: p25,
    enunciado: "Capacidad de emprendimiento.",
    funcion: (e)=>{setP26(e.target.value)}
  },
  {
    id:27,
    value: p26,
    enunciado: "Capacidad de interacción social.",
    funcion: (e)=>{setP27(e.target.value)}
  }

];





const Preguntas14D1M1 = [
  {   
      id:28,
      value: 1,
      enunciado: "Saber: Domina los conocimientos de la matemática y sus ramas que se desarrollan en el Educación General Básica Superior y Bachillerato. Potencia la capacidad de aprender, aprender a ensenar y aprender a innovar.",
      funcion: (e)=>{setP28(e.target.value)}
  }, 
  {
    id:29,
    value: p28,
    enunciado: "Saber hacer: Utiliza a la investigación, la innovación y la didáctica como ejes transversales la práctica docente.",
    funcion: (e)=>{setP29(e.target.value)}
  },
  {
    id:30,
    value: p29,
    enunciado: "Saber conocer: Domina la epistemología e instrumentos del conocimiento como conceptos, juicios, razonamientos, hipótesis, paradigmas y su aplicación.",
    funcion: (e)=>{setP30(e.target.value)}
  },
  {
    id:31,
    value: p30,
    enunciado: "Saber ser: Ejerce su profesión con formación en valores como disciplina, conciencia social, equidad, justicia, tolerancia, solidaridad, constancia, responsabilidad, democracia, probidad entre otros.",
    funcion: (e)=>{setP31(e.target.value)}
  },
  
];


/* PREGUNTAS 141 INFORMATICA */
const Preguntas14DMInfor = [
  {   
      id:28,
      value: 1,
      enunciado: "SaberInformatica: Domina los conocimientos de la matemática y sus ramas que se desarrollan en el Educación General Básica Superior y Bachillerato. Potencia la capacidad de aprender, aprender a ensenar y aprender a innovar.",
      funcion: (e)=>{setP28(e.target.value)}
  }, 
  {
    id:29,
    value: p28,
    enunciado: "Saber hacerInformatica: Utiliza a la investigación, la innovación y la didáctica como ejes transversales la práctica docente.",
    funcion: (e)=>{setP29(e.target.value)}
  },
  {
    id:30,
    value: p29,
    enunciado: "Saber conocerInformatica: Domina la epistemología e instrumentos del conocimiento como conceptos, juicios, razonamientos, hipótesis, paradigmas y su aplicación.",
    funcion: (e)=>{setP30(e.target.value)}
  },
  {
    id:31,
    value: p30,
    enunciado: "Saber serInformatica: Ejerce su profesión con formación en valores como disciplina, conciencia social, equidad, justicia, tolerancia, solidaridad, constancia, responsabilidad, democracia, probidad entre otros.",
    funcion: (e)=>{setP31(e.target.value)}
  },
  
];
/* FIN PREGUNTAS 141 INFORMATICA */


/* PREGUNTAS 141 MATEMATICA Y FISICA */
const Preguntas14DMatFisica = [
  {   
      id:28,
      value: 1,
      enunciado: "Saber MATEMATICA Y FISICA: Domina los conocimientos de la matemática y sus ramas que se desarrollan en el Educación General Básica Superior y Bachillerato. Potencia la capacidad de aprender, aprender a ensenar y aprender a innovar.",
      funcion: (e)=>{setP28(e.target.value)}
  }, 
  {
    id:29,
    value: p28,
    enunciado: "Saber hacer MATEMATICA Y FISICA: Utiliza a la investigación, la innovación y la didáctica como ejes transversales la práctica docente.",
    funcion: (e)=>{setP29(e.target.value)}
  },
  {
    id:30,
    value: p29,
    enunciado: "Saber conocer MATEMATICA Y FISICA: Domina la epistemología e instrumentos del conocimiento como conceptos, juicios, razonamientos, hipótesis, paradigmas y su aplicación.",
    funcion: (e)=>{setP30(e.target.value)}
  },
  {
    id:31,
    value: p30,
    enunciado: "Saber ser MATEMATICA Y FISICA: Ejerce su profesión con formación en valores como disciplina, conciencia social, equidad, justicia, tolerancia, solidaridad, constancia, responsabilidad, democracia, probidad entre otros.",
    funcion: (e)=>{setP31(e.target.value)}
  },
  
];
/* FIN PREGUNTAS 141 MATEMATICA Y FISICA */



/* PREGUNTAS 141 QUIMICA Y BIOLOGIA */
const Preguntas14DMQuiBio = [
  {   
      id:28,
      value: 1,
      enunciado: "Saber QUIMICA Y BIOLOGIA: Domina los conocimientos de la matemática y sus ramas que se desarrollan en el Educación General Básica Superior y Bachillerato. Potencia la capacidad de aprender, aprender a ensenar y aprender a innovar.",
      funcion: (e)=>{setP28(e.target.value)}
  }, 
  {
    id:29,
    value: p28,
    enunciado: "Saber hacer QUIMICA Y BIOLOGIA: Utiliza a la investigación, la innovación y la didáctica como ejes transversales la práctica docente.",
    funcion: (e)=>{setP29(e.target.value)}
  },
  {
    id:30,
    value: p29,
    enunciado: "Saber conocer QUIMICA Y BIOLOGIA: Domina la epistemología e instrumentos del conocimiento como conceptos, juicios, razonamientos, hipótesis, paradigmas y su aplicación.",
    funcion: (e)=>{setP30(e.target.value)}
  },
  {
    id:31,
    value: p30,
    enunciado: "Saber ser QUIMICA Y BIOLOGIA: Ejerce su profesión con formación en valores como disciplina, conciencia social, equidad, justicia, tolerancia, solidaridad, constancia, responsabilidad, democracia, probidad entre otros.",
    funcion: (e)=>{setP31(e.target.value)}
  },
  
];
/* FIN PREGUNTAS 141 QUIMICA Y BIOLOGIA */




/* PREGUNTAS 141 DIVERSIDAD */
const Preguntas14DMDiversidad = [
  {   
      id:28,
      value: 1,
      enunciado: "Saber DIVERSIDAD: Domina los conocimientos de la matemática y sus ramas que se desarrollan en el Educación General Básica Superior y Bachillerato. Potencia la capacidad de aprender, aprender a ensenar y aprender a innovar.",
      funcion: (e)=>{setP28(e.target.value)}
  }, 
  {
    id:29,
    value: p28,
    enunciado: "Saber hacer DIVERSIDAD: Utiliza a la investigación, la innovación y la didáctica como ejes transversales la práctica docente.",
    funcion: (e)=>{setP29(e.target.value)}
  },
  {
    id:30,
    value: p29,
    enunciado: "Saber conocer DIVERSIDAD: Domina la epistemología e instrumentos del conocimiento como conceptos, juicios, razonamientos, hipótesis, paradigmas y su aplicación.",
    funcion: (e)=>{setP30(e.target.value)}
  },
  {
    id:31,
    value: p30,
    enunciado: "Saber ser DIVERSIDAD: Ejerce su profesión con formación en valores como disciplina, conciencia social, equidad, justicia, tolerancia, solidaridad, constancia, responsabilidad, democracia, probidad entre otros.",
    funcion: (e)=>{setP31(e.target.value)}
  },
  
];
/* FIN PREGUNTAS 141 DIVERSIDAD*/



/* PREGUNTAS 141 INGLES */
const Preguntas14DMIngles = [
  {   
      id:28,
      value: 1,
      enunciado: "Saber INGLES: Domina los conocimientos de la matemática y sus ramas que se desarrollan en el Educación General Básica Superior y Bachillerato. Potencia la capacidad de aprender, aprender a ensenar y aprender a innovar.",
      funcion: (e)=>{setP28(e.target.value)}
  }, 
  {
    id:29,
    value: p28,
    enunciado: "Saber hacer INGLES: Utiliza a la investigación, la innovación y la didáctica como ejes transversales la práctica docente.",
    funcion: (e)=>{setP29(e.target.value)}
  },
  {
    id:30,
    value: p29,
    enunciado: "Saber conocer INGLES: Domina la epistemología e instrumentos del conocimiento como conceptos, juicios, razonamientos, hipótesis, paradigmas y su aplicación.",
    funcion: (e)=>{setP30(e.target.value)}
  },
  {
    id:31,
    value: p30,
    enunciado: "Saber ser INGLES: Ejerce su profesión con formación en valores como disciplina, conciencia social, equidad, justicia, tolerancia, solidaridad, constancia, responsabilidad, democracia, probidad entre otros.",
    funcion: (e)=>{setP31(e.target.value)}
  },
  
];
/* FIN PREGUNTAS 141 INGLES*/




/* PREGUNTAS 141 LITERATURA */
const Preguntas14DMLite = [
  {   
      id:28,
      value: 1,
      enunciado: "Saber LITERATURA: Domina los conocimientos de la matemática y sus ramas que se desarrollan en el Educación General Básica Superior y Bachillerato. Potencia la capacidad de aprender, aprender a ensenar y aprender a innovar.",
      funcion: (e)=>{setP28(e.target.value)}
  }, 
  {
    id:29,
    value: p28,
    enunciado: "Saber hacer LITERATURA: Utiliza a la investigación, la innovación y la didáctica como ejes transversales la práctica docente.",
    funcion: (e)=>{setP29(e.target.value)}
  },
  {
    id:30,
    value: p29,
    enunciado: "Saber conocer LITERATURA: Domina la epistemología e instrumentos del conocimiento como conceptos, juicios, razonamientos, hipótesis, paradigmas y su aplicación.",
    funcion: (e)=>{setP30(e.target.value)}
  },
  {
    id:31,
    value: p30,
    enunciado: "Saber ser LITERATURA: Ejerce su profesión con formación en valores como disciplina, conciencia social, equidad, justicia, tolerancia, solidaridad, constancia, responsabilidad, democracia, probidad entre otros.",
    funcion: (e)=>{setP31(e.target.value)}
  },
  
];
/* FIN PREGUNTAS 141 LITERATURA*/



/* PREGUNTAS 141 INICIAL */
const Preguntas14DMInic = [
  {   
      id:28,
      value: 1,
      enunciado: "Saber INICIAL: Domina los conocimientos de la matemática y sus ramas que se desarrollan en el Educación General Básica Superior y Bachillerato. Potencia la capacidad de aprender, aprender a ensenar y aprender a innovar.",
      funcion: (e)=>{setP28(e.target.value)}
  }, 
  {
    id:29,
    value: p28,
    enunciado: "Saber hacer INICIAL: Utiliza a la investigación, la innovación y la didáctica como ejes transversales la práctica docente.",
    funcion: (e)=>{setP29(e.target.value)}
  },
  {
    id:30,
    value: p29,
    enunciado: "Saber conocer INICIAL: Domina la epistemología e instrumentos del conocimiento como conceptos, juicios, razonamientos, hipótesis, paradigmas y su aplicación.",
    funcion: (e)=>{setP30(e.target.value)}
  },
  {
    id:31,
    value: p30,
    enunciado: "Saber ser INICIAL: Ejerce su profesión con formación en valores como disciplina, conciencia social, equidad, justicia, tolerancia, solidaridad, constancia, responsabilidad, democracia, probidad entre otros.",
    funcion: (e)=>{setP31(e.target.value)}
  },
  
];
/* FIN PREGUNTAS 141 INICIAL*/






const Preguntas15D1 = [
  {   
      id:32,
      value: 1,
      enunciado: "Infraestructura",
      funcion: (e)=>{setP32(e.target.value)}
  }, 
  {
    id:33,
    value: p32,
    enunciado: "Bibliotecas",
    funcion: (e)=>{setP33(e.target.value)}
  },
  {
    id:34,
    value: p33,
    enunciado: "Laboratorios",
    funcion: (e)=>{setP34(e.target.value)}
  },
  {
    id:35,
    value: p34,
    enunciado: "Salones de clase",
    funcion: (e)=>{setP35(e.target.value)}
  },
  {
    id:36,
    value: p35,
    enunciado: "Ambientes y salas de estudio",
    funcion: (e)=>{setP36(e.target.value)}
  },
  {
    id:37,
    value: p36,
    enunciado: "Personal Administrativo",
    funcion: (e)=>{setP37(e.target.value)}
  },
  {
    id:38,
    value: p37,
    enunciado: "Espacios virtuales (Internet, página web, correo electrónico y aulas virtuales)",
    funcion: (e)=>{setP38(e.target.value)}
  },
  
];









const opcionesG1 = [
    {
      value: '',
      name: 'Selecciona una opción'
    },
    {
      value: '5',
      name: 'Muy satisfecho'
    },
    {
      value: '4',
      name: 'Satisfecho'
    },
    {
      value: '3',
      name: 'Poco satisfecho'
    },
    {
      value: '2',
      name: 'Insatisfecho'
    },
    {
      value: '1',
      name: 'Muy insatisfecho'
    },
  ];

  
  const opcionesG2 = [
    {
      value: '',
      name: 'Selecciona una opcion'
    },
    {
      value: '5',
      name: 'Muy Alto'
    },
    {
      value: '4',
      name: 'Alto'
    },
    {
      value: '3',
      name: 'Medio'
    },
    {
      value: '2',
      name: 'Bajo'
    },
    {
      value: '1',
      name: 'Muy Bajo'
    }
  ];




  const [disableF] = useState(true)
  const [enableF] = useState(false)

   
  return {PreguntasCalidadD1,PreguntaAconte, Preguntas13D1,Preguntas14D1M1,
    Preguntas14DMInfor,Preguntas14DMatFisica,Preguntas14DMQuiBio,Preguntas14DMDiversidad,Preguntas14DMIngles,
    Preguntas14DMLite,Preguntas14DMInic,
    Preguntas15D1, opcionesG1,opcionesG2 ,disableF,enableF, 
    p1,	p2,	p3,	p4,	p5,	p6,	p7,	p8,	p9,	p10,p11,p12,p13, p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,
    p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38

  }
  
}
