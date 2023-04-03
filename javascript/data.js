let informationCards={
    "cards": [
        {
        id: 1,
        "title": "Horarios",
        "description":"Los horarios de todas las materias, divididos por carreras, para que puedas armar tus horarios del 2023",
        "url":"files/horarios_en_base_de_datos_2022_Departamentos.xls" ,
        "link": "Descarga acá"
        },
        {
        id: 2,
        "title":"Fechas de final",
        "description":"Todas las fechas de los llamados del 2023 y las mesas especiales",
        "url":"https://fra.utn.edu.ar/index.php/alumnos/fechas-de-final",
        "link":"Fechas de final",
        },
        {
        id: 3,
        "title":"Trámites",
        "description":"Para realizar trámites como cambios de especialidad, pedir constancias, etc. Les dejamos los requisitos y los links",
        "url":"https://sites.google.com/view/tramites-dptoestudiantes",
        "link":"Tramitá acá",
        },
        {
        id: 4,
        "title":"Plan beta",
        "description":"La inscripción al Plan Beta, primer cuatrimestre 2023 estará habilitada del 27/3 al 30/3",
        "url": "https://docs.google.com/forms/d/e/1FAIpQLSdoSeeaC2lVm0roYiIXoWbPTFKT3shA_77EBzHHNAdOEQ3BZQ/closedform",
        "link": "Formulario",
        },
        {
        id: 5,
        "title":"Autogestión",
        "description":"Para acceder al sistema académico (SYSACAD)",
        "url":"https://www.fra.utn.edu.ar/Sysacad/loginAlumno.asp",
        "link": "Sysacad"
        },
        {
        id: 6,
        "title":"Campus Virtual",
        "description":"Para entrar al campus virtual y acceder a la info de tus cursadas",
        "url":"https://www.utnfravirtual.org.ar/",
        "link":"www.utnfravirtual.org.ar",
        },
        {
        id: 7,
        "title":"Radio",
        "description":"Toda la info sobre LaTecno 88.3 y nuestro programa de radio se la dejamos acá: ",
        "url":"http://www.latecno.com.ar/",
        "link":"www.latecno.com.ar",
        },
        {
        id: 8,
        "title":"Biblioteca",
        "description":"Biblioteca central de la utn fra",
        "url":"https://www.instagram.com/biblio.utn.fra/",
        "link": "Insta: biblio.utn.fra",
        },
        
    ]
};


let datosCarreras={

    "carreras":[

            {
                id:1,
                "carrera": "civil",
                "imgUrl": ["Img/ING. CIVIL/1.jpg","Img/ING. CIVIL/2.jpg","Img/ING. CIVIL/3.jpg","Img/ING. CIVIL/4.jpg","Img/ING. CIVIL/5.jpg","Img/ING. CIVIL/6.jpg"],
                "titulo":"Plan 2023 civil",
                "subtitulo":"#",
                "descripcion":"a"
    
            },

            {
                id:2,
                "carrera": "electrica",
                "imgUrl": ["Img/ING. ELECTRICA/1.jpg","Img/ING. ELECTRICA/2.jpg","Img/ING. ELECTRICA/3.jpg","Img/ING. ELECTRICA/4.jpg","Img/ING. ELECTRICA/5.jpg"],
                "titulo":"Plan 2023 electrica",
                "subtitulo":"#",
                "descripcion":"a"
    
            },
            {
            id:3,
            "carrera": "electronica",
            "imgUrl": ["Img/ING. ELECTRONICA/1.jpg","Img/ING. ELECTRONICA/2.jpg","Img/ING. ELECTRONICA/3.jpg","Img/ING. ELECTRONICA/4.jpg","Img/ING. ELECTRONICA/5.jpg"],
            "titulo":"Plan 2023 electronica",
            "subtitulo":"#",
            "descripcion":"a"

        },
        {
            id:4,
            "carrera": "industrial",
            "imgUrl": ["Img/ING. INDUSTRIAL/1.jpg","Img/ING. INDUSTRIAL/2.jpg","Img/ING. INDUSTRIAL/3.jpg","Img/ING. INDUSTRIAL/4.jpg","Img/ING. INDUSTRIAL/5.jpg","Img/ING. QUIMICA/6.jpg"],
            "titulo":"Plan 2023 industrial",
            "subtitulo":"#",
            "descripcion":"a"

        }, 
        {
            id:5,
            "carrera": "mecanica",
            "imgUrl": ["Img/ING. MECANICA/1.jpg","Img/ING. MECANICA/2.jpg","Img/ING. MECANICA/3.jpg","Img/ING. MECANICA/4.jpg","Img/ING. MECANICA/5.jpg"],
            "titulo":"Plan 2023 mecanica",
            "subtitulo":"#",
            "descripcion":"a"

        },
        
        {
            id:6,
            "carrera": "quimica",
            "imgUrl": ["Img/ING. QUIMICA/1.jpg","Img/ING. QUIMICA/2.jpg","Img/ING. QUIMICA/3.jpg","Img/ING. QUIMICA/4.jpg","Img/ING. QUIMICA/5.jpg"],
            "titulo":"Plan 2023 quimica",
            "subtitulo":"#",
            "descripcion":"a"

        }
    ]
};


let newsCardData={
    "newsCards":[
        {
            id:0,
            "title":"Buscando las aulas",
            "subtitle":"Todos los nombres de las aulas cambiaron",
            "urlImg":"Img/news-1.jpg",
            "text":['<p class="news-text">⚠️A PARTIR DEL 20 DE MARZO, CAMBIA LA NUMERACIÓN DE LAS AULAS PARA LAS CURSADAS DE INGENIERÍA</p>'

            ,'<p class="news-text">🔵Con el inicio del ciclo lectivo 2023, se modificará la numeración de las aulas del Campus Villa Domínico para una mejor organización y circulación de los y las estudiantes de las carreras de Ingeniería.</p>'
            
            ,'<p class="news-text">🔵Desde el lunes 20 de marzo, encontrarán el nombre de cada aula con el siguiente esquema: la letra representa al sector correspondiente, el primer número al piso donde se encuentra ubicada y los dos últimos dígitos corresponden al número de aula.</p>'
            
            ,'<p class="news-text">🔵Esta nueva disposición se encuentra también indicada en la señalética colocada en cada aula y en carteles ubicados en los accesos principales del Campus. Además, está disponible como PDF interactivo desde el siguiente link: tinyurl.com/5n8z724z, donde al hacer click sobre las imágenes se puede acceder a los videos que explican cómo llegar a cada sector.</p>'
            
            
            ,'<p class="news-text">🔵A partir de este trabajo, realizado por el Programa de Comunicación Institucional de la UTN Avellaneda, se continúan llevando adelante las tareas para reorganizar y mejorar el tránsito de la comunidad universitaria.</p>'],
        },
        {
            id:1,
            "title": "Feria de apuntes",
            "subtitle": "Podes dejar los apuntes que ya no usas o agarrar alguno que te sirva",
            "urlImg":"Img/news-2.jpg",
            "text":["texto","texto", "texto"],
        },
        {
            id:2,
            "title": "Becas",
            "subtitle": "Veni a jugar con nosotros",
            "urlImg":"Img/dalle-gabinete.png",
            "text":["texto","texto", "texto"],
        },
        {
            id:3,
            "title": "Renovamos el pasillo de la memoria",
            "subtitle": "Mantenemos viva la memoria",
            "urlImg":"Img/dalle-gabinete.png",
            "text":["texto","texto", "texto"],
        },
        {
            id:4,
            "title": "Feliz comienzo de cursada",
            "urlImg":"Img/dalle-gabinete.png",
            "text":["texto","texto", "texto"],
        }
        

    ]
}

