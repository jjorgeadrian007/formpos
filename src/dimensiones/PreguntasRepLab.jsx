import { useState } from "react"

export const PreguntasReplab = () => {

    const [p39, setP39] = useState(0)
    const [p40, setP40] = useState(0)
    const [p41, setP41] = useState(0)
    const [p42, setP42] = useState(0)
    const [p43, setP43] = useState(0)
    const [p44, setP44] = useState(0)
    const [p45, setP45] = useState(0)
    const [p46, setP46] = useState(0)
    const [p47, setP47] = useState(0)
    const [p48, setP48] = useState(0)
  
    const [p49, setP49] = useState(0)
    const [p50, setP50] = useState(0)
    const [p51, setP51] = useState(0)
    const [p52, setP52] = useState(0)
    const [p53, setP53] = useState(0)
    const [p54, setP54] = useState(0)



    const Pregunta221 = [
  
      {
        id: 39,
        enunciado: "2.1	Por qué decidió estudiar en el programa de MAESTRÍA EN EDUCACIÓN MENCIÓN MATEMÁTICA",
        funcion: (e)=>{setP39(e.target.value)}
      },
  ];

  
const Opciones221 = [
  {
    value: '',
    name: ''
  },
  {
    value: '1',
    name: 'Malla curricular'
  },
  {
    value: '2',
    name: 'Posicionamiento de la Universidad'
  },
  {
    value: '3',
    name: 'Modalidad de estudio'
  },
  {
    value: '4',
    name: 'Costos'
  },
  {
    value: '5',
    name: 'Duración del programa'
  },
  {
    value: '6',
    name: 'Planta docente'
  },
];


const Pregunta331 = [
  
  {
    id: 40,
    enunciado: "3.1	Actualmente se encuentra trabajando.",
    funcion: (e)=>{setP40(e.target.value)}
  },
];

const Opciones331 = [
  {
    value: '',
    name: ''
  },
  {
    value: '1',
    name: 'Si'
  },
  {
    value: '2',
    name: 'No'
  }
];



const Pregunta332 = [
  
  {
    id: 41,
    enunciado: "Nombre",
    funcion: (e)=>{setP41(e.target.value)}
  },
  {
    id: 42,
    enunciado: "Ciudad",
    funcion: (e)=>{setP42(e.target.value)}
  },
  {
    id: 43,
    enunciado: "Provincia",
    funcion: (e)=>{setP43(e.target.value)}
  },
  {
    id: 44,
    enunciado: "Correo de la institución",
    funcion: (e)=>{setP44(e.target.value)}
  },
  {
    id: 45,
    enunciado: "Contacto del empleador",
    funcion: (e)=>{setP45(e.target.value)}
  },
];



const Pregunta333 = [
  
  {
    id: 46,
    enunciado: "3.3	¿Qué cargo desempeña?",
    funcion: (e)=>{setP46(e.target.value)}
  },
];

const Opciones333 = [
  {
    value: '',
    name: ''
  },
  {
    value: '1',
    name: 'Directivo'
  },
  {
    value: '2',
    name: 'Administrativo'
  }
  ,
  {
    value: '3',
    name: 'Docente'
  }
  ,
  {
    value: '4',
    name: 'Dueño'
  }

];


const Pregunta334 = [
  
  {
    id: 47,
    enunciado: "3.4	Tiempo que labora en la Institución/Organización:",
    funcion: (e)=>{setP47(e.target.value)}
  },
];

const Opciones334 = [
  {
    value: '',
    name: ''
  },
  {
    value: '1',
    name: 'menos de 1 año'
  },
  {
    value: '2',
    name: '1 a 3 años'
  }
  ,
  {
    value: '3',
    name: '3 a 5 años'
  }
  ,
  {
    value: '4',
    name: 'más de 5 años'
  }
];



const Pregunta335 = [
  
  {
    id: 48,
    enunciado: "3.5	Sus ingresos mensuales relacionados con actividades de su profesión están dentro del rango.",
    funcion: (e)=>{setP48(e.target.value)}
  },
];

const Opciones335 = [
  {
    value: '',
    name: ''
  },
  {
    value: '1',
    name: '1 SBU'
  },
  {
    value: '2',
    name: '2 SBU'
  }
  ,
  {
    value: '3',
    name: '3 SBU'
  }
  ,
  {
    value: '4',
    name: 'MÁS 3 SBU'
  }
];



const Pregunta336 = [
  
  {
    id: 49,
    enunciado: "3.6	Cuál es su proyección profesional después de estudiar la maestría:",
    funcion: (e)=>{setP49(e.target.value)}
  },
];

const Opciones336 = [
  {
    value: '',
    name: ''
  },
  {
    value: '1',
    name: 'Estabilidad laboral'
  },
  {
    value: '2',
    name: 'Posición profesional'
  }
  ,
  {
    value: '3',
    name: 'Ascensos'
  }
  ,
  {
    value: '4',
    name: 'Ampliación de beneficios'
  }
  ,
  {
    value: '5',
    name: 'Mayor participación en toma de decisiones'
  }
  ,
  {
    value: '6',
    name: 'Capacitación y desarrollo continuo'
  }

];





const Pregunta337 = [
  
  {
    id: 50,
    enunciado: "3.7	Si no está laborando en este momento, indique el motivo.",
    funcion: (e)=>{setP50(e.target.value)}
  },
];

const Opciones337 = [
  {
    value: '',
    name: ''
  },
  {
    value: '1',
    name: 'Escasas oportunidades de trabajo en el área.'
  },
  {
    value: '2',
    name: 'Falta de información de fuentes de trabajo'
  },
  {
    value: '3',
    name: 'Falta de experiencia profesional'
  },
  {
    value: '4',
    name: 'Remuneración no adecuada'
  },
  {
    value: '5',
    name: 'Cursando Estudios'
  },
  {
    value: '6',
    name: 'Discriminación por aspectos sociales'
  },
  {
    value: '7',
    name: 'Dificultad de la movilidad a plazas de trabajo'
  },
  {
    value: '8',
    name: 'Situaciones personales'
  },
]



const Pregunta411 = [
  
  {
    id: 51,
    enunciado: "4.1	Tiene previsto continuar con algún otro tipo de estudio",
    funcion: (e)=>{setP51(e.target.value)}
  },
];

const Opciones411 = [
  {
    value: '',
    name: ''
  },
  {
    value: '1',
    name: 'Si'
  },
  {
    value: '2',
    name: 'No'
  }
];




const Pregunta442 = [
  
  {
    id: 52,
    enunciado: "4.2	Qué tipo de estudio",
    funcion: (e)=>{setP52(e.target.value)}
  },
];

const Opciones442 = [
  {
    value: '',
    name: ''
  },
  {
    value: '1',
    name: 'Cursos o seminarios'
  },
  {
    value: '2',
    name: 'Especialización'
  },
  {
    value: '3',
    name: 'Otra Maestría'
  },
  {
    value: '4',
    name: 'Doctorado (PhD)'
  }
];

const Pregunta443 = [
  
  {
    id: 53,
    enunciado: "4.3	Cuál es el área/tema del estudio.",
    funcion: (e)=>{setP53(e.target.value)}
  },
];


const Pregunta551 = [
  
  {
    id: 54,
    enunciado: "5.1	Por favor, comparta las recomendaciones para potenciar el programa de MAESTRÍA ",
    funcion: (e)=>{setP54(e.target.value)}
  },
];




   
  return {Pregunta221, Opciones221, Pregunta331, Opciones331,Pregunta332, Pregunta333, Opciones333,
    Pregunta334, Opciones334,Pregunta335, Opciones335,Pregunta336, Opciones336,
    Pregunta337, Opciones337,
    Pregunta411, Opciones411,
    Pregunta442, Opciones442,
    Pregunta443,
    Pregunta551
    ,p39, p40, p41, p42, p43, p44, p45, p46, p47, p48, p49,p50, 
    p51,
    p52, p53, p54 }
  
}
