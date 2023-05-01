
/*Variable*/

const propiedades = [
    {
      name: "Casa de campo",
      description: "Un lugar ideal para descansar de la ciudad",
      src:
        "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
      rooms: 2,
      m: 170
    },
    {
      name: "Casa de playa",
      description: "Despierta tus días oyendo el oceano",
      src:
        "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
      rooms: 2,
      m: 130
    },
    {
      name: "Casa en el centro",
      description: "Ten cerca de ti todo lo que necesitas",
      src:
        "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      rooms: 1,
      m: 80
    },
    {
      name: "Casa rodante",
      description: "Conviertete en un nómada del mundo sin salir de tu casa",
      src:
        "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      rooms: 1,
      m: 6
    },
    {
      name: "Departamento",
      description: "Desde las alturas todo se ve mejor",
      src:
        "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
      rooms: 3,
      m: 200
    },
    {
      name: "Mansión",
      description: "Vive una vida lujosa en la mansión de tus sueños ",
      src:
        "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
      rooms: 5,
      m: 500
    }
  ];

const inputRoom = document.querySelector('#input-room');
const inputMeters1 = document.querySelector('#input-m1');
const inputMeters2 = document.querySelector('#input-m2');
const btnSearch = document.querySelector("#btn-search");
const mainSection = document.querySelector("#main-id-section");
const total = document.querySelector("#total");
const count1 = document.querySelector("#count");
let init1 = '';

/*Functions*/

const between = (x, min, max) => {
  return x >= min && x <= max;
}

const templateInfo = (propiedad) => {
  return `<div class="card">
            <img src= ${propiedad.src} alt=${propiedad.name}>
            <div class="card-text">
              <h2 id="title">${propiedad.name}</h2>
              <div class="main-info">
                <p>Cuartos: ${propiedad.rooms}</p>
                <p>Metros: ${propiedad.m}</p>
              </div>
              <p id="description">${propiedad.description}</p>
            </div>
            <button class="btn" >Ver más</button>
          </div>`;
}

/*----------------------------------------------------------------*/

/*Add initial Card info */

for (let propiedad of propiedades) {
  init1 +=templateInfo(propiedad)
}

mainSection.innerHTML = init1;

/*Filter functionality*/

btnSearch.addEventListener( 'click', (event) => {
  let html = '';
  let count = 0;
  for (let propiedad of propiedades) {
    if (propiedad.rooms == inputRoom.value
      && (between(propiedad.m,inputMeters1.value,inputMeters2.value))) {
        html +=templateInfo(propiedad)
      count +=1
    };
  };
  mainSection.innerHTML = html;
  count1.innerHTML = count
})