let materias=[
    ingenieriaCivil = [
        {
            nombre: 'Análisis Matemático I',
            numero: 1,
            cursadas: [],
            aprobadas: [],
            nivel: 1
        },
        {
            nombre: 'Álgebra y Geometría Analítica',
            numero: 2,
            cursadas: [],
            aprobadas: [],
            nivel: 1
        },
        {
            nombre: 'Ingeniería y Sociedad',
            numero: 3,
            cursadas: [],
            aprobadas: [],
            nivel: 1
        },
        {
            nombre: 'Ingeniería Civil I',
            numero: 4,
            cursadas: [],
            aprobadas: [],
            nivel: 1
        },
        {
            nombre: 'Sistemas de Representación',
            numero: 5,
            cursadas: [],
            aprobadas: [],
            nivel: 1
        },
        {
            nombre: 'Química General',
            numero: 6,
            cursadas: [],
            aprobadas: [],
            nivel: 1
        },
        {
            nombre: 'Física I',
            numero: 7,
            cursadas: [],
            aprobadas: [],
            nivel: 1
        },
        {
            nombre: 'Fundamentos de Informática',
            numero: 8,
            cursadas: [],
            aprobadas: [],
            nivel: 1
        },
        {
            nombre: 'Análisis Matemático II',
            numero: 9,
            cursadas: [1, 2],
            aprobadas: [],
            nivel: 2
        },
        {
            nombre: 'Estabilidad',
            numero: 10,
            cursadas: [1, 2, 5, 7, 8],
            aprobadas: [],
            nivel: 2
        },
        {
            nombre: 'Ingeniería Civil II (E.I.)',
            numero: 11,
            cursadas: [3, 4, 5, 8],
            aprobadas: [],
            nivel: 2
        },
        {
            nombre: 'Tecnología de los Materiales',
            numero: 12,
            cursadas: [1, 5, 6, 7],
            aprobadas: [],
            nivel: 2
        },
        {
            nombre: 'Física II',
            numero: 13,
            cursadas: [1, 7],
            aprobadas: [],
            nivel: 2
        },
        {
            nombre: 'Probabilidad y Estadística',
            numero: 14,
            cursadas: [1, 2],
            aprobadas: [],
            nivel: 2
        },
        {
            nombre: 'Inglés I',
            numero: 15,
            cursadas: [3],
            aprobadas: [],
            nivel: 2
        },
        {
            nombre: 'Resistencia de Materiales',
            numero: 16,
            cursadas: [10],
            aprobadas: [1, 2, 7, 8],
            nivel: 3
        },
        {
            nombre: 'Tecnología del Hormigón',
            numero: 17,
            cursadas: [12, 14],
            aprobadas: [1, 2, 6, 7],
            nivel: 3
        },
        {
            nombre: 'Tecnología de la Construcción',
            numero: 18,
            cursadas: [10, 11, 12, 15],
            aprobadas: [1, 2, 4, 5, 6, 7, 8],
            nivel: 3
        },
        {
            nombre: 'Geotopografía',
            numero: 19,
            cursadas: [9, 11, 13, 14],
            aprobadas: [1, 2, 5, 7, 8],
            nivel: 3
        },
        {
            nombre: 'Hidráulica General y Aplicada',
            numero: 20,
            cursadas: [9, 10, 12, 13, 14],
            aprobadas: [1, 2, 5, 7, 8],
            nivel: 3
        },
        {
            nombre: 'Cálculo Avanzado',
            numero: 21,
            cursadas: [9, 11, 12, 13],
            aprobadas: [1, 2, 5, 6, 7],
            nivel: 3
        },
        {
            nombre: 'Instalaciones Eléctricas Acústicas',
            numero: 22,
            cursadas: [11, 12, 13],
            aprobadas: [1, 2, 4, 5, 6, 7],
            nivel: 3
        },
        {
            nombre: 'Instalaciones Termomecánicas',
            numero: 23,
            cursadas: [11, 13, 14],
            aprobadas: [1, 2, 4, 5, 6, 7],
            nivel: 3
        },
        {
            nombre: 'Economía',
            numero: 24,
            cursadas: [11, 14, 15],
            aprobadas: [1, 2, 3, 4, 5, 6, 7, 8],
            nivel: 3
        },
        {
            nombre: 'Inglés II',
            numero: 25,
            cursadas: [15],
            aprobadas: [3, 4],
            nivel: 3
        },
        {
            nombre: 'Geotecnia',
            numero: 26,
            cursadas: [16, 17, 18, 19, 20],
            aprobadas: [9, 10, 11, 12, 13, 14],
            nivel: 4
        },
        {
            nombre: 'Instalaciones Sanitarias y de Gas',
            numero: 27,
            cursadas: [18, 19, 20, 23],
            aprobadas: [5, 6, 7, 8, 12],
            nivel: 4
        },
        {
            nombre: 'Diseño Arquitectónico, Planeamiento y Urbanismo (E.I.)',
            numero: 28,
            cursadas: [18, 19, 22, 23, 24, 25],
            aprobadas: [1, 2, 3, 4, 8],
            nivel: 4
        },
        {
            nombre: 'Análisis Estructural I',
            numero: 29,
            cursadas: [16, 17, 18],
            aprobadas: [9, 10, 11, 12, 13],
            nivel: 4
        },
        {
            nombre: 'Estructuras de Hormigón',
            numero: 30,
            cursadas: [16, 17, 19, 25],
            aprobadas: [9, 10, 11, 12, 13],
            nivel: 4
        },
        {
            nombre: 'Hidrología y Obras Hidráulicas',
            numero: 31,
            cursadas: [16, 18, 19, 24, 25],
            aprobadas: [9, 10, 11, 12, 13],
            nivel: 4
        },
        {
            nombre: 'Ingeniería Legal',
            numero: 32,
            cursadas: [9, 11, 14, 15],
            aprobadas: [1, 2, 3, 4, 8],
            nivel: 4
        },
        {
            nombre: 'Construcciones metálicas y de madera',
            numero: 33,
            cursadas: [21,29],
            aprobadas: [16,17,18,19],
            nivel: 5
        },
        {
            nombre: 'Cimentaciones',
            numero: 34,
            cursadas: [21,26,29,30,31],
            aprobadas: [16,17,18,19,20],
            nivel: 5
        },
        {
            nombre: 'Ingeniería sanitaria',
            numero: 35,
            cursadas: [26,27,31],
            aprobadas: [17,18,19,20,25],
            nivel: 5
        },
        {
            nombre: 'Vias de comunicacion I',
            numero: 37,
            cursadas: [17,18,19],
            aprobadas: [9,10,11,12,14,15],
            nivel: 5
        },
        {
            nombre: 'Analisis estructural II',
            numero: 38,
            cursadas: [21,26,29,30,31],
            aprobadas: [16,17,18,19,25],
            nivel: 5
        },
        {
            nombre: 'Vias de comunicacion II',
            numero: 39,
            cursadas: [26,30,31,32,37],
            aprobadas: [16,17,18,19,20,24],
            nivel: 5
        },
        {
            nombre: 'Gestión ambiental y Desarrollo sustentable',
            numero: 40,
            cursadas: [26,28,31,32],
            aprobadas: [20,24,25],
            nivel: 5
        },
        {
            nombre: 'Proyecto Final (E.I)',
            numero: 41,
            cursadas: [26,27,28,29,30,31,32],
            aprobadas: [15,16,17,18,19,20,22,23,24,25],
            nivel: 6
        },
    ],
    ingenieriaElectrica = [
        {
            "numero": 1,
            "nombre": "Análisis Matemático I",
            "cursadas": [],
            "aprobadas": [],
            "nivel": 1
        },
        {
            "numero": 2,
            "nombre": "Álgebra y Geometría Analítica",
            "cursadas": [],
            "aprobadas": [],
            "nivel": 1
        },
        {
            "numero": 3,
            "nombre": "Ingeniería y Sociedad",
            "cursadas": [],
            "aprobadas": [],
            "nivel": 1
        },
        {
            "numero": 4,
            "nombre": "Sistemas de Representación",
            "cursadas": [],
            "aprobadas": [],
            "nivel": 1
        },
        {
            "numero": 5,
            "nombre": "Física I",
            "cursadas": [],
            "aprobadas": [],
            "nivel": 1
        },
        {
            "numero": 6,
            "nombre": "Química General",
            "cursadas": [],
            "aprobadas": [],
            "nivel": 1
        },
        {
            "numero": 7,
            "nombre": "Integración Eléctrica I",
            "cursadas": [],
            "aprobadas": [],
            "nivel": 1
        },
        {
            "numero": 8,
            "nombre": "Fundamentos de Informática",
            "cursadas": [],
            "aprobadas": [],
            "nivel": 1
        },
        {
            "numero": 9,
            "nombre": "Física II",
            "cursadas": [1, 5],
            "aprobadas": [],
            "nivel": 2
        },
        {
            "numero": 10,
            "nombre": "Probabilidad y Estadística",
            "cursadas": [1, 2],
            "aprobadas": [],
            "nivel": 2
        },
        {
            "numero": 11,
            "nombre": "Electrotecnia I",
            "cursadas": [1, 2, 5],
            "aprobadas": [],
            "nivel": 2
        },
        {
            "numero": 12,
            "nombre": "Estabilidad",
            "cursadas": [1, 2, 5],
            "aprobadas": [],
            "nivel": 2
        },
        {
            "numero": 13,
            "nombre": "Mecánica Técnica",
            "cursadas": [1, 5],
            "aprobadas": [],
            "nivel": 2
        },
        {
            "numero": 14,
            "nombre": "Integración Eléctrica II",
            "cursadas": [1, 5, 7],
            "aprobadas": [],
            "nivel": 2
        },
        {
            "numero": 15,
            "nombre": "Inglés I",
            "cursadas": [],
            "aprobadas": [],
            "nivel": 2
        },
        {
            "numero": 16,
            "nombre": "Análisis Matemático II",
            "cursadas": [1, 2],
            "aprobadas": [],
            "nivel": 2
        },
        {
            "numero": 17,
            "nombre": "Cálculo Numérico",
            "cursadas": [1, 2, 5, 8],
            "aprobadas": [],
            "nivel": 2
        },
        {
            "numero": 18,
            "nombre": "Tecnologías y Ensayos de Materiales Eléctricos",
            "cursadas": [6, 9],
            "aprobadas": [1, 5],
            "nivel": 3
        },
        {
            "numero": 19,
            "nombre": "Instrumentos y Mediciones Eléctricas",
            "cursadas": [10, 11],
            "aprobadas": [1, 2, 5],
            "nivel": 3
        },
        {
            "numero": 20,
            "nombre": "Teoría de los Campos",
            "cursadas": [9, 16],
            "aprobadas": [1, 2, 5],
            "nivel": 3
        },
        {
            "numero": 21,
            "nombre": "Física III",
            "cursadas": [9, 16],
            "aprobadas": [1, 2, 5],
            "nivel": 3
        },
        {
            "numero": 22,
            "nombre": "Máquinas Eléctricas I",
            "cursadas": [9, 11, 16, 17],
            "aprobadas": [1, 5],
            "nivel": 3
        },
        {
            "numero": 23,
            "nombre": "Electrotecnia II",
            "cursadas": [9, 11, 16],
            "aprobadas": [1, 2, 5],
            "nivel": 3
        },
        {
            "numero": 24,
            "nombre": "Termodinámica",
            "cursadas": [9, 16],
            "aprobadas": [1, 2, 5],
            "nivel": 3
        },
        {
            "numero": 25,
            "nombre": "Fundamentos para el Análisis de Señales",
            "cursadas": [16, 17],
            "aprobadas": [1, 2],
            "nivel": 3
        },
        {
            "numero": 26,
            "nombre": "Taller Interdisciplinario",
            "cursadas": [],
            "aprobadas": [],
            "nivel": 3
        },
        {
            "numero": 27,
            "nombre": "Inglés II",
            "cursadas": [],
            "aprobadas": [15],
            "nivel": 4
        },
        {
            "numero": 28,
            "nombre": "Economía",
            "cursadas": [],
            "aprobadas": [3],
            "nivel": 4
        },
        {
            "numero": 29,
            "nombre": "Electrónica I",
            "cursadas": [11],
            "aprobadas": [1, 5],
            "nivel": 4
        },
        {
            "numero": 30,
            "nombre": "Máquinas Eléctricas II",
            "cursadas": [18, 19, 20, 22, 23],
            "aprobadas": [6, 9, 10, 11, 15, 16],
            "nivel": 4
        },
        {
            "numero": 31,
            "nombre": "Seguridad, Riesgo Eléctrico y Medio Ambiente",
            "cursadas": [6, 11, 18, 20],
            "aprobadas": [1, 2, 5, 9, 16],
            "nivel": 4
        },
        {
            "numero": 32,
            "nombre": "Instalaciones Eléctricas y Luminotecnia",
            "cursadas": [18, 22, 23],
            "aprobadas": [6, 9, 11, 14, 15, 16],
            "nivel": 4
        },
        {
            "numero": 33,
            "nombre": "Control Automático",
            "cursadas": [23, 25],
            "aprobadas": [11, 16],
            "nivel": 4
        },
        {
            "numero": 34,
            "nombre": "Máquinas Térmicas, Hidráulicas y de Fluido",
            "cursadas": [12, 13, 24],
            "aprobadas": [9, 16],
            "nivel": 4
        },
        {
            "numero": 35,
            "nombre": "Legislación",
            "cursadas": [],
            "aprobadas": [3],
            "nivel": 4
        },
        {
            "numero": 36,
            "nombre": "Electrónica II",
            "cursadas": [23, 28],
            "aprobadas": [11, 42],
            "nivel": 5
        },
        {
            "numero": 37,
            "nombre": "Generación, Transmisión y Distribución de la Energía Eléctrica",
            "cursadas": [21, 29, 33],
            "aprobadas": [12, 13, 18, 22, 23, 24],
            "nivel": 5
        },
        {
            "numero": 38,
            "nombre": "Sistemas de Potencia",
            "cursadas": [29, 32],
            "aprobadas": [18, 22, 23, 42],
            "nivel": 5
        },
        {
            "numero": 39,
            "nombre": "Accionamientos y Controles Eléctricos",
            "cursadas": [28, 29, 32],
            "aprobadas": [11, 18, 22, 23, 25, 42],
            "nivel": 5
        },
        {
            "numero": 40,
            "nombre": "Organización y Administración de Empresas",
            "cursadas": [27, 34],
            "aprobadas": [42],
            "nivel": 5
        },
        {
            "numero": 41,
            "nombre": "Proyecto Final",
            "cursadas": [27, 29, 31, 32],
            "aprobadas": [18, 19, 22, 23, 25, 26, 42],
            "nivel": 5
        }
    ],
    ingenieriaElectronica= [
        {
            nombre: 'Informática I',
            numero: 1,
            cursadas: [],
            aprobadas: [],
            nivel: 1
        },
        {
            nombre: 'Álgebra y Geometría Analítica',
            numero: 2,
            cursadas: [],
            aprobadas: [],
            nivel: 1
        },
        {
            nombre: 'Análisis Matemático I',
            numero: 3,
            cursadas: [],
            aprobadas: [],
            nivel: 1
        },
        {
            nombre: 'Ingeniería y Sociedad',
            numero: 4,
            cursadas: [],
            aprobadas: [],
            nivel: 1
        },
        {
            nombre: 'Análisis Matemático II',
            numero: 5,
            cursadas: [2, 3],
            aprobadas: [],
            nivel: 1
        },
        {
            nombre: 'Física I',
            numero: 6,
            cursadas: [],
            aprobadas: [],
            nivel: 1
        },
        {
            nombre: 'Diseño Asistido por Computadora',
            numero: 7,
            cursadas: [],
            aprobadas: [],
            nivel: 1
        },
        {
            nombre: 'Informática II',
            numero: 8,
            cursadas: [1, 2, 3],
            aprobadas: [],
            nivel: 2
        },
        {
            nombre: 'Análisis de Señales y Sistemas',
            numero: 9,
            cursadas: [5],
            aprobadas: [2,3],
            nivel: 2
        },
        {
            nombre: 'Química General',
            numero: 10,
            cursadas: [],
            aprobadas: [],
            nivel: 2
        },
        {
            nombre: 'Física II',
            numero: 11,
            cursadas: [3, 6],
            aprobadas: [],
            nivel: 2
        },
        {
            nombre: 'Probabilidad y Estadística',
            numero: 12,
            cursadas: [2, 3],
            aprobadas: [],
            nivel: 2
        },
        {
            nombre: 'Física Electrónica',
            numero: 13,
            cursadas: [11],
            aprobadas: [2, 3, 6],
            nivel: 2
        },
        {
            nombre: 'Inglés I',
            numero: 14,
            cursadas: [],
            aprobadas: [],
            nivel: 2
        },
        {
            nombre: 'Teoría de los Circuitos I',
            numero: 15,
            cursadas: [5, 11],
            aprobadas: [3,6],
            nivel: 3
        },
        {
            nombre: 'Técnicas Digitales I',
            numero: 16,
            cursadas: [1],
            aprobadas: [2],
            nivel: 3
        },
        {
            nombre: 'Dispositivos Electrónicos',
            numero: 17,
            cursadas: [1, 3, 10],
            aprobadas: [],
            nivel: 3
        },
        {
            nombre: 'Legislación',
            numero: 18,
            cursadas: [8],
            aprobadas: [4],
            nivel: 4
        },
        {
            nombre: 'Electrónica Aplicada I',
            numero: 19,
            cursadas: [10, 11],
            aprobadas: [1,3,6],
            nivel: 3
        },
        {
            nombre: 'Medios de Enlace',
            numero: 20,
            cursadas: [5, 11],
            aprobadas: [2, 3, 6],
            nivel: 3
        },
        {
            nombre: 'Inglés II',
            numero: 21,
            cursadas: [],
            aprobadas: [14],
            nivel: 4
        },
        {
            nombre: 'Técnicas Digitales II',
            numero: 22,
            cursadas: [8, 16, 19],
            aprobadas: [10, 11],
            nivel: 4
        },
        {
            nombre: 'Medidas Electrónicas I',
            numero: 23,
            cursadas: [9, 15, 16, 19],
            aprobadas: [5, 10, 11],
            nivel: 4
        },
        {
            nombre: 'Teoría de los Circuitos II',
            numero: 24,
            cursadas: [9, 15],
            aprobadas: [5, 11],
            nivel: 4
        },
        {
            nombre: 'Máquinas e Instalaciones Eléctricas',
            numero: 25,
            cursadas: [9, 15],
            aprobadas: [5, 11],
            nivel: 4
        },
        {
            nombre: 'Sistemas de Comunicaciones',
            numero: 26,
            cursadas: [9, 12, 19, 20],
            aprobadas: [5, 11],
            nivel: 4
        },
        {
            nombre: 'Electrónica Aplicada II',
            numero: 27,
            cursadas: [9, 13, 15, 17, 19],
            aprobadas: [5, 11, 14],
            nivel: 4
        },
        {
            nombre: 'Seguridad, Higiene y Medio Ambiente',
            numero: 28,
            cursadas: [],
            aprobadas: [4, 10],
            nivel: 4
        },
        {
            nombre: 'Técnicas Digitales III',
            numero: 29,
            cursadas: [22],
            aprobadas: [8, 16, 19],
            nivel: 5
        },
        {
            nombre: 'Medidas Electrónicas II',
            numero: 30,
            cursadas: [22, 23, 26, 27],
            aprobadas: [7, 13, 15, 16, 19, 21],
            nivel: 5
        },
        {
            nombre: 'Sistemas de Control',
            numero: 31,
            cursadas: [24, 25],
            aprobadas: [13, 15],
            nivel: 5
        },
        {
            nombre: 'Electrónica Aplicada III',
            numero: 32,
            cursadas: [24, 26, 27],
            aprobadas: [13, 15, 19],
            nivel: 5
        },
        {
            nombre: 'Tecnología Electrónica',
            numero: 33,
            cursadas: [23],
            aprobadas: [13, 16, 19],
            nivel: 5
        },
        {
            nombre: 'Electrónica de Potencia',
            numero: 34,
            cursadas: [23, 25, 27],
            aprobadas: [13, 16, 19],
            nivel: 5
        },
        {
            nombre: 'Organización Industrial',
            numero: 35,
            cursadas: [18],
            aprobadas: [],
            nivel: 5
        },
        {
            nombre: 'Economía',
            numero: 36,
            cursadas: [8],
            aprobadas: [4],
            nivel: 6
        },
        {
            nombre: 'Proyecto Final',
            numero: 37,
            cursadas: [22, 23, 25, 27, 29, 30, 32],
            aprobadas: [],
            nivel: 6
        }
    ],
    ingenieriaIndustrial = [
        {
            "numero": 1,
            "nombre": "Pensamiento Sistémico",
            "cursadas": [],
            "aprobadas": [],
            "nivel": 1
        },
        {
            "numero": 2,
            "nombre": "Ingeniería y Sociedad",
            "cursadas": [],
            "aprobadas": [],
            "nivel": 1
        },
        {
            "numero": 3,
            "nombre": "Álgebra y Geometría Analítica",
            "cursadas": [],
            "aprobadas": [],
            "nivel": 1
        },
        {
            "numero": 4,
            "nombre": "Análisis Matemático I",
            "cursadas": [],
            "aprobadas": [],
            "nivel": 1
        },
        {
            "numero": 5,
            "nombre": "Física I",
            "cursadas": [],
            "aprobadas": [],
            "nivel": 1
        },
        {
            "numero": 6,
            "nombre": "Química General",
            "cursadas": [],
            "aprobadas": [],
            "nivel": 1
        },
        {
            "numero": 7,
            "nombre": "Sistemas de Representación",
            "cursadas": [],
            "aprobadas": [],
            "nivel": 1
        },
        {
            "numero": 8,
            "nombre": "Informática I",
            "cursadas": [],
            "aprobadas": [],
            "nivel": 1
        },
        {
            "numero": 9,
            "nombre": "Administración General",
            "cursadas": [8, 1, 3, 2],
            "aprobadas": [],
            "nivel": 2
        },
        {
            "numero": 10,
            "nombre": "Probabilidad y Estadística",
            "cursadas": [4, 3],
            "aprobadas": [],
            "nivel": 2
        },
        {
            "numero": 11,
            "nombre": "Ciencia de los Materiales",
            "cursadas": [6, 5],
            "aprobadas": [],
            "nivel": 2
        },
        {
            "numero": 12,
            "nombre": "Análisis Matemático II",
            "cursadas": [4, 3],
            "aprobadas": [],
            "nivel": 2
        },
        {
            "numero": 13,
            "nombre": "Física II",
            "cursadas": [4, 5],
            "aprobadas": [],
            "nivel": 2
        },
        {
            "numero": 14,
            "nombre": "Economía General",
            "cursadas": [4, 1, 2],
            "aprobadas": [],
            "nivel": 2
        },
        {
            "numero": 15,
            "nombre": "Informática II",
            "cursadas": [8],
            "aprobadas": [],
            "nivel": 2
        },
        {
            "numero": 16,
            "nombre": "Inglés I",
            "cursadas": [],
            "aprobadas": [],
            "nivel": 2
        },
        {
            "numero": 17,
            "nombre": "Análisis Numérico y Cálculo Avanzado",
            "cursadas": [12],
            "aprobadas": [4, 3],
            "nivel": 3
        },
        {
            "numero": 18,
            "nombre": "Comercialización",
            "cursadas": [9, 10, 14],
            "aprobadas": [4, 8, 1, 3, 2],
            "nivel": 3
        },
        {
            "numero": 19,
            "nombre": "Costos y Presupuestos",
            "cursadas": [9, 14],
            "aprobadas": [4, 8, 1, 3, 2],
            "nivel": 3
        },
        {
            "numero": 20,
            "nombre": "Economía de la Empresa",
            "cursadas": [9, 14],
            "aprobadas": [4, 8, 1, 3, 2],
            "nivel": 3
        },
        {
            "numero": 21,
            "nombre": "Electrotecnia y Máquinas Eléctricas",
            "cursadas": [13],
            "aprobadas": [4, 5],
            "nivel": 3
        },
        {
            "numero": 22,
            "nombre": "Estudio del Trabajo",
            "cursadas": [9, 10],
            "aprobadas": [4, 8, 1, 3, 2],
            "nivel": 3
        },
        {
            "numero": 23,
            "nombre": "Estática y Resistencia de los Materiales",
            "cursadas": [12, 11],
            "aprobadas": [4, 6, 5, 3],
            "nivel": 3
        },
        {
            "numero": 24,
            "nombre": "Mecánica de los Fluidos",
            "cursadas": [12],
            "aprobadas": [4, 5, 3],
            "nivel": 3
        },
        {
            "numero": 25,
            "nombre": "Termodinámica y Máquinas Térmicas",
            "cursadas": [6, 13],
            "aprobadas": [4, 5],
            "nivel": 3
        },
        {
            "numero": 26,
            "nombre": "Diseño de Producto",
            "cursadas": [15, 18],
            "aprobadas": [7, 8, 9, 10, 14],
            "nivel": 4
        },
        {
            "numero": 27,
            "nombre": "Evaluación de Proyectos",
            "cursadas": [22, 18, 20],
            "aprobadas": [9, 10, 14, 16],
            "nivel": 4
        },
        {
            "numero": 28,
            "nombre": "Inglés II",
            "cursadas": [16],
            "aprobadas": [],
            "nivel": 4
        },
        {
            "numero": 29,
            "nombre": "Instalaciones Industriales",
            "cursadas": [25, 23, 24, 21],
            "aprobadas": [6, 12, 11, 13],
            "nivel": 4
        },
        {
            "numero": 30,
            "nombre": "Investigación Operativa",
            "cursadas": [12, 10],
            "aprobadas": [3, 4],
            "nivel": 4
        },
        {
            "numero": 31,
            "nombre": "Legislación",
            "cursadas": [],
            "aprobadas": [9],
            "nivel": 4
        },
        {
            "numero": 32,
            "nombre": "Mecánica y Mecanismos",
            "cursadas": [12],
            "aprobadas": [4, 5, 3],
            "nivel": 4
        },
        {
            "numero": 33,
            "nombre": "Planificación y Control de la Producción",
            "cursadas": [22],
            "aprobadas": [9, 10],
            "nivel": 4
        },
        {
            "numero": 34,
            "nombre": "Seguridad, Higiene e Ingeniería Ambiental",
            "cursadas": [22],
            "aprobadas": [9, 10],
            "nivel": 4
        },
        {
            "numero": 35,
            "nombre": "Procesos Industriales",
            "cursadas": [22, 25, 21],
            "aprobadas": [6, 9, 10, 13],
            "nivel": 4
        },
        {
            "numero": 36,
            "nombre": "Comercio Exterior",
            "cursadas": [27],
            "aprobadas": [22, 18, 20],
            "nivel": 5
        },
        {
            "numero": 37,
            "nombre": "Control de Gestión",
            "cursadas": [19, 20],
            "aprobadas": [9, 14],
            "nivel": 5
        },
        {
            "numero": 38,
            "nombre": "Ingeniería en Calidad",
            "cursadas": [22],
            "aprobadas": [9, 10],
            "nivel": 5
        },
        {
            "numero": 39,
            "nombre": "Manejo de Materiales y Distribución de Plantas",
            "cursadas": [22, 32],
            "aprobadas": [12, 9, 10],
            "nivel": 5
        },
        {
            "numero": 40,
            "nombre": "Mantenimiento",
            "cursadas": [29],
            "aprobadas": [25, 23, 21],
            "nivel": 5
        },
        {
            "numero": 41,
            "nombre": "Relaciones Industriales",
            "cursadas": [22],
            "aprobadas": [9, 10],
            "nivel": 5
        },
        {
            "numero": 42,
            "nombre": "Electiva",
            "cursadas": [],
            "aprobadas": [],
            "nivel": 5
        },
        {
            "numero": 43,
            "nombre": "Práctica Profesional Supervisada",
            "cursadas": [],
            "aprobadas": [],
            "nivel": 5
        },
        {
            "numero": 44,
            "nombre": "Proyecto Final",
            "cursadas": [17, 34, 30, 35, 27, 33],
            "aprobadas": [],
            "nivel": 5
        }
    ],
    ingenieriaMecanica = [
        {
            "numero": 1,
            "nombre": "Análisis Matemático I",
            "cursadas": [],
            "aprobadas": [],
            "nivel": 1
        },
        {
            "numero": 2,
            "nombre": "Química General",
            "cursadas": [],
            "aprobadas": [],
            "nivel": 1
        },
        {
            "numero": 3,
            "nombre": "Álgebra y Geometría Analítica",
            "cursadas": [],
            "aprobadas": [],
            "nivel": 1
        },
        {
            "numero": 4,
            "nombre": "Física I",
            "cursadas": [],
            "aprobadas": [],
            "nivel": 1
        },
        {
            "numero": 5,
            "nombre": "Ingeniería y Sociedad",
            "cursadas": [],
            "aprobadas": [],
            "nivel": 1
        },
        {
            "numero": 6,
            "nombre": "Ingeniería Mecánica (Int)",
            "cursadas": [],
            "aprobadas": [],
            "nivel": 1
        },
        {
            "numero": 7,
            "nombre": "Sistemas de Representación",
            "cursadas": [],
            "aprobadas": [],
            "nivel": 1
        },
        {
            "numero": 8,
            "nombre": "Fundamentos de Informática",
            "cursadas": [],
            "aprobadas": [],
            "nivel": 1
        },
        {
            "numero": 9,
            "nombre": "Materiales No Metálicos",
            "cursadas": [2, 4],
            "aprobadas": [],
            "nivel": 2
        },
        {
            "numero": 10,
            "nombre": "Estabilidad I",
            "cursadas": [1, 3, 4],
            "aprobadas": [],
            "nivel": 2
        },
        {
            "numero": 11,
            "nombre": "Materiales Metálicos",
            "cursadas": [2, 4],
            "aprobadas": [],
            "nivel": 2
        },
        {
            "numero": 12,
            "nombre": "Análisis Matemático II",
            "cursadas": [1, 3],
            "aprobadas": [],
            "nivel": 2
        },
        {
            "numero": 13,
            "nombre": "Física II",
            "cursadas": [1, 4],
            "aprobadas": [],
            "nivel": 2
        },
        {
            "numero": 14,
            "nombre": "Ingeniería Ambiental y Seguridad Industrial",
            "cursadas": [2, 4],
            "aprobadas": [],
            "nivel": 2
        },
        {
            "numero": 15,
            "nombre": "Ingeniería Mecánica II (Int)",
            "cursadas": [4, 6],
            "aprobadas": [],
            "nivel": 2
        },
        {
            "numero": 16,
            "nombre": "Inglés I",
            "cursadas": [],
            "aprobadas": [],
            "nivel": 2
        },
        {
            "numero": 17,
            "nombre": "Termodinámica",
            "cursadas": [12, 13],
            "aprobadas": [1, 3, 4],
            "nivel": 3
        },
        {
            "numero": 18,
            "nombre": "Mecánica Racional",
            "cursadas": [10, 12],
            "aprobadas": [1, 3, 4],
            "nivel": 3
        },
        {
            "numero": 19,
            "nombre": "Estabilidad II",
            "cursadas": [10, 12],
            "aprobadas": [1, 3, 4],
            "nivel": 3
        },
        {
            "numero": 20,
            "nombre": "Mediciones y Ensayos",
            "cursadas": [10, 11, 13],
            "aprobadas": [1, 4],
            "nivel": 3
        },
        {
            "numero": 21,
            "nombre": "Diseño Mecánico",
            "cursadas": [9, 10, 11],
            "aprobadas": [4, 6, 7, 8],
            "nivel": 3
        },
        {
            "numero": 22,
            "nombre": "Cálculo Avanzado",
            "cursadas": [12],
            "aprobadas": [1, 3, 8],
            "nivel": 3
        },
        {
            "numero": 23,
            "nombre": "Ingeniería Mecánica III (Int)",
            "cursadas": [9, 11, 15],
            "aprobadas": [1, 2, 4, 6],
            "nivel": 3
        },
        {
            "numero": 24,
            "nombre": "Probabilidad y Estadística",
            "cursadas": [1, 3],
            "aprobadas": [],
            "nivel": 3
        },
        {
            "numero": 25,
            "nombre": "Inglés II",
            "cursadas": [],
            "aprobadas": [16],
            "nivel": 3
        },
        {
            "numero": 26,
            "nombre": "Economía",
            "cursadas": [15],
            "aprobadas": [5],
            "nivel": 4
        },
        {
            "numero": 27,
            "nombre": "Elementos de Máquinas (Int)",
            "cursadas": [9, 11, 18, 19, 23],
            "aprobadas": [2, 10, 12],
            "nivel": 4
        },
        {
            "numero": 28,
            "nombre": "Tecnología del Calor",
            "cursadas": [17],
            "aprobadas": [12, 13],
            "nivel": 4
        },
        {
            "numero": 29,
            "nombre": "Metrología e Ingeniería de Calidad",
            "cursadas": [20, 24],
            "aprobadas": [3, 11, 13],
            "nivel": 4
        },
        {
            "numero": 30,
            "nombre": "Mecánica de los Fluidos",
            "cursadas": [17],
            "aprobadas": [12, 13],
            "nivel": 4
        },
        {
            "numero": 31,
            "nombre": "Electrotecnia y Máquinas Eléctricas",
            "cursadas": [12, 13],
            "aprobadas": [1, 3, 4],
            "nivel": 4
        },
        {
            "numero": 32,
            "nombre": "Electrónica y Sistemas de Control",
            "cursadas": [12, 13, 22],
            "aprobadas": [1, 3, 4],
            "nivel": 4
        },
        {
            "numero": 33,
            "nombre": "Estabilidad III",
            "cursadas": [19],
            "aprobadas": [1, 3, 4, 10],
            "nivel": 4
        },
        {
            "numero": 34,
            "nombre": "Tecnología de Fabricación",
            "cursadas": [27, 29],
            "aprobadas": [9, 10, 11, 21],
            "nivel": 5
        },
        {
            "numero": 35,
            "nombre": "Máquinas Alternativas y Turbomáquinas",
            "cursadas": [28],
            "aprobadas": [13, 17],
            "nivel": 5
        },
        {
            "numero": 36,
            "nombre": "Instalaciones Industriales",
            "cursadas": [20, 28, 30, 31, 32],
            "aprobadas": [10, 14, 17],
            "nivel": 5
        },
        {
            "numero": 37,
            "nombre": "Organización Industrial",
            "cursadas": [26],
            "aprobadas": [15],
            "nivel": 5
        },
        {
            "numero": 38,
            "nombre": "Legislación",
            "cursadas": [15],
            "aprobadas": [5],
            "nivel": 5
        },
        {
            "numero": 39,
            "nombre": "Mantenimiento",
            "cursadas": [20, 26, 27],
            "aprobadas": [11, 13, 18, 19],
            "nivel": 5
        },
        {
            "numero": 40,
            "nombre": "Proyecto Final (Int)",
            "cursadas": [18, 19, 20, 21, 27, 29, 31, 32],
            "aprobadas": [],
            "nivel": 5
        }
    ],
    ingenieriaQuimica = [
        {
            "numero": 1,
            "nombre": "Introducción de la Ing. Química",
            "cursadas": [],
            "aprobadas": [],
            "nivel": 1
        },
        {
            "numero": 2,
            "nombre": "Ingeniería y Sociedad",
            "cursadas": [],
            "aprobadas": [],
            "nivel": 1
        },
        {
            "numero": 3,
            "nombre": "Álgebra y Geometría Analítica",
            "cursadas": [],
            "aprobadas": [],
            "nivel": 1
        },
        {
            "numero": 4,
            "nombre": "Análisis Matemático I",
            "cursadas": [],
            "aprobadas": [],
            "nivel": 1
        },
        {
            "numero": 5,
            "nombre": "Física I",
            "cursadas": [],
            "aprobadas": [],
            "nivel": 1
        },
        {
            "numero": 6,
            "nombre": "Química",
            "cursadas": [],
            "aprobadas": [],
            "nivel": 1
        },
        {
            "numero": 7,
            "nombre": "Sistemas de Representación",
            "cursadas": [],
            "aprobadas": [],
            "nivel": 1
        },
        {
            "numero": 8,
            "nombre": "Fundamentos de Informática",
            "cursadas": [],
            "aprobadas": [],
            "nivel": 1
        },
        {
            "numero": 9,
            "nombre": "Introducción de Equipos y Procesos",
            "cursadas": [1, 6],
            "aprobadas": [],
            "nivel": 2
        },
        {
            "numero": 10,
            "nombre": "Probabilidad y Estadística",
            "cursadas": [3, 4],
            "aprobadas": [],
            "nivel": 2
        },
        {
            "numero": 11,
            "nombre": "Química Inorgánica",
            "cursadas": [6],
            "aprobadas": [],
            "nivel": 2
        },
        {
            "numero": 12,
            "nombre": "Análisis Matemático II",
            "cursadas": [3, 4],
            "aprobadas": [],
            "nivel": 2
        },
        {
            "numero": 13,
            "nombre": "Física II",
            "cursadas": [4, 5],
            "aprobadas": [],
            "nivel": 2
        },
        {
            "numero": 14,
            "nombre": "Química Orgánica",
            "cursadas": [6],
            "aprobadas": [],
            "nivel": 2
        },
        {
            "numero": 15,
            "nombre": "Legislación",
            "cursadas": [1, 2],
            "aprobadas": [],
            "nivel": 2
        },
        {
            "numero": 16,
            "nombre": "Inglés I",
            "cursadas": [],
            "aprobadas": [],
            "nivel": 2
        },
        {
            "numero": 17,
            "nombre": "Balance de Masa y Energía",
            "cursadas": [6, 7, 8, 9, 13],
            "aprobadas": [1, 3, 4],
            "nivel": 3
        },
        {
            "numero": 18,
            "nombre": "Termodinámica",
            "cursadas": [11, 12, 13],
            "aprobadas": [4, 6],
            "nivel": 3
        },
        {
            "numero": 19,
            "nombre": "Matemática Superior Aplicada",
            "cursadas": [12],
            "aprobadas": [3, 4],
            "nivel": 3
        },
        {
            "numero": 20,
            "nombre": "Ciencia de los materiales",
            "cursadas": [9, 11, 14],
            "aprobadas": [1, 6],
            "nivel": 3
        },
        {
            "numero": 21,
            "nombre": "Fisicoquímica",
            "cursadas": [9, 12, 13],
            "aprobadas": [3, 4, 6],
            "nivel": 3
        },
        {
            "numero": 22,
            "nombre": "Fenómenos de Transporte",
            "cursadas": [9, 12, 13],
            "aprobadas": [3, 4, 6],
            "nivel": 3
        },
        {
            "numero": 23,
            "nombre": "Química Analítica",
            "cursadas": [10, 11, 14],
            "aprobadas": [2, 6],
            "nivel": 3
        },
        {
            "numero": 24,
            "nombre": "Microbiología y Química Biológica",
            "cursadas": [11, 14],
            "aprobadas": [6],
            "nivel": 3
        },
        {
            "numero": 25,
            "nombre": "Química Aplicada",
            "cursadas": [9, 11, 13, 14],
            "aprobadas": [1, 2, 6],
            "nivel": 3
        },
        {
            "numero": 26,
            "nombre": "Inglés II",
            "cursadas": [16],
            "aprobadas": [],
            "nivel": 3
        },
        {
            "numero": 27,
            "nombre": "Diseño, simulación, optimización y seguridad de procesos",
            "cursadas": [17, 19],
            "aprobadas": [7, 8, 9, 12, 26],
            "nivel": 4
        },
        {
            "numero": 28,
            "nombre": "Operaciones Unitarias I",
            "cursadas": [17, 18, 22],
            "aprobadas": [9, 12, 13],
            "nivel": 4
        },
        {
            "numero": 29,
            "nombre": "Tecnología de la Energía Térmica",
            "cursadas": [17, 18, 21, 22],
            "aprobadas": [9, 12, 13],
            "nivel": 4
        },
        {
            "numero": 30,
            "nombre": "Economía",
            "cursadas": [9],
            "aprobadas": [2, 3],
            "nivel": 4
        },
        {
            "numero": 31,
            "nombre": "Operaciones Unitarias II",
            "cursadas": [18, 21, 22],
            "aprobadas": [9, 12, 13, 14],
            "nivel": 4
        },
        {
            "numero": 32,
            "nombre": "Ingeniería de las Reacciones Químicas",
            "cursadas": [17, 18, 21, 22],
            "aprobadas": [11, 12, 14],
            "nivel": 4
        },
        {
            "numero": 33,
            "nombre": "Calidad y Control Estadístico de Procesos",
            "cursadas": [10],
            "aprobadas": [4],
            "nivel": 4
        },
        {
            "numero": 34,
            "nombre": "Organización Industrial",
            "cursadas": [10],
            "aprobadas": [2, 9, 15],
            "nivel": 4
        },
        {
            "numero": 35,
            "nombre": "Control Automático de Procesos",
            "cursadas": [27, 31],
            "aprobadas": [17, 19, 23],
            "nivel": 5
        },
        {
            "numero": 36,
            "nombre": "Mecánica Industrial",
            "cursadas": [9, 21],
            "aprobadas": [5, 11, 20],
            "nivel": 5
        },
        {
            "numero": 37,
            "nombre": "Ingeniería Ambiental",
            "cursadas": [25, 28, 31, 32],
            "aprobadas": [15, 17, 23],
            "nivel": 5
        },
        {
            "numero": 38,
            "nombre": "Procesos Biotecnológicos",
            "cursadas": [17, 21, 22, 24],
            "aprobadas": [9, 11, 14],
            "nivel": 5
        },
        {
            "numero": 39,
            "nombre": "Higiene y seguridad en el trabajo",
            "cursadas": [11, 14, 17],
            "aprobadas": [9],
            "nivel": 5
        },
        {
            "numero": 40,
            "nombre": "Máquinas e Instalaciones Eléctricas",
            "cursadas": [28],
            "aprobadas": [9, 13],
            "nivel": 5
        },
        {
            "numero": 41,
            "nombre": "Proyecto Final",
            "cursadas": [],
            "aprobadas": [],
            "nivel": 5
        }
    ]    
]

