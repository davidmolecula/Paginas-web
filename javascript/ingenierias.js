// DOM FUNCTIONS. ID VIENE DE URL, SUPOUESTA QUERY, 

const locationSearch = location.search

const params = new URLSearchParams(locationSearch)

const id = params.get("id")

const carrer = carreras.find(titulo => titulo._id == id)
console.log(id)

const ingenieria = document.getElementById("CarrerasInfo")

ingenieria.innerHTML = `<div class="CarrerasInfo" id="CarrerasInfo">
TITULO: ${carrer.titulo} <BR>
TITULO INTERMEDIO: ${carrer.tituloIntermedio}<BR>
DURACION: ${carrer.duracion}<BR>
CORRELATIVIDADES Y EQUIVALENCIAS: <a href="${carrer.CORRELATIVIDADESYEQUIVALENCIAS}" class="new-s-link" id="new-s-link">Correlativ.pdf</a> <BR>
DISEÑO CURRICULAR: <a href="${carrer.DISEÑOCURRICULAR}" class="new-s-link" id="new-s-link">DiseñoC.pdf</a><BR>
HORARIOS: <a href="${carrer.HorariosH}" class="new-s-link" id="new-s-link">HorariosHomogeneas.pdf</a> <a href="${carrer.Horarios}" class="new-s-link" id="new-s-link">Horarios.pdf</a> <BR>
FAQ: <a href="${carrer.FAQ}" class="new-s-link" id="faq"> FAQ.docx </a><BR>
IMPLEMENTACION: <a href="${carrer.IMPLEMENTACION}" class="new-s-link" id="new-s-link">Imp.pdf</a><BR> 
PLANES: <a href="${carrer.PLANESDEESTUDIO}" class="new-s-link" id="new-s-link">Planes.pdf </a><BR>
APTITUDES PROFESIONALES: ${carrer.APTITUDESPROFESIONALES} <BR>
    </div> `
    