// Datos del quiz en formato JSON
const dataTema2 = [
  {
    question: "1. ¿Quién es el profesor del curso de Servicios Urbanos?",
    options: [
      "1. Juan Miguel Vega Naranjo",
      "2. Pedro García Martínez",
      "3. María López",
      "4. Antonio Fernández",
    ],
    correct_answer: "1",
  },
  {
    question:
      "2. ¿Cuál es el grado asociado con el curso de Servicios Urbanos?",
    options: [
      "1. Ingeniería Civil",
      "2. Arquitectura",
      "3. Ingeniería Mecánica",
      "4. Ingeniería Industrial",
    ],
    correct_answer: "1",
  },
  {
    question:
      "3. ¿Qué fase es posterior a la colocación de bordillo en urbanización?",
    options: [
      "1. Movimiento de tierras",
      "2. Implantación de servicios",
      "3. Control de calidad",
      "4. Pavimentación",
    ],
    correct_answer: "2",
  },
  {
    question:
      "4. ¿Qué tipo de servicios deben ser implantados por debajo de aceras o áreas peatonales?",
    options: [
      "1. Alumbrado público",
      "2. Abastecimiento de agua",
      "3. Gas y electricidad",
      "4. Todas las anteriores",
    ],
    correct_answer: "4",
  },
  {
    question:
      "5. ¿Cuál es la distancia mínima entre conducciones de gas y eléctricas según la normativa de Valencia?",
    options: [
      "1. 0,10 metros",
      "2. 0,20 metros",
      "3. 0,30 metros",
      "4. 0,50 metros",
    ],
    correct_answer: "2",
  },
  {
    question:
      "6. ¿Qué red debe estar a una cota superior a la de cualquier tubería de alcantarillado?",
    options: [
      "1. Red de gas",
      "2. Red de agua potable",
      "3. Red eléctrica",
      "4. Red de telefonía",
    ],
    correct_answer: "2",
  },
  {
    question:
      "7. Según la normativa, a qué distancia mínima debe estar la canalización eléctrica más baja de las conducciones de agua?",
    options: [
      "1. 0,10 metros",
      "2. 0,20 metros",
      "3. 0,30 metros",
      "4. 0,50 metros",
    ],
    correct_answer: "3",
  },
  {
    question:
      "8. ¿Qué se utiliza para proteger las redes de agua y gas canalizado?",
    options: ["1. Hormigón", "2. Arena de asiento", "3. Plástico", "4. Metal"],
    correct_answer: "2",
  },
  {
    question:
      "9. ¿Qué procedimiento se propone para evitar que las raíces de los árboles afecten a las conducciones?",
    options: [
      "1. Construir profundidades adecuadas",
      "2. Utilizar materiales metálicos",
      "3. Disponer elementos de protección",
      "4. No plantar árboles cerca",
    ],
    correct_answer: "3",
  },
  {
    question:
      "10. ¿Cuál es la principal ventaja de la disposición cercana de las conducciones?",
    options: [
      "1. Menor coste",
      "2. Mayor facilidad de excavación",
      "3. Menos tráfico",
      "4. Mejor estética",
    ],
    correct_answer: "2",
  },
  {
    question:
      "11. ¿Qué tipo de pruebas se realizan sobre tuberías de abastecimiento?",
    options: [
      "1. Pruebas de compresión",
      "2. Pruebas de presión interior",
      "3. Pruebas de adherencia",
      "4. Pruebas de resistencia a la corrosión",
    ],
    correct_answer: "2",
  },
  {
    question:
      "12. ¿Qué se debe disponer para verificar la situación de todos los servicios antes de iniciar la construcción?",
    options: [
      "1. Planos constructivos",
      "2. Presupuestos",
      "3. Autorizaciones",
      "4. Contratos",
    ],
    correct_answer: "1",
  },
  {
    question:
      "13. ¿Cuál es el Espacio Mínimo que se debe mantener libre de servicios junto a la fachada hasta que se construyan los edificios?",
    options: ["1. 50 cms", "2. 30 cms", "3. 20 cms", "4. 10 cms"],
    correct_answer: "3",
  },
  {
    question:
      "14. ¿Qué tipo de arquetas prefiere utilizar en urbanizaciones extensas?",
    options: [
      "1. Arquetas de plástico",
      "2. Arquetas continuas",
      "3. Arquetas de hormigón",
      "4. Arquetas de metal",
    ],
    correct_answer: "2",
  },
  {
    question:
      "15. ¿Qué ensayos de calidad se requieren para el hormigón de recubrimiento?",
    options: [
      "1. Ensayos de resistencia a compresión",
      "2. Ensayos de densidad",
      "3. Ensayos de elasticidad",
      "4. Todos los anteriores",
    ],
    correct_answer: "1",
  },
  {
    question:
      "16. ¿Cuál es la técnica recomendada para la compactación de zanjas?",
    options: [
      "1. Compactación a mano",
      "2. Compactación mecánica",
      "3. Compactación química",
      "4. Compactación por gravedad",
    ],
    correct_answer: "2",
  },
  {
    question:
      "17. Según la normativa, ¿qué se debe averiguar sobre suministro de materiales?",
    options: [
      "1. Costos",
      "2. Disponibilidad",
      "3. Orden de entrega",
      "4. Verificar suministradores",
    ],
    correct_answer: "4",
  },
  {
    question:
      "18. ¿Qué es lo que se recomienda hacer después de colocar las tuberías de abastecimiento?",
    options: [
      "1. Compactar la zanja",
      "2. Revisar los planos",
      "3. Realizar pruebas de presión",
      "4. Pavimentar la acera",
    ],
    correct_answer: "3",
  },
  {
    question:
      "19. ¿Cómo se deben colocar tuberías de gas y cables de media tensión según normativa?",
    options: [
      "1. Sin señalización",
      "2. Con aviso previo",
      "3. Contrario a su normativa",
      "4. Bajo señalización o testigo",
    ],
    correct_answer: "4",
  },
  {
    question:
      "20. ¿Cuál es la distancia mínima recomendada entre las conducciones de agua y de gas?",
    options: [
      "1. 0,10 metros",
      "2. 0,20 metros",
      "3. 0,30 metros",
      "4. 0,50 metros",
    ],
    correct_answer: "3",
  },
  {
    question:
      "21. ¿Qué se considera un aspecto de control de calidad de materiales de relleno de zanjas?",
    options: [
      "1. Ensayo de compresión",
      "2. Ensayo de densidad",
      "3. Prueba de presión",
      "4. Prueba de estanqueidad",
    ],
    correct_answer: "2",
  },
  {
    question:
      "22. ¿Qué elementos deben existir para diferentes redes en zonas verdes?",
    options: [
      "1. Bocas de riego",
      "2. Electrodomésticos",
      "3. Cuartos de servicio",
      "4. Establecimientos comerciales",
    ],
    correct_answer: "1",
  },
  {
    question:
      "23. ¿Qué medidas de seguridad deben seguirse durante la colocación de hormigón?",
    options: [
      "1. Usar hormigón de alta resistencia",
      "2. Comprobar nivelado de la zanja",
      "3. Colocar una malla de refuerzo",
      "4. Utilizar separadores para las tuberías",
    ],
    correct_answer: "2",
  },
  {
    question: "24. ¿Qué práctica está recomendada para el relleno de zanjas?",
    options: [
      "1. Utilizar cualquier tipo de suelo",
      "2. El relleno debe ser de suelos tolerables",
      "3. Usar solo suelos de excavación",
      "4. Homogeneizar los materiales",
    ],
    correct_answer: "2",
  },
  {
    question:
      "25. ¿Qué se debe tener en cuenta para el control de la construcción de zanjas?",
    options: [
      "1. Estabilidad de la zanja",
      "2. Condiciones climáticas",
      "3. Normativa de seguridad",
      "4. Las tres anteriores",
    ],
    correct_answer: "4",
  },
  {
    question:
      "26. Para la red de gas, ¿cuál es un aspecto crítico a comprobar antes de la pavimentación de aceras?",
    options: [
      "1. Que las tuberías estén enterradas",
      "2. Las pruebas de presión",
      "3. Que se utilicen materiales metálicos",
      "4. Que las válvulas estén operativas",
    ],
    correct_answer: "2",
  },
  {
    question:
      "27. ¿Qué se debe evitar en el momento de la colocación de tubos para prevenir su deformación?",
    options: [
      "1. Colocar muy cerca de otros tubos",
      "2. Utilizar hormigón de consistencia fluida",
      "3. Pasar cables en exceso",
      "4. No tener suficiente espacio",
    ],
    correct_answer: "2",
  },
  {
    question:
      "28. ¿Cuándo son necesarios nuevos ensayos de presión y estanqueidad?",
    options: [
      "1. Cuando se cambia de operador",
      "2. Después de la colocación de las tuberías",
      "3. Antes del relleno de zanjas",
      "4. Después de la compactación de zanjas",
    ],
    correct_answer: "4",
  },
  {
    question:
      "29. ¿Qué deben ceder las redes de servicios al finalizar su construcción?",
    options: [
      "1. A las autoridades locales",
      "2. A los propietarios de los terrenos",
      "3. A las compañías concesionarias",
      "4. A los contratistas",
    ],
    correct_answer: "3",
  },
  {
    question:
      "30. Según la normativa, ¿quién es responsable de las pruebas de mandrilado de las tuberías de telefonía?",
    options: [
      "1. Los constructores",
      "2. La compañía telefonica",
      "3. Las autoridades locales",
      "4. Un inspector de calidad",
    ],
    correct_answer: "2",
  },
  {
    question: "31. ¿Cuál es el propósito de las galerías de servicios?",
    options: [
      "1. Reducir costos de construcción",
      "2. Centralizar la disposición de servicios",
      "3. Mejorar la estética de la ciudad",
      "4. Facilitar el mantenimiento de servicios",
    ],
    correct_answer: "2",
  },
  {
    question:
      "32. ¿Qué se debe abrir antes de realizar zanjas para asegurar la ejecución de servicios?",
    options: [
      "1. Un mapa de servicios existente",
      "2. Un diagrama de flujo",
      "3. Un manual de procedimientos",
      "4. Una legislación urbana",
    ],
    correct_answer: "1",
  },
  {
    question:
      "33. ¿Cuánto se recomienda de distancia mínima entre cualquier canalización y el arbolado?",
    options: ["1. 1 metro", "2. 2 metros", "3. 0,5 metros", "4. 0,2 metros"],
    correct_answer: "1",
  },
  {
    question:
      "34. ¿Qué medidas se deben seguir para garantizar el funcionamiento de los sistemas de protección en redes eléctricas?",
    options: [
      "1. Revisiones mensuales",
      "2. Calibración pormenorizada",
      "3. Pruebas iniciales sólo",
      "4. Inspecciones trimestrales",
    ],
    correct_answer: "2",
  },
  {
    question:
      "35. En una urbanización, el orden de ejecución de las implantaciones de servicios debe ser...",
    options: [
      "1. Al azar para mayor flexibilidad",
      "2. De abajo a arriba",
      "3. De arriba a abajo",
      "4. De lado a lado",
    ],
    correct_answer: "2",
  },
  {
    question:
      "36. Según la normativa, ¿quién está generalmente encargado de la obra civil en la instalación de la red de gas?",
    options: [
      "1. Las constructoras",
      "2. Las compañías concesionarias",
      "3. El gobierno local",
      "4. Los arquitectos",
    ],
    correct_answer: "2",
  },
  {
    question:
      "37. ¿Qué aspecto es esencial para la calidad de la mezcla de hormigón?",
    options: [
      "1. El tamaño de los áridos",
      "2. La proporción de agua",
      "3. Ambas opciones son correctas",
      "4. El uso de arena fina",
    ],
    correct_answer: "3",
  },
  {
    question:
      "38. ¿Qué se busca con las pruebas de estanqueidad en tuberías de saneamiento?",
    options: [
      "1. Verificar que no haya fugas",
      "2. Asegurar la resistencia mecánica",
      "3. Comprobar el peso del conjunto",
      "4. Reducir costos de materiales",
    ],
    correct_answer: "1",
  },
  {
    question: "39. ¿Qué técnica de compactación se prefiere en zanjas?",
    options: [
      "1. Compactación en seco",
      "2. Compactación en húmedo",
      "3. Compactación a mano",
      "4. Compactación por placas vibratorias",
    ],
    correct_answer: "4",
  },
  {
    question:
      "40. ¿Cómo se caracteriza el hormigón utilizado en la construcción de pavimentos?",
    options: [
      "1. Fluido y de alta resistencia",
      "2. Pesado y frágil",
      "3. Ligero y adaptable",
      "4. Fácilmente cortable",
    ],
    correct_answer: "1",
  },
  {
    question:
      "41. ¿Qué se debe hacer antes de conectar acometidas de agua y gas?",
    options: [
      "1. Realizar pruebas de presión",
      "2. Construir una zona de almacenamiento",
      "3. Asegurar el suministro de materiales",
      "4. Completar las obras de pavimentación",
    ],
    correct_answer: "1",
  },
  {
    question:
      "42. ¿Qué método se utiliza para la comprobación de la estabilidad de los servicios instalados?",
    options: [
      "1. Inspección visual",
      "2. Pruebas de carga",
      "3. Control de temperatura",
      "4. Monitoreo constante",
    ],
    correct_answer: "2",
  },
  {
    question:
      "43. ¿Cuál es la práctica recomendada para la instalación de la red de telefonía?",
    options: [
      "1. Colocarlas superficialmente",
      "2. Dejar los registros totalmente terminados",
      "3. Utilizar sólo cables de 1 mm",
      "4. Conector inalámbrico",
    ],
    correct_answer: "2",
  },
  {
    question: "44. Las galerías de servicios buscan...",
    options: [
      "1. Dispersar servicios",
      "2. Centralizar servicios",
      "3. Eliminarlas por completo",
      "4. Minimizar el mantenimiento",
    ],
    correct_answer: "2",
  },
  {
    question:
      "45. ¿Qué se requiere para asegurar que se eviten deformaciones en las tuberías durante su colocación?",
    options: [
      "1. Colocación adecuada y uso de separadores",
      "2. Vigilancia constante",
      "3. Uso de materiales menos pesados",
      "4. Múltiples capas de selladores",
    ],
    correct_answer: "1",
  },
  {
    question:
      "46. ¿Qué tipo de trabajos se debe realizar en el replantéo de los servicios?",
    options: [
      "1. Colocar servicios antiguos",
      "2. Situar todos los elementos en superficie",
      "3. Comprobar los registros",
      "4. Planificar la reubicación",
    ],
    correct_answer: "2",
  },
  {
    question:
      "47. ¿Qué se deberá realizar para asegurar que todas las acometidas de cada parcela estén conectadas?",
    options: [
      "1. Definir un plano de ubicación",
      "2. Comprobar la funcionalidad de las redes",
      "3. Verificar las conexiones previas",
      "4. Obtener permisos de las autoridades",
    ],
    correct_answer: "2",
  },
  {
    question:
      "48. ¿Qué se utiliza para revisar la calidad del hormigón recubriendo las tuberías?",
    options: [
      "1. Pruebas de consolidación",
      "2. Ensayos de resistencia a compresión",
      "3. Estudios de duración",
      "4. Compresión por temperatura",
    ],
    correct_answer: "2",
  },
  {
    question:
      "49. ¿Qué aspecto es crucial en el control de la ejecución de zanjas para evitar problemas futuros?",
    options: [
      "1. Análisis textural",
      "2. Control de profundidad y ancho",
      "3. Comparación con el plano original",
      "4. Documentación fotográfica",
    ],
    correct_answer: "2",
  },
  {
    question:
      "50. ¿Qué se debe hacer inmediatamente después del relleno de zanjas?",
    options: [
      "1. Inspección visual",
      "2. Pruebas de presión",
      "3. Colocación de la pavimentación",
      "4. Sellado de fugas",
    ],
    correct_answer: "2",
  },
  {
    question:
      "51. ¿Qué es necesario comprobar en las tuberías de gas antes de su uso?",
    options: [
      "1. Que estén limpias",
      "2. Las pruebas de presión efectuadas",
      "3. Las conexiones previas",
      "4. Todo lo anterior",
    ],
    correct_answer: "4",
  },
  {
    question:
      "52. ¿Cuál es el propósito de realizar un ensayo de compresión del hormigón?",
    options: [
      "1. Verificar su durabilidad",
      "2. Medir su resistencia",
      "3. Comprobar su textura",
      "4. Comprobar su peso",
    ],
    correct_answer: "2",
  },
  {
    question:
      "53. ¿Qué medida se debe seguir para garantizar el aislamiento en la red eléctrica?",
    options: [
      "1. Comprobar la resistencia a la tierra",
      "2. Colocar elementos decorativos",
      "3. Usar cables inseparables",
      "4. Instalar tomas de seguridad",
    ],
    correct_answer: "1",
  },
  {
    question:
      "54. ¿Qué se debe hacer en la supervisión de la red de baja tensión?",
    options: [
      "1. Establecer contacto continuo",
      "2. Comprobar su funcionalidad y normativa",
      "3. Medir la resistencia a la tierra",
      "4. Todas las anteriores",
    ],
    correct_answer: "4",
  },
  {
    question: "55. ¿En qué consiste la normativa para la red de agua potable?",
    options: [
      "1. Comprobar la presión constante",
      "2. Controlar el pH del agua",
      "3. Verificar el tipo de material de las tuberías",
      "4. Todo lo anterior",
    ],
    correct_answer: "4",
  },
  {
    question:
      "56. ¿Quienes examinaban la calidad de los materiales en construcción?",
    options: [
      "1. Inspectores de obra",
      "2. Compañías de servicios",
      "3. Funcionarios del gobierno",
      "4. Los propietarios",
    ],
    correct_answer: "1",
  },
  {
    question:
      "57. ¿Cómo se garantiza que la red hidráulica instalada no tenga fugas?",
    options: [
      "1. Con pruebas de estanqueidad y mantenimiento",
      "2. Con monitoreos continuos",
      "3. Con aplicaciones de selladores",
      "4. Con mapeos previos",
    ],
    correct_answer: "1",
  },
  {
    question:
      "58. ¿Qué aspecto se revisa en las conexiones de las redes de gas?",
    options: [
      "1. Leva de segurança",
      "2. Integración de elementos",
      "3. Pruebas de presión en condiciones régulares",
      "4. Coherencia entre equipos",
    ],
    correct_answer: "3",
  },
  {
    question:
      "59. Según la normativa, ¿quién determina el tipo de instalaciones generales de los edificios?",
    options: [
      "1. Los arquitectos",
      "2. Las compañías de servicios",
      "3. Los ingenieros civiles",
      "4. Las autoridades locales",
    ],
    correct_answer: "3",
  },
  {
    question:
      "60. ¿Qué se considera una buena práctica al planificar la disposición de las canalizaciones de servicios?",
    options: [
      "1. Alinear todas las conducciones",
      "2. Usar diferentes niveles de excavación",
      "3. Minimizar el uso de protección",
      "4. Establecer un solo sentido para las tuberías",
    ],
    correct_answer: "1",
  },
  {
    question:
      "61. La distancia mínima recomendada entre conducciones de agua y electricidad es:",
    options: [
      "1. 0,10 metros",
      "2. 0,20 metros",
      "3. 0,25 metros",
      "4. 0,30 metros",
    ],
    correct_answer: "2",
  },
  {
    question:
      "62. ¿Qué se debe verificar en los registros y arquetas de los diferentes servicios?",
    options: [
      "1. Accesibilidad y estado",
      "2. Composición de materiales",
      "3. Fabricación y montajes",
      "4. Tiempo de ejecución",
    ],
    correct_answer: "1",
  },
  {
    question:
      "63. ¿Qué se debe hacer para asegurar la protección de las instalaciones eléctricas?",
    options: [
      "1. Disposición de separadores en zonas de servicios",
      "2. Realizar pruebas de tensión",
      "3. Combinación de elementos rescatables",
      "4. Utilización de cables vulcanizados",
    ],
    correct_answer: "2",
  },
  {
    question:
      "64. ¿Cuál es el propósito de los planes constructivos en el revestimiento de servicios urbanos?",
    options: [
      "1. Visualización de la obra",
      "2. Control de calidad",
      "3. Optimización de recursos",
      "4. Todo lo anterior",
    ],
    correct_answer: "4",
  },
  {
    question:
      "65. ¿Por qué es crucial la instalación de Stop de agua en puntos de acceso?",
    options: [
      "1. Para controlar el flujo",
      "2. Para evitar fugas",
      "3. Para mejorar la eficiencia del flujo",
      "4. Para facilitar el funcionamiento de la red",
    ],
    correct_answer: "2",
  },
  {
    question:
      "66. ¿Qué tipo de materiales se requiere comprobar en la instalación eléctrica?",
    options: [
      "1. Tubos y arquetas",
      "2. Todos los materiales del sistema",
      "3. Solamente cables",
      "4. Solo componentes eléctricos",
    ],
    correct_answer: "2",
  },
  {
    question:
      "67. ¿Qué es lo necesario implementar en zonas urbanizadas para facilitar el servicio de extinción de incendios?",
    options: [
      "1. Hidranes",
      "2. Señalización de salidas",
      "3. Alarmas de emergencia",
      "4. Todo lo anterior",
    ],
    correct_answer: "1",
  },
  {
    question:
      "68. ¿Cuál es la distancia mínima que debe mantenerse entre las acometidas de agua y gas?",
    options: [
      "1. 0,10 metros",
      "2. 0,20 metros",
      "3. 0,30 metros",
      "4. 0,50 metros",
    ],
    correct_answer: "3",
  },
  {
    question:
      "69. ¿Qué se menciona como un método de compactación adecuado para las zanjas?",
    options: [
      "1. Compactación en frío",
      "2. Compactación manual",
      "3. Compactación vibratoria",
      "4. Compactación en seco",
    ],
    correct_answer: "3",
  },
  {
    question:
      "70. ¿Qué se usa para realizar la prueba de resistencia a compresión del hormigón?",
    options: [
      "1. Método de estandarización",
      "2. Ensayos de laboratorio",
      "3. Pruebas en situ",
      "4. A y B son correctas",
    ],
    correct_answer: "4",
  },
];

