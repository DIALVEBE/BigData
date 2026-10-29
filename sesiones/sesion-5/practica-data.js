export const preguntas = [
  {
    "id": "BD-P01",
    "tema": "Fundamentos de Big Data",
    "nivel": "Aplicación",
    "tipo": "unica",
    "pregunta": "Un sistema de movilidad recibe miles de registros de ubicación por segundo y debe reaccionar con rapidez. ¿Qué dimensión de Big Data resulta más crítica para el diseño?",
    "opciones": [
      {
        "id": "a",
        "texto": "Volumen",
        "retroalimentacion": "El volumen mide cuánto dato existe; aquí la presión principal está en la frecuencia de llegada."
      },
      {
        "id": "b",
        "texto": "Velocidad",
        "retroalimentacion": "La velocidad considera qué tan rápido llegan los datos y deben procesarse."
      },
      {
        "id": "c",
        "texto": "Variedad",
        "retroalimentacion": "La variedad describe los formatos diferentes, no la frecuencia de los eventos."
      },
      {
        "id": "d",
        "texto": "Veracidad",
        "retroalimentacion": "La veracidad se relaciona con confiabilidad y calidad, no con la rapidez."
      }
    ],
    "correctas": [
      "b"
    ],
    "pista": "Piensa en el ritmo con el que llegan los eventos, no solo en cuántos se almacenan.",
    "explicacion": "Volumen, velocidad y variedad son dimensiones clásicas; un flujo continuo suele exigir atender especialmente la velocidad."
  },
  {
    "id": "BD-P02",
    "tema": "Fundamentos de Big Data",
    "nivel": "Aplicación",
    "tipo": "multiple",
    "pregunta": "Una alcaldía consolida datos tabulares, grabaciones de audio y archivos PDF de varios años. ¿Qué aspectos describen correctamente los retos de Big Data? Selecciona todas las opciones que correspondan.",
    "opciones": [
      {
        "id": "a",
        "texto": "Administrar formatos heterogéneos",
        "retroalimentacion": "Son representaciones diferentes y requieren estrategias de tratamiento acordes."
      },
      {
        "id": "b",
        "texto": "Mantener una capacidad de almacenamiento acorde con el crecimiento",
        "retroalimentacion": "El aumento de información afecta la dimensión de volumen."
      },
      {
        "id": "c",
        "texto": "Tratar las grabaciones de audio como columnas numéricas sin preparación",
        "retroalimentacion": "El audio necesita una representación o extracción adecuada; no se comporta automáticamente como una columna numérica."
      },
      {
        "id": "d",
        "texto": "Suponer que todos los registros tienen el mismo esquema",
        "retroalimentacion": "La coexistencia de tablas, audios y documentos contradice esta suposición."
      }
    ],
    "correctas": [
      "a",
      "b"
    ],
    "pista": "Separa las preguntas ¿cuánto?, ¿qué formatos? y ¿a qué ritmo?",
    "explicacion": "La cantidad de información y la heterogeneidad de formatos afectan el diseño. El contenido de audio y documentos requiere preparación adecuada antes de un análisis tabular."
  },
  {
    "id": "BD-P03",
    "tema": "Fundamentos de Big Data",
    "nivel": "Aplicación",
    "tipo": "unica",
    "pregunta": "Una entidad procesó millones de registros, pero aún no sabe qué decisiones mejorarán con sus resultados. ¿Qué dimensión adicional del Big Data debería priorizar?",
    "opciones": [
      {
        "id": "a",
        "texto": "Valor",
        "retroalimentacion": "El valor pregunta por la utilidad que el análisis aporta a una decisión o servicio."
      },
      {
        "id": "b",
        "texto": "Variedad",
        "retroalimentacion": "Reunir más formatos no garantiza que el análisis sea útil."
      },
      {
        "id": "c",
        "texto": "Velocidad",
        "retroalimentacion": "Procesar antes no asegura que el resultado apoye una decisión."
      },
      {
        "id": "d",
        "texto": "Volumen",
        "retroalimentacion": "Incrementar registros tampoco demuestra impacto de la información."
      }
    ],
    "correctas": [
      "a"
    ],
    "pista": "Un resultado técnico puede ser correcto y aun así no resolver una necesidad.",
    "explicacion": "El valor conecta los datos con resultados utilizables. No basta con recolectar o procesar grandes cantidades."
  },
  {
    "id": "BD-P04",
    "tema": "Tipos y preparación de datos",
    "nivel": "Aplicación",
    "tipo": "unica",
    "pregunta": "Un equipo recibe comentarios libres sobre la atención de una oficina pública. ¿Qué dificultad inicial diferencia esos textos de una tabla con columnas fijas?",
    "opciones": [
      {
        "id": "a",
        "texto": "No tienen necesariamente un esquema uniforme para extraer variables",
        "retroalimentacion": "Un comentario libre puede incluir expresiones, longitudes y significados distintos."
      },
      {
        "id": "b",
        "texto": "No pueden almacenarse en archivos",
        "retroalimentacion": "Los textos pueden guardarse en múltiples sistemas y formatos."
      },
      {
        "id": "c",
        "texto": "Solo pueden analizarse a mano",
        "retroalimentacion": "Existen herramientas automáticas de procesamiento de lenguaje."
      },
      {
        "id": "d",
        "texto": "Siempre ocupan menos espacio que una tabla",
        "retroalimentacion": "El tamaño no define el carácter estructurado de la información."
      }
    ],
    "correctas": [
      "a"
    ],
    "pista": "Distingue entre el formato de almacenamiento y la estructura interna del contenido.",
    "explicacion": "Los textos libres son datos no estructurados desde la perspectiva analítica: antes de analizarlos suele ser necesario extraer, limpiar o representar información."
  },
  {
    "id": "BD-P05",
    "tema": "Tipos y preparación de datos",
    "nivel": "Aplicación",
    "tipo": "verdadero_falso",
    "pregunta": "Dos archivos pueden estar guardados como PDF y requerir procesos de extracción muy diferentes si uno contiene texto seleccionable y el otro es una imagen escaneada.",
    "opciones": [
      {
        "id": "verdadero",
        "texto": "Verdadero",
        "retroalimentacion": "El primero permite extraer texto directamente en muchos casos; el escaneado puede exigir reconocimiento óptico de caracteres."
      },
      {
        "id": "falso",
        "texto": "Falso",
        "retroalimentacion": "El contenedor PDF no garantiza que ambos documentos tengan el mismo tipo de contenido interno."
      }
    ],
    "correctas": [
      "verdadero"
    ],
    "pista": "No confundas la extensión de un archivo con la forma en la que se representa el contenido.",
    "explicacion": "En un proceso de datos documentales conviene detectar si existe una capa de texto o si se necesita OCR."
  },
  {
    "id": "BD-P06",
    "tema": "Hadoop y procesamiento distribuido",
    "nivel": "Aplicación",
    "tipo": "unica",
    "pregunta": "Una organización necesita dividir archivos muy grandes entre varias máquinas y tolerar fallos de nodos. ¿Qué componente del ecosistema Hadoop se asocia directamente con el almacenamiento distribuido?",
    "opciones": [
      {
        "id": "a",
        "texto": "HDFS",
        "retroalimentacion": "HDFS distribuye bloques de archivos y contempla mecanismos de tolerancia a fallos."
      },
      {
        "id": "b",
        "texto": "Power BI",
        "retroalimentacion": "Power BI se orienta a análisis y visualización, no al sistema de archivos distribuido."
      },
      {
        "id": "c",
        "texto": "Jupyter Notebook",
        "retroalimentacion": "Jupyter ofrece una interfaz de trabajo, pero no cumple esa función de almacenamiento."
      },
      {
        "id": "d",
        "texto": "Tableau",
        "retroalimentacion": "Tableau es una plataforma analítica y visual, no un sistema de archivos distribuido."
      }
    ],
    "correctas": [
      "a"
    ],
    "pista": "Identifica el componente de almacenamiento, no una herramienta de consulta o visualización.",
    "explicacion": "HDFS es un sistema de archivos distribuido que forma parte del ecosistema Hadoop."
  },
  {
    "id": "BD-P07",
    "tema": "Hadoop y procesamiento distribuido",
    "nivel": "Aplicación",
    "tipo": "unica",
    "pregunta": "Para calcular la frecuencia de palabras en una colección extensa, el sistema procesa bloques en varios equipos y después combina conteos. ¿Qué enfoque representa mejor ese trabajo?",
    "opciones": [
      {
        "id": "a",
        "texto": "Procesamiento distribuido tipo MapReduce",
        "retroalimentacion": "MapReduce divide tareas y agrega resultados entre etapas de mapeo y reducción."
      },
      {
        "id": "b",
        "texto": "Visualización directa en un dashboard",
        "retroalimentacion": "Un dashboard presenta resultados, pero no describe la distribución del cálculo."
      },
      {
        "id": "c",
        "texto": "Edición manual de un archivo maestro",
        "retroalimentacion": "La edición manual no aprovecha ejecución paralela distribuida."
      },
      {
        "id": "d",
        "texto": "Compresión de datos sin análisis",
        "retroalimentacion": "La compresión reduce tamaño, pero no calcula frecuencias."
      }
    ],
    "correctas": [
      "a"
    ],
    "pista": "Busca la estrategia que reparte trabajo y luego consolida resultados.",
    "explicacion": "El procesamiento distribuido permite repartir cálculos en nodos; MapReduce es un paradigma clásico para realizar esa tarea."
  },
  {
    "id": "BD-P08",
    "tema": "Hadoop y procesamiento distribuido",
    "nivel": "Aplicación",
    "tipo": "verdadero_falso",
    "pregunta": "En una tarea distribuida, aumentar el número de máquinas garantiza por sí solo que el tiempo total disminuya proporcionalmente.",
    "opciones": [
      {
        "id": "verdadero",
        "texto": "Verdadero",
        "retroalimentacion": "El paralelismo puede ayudar, pero transferencias, coordinación y carga desigual impiden garantizar una mejora proporcional."
      },
      {
        "id": "falso",
        "texto": "Falso",
        "retroalimentacion": "La aceleración depende también de comunicación, particiones, sobrecarga y naturaleza del trabajo."
      }
    ],
    "correctas": [
      "falso"
    ],
    "pista": "Piensa en los costos de coordinación y transmisión entre máquinas.",
    "explicacion": "La escalabilidad depende del diseño de la tarea, la distribución del trabajo y los costos de coordinación, no solo del número de nodos."
  },
  {
    "id": "BD-P09",
    "tema": "Hadoop y procesamiento distribuido",
    "nivel": "Aplicación",
    "tipo": "multiple",
    "pregunta": "Un equipo diseña un flujo de procesamiento sobre un clúster. ¿Qué decisiones son coherentes con el cómputo distribuido? Selecciona todas las que correspondan.",
    "opciones": [
      {
        "id": "a",
        "texto": "Particionar la información entre tareas ejecutables en paralelo",
        "retroalimentacion": "Las particiones permiten distribuir parte del trabajo."
      },
      {
        "id": "b",
        "texto": "Prever qué ocurre si falla una máquina",
        "retroalimentacion": "La tolerancia a fallos es relevante en sistemas con varios nodos."
      },
      {
        "id": "c",
        "texto": "Colocar todas las particiones en un único nodo para reducir movimientos",
        "retroalimentacion": "Concentrar las particiones en un nodo elimina buena parte del paralelismo y puede generar un cuello de botella."
      },
      {
        "id": "d",
        "texto": "Confiar en que cada nodo conserve siempre una copia completa de todo",
        "retroalimentacion": "Esta suposición no es requisito general ni diseño eficiente en todos los casos."
      }
    ],
    "correctas": [
      "a",
      "b"
    ],
    "pista": "Considera reparto del trabajo, comunicación y disponibilidad.",
    "explicacion": "Repartir trabajo y contemplar fallos son decisiones fundamentales. Concentrar todos los datos en un solo nodo o replicarlos íntegros en cada nodo no es un requisito general del cómputo distribuido."
  },
  {
    "id": "BD-P10",
    "tema": "Data Lake y Data Warehouse",
    "nivel": "Aplicación",
    "tipo": "unica",
    "pregunta": "Una entidad quiere preservar archivos CSV, JSON y documentos sin transformar para explorarlos en proyectos futuros. ¿Qué enfoque de almacenamiento resulta más alineado?",
    "opciones": [
      {
        "id": "a",
        "texto": "Zona de datos sin procesar dentro de un Data Lake",
        "retroalimentacion": "Un Data Lake puede conservar diversos formatos en su estado original para usos posteriores."
      },
      {
        "id": "b",
        "texto": "Tabla dimensional ya modelada en un Data Warehouse",
        "retroalimentacion": "Una tabla dimensional suele responder a necesidades analíticas y esquemas definidos."
      },
      {
        "id": "c",
        "texto": "Dashboard consolidado",
        "retroalimentacion": "Un dashboard es una forma de presentar resultados, no un repositorio de datos crudos."
      },
      {
        "id": "d",
        "texto": "Documento final de indicadores",
        "retroalimentacion": "Un documento reporta resultados, pero no preserva el conjunto heterogéneo."
      }
    ],
    "correctas": [
      "a"
    ],
    "pista": "Diferencia la preservación flexible de datos frente al modelado para consulta.",
    "explicacion": "Un Data Lake permite almacenar datos de distintas estructuras, incluidos datos sin procesar; requiere catálogo y gobernanza para ser útil."
  },
  {
    "id": "BD-P11",
    "tema": "Data Lake y Data Warehouse",
    "nivel": "Aplicación",
    "tipo": "unica",
    "pregunta": "Un área financiera necesita reportes mensuales repetibles, con indicadores estables y definiciones compartidas. ¿Qué enfoque suele facilitar mejor ese consumo?",
    "opciones": [
      {
        "id": "a",
        "texto": "Data Warehouse con datos curados y modelados",
        "retroalimentacion": "Los modelos estables y datos depurados facilitan consultas consistentes."
      },
      {
        "id": "b",
        "texto": "Carpeta sin catálogo de archivos de origen",
        "retroalimentacion": "Los datos sin organizar dificultan reproducibilidad de reportes."
      },
      {
        "id": "c",
        "texto": "Colección de capturas de pantalla",
        "retroalimentacion": "Las imágenes no ofrecen un modelo analítico consistente."
      },
      {
        "id": "d",
        "texto": "Registro bruto sin controles de calidad",
        "retroalimentacion": "La falta de validaciones afecta la confianza en los indicadores."
      }
    ],
    "correctas": [
      "a"
    ],
    "pista": "Piensa en quién consume el dato y con qué regularidad se repiten las preguntas.",
    "explicacion": "Un Data Warehouse suele organizar información integrada y depurada para consultas e indicadores conocidos."
  },
  {
    "id": "BD-P12",
    "tema": "Data Lake y Data Warehouse",
    "nivel": "Aplicación",
    "tipo": "multiple",
    "pregunta": "Un equipo evalúa utilizar un Data Lake para un repositorio analítico. ¿Qué características son compatibles con ese enfoque? Selecciona todas las que correspondan.",
    "opciones": [
      {
        "id": "a",
        "texto": "Guardar datos originales antes de definir todas las transformaciones",
        "retroalimentacion": "Conservar datos crudos puede facilitar análisis posteriores."
      },
      {
        "id": "b",
        "texto": "Reunir registros estructurados y no estructurados",
        "retroalimentacion": "El diseño admite diversos tipos y formatos."
      },
      {
        "id": "c",
        "texto": "Habilitar exploración y nuevas técnicas analíticas",
        "retroalimentacion": "La flexibilidad puede servir a usos no previstos inicialmente."
      },
      {
        "id": "d",
        "texto": "Garantizar por sí mismo el mejor rendimiento de cualquier consulta SQL",
        "retroalimentacion": "El rendimiento depende del diseño y el motor, no de la etiqueta Data Lake."
      }
    ],
    "correctas": [
      "a",
      "b",
      "c"
    ],
    "pista": "No confundas flexibilidad de almacenamiento con garantías automáticas de rendimiento.",
    "explicacion": "El valor de un Data Lake está en la flexibilidad para almacenar y explorar datos diversos; el rendimiento y la calidad dependen de decisiones adicionales."
  },
  {
    "id": "BD-P13",
    "tema": "Data Lake y Data Warehouse",
    "nivel": "Aplicación",
    "tipo": "verdadero_falso",
    "pregunta": "Para construir un Data Warehouse con fuentes de distintos sistemas, es necesario conservar cada formato original sin realizar transformaciones de integración.",
    "opciones": [
      {
        "id": "verdadero",
        "texto": "Verdadero",
        "retroalimentacion": "La integración de un almacén analítico puede incluir depuración, homologación y transformación entre formatos."
      },
      {
        "id": "falso",
        "texto": "Falso",
        "retroalimentacion": "Las transformaciones permiten integrar fuentes heterogéneas en estructuras consistentes para la consulta."
      }
    ],
    "correctas": [
      "falso"
    ],
    "pista": "Considera cómo se consigue consultar conjuntamente información de sistemas distintos.",
    "explicacion": "Un Data Warehouse suele integrar, transformar y depurar datos de múltiples fuentes. No obliga a mantener cada formato de origen sin cambios."
  },
  {
    "id": "BD-P14",
    "tema": "Data Lake y Data Warehouse",
    "nivel": "Aplicación",
    "tipo": "unica",
    "pregunta": "Si una organización conserva registros originales y construye después conjuntos depurados para indicadores, ¿qué afirmación describe mejor la relación entre ambos espacios?",
    "opciones": [
      {
        "id": "a",
        "texto": "La zona original y la zona curada pueden atender necesidades distintas",
        "retroalimentacion": "Preservación flexible y consulta de negocio pueden complementarse."
      },
      {
        "id": "b",
        "texto": "El almacenamiento original vuelve innecesaria la calidad de datos",
        "retroalimentacion": "La calidad sigue siendo necesaria para análisis confiables."
      },
      {
        "id": "c",
        "texto": "La zona curada impide almacenar texto libre",
        "retroalimentacion": "La transformación no prohíbe conservar otras representaciones."
      },
      {
        "id": "d",
        "texto": "Los indicadores siempre deben calcularse desde archivos sin validar",
        "retroalimentacion": "Las validaciones reducen errores en las métricas."
      }
    ],
    "correctas": [
      "a"
    ],
    "pista": "Una arquitectura puede conservar datos crudos y también tener datos preparados.",
    "explicacion": "La coexistencia de datos originales y conjuntos depurados permite trazabilidad, reutilización y consultas consistentes."
  },
  {
    "id": "BD-P15",
    "tema": "Gobernanza y seguridad",
    "nivel": "Aplicación",
    "tipo": "unica",
    "pregunta": "Dos dependencias de una entidad calculan de forma diferente el indicador “contratos vigentes”. ¿Qué acción de gobernanza conviene realizar primero?",
    "opciones": [
      {
        "id": "a",
        "texto": "Acordar una definición del indicador y responsables de su mantenimiento",
        "retroalimentacion": "Las definiciones comunes y responsables favorecen consistencia."
      },
      {
        "id": "b",
        "texto": "Crear más gráficos sin revisar las definiciones",
        "retroalimentacion": "Los gráficos no resuelven la discrepancia semántica."
      },
      {
        "id": "c",
        "texto": "Duplicar las tablas en todas las dependencias",
        "retroalimentacion": "La duplicación puede ampliar las inconsistencias."
      },
      {
        "id": "d",
        "texto": "Ocultar el origen de los datos",
        "retroalimentacion": "Reducir trazabilidad dificulta resolver diferencias."
      }
    ],
    "correctas": [
      "a"
    ],
    "pista": "La discrepancia surge antes de la visualización: revisa el significado de la métrica.",
    "explicacion": "La gobernanza incluye reglas, responsables, definiciones, calidad y trazabilidad de la información."
  },
  {
    "id": "BD-P16",
    "tema": "Gobernanza y seguridad",
    "nivel": "Aplicación",
    "tipo": "multiple",
    "pregunta": "Un hospital diseña reglas para administrar sus bases de datos. ¿Cuáles medidas forman parte de una práctica de gobernanza? Selecciona todas las pertinentes.",
    "opciones": [
      {
        "id": "a",
        "texto": "Definir responsables de conjuntos de datos",
        "retroalimentacion": "La asignación de responsabilidades facilita decisiones y seguimiento."
      },
      {
        "id": "b",
        "texto": "Establecer controles de calidad verificables",
        "retroalimentacion": "Las reglas de calidad reducen inconsistencias."
      },
      {
        "id": "c",
        "texto": "Registrar el origen y las transformaciones",
        "retroalimentacion": "La trazabilidad permite comprender y auditar resultados."
      },
      {
        "id": "d",
        "texto": "Permitir acceso sin autorización a cualquier usuario",
        "retroalimentacion": "La gobernanza requiere aplicar políticas y controles apropiados."
      }
    ],
    "correctas": [
      "a",
      "b",
      "c"
    ],
    "pista": "Piensa en políticas, roles, confianza y seguimiento de la información.",
    "explicacion": "La gobernanza articula personas, procesos y controles para que los datos tengan calidad, seguridad y uso responsable."
  },
  {
    "id": "BD-P17",
    "tema": "Gobernanza y seguridad",
    "nivel": "Aplicación",
    "tipo": "unica",
    "pregunta": "El valor de una columna cambió entre la carga y el reporte; el analista necesita saber cuál transformación lo modificó. ¿Qué capacidad debe consultar?",
    "opciones": [
      {
        "id": "a",
        "texto": "Linaje o trazabilidad de datos",
        "retroalimentacion": "El linaje documenta fuentes, movimientos y transformaciones."
      },
      {
        "id": "b",
        "texto": "Paleta de colores del reporte",
        "retroalimentacion": "Los colores no explican transformaciones de registros."
      },
      {
        "id": "c",
        "texto": "Número de diapositivas del informe",
        "retroalimentacion": "El formato de presentación no rastrea cambios de datos."
      },
      {
        "id": "d",
        "texto": "Tamaño de pantalla del usuario",
        "retroalimentacion": "La resolución de pantalla no determina el origen de una columna."
      }
    ],
    "correctas": [
      "a"
    ],
    "pista": "Relaciona el problema con reconstruir el camino del dato.",
    "explicacion": "El linaje de datos ayuda a identificar de dónde vino un atributo y qué operaciones lo modificaron."
  },
  {
    "id": "BD-P18",
    "tema": "Gobernanza y seguridad",
    "nivel": "Aplicación",
    "tipo": "unica",
    "pregunta": "Un analista necesita consultar estadísticas agregadas, pero no requiere ver identificaciones personales. ¿Cuál regla de acceso debería adoptarse?",
    "opciones": [
      {
        "id": "a",
        "texto": "Otorgar únicamente los permisos necesarios para su función",
        "retroalimentacion": "El principio de mínimo privilegio limita acceso a datos no requeridos."
      },
      {
        "id": "b",
        "texto": "Compartir una cuenta administradora con todo el grupo",
        "retroalimentacion": "Las cuentas compartidas elevan riesgos y reducen trazabilidad."
      },
      {
        "id": "c",
        "texto": "Dar acceso irrestricto a los datos de origen",
        "retroalimentacion": "El acceso total no corresponde a la necesidad descrita."
      },
      {
        "id": "d",
        "texto": "Enviar las credenciales por mensajería abierta",
        "retroalimentacion": "Compartir credenciales no implementa un control de acceso adecuado."
      }
    ],
    "correctas": [
      "a"
    ],
    "pista": "La necesidad funcional puede cubrirse sin exponer todas las columnas.",
    "explicacion": "Una política de mínimo privilegio y vistas agregadas ayuda a disminuir la exposición de información personal."
  },
  {
    "id": "BD-P19",
    "tema": "Gobernanza y seguridad",
    "nivel": "Aplicación",
    "tipo": "verdadero_falso",
    "pregunta": "Una política de gobernanza puede incluir reglas de calidad, responsables y mecanismos de trazabilidad, además de medidas de privacidad.",
    "opciones": [
      {
        "id": "verdadero",
        "texto": "Verdadero",
        "retroalimentacion": "La privacidad es solo una parte del conjunto de decisiones y controles de gobernanza."
      },
      {
        "id": "falso",
        "texto": "Falso",
        "retroalimentacion": "La gobernanza también incluye gestión de calidad, definición de roles y seguimiento de cambios."
      }
    ],
    "correctas": [
      "verdadero"
    ],
    "pista": "¿Qué necesita una organización para confiar en los datos, más allá de mantenerlos privados?",
    "explicacion": "La gobernanza no se limita a privacidad: integra calidad, responsabilidades, controles, cumplimiento y trazabilidad."
  },
  {
    "id": "BD-P20",
    "tema": "Gobernanza y seguridad",
    "nivel": "Aplicación",
    "tipo": "multiple",
    "pregunta": "Un equipo publica indicadores construidos a partir de una fuente con información sensible. ¿Cuáles acciones son adecuadas antes de compartir resultados? Selecciona todas las pertinentes.",
    "opciones": [
      {
        "id": "a",
        "texto": "Revisar si los campos personales son necesarios para el reporte",
        "retroalimentacion": "La minimización de datos reduce información expuesta."
      },
      {
        "id": "b",
        "texto": "Restringir los permisos según el rol de cada persona",
        "retroalimentacion": "El acceso basado en funciones limita usos no autorizados."
      },
      {
        "id": "c",
        "texto": "Considerar que quitar los nombres elimina cualquier posibilidad de reidentificación",
        "retroalimentacion": "Incluso sin nombres, la combinación de atributos puede permitir reidentificar personas."
      },
      {
        "id": "d",
        "texto": "Publicar un archivo original sin revisión por tratarse de datos analíticos",
        "retroalimentacion": "La finalidad analítica no elimina riesgos de acceso o privacidad."
      }
    ],
    "correctas": [
      "a",
      "b"
    ],
    "pista": "La preparación para publicar incluye seguridad y calidad, no solo diseño visual.",
    "explicacion": "La minimización y el control de acceso reducen riesgos. Quitar nombres no garantiza anonimato y publicar datos sin revisión puede exponer información sensible."
  },
  {
    "id": "BD-P21",
    "tema": "Gobernanza y seguridad",
    "nivel": "Aplicación",
    "tipo": "unica",
    "pregunta": "Un registro presenta fechas imposibles y códigos de entidad vacíos. ¿Qué actividad permite detectar estos problemas sistemáticamente?",
    "opciones": [
      {
        "id": "a",
        "texto": "Validar reglas de calidad sobre campos y formatos",
        "retroalimentacion": "Las reglas de calidad identifican registros incompletos o inválidos."
      },
      {
        "id": "b",
        "texto": "Cambiar el color de las visualizaciones",
        "retroalimentacion": "La apariencia no corrige valores de origen."
      },
      {
        "id": "c",
        "texto": "Aumentar indefinidamente el número de particiones",
        "retroalimentacion": "Particionar no detecta valores fuera de regla."
      },
      {
        "id": "d",
        "texto": "Eliminar la documentación del conjunto de datos",
        "retroalimentacion": "Sin documentación resulta más difícil revisar el significado de campos."
      }
    ],
    "correctas": [
      "a"
    ],
    "pista": "Busca reglas que puedan evaluarse antes de usar los registros.",
    "explicacion": "La calidad de datos puede comprobar completitud, validez, consistencia y otros criterios definidos para el caso."
  },
  {
    "id": "BD-P22",
    "tema": "Analítica e inteligencia artificial",
    "nivel": "Aplicación",
    "tipo": "unica",
    "pregunta": "Un equipo cuenta con registros históricos etiquetados como “requiere revisión” o “no requiere revisión” y quiere automatizar esa asignación en registros nuevos. ¿Qué tarea de aprendizaje corresponde?",
    "opciones": [
      {
        "id": "a",
        "texto": "Clasificación supervisada",
        "retroalimentacion": "Las categorías conocidas permiten entrenar un modelo para predecir etiquetas."
      },
      {
        "id": "b",
        "texto": "Agrupamiento no supervisado",
        "retroalimentacion": "El agrupamiento busca conjuntos similares sin utilizar etiquetas de clase como objetivo."
      },
      {
        "id": "c",
        "texto": "Almacenamiento distribuido",
        "retroalimentacion": "Almacenar archivos no permite predecir automáticamente categorías."
      },
      {
        "id": "d",
        "texto": "Diseño de dashboards",
        "retroalimentacion": "La visualización puede mostrar resultados, pero no es el algoritmo de clasificación."
      }
    ],
    "correctas": [
      "a"
    ],
    "pista": "Observa si ya existen categorías conocidas para los registros históricos.",
    "explicacion": "Un problema con clases objetivo conocidas puede abordarse mediante clasificación supervisada."
  },
  {
    "id": "BD-P23",
    "tema": "Analítica e inteligencia artificial",
    "nivel": "Aplicación",
    "tipo": "unica",
    "pregunta": "Una oficina desea un modelo de clasificación cuyas decisiones puedan representarse mediante condiciones sucesivas, fáciles de explicar a un equipo no técnico. ¿Qué opción puede ser apropiada?",
    "opciones": [
      {
        "id": "a",
        "texto": "Árbol de decisión",
        "retroalimentacion": "El árbol representa divisiones sucesivas según atributos y puede interpretarse mediante reglas."
      },
      {
        "id": "b",
        "texto": "Gráfico de barras",
        "retroalimentacion": "Un gráfico resume cantidades, pero no entrena un clasificador."
      },
      {
        "id": "c",
        "texto": "Índice de archivos",
        "retroalimentacion": "Un índice permite localizar recursos; no aprende reglas predictivas."
      },
      {
        "id": "d",
        "texto": "Tabla de frecuencias",
        "retroalimentacion": "Una tabla cuenta valores, pero no constituye por sí sola un modelo predictivo."
      }
    ],
    "correctas": [
      "a"
    ],
    "pista": "Elige una técnica cuyo resultado pueda leerse como un conjunto de decisiones condicionales.",
    "explicacion": "Los árboles de decisión son modelos de clasificación o regresión basados en divisiones de atributos; su interpretabilidad depende de su tamaño."
  },
  {
    "id": "BD-P24",
    "tema": "Analítica e inteligencia artificial",
    "nivel": "Aplicación",
    "tipo": "multiple",
    "pregunta": "Antes de entrenar un modelo supervisado con datos tabulares, ¿qué medidas son coherentes con una preparación básica? Selecciona las pertinentes.",
    "opciones": [
      {
        "id": "a",
        "texto": "Definir claramente la variable objetivo",
        "retroalimentacion": "El modelo necesita saber qué variable debe aprender a predecir."
      },
      {
        "id": "b",
        "texto": "Examinar valores ausentes o inconsistentes",
        "retroalimentacion": "Los problemas de calidad pueden afectar entrenamiento y evaluación."
      },
      {
        "id": "c",
        "texto": "Separar información para evaluar con registros no vistos en entrenamiento",
        "retroalimentacion": "Una separación apropiada ayuda a estimar generalización."
      },
      {
        "id": "d",
        "texto": "Incluir la respuesta futura como entrada de cada registro",
        "retroalimentacion": "Esto introduce fuga de información y distorsiona la evaluación."
      }
    ],
    "correctas": [
      "a",
      "b",
      "c"
    ],
    "pista": "Piensa qué significa entrenar y luego evaluar con información independiente.",
    "explicacion": "La preparación de datos implica objetivo claro, calidad y una estrategia de evaluación que reduzca fugas de información."
  },
  {
    "id": "BD-P25",
    "tema": "Analítica e inteligencia artificial",
    "nivel": "Aplicación",
    "tipo": "unica",
    "pregunta": "Una entidad tiene miles de opiniones escritas por ciudadanos y desea detectar tendencias favorables, desfavorables o neutras. ¿Qué tarea se ajusta mejor?",
    "opciones": [
      {
        "id": "a",
        "texto": "Análisis de sentimientos",
        "retroalimentacion": "Se enfoca en identificar orientación u opinión expresada en textos."
      },
      {
        "id": "b",
        "texto": "Detección de registros duplicados",
        "retroalimentacion": "La deduplicación no interpreta la orientación del contenido."
      },
      {
        "id": "c",
        "texto": "Compresión de documentos",
        "retroalimentacion": "Comprimir archivos no clasifica opiniones."
      },
      {
        "id": "d",
        "texto": "Normalización de claves relacionales",
        "retroalimentacion": "La normalización no identifica polaridad de texto."
      }
    ],
    "correctas": [
      "a"
    ],
    "pista": "La señal buscada está en la opinión expresada en lenguaje natural.",
    "explicacion": "El análisis de sentimientos es una aplicación del procesamiento de lenguaje natural que puede estimar la polaridad de textos."
  },
  {
    "id": "BD-P26",
    "tema": "Analítica e inteligencia artificial",
    "nivel": "Aplicación",
    "tipo": "unica",
    "pregunta": "Un equipo quiere formar grupos de municipios con perfiles de indicadores parecidos, pero no dispone de categorías conocidas de antemano. ¿Qué técnica es pertinente?",
    "opciones": [
      {
        "id": "a",
        "texto": "Clustering",
        "retroalimentacion": "Busca agrupaciones basadas en similitud sin requerir etiquetas de grupo previas."
      },
      {
        "id": "b",
        "texto": "Clasificación supervisada",
        "retroalimentacion": "La clasificación supervisada requiere clases objetivo conocidas para entrenarse."
      },
      {
        "id": "c",
        "texto": "Validación de contraseñas",
        "retroalimentacion": "La autenticación resuelve acceso, no agrupación de observaciones."
      },
      {
        "id": "d",
        "texto": "Diseño de esquema estrella",
        "retroalimentacion": "El esquema estrella organiza datos analíticos, no descubre grupos por sí mismo."
      }
    ],
    "correctas": [
      "a"
    ],
    "pista": "La tarea consiste en descubrir grupos, no en predecir etiquetas preexistentes.",
    "explicacion": "El clustering es un enfoque no supervisado usado para explorar similitudes y segmentar observaciones."
  },
  {
    "id": "BD-P27",
    "tema": "Analítica e inteligencia artificial",
    "nivel": "Aplicación",
    "tipo": "multiple",
    "pregunta": "Un laboratorio prepara un proyecto de analítica avanzada con datos de procesos públicos. ¿Cuáles son tareas analíticas y no solo operaciones de limpieza? Selecciona las pertinentes.",
    "opciones": [
      {
        "id": "a",
        "texto": "Estimar categorías mediante un árbol de decisión",
        "retroalimentacion": "Un árbol puede aprender relaciones para clasificar observaciones."
      },
      {
        "id": "b",
        "texto": "Agrupar procesos con patrones similares",
        "retroalimentacion": "El agrupamiento identifica estructura en los datos."
      },
      {
        "id": "c",
        "texto": "Analizar la polaridad de comentarios textuales",
        "retroalimentacion": "El análisis de sentimientos extrae una señal de textos."
      },
      {
        "id": "d",
        "texto": "Quitar filas idénticas durante la depuración",
        "retroalimentacion": "Eliminar duplicados mejora la base, pero no es por sí solo un modelo de analítica avanzada."
      }
    ],
    "correctas": [
      "a",
      "b",
      "c"
    ],
    "pista": "Distingue inferir patrones de dejar una tabla preparada para analizar.",
    "explicacion": "Clasificación, agrupamiento y análisis de sentimientos responden preguntas analíticas; la depuración de duplicados es una tarea preparatoria."
  },
  {
    "id": "BD-P28",
    "tema": "Analítica e inteligencia artificial",
    "nivel": "Aplicación",
    "tipo": "verdadero_falso",
    "pregunta": "Para entrenar y evaluar un modelo de clasificación supervisada, conviene revisar cómo se construyeron las etiquetas y mantener datos de evaluación que no se hayan usado para ajustar el modelo.",
    "opciones": [
      {
        "id": "verdadero",
        "texto": "Verdadero",
        "retroalimentacion": "Las etiquetas definen el aprendizaje y una evaluación independiente ayuda a medir generalización."
      },
      {
        "id": "falso",
        "texto": "Falso",
        "retroalimentacion": "Reutilizar sin control los mismos ejemplos para entrenar y evaluar puede producir una estimación engañosa del desempeño."
      }
    ],
    "correctas": [
      "verdadero"
    ],
    "pista": "La capacidad de generalización importa más que memorizar observaciones conocidas.",
    "explicacion": "Las etiquetas confiables y la separación adecuada de entrenamiento y evaluación son elementos básicos de un flujo supervisado."
  },
  {
    "id": "BD-P29",
    "tema": "Apache Spark",
    "nivel": "Aplicación",
    "tipo": "unica",
    "pregunta": "Un proceso analítico aplica varias transformaciones sobre el mismo conjunto de datos. ¿Qué ventaja potencial ofrece Spark respecto a un flujo MapReduce clásico con escrituras intermedias frecuentes?",
    "opciones": [
      {
        "id": "a",
        "texto": "Aprovechar procesamiento en memoria cuando conviene",
        "retroalimentacion": "El uso de memoria puede disminuir ciertas lecturas y escrituras intermedias."
      },
      {
        "id": "b",
        "texto": "Eliminar toda comunicación entre nodos",
        "retroalimentacion": "Los trabajos distribuidos pueden requerir transferencias de datos."
      },
      {
        "id": "c",
        "texto": "Garantizar ausencia de fallos en el clúster",
        "retroalimentacion": "Ningún motor garantiza por sí solo disponibilidad total."
      },
      {
        "id": "d",
        "texto": "Impedir el trabajo con datos por lotes",
        "retroalimentacion": "Spark también permite procesamiento por lotes."
      }
    ],
    "correctas": [
      "a"
    ],
    "pista": "Considera dónde se almacenan resultados intermedios durante un flujo repetido.",
    "explicacion": "Spark puede optimizar trabajos iterativos y pipelines mediante ejecución distribuida y aprovechamiento de memoria; su rendimiento depende de la carga."
  },
  {
    "id": "BD-P30",
    "tema": "Apache Spark",
    "nivel": "Aplicación",
    "tipo": "unica",
    "pregunta": "Una aplicación necesita actualizar indicadores con eventos que siguen llegando durante el día. ¿Qué capacidad de Spark es especialmente útil para este caso?",
    "opciones": [
      {
        "id": "a",
        "texto": "Structured Streaming",
        "retroalimentacion": "Permite definir consultas continuas sobre flujos de datos con procesamiento incremental."
      },
      {
        "id": "b",
        "texto": "Exportar manualmente un archivo al final de cada mes",
        "retroalimentacion": "Ese procedimiento no atiende un flujo continuo."
      },
      {
        "id": "c",
        "texto": "Diseñar únicamente reportes estáticos",
        "retroalimentacion": "Un reporte estático no resuelve el procesamiento sostenido de eventos."
      },
      {
        "id": "d",
        "texto": "Sustituir por completo el almacenamiento del sistema",
        "retroalimentacion": "El procesamiento en flujo no elimina la necesidad de persistencia."
      }
    ],
    "correctas": [
      "a"
    ],
    "pista": "La información aparece de manera continua, no como una única carga final.",
    "explicacion": "Spark Structured Streaming permite procesar datos de entrada continua, habitualmente mediante micro-lotes y con latencia dependiente de la configuración."
  },
  {
    "id": "BD-P31",
    "tema": "Apache Spark",
    "nivel": "Aplicación",
    "tipo": "multiple",
    "pregunta": "¿Qué tareas podrían formar parte de un flujo de trabajo con Apache Spark? Selecciona todas las opciones pertinentes.",
    "opciones": [
      {
        "id": "a",
        "texto": "Leer y transformar conjuntos de datos distribuidos",
        "retroalimentacion": "Los DataFrames pueden cargarse, filtrarse y transformarse."
      },
      {
        "id": "b",
        "texto": "Entrenar modelos mediante bibliotecas de aprendizaje automático",
        "retroalimentacion": "Spark ML aporta algoritmos y pipelines de aprendizaje automático."
      },
      {
        "id": "c",
        "texto": "Procesar eventos de entrada continua",
        "retroalimentacion": "Structured Streaming admite procesamiento incremental de flujos."
      },
      {
        "id": "d",
        "texto": "Evitar toda definición de esquemas y calidad para siempre",
        "retroalimentacion": "Los pipelines siguen necesitando interpretación y controles sobre los datos."
      }
    ],
    "correctas": [
      "a",
      "b",
      "c"
    ],
    "pista": "Piensa en ingestión, transformación, modelado y flujos continuos.",
    "explicacion": "Spark integra capacidades de procesamiento por lotes, streaming y aprendizaje automático; la calidad de datos sigue siendo una responsabilidad del equipo."
  },
  {
    "id": "BD-P32",
    "tema": "Apache Spark",
    "nivel": "Aplicación",
    "tipo": "verdadero_falso",
    "pregunta": "En Spark Structured Streaming, toda consulta procesa necesariamente cada registro de manera individual, sin micro-lotes.",
    "opciones": [
      {
        "id": "verdadero",
        "texto": "Verdadero",
        "retroalimentacion": "Structured Streaming puede ejecutar consultas mediante micro-lotes; no toda consulta utiliza un modo registro a registro."
      },
      {
        "id": "falso",
        "texto": "Falso",
        "retroalimentacion": "Structured Streaming suele utilizar micro-lotes y su latencia depende del modo de ejecución y de la configuración."
      }
    ],
    "correctas": [
      "falso"
    ],
    "pista": "Revisa la diferencia entre procesamiento continuo y ejecución por micro-lotes.",
    "explicacion": "Spark Structured Streaming suele trabajar con micro-lotes; por eso es incorrecto afirmar que toda consulta procesa cada evento individualmente y sin agruparlo."
  },
  {
    "id": "BD-P33",
    "tema": "Apache Spark",
    "nivel": "Aplicación",
    "tipo": "unica",
    "pregunta": "En un DataFrame de Spark se necesita convertir una categoría de texto a una representación numérica adecuada para un modelo de clasificación. ¿Qué secuencia es pertinente para categorías nominales?",
    "opciones": [
      {
        "id": "a",
        "texto": "StringIndexer seguido de OneHotEncoder",
        "retroalimentacion": "El indexador representa categorías y OneHotEncoder genera indicadores para categorías nominales."
      },
      {
        "id": "b",
        "texto": "Visualizar un histograma y borrar la columna",
        "retroalimentacion": "Un gráfico no codifica automáticamente la variable para el modelo."
      },
      {
        "id": "c",
        "texto": "Aplicar exclusivamente una función de ordenamiento",
        "retroalimentacion": "Ordenar filas no transforma categorías en variables numéricas."
      },
      {
        "id": "d",
        "texto": "Convertir la columna a una fecha",
        "retroalimentacion": "Una categoría nominal no se vuelve válida para el modelo al forzarla a fecha."
      }
    ],
    "correctas": [
      "a"
    ],
    "pista": "Diferencia asignar índices de producir variables indicadoras para categorías.",
    "explicacion": "En pipelines de Spark ML, StringIndexer y OneHotEncoder pueden preparar atributos categóricos nominales para muchos modelos. Esta actividad amplía el banco con una práctica del curso."
  },
  {
    "id": "BD-P34",
    "tema": "Visualización y dashboards",
    "nivel": "Aplicación",
    "tipo": "unica",
    "pregunta": "Una secretaría necesita identificar cómo cambió el número de trámites durante doce meses. ¿Qué recurso visual facilita reconocer la evolución temporal?",
    "opciones": [
      {
        "id": "a",
        "texto": "Gráfico de líneas",
        "retroalimentacion": "Conecta valores ordenados en el tiempo y ayuda a identificar tendencias."
      },
      {
        "id": "b",
        "texto": "Diagrama de dispersión sin eje temporal",
        "retroalimentacion": "Un scatter puede mostrar relaciones, pero sin tiempo no revela directamente la evolución."
      },
      {
        "id": "c",
        "texto": "Nube de palabras",
        "retroalimentacion": "Resume términos frecuentes, no una serie temporal numérica."
      },
      {
        "id": "d",
        "texto": "Tabla de accesos de usuarios",
        "retroalimentacion": "Un control de permisos no constituye la visualización solicitada."
      }
    ],
    "correctas": [
      "a"
    ],
    "pista": "Una variable es el tiempo y se quiere observar cambio entre periodos.",
    "explicacion": "Los gráficos de líneas suelen ser útiles para observar evolución, tendencias y cambios en una secuencia temporal."
  },
  {
    "id": "BD-P35",
    "tema": "Visualización y dashboards",
    "nivel": "Aplicación",
    "tipo": "unica",
    "pregunta": "Una dependencia compara la cantidad de trámites por departamento para identificar diferencias entre categorías. ¿Qué representación es generalmente más directa?",
    "opciones": [
      {
        "id": "a",
        "texto": "Gráfico de barras",
        "retroalimentacion": "Permite contrastar cantidades entre categorías de forma legible."
      },
      {
        "id": "b",
        "texto": "Diagrama de red sin enlaces definidos",
        "retroalimentacion": "Las redes requieren relaciones entre nodos; aquí se comparan categorías."
      },
      {
        "id": "c",
        "texto": "Gráfico de área acumulada sin dimensión temporal",
        "retroalimentacion": "El área acumulada no es la forma más clara para una comparación simple."
      },
      {
        "id": "d",
        "texto": "Histograma de una variable continua",
        "retroalimentacion": "Un histograma representa frecuencias por intervalos, no categorías nominales directas."
      }
    ],
    "correctas": [
      "a"
    ],
    "pista": "La variable del eje de comparación es una categoría territorial.",
    "explicacion": "Un gráfico de barras compara cantidades de distintas categorías; la elección final depende de la cantidad de grupos y del propósito."
  },
  {
    "id": "BD-P36",
    "tema": "Visualización y dashboards",
    "nivel": "Aplicación",
    "tipo": "multiple",
    "pregunta": "Un equipo prepara un tablero que se usará en reuniones de seguimiento. ¿Cuáles buenas prácticas ayudan a interpretarlo? Selecciona las pertinentes.",
    "opciones": [
      {
        "id": "a",
        "texto": "Explicar la fuente y la fecha de actualización",
        "retroalimentacion": "La procedencia y vigencia contextualizan el indicador."
      },
      {
        "id": "b",
        "texto": "Usar títulos y unidades entendibles",
        "retroalimentacion": "Las etiquetas claras reducen ambigüedad."
      },
      {
        "id": "c",
        "texto": "Recortar todos los ejes numéricos automáticamente para exagerar cambios",
        "retroalimentacion": "Modificar escalas sin justificación puede distorsionar cómo se perciben las diferencias."
      },
      {
        "id": "d",
        "texto": "Omitir definiciones de indicadores para ahorrar espacio",
        "retroalimentacion": "Sin definiciones pueden producirse lecturas incompatibles."
      }
    ],
    "correctas": [
      "a",
      "b"
    ],
    "pista": "Piensa qué necesita una persona que no construyó el tablero para interpretarlo.",
    "explicacion": "Documentar procedencia y utilizar etiquetas claras ayuda a interpretar un tablero. Los ejes y las definiciones deben presentarse con criterios transparentes."
  },
  {
    "id": "BD-P37",
    "tema": "Visualización y dashboards",
    "nivel": "Aplicación",
    "tipo": "unica",
    "pregunta": "Un grupo requiere crear dashboards interactivos con conectores de datos y compartir indicadores institucionales. ¿Qué herramienta está orientada directamente a ese propósito?",
    "opciones": [
      {
        "id": "a",
        "texto": "Power BI",
        "retroalimentacion": "Power BI ofrece modelado, visualización y publicación de informes interactivos."
      },
      {
        "id": "b",
        "texto": "HDFS",
        "retroalimentacion": "HDFS es una tecnología de almacenamiento distribuido."
      },
      {
        "id": "c",
        "texto": "MapReduce",
        "retroalimentacion": "MapReduce es un modelo de procesamiento distribuido."
      },
      {
        "id": "d",
        "texto": "StringIndexer",
        "retroalimentacion": "StringIndexer prepara categorías para modelos, no publica dashboards."
      }
    ],
    "correctas": [
      "a"
    ],
    "pista": "Identifica una herramienta centrada en exploración y presentación de indicadores.",
    "explicacion": "Power BI es una opción de inteligencia de negocios para informes y dashboards; puede complementarse con motores de datos a gran escala."
  },
  {
    "id": "BD-P38",
    "tema": "Visualización y dashboards",
    "nivel": "Aplicación",
    "tipo": "multiple",
    "pregunta": "Una clase evalúa tecnologías para construir visualizaciones interactivas. ¿Cuáles pueden utilizarse para ese fin? Selecciona las pertinentes.",
    "opciones": [
      {
        "id": "a",
        "texto": "Tableau",
        "retroalimentacion": "Permite elaborar reportes y paneles de datos interactivos."
      },
      {
        "id": "b",
        "texto": "Power BI",
        "retroalimentacion": "Permite construir visualizaciones y paneles orientados a análisis."
      },
      {
        "id": "c",
        "texto": "D3.js",
        "retroalimentacion": "Es una biblioteca de JavaScript para crear visualizaciones web personalizadas."
      },
      {
        "id": "d",
        "texto": "HDFS como herramienta de diseño visual",
        "retroalimentacion": "HDFS almacena archivos distribuidos; no es una herramienta de construcción de gráficos."
      }
    ],
    "correctas": [
      "a",
      "b",
      "c"
    ],
    "pista": "Busca herramientas de presentación de datos, no sistemas de almacenamiento.",
    "explicacion": "Tableau, Power BI y D3.js permiten construir experiencias visuales con enfoques diferentes; no deben confundirse con motores de almacenamiento."
  },
  {
    "id": "BD-P39",
    "tema": "Visualización y dashboards",
    "nivel": "Aplicación",
    "tipo": "verdadero_falso",
    "pregunta": "Un dashboard con cifras agregadas puede orientar la exploración, pero una conclusión causal o una anomalía importante puede requerir un análisis adicional de los datos subyacentes.",
    "opciones": [
      {
        "id": "verdadero",
        "texto": "Verdadero",
        "retroalimentacion": "Los gráficos resumen patrones; verificar hipótesis exige revisar definiciones, contexto y evidencia adicional."
      },
      {
        "id": "falso",
        "texto": "Falso",
        "retroalimentacion": "Los tableros no sustituyen todos los procedimientos de análisis ni prueban causalidad por sí mismos."
      }
    ],
    "correctas": [
      "verdadero"
    ],
    "pista": "Distingue observar una asociación de explicar por qué ocurrió.",
    "explicacion": "La visualización ayuda a descubrir y comunicar patrones, mientras que el análisis estadístico o técnico profundiza en su explicación."
  },
  {
    "id": "BD-P40",
    "tema": "Visualización y dashboards",
    "nivel": "Aplicación",
    "tipo": "unica",
    "pregunta": "Dos departamentos muestran tasas distintas de ejecución. Antes de afirmar que uno funciona peor, ¿qué debería verificar el analista?",
    "opciones": [
      {
        "id": "a",
        "texto": "Que ambos indicadores usen definiciones y periodos comparables",
        "retroalimentacion": "Comparaciones válidas exigen una base metodológica consistente."
      },
      {
        "id": "b",
        "texto": "Que ambos gráficos tengan colores idénticos",
        "retroalimentacion": "El color no garantiza comparabilidad del indicador."
      },
      {
        "id": "c",
        "texto": "Que el reporte tenga la mayor cantidad de gráficos posible",
        "retroalimentacion": "Más elementos visuales no resuelven diferencias metodológicas."
      },
      {
        "id": "d",
        "texto": "Que no exista información de contexto",
        "retroalimentacion": "Omitir contexto aumenta el riesgo de interpretaciones erróneas."
      }
    ],
    "correctas": [
      "a"
    ],
    "pista": "Para comparar cifras, primero comprueba que representen lo mismo.",
    "explicacion": "Una visualización responsable requiere indicadores homologados, periodos compatibles y contexto suficiente."
  }
];
