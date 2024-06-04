// DOM FUNCTIONS. ID VIENE DE URL, SUPOUESTA QUERY, 

const locationSearch = location.search

const params = new URLSearchParams(locationSearch)

const id = params.get("id")

const carrer = carreras.find(titulo => titulo._id == id)


const ingenieria = document.getElementById("carreras")

ingenieria.innerHTML = `<div class="CarrerasInfo">
TITULO: ${carrer.titulo} <BR>
TITULO INTERMEDIO: ${carrer.tituloIntermedio}<BR>
DURACION: ${carrer.duracion}<BR>
CORRELATIVIDADES Y EQUIVALENCIAS: <a href="${carrer.CORRELATIVIDADESYEQUIVALENCIAS}" class="new-s-link" id="new-s-link">Correlativ.pdf</a> <BR>
DISEÑO CURRICULAR: <a href="${carrer.DISEÑOCURRICULAR}" class="new-s-link" id="new-s-link">DiseñoC.pdf</a><BR>
HORARIOS: <a href="${carrer.HorariosH}" class="new-s-link" id="new-s-link">HorariosHomogeneas.pdf</a> <a href="${carrer.Horarios}" class="new-s-link" id="new-s-link">Horarios.pdf</a> <BR>
IMPLEMENTACION: <a href="${carrer.IMPLEMENTACION}" class="new-s-link" id="new-s-link">Imp.pdf</a><BR> 
PLANES: <a href="${carrer.PLANESDEESTUDIO}" class="new-s-link" id="new-s-link">Planes.pdf </a><BR>
APTITUDES PROFESIONALES: ${carrer.APTITUDESPROFESIONALES} <BR>
    </div> `