const dataTema3 = [
  {
    question:
      "1. ¿Cuál es el principal fabricante europeo de fundición dúctil?",
    options: [
      "1. Funditubo",
      "2. Saint-Gobain",
      "3. Aglomerados S.A.",
      "4. Tubos Ferroviarios",
    ],
    correct_answer: "2",
  },
  {
    question:
      "2. ¿Qué tipo de recubrimiento se utiliza interiormente en las tuberías de fundición dúctil para mejorar su rugosidad?",
    options: [
      "1. Pintura bituminosa",
      "2. Recubrimiento de PVC",
      "3. Mortero de cemento",
      "4. Óxido de zinc",
    ],
    correct_answer: "3",
  },
  {
    question:
      "3. ¿Qué tipo de unión es la más extendida para las tuberías de fundición dúctil?",
    options: [
      "1. Unión rígida",
      "2. Unión flexible de enchufe",
      "3. Unión de bridas",
      "4. Unión mecánica de goma",
    ],
    correct_answer: "2",
  },
  {
    question:
      "4. ¿Cuál de los siguientes es un inconveniente de las tuberías de fundición dúctil?",
    options: [
      "1. Soporte a altas presiones",
      "2. Buena resistencia al choque",
      "3. Mayor rugosidad interna",
      "4. Menor peso",
    ],
    correct_answer: "3",
  },
  {
    question:
      "5. ¿Qué tipo de polietileno es comúnmente utilizado en el abastecimiento de aguas?",
    options: [
      "1. Polietileno de baja densidad (PELD)",
      "2. Polietileno de media densidad (PEMD)",
      "3. Polietileno de alta densidad (PEHD)",
      "4. Polietileno reciclado (PE)",
    ],
    correct_answer: "3",
  },
  {
    question:
      "6. ¿Qué técnica se utiliza para unir tuberías de polietileno de diámetro menor a 250 mm?",
    options: [
      "1. Encolado",
      "2. Soldadura por termofusión",
      "3. Conexión por bridas",
      "4. Ensamblaje mecánico",
    ],
    correct_answer: "2",
  },
  {
    question: "7. ¿Cuál es una ventaja del polietileno?",
    options: [
      "1. Alta resistencia a la corrosión",
      "2. No se oxida en medio húmedo",
      "3. Mayor coste",
      "4. Dificultad de manipulación",
    ],
    correct_answer: "2",
  },
  {
    question:
      "8. ¿Qué desventaja tienen las tuberías de polietileno respecto a su ubicación?",
    options: [
      "1. Son ligeras",
      "2. No pueden colocarse a la intemperie",
      "3. Excelentes en sobrecargas",
      "4. Son muy flexibles",
    ],
    correct_answer: "2",
  },
  {
    question:
      "9. ¿Qué material se utiliza para la fabricación de tuberías de PVC?",
    options: [
      "1. Polipropileno",
      "2. Polietileno",
      "3. Cloruro de vinilo",
      "4. Policarbonato",
    ],
    correct_answer: "3",
  },
  {
    question: "10. ¿Cuál es una ventaja de las tuberías de PVC?",
    options: [
      "1. Mayor coste que el PE",
      "2. Menor peso",
      "3. Mayor fragilidad",
      "4. Menor facilidad de montaje",
    ],
    correct_answer: "2",
  },
  {
    question:
      "11. ¿Qué tipo de válvula se usa principalmente para cortar el paso del agua en uma red?",
    options: [
      "1. Válvulas de regulación",
      "2. Válvulas de compuerta",
      "3. Válvulas de flotador",
      "4. Válvulas antirretorno",
    ],
    correct_answer: "2",
  },
  {
    question:
      "12. ¿Cuál de las siguientes válvulas es preferible en diámetros muy grandes?",
    options: [
      "1. Válvula de compuerta",
      "2. Válvula de mariposa",
      "3. Válvula de bola",
      "4. Válvula de flotador",
    ],
    correct_answer: "2",
  },
  {
    question:
      "13. ¿Qué función tienen las válvulas reductoras de presión en una red?",
    options: [
      "1. Aumentar la presión",
      "2. Evitar sobrepresiones",
      "3. Almacenar agua",
      "4. Regular el caudal",
    ],
    correct_answer: "2",
  },
  {
    question:
      "14. ¿Cuál es la función principal de las ventosas en las tuberías?",
    options: [
      "1. Impulsar el agua",
      "2. Eliminar aire acumulado",
      "3. Regular el caudal",
      "4. Cortar el paso del agua",
    ],
    correct_answer: "2",
  },
  {
    question:
      "15. Para qué se utilizan los desagües en la red de abastecimiento?",
    options: [
      "1. Vaciar tramos de tubería",
      "2. Regular el caudal",
      "3. Almacenamiento de agua",
      "4. Desvío de flujo",
    ],
    correct_answer: "1",
  },
  {
    question:
      "16. ¿Por qué se recomienda situar la red de alcantarillado por debajo de la de abastecimiento?",
    options: [
      "1. Para evitar la contaminación del agua",
      "2. Por razones de diseño estético",
      "3. Para facilitar el mantenimiento",
      "4. Para mejorar la presión del agua",
    ],
    correct_answer: "1",
  },
  {
    question:
      "17. ¿Qué tipo de válvula se utiliza para evitar flujos reversibles en la red?",
    options: [
      "1. Válvula de corte",
      "2. Válvula de bola",
      "3. Válvula de retención",
      "4. Válvula de compuerta",
    ],
    correct_answer: "3",
  },
  {
    question: "18. Las válvulas de flotador se utilizan para...",
    options: [
      "1. Cerrar depósitos según su nivel",
      "2. Regular el caudal de agua",
      "3. Evitar la acumulación de aire",
      "4. Cortar el flujo de agua en todos los sentidos",
    ],
    correct_answer: "1",
  },
  {
    question:
      "19. ¿Qué tipo de unión suelen tener las tuberías de PVC para facilitar su conexión?",
    options: [
      "1. Uniones roscadas",
      "2. Uniones abocardadas",
      "3. Uniones por soldadura",
      "4. Uniones con bridas",
    ],
    correct_answer: "2",
  },
  {
    question: "20. ¿Cuál es la función de los anclajes en las tuberías?",
    options: [
      "1. Reducir el peso total del sistema",
      "2. Evitar el movimiento de la tubería",
      "3. Proveer flexibilidad",
      "4. Regular la presión interna",
    ],
    correct_answer: "2",
  },
  {
    question:
      "21. ¿Qué tipo de válvula se utiliza para controlar el caudal y no permitir que exceda una cantidad establecida?",
    options: [
      "1. Válvula limitadora de caudal",
      "2. Válvula de mariposa",
      "3. Válvula de compuerta",
      "4. Válvula de reguladora de presión",
    ],
    correct_answer: "1",
  },
  {
    question:
      "22. ¿Cuál es el material más económico en comparación con otros para la fabricación de tubos de menor diámetro?",
    options: [
      "1. Fundición Dúctil",
      "2. Polietileno",
      "3. Policloruro de vinilo",
      "4. Titanio",
    ],
    correct_answer: "3",
  },
  {
    question: "23. Las válvulas de bola se utilizan principalmente para:",
    options: [
      "1. Cerrar el paso de fluidos en diámetros pequeños",
      "2. Regular la presión de agua",
      "3. Cerrar depósitos",
      "4. Evitar sobrepresiones",
    ],
    correct_answer: "1",
  },
  {
    question:
      "24. ¿Qué tipo de tubería tiene mayor resistencia a la formación de incrustaciones?",
    options: [
      "1. Fundición Dúctil",
      "2. Polietileno",
      "3. Policloruro de vinilo",
      "4. Acero inoxidable",
    ],
    correct_answer: "2",
  },
  {
    question: "25. ¿En qué parte de las tuberías se colocan las ventosas?",
    options: [
      "1. En la parte baja",
      "2. En la parte media",
      "3. En la parte alta",
      "4. En las derivaciones",
    ],
    correct_answer: "3",
  },
  {
    question: "26. La presión nominal más común para las tuberías de PVC es:",
    options: ["1. 10 atm", "2. 20 atm", "3. 25 atm", "4. 30 atm"],
    correct_answer: "1",
  },
  {
    question:
      "27. ¿Qué tipo de válvulas se utilizan para facilitar el vaciado de tuberías?",
    options: [
      "1. Válvulas de retención",
      "2. Válvulas de cierre",
      "3. Válvulas de flotador",
      "4. Válvulas de flotación",
    ],
    correct_answer: "2",
  },
  {
    question: "28. La capacidad hidráulica se refiere a:",
    options: [
      "1. La resistencia al choque de las tuberías",
      "2. La cantidad de agua que puede fluir a través de un sistema",
      "3. El peso total de las tuberías",
      "4. El diámetro de las tuberías",
    ],
    correct_answer: "2",
  },
  {
    question:
      "29. ¿Cuál es uno de los principales problemas de las tuberías de fundición dúctil?",
    options: [
      "1. Mayor coste",
      "2. Mayor facilidad de instalación",
      "3. Menor durabilidad",
      "4. Mayor peso",
    ],
    correct_answer: "1",
  },
  {
    question:
      "30. ¿Qué técnicas se utilizan para mejorar el comportamiento del PVC?",
    options: [
      "1. Adición de metales pesados",
      "2. Orientación de moléculas",
      "3. Recubrimiento de PVC",
      "4. Inyección de aire",
    ],
    correct_answer: "2",
  },
  {
    question:
      "31. ¿Qué material es más utilizado en la construcción de válvulas de corte?",
    options: [
      "1. Plástico",
      "2. Aluminio",
      "3. Fundición",
      "4. Acero inoxidable",
    ],
    correct_answer: "3",
  },
  {
    question: "32. ¿Qué sucede cuando se freeza un tubo de polietileno?",
    options: [
      "1. Se rompe fácilmente",
      "2. Se ablanda",
      "3. Se expande",
      "4. No se ve afectado",
    ],
    correct_answer: "1",
  },
  {
    question:
      "33. ¿Con qué frecuencia se deben colocar válvulas de corte en una red de abastecimiento?",
    options: [
      "1. Cada 200 m",
      "2. Cada 300-500 m",
      "3. Cada 100 m",
      "4. En cada derivación",
    ],
    correct_answer: "2",
  },
  {
    question:
      "34. Las válvulas de mariposa son más costosas, pero preferibles en...",
    options: [
      "1. Diámetros pequeños",
      "2. Diámetros medios",
      "3. Diámetros grandes",
      "4. Todas las situaciones",
    ],
    correct_answer: "3",
  },
  {
    question: "35. ¿Qué tipo de tubería es menos flexible que el PE?",
    options: ["1. Fundición", "2. Policarbonato", "3. PVC", "4. Polietileno"],
    correct_answer: "3",
  },
  {
    question:
      "36. ¿Qué elemento de la red de distribución se utiliza en las conexiones y uniones entre tuberías?",
    options: ["1. Bridas", "2. Anclajes", "3. Válvulas", "4. Desagües"],
    correct_answer: "1",
  },
  {
    question:
      "37. ¿Qué tipo de válvula se recomienda para evitar la sobrepresión en la red?",
    options: [
      "1. Válvula de flotador",
      "2. Válvula antirretorno",
      "3. Válvula reductora de presión",
      "4. Válvula de compuerta",
    ],
    correct_answer: "3",
  },
  {
    question:
      "38. ¿Dónde se colocan generalmente las válvulas en una red de distribución?",
    options: [
      "1. Solo en el comienzo",
      "2. En las intersecciones y derivaciones",
      "3. Sólo al final del tramo",
      "4. No se colocan válvulas",
    ],
    correct_answer: "2",
  },
  {
    question:
      "39. ¿Cómo se denomina a la pieza que se utiliza para la evacuación de aire en las tuberías?",
    options: [
      "1. Válvula de compuerta",
      "2. Ventosa",
      "3. Desagüe",
      "4. Conector",
    ],
    correct_answer: "2",
  },
  {
    question: "40. Para uniones de PVC de pequeño diámetro, se utiliza:",
    options: [
      "1. Pegado con manguitos abocardados",
      "2. Bridas",
      "3. Soldadura",
      "4. Engrapado",
    ],
    correct_answer: "1",
  },
  {
    question:
      "41. ¿Qué tipo de tuberías son más comúnmente afectadas por la radiación ultravioleta?",
    options: [
      "1. Tuberías de polietileno",
      "2. Tuberías de PVC",
      "3. Tuberías de acero",
      "4. Tuberías de fundición",
    ],
    correct_answer: "2",
  },
  {
    question:
      "42. ¿Cuál es la principal ventaja de las tuberías de polietileno en comparación con las de PVC?",
    options: [
      "1. Mayor durabilidad",
      "2. Menor peso",
      "3. Menor coste",
      "4. Mayor capacidad hidráulica",
    ],
    correct_answer: "4",
  },
  {
    question:
      "43. ¿Qué característica del material PVC mejora su resistencia a la fractura?",
    options: [
      "1. Mayor grosor",
      "2. Orientación de la molécula",
      "3. Uso de aceites aditivos",
      "4. Eliminación de aditivos",
    ],
    correct_answer: "2",
  },
  {
    question:
      "44. ¿Qué tipo de conexión se utiliza en las válvulas de mariposa para su apertura y cierre?",
    options: ["1. Mecánica", "2. Manual", "3. Automática", "4. Neumática"],
    correct_answer: "1",
  },
  {
    question:
      "45. ¿Cuál de las siguientes afirmaciones es cierta sobre las tuberías de fundición dúctil?",
    options: [
      "1. Son muy ligeras",
      "2. Son frágiles",
      "3. No son muy resistentes a altas temperaturas",
      "4. Soportan altas presiones de trabajo",
    ],
    correct_answer: "4",
  },
  {
    question: "46. ¿Qué se busca evitar colocando ventosas en las tuberías?",
    options: [
      "1. Acumulaciones de aire",
      "2. Pérdidas de presión",
      "3. Filtraciones de materiales extraños",
      "4. Corrosión",
    ],
    correct_answer: "1",
  },
  {
    question:
      "47. ¿Qué tipo de desagüe se utiliza en la red de abastecimiento?",
    options: [
      "1. Desagües tipo T",
      "2. Desagües de fondo plano",
      "3. Desagües abiertos",
      "4. Desagües de compuerta",
    ],
    correct_answer: "1",
  },
  {
    question:
      "48. ¿Qué tipo de válvula se utiliza para regular el caudal y evitar sobrecargas?",
    options: [
      "1. Válvula de compuerta",
      "2. Válvula de flotador",
      "3. Válvula limitadora de caudal",
      "4. Válvula de mariposa",
    ],
    correct_answer: "3",
  },
  {
    question:
      "49. ¿Qué modalidad de fabricación permite obtener tuberías de gran diámetro?",
    options: ["1. Extrusión", "2. Moldeo", "3. Centrifugado", "4. Inyección"],
    correct_answer: "3",
  },
  {
    question:
      "50. ¿Qué tipo de válvula se usa para evitar el flujo en sentido opuesto en una tubería?",
    options: [
      "1. Válvula de corte",
      "2. Válvula de presión",
      "3. Válvula de retención",
      "4. Válvula de flotación",
    ],
    correct_answer: "3",
  },
  {
    question:
      "51. ¿Cuál de las siguientes válvulas se utiliza para regular la presión en la red?",
    options: [
      "1. Válvula de mariposa",
      "2. Válvula de flotador",
      "3. Válvula reductora de presión",
      "4. Válvula de compuerta",
    ],
    correct_answer: "3",
  },
  {
    question:
      "52. ¿Cuál es el objetivo principal de los anclajes en la red de tuberías?",
    options: [
      "1. Evitar el movimiento de las tuberías",
      "2. Regular la tensión en los tubos",
      "3. Unir distintos elementos de tuberías",
      "4. Regular el flujo del agua",
    ],
    correct_answer: "1",
  },
  {
    question: "53. Las válvulas especiales se clasifican en:",
    options: [
      "1. Válvulas de corte y compuerta",
      "2. Válvulas de regulación y retención",
      "3. Válvulas mecánicas y eléctricas",
      "4. Válvulas de presión y tamaño",
    ],
    correct_answer: "2",
  },
  {
    question:
      "54. ¿Qué tipo de válvula se emplea comúnmente para la regulación del nivel en depósitos?",
    options: [
      "1. Válvula de flotador",
      "2. Válvula de mariposa",
      "3. Válvula de presión",
      "4. Válvula de corte",
    ],
    correct_answer: "1",
  },
  {
    question:
      "55. La principal función de las válvulas de purga en un sistema de tuberías es...",
    options: [
      "1. Regular la temperatura del agua",
      "2. Evitar la acumulación de aire",
      "3. Exclusivamente para cerrar el paso del agua",
      "4. Evitar el flujo de retorno",
    ],
    correct_answer: "2",
  },
  {
    question:
      "56. ¿Cuál es el impacto de las radiaciones solares en las tuberías de PVC?",
    options: [
      "1. Además de tornarlas más pesadas, no las afecta.",
      "2. Las hace más duraderas.",
      "3. Las debilita y acorta su vida útil.",
      "4. Las mejora mecánicamente.",
    ],
    correct_answer: "3",
  },
  {
    question:
      "57. ¿Qué acción se recomienda realizar al cambiar una válvula en la red?",
    options: [
      "1. Dejar la válvula antigua en su lugar",
      "2. Desmontar la red completa",
      "3. Utilizar una válvula de calidad igual o superior",
      "4. Instalar válvulas de diferente tamaño",
    ],
    correct_answer: "3",
  },
  {
    question:
      "58. Las válvulas limitadoras permanecen abiertas cuando el caudal es:",
    options: [
      "1. Superior al ajustado",
      "2. Inferior al ajustado",
      "3. Idéntico al ajustado",
      "4. Aumenta significativamente",
    ],
    correct_answer: "2",
  },
  {
    question:
      "59. ¿Cuál es el costo comparativo de las tuberías de PVC frente a otros materiales como PE y FD?",
    options: [
      "1. Generalmente más alto",
      "2. Igual que otros materiales",
      "3. Más económico para diámetros menores",
      "4. Más económico para todos",
    ],
    correct_answer: "3",
  },
  {
    question:
      "60. ¿Qué tipo de válvula es preferida para la regulación precisa del caudal en instalaciones industriales?",
    options: [
      "1. Válvula de flotador",
      "2. Válvula de mariposa",
      "3. Válvula de compuerta",
      "4. Válvula reguladora de caudal",
    ],
    correct_answer: "4",
  },
  {
    question:
      "61. ¿Las tuberías de PE son buenas para ambientes húmedos porque...?",
    options: [
      "1. No se oxidan",
      "2. Son flexibles",
      "3. Se ensamblan fácilmente",
      "4. Tienen menor peso",
    ],
    correct_answer: "1",
  },
  {
    question:
      "62. En caso de utilizar la tubería de PVC en un ambiente exterior, se debe considerar:",
    options: [
      "1. Su resistencia a sobrepresiones",
      "2. Su debilitamiento por radiación UV",
      "3. Su flexibilidad ante cambios de temperatura",
      "4. La posibilidad de depósitos internos",
    ],
    correct_answer: "2",
  },
  {
    question:
      "63. Las válvulas de corte se instalan cada cuántos metros en ramales de gran longitud?",
    options: [
      "1. 300-500 metros",
      "2. 100-200 metros",
      "3. 50-100 metros",
      "4. Más de 500 metros",
    ],
    correct_answer: "1",
  },
  {
    question:
      "64. El diseño de una red de abastecimiento debe considerar también:",
    options: [
      "1. Estética visual del sistema",
      "2. Posibilidades de filtración de agua",
      "3. Facilidad de acceso y mantenimiento",
      "4. Costo de materiales solo",
    ],
    correct_answer: "3",
  },
  {
    question:
      "65. ¿Cuál es el primer paso al realizar el mantenimiento de las tuberías?",
    options: [
      "1. Identificación de la ubicación",
      "2. Aislamiento de la sección a reparar",
      "3. Verificación del acceso",
      "4. Reemplazo inmediato de válvulas",
    ],
    correct_answer: "2",
  },
  {
    question:
      "66. ¿Cuál es la principal limitación de las válvulas de flotador?",
    options: [
      "1. No son adecuadas para sistemas de alta presión",
      "2. No pueden controlar el caudal",
      "3. Son costosas",
      "4. Requieren constante mantenimiento",
    ],
    correct_answer: "1",
  },
  {
    question:
      "67. En el sistema de red de abastecimiento, las válvulas de antirretorno son importantes porque...",
    options: [
      "1. Evitan que el agua fluya en sentido inverso",
      "2. Mejoran la presión dentro de las tuberías",
      "3. Regulan el caudal de aire",
      "4. Son utilizadas únicamente en el control de caudales",
    ],
    correct_answer: "1",
  },
  {
    question:
      "68. Para evitar que las tuberías se muevan por cambios de presión, se utilizan:",
    options: [
      "1. Anclajes",
      "2. Válvulas de flotador",
      "3. Bridas",
      "4. Conectores",
    ],
    correct_answer: "1",
  },
  {
    question:
      "69. ¿Qué condiciones deben cumplirse para la instalación de tuberías de PE?",
    options: [
      "1. Siempre deben estar bajo tierra",
      "2. No deben estar expuestas a variaciones térmicas extremas",
      "3. Su superficie debe estar siempre expuesta al aire",
      "4. Debido a la presión, deben ser de un diámetro mayor",
    ],
    correct_answer: "2",
  },
  {
    question:
      "70. ¿Qué parte de la tubería se utiliza para evitar pérdidas de aire en el sistema?",
    options: [
      "1. Las uniones",
      "2. Las válvulas de flotador",
      "3. Las ventosas",
      "4. Los desagües",
    ],
    correct_answer: "3",
  },
  {
    question:
      "71. ¿La forma en que se recubren las tuberías de fundición dúctil es de importancia para...?",
    options: [
      "1. Estética",
      "2. Durabilidad y resistencia a la corrosión",
      "3. Economía del proyecto",
      "4. Valor de propiedad",
    ],
    correct_answer: "2",
  },
  {
    question:
      "72. Las válvulas de reguladores de presión son específicas para controlar...",
    options: [
      "1. El flujo de agua",
      "2. Las fugas",
      "3. Las variantes de temperatura",
      "4. Las presiones superiores a las normales",
    ],
    correct_answer: "1",
  },
  {
    question:
      "73. Las uniones rígidas suelen emplearse en el sistema de tuberías para...",
    options: [
      "1. Conectar válvulas redundantes",
      "2. Incrementar la facilidad de instalación",
      "3. Proporcionar conservaciones adicionales",
      "4. Aumentar la resistencia al empuje",
    ],
    correct_answer: "4",
  },
  {
    question:
      "74. Para prevenir la rotura de una tubería por alta presión, se debe utilizar...",
    options: [
      "1. Válvula reguladora de presión",
      "2. Desagüe adecuado",
      "3. Anclaje sólido",
      "4. Válvula de flotador",
    ],
    correct_answer: "1",
  },
  {
    question:
      "75. ¿Qué puede resultar de la acumulación de aire dentro de una tubería?",
    options: [
      "1. Aumento de la presión de agua",
      "2. Pérdida de flujo y presión irregular",
      "3. Aumento de la resistencia al flujo",
      "4. Cierre automático de la válvula",
    ],
    correct_answer: "2",
  },
  {
    question:
      "76. ¿Cuál de las siguientes es una característica esencial de las válvulas de flotador?",
    options: [
      "1. Fuerzan un cierre perfecto",
      "2. Se ajustan manualmente",
      "3. Abren y cierran automáticamente",
      "4. Adaptan la presión hidráulica",
    ],
    correct_answer: "3",
  },
  {
    question:
      "77. ¿Cuál es el objetivo principal de la instalación de sistemas de desagüe?",
    options: [
      "1. Facilitar el consumo de agua",
      "2. Evitar la acumulación de barro",
      "3. Permitir vaciado y mantenimiento",
      "4. Regular el flujo natural",
    ],
    correct_answer: "3",
  },
  {
    question:
      "78. ¿Qué tipo de válvula asegura el flujo de agua solo en un sentido?",
    options: [
      "1. Válvula de compuerta",
      "2. Válvula de mariposa",
      "3. Válvula de retención",
      "4. Válvula de flotador",
    ],
    correct_answer: "3",
  },
  {
    question: "79. Las válvulas también son responsables de...",
    options: [
      "1. Controlar el ciclo del agua en el sistema",
      "2. Profundizar en el análisis de impacto",
      "3. Regular la cantidad de agua que fluye",
      "4. Aumentar el riesgo de fugas",
    ],
    correct_answer: "3",
  },
  {
    question: "80. La principal ventaja de las válvulas antirretorno es:",
    options: [
      "1. Aseguran el llenado rápido",
      "2. Previenen el flujo en sentido contrario",
      "3. Regulan el caudal",
      "4. Son de bajo costo",
    ],
    correct_answer: "2",
  },
];

