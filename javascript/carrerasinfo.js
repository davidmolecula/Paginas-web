//<h1>$ {titulo}</h1>
const carrerasInfo = document.getElementById('CarrerasInfo');

let var2 = '';

let carreras = [{
    _id: 0,
    url: "Img/ING.CIVIL/logocivil.jpeg",
    titulo: "Ingenieria Civil",
    duracion: 6,
    tituloIntermedio: "No tiene",
    HorariosH: "C:/Users/Dell 5289/Desktop/Paginas-web-master/files/HorariosHomogeneas.pdf", Horarios: "C:/Users/Dell 5289/Desktop/Paginas-web-master/files/CIVIL/HorariosCivil.pdf",
    CORRELATIVIDADESYEQUIVALENCIAS: "C:/Users/Dell 5289/Desktop/Paginas-web-master/files/CIVIL/Correlatividades%20y%20equivalencias.pdf",
    DISEÑOCURRICULAR: "C:/Users/Dell%205289/Desktop/Paginas-web-master/files/CIVIL/dis.pdf",
    FAQ: "C:/Users/Dell 5289/Desktop/Paginas-web-master/files/CIVIL/FAQ.docx",
    IMPLEMENTACION: "C:/Users/Dell 5289/Desktop/Paginas-web-master/files/CIVIL/Implementacion.pdf",
    PLANESDEESTUDIO: "C:/Users/Dell 5289/Desktop/Paginas-web-master/files/CIVIL/plan.pdf",
    APTITUDESPROFESIONALES: "<BR><BR>A continuación se detallan las correspondientes actividades profesionales reservadas de acuerdo con lo establecido por la Resolución Ministerial Nº 1232/01. <BR> <BR> A. Estudio, factibilidad, proyecto, dirección, inspección, construcción, operación y mantenimiento de: <BR> 1.Edificios, cualquiera sea su destino con todas sus obras complementarias. <BR> 2.Estructuras resistentes y obras civiles y de arte de todo tipo. <BR>    3.Obras de regulación, captación y abastecimiento de agua. <BR> 4.Obras de riego, desagüe y drenaje. <BR>    5.Instalaciones hidromecánicas. <BR>    6.Obras destinadas al aprovechamiento de la energía hidráulica. <BR> 7.Obras de corrección y regulación fluvial. <BR>    8.Obras destinadas al almacenamiento, conducción y distribución de sólidos y fluidos. <BR> 9.Obras viales y ferroviarias. <BR>    10.Obras de saneamiento urbano y rural. <BR>     11.Obras portuarias, incluso aeropuertos y todas aquellas relacionadas con la navegación fluvial, marítima y aérea. <BR>    12.Obras de urbanismo en lo que se refiere al trazado urbano y organización de servicios públicos vinculados con la higiene, vialidad, comunicaciones y energía. <BR>     13.Para todas las obras enunciadas en los incisos anteriores la previsión sísmica cuando correspondiere. <BR>    <BR>    B. Estudios, tareas y asesoramiento relacionado con: <BR>    1.Mecánica de suelos y mecánica de rocas. <BR>    2.Trabajos topográficos y geodésicos. <BR>    3.Planeamiento de sistema de transporte en general. <BR>    4.Estudio de tránsito en rutas y ciudades. <BR>    5.Planeamiento del uso y administración de los recursos hídricos. <BR>    6.Estudios hidrológicos. <BR>    7.Asuntos de Ingeniería Legal, Económica y Financiera y de Organización, relacionados con los mismos incisos anteriores. <BR>     8.Arbitrajes, pericia y tasaciones relacionados con los mismos incisos anteriores. <BR> 9.Higiene, seguridad y contaminación ambiental relacionados con los incisos anteriores. <BR>",

}, {
    _id: 1,
    url: "Img/ING.ELECTRICA/logoelectrica.jpeg",
    titulo: "Ingenieria Eléctrica",
    duracion: 5,
    tituloIntermedio: "Técnico Eléctrico",
    HorariosH: "C:/Users/Dell 5289/Desktop/Paginas-web-master/files/HorariosHomogeneas.pdf", Horarios: "C:/Users/Dell 5289/Desktop/Paginas-web-master/files/ELECTRICA/HorariosElectrica.pdf",
    CORRELATIVIDADESYEQUIVALENCIAS: "C:/Users/Dell%205289/Desktop/Paginas-web-master/files/ELECTRICA/Correlatividades%20y%20equivalencias.pdf",
    DISEÑOCURRICULAR: "C:/Users/Dell%205289/Desktop/Paginas-web-master/files/ELECTRICA/dis.pdf",
    FAQ: "C:/Users/Dell%205289/Desktop/Paginas-web-master/files/ELECTRICA/FAQ.docx",
    IMPLEMENTACION: "C:/Users/Dell%205289/Desktop/Paginas-web-master/files/ELECTRICA/Implementacion.pdf",
    PLANESDEESTUDIO: "C:/Users/Dell%205289/Desktop/Paginas-web-master/files/ELECTRICA/plan.pdf",
    APTITUDESPROFESIONALES: "<BR><BR>A continuación se detallan las correspondientes actividades profesionales reservadas de acuerdo con lo establecido por la Resolución Ministerial Nº 1232/01. <BR> a) Estudio, factibilidad, proyecto, planificación, dirección, construcción, instalación, puesta en marcha, operación, ensayos, mediciones, mantenimiento, reparación, modificación, transformación e inspección de: <BR> 1. Sistemas o partes de sistema de generación, transmisión, distribución, conversión, control, automatización, recepción, procesamiento y utilización de la energía eléctrica en todas las frecuencias y potencias, excepto obras civiles e industriales. <BR>  2. Laboratorios de todo tipo, relacionados con el inciso anterior. <BR> <B> 3_ </B> Sistemas de control. <BR>  4. Instalaciones que utilicen señales electromagnéticas como accesorio de lo detallado en el párrafo anterior.<BR>  <B>5_ </B> Participación en desarrollos de computación aplicada a la Ingeniería, incluyendo los productos de programación (software) y los dispositivos físicos (hardware) .<BR>        6. Participar en la elaboración de políticas de tarifas, precios y costos marginales de generaciones, transporte y distribución de energía eléctrica.<BR>       7. Participar en la evaluación económica de proyectos de inversión de Ingeniería Eléctrica. <BR>    <BR>    B) Estudios, tareas y asesoramiento relacionados con: <BR>          1. Asuntos de Ingeniería Legal, Económica y Financiera relacionados con los incisos anteriores.<BR>   2. Arbitrajes, pericias y tasaciones, relacionados con los incisos anteriores. <BR>                 3. Higiene, seguridad industrial y contaminación ambiental, relacionados con los incisos anteriores. ",


}, {
    _id: 2,
    url: "Img/ING.ELECTRONICA/logoelectronica.jpeg",
    titulo: "Ingenieria Electrónica",
    duracion: 6,
    tituloIntermedio: "Técnico Electrónico",
    HorariosH: "C:/Users/Dell 5289/Desktop/Paginas-web-master/files/HorariosHomogeneas.pdf", Horarios: "C:/Users/Dell 5289/Desktop/Paginas-web-master/files/ELECTRONICA/HorariosElectronica.pdf",
    CORRELATIVIDADESYEQUIVALENCIAS: "C:/Users/Dell 5289/Desktop/Paginas-web-master/files/ELECTRONICA/Correlatividades%20y%20equivalencias.pdf",
    DISEÑOCURRICULAR: "C:/Users/Dell%205289/Desktop/Paginas-web-master/files/ELECTRONICA/dis.pdf",
    FAQ: "C:/Users/Dell 5289/Desktop/Paginas-web-master/files/ELECTRONICA/FAQ.docx",
    IMPLEMENTACION: "C:/Users/Dell 5289/Desktop/Paginas-web-master/files/ELECTRONICA/Implementacion.pdf",
    PLANESDEESTUDIO: "C:/Users/Dell%205289/Desktop/Paginas-web-master/files/ELECTRONICA/plan.pdf",
    APTITUDESPROFESIONALES: "<BR> A continuación se detallan las correspondientes actividades profesionales reservadas de acuerdo con lo establecido por la Resolución Ministerial Nº 1232/01. <BR> A) Proyectar, planificar, diseñar, el estudio de factibilidad, dirección, construcción, instalación, programación, operación, ensayo, medición, mantenimiento, reparación, reforma, transformación, puesta en funcionamiento e inspección de: <BR>1.Sistemas,subsistemas,equipos,componentes,partes y piezas de generación, transmisión, recepción, distribución, conversión, control, medición, automatización, registro, reproducción procesamiento y/o utilización de señales de cualquier contenido, aplicación y/o naturaleza, ya sea eléctrica, electromagnética, óptica, acústica, o de otro tipo, en todas las frecuencias y potencias.<BR> 2.Sistemas, subsistemas, equipos, componentes, partes de sistemas irradiantes o de otros medios de enlace para comunicaciones, incluidos los satélites y/ o de aplicación espacial en todas las frecuencias y potencias. <BR> 3.Sistemas, subsistemas, equipos, componentes, partes, y piezas (Hardware), de procesamiento electrónico de datos en todas sus aplicaciones incluyendo su programación (Software) asociada. <BR> 4.Sistemas, subsistemas, equipos, componentes, partes, y piezas que impliquen electrónica, de navegación, o señalización o cualquier otra aplicación al movimiento de vehículos terrestres, aéreos, marítimos o de cualquier otro tipo. <BR> 5.Sistemas, subsistemas, equipos, componentes, partes y piezas de control o automatización electrónica para cualquier aplicación y potencia.   <BR> 6.Instalaciones que utilicen energía como accesorio de lo detallado en los incisos anteriores.  <BR> 7.Laboratorios de todo tipo relacionados con los incisos anteriores, excepto obras civiles. <BR> B) Estudios, tareas, asesoramientos relacionados con: <BR>1.Asuntos de Ingeniería Legal, Económica, Financiera relacionados con los incisos anteriores.  <BR>2.Arbitrajes, pericias y tasaciones relacionadas con los incisos anteriores. <BR> 3.Higiene, seguridad industrial y contaminación ambiental relacionados con los incisos anteriores.  <BR><BR>  SALIDA LABORAL <BR>  Las actividades detalladas en el apartado anterior podrán desarrollarse en empresas, universidades y centros de investigación, en el sector público o privado, en relación de dependencia o en forma autónoma. <BR>Una de las características básicas de los alumnos de la UTN, en todos los tiempos, es que trabaja en la especialidad. Asimismo en la actualidad un buen porcentaje de ellos no cumple con este requisito por lo que se propone una salida laboral rápida que los beneficie a ellos y a quienes lo incorporen. ",


}, {
    _id: 3,
    url: "Img/ING.INDUSTRIAL/logoindustrial.jpeg",
    titulo: "Ingenieria Industrial",
    duracion: 5,
    tituloIntermedio: "Técnico en Gestión Industrial",
    HorariosH: "C:/Users/Dell 5289/Desktop/Paginas-web-master/files/HorariosHomogeneas.pdf", Horarios: "C:/Users/Dell 5289/Desktop/Paginas-web-master/files/INDUSTRIAL/HorariosIndustrial.pdf",
    PLANESDEESTUDIO: "C:/Users/Dell%205289/Desktop/Paginas-web-master/files/INDUSTRIAL/plan.pdf",
    APTITUDESPROFESIONALES: "<BR> A continuación se detallan las correspondientes actividades profesionales reservadas de acuerdo con lo establecido por la Resolución Ministerial Nº 1232/01.:    <BR> A) Realizar estudios de factibilidad, proyectar, dirigir, implementar, operar y evaluar el proceso de producción de bienes industrializados y la administración de los recursos destinados a la producción de dichos bienes.<BR>B) Planificar y organizar plantas industriales y plantas de transformación de recursos naturales en bienes industrializados y servicios.      <BR>          C) Proyectar las instalaciones necesarias para el desarrollo de procesos productivos destinados a la producción de bienes industrializados y dirigir su ejecución y mantenimiento.   <BR>       D) Proyectar, implementar y evaluar el proceso destinado a la producción de bienes industrializados. <BR>   E) Determinar las especificaciones técnicas y evaluar la factibilidad tecnológica de los dispositivos, aparatos y equipos necesarios para el funcionamiento del proceso destinado a la producción de bienes industrializados.  <BR>     F) Programar y organizar el movimiento y almacenamiento de materiales para el desarrollo del proceso productivo y de los bienes industrializados resultantes.    <BR>       G) Participar en el diseño de productos en lo relativo a la determinación de la factibilidad de su elaboración industrial.   <BR>   H) Determinar las condiciones de instalación y de funcionamiento que aseguren que el conjunto de operaciones necesarias para la producción y distribución de bienes industrializados se realice en condiciones de higiene y seguridad, establecer las especificaciones de equipos, dispositivos y elementos de protección y controlar su utilización.  <BR>        I) Realizar la planificación, organización, conducción y control de gestión del conjunto de operaciones necesarias para la producción y distribución de bienes industriales.    <BR> J) Determinar la calidad y cantidad de los recursos humanos para la implementación y funcionamiento del conjunto de operaciones necesarias para la producción de bienes industrializados; evaluar su desempeño y establecer los requerimientos de capacitación.   <BR>       K) Efectuar la programación de los requerimientos financieros para la producción de bienes industrializados.        <BR>  L) Asesorar en lo relativo al proceso de producción de bienes industrializados y la administración de los recursos destinados a la producción de dichos bienes.  <BR> M) Efectuar tasaciones y valuaciones de plantas industriales en lo relativo a: sus instalaciones y equipos, sus productos semielaborados y elaborados y las tecnologías de transformación utilizadas en la producción y distribución de bienes industrializados.<BR>  Realizar arbitrajes y peritajes referidos a: la planificación y organización de plantas industriales, sus instalaciones y equipos, y el proceso de producción, los procedimientos de operación y las condiciones de higiene y seguridad en el trabajo, para la producción y distribución de bienes industrializados. ",

}, {
    _id: 4,
    url: "Img/ING.MECANICA/logomecanica.jpeg",
    titulo: "Ingenieria Mecánica",
    duracion: 5,
    tituloIntermedio: "Técnico Mecánico",
    HorariosH: "C:/Users/Dell 5289/Desktop/Paginas-web-master/files/HorariosHomogeneas.pdf", Horarios: "C:/Users/Dell 5289/Desktop/Paginas-web-master/files/MECANICA/HorariosMecanica.pdf",
    CORRELATIVIDADESYEQUIVALENCIAS: "C:/Users/Dell 5289/Desktop/Paginas-web-master/files/MECANICA/Correlatividades%20y%20equivalencias.pdf",
    DISEÑOCURRICULAR: "C:/Users/Dell%205289/Desktop/Paginas-web-master/files/MECANICA/dis.pdf",
    FAQ: "C:/Users/Dell 5289/Desktop/Paginas-web-master/files/MECANICA/FAQ.docx",
    IMPLEMENTACION: "C:/Users/Dell%205289/Desktop/Paginas-web-master/files/CIVIL/Implementacion.pdf",
    PLANESDEESTUDIO: "C:/Users/Dell%205289/Desktop/Paginas-web-master/files/MECANICA/plan.pdf",
    APTITUDESPROFESIONALES: "<BR> A continuación se detallan las correspondientes actividades profesionales reservadas de acuerdo con lo establecido por la Resolución Ministerial Nº 1232/01.:   <BR>           Se transcriben a continuación dichas actividades establecidas por la Resolución Ministerial Nº1232/ 01.  <BR>  a) Estudio, factibilidad, proyecto, planificación, dirección, construcciones, instalación, puesta en marcha, operación, ensayos, mediciones, mantenimiento, reparación, modificación, transformación e inspección de:  <BR>   1. Sistemas mecánicos, térmicos y fluidos mecánicos o partes con estas características incluidos en otros sistemas, destinados a la generación, transformación, regulación, conducción y aplicación de la energía mecánica. <BR>                   2. Laboratorios de todo tipo, relacionados con el inciso anterior.Excepto obras civiles e industriales.  <BR>             3. Sistemas de control, automatización y Robótica Industrial.  <BR>  b) Estudios de comportamientos, ensayos, análisis de estructura y determinación de fallas de materiales metálicos y no metálicos, empleados en los sistemas mecánicos.   <BR> c) Estudios, tareas y asesoramiento relacionados con:      <BR>1. Asuntos de Ingeniería Legal, Económica y Financiera relacionados con los incisos anteriores.      <BR>                  2. Arbitrajes, pericias y tasaciones relacionadas con los incisos anteriores.   <BR>                  3. Higiene, Seguridad Industrial y contaminación ambiental relacionados con los incisos anteriores."

}, {
    _id: 5,
    url: "Img/ING.QUIMICA/logoquimica.jpeg",
    titulo: "Ingenieria Quimica",
    duracion: 5,
    tituloIntermedio: "Técnico Químico",
    HorariosH: "C:/Users/Dell 5289/Desktop/Paginas-web-master/files/HorariosHomogeneas.pdf", Horarios: "C:/Users/Dell 5289/Desktop/Paginas-web-master/files/QUIMICA/HorariosQuimica.pdf",
    CORRELATIVIDADESYEQUIVALENCIAS: "C:/Users/Dell 5289/Desktop/Paginas-web-master/files/QUIMICA/Correlatividades%20y%20equivalencias.pdf",
    DISEÑOCURRICULAR: "C:/Users/Dell%205289/Desktop/Paginas-web-master/files/QUIMICA/dis.pdf",
    FAQ: "C:/Users/Dell 5289/Desktop/Paginas-web-master/files/QUIMICA/FAQ.docx",
    IMPLEMENTACION: "C:/Users/Dell 5289/Desktop/Paginas-web-master/files/QUIMICA/Implementacion.pdf",
    PLANESDEESTUDIO: "C:/Users/Dell 5289/Desktop/Paginas-web-master/files/QUIMICA/plan.docx",
    APTITUDESPROFESIONALES: "<BR> <BR>A continuación se detallan las correspondientes actividades profesionales reservadas de acuerdo con lo establecido por la Resolución Ministerial Nº 1232/01. <BR>   A. Estudio, factibilidad, proyecto, dirección, construcciones, instalación, inspección, operación y mantenimiento (excepto obras civiles e industriales).   <BR> 1. Industrias que involucren procesos químicos, físico-químico y de bio-ingeniería y sus instalaciones complementarias. <BR>  2. Instalaciones donde intervengan operaciones unitarias y/o proceso industriales unitarios. <BR> 3. Instalaciones destinadas a evitar la contaminación ambiental por efluentes de todo tipo originados por las industrias y/o sus servicios.<BR>   4. Equipos, maquinarias, aparatos e instrumentos para las industrias indicadas en los incisos anteriores.   <BR>    B. Estudios, tareas y asesoramientos relaciones con:   <BR>    1. Aspecto funcional de las construcciones industriales y de servicios indicados en el párrafo A y sus obras e instalaciones complementarias.      <BR>   2. Factibilidad del aprovechamiento e industrialización de los recursos naturales y materias primas que sufran transformación y elaboración de nuevos productos.<BR>3. Planificación, programación, dirección, organización, racionalización, control y optimización de los procesos industriales de las industrias citadas en la párrafo A. <BR>        4. Asuntos de Ingeniería Legal, Económica y Financiera relacionados con los incisos anteriores.     <BR>      5. Arbitrajes, pericias y tasaciones relacionados con los incisos anteriores. <BR>     6. Higiene, seguridad y contaminación ambiental relacionados con los incisos anteriores.",

}]



carrerasInfo.innerHTML = var2;

for (let CARRERAS of CARRERAS) {
    var2 += `<h2>${CARRERAS}</h2>`;
}


