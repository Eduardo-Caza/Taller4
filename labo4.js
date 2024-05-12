const Anime = {
  Titulo : "Mushoku Tensei II: Isekai Ittara Honki Dasu",
  Tipo_Anime : {
      Estado : "Emision",
      N_Temporadas : "2",
      N_Capitulos : 51,
      Categorias: {
          Fantasia : "Si",
          Drama : "Si",
          Isekai : "Si"
      },
  },
  Clasificacion: "+13",
  Valoracion: 4.7,
  Calidad : "HD"
}

const {Titulo, Clasificacion, Valoracion, Tipo_Anime:{Estado, N_Temporadas, Categorias:{Fantasia, Drama, Isekai}}} = Anime;
console.log(Titulo, Clasificacion, Valoracion, Estado, N_Temporadas, Fantasia, Drama, Isekai);

// Arreglo

const Anime2 = [
  {
      Tipo : "Anime",
      Titulo : "Kimetsu no Yaiba: Hashira Geiko-hen",
      Duracion : "4 temporadas"
  },
  {
      Tipo : "Pelicula",
      Titulo : "Your Name",
      Duracion : "1h 47min"
  },
  {
      Tipo : "Anime",
      Titulo : "Kono Subarashii Sekai ni Shukufuku wo!",
      Duracion : "3 temporadas"
  }
]

const Producto_View = Anime2.map((p) => {
  return {
      Tipo : p.Tipo.toUpperCase(),
      Titulo : p.Titulo.toUpperCase(),
      Duracion : p.Duracion.toUpperCase()
  }
})

console.log(Producto_View)