const dataTema4 = [
  {
    question: "1. ¿Cuál es el objetivo principal de la red de saneamiento?",
    options: [
      "1. Recolectar y transportar aguas negras",
      "2. Recolectar y transportar aguas pluviales",
      "3. Recolectar y transportar aguas residuales",
      "4. Reparar los daños en la infraestructura",
    ],
    correct_answer: "3",
  },
  {
    question:
      "2. ¿Qué tipo de red de saneamiento utiliza una única canalización para aguas residuales y pluviales?",
    options: [
      "1. Red separativa",
      "2. Red unitaria",
      "3. Red híbrida",
      "4. Red de tratamiento",
    ],
    correct_answer: "2",
  },
  {
    question: "3. ¿Qué ventaja tiene el sistema unitaria de saneamiento?",
    options: [
      "1. Menores costos de instalación",
      "2. Menos mantenimiento",
      "3. Menor consumo energético",
      "4. Mayor capacidad de tratamiento",
    ],
    correct_answer: "1",
  },
  {
    question:
      "4. ¿Cuál es un inconveniente de las redes unitarias de saneamiento?",
    options: [
      "1. Costos de energía reducidos",
      "2. Gran variación de caudales",
      "3. Menor capacidad de manejo de aguas pluviales",
      "4. Bajo riesgo de sedimentación",
    ],
    correct_answer: "2",
  },
  {
    question:
      "5. ¿Cómo se clasifican las redes de saneamiento según su funcionamiento hidráulico?",
    options: [
      "1. Por gravedad y bajo presión",
      "2. Por tamaño y material",
      "3. Por costo y mantenimiento",
      "4. Por longitud y ancho",
    ],
    correct_answer: "1",
  },
  {
    question:
      "6. En un sistema de saneamiento separativo, ¿qué se recoge en cada red?",
    options: [
      "1. Aguas residuales y pluviales",
      "2. Aguas residuales y aguas limpias",
      "3. Aguas negras y aguas pluviales",
      "4. Aguas residuales y aguas grises",
    ],
    correct_answer: "3",
  },
  {
    question:
      "7. ¿Cuál de las siguientes no es una desventaja del sistema separativo?",
    options: [
      "1. Elevados costos de urbanización",
      "2. Desgaste del material de las tuberías",
      "3. Mayor mantenimiento",
      "4. Complejidad en la construcción",
    ],
    correct_answer: "2",
  },
  {
    question: "8. ¿Cuál es una ventaja de las redes separativas?",
    options: [
      "1. Requieren más espacio",
      "2. Estaciones de depuración más pequeñas",
      "3. Mayor energía para bombeo",
      "4. Riesgo de sedimentación en colectores",
    ],
    correct_answer: "2",
  },
  {
    question: "9. ¿Qué se debe evitar en el diseño de la red de saneamiento?",
    options: [
      "1. Adaptarse al relieve",
      "2. Prolongar el tiempo de tránsito de aguas",
      "3. Cambios bruscos de dirección",
      "4. Conectar acometidas adecuadamente",
    ],
    correct_answer: "3",
  },
  {
    question:
      "10. En el trazado de alcantarillados, ¿qué distancia se recomienda respecto a las redes de abastecimiento de agua?",
    options: ["1. 1,0 m", "2. 0,5 m", "3. 2,0 m", "4. 1,5 m"],
    correct_answer: "1",
  },
  {
    question:
      "11. ¿Qué se debe controlar en las redes de saneamiento para evitar sedimentaciones?",
    options: [
      "1. Velocidades inferiores a 0,5 m/s",
      "2. Conexiones inadecuadas",
      "3. Dimensiones excesivas",
      "4. Presiones elevadas",
    ],
    correct_answer: "1",
  },
  {
    question:
      "12. ¿Cuál es el diámetro mínimo que se recomienda para las conducciones de alcantarillado?",
    options: [
      "1. 300 mm",
      "2. 400 mm",
      "3. 500 mm",
      "4. No hay un mínimo establecido",
    ],
    correct_answer: "1",
  },
  {
    question:
      "13. ¿Qué tipo de sección se suele utilizar para diámetros pequeños en colectores de saneamiento?",
    options: [
      "1. Secciones rectangulares",
      "2. Secciones cuadradas",
      "3. Secciones elípticas",
      "4. Secciones circulares",
    ],
    correct_answer: "4",
  },
  {
    question:
      "14. ¿Cuál es el material más comúnmente utilizado para tuberías de saneamiento?",
    options: [
      "1. Acero inoxidable",
      "2. Hormigón armado",
      "3. Plástico reciclado",
      "4. Cobre",
    ],
    correct_answer: "2",
  },
  {
    question:
      "15. ¿Qué tipo de colectores son más adecuados para tramos que no están preparados para presión?",
    options: [
      "1. Colectores de polímero",
      "2. Colectores de hormigón armado",
      "3. Colectores de acero",
      "4. Colectores de PVC",
    ],
    correct_answer: "2",
  },
  {
    question:
      "16. ¿Cuál de los siguientes aspectos afecta la durabilidad de las tuberías en la red de saneamiento?",
    options: [
      "1. Ángulo de inclinación",
      "2. Presión interior",
      "3. Material del conducto",
      "4. Todos los anteriores",
    ],
    correct_answer: "4",
  },
  {
    question:
      "17. ¿Cuál es el nombre del conducto subterráneo que permite evacuar aguas residuales de una finca a la alcantarilla?",
    options: ["1. Albañal", "2. Aliviadero", "3. Colector", "4. Desagüe"],
    correct_answer: "1",
  },
  {
    question:
      "18. ¿Qué longitud de la tubería se considera mínima para garantizar una correcta evacuación?",
    options: ["1. 0,5 m", "2. 1 m", "3. 2 m", "4. 1,5 m"],
    correct_answer: "2",
  },
  {
    question:
      "19. ¿Qué tratamiento se necesita para las aguas pluviales antes de su vertido a cauces naturales?",
    options: [
      "1. Un tratamiento complejo",
      "2. Un pequeño tratamiento previo",
      "3. Ningún tratamiento",
      "4. Tratamiento biológico",
    ],
    correct_answer: "2",
  },
  {
    question:
      "20. ¿Qué criterio se recomienda para la pendiente mínima de salida de aguas residuales?",
    options: ["1. 0.5%", "2. 1%", "3. 0.3%", "4. 1.5%"],
    correct_answer: "1",
  },
  {
    question:
      "21. ¿Qué tipo de colector es preferido por su resistencia mecánica?",
    options: [
      "1. Colector de PVC",
      "2. Colector de hormigón armado",
      "3. Colector de polietileno",
      "4. Colector de fundición",
    ],
    correct_answer: "2",
  },
  {
    question:
      "22. ¿Qué sección es comúnmente usada para tramos con menor caudal de agua?",
    options: [
      "1. Section Rectangular",
      "2. Section Circular",
      "3. Section Ovoid",
      "4. Section Cuadrada",
    ],
    correct_answer: "3",
  },
  {
    question:
      "23. En un sistema de alcantarillado, ¿qué opción representa el método más eficiente para el diseño?",
    options: [
      "1. Uso de doble red de saneamiento",
      "2. Aplicaciones de presión interior",
      "3. Función de gravedad",
      "4. Configuración de una red híbrida",
    ],
    correct_answer: "3",
  },
  {
    question:
      "24. ¿Cuál es un criterio general para la confiabilidad de los sistemas de tuberías?",
    options: [
      "1. Se deben utilizar solo materiales reciclados",
      "2. La calidad del material es esencial",
      "3. Las tuberías deben ser enterradas a 0.5m",
      "4. Reducción de diámetros mejora la velocidad del flujo",
    ],
    correct_answer: "2",
  },
  {
    question:
      "25. ¿Qué se puede hacer si las pendientes en la red de alcantarillado son inadecuadas?",
    options: [
      "1. Aumentar el diámetro de las tuberías",
      "2. Agregar pozos de resalto",
      "3. Reducir la longitud de la red",
      "4. Invertir el flujo hacia atrás",
    ],
    correct_answer: "2",
  },
  {
    question:
      "26. ¿Cuáles son las características que debes considerar al seleccionar el diámetro de un colector?",
    options: [
      "1. Material y costo",
      "2. Uso y mantenimiento",
      "3. Caudal y gravedad",
      "4. Longitud de la tubería",
    ],
    correct_answer: "3",
  },
  {
    question:
      "27. ¿Qué material es recomendado para tramos donde la presión interior es elevada?",
    options: [
      "1. Hormigón armado",
      "2. Fundición dúctil",
      "3. Polipropileno",
      "4. Gres",
    ],
    correct_answer: "2",
  },
  {
    question:
      "28. ¿Qué tipo de colector debe usarse en la red de pluviales para evitar sedimentaciones?",
    options: [
      "1. Colector de hormigón armado",
      "2. Colector de PVC",
      "3. Colector de acero",
      "4. Colector de fundición",
    ],
    correct_answer: "2",
  },
  {
    question:
      "29. Para garantizar una buena calidad del agua, ¿qué se debe controlar en el saneamiento?",
    options: [
      "1. La temperatura del agua",
      "2. El pH del agua",
      "3. El color del agua",
      "4. El tamaño de las tuberías",
    ],
    correct_answer: "2",
  },
  {
    question:
      "30. ¿Cuál es el diseño recomendado para el trazado en planta de alcantarillados?",
    options: [
      "1. Curvas suaves en el trazado",
      "2. Alineaciones rectas y alineaciones desconectadas",
      "3. Alineaciones rectas con intercalación de pozos de registro",
      "4. Ángulos de 90 grados en todas las esquinas",
    ],
    correct_answer: "3",
  },
  {
    question:
      "31. ¿Por qué es importante la coordinación en el diseño de la red general y la interior en edificios?",
    options: [
      "1. Para minimizar costos",
      "2. Para optimizar el rendimiento hidráulico",
      "3. Para evitar la creación de sistemas pseudo-separativos",
      "4. Para cumplir con la normativa edilicia",
    ],
    correct_answer: "3",
  },
  {
    question:
      "32. ¿Qué efecto tiene el pH en las tuberías y elementos de la red de saneamiento?",
    options: [
      "1. No tiene efecto",
      "2. Puede alterar los materiales",
      "3. Mejora la durabilidad",
      "4. Reduce el mantenimiento requerido",
    ],
    correct_answer: "2",
  },
  {
    question:
      "33. ¿Qué criterio mínimo se recomienda para las profundidades de las tuberías de alcantarillado?",
    options: [
      "1. No debe ser menor a 0,5 m",
      "2. Siempre al menos 1 m",
      "3. Dependiendo del clima local",
      "4. Puede ser superficial",
    ],
    correct_answer: "1",
  },
  {
    question:
      "34. ¿Qué nivel de pH se considera normal para aguas residuales urbanas?",
    options: ["1. 7.0", "2. 8.0", "3. 6.5", "4. 5.5"],
    correct_answer: "3",
  },
  {
    question:
      "35. ¿Cuáles son los usos comunes para las tuberías de polietileno?",
    options: [
      "1. Alimentación de agua potable",
      "2. Condiciones de baja presión",
      "3. Evacuación de aguas residuales",
      "4. Restricciones en alto flujo de agua",
    ],
    correct_answer: "3",
  },
  {
    question:
      "36. La incorporación de drenajes de cubiertas a la red debe evitarse para mantener:",
    options: [
      "1. Un sistema pseudo-separativo",
      "2. La capacidad de las plantas de tratamiento",
      "3. Los niveles de contaminación bajos",
      "4. Los costos de operación altos",
    ],
    correct_answer: "1",
  },
  {
    question:
      "37. ¿Qué función tienen las cámaras de descarga en una red de saneamiento?",
    options: [
      "1. Regular la presión del agua",
      "2. Conducir el flujo de manera eficiente",
      "3. Contener sedimentos y desechos",
      "4. Disminuir la velocidad del agua",
    ],
    correct_answer: "2",
  },
  {
    question:
      "38. ¿Qué debe hacerse si se prevén cambios significativos en el caudal de agua en un colector?",
    options: [
      "1. Instalar mayores bombas",
      "2. Aumentar el diámetro de colectores",
      "3. Reducir la longitud",
      "4. Construir ramales adicionales",
    ],
    correct_answer: "2",
  },
  {
    question:
      "39. ¿Qué tamaño de diámetro es común para los colectores que requieren acceso a limpieza?",
    options: ["1. Ø200", "2. Ø500", "3. Ø800", "4. Ø1800"],
    correct_answer: "4",
  },
  {
    question:
      "40. ¿Cuál es el principio hidráulico preferido en el diseño de redes de saneamiento?",
    options: [
      "1. Por presión interna",
      "2. Por gravedad",
      "3. Combinando ambos",
      "4. A través de bombeo constante",
    ],
    correct_answer: "2",
  },
  {
    question:
      "41. ¿Qué se usa para medir la caída de presión en un sistema de alcantarillado?",
    options: [
      "1. Manómetros",
      "2. Medidores de flujo",
      "3. Termómetros",
      "4. Medidores de pH",
    ],
    correct_answer: "1",
  },
  {
    question:
      "42. ¿Qué se debe evitar en el mantenimiento de las tuberías de saneamiento?",
    options: [
      "1. Revisiones anuales",
      "2. Overhaul frecuentemente",
      "3. Depositar residuos no permitidos",
      "4. Controlar niveles de sedimentación",
    ],
    correct_answer: "3",
  },
  {
    question:
      "43. ¿Por qué las dimensiones de diseño de un colector son críticas?",
    options: [
      "1. Para optimizar costos",
      "2. Para manejar mejor las velocidades a través",
      "3. Para prevenir fugas y rupturas",
      "4. Para cumplir con la normativa ambiental",
    ],
    correct_answer: "2",
  },
  {
    question:
      "44. ¿Qué aspecto se considera crucial para el diseño de una planta de tratamiento de aguas residuales?",
    options: [
      "1. La ubicación geográfica",
      "2. El tamaño del tratamiento",
      "3. La capacidad de las conducciones",
      "4. La calidad de agua tratada",
    ],
    correct_answer: "4",
  },
  {
    question:
      "45. ¿Cuál es uno de los principales retos al diseñar un sistema de saneamiento en áreas urbanas densas?",
    options: [
      "1. Acceso a equipos pesados",
      "2. Disposición y espacio para tuberías",
      "3. Reducción de costos de construcción",
      "4. Aislamiento de materiales",
    ],
    correct_answer: "2",
  },
  {
    question:
      "46. ¿Qué consideración es importante respecto a las tuberías en zonas propensas a inundaciones?",
    options: [
      "1. Construcción superficial",
      "2. Ubicación elevada",
      "3. Instalación a nivel del suelo",
      "4. Uso de materiales menos duraderos",
    ],
    correct_answer: "2",
  },
  {
    question:
      "47. ¿Cuál es una consecuencia directa de no mantener una red de saneamiento adecuadamente?",
    options: [
      "1. Reducción de costos operativos",
      "2. Fugas de agua pluvial",
      "3. Contaminación ambiental",
      "4. Optimización del flujo",
    ],
    correct_answer: "3",
  },
  {
    question:
      "48. En el mantenimiento de una red de saneamiento, ¿qué tipo de prueba se debería realizar regularmente?",
    options: [
      "1. Inspección visual y análisis de residuos",
      "2. Prueba de sonido de tuberías",
      "3. Revisión de diagnóstico basado en ruido",
      "4. Prueba de erosión de materiales",
    ],
    correct_answer: "1",
  },
  {
    question:
      "49. ¿Qué material se debe evitar en aplicaciones donde hay contacto constante con aguas agresivas?",
    options: ["1. Hormigón armado", "2. Plásticos", "3. Gres", "4. Hierro"],
    correct_answer: "4",
  },
  {
    question:
      "50. ¿Cuál de las siguientes opciones es una indicación de problemas en la red de saneamiento?",
    options: [
      "1. Aguas que fluyen con velocidad constante",
      "2. Aguas oscuras en el flujo",
      "3. Presencia de escombros en la red",
      "4. Olores mínimos en el área",
    ],
    correct_answer: "3",
  },
];

