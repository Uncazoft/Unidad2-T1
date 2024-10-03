// ------------------- EJERCICIO 2 ------------------------

const persona = {
    nombre: 'Kevin Arellano',
    edad: 21,
    ciudad: 'Bermejillo'
  };
  
  persona.hobbies = ['Jugar', 'Musica', 'Correr'];
  
  Object.keys(persona).forEach((key) => {
    if (key === 'edad') {
      delete persona.edad;
    }
  });
  
  function incrementarEdad(persona) {
    const nuevoObjeto = { ...persona };
    nuevoObjeto.edad = (persona.edad || 0) + 1;
    return nuevoObjeto;
  }
  
  const personaConEdadIncrementada = incrementarEdad(persona);
  
  console.log(persona);
  console.log(personaConEdadIncrementada);
  