const input1=document.getElementById('input1');
const correlativa=document.getElementById('correlativa');
const regularizada=document.getElementById('regularizada');
const aprobada1=document.getElementById('aprobada');
const sugerencias=document.getElementById('input1Sugerencias');
const inputContainer=document.querySelector('.correlativas-input-box');

function eliminarDiacriticosEs(texto) {
    return texto
        .normalize('NFD')
        .replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,"$1")
        .normalize();
}
function numerosRomanos(input){
    let arrayInputJoin=input; 
    let arrayInput=input.split(' ');
    for(let i=0;i<input.length;i++){
            if(arrayInput[i]=='1'){
                arrayInput[i]='i';
                arrayInputJoin= arrayInput.join(' ')
            }else if(arrayInput[i]=='2'){
                arrayInput[i]='ii';
                arrayInputJoin= arrayInput.join(' ')
            }else if(arrayInput[i]=='3'){
                arrayInput[i]='iii';
                arrayInputJoin= arrayInput.join(' ')
            }
    }
    return arrayInputJoin;
}
function select(element){
    let selectFiltrado=element.textContent;
    input1.value=selectFiltrado;
    inputContainer.classList.remove('active')
    busqueda()
}
function filtrado(){
            let name=(eliminarDiacriticosEs(input1.value)).toLowerCase().trim().split("\n").join("");
            let filtrado=[];
            let filtrados;

            if(name){
                filtrado=materias[id].filter(materia=>{
                    return (eliminarDiacriticosEs(materia.nombre)).toLowerCase().startsWith(name);
                })
                filtrado=filtrado.map(materia=>{
                    return materia=`<li class="lista">${materia.nombre}</li>`
                });
                inputContainer.classList.add('active')
                if(!filtrado.length)
                    {
                        filtrados=`<li class="lista">${input1.value}</li>`
                    }else{
                        filtrados=filtrado.join(' ');
                    }
                    sugerencias.innerHTML=filtrados;
                    const lista=document.querySelectorAll('li.lista');
                    console.log(lista)
                    lista.forEach(li=>{
                    li.setAttribute('onclick','select(this)')
                })    
                    
            }else{
                inputContainer.classList.remove('active')
            }
}
function busqueda(){
        let name2=numerosRomanos((eliminarDiacriticosEs(input1.value))
            .toLowerCase()
            .trim()
            .split("\n")
            .join(""));
            let numero;

            
            if(regularizada.innerHTML.length!=0||correlativa.innerHTML.length!=0||aprobada1.innerHTML.length!=0){
                regularizada.innerHTML=aprobada1.innerHTML=correlativa.innerHTML='';
            }
            let contador=0;
            materias[id].forEach(electronica=>{
                let electronicaMin=(eliminarDiacriticosEs(electronica.nombre)).toLowerCase();
                if(electronicaMin===name2){    
                    numero=electronica.numero;
                    electronica.aprobadas.forEach(aprobada=>{
                        materias[id].forEach(electronica=>{
                            if(electronica.numero===aprobada){
                                if(contador==0){
                                    aprobada1.innerHTML+='<h2>Y tambien promocionada o con final:</h2>'; 
                                    contador++;
                                }
                                aprobada1.innerHTML+=`<p>${electronica.nombre}</p>`;
                            }
                        })
                    })
                    let contador1=0;
                    electronica.cursadas.forEach(cursada=>{
                        if(contador1==0){
                            regularizada.innerHTML+='<h2>Necesita la cursada de: </h2>'; 
                            contador1++;
                    }
                        materias[id].forEach(electronica=>{
                            
                            if(electronica.numero===cursada){
                                regularizada.innerHTML+=`<p>${electronica.nombre}</p>`;
                            }
                        })
                    })
                }
            })
            let contador2=0;
            materias[id].forEach(electronica=>{
                electronica.cursadas.forEach(cursada=>{
                    if(cursada===numero){        
                        if(contador2==0){
                            correlativa.innerHTML+='<h2>Necesitas aprobar la cursada para poder cursar:</h2>'; 
                            contador2++;
                    }
                    correlativa.innerHTML+=`<p>${electronica.nombre}</p>`;
                    
                    }
                })
            })
        
            let contador3=0;
            materias[id].forEach(electronica=>{
                electronica.aprobadas.forEach(aprobada=>{
                    if(aprobada===numero){        
                        if(contador3==0){
                            correlativa.innerHTML+='<h2>Necesitas promocionar o rendir el final para poder cursar:</h2>'; 
                            contador3++;
                    }
                    correlativa.innerHTML+=`<p>${electronica.nombre}</p>`;
                    
                    }
                })
            })
}

input1.addEventListener('keyup',()=>{
    filtrado();
    busqueda();    
    })
