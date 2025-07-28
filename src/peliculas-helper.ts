import { Personaje } from "./personajes-model"

const crearElementoImagen = (
    imagen: string, 
    nombre:string
    ): HTMLImageElement => {
        const urlCompleta = `http://localhost:3000/${imagen}`;
        const imagenUrl = document.createElement("img");
        imagenUrl.src = urlCompleta;
        imagenUrl.alt = nombre;
        return imagenUrl;
}

const crearElementoSpan = (texto: string) : HTMLSpanElement => {
    const elementoSpan = document.createElement("span");
    elementoSpan.textContent = texto;
    elementoSpan.classList.add("titulo");
    return elementoSpan;
}

const nombrePersonaje = (personaje: Personaje, ): HTMLDivElement => {
    const Nombre = document.createElement ("p");
    const nombreNegrita = crearElementoSpan("Nombre: ");
    Nombre.appendChild(nombreNegrita);
    const nombre = document.createTextNode(personaje.nombre);
    Nombre.appendChild(nombre);

    return Nombre;
}

const apodoPersonaje = (personaje: Personaje, ): HTMLDivElement => {
    const Apodo = document.createElement ("p");
    const apodoNegrita = crearElementoSpan("Apodo:  ");
    Apodo.appendChild(apodoNegrita);
    const apodo = document.createTextNode(personaje.apodo);
    Apodo.appendChild(apodo);

    return Apodo;
}

const especialidadPersonaje = (personaje: Personaje, ): HTMLDivElement => {
    const Especialidad = document.createElement ("p");
    const especialidadNegrita = crearElementoSpan("Especialidad: ");
    Especialidad.appendChild(especialidadNegrita);
    const especialidad = document.createTextNode(personaje.especialidad);
    Especialidad.appendChild(especialidad);

    return Especialidad;
}

const habilidadPersonaje = (personaje: Personaje, ): HTMLDivElement => {
    const Habilidad = document.createElement ("p");
    const habilidadesNegrita = crearElementoSpan("Habilidades: ");
    Habilidad.appendChild(habilidadesNegrita);
    const habilidades = document.createTextNode(personaje.habilidades.join(", "));
    Habilidad.appendChild(habilidades);

    return Habilidad;
}

const amigoPersonaje = (personaje: Personaje, ): HTMLDivElement => {
    const Amigo = document.createElement ("p");
    const amigoNegrita = crearElementoSpan("Amigo:  ");
    Amigo.appendChild(amigoNegrita);
    const amigo = document.createTextNode(personaje.amigo);
    Amigo.appendChild(amigo);

    return Amigo;
}

export const crearContenedorPersonaje = (personaje: Personaje,): HTMLDivElement => {
    const elementoPersonaje = document.createElement("div");
    elementoPersonaje.classList.add("personajeContainer");

    const imagen = crearElementoImagen(personaje.imagen, personaje.nombre);
    elementoPersonaje.appendChild(imagen);

    const Nombre = nombrePersonaje(personaje);
    elementoPersonaje.appendChild(Nombre);

    const Apodo = apodoPersonaje(personaje);
    elementoPersonaje.appendChild(Apodo);

    const Especialidad = especialidadPersonaje(personaje);
    elementoPersonaje.appendChild(Especialidad);

    const Habilidad = habilidadPersonaje(personaje);
    elementoPersonaje.appendChild(Habilidad);

    const Amigo = amigoPersonaje(personaje);
    elementoPersonaje.appendChild(Amigo);

    return elementoPersonaje;
}