//LA PRUEBA CONSTA DE TRES PASOS
/*crear un objeto metodo "hello" que escriba "hello <name> en la consola " */

const objHello = {
  name: "maxi",
  hello: () => console.log(`hello ${objHello.name}`),
};
objHello.hello();

//como deberias hacer para que el name sea inmutable

Object.freeze(objHello);

//escribir una funcion que logue a 5 ciudades que mas se repiten en el array de manera que parezcan de las mas repetidas
//a las menos repetidas
const CITY_LIST = [
  "nashville",
  "los angeles",
  "nashville",
  "menphis",
  "nashville",
  "barcelona",
  "los angeles",
  "sevilla",
  "madrid",
  "barcelona",
  "canary island",
  "london",
  "berlin",
  "madrid",
  "nashville",
  "london",
  "madrid",
];

const cities = {};

const orderCities = (citiesList) => {
  //cantidad que se repite
  citiesList.map((city) => {
    if (!cities[city]) cities[city] = 1;
    else cities[city] += 1;
  });

  //creamos un objeto y almacenamos en el name el nombre de las ciudades y count la cantidad de veces que se repite
  const asignNameYCount = Object.entries(cities).map((city) => {
    return { name: city[0], count: city[1] };
  });
  console.log(asignNameYCount);
  //ordenamos de mayor a menor la cantidad de veces que se repite
  const majoToMinor = asignNameYCount.sort((a, b) => b.count - a.count);

  //acortamos el array
  const shortCities = majoToMinor.slice(0, 5);
  return shortCities;
};

console.log(orderCities(CITY_LIST));