var temaLoaded = [];

function loadTema(tema) {
  var randomQuestions = [];
  let numQuestions = prompt(
    "¿Cuantas preguntas quieres que tenga el quizz?",
    10
  );

  if (numQuestions == null) numQuestions = 10;

  switch (tema) {
    case 2:
      randomQuestions = getRandomQuestions(dataTema2, numQuestions);
      break;
    case 3:
      randomQuestions = getRandomQuestions(dataTema3, numQuestions);
      break;
    case 4:
      randomQuestions = getRandomQuestions(dataTema4, numQuestions);
      break;
    default:
      break;
  }
  return randomQuestions;
}

// Función para obtener un número aleatorio de preguntas
function getRandomQuestions(tempData, numQuestions) {
  // Crear una copia del arreglo para no modificar el original
  const shuffled = [...tempData];

  // Mezclar las preguntas usando el algoritmo de Fisher-Yates
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Intercambiar
  }

  // Tomar las primeras 'numQuestions' preguntas
  return shuffled.slice(0, numQuestions);
}

const quizForm = document.getElementById("quizForm");

// Cargar las preguntas y opciones dinámicamente
function loadQuiz(quizData) {
  quizData.forEach((item, index) => {
    const questionElement = document.createElement("div");
    questionElement.classList.add("question");
    questionElement.id = `question-${index}`;

    // Crear la pregunta
    const questionText = document.createElement("p");
    questionText.innerHTML = item.question;
    questionElement.appendChild(questionText);

    // Crear las opciones
    item.options.forEach((option, i) => {
      const optionLabel = document.createElement("label");
      const optionInput = document.createElement("input");
      optionInput.type = "radio";
      optionInput.name = `question${index}`;
      optionInput.value = (i + 1).toString();
      optionLabel.appendChild(optionInput);
      optionLabel.appendChild(document.createTextNode(option));
      questionElement.appendChild(optionLabel);
      questionElement.appendChild(document.createElement("br"));
    });

    // Añadir la pregunta al formulario
    quizForm.appendChild(questionElement);
  });
}

// Verificar las respuestas
function checkAnswers() {
  let score = 0;

  temaLoaded.forEach((question, index) => {
    const selectedOption = document.querySelector(
      `input[name="question${index}"]:checked`
    );
    const questionContainer = document.getElementById(`question-${index}`);

    // Limpiar clases anteriores
    questionContainer.classList.remove(
      "question",
      "correct",
      "incorrect",
      "unanswered"
    );

    if (selectedOption) {
      if (selectedOption.value === question.correct_answer) {
        // ✅ Respuesta correcta
        questionContainer.classList.add("correct");
        score++;
      } else {
        // ❌ Respuesta incorrecta
        questionContainer.classList.add("incorrect");
      }
    } else {
      // ⚪ Pregunta no respondida
      questionContainer.classList.add("unanswered");
    }
  });

  alert(`✅ Has obtenido una puntuación de ${score} / 10`);
}

document.getElementById("tema2").addEventListener("click", () => {
  const quizForm = document.getElementById("quizForm");
  quizForm.innerHTML = ""; // Eliminar todas las preguntas
  const result = document.getElementById("result");
  result.innerHTML = "";
  temaLoaded = loadTema(2);
  loadQuiz(temaLoaded);
});

document.getElementById("tema3").addEventListener("click", () => {
  const quizForm = document.getElementById("quizForm");
  quizForm.innerHTML = ""; // Eliminar todas las preguntas
  const result = document.getElementById("result");
  result.innerHTML = "";
  temaLoaded = loadTema(3);
  loadQuiz(temaLoaded);
});

document.getElementById("tema4").addEventListener("click", () => {
  const quizForm = document.getElementById("quizForm");
  quizForm.innerHTML = ""; // Eliminar todas las preguntas
  const result = document.getElementById("result");
  result.innerHTML = "";
  temaLoaded = loadTema(4);
  loadQuiz(temaLoaded);
});

// Cargar el quiz cuando se cargue la página
if (temaLoaded.length == 0) temaLoaded = loadTema(2);
window.onload = loadQuiz(temaLoaded);
