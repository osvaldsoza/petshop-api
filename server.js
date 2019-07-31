var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

var cachorros = [
  {
    raca: "Golden Retriever",
    genero: "macho",
    castrado: "não",
    dataNascimento: "11/08/2014",
    nome: "Reeves",
    nomeDono: "Baxter Suarez",
    telefoneDono: "(963) 477-3440",
    dataUltimaVezQueTeveNoPet: "18/07/2019"
  },
  {
    raca: "Border Collie",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "01/12/2016",
    nome: "Moore",
    nomeDono: "Dickson Clements",
    telefoneDono: "(831) 421-3306",
    dataUltimaVezQueTeveNoPet: "09/06/2019"
  },
  {
    raca: "Bichon Bolonhês",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "19/08/2016",
    nome: "Webster",
    nomeDono: "Wiley Martin",
    telefoneDono: "(897) 425-3933",
    dataUltimaVezQueTeveNoPet: "30/03/2019"
  },
  {
    raca: "Chihuahua",
    genero: "macho",
    castrado: "não",
    dataNascimento: "22/02/2018",
    nome: "Albert",
    nomeDono: "Jamie Guerra",
    telefoneDono: "(982) 447-2051",
    dataUltimaVezQueTeveNoPet: "06/02/2019"
  },
  {
    raca: "Pitbull",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "18/04/2014",
    nome: "Mccarthy",
    nomeDono: "Keisha Hyde",
    telefoneDono: "(927) 423-3271",
    dataUltimaVezQueTeveNoPet: "20/01/2019"
  },
  {
    raca: "Xoloitzcuintli",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "17/07/2015",
    nome: "Mcconnell",
    nomeDono: "Vega Pena",
    telefoneDono: "(931) 542-3121",
    dataUltimaVezQueTeveNoPet: "21/02/2019"
  },
  {
    raca: "Dogue",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "10/04/2017",
    nome: "Frye",
    nomeDono: "Reynolds Figueroa",
    telefoneDono: "(922) 541-2835",
    dataUltimaVezQueTeveNoPet: "11/02/2019"
  },
  {
    raca: "Kuvasz",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "10/09/2016",
    nome: "Powell",
    nomeDono: "Diaz Ellison",
    telefoneDono: "(840) 461-2691",
    dataUltimaVezQueTeveNoPet: "19/01/2019"
  },
  {
    raca: "Perdigueiro",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "11/05/2014",
    nome: "Wilkerson",
    nomeDono: "Harris Stanley",
    telefoneDono: "(836) 511-3285",
    dataUltimaVezQueTeveNoPet: "04/03/2019"
  },
  {
    raca: "Gos d’Atura",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "04/03/2015",
    nome: "Shaw",
    nomeDono: "Jenkins Gallegos",
    telefoneDono: "(907) 404-2601",
    dataUltimaVezQueTeveNoPet: "19/04/2019"
  },
  {
    raca: "Bull Terrier",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "02/12/2015",
    nome: "Mckinney",
    nomeDono: "Terra Myers",
    telefoneDono: "(949) 515-3078",
    dataUltimaVezQueTeveNoPet: "16/03/2019"
  },
  {
    raca: "Skye Terrier",
    genero: "macho",
    castrado: "não",
    dataNascimento: "23/04/2015",
    nome: "Waller",
    nomeDono: "Zamora Wilder",
    telefoneDono: "(921) 430-3091",
    dataUltimaVezQueTeveNoPet: "11/04/2019"
  },
  {
    raca: "Irlandés",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "10/04/2014",
    nome: "Johnson",
    nomeDono: "Corine Burnett",
    telefoneDono: "(846) 460-2900",
    dataUltimaVezQueTeveNoPet: "18/04/2019"
  },
  {
    raca: "Basenji",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "16/12/2017",
    nome: "Sheppard",
    nomeDono: "Gross Bryant",
    telefoneDono: "(901) 477-2594",
    dataUltimaVezQueTeveNoPet: "16/04/2019"
  },
  {
    raca: "Basset Hound",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "02/06/2019",
    nome: "Mcclain",
    nomeDono: "Sofia Vazquez",
    telefoneDono: "(875) 513-2450",
    dataUltimaVezQueTeveNoPet: "29/01/2019"
  },
  {
    raca: "Yorkshire Terrier",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "01/04/2015",
    nome: "Berg",
    nomeDono: "Estella Decker",
    telefoneDono: "(948) 512-2252",
    dataUltimaVezQueTeveNoPet: "20/06/2019"
  },
  {
    raca: "Weimaraner",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "25/03/2018",
    nome: "Jones",
    nomeDono: "Tara Velazquez",
    telefoneDono: "(983) 492-2108",
    dataUltimaVezQueTeveNoPet: "15/02/2019"
  },
  {
    raca: "Fox Terrier",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "04/06/2017",
    nome: "Stephenson",
    nomeDono: "Stafford Vega",
    telefoneDono: "(947) 403-3552",
    dataUltimaVezQueTeveNoPet: "13/05/2019"
  },
  {
    raca: "Grifo da Bélgica",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "06/06/2014",
    nome: "Workman",
    nomeDono: "Julie Morin",
    telefoneDono: "(886) 597-3649",
    dataUltimaVezQueTeveNoPet: "01/01/2019"
  },
  {
    raca: "Poodle",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "14/10/2018",
    nome: "Shannon",
    nomeDono: "Annmarie Anthony",
    telefoneDono: "(851) 505-2552",
    dataUltimaVezQueTeveNoPet: "17/06/2019"
  },
  {
    raca: "Rhodesian",
    genero: "macho",
    castrado: "não",
    dataNascimento: "12/06/2015",
    nome: "Bolton",
    nomeDono: "Lina Olson",
    telefoneDono: "(994) 409-3048",
    dataUltimaVezQueTeveNoPet: "11/03/2019"
  },
  {
    raca: "Dandie Dinmont Terrier",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "15/08/2018",
    nome: "Carlson",
    nomeDono: "Estrada Dunlap",
    telefoneDono: "(961) 539-2250",
    dataUltimaVezQueTeveNoPet: "20/02/2019"
  },
  {
    raca: "Doberman",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "10/03/2017",
    nome: "Burns",
    nomeDono: "Ramsey Stein",
    telefoneDono: "(977) 502-3406",
    dataUltimaVezQueTeveNoPet: "23/02/2019"
  },
  {
    raca: "Irlandés",
    genero: "macho",
    castrado: "não",
    dataNascimento: "23/12/2016",
    nome: "Hicks",
    nomeDono: "Katie Ratliff",
    telefoneDono: "(840) 449-2083",
    dataUltimaVezQueTeveNoPet: "27/07/2019"
  },
  {
    raca: "Rottweiler",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "15/12/2014",
    nome: "Thornton",
    nomeDono: "Melba Quinn",
    telefoneDono: "(884) 573-3938",
    dataUltimaVezQueTeveNoPet: "30/04/2019"
  },
  {
    raca: "Pug",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "11/01/2016",
    nome: "Weaver",
    nomeDono: "Jan Hubbard",
    telefoneDono: "(838) 468-2052",
    dataUltimaVezQueTeveNoPet: "28/04/2019"
  },
  {
    raca: "Papillon",
    genero: "macho",
    castrado: "não",
    dataNascimento: "14/04/2016",
    nome: "Flowers",
    nomeDono: "Leona Mclaughlin",
    telefoneDono: "(933) 462-3744",
    dataUltimaVezQueTeveNoPet: "13/04/2019"
  },
  {
    raca: "Pinscher",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "06/06/2016",
    nome: "Small",
    nomeDono: "Robinson Conley",
    telefoneDono: "(971) 465-3560",
    dataUltimaVezQueTeveNoPet: "11/04/2019"
  },
  {
    raca: "Border Terrier",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "30/05/2015",
    nome: "Wilson",
    nomeDono: "Tracy Atkins",
    telefoneDono: "(973) 489-2349",
    dataUltimaVezQueTeveNoPet: "23/02/2019"
  },
  {
    raca: "Yorkshire Terrier",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "09/11/2018",
    nome: "Jarvis",
    nomeDono: "Wright Drake",
    telefoneDono: "(995) 584-2422",
    dataUltimaVezQueTeveNoPet: "17/01/2019"
  },
  {
    raca: "King Charles",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "25/02/2015",
    nome: "Hatfield",
    nomeDono: "Workman Hines",
    telefoneDono: "(886) 401-3822",
    dataUltimaVezQueTeveNoPet: "13/05/2019"
  },
  {
    raca: "Spitz Alemão",
    genero: "macho",
    castrado: "não",
    dataNascimento: "16/01/2016",
    nome: "Gross",
    nomeDono: "Burks Dixon",
    telefoneDono: "(842) 417-2166",
    dataUltimaVezQueTeveNoPet: "30/05/2019"
  },
  {
    raca: "Bichon Maltês",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "20/01/2014",
    nome: "Hamilton",
    nomeDono: "Reba Patterson",
    telefoneDono: "(858) 583-2897",
    dataUltimaVezQueTeveNoPet: "17/06/2019"
  },
  {
    raca: "Shiba Inu",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "16/03/2019",
    nome: "Farley",
    nomeDono: "Casandra Macias",
    telefoneDono: "(876) 533-3278",
    dataUltimaVezQueTeveNoPet: "13/06/2019"
  },
  {
    raca: "Shih Tzu",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "06/09/2014",
    nome: "Schultz",
    nomeDono: "Gilda Mcintosh",
    telefoneDono: "(909) 510-3900",
    dataUltimaVezQueTeveNoPet: "09/02/2019"
  },
  {
    raca: "Rottweiler",
    genero: "macho",
    castrado: "não",
    dataNascimento: "25/06/2016",
    nome: "Barry",
    nomeDono: "Nielsen Sherman",
    telefoneDono: "(945) 485-2616",
    dataUltimaVezQueTeveNoPet: "07/01/2019"
  },
  {
    raca: "Terrier",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "27/06/2015",
    nome: "Fleming",
    nomeDono: "Mendez Silva",
    telefoneDono: "(970) 457-2658",
    dataUltimaVezQueTeveNoPet: "27/03/2019"
  },
  {
    raca: "Bichon Frisé",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "03/12/2016",
    nome: "Wells",
    nomeDono: "Charmaine Skinner",
    telefoneDono: "(894) 565-2502",
    dataUltimaVezQueTeveNoPet: "09/02/2019"
  },
  {
    raca: "Irlandés",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "27/05/2015",
    nome: "Pacheco",
    nomeDono: "Casey Lester",
    telefoneDono: "(890) 465-3593",
    dataUltimaVezQueTeveNoPet: "30/07/2019"
  },
  {
    raca: "Leonberger",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "27/12/2017",
    nome: "Morales",
    nomeDono: "Rachelle Pittman",
    telefoneDono: "(830) 582-3498",
    dataUltimaVezQueTeveNoPet: "20/03/2019"
  },
  {
    raca: "Xoloitzcuintli",
    genero: "macho",
    castrado: "não",
    dataNascimento: "12/06/2017",
    nome: "Barr",
    nomeDono: "Lindsey Guthrie",
    telefoneDono: "(998) 459-2722",
    dataUltimaVezQueTeveNoPet: "26/07/2019"
  },
  {
    raca: "Smooth Collie",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "20/05/2015",
    nome: "Pickett",
    nomeDono: "Jefferson Rowe",
    telefoneDono: "(828) 422-2229",
    dataUltimaVezQueTeveNoPet: "25/05/2019"
  },
  {
    raca: "Basenji",
    genero: "macho",
    castrado: "não",
    dataNascimento: "07/01/2019",
    nome: "Ewing",
    nomeDono: "Crawford Chambers",
    telefoneDono: "(950) 565-2500",
    dataUltimaVezQueTeveNoPet: "16/04/2019"
  },
  {
    raca: "Leonberger",
    genero: "macho",
    castrado: "não",
    dataNascimento: "20/06/2016",
    nome: "Scott",
    nomeDono: "Rose Woodward",
    telefoneDono: "(800) 415-3691",
    dataUltimaVezQueTeveNoPet: "02/06/2019"
  },
  {
    raca: "Shih Tzu",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "14/02/2015",
    nome: "Head",
    nomeDono: "Harper Dillard",
    telefoneDono: "(944) 410-3607",
    dataUltimaVezQueTeveNoPet: "17/03/2019"
  },
  {
    raca: "Chihuahua",
    genero: "macho",
    castrado: "não",
    dataNascimento: "20/10/2017",
    nome: "Eaton",
    nomeDono: "Bolton Graves",
    telefoneDono: "(869) 491-2353",
    dataUltimaVezQueTeveNoPet: "22/03/2019"
  },
  {
    raca: "Terra Nova",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "17/07/2017",
    nome: "Barnes",
    nomeDono: "Alvarez Tillman",
    telefoneDono: "(939) 469-2720",
    dataUltimaVezQueTeveNoPet: "16/03/2019"
  },
  {
    raca: "Cairn Terrier",
    genero: "macho",
    castrado: "não",
    dataNascimento: "09/11/2015",
    nome: "Blackwell",
    nomeDono: "Carey Barker",
    telefoneDono: "(827) 402-3738",
    dataUltimaVezQueTeveNoPet: "15/01/2019"
  },
  {
    raca: "Tosa",
    genero: "macho",
    castrado: "não",
    dataNascimento: "01/05/2018",
    nome: "Boyd",
    nomeDono: "Cochran Owen",
    telefoneDono: "(816) 542-3420",
    dataUltimaVezQueTeveNoPet: "18/06/2019"
  },
  {
    raca: "Mastife",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "03/10/2015",
    nome: "Wolf",
    nomeDono: "Tommie Whitfield",
    telefoneDono: "(936) 480-2472",
    dataUltimaVezQueTeveNoPet: "02/03/2019"
  },
  {
    raca: "Pastor",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "06/11/2015",
    nome: "Holden",
    nomeDono: "Cassandra Crane",
    telefoneDono: "(807) 512-3205",
    dataUltimaVezQueTeveNoPet: "01/02/2019"
  },
  {
    raca: "Cirneco do Etna",
    genero: "macho",
    castrado: "não",
    dataNascimento: "15/07/2017",
    nome: "Lawrence",
    nomeDono: "Tanya Guzman",
    telefoneDono: "(827) 563-2500",
    dataUltimaVezQueTeveNoPet: "30/06/2019"
  },
  {
    raca: "Tosa",
    genero: "macho",
    castrado: "não",
    dataNascimento: "24/08/2017",
    nome: "Walter",
    nomeDono: "Edith Barton",
    telefoneDono: "(833) 441-2913",
    dataUltimaVezQueTeveNoPet: "03/04/2019"
  },
  {
    raca: "Terra Nova",
    genero: "macho",
    castrado: "não",
    dataNascimento: "13/05/2017",
    nome: "Hansen",
    nomeDono: "Daugherty Kinney",
    telefoneDono: "(830) 535-2003",
    dataUltimaVezQueTeveNoPet: "21/05/2019"
  },
  {
    raca: "Doberman",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "04/10/2014",
    nome: "Hendricks",
    nomeDono: "Brock Gilmore",
    telefoneDono: "(832) 526-3413",
    dataUltimaVezQueTeveNoPet: "19/06/2019"
  },
  {
    raca: "Collie",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "27/05/2014",
    nome: "Greene",
    nomeDono: "Colette Kirby",
    telefoneDono: "(924) 496-2409",
    dataUltimaVezQueTeveNoPet: "06/01/2019"
  },
  {
    raca: "Laika",
    genero: "macho",
    castrado: "não",
    dataNascimento: "30/11/2018",
    nome: "Torres",
    nomeDono: "Lupe Cook",
    telefoneDono: "(916) 584-2348",
    dataUltimaVezQueTeveNoPet: "13/02/2019"
  },
  {
    raca: "Afegão",
    genero: "macho",
    castrado: "não",
    dataNascimento: "23/03/2018",
    nome: "Klein",
    nomeDono: "Dixie Howell",
    telefoneDono: "(841) 513-3995",
    dataUltimaVezQueTeveNoPet: "16/02/2019"
  },
  {
    raca: "Rottweiler",
    genero: "macho",
    castrado: "não",
    dataNascimento: "18/07/2019",
    nome: "Pennington",
    nomeDono: "Neva Doyle",
    telefoneDono: "(955) 564-2058",
    dataUltimaVezQueTeveNoPet: "14/02/2019"
  },
  {
    raca: "Terrier",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "25/05/2015",
    nome: "Nelson",
    nomeDono: "Felecia Webb",
    telefoneDono: "(960) 533-3419",
    dataUltimaVezQueTeveNoPet: "14/01/2019"
  },
  {
    raca: "Dálmata",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "12/06/2018",
    nome: "Kirk",
    nomeDono: "Ilene Davenport",
    telefoneDono: "(819) 494-3835",
    dataUltimaVezQueTeveNoPet: "25/01/2019"
  },
  {
    raca: "Border Collie",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "27/03/2016",
    nome: "Moss",
    nomeDono: "Crosby Montoya",
    telefoneDono: "(983) 531-2344",
    dataUltimaVezQueTeveNoPet: "02/01/2019"
  },
  {
    raca: "Terra Nova",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "01/07/2015",
    nome: "Marsh",
    nomeDono: "Floyd Wiggins",
    telefoneDono: "(932) 454-3497",
    dataUltimaVezQueTeveNoPet: "03/01/2019"
  },
  {
    raca: "Bernese Mountain Dog",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "07/01/2016",
    nome: "Wilkins",
    nomeDono: "Chandler Pruitt",
    telefoneDono: "(950) 475-3672",
    dataUltimaVezQueTeveNoPet: "13/02/2019"
  },
  {
    raca: "Bichon Havanês",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "19/10/2016",
    nome: "Cannon",
    nomeDono: "Lester Robles",
    telefoneDono: "(874) 512-2553",
    dataUltimaVezQueTeveNoPet: "15/01/2019"
  },
  {
    raca: "Airedale Terrier",
    genero: "macho",
    castrado: "não",
    dataNascimento: "12/07/2016",
    nome: "Zamora",
    nomeDono: "Gale Rivas",
    telefoneDono: "(871) 407-2147",
    dataUltimaVezQueTeveNoPet: "19/07/2019"
  },
  {
    raca: "Spitz Alemão",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "25/06/2017",
    nome: "Whitney",
    nomeDono: "Mindy Oneal",
    telefoneDono: "(817) 464-2640",
    dataUltimaVezQueTeveNoPet: "17/06/2019"
  },
  {
    raca: "Tosa",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "06/07/2015",
    nome: "Watson",
    nomeDono: "Harriett Bates",
    telefoneDono: "(976) 427-3241",
    dataUltimaVezQueTeveNoPet: "14/02/2019"
  },
  {
    raca: "Akita Inu",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "28/12/2017",
    nome: "Saunders",
    nomeDono: "Selma Wright",
    telefoneDono: "(883) 571-2760",
    dataUltimaVezQueTeveNoPet: "03/04/2019"
  },
  {
    raca: "Bloodhound",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "15/04/2017",
    nome: "Davidson",
    nomeDono: "Goff Warren",
    telefoneDono: "(991) 447-2621",
    dataUltimaVezQueTeveNoPet: "28/07/2019"
  },
  {
    raca: "Alemão",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "01/07/2014",
    nome: "Stone",
    nomeDono: "Sheryl Hurst",
    telefoneDono: "(822) 405-3281",
    dataUltimaVezQueTeveNoPet: "03/02/2019"
  },
  {
    raca: "Bull Terrier",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "03/12/2018",
    nome: "Mclean",
    nomeDono: "Horn Reid",
    telefoneDono: "(947) 469-3416",
    dataUltimaVezQueTeveNoPet: "26/02/2019"
  },
  {
    raca: "King Charles",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "23/09/2015",
    nome: "Key",
    nomeDono: "Amalia Copeland",
    telefoneDono: "(872) 500-2802",
    dataUltimaVezQueTeveNoPet: "13/04/2019"
  },
  {
    raca: "Barbet",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "21/06/2015",
    nome: "Wilcox",
    nomeDono: "Bates Cotton",
    telefoneDono: "(890) 472-2944",
    dataUltimaVezQueTeveNoPet: "18/07/2019"
  },
  {
    raca: "Labrador Retriever",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "22/07/2017",
    nome: "Wood",
    nomeDono: "Magdalena Herring",
    telefoneDono: "(986) 490-3909",
    dataUltimaVezQueTeveNoPet: "13/03/2019"
  },
  {
    raca: "Yorkshire Terrier",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "23/04/2015",
    nome: "Harmon",
    nomeDono: "Debra Patrick",
    telefoneDono: "(880) 562-3100",
    dataUltimaVezQueTeveNoPet: "29/03/2019"
  },
  {
    raca: "Basenji",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "18/07/2017",
    nome: "Calhoun",
    nomeDono: "Catherine Holman",
    telefoneDono: "(975) 443-2003",
    dataUltimaVezQueTeveNoPet: "14/05/2019"
  },
  {
    raca: "Shiba Inu",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "08/09/2018",
    nome: "Perry",
    nomeDono: "Hess Love",
    telefoneDono: "(989) 570-2637",
    dataUltimaVezQueTeveNoPet: "11/07/2019"
  },
  {
    raca: "Fox Terrier",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "26/09/2015",
    nome: "Ray",
    nomeDono: "Petersen Stafford",
    telefoneDono: "(889) 591-2326",
    dataUltimaVezQueTeveNoPet: "11/06/2019"
  },
  {
    raca: "Galgo",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "17/02/2018",
    nome: "Velez",
    nomeDono: "Mclean Wooten",
    telefoneDono: "(831) 598-2119",
    dataUltimaVezQueTeveNoPet: "03/06/2019"
  },
  {
    raca: "Sem Raça Definida",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "02/03/2014",
    nome: "Compton",
    nomeDono: "Marie Oneill",
    telefoneDono: "(925) 425-2366",
    dataUltimaVezQueTeveNoPet: "04/02/2019"
  },
  {
    raca: "Cane Corso",
    genero: "macho",
    castrado: "não",
    dataNascimento: "13/06/2019",
    nome: "Vasquez",
    nomeDono: "Kellie Moon",
    telefoneDono: "(861) 595-2584",
    dataUltimaVezQueTeveNoPet: "17/05/2019"
  },
  {
    raca: "Scottish Terrier",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "15/07/2014",
    nome: "Matthews",
    nomeDono: "Wagner Frank",
    telefoneDono: "(821) 487-3103",
    dataUltimaVezQueTeveNoPet: "24/05/2019"
  },
  {
    raca: "Laika",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "09/10/2016",
    nome: "Foley",
    nomeDono: "Stanley Jacobs",
    telefoneDono: "(963) 581-3551",
    dataUltimaVezQueTeveNoPet: "16/07/2019"
  },
  {
    raca: "Pastor",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "11/02/2017",
    nome: "Fisher",
    nomeDono: "Kelly Noble",
    telefoneDono: "(910) 410-3811",
    dataUltimaVezQueTeveNoPet: "17/07/2019"
  },
  {
    raca: "Rottweiler",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "25/06/2019",
    nome: "Cherry",
    nomeDono: "Savage Holmes",
    telefoneDono: "(932) 456-3399",
    dataUltimaVezQueTeveNoPet: "23/04/2019"
  },
  {
    raca: "Terra Nova",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "14/06/2019",
    nome: "Fields",
    nomeDono: "Knight Robbins",
    telefoneDono: "(955) 522-2935",
    dataUltimaVezQueTeveNoPet: "19/06/2019"
  },
  {
    raca: "Sem Raça Definida",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "25/06/2015",
    nome: "Sims",
    nomeDono: "Griffin Young",
    telefoneDono: "(840) 460-2429",
    dataUltimaVezQueTeveNoPet: "23/02/2019"
  },
  {
    raca: "Galgo",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "01/07/2015",
    nome: "Reese",
    nomeDono: "Annette Camacho",
    telefoneDono: "(896) 466-2905",
    dataUltimaVezQueTeveNoPet: "06/07/2019"
  },
  {
    raca: "Bichon Maltês",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "06/05/2016",
    nome: "Cruz",
    nomeDono: "Ashley Sutton",
    telefoneDono: "(910) 440-2460",
    dataUltimaVezQueTeveNoPet: "04/02/2019"
  },
  {
    raca: "Xoloitzcuintli",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "18/11/2016",
    nome: "Hoffman",
    nomeDono: "Snider Padilla",
    telefoneDono: "(994) 518-2373",
    dataUltimaVezQueTeveNoPet: "03/05/2019"
  },
  {
    raca: "Weimaraner",
    genero: "macho",
    castrado: "não",
    dataNascimento: "16/12/2018",
    nome: "Horn",
    nomeDono: "Lana Potter",
    telefoneDono: "(815) 521-2918",
    dataUltimaVezQueTeveNoPet: "29/03/2019"
  },
  {
    raca: "Pinscher",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "07/05/2016",
    nome: "Cote",
    nomeDono: "Alejandra Meyers",
    telefoneDono: "(873) 531-3260",
    dataUltimaVezQueTeveNoPet: "27/07/2019"
  },
  {
    raca: "Dogue",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "22/10/2017",
    nome: "Kelly",
    nomeDono: "Lara Palmer",
    telefoneDono: "(948) 491-3028",
    dataUltimaVezQueTeveNoPet: "16/04/2019"
  },
  {
    raca: "Samoieda",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "10/09/2018",
    nome: "Knox",
    nomeDono: "Blanchard Garrett",
    telefoneDono: "(844) 508-2384",
    dataUltimaVezQueTeveNoPet: "27/04/2019"
  },
  {
    raca: "Border Collie",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "12/08/2014",
    nome: "Cabrera",
    nomeDono: "Christa Goodman",
    telefoneDono: "(985) 423-3213",
    dataUltimaVezQueTeveNoPet: "04/04/2019"
  },
  {
    raca: "Affenpinscher",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "15/07/2019",
    nome: "Garza",
    nomeDono: "Geneva Walton",
    telefoneDono: "(866) 425-2960",
    dataUltimaVezQueTeveNoPet: "25/05/2019"
  },
  {
    raca: "Foxhound",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "08/04/2015",
    nome: "Lara",
    nomeDono: "Paige Tate",
    telefoneDono: "(879) 419-3602",
    dataUltimaVezQueTeveNoPet: "08/06/2019"
  },
  {
    raca: "Sabueso",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "10/08/2018",
    nome: "Fernandez",
    nomeDono: "Letitia Jensen",
    telefoneDono: "(880) 459-3133",
    dataUltimaVezQueTeveNoPet: "19/01/2019"
  },
  {
    raca: "Border Terrier",
    genero: "macho",
    castrado: "não",
    dataNascimento: "19/03/2015",
    nome: "Fitzgerald",
    nomeDono: "Moreno Boyle",
    telefoneDono: "(803) 446-3689",
    dataUltimaVezQueTeveNoPet: "16/07/2019"
  },
  {
    raca: "Grande Boiadeiro",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "03/06/2014",
    nome: "Huffman",
    nomeDono: "Bridget Kidd",
    telefoneDono: "(981) 578-3696",
    dataUltimaVezQueTeveNoPet: "29/01/2019"
  },
  {
    raca: "Mastife",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "13/02/2017",
    nome: "Wiley",
    nomeDono: "Pearson Goodwin",
    telefoneDono: "(853) 451-3590",
    dataUltimaVezQueTeveNoPet: "04/04/2019"
  },
  {
    raca: "Poodle",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "21/12/2018",
    nome: "Murphy",
    nomeDono: "Rosario Black",
    telefoneDono: "(982) 559-3534",
    dataUltimaVezQueTeveNoPet: "09/03/2019"
  },
  {
    raca: "Alano",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "17/11/2017",
    nome: "Leonard",
    nomeDono: "Maxine Ayers",
    telefoneDono: "(902) 429-2979",
    dataUltimaVezQueTeveNoPet: "26/02/2019"
  },
  {
    raca: "Grande Boiadeiro",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "31/12/2014",
    nome: "Marshall",
    nomeDono: "Baldwin Taylor",
    telefoneDono: "(828) 491-2942",
    dataUltimaVezQueTeveNoPet: "07/01/2019"
  },
  {
    raca: "Collie",
    genero: "macho",
    castrado: "não",
    dataNascimento: "23/03/2018",
    nome: "Frederick",
    nomeDono: "Young Waters",
    telefoneDono: "(843) 504-3945",
    dataUltimaVezQueTeveNoPet: "06/03/2019"
  },
  {
    raca: "Pointer",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "18/05/2017",
    nome: "Colon",
    nomeDono: "Byrd Thomas",
    telefoneDono: "(825) 553-3489",
    dataUltimaVezQueTeveNoPet: "22/03/2019"
  },
  {
    raca: "Papillon",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "16/12/2018",
    nome: "Roberts",
    nomeDono: "Molly Austin",
    telefoneDono: "(932) 476-2027",
    dataUltimaVezQueTeveNoPet: "28/03/2019"
  },
  {
    raca: "Spitz Alemão",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "28/07/2019",
    nome: "Baker",
    nomeDono: "Ruby Martinez",
    telefoneDono: "(915) 589-3886",
    dataUltimaVezQueTeveNoPet: "14/05/2019"
  },
  {
    raca: "Laika",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "06/11/2015",
    nome: "Roberson",
    nomeDono: "Chen Mckee",
    telefoneDono: "(887) 595-3845",
    dataUltimaVezQueTeveNoPet: "15/03/2019"
  },
  {
    raca: "Bull Terrier",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "18/04/2017",
    nome: "Tyler",
    nomeDono: "Holly Nash",
    telefoneDono: "(915) 512-3135",
    dataUltimaVezQueTeveNoPet: "19/02/2019"
  },
  {
    raca: "Bichon Havanês",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "21/06/2017",
    nome: "Rocha",
    nomeDono: "Marshall Trujillo",
    telefoneDono: "(851) 561-2256",
    dataUltimaVezQueTeveNoPet: "06/02/2019"
  },
  {
    raca: "Akita Americano",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "07/10/2014",
    nome: "Battle",
    nomeDono: "Violet Cummings",
    telefoneDono: "(817) 400-3435",
    dataUltimaVezQueTeveNoPet: "08/01/2019"
  },
  {
    raca: "Irlandés",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "23/06/2014",
    nome: "Frost",
    nomeDono: "Patel Stephens",
    telefoneDono: "(944) 532-2786",
    dataUltimaVezQueTeveNoPet: "14/05/2019"
  },
  {
    raca: "Pequinês",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "24/06/2017",
    nome: "Terry",
    nomeDono: "Ida Lopez",
    telefoneDono: "(807) 473-2378",
    dataUltimaVezQueTeveNoPet: "24/06/2019"
  },
  {
    raca: "Malamute-do-Alasca",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "09/07/2017",
    nome: "Odonnell",
    nomeDono: "Marcia Hickman",
    telefoneDono: "(992) 511-3005",
    dataUltimaVezQueTeveNoPet: "29/06/2019"
  },
  {
    raca: "SilKy Terrier",
    genero: "macho",
    castrado: "não",
    dataNascimento: "29/01/2016",
    nome: "Hebert",
    nomeDono: "Amparo Forbes",
    telefoneDono: "(823) 420-2962",
    dataUltimaVezQueTeveNoPet: "01/03/2019"
  },
  {
    raca: "Chihuahua",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "05/06/2016",
    nome: "Daniel",
    nomeDono: "Josie Rodriquez",
    telefoneDono: "(907) 470-2090",
    dataUltimaVezQueTeveNoPet: "08/03/2019"
  },
  {
    raca: "Beagle Harrier",
    genero: "macho",
    castrado: "não",
    dataNascimento: "03/01/2017",
    nome: "Harper",
    nomeDono: "Rachael Mcpherson",
    telefoneDono: "(971) 528-2932",
    dataUltimaVezQueTeveNoPet: "05/03/2019"
  },
  {
    raca: "Borzoi",
    genero: "macho",
    castrado: "não",
    dataNascimento: "02/11/2014",
    nome: "Hayden",
    nomeDono: "Sweeney Cooley",
    telefoneDono: "(864) 485-2449",
    dataUltimaVezQueTeveNoPet: "05/01/2019"
  },
  {
    raca: "Perdigueiro",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "07/02/2015",
    nome: "Alexander",
    nomeDono: "Ayala Ruiz",
    telefoneDono: "(975) 558-3319",
    dataUltimaVezQueTeveNoPet: "30/06/2019"
  },
  {
    raca: "Mastin",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "09/11/2017",
    nome: "Livingston",
    nomeDono: "Jennings Erickson",
    telefoneDono: "(829) 533-3937",
    dataUltimaVezQueTeveNoPet: "31/03/2019"
  },
  {
    raca: "Akita Americano",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "27/03/2019",
    nome: "Pierce",
    nomeDono: "Newton Finley",
    telefoneDono: "(984) 516-2102",
    dataUltimaVezQueTeveNoPet: "14/02/2019"
  },
  {
    raca: "Buldogue",
    genero: "macho",
    castrado: "não",
    dataNascimento: "23/06/2019",
    nome: "Mejia",
    nomeDono: "Kay Acevedo",
    telefoneDono: "(848) 443-2960",
    dataUltimaVezQueTeveNoPet: "03/07/2019"
  },
  {
    raca: "Rottweiler",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "01/09/2018",
    nome: "Norman",
    nomeDono: "Dolores Bird",
    telefoneDono: "(876) 531-2687",
    dataUltimaVezQueTeveNoPet: "15/02/2019"
  },
  {
    raca: "Alemão",
    genero: "macho",
    castrado: "não",
    dataNascimento: "27/11/2016",
    nome: "Contreras",
    nomeDono: "Marina Heath",
    telefoneDono: "(810) 446-3813",
    dataUltimaVezQueTeveNoPet: "21/06/2019"
  },
  {
    raca: "Laika",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "12/01/2015",
    nome: "Rutledge",
    nomeDono: "Larson Hart",
    telefoneDono: "(960) 484-2600",
    dataUltimaVezQueTeveNoPet: "17/06/2019"
  },
  {
    raca: "Samoieda",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "29/10/2014",
    nome: "Pace",
    nomeDono: "Teresa Brooks",
    telefoneDono: "(879) 495-3450",
    dataUltimaVezQueTeveNoPet: "26/02/2019"
  },
  {
    raca: "Husky Siberiano",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "21/05/2016",
    nome: "Knapp",
    nomeDono: "Wade Rollins",
    telefoneDono: "(979) 447-2460",
    dataUltimaVezQueTeveNoPet: "24/01/2019"
  },
  {
    raca: "Gos d’Atura",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "03/10/2016",
    nome: "Mann",
    nomeDono: "Jacqueline Chase",
    telefoneDono: "(857) 557-2193",
    dataUltimaVezQueTeveNoPet: "14/07/2019"
  },
  {
    raca: "Pequinês",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "31/12/2017",
    nome: "Miles",
    nomeDono: "Oneal Ferguson",
    telefoneDono: "(885) 426-2646",
    dataUltimaVezQueTeveNoPet: "26/03/2019"
  },
  {
    raca: "Mastife",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "16/06/2019",
    nome: "Henson",
    nomeDono: "Lamb Randolph",
    telefoneDono: "(819) 596-3598",
    dataUltimaVezQueTeveNoPet: "21/04/2019"
  },
  {
    raca: "Pinscher",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "07/12/2018",
    nome: "Mercer",
    nomeDono: "Helena Mcleod",
    telefoneDono: "(895) 567-3309",
    dataUltimaVezQueTeveNoPet: "16/03/2019"
  },
  {
    raca: "Xoloitzcuintli",
    genero: "macho",
    castrado: "não",
    dataNascimento: "25/01/2014",
    nome: "Pratt",
    nomeDono: "Chavez Baxter",
    telefoneDono: "(984) 432-2722",
    dataUltimaVezQueTeveNoPet: "23/01/2019"
  },
  {
    raca: "Akita Americano",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "08/04/2018",
    nome: "Chan",
    nomeDono: "Sharpe Gonzales",
    telefoneDono: "(843) 484-3307",
    dataUltimaVezQueTeveNoPet: "29/01/2019"
  },
  {
    raca: "Smooth Collie",
    genero: "macho",
    castrado: "não",
    dataNascimento: "25/09/2016",
    nome: "Blake",
    nomeDono: "Nina Flores",
    telefoneDono: "(961) 499-3503",
    dataUltimaVezQueTeveNoPet: "07/07/2019"
  },
  {
    raca: "Norfolk Terrier",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "29/07/2015",
    nome: "Adkins",
    nomeDono: "Chris Mcfarland",
    telefoneDono: "(839) 540-3314",
    dataUltimaVezQueTeveNoPet: "07/07/2019"
  },
  {
    raca: "Lhasa Apso",
    genero: "macho",
    castrado: "não",
    dataNascimento: "24/09/2017",
    nome: "Gray",
    nomeDono: "Lang Bright",
    telefoneDono: "(812) 589-2923",
    dataUltimaVezQueTeveNoPet: "16/03/2019"
  },
  {
    raca: "Bichon Frisé",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "23/11/2017",
    nome: "Gay",
    nomeDono: "Camille Deleon",
    telefoneDono: "(874) 446-2776",
    dataUltimaVezQueTeveNoPet: "08/04/2019"
  },
  {
    raca: "Saluki",
    genero: "macho",
    castrado: "não",
    dataNascimento: "08/05/2015",
    nome: "Harrington",
    nomeDono: "Velasquez Puckett",
    telefoneDono: "(967) 510-2198",
    dataUltimaVezQueTeveNoPet: "27/03/2019"
  },
  {
    raca: "Komondor",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "25/01/2018",
    nome: "Walker",
    nomeDono: "Elena Castaneda",
    telefoneDono: "(858) 481-2729",
    dataUltimaVezQueTeveNoPet: "25/07/2019"
  },
  {
    raca: "Cirneco do Etna",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "09/07/2014",
    nome: "Vaughn",
    nomeDono: "Jordan Francis",
    telefoneDono: "(805) 421-2757",
    dataUltimaVezQueTeveNoPet: "18/03/2019"
  },
  {
    raca: "Terrier",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "17/01/2019",
    nome: "Richardson",
    nomeDono: "Harrell Stevenson",
    telefoneDono: "(936) 590-3585",
    dataUltimaVezQueTeveNoPet: "27/01/2019"
  },
  {
    raca: "Cane Corso",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "13/05/2017",
    nome: "Ward",
    nomeDono: "Fletcher Stokes",
    telefoneDono: "(993) 476-2357",
    dataUltimaVezQueTeveNoPet: "06/01/2019"
  },
  {
    raca: "Bloodhound",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "13/11/2014",
    nome: "Browning",
    nomeDono: "Shauna Yang",
    telefoneDono: "(914) 569-2819",
    dataUltimaVezQueTeveNoPet: "04/02/2019"
  },
  {
    raca: "Golden Retriever",
    genero: "macho",
    castrado: "não",
    dataNascimento: "11/09/2016",
    nome: "Fischer",
    nomeDono: "Staci Villarreal",
    telefoneDono: "(917) 455-3737",
    dataUltimaVezQueTeveNoPet: "08/03/2019"
  },
  {
    raca: "Labrador Retriever",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "09/10/2018",
    nome: "Phelps",
    nomeDono: "Stone Todd",
    telefoneDono: "(984) 428-2801",
    dataUltimaVezQueTeveNoPet: "13/04/2019"
  },
  {
    raca: "Yorkshire Terrier",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "13/06/2014",
    nome: "Vargas",
    nomeDono: "Fox Bishop",
    telefoneDono: "(951) 494-2394",
    dataUltimaVezQueTeveNoPet: "08/05/2019"
  },
  {
    raca: "Whippet",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "13/06/2019",
    nome: "Cash",
    nomeDono: "Irwin Raymond",
    telefoneDono: "(825) 567-2155",
    dataUltimaVezQueTeveNoPet: "20/03/2019"
  },
  {
    raca: "Mastife",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "16/12/2018",
    nome: "Mcguire",
    nomeDono: "Twila Mack",
    telefoneDono: "(890) 569-3000",
    dataUltimaVezQueTeveNoPet: "12/06/2019"
  },
  {
    raca: "Papillon",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "11/01/2015",
    nome: "Mueller",
    nomeDono: "Augusta Barber",
    telefoneDono: "(804) 457-3011",
    dataUltimaVezQueTeveNoPet: "16/03/2019"
  },
  {
    raca: "Bichon Frisé",
    genero: "macho",
    castrado: "não",
    dataNascimento: "14/06/2019",
    nome: "Mcfadden",
    nomeDono: "Henderson Meyer",
    telefoneDono: "(951) 506-2879",
    dataUltimaVezQueTeveNoPet: "07/02/2019"
  },
  {
    raca: "Mastife",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "13/03/2014",
    nome: "Franco",
    nomeDono: "Buckner Mendoza",
    telefoneDono: "(883) 504-2170",
    dataUltimaVezQueTeveNoPet: "28/07/2019"
  },
  {
    raca: "Collie",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "07/04/2016",
    nome: "Dyer",
    nomeDono: "Black Reynolds",
    telefoneDono: "(903) 568-3550",
    dataUltimaVezQueTeveNoPet: "10/07/2019"
  },
  {
    raca: "Boston Terrier",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "12/10/2016",
    nome: "Reed",
    nomeDono: "Faulkner Woodard",
    telefoneDono: "(856) 586-3298",
    dataUltimaVezQueTeveNoPet: "31/12/2018"
  },
  {
    raca: "Alano",
    genero: "macho",
    castrado: "não",
    dataNascimento: "03/05/2015",
    nome: "Carrillo",
    nomeDono: "Suarez Luna",
    telefoneDono: "(958) 549-2887",
    dataUltimaVezQueTeveNoPet: "20/04/2019"
  },
  {
    raca: "Weimaraner",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "16/03/2017",
    nome: "Blankenship",
    nomeDono: "Lowery Holt",
    telefoneDono: "(857) 502-2575",
    dataUltimaVezQueTeveNoPet: "03/05/2019"
  },
  {
    raca: "Bichon Maltês",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "31/12/2017",
    nome: "Guerrero",
    nomeDono: "Maritza Tran",
    telefoneDono: "(958) 463-2060",
    dataUltimaVezQueTeveNoPet: "12/05/2019"
  },
  {
    raca: "Leonberger",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "25/02/2018",
    nome: "Mckay",
    nomeDono: "Carrie Sosa",
    telefoneDono: "(928) 563-3554",
    dataUltimaVezQueTeveNoPet: "07/01/2019"
  },
  {
    raca: "Barbet",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "26/02/2015",
    nome: "Richmond",
    nomeDono: "Tessa Coffey",
    telefoneDono: "(994) 570-2548",
    dataUltimaVezQueTeveNoPet: "14/02/2019"
  },
  {
    raca: "Akita Americano",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "21/02/2015",
    nome: "Orr",
    nomeDono: "Savannah Huff",
    telefoneDono: "(918) 498-2410",
    dataUltimaVezQueTeveNoPet: "23/04/2019"
  },
  {
    raca: "Buldogue",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "01/02/2018",
    nome: "Simmons",
    nomeDono: "Ball York",
    telefoneDono: "(950) 505-3901",
    dataUltimaVezQueTeveNoPet: "27/01/2019"
  },
  {
    raca: "Irlandés",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "25/01/2017",
    nome: "Gill",
    nomeDono: "Bettie Tyson",
    telefoneDono: "(999) 467-3960",
    dataUltimaVezQueTeveNoPet: "16/01/2019"
  },
  {
    raca: "Mastife",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "27/01/2018",
    nome: "William",
    nomeDono: "Cherry Crawford",
    telefoneDono: "(944) 430-2382",
    dataUltimaVezQueTeveNoPet: "24/05/2019"
  },
  {
    raca: "Terrier",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "09/10/2015",
    nome: "Bush",
    nomeDono: "Billie Kramer",
    telefoneDono: "(953) 528-2321",
    dataUltimaVezQueTeveNoPet: "14/04/2019"
  },
  {
    raca: "Rhodesian",
    genero: "macho",
    castrado: "não",
    dataNascimento: "24/03/2017",
    nome: "Sloan",
    nomeDono: "Quinn Weber",
    telefoneDono: "(829) 438-2834",
    dataUltimaVezQueTeveNoPet: "31/03/2019"
  },
  {
    raca: "Staffordshire Bull Terrier",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "03/05/2017",
    nome: "Richard",
    nomeDono: "Deleon Wagner",
    telefoneDono: "(817) 513-2626",
    dataUltimaVezQueTeveNoPet: "13/02/2019"
  },
  {
    raca: "Dogue",
    genero: "macho",
    castrado: "não",
    dataNascimento: "07/01/2018",
    nome: "Mullen",
    nomeDono: "Fernandez Serrano",
    telefoneDono: "(931) 563-3564",
    dataUltimaVezQueTeveNoPet: "23/01/2019"
  },
  {
    raca: "Bullmastiff",
    genero: "macho",
    castrado: "não",
    dataNascimento: "19/07/2016",
    nome: "Franks",
    nomeDono: "Angela Michael",
    telefoneDono: "(836) 474-3541",
    dataUltimaVezQueTeveNoPet: "13/02/2019"
  },
  {
    raca: "Dogue",
    genero: "macho",
    castrado: "não",
    dataNascimento: "27/04/2018",
    nome: "Medina",
    nomeDono: "Delaney Lynn",
    telefoneDono: "(959) 455-3226",
    dataUltimaVezQueTeveNoPet: "13/02/2019"
  },
  {
    raca: "Bichon Frisé",
    genero: "macho",
    castrado: "não",
    dataNascimento: "09/06/2016",
    nome: "Sampson",
    nomeDono: "Jessica Poole",
    telefoneDono: "(810) 599-3644",
    dataUltimaVezQueTeveNoPet: "12/02/2019"
  },
  {
    raca: "Pointer",
    genero: "macho",
    castrado: "não",
    dataNascimento: "28/04/2015",
    nome: "Whitaker",
    nomeDono: "Carter Cochran",
    telefoneDono: "(967) 500-2642",
    dataUltimaVezQueTeveNoPet: "02/02/2019"
  },
  {
    raca: "Husky Siberiano",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "30/06/2015",
    nome: "Hoover",
    nomeDono: "Mari Dean",
    telefoneDono: "(965) 581-3857",
    dataUltimaVezQueTeveNoPet: "11/07/2019"
  },
  {
    raca: "Grande Boiadeiro",
    genero: "macho",
    castrado: "não",
    dataNascimento: "22/11/2016",
    nome: "Aguilar",
    nomeDono: "Henrietta Rice",
    telefoneDono: "(944) 596-2491",
    dataUltimaVezQueTeveNoPet: "06/05/2019"
  },
  {
    raca: "Alemão",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "30/07/2014",
    nome: "Golden",
    nomeDono: "Anita Melendez",
    telefoneDono: "(917) 472-2356",
    dataUltimaVezQueTeveNoPet: "16/04/2019"
  },
  {
    raca: "São",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "03/03/2016",
    nome: "Gregory",
    nomeDono: "Copeland Wade",
    telefoneDono: "(896) 539-2522",
    dataUltimaVezQueTeveNoPet: "10/04/2019"
  },
  {
    raca: "Maltês",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "13/08/2017",
    nome: "Best",
    nomeDono: "Elsa Fry",
    telefoneDono: "(924) 467-2471",
    dataUltimaVezQueTeveNoPet: "19/07/2019"
  },
  {
    raca: "Terra Nova",
    genero: "macho",
    castrado: "não",
    dataNascimento: "09/11/2017",
    nome: "Bowen",
    nomeDono: "Conner Clemons",
    telefoneDono: "(949) 408-3395",
    dataUltimaVezQueTeveNoPet: "14/05/2019"
  },
  {
    raca: "Sabueso",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "26/02/2018",
    nome: "Ellis",
    nomeDono: "Mclaughlin Chaney",
    telefoneDono: "(878) 552-3646",
    dataUltimaVezQueTeveNoPet: "27/05/2019"
  },
  {
    raca: "Chow Chow",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "21/05/2014",
    nome: "Rogers",
    nomeDono: "Ester Ortega",
    telefoneDono: "(878) 592-3717",
    dataUltimaVezQueTeveNoPet: "18/02/2019"
  },
  {
    raca: "King Charles",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "28/10/2016",
    nome: "Blevins",
    nomeDono: "Kathy Chandler",
    telefoneDono: "(952) 402-2605",
    dataUltimaVezQueTeveNoPet: "24/02/2019"
  },
  {
    raca: "Sem Raça Definida",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "01/11/2014",
    nome: "Griffin",
    nomeDono: "Elvira Mills",
    telefoneDono: "(980) 412-3698",
    dataUltimaVezQueTeveNoPet: "17/04/2019"
  },
  {
    raca: "Sem Raça Definida",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "01/12/2015",
    nome: "Sanchez",
    nomeDono: "Garza Cooke",
    telefoneDono: "(852) 494-2537",
    dataUltimaVezQueTeveNoPet: "16/01/2019"
  },
  {
    raca: "Basenji",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "17/06/2017",
    nome: "Porter",
    nomeDono: "Theresa Duffy",
    telefoneDono: "(984) 458-3477",
    dataUltimaVezQueTeveNoPet: "28/07/2019"
  },
  {
    raca: "Staffordshire Bull Terrier",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "20/10/2014",
    nome: "Fitzpatrick",
    nomeDono: "Campbell Bowman",
    telefoneDono: "(950) 536-2308",
    dataUltimaVezQueTeveNoPet: "22/03/2019"
  },
  {
    raca: "Malamute-do-Alasca",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "14/07/2018",
    nome: "Glass",
    nomeDono: "Alice Flynn",
    telefoneDono: "(990) 578-2690",
    dataUltimaVezQueTeveNoPet: "22/06/2019"
  },
  {
    raca: "Terrier",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "28/12/2015",
    nome: "Dodson",
    nomeDono: "Eileen Brock",
    telefoneDono: "(896) 492-2400",
    dataUltimaVezQueTeveNoPet: "02/01/2019"
  },
  {
    raca: "Spitz Alemão",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "05/10/2017",
    nome: "Benson",
    nomeDono: "Joyner Snow",
    telefoneDono: "(906) 437-3682",
    dataUltimaVezQueTeveNoPet: "20/03/2019"
  },
  {
    raca: "Tosa",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "25/04/2018",
    nome: "Allison",
    nomeDono: "Cathryn Trevino",
    telefoneDono: "(963) 434-3237",
    dataUltimaVezQueTeveNoPet: "06/07/2019"
  },
  {
    raca: "Rhodesian",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "21/02/2015",
    nome: "Maxwell",
    nomeDono: "Frost Estrada",
    telefoneDono: "(973) 444-3551",
    dataUltimaVezQueTeveNoPet: "26/05/2019"
  },
  {
    raca: "Pequinês",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "30/10/2017",
    nome: "Salazar",
    nomeDono: "Charles Valencia",
    telefoneDono: "(870) 539-2170",
    dataUltimaVezQueTeveNoPet: "04/07/2019"
  },
  {
    raca: "Pitbull",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "15/12/2018",
    nome: "Hodge",
    nomeDono: "Taylor Ball",
    telefoneDono: "(964) 541-3095",
    dataUltimaVezQueTeveNoPet: "15/04/2019"
  },
  {
    raca: "King Charles",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "19/10/2015",
    nome: "Peterson",
    nomeDono: "Marietta Rojas",
    telefoneDono: "(971) 483-2903",
    dataUltimaVezQueTeveNoPet: "03/03/2019"
  },
  {
    raca: "Border Collie",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "02/04/2016",
    nome: "Kim",
    nomeDono: "Penelope Herman",
    telefoneDono: "(972) 465-2244",
    dataUltimaVezQueTeveNoPet: "24/04/2019"
  },
  {
    raca: "Grande Boiadeiro",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "09/06/2014",
    nome: "Hutchinson",
    nomeDono: "Manuela Hayes",
    telefoneDono: "(913) 570-3371",
    dataUltimaVezQueTeveNoPet: "19/06/2019"
  },
  {
    raca: "Doberman",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "12/02/2016",
    nome: "Leblanc",
    nomeDono: "Susanne Solis",
    telefoneDono: "(850) 428-3089",
    dataUltimaVezQueTeveNoPet: "10/02/2019"
  },
  {
    raca: "Beagle",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "15/04/2017",
    nome: "Petersen",
    nomeDono: "Glenn Sanders",
    telefoneDono: "(829) 409-2075",
    dataUltimaVezQueTeveNoPet: "10/07/2019"
  },
  {
    raca: "Elkhound",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "18/10/2016",
    nome: "Atkinson",
    nomeDono: "Jennifer Reilly",
    telefoneDono: "(968) 508-2539",
    dataUltimaVezQueTeveNoPet: "30/06/2019"
  },
  {
    raca: "Chihuahua",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "05/11/2015",
    nome: "Montgomery",
    nomeDono: "Morton Reyes",
    telefoneDono: "(947) 578-3225",
    dataUltimaVezQueTeveNoPet: "09/05/2019"
  },
  {
    raca: "Afegão",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "17/02/2019",
    nome: "Dawson",
    nomeDono: "Franklin Mcmillan",
    telefoneDono: "(927) 564-2672",
    dataUltimaVezQueTeveNoPet: "07/06/2019"
  },
  {
    raca: "Bichon Bolonhês",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "25/10/2018",
    nome: "Dotson",
    nomeDono: "Mallory Brewer",
    telefoneDono: "(885) 434-3510",
    dataUltimaVezQueTeveNoPet: "02/05/2019"
  },
  {
    raca: "Jack Russel Terrier",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "14/12/2018",
    nome: "Bass",
    nomeDono: "Allie Long",
    telefoneDono: "(895) 409-3509",
    dataUltimaVezQueTeveNoPet: "28/04/2019"
  },
  {
    raca: "Boxer",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "06/10/2015",
    nome: "Haynes",
    nomeDono: "Cheryl Burgess",
    telefoneDono: "(841) 411-3597",
    dataUltimaVezQueTeveNoPet: "13/07/2019"
  },
  {
    raca: "Norfolk Terrier",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "11/07/2019",
    nome: "Swanson",
    nomeDono: "Brewer Mosley",
    telefoneDono: "(829) 572-2488",
    dataUltimaVezQueTeveNoPet: "16/04/2019"
  },
  {
    raca: "Dálmata",
    genero: "macho",
    castrado: "não",
    dataNascimento: "04/04/2015",
    nome: "Yates",
    nomeDono: "Salinas Page",
    telefoneDono: "(934) 588-2609",
    dataUltimaVezQueTeveNoPet: "14/03/2019"
  },
  {
    raca: "Spitz Alemão",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "06/07/2015",
    nome: "Dickson",
    nomeDono: "Alfreda Conway",
    telefoneDono: "(810) 414-2846",
    dataUltimaVezQueTeveNoPet: "26/02/2019"
  },
  {
    raca: "Terrier",
    genero: "macho",
    castrado: "não",
    dataNascimento: "18/10/2014",
    nome: "Hampton",
    nomeDono: "Wolf Finch",
    telefoneDono: "(986) 486-2089",
    dataUltimaVezQueTeveNoPet: "16/05/2019"
  },
  {
    raca: "Tosa",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "13/08/2015",
    nome: "Bradley",
    nomeDono: "Esmeralda Norton",
    telefoneDono: "(942) 530-3088",
    dataUltimaVezQueTeveNoPet: "05/07/2019"
  },
  {
    raca: "Buldogue",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "10/05/2018",
    nome: "Tanner",
    nomeDono: "Kendra Cameron",
    telefoneDono: "(836) 550-2852",
    dataUltimaVezQueTeveNoPet: "27/02/2019"
  },
  {
    raca: "Akita Americano",
    genero: "macho",
    castrado: "não",
    dataNascimento: "29/06/2014",
    nome: "Joseph",
    nomeDono: "Merle Keith",
    telefoneDono: "(978) 534-3282",
    dataUltimaVezQueTeveNoPet: "14/02/2019"
  },
  {
    raca: "Terra Nova",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "07/12/2018",
    nome: "Bryan",
    nomeDono: "Constance Barlow",
    telefoneDono: "(846) 420-2903",
    dataUltimaVezQueTeveNoPet: "10/04/2019"
  },
  {
    raca: "Dogue",
    genero: "macho",
    castrado: "não",
    dataNascimento: "09/06/2014",
    nome: "Baird",
    nomeDono: "Rena Peters",
    telefoneDono: "(904) 485-2686",
    dataUltimaVezQueTeveNoPet: "05/04/2019"
  },
  {
    raca: "Setter",
    genero: "macho",
    castrado: "não",
    dataNascimento: "20/03/2016",
    nome: "Hardin",
    nomeDono: "Schneider Moody",
    telefoneDono: "(952) 446-2888",
    dataUltimaVezQueTeveNoPet: "06/06/2019"
  },
  {
    raca: "Fox Terrier",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "18/09/2015",
    nome: "Madden",
    nomeDono: "Hazel Terrell",
    telefoneDono: "(976) 425-2190",
    dataUltimaVezQueTeveNoPet: "16/03/2019"
  },
  {
    raca: "Bloodhound",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "26/05/2015",
    nome: "Moreno",
    nomeDono: "Cooper Roach",
    telefoneDono: "(846) 541-2407",
    dataUltimaVezQueTeveNoPet: "10/05/2019"
  },
  {
    raca: "Dogue",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "18/07/2016",
    nome: "Leon",
    nomeDono: "Bullock Hendrix",
    telefoneDono: "(826) 478-3328",
    dataUltimaVezQueTeveNoPet: "15/03/2019"
  },
  {
    raca: "Lhasa Apso",
    genero: "macho",
    castrado: "não",
    dataNascimento: "22/03/2014",
    nome: "Beach",
    nomeDono: "Dorthy Franklin",
    telefoneDono: "(952) 531-3849",
    dataUltimaVezQueTeveNoPet: "24/07/2019"
  },
  {
    raca: "Mastin",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "13/09/2015",
    nome: "Nolan",
    nomeDono: "Tasha Sweet",
    telefoneDono: "(810) 599-2283",
    dataUltimaVezQueTeveNoPet: "20/02/2019"
  },
  {
    raca: "Pequinês",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "25/06/2016",
    nome: "Keller",
    nomeDono: "Callahan Marquez",
    telefoneDono: "(928) 473-2719",
    dataUltimaVezQueTeveNoPet: "07/05/2019"
  },
  {
    raca: "Fox Terrier",
    genero: "macho",
    castrado: "não",
    dataNascimento: "19/08/2016",
    nome: "Casey",
    nomeDono: "Rhonda Townsend",
    telefoneDono: "(874) 413-2995",
    dataUltimaVezQueTeveNoPet: "06/05/2019"
  },
  {
    raca: "São",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "04/01/2015",
    nome: "Rush",
    nomeDono: "Carroll Joyce",
    telefoneDono: "(831) 549-2909",
    dataUltimaVezQueTeveNoPet: "15/04/2019"
  },
  {
    raca: "Doberman",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "19/02/2014",
    nome: "Melton",
    nomeDono: "Pam Mccullough",
    telefoneDono: "(835) 533-2092",
    dataUltimaVezQueTeveNoPet: "02/02/2019"
  },
  {
    raca: "Pequinês",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "14/03/2014",
    nome: "Howard",
    nomeDono: "Natalia Armstrong",
    telefoneDono: "(863) 440-3584",
    dataUltimaVezQueTeveNoPet: "23/06/2019"
  },
  {
    raca: "Norfolk Terrier",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "27/10/2016",
    nome: "Dorsey",
    nomeDono: "Wanda Bridges",
    telefoneDono: "(949) 585-2555",
    dataUltimaVezQueTeveNoPet: "12/01/2019"
  },
  {
    raca: "Husky Siberiano",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "29/03/2016",
    nome: "Pollard",
    nomeDono: "Mooney Collins",
    telefoneDono: "(966) 595-2717",
    dataUltimaVezQueTeveNoPet: "17/06/2019"
  },
  {
    raca: "Xoloitzcuintli",
    genero: "macho",
    castrado: "não",
    dataNascimento: "08/02/2017",
    nome: "Gomez",
    nomeDono: "Yvonne Humphrey",
    telefoneDono: "(847) 568-3609",
    dataUltimaVezQueTeveNoPet: "24/01/2019"
  },
  {
    raca: "Smooth Collie",
    genero: "macho",
    castrado: "não",
    dataNascimento: "08/11/2017",
    nome: "Parrish",
    nomeDono: "Eve Parker",
    telefoneDono: "(984) 409-2709",
    dataUltimaVezQueTeveNoPet: "30/07/2019"
  },
  {
    raca: "Samoieda",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "24/07/2018",
    nome: "Burton",
    nomeDono: "Rosetta Hill",
    telefoneDono: "(834) 444-3161",
    dataUltimaVezQueTeveNoPet: "30/04/2019"
  },
  {
    raca: "Sem Raça Definida",
    genero: "macho",
    castrado: "não",
    dataNascimento: "08/11/2017",
    nome: "Douglas",
    nomeDono: "Finch Hernandez",
    telefoneDono: "(898) 465-2046",
    dataUltimaVezQueTeveNoPet: "17/03/2019"
  },
  {
    raca: "Alemão",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "04/06/2017",
    nome: "Burris",
    nomeDono: "Case Salinas",
    telefoneDono: "(906) 480-2624",
    dataUltimaVezQueTeveNoPet: "17/03/2019"
  },
  {
    raca: "Dandie Dinmont Terrier",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "14/09/2015",
    nome: "Ayala",
    nomeDono: "Annie Lowe",
    telefoneDono: "(957) 417-2855",
    dataUltimaVezQueTeveNoPet: "22/06/2019"
  },
  {
    raca: "Foxhound",
    genero: "macho",
    castrado: "não",
    dataNascimento: "10/09/2017",
    nome: "Mayo",
    nomeDono: "Mcbride Chen",
    telefoneDono: "(818) 550-3381",
    dataUltimaVezQueTeveNoPet: "08/03/2019"
  },
  {
    raca: "São",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "16/01/2015",
    nome: "Shepherd",
    nomeDono: "Paula Mccormick",
    telefoneDono: "(810) 452-2585",
    dataUltimaVezQueTeveNoPet: "04/01/2019"
  },
  {
    raca: "Boston Terrier",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "20/05/2019",
    nome: "Clay",
    nomeDono: "Haney Walls",
    telefoneDono: "(876) 409-2376",
    dataUltimaVezQueTeveNoPet: "19/04/2019"
  },
  {
    raca: "Shih Tzu",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "21/10/2017",
    nome: "Dejesus",
    nomeDono: "Sasha Good",
    telefoneDono: "(885) 422-3483",
    dataUltimaVezQueTeveNoPet: "27/03/2019"
  },
  {
    raca: "Shar-Pei",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "03/12/2016",
    nome: "Soto",
    nomeDono: "Mcclain Valenzuela",
    telefoneDono: "(986) 591-2618",
    dataUltimaVezQueTeveNoPet: "03/03/2019"
  },
  {
    raca: "Xoloitzcuintli",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "04/07/2019",
    nome: "Shepard",
    nomeDono: "Poole Osborne",
    telefoneDono: "(934) 469-2201",
    dataUltimaVezQueTeveNoPet: "17/05/2019"
  },
  {
    raca: "Leonberger",
    genero: "macho",
    castrado: "não",
    dataNascimento: "26/10/2017",
    nome: "Snyder",
    nomeDono: "Phoebe Summers",
    telefoneDono: "(854) 520-2149",
    dataUltimaVezQueTeveNoPet: "03/05/2019"
  },
  {
    raca: "Basset Hound",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "04/03/2018",
    nome: "Delaney",
    nomeDono: "Hill Stevens",
    telefoneDono: "(819) 579-3086",
    dataUltimaVezQueTeveNoPet: "08/07/2019"
  },
  {
    raca: "Sabueso",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "13/07/2017",
    nome: "Hudson",
    nomeDono: "Houston Morton",
    telefoneDono: "(979) 537-2539",
    dataUltimaVezQueTeveNoPet: "17/03/2019"
  },
  {
    raca: "Cirneco do Etna",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "10/07/2017",
    nome: "Garcia",
    nomeDono: "Arline Byers",
    telefoneDono: "(898) 481-2879",
    dataUltimaVezQueTeveNoPet: "27/02/2019"
  },
  {
    raca: "Golden Retriever",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "02/12/2017",
    nome: "England",
    nomeDono: "Harvey Lewis",
    telefoneDono: "(854) 406-3645",
    dataUltimaVezQueTeveNoPet: "04/03/2019"
  },
  {
    raca: "Galgo",
    genero: "macho",
    castrado: "não",
    dataNascimento: "07/09/2017",
    nome: "Morrison",
    nomeDono: "Kirk Hopper",
    telefoneDono: "(922) 564-3118",
    dataUltimaVezQueTeveNoPet: "07/02/2019"
  },
  {
    raca: "Rhodesian",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "01/04/2016",
    nome: "Cortez",
    nomeDono: "Burns Macdonald",
    telefoneDono: "(825) 423-2703",
    dataUltimaVezQueTeveNoPet: "22/05/2019"
  },
  {
    raca: "Affenpinscher",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "03/01/2017",
    nome: "Solomon",
    nomeDono: "Rosanna Carroll",
    telefoneDono: "(825) 477-3137",
    dataUltimaVezQueTeveNoPet: "28/07/2019"
  },
  {
    raca: "Teckel",
    genero: "macho",
    castrado: "não",
    dataNascimento: "02/08/2016",
    nome: "Shaffer",
    nomeDono: "Patterson Mason",
    telefoneDono: "(970) 478-3817",
    dataUltimaVezQueTeveNoPet: "12/06/2019"
  },
  {
    raca: "Maltês",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "18/11/2016",
    nome: "Callahan",
    nomeDono: "Dana Riggs",
    telefoneDono: "(887) 475-3642",
    dataUltimaVezQueTeveNoPet: "12/07/2019"
  },
  {
    raca: "Galgo",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "02/03/2014",
    nome: "Farrell",
    nomeDono: "Ericka Hogan",
    telefoneDono: "(830) 592-2918",
    dataUltimaVezQueTeveNoPet: "26/07/2019"
  },
  {
    raca: "Komondor",
    genero: "macho",
    castrado: "não",
    dataNascimento: "28/12/2015",
    nome: "Valentine",
    nomeDono: "Coleman Rosales",
    telefoneDono: "(973) 465-2985",
    dataUltimaVezQueTeveNoPet: "19/03/2019"
  },
  {
    raca: "Samoieda",
    genero: "macho",
    castrado: "não",
    dataNascimento: "17/06/2015",
    nome: "Day",
    nomeDono: "Small Watkins",
    telefoneDono: "(901) 470-2199",
    dataUltimaVezQueTeveNoPet: "15/01/2019"
  },
  {
    raca: "Dachshund",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "04/12/2015",
    nome: "Christian",
    nomeDono: "Richard Koch",
    telefoneDono: "(955) 410-3897",
    dataUltimaVezQueTeveNoPet: "27/01/2019"
  },
  {
    raca: "Cairn Terrier",
    genero: "macho",
    castrado: "não",
    dataNascimento: "03/10/2018",
    nome: "Christensen",
    nomeDono: "Kathrine Cline",
    telefoneDono: "(807) 555-2867",
    dataUltimaVezQueTeveNoPet: "31/05/2019"
  },
  {
    raca: "Lakeland",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "02/10/2016",
    nome: "Oconnor",
    nomeDono: "Meredith Cervantes",
    telefoneDono: "(835) 520-2879",
    dataUltimaVezQueTeveNoPet: "25/05/2019"
  },
  {
    raca: "Rottweiler",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "03/05/2018",
    nome: "Bernard",
    nomeDono: "Sharron Strickland",
    telefoneDono: "(967) 516-3588",
    dataUltimaVezQueTeveNoPet: "23/05/2019"
  },
  {
    raca: "Beagle Harrier",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "30/11/2016",
    nome: "Lambert",
    nomeDono: "Dickerson Bonner",
    telefoneDono: "(802) 492-2111",
    dataUltimaVezQueTeveNoPet: "13/02/2019"
  },
  {
    raca: "Weimaraner",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "28/07/2015",
    nome: "Odom",
    nomeDono: "Holden Russo",
    telefoneDono: "(940) 490-2252",
    dataUltimaVezQueTeveNoPet: "14/02/2019"
  },
  {
    raca: "Mastife",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "07/05/2014",
    nome: "Gilliam",
    nomeDono: "Combs Conrad",
    telefoneDono: "(951) 584-3920",
    dataUltimaVezQueTeveNoPet: "13/03/2019"
  },
  {
    raca: "Bichon Havanês",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "30/12/2014",
    nome: "Booth",
    nomeDono: "Simmons Buck",
    telefoneDono: "(935) 589-3303",
    dataUltimaVezQueTeveNoPet: "22/03/2019"
  },
  {
    raca: "Malamute-do-Alasca",
    genero: "macho",
    castrado: "não",
    dataNascimento: "06/03/2015",
    nome: "Rosa",
    nomeDono: "Mollie Knight",
    telefoneDono: "(970) 441-2770",
    dataUltimaVezQueTeveNoPet: "15/04/2019"
  },
  {
    raca: "Skye Terrier",
    genero: "macho",
    castrado: "não",
    dataNascimento: "25/11/2014",
    nome: "Carver",
    nomeDono: "Melanie Ortiz",
    telefoneDono: "(908) 472-2347",
    dataUltimaVezQueTeveNoPet: "01/01/2019"
  },
  {
    raca: "Collie",
    genero: "macho",
    castrado: "não",
    dataNascimento: "08/07/2018",
    nome: "Mullins",
    nomeDono: "Powell Boyer",
    telefoneDono: "(941) 482-2994",
    dataUltimaVezQueTeveNoPet: "19/02/2019"
  },
  {
    raca: "Rottweiler",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "10/12/2017",
    nome: "Woods",
    nomeDono: "Jeanine Avila",
    telefoneDono: "(855) 486-3937",
    dataUltimaVezQueTeveNoPet: "31/12/2018"
  },
  {
    raca: "Alemão",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "02/04/2017",
    nome: "Landry",
    nomeDono: "Vance Miranda",
    telefoneDono: "(899) 467-3630",
    dataUltimaVezQueTeveNoPet: "20/03/2019"
  },
  {
    raca: "Mastife",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "09/06/2014",
    nome: "Gamble",
    nomeDono: "Lisa Rich",
    telefoneDono: "(834) 536-3002",
    dataUltimaVezQueTeveNoPet: "22/01/2019"
  },
  {
    raca: "Beagle Harrier",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "11/05/2019",
    nome: "Buckner",
    nomeDono: "Maldonado Ross",
    telefoneDono: "(908) 547-3802",
    dataUltimaVezQueTeveNoPet: "01/05/2019"
  },
  {
    raca: "Kuvasz",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "24/11/2018",
    nome: "David",
    nomeDono: "Althea Chapman",
    telefoneDono: "(870) 507-3850",
    dataUltimaVezQueTeveNoPet: "24/06/2019"
  },
  {
    raca: "Komondor",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "28/10/2015",
    nome: "Fox",
    nomeDono: "Lucille Washington",
    telefoneDono: "(929) 496-3101",
    dataUltimaVezQueTeveNoPet: "08/03/2019"
  },
  {
    raca: "Doberman",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "03/02/2017",
    nome: "Sparks",
    nomeDono: "Mann Ryan",
    telefoneDono: "(922) 474-2915",
    dataUltimaVezQueTeveNoPet: "01/05/2019"
  },
  {
    raca: "Rough",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "09/04/2015",
    nome: "Huber",
    nomeDono: "Osborne Moran",
    telefoneDono: "(969) 438-3800",
    dataUltimaVezQueTeveNoPet: "17/03/2019"
  },
  {
    raca: "Coton de Tuléar",
    genero: "macho",
    castrado: "não",
    dataNascimento: "25/05/2017",
    nome: "Hunter",
    nomeDono: "Payne Giles",
    telefoneDono: "(873) 538-2644",
    dataUltimaVezQueTeveNoPet: "08/01/2019"
  },
  {
    raca: "Dandie Dinmont Terrier",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "07/12/2017",
    nome: "Foster",
    nomeDono: "Carol Kemp",
    telefoneDono: "(880) 449-2433",
    dataUltimaVezQueTeveNoPet: "10/03/2019"
  },
  {
    raca: "Labradoodle",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "21/02/2018",
    nome: "Carson",
    nomeDono: "Mendoza Kerr",
    telefoneDono: "(964) 468-3240",
    dataUltimaVezQueTeveNoPet: "18/03/2019"
  },
  {
    raca: "Collie",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "20/12/2016",
    nome: "Bray",
    nomeDono: "Alana Gentry",
    telefoneDono: "(937) 515-2699",
    dataUltimaVezQueTeveNoPet: "27/07/2019"
  },
  {
    raca: "Pug",
    genero: "macho",
    castrado: "não",
    dataNascimento: "22/06/2017",
    nome: "Norris",
    nomeDono: "Joanna Bond",
    telefoneDono: "(807) 469-2330",
    dataUltimaVezQueTeveNoPet: "08/07/2019"
  },
  {
    raca: "Doberman",
    genero: "macho",
    castrado: "não",
    dataNascimento: "24/02/2018",
    nome: "Mcneil",
    nomeDono: "Gabriela Monroe",
    telefoneDono: "(816) 413-3378",
    dataUltimaVezQueTeveNoPet: "04/03/2019"
  },
  {
    raca: "Coton de Tuléar",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "11/08/2015",
    nome: "Brown",
    nomeDono: "Doreen Roy",
    telefoneDono: "(875) 519-3751",
    dataUltimaVezQueTeveNoPet: "05/06/2019"
  },
  {
    raca: "Golden Retriever",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "23/04/2015",
    nome: "Craft",
    nomeDono: "Christian Schroeder",
    telefoneDono: "(911) 554-3767",
    dataUltimaVezQueTeveNoPet: "25/04/2019"
  },
  {
    raca: "Golden Retriever",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "23/06/2018",
    nome: "House",
    nomeDono: "Randi Kaufman",
    telefoneDono: "(816) 434-3081",
    dataUltimaVezQueTeveNoPet: "26/07/2019"
  },
  {
    raca: "Dogue",
    genero: "macho",
    castrado: "não",
    dataNascimento: "26/02/2014",
    nome: "English",
    nomeDono: "Miles Mccall",
    telefoneDono: "(927) 549-3479",
    dataUltimaVezQueTeveNoPet: "21/03/2019"
  },
  {
    raca: "Barbet",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "07/01/2015",
    nome: "Whitehead",
    nomeDono: "Alyssa Perez",
    telefoneDono: "(939) 581-3228",
    dataUltimaVezQueTeveNoPet: "16/07/2019"
  },
  {
    raca: "Basenji",
    genero: "macho",
    castrado: "não",
    dataNascimento: "10/07/2017",
    nome: "Mcintyre",
    nomeDono: "Rollins Ware",
    telefoneDono: "(864) 516-2789",
    dataUltimaVezQueTeveNoPet: "17/07/2019"
  },
  {
    raca: "Boxer",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "26/07/2014",
    nome: "Aguirre",
    nomeDono: "Jasmine Wilkinson",
    telefoneDono: "(997) 574-2391",
    dataUltimaVezQueTeveNoPet: "07/05/2019"
  },
  {
    raca: "Affenpinscher",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "17/07/2017",
    nome: "Hahn",
    nomeDono: "Carrillo Owens",
    telefoneDono: "(991) 525-2734",
    dataUltimaVezQueTeveNoPet: "28/06/2019"
  },
  {
    raca: "Collie",
    genero: "macho",
    castrado: "não",
    dataNascimento: "12/08/2017",
    nome: "Potts",
    nomeDono: "Bruce Robertson",
    telefoneDono: "(834) 555-2785",
    dataUltimaVezQueTeveNoPet: "12/07/2019"
  },
  {
    raca: "Norfolk Terrier",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "07/10/2018",
    nome: "Butler",
    nomeDono: "Jewell Cunningham",
    telefoneDono: "(935) 500-2850",
    dataUltimaVezQueTeveNoPet: "14/01/2019"
  },
  {
    raca: "Bernardo",
    genero: "macho",
    castrado: "não",
    dataNascimento: "17/12/2018",
    nome: "Cantu",
    nomeDono: "Hampton Harrell",
    telefoneDono: "(847) 600-3305",
    dataUltimaVezQueTeveNoPet: "27/07/2019"
  },
  {
    raca: "Mastin",
    genero: "macho",
    castrado: "não",
    dataNascimento: "22/06/2016",
    nome: "Winters",
    nomeDono: "Lucy Graham",
    telefoneDono: "(837) 476-2630",
    dataUltimaVezQueTeveNoPet: "29/06/2019"
  },
  {
    raca: "Collie",
    genero: "macho",
    castrado: "não",
    dataNascimento: "21/11/2014",
    nome: "Hartman",
    nomeDono: "West Sargent",
    telefoneDono: "(816) 548-2768",
    dataUltimaVezQueTeveNoPet: "01/02/2019"
  },
  {
    raca: "Sem Raça Definida",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "21/05/2018",
    nome: "Frazier",
    nomeDono: "Lolita Davis",
    telefoneDono: "(931) 496-2860",
    dataUltimaVezQueTeveNoPet: "14/04/2019"
  },
  {
    raca: "Rottweiler",
    genero: "macho",
    castrado: "não",
    dataNascimento: "24/06/2018",
    nome: "Watts",
    nomeDono: "Cornelia Bell",
    telefoneDono: "(805) 555-2341",
    dataUltimaVezQueTeveNoPet: "14/05/2019"
  },
  {
    raca: "Pug",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "01/02/2015",
    nome: "Elliott",
    nomeDono: "Dalton Pearson",
    telefoneDono: "(964) 595-3244",
    dataUltimaVezQueTeveNoPet: "26/07/2019"
  },
  {
    raca: "Airedale Terrier",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "02/02/2014",
    nome: "Bentley",
    nomeDono: "Chase Morris",
    telefoneDono: "(928) 573-2053",
    dataUltimaVezQueTeveNoPet: "11/06/2019"
  },
  {
    raca: "Pequinês",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "01/03/2014",
    nome: "Hardy",
    nomeDono: "Santos Hall",
    telefoneDono: "(913) 414-2158",
    dataUltimaVezQueTeveNoPet: "05/03/2019"
  },
  {
    raca: "Malamute-do-Alasca",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "29/09/2014",
    nome: "Bauer",
    nomeDono: "Farley Alvarado",
    telefoneDono: "(833) 457-3864",
    dataUltimaVezQueTeveNoPet: "10/07/2019"
  },
  {
    raca: "Alano",
    genero: "macho",
    castrado: "não",
    dataNascimento: "30/12/2015",
    nome: "Emerson",
    nomeDono: "Duke Fowler",
    telefoneDono: "(942) 502-2551",
    dataUltimaVezQueTeveNoPet: "14/07/2019"
  },
  {
    raca: "Whippet",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "26/10/2015",
    nome: "Downs",
    nomeDono: "Edna Sullivan",
    telefoneDono: "(921) 581-3807",
    dataUltimaVezQueTeveNoPet: "01/02/2019"
  },
  {
    raca: "Chihuahua",
    genero: "macho",
    castrado: "não",
    dataNascimento: "14/07/2018",
    nome: "Alston",
    nomeDono: "Alexandra Travis",
    telefoneDono: "(875) 536-2843",
    dataUltimaVezQueTeveNoPet: "02/01/2019"
  },
  {
    raca: "Setter",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "18/07/2017",
    nome: "Mays",
    nomeDono: "Tania Lucas",
    telefoneDono: "(928) 452-3356",
    dataUltimaVezQueTeveNoPet: "18/04/2019"
  },
  {
    raca: "Bichon Frisé",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "08/01/2014",
    nome: "Middleton",
    nomeDono: "Leon Rios",
    telefoneDono: "(916) 432-3828",
    dataUltimaVezQueTeveNoPet: "20/06/2019"
  },
  {
    raca: "São",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "28/09/2016",
    nome: "Lindsey",
    nomeDono: "Hensley Petty",
    telefoneDono: "(867) 500-3927",
    dataUltimaVezQueTeveNoPet: "04/06/2019"
  },
  {
    raca: "Pitbull",
    genero: "macho",
    castrado: "não",
    dataNascimento: "23/02/2014",
    nome: "Mooney",
    nomeDono: "Trudy Jennings",
    telefoneDono: "(850) 480-3878",
    dataUltimaVezQueTeveNoPet: "13/04/2019"
  },
  {
    raca: "Bichon Frisé",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "31/10/2015",
    nome: "Alford",
    nomeDono: "Gonzalez Carpenter",
    telefoneDono: "(968) 400-2011",
    dataUltimaVezQueTeveNoPet: "03/07/2019"
  },
  {
    raca: "Golden Retriever",
    genero: "macho",
    castrado: "não",
    dataNascimento: "17/11/2017",
    nome: "Sellers",
    nomeDono: "Marsha Richards",
    telefoneDono: "(820) 437-2311",
    dataUltimaVezQueTeveNoPet: "20/06/2019"
  },
  {
    raca: "Terrier",
    genero: "macho",
    castrado: "não",
    dataNascimento: "12/09/2018",
    nome: "Gaines",
    nomeDono: "Guerra George",
    telefoneDono: "(882) 550-2097",
    dataUltimaVezQueTeveNoPet: "27/01/2019"
  },
  {
    raca: "Afegão",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "14/01/2017",
    nome: "Cross",
    nomeDono: "Mara Paul",
    telefoneDono: "(841) 493-2267",
    dataUltimaVezQueTeveNoPet: "20/06/2019"
  },
  {
    raca: "Smooth Collie",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "05/09/2018",
    nome: "Weeks",
    nomeDono: "Williams Holcomb",
    telefoneDono: "(854) 545-3996",
    dataUltimaVezQueTeveNoPet: "13/04/2019"
  },
  {
    raca: "Cairn Terrier",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "26/09/2017",
    nome: "Walsh",
    nomeDono: "Leslie Curtis",
    telefoneDono: "(809) 568-2145",
    dataUltimaVezQueTeveNoPet: "04/07/2019"
  },
  {
    raca: "Lakeland",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "20/04/2018",
    nome: "Combs",
    nomeDono: "Franco Mccoy",
    telefoneDono: "(906) 555-2462",
    dataUltimaVezQueTeveNoPet: "26/01/2019"
  },
  {
    raca: "Barbet",
    genero: "macho",
    castrado: "não",
    dataNascimento: "29/10/2014",
    nome: "Wise",
    nomeDono: "Dodson Nichols",
    telefoneDono: "(967) 491-3990",
    dataUltimaVezQueTeveNoPet: "20/04/2019"
  },
  {
    raca: "São",
    genero: "macho",
    castrado: "não",
    dataNascimento: "09/05/2017",
    nome: "Beard",
    nomeDono: "Cruz Barrera",
    telefoneDono: "(865) 472-2168",
    dataUltimaVezQueTeveNoPet: "11/01/2019"
  },
  {
    raca: "Mastin",
    genero: "macho",
    castrado: "não",
    dataNascimento: "23/05/2019",
    nome: "Spencer",
    nomeDono: "Greene Velasquez",
    telefoneDono: "(899) 530-2460",
    dataUltimaVezQueTeveNoPet: "16/04/2019"
  },
  {
    raca: "Pequinês",
    genero: "macho",
    castrado: "não",
    dataNascimento: "19/05/2017",
    nome: "Dale",
    nomeDono: "Baker Cobb",
    telefoneDono: "(827) 450-3698",
    dataUltimaVezQueTeveNoPet: "14/05/2019"
  },
  {
    raca: "Dogue",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "28/02/2014",
    nome: "Morse",
    nomeDono: "Ollie Bender",
    telefoneDono: "(847) 475-2078",
    dataUltimaVezQueTeveNoPet: "04/07/2019"
  },
  {
    raca: "Rottweiler",
    genero: "macho",
    castrado: "não",
    dataNascimento: "05/01/2018",
    nome: "Robinson",
    nomeDono: "Gibson Spence",
    telefoneDono: "(867) 595-3431",
    dataUltimaVezQueTeveNoPet: "18/06/2019"
  },
  {
    raca: "Rottweiler",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "09/09/2016",
    nome: "Wallace",
    nomeDono: "Faith Fletcher",
    telefoneDono: "(867) 581-3742",
    dataUltimaVezQueTeveNoPet: "14/02/2019"
  },
  {
    raca: "Xoloitzcuintli",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "22/05/2018",
    nome: "Booker",
    nomeDono: "Elinor Bruce",
    telefoneDono: "(965) 408-2165",
    dataUltimaVezQueTeveNoPet: "26/01/2019"
  },
  {
    raca: "Grande Boiadeiro",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "24/01/2017",
    nome: "Oneil",
    nomeDono: "Tanisha Berry",
    telefoneDono: "(911) 538-2352",
    dataUltimaVezQueTeveNoPet: "16/02/2019"
  },
  {
    raca: "Border Terrier",
    genero: "macho",
    castrado: "não",
    dataNascimento: "15/06/2014",
    nome: "Harding",
    nomeDono: "Aguilar Pope",
    telefoneDono: "(822) 449-3496",
    dataUltimaVezQueTeveNoPet: "02/05/2019"
  },
  {
    raca: "Mastin",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "25/04/2018",
    nome: "Logan",
    nomeDono: "Marta Lamb",
    telefoneDono: "(976) 506-3374",
    dataUltimaVezQueTeveNoPet: "08/01/2019"
  },
  {
    raca: "Buldogue",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "20/09/2014",
    nome: "Wyatt",
    nomeDono: "Albert Merrill",
    telefoneDono: "(888) 590-3703",
    dataUltimaVezQueTeveNoPet: "06/05/2019"
  },
  {
    raca: "Shiba Inu",
    genero: "macho",
    castrado: "não",
    dataNascimento: "24/06/2014",
    nome: "Schneider",
    nomeDono: "Leanne Kirkland",
    telefoneDono: "(901) 596-2318",
    dataUltimaVezQueTeveNoPet: "17/07/2019"
  },
  {
    raca: "Grande Boiadeiro",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "10/06/2017",
    nome: "Olsen",
    nomeDono: "Salas Acosta",
    telefoneDono: "(939) 467-3212",
    dataUltimaVezQueTeveNoPet: "26/03/2019"
  },
  {
    raca: "Maltês",
    genero: "macho",
    castrado: "não",
    dataNascimento: "10/05/2017",
    nome: "Castro",
    nomeDono: "Rosalinda Church",
    telefoneDono: "(988) 490-2022",
    dataUltimaVezQueTeveNoPet: "13/06/2019"
  },
  {
    raca: "Elkhound",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "10/04/2014",
    nome: "Johns",
    nomeDono: "Benjamin Burke",
    telefoneDono: "(951) 572-2362",
    dataUltimaVezQueTeveNoPet: "25/06/2019"
  },
  {
    raca: "Basset Hound",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "29/10/2017",
    nome: "Donovan",
    nomeDono: "Garrett Ramirez",
    telefoneDono: "(935) 428-3256",
    dataUltimaVezQueTeveNoPet: "05/01/2019"
  },
  {
    raca: "Foxhound",
    genero: "macho",
    castrado: "não",
    dataNascimento: "11/10/2015",
    nome: "Conner",
    nomeDono: "Sandoval Bean",
    telefoneDono: "(836) 498-3313",
    dataUltimaVezQueTeveNoPet: "14/06/2019"
  },
  {
    raca: "Tosa",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "23/09/2014",
    nome: "Hammond",
    nomeDono: "Carla Underwood",
    telefoneDono: "(885) 548-3646",
    dataUltimaVezQueTeveNoPet: "19/07/2019"
  },
  {
    raca: "Tamaskan",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "10/01/2015",
    nome: "Sawyer",
    nomeDono: "Mitchell Hale",
    telefoneDono: "(827) 587-3082",
    dataUltimaVezQueTeveNoPet: "08/03/2019"
  },
  {
    raca: "Boiadeiro",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "22/10/2015",
    nome: "Vang",
    nomeDono: "Aurora Russell",
    telefoneDono: "(999) 443-2113",
    dataUltimaVezQueTeveNoPet: "07/01/2019"
  },
  {
    raca: "Cairn Terrier",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "19/01/2015",
    nome: "Delgado",
    nomeDono: "Petra Merritt",
    telefoneDono: "(818) 563-2899",
    dataUltimaVezQueTeveNoPet: "24/06/2019"
  },
  {
    raca: "Cirneco do Etna",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "11/01/2017",
    nome: "Santiago",
    nomeDono: "Burt Vance",
    telefoneDono: "(838) 513-3324",
    dataUltimaVezQueTeveNoPet: "12/01/2019"
  },
  {
    raca: "Chow Chow",
    genero: "macho",
    castrado: "não",
    dataNascimento: "21/06/2016",
    nome: "Sanford",
    nomeDono: "Hogan Hopkins",
    telefoneDono: "(826) 595-2292",
    dataUltimaVezQueTeveNoPet: "20/05/2019"
  },
  {
    raca: "Dachshund",
    genero: "macho",
    castrado: "não",
    dataNascimento: "19/08/2016",
    nome: "White",
    nomeDono: "Moon Carr",
    telefoneDono: "(809) 500-3742",
    dataUltimaVezQueTeveNoPet: "05/05/2019"
  },
  {
    raca: "Pointer",
    genero: "macho",
    castrado: "não",
    dataNascimento: "07/12/2015",
    nome: "Joyner",
    nomeDono: "Pansy Edwards",
    telefoneDono: "(972) 419-3994",
    dataUltimaVezQueTeveNoPet: "22/04/2019"
  },
  {
    raca: "Dálmata",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "10/12/2018",
    nome: "Gibson",
    nomeDono: "Nola Lancaster",
    telefoneDono: "(874) 521-2066",
    dataUltimaVezQueTeveNoPet: "17/05/2019"
  },
  {
    raca: "Rhodesian",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "16/06/2015",
    nome: "Everett",
    nomeDono: "Angelique Mitchell",
    telefoneDono: "(974) 587-2821",
    dataUltimaVezQueTeveNoPet: "03/02/2019"
  },
  {
    raca: "Podengo",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "20/02/2019",
    nome: "Perkins",
    nomeDono: "Jenifer Glover",
    telefoneDono: "(992) 583-3074",
    dataUltimaVezQueTeveNoPet: "17/02/2019"
  },
  {
    raca: "Teckel",
    genero: "macho",
    castrado: "não",
    dataNascimento: "18/12/2018",
    nome: "Hester",
    nomeDono: "Perry Parks",
    telefoneDono: "(901) 562-3111",
    dataUltimaVezQueTeveNoPet: "17/07/2019"
  },
  {
    raca: "Alemão",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "26/06/2018",
    nome: "Hensley",
    nomeDono: "Gregory Mcbride",
    telefoneDono: "(996) 443-2630",
    dataUltimaVezQueTeveNoPet: "17/04/2019"
  },
  {
    raca: "Grande Boiadeiro",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "18/07/2015",
    nome: "Hull",
    nomeDono: "Francine Hooper",
    telefoneDono: "(802) 451-2466",
    dataUltimaVezQueTeveNoPet: "12/01/2019"
  },
  {
    raca: "Borzoi",
    genero: "macho",
    castrado: "não",
    dataNascimento: "01/01/2014",
    nome: "Craig",
    nomeDono: "Sabrina Bullock",
    telefoneDono: "(826) 465-2386",
    dataUltimaVezQueTeveNoPet: "29/05/2019"
  },
  {
    raca: "Akita Americano",
    genero: "macho",
    castrado: "não",
    dataNascimento: "02/07/2018",
    nome: "Becker",
    nomeDono: "Maureen Duncan",
    telefoneDono: "(873) 416-2055",
    dataUltimaVezQueTeveNoPet: "23/01/2019"
  },
  {
    raca: "Samoieda",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "04/10/2014",
    nome: "Talley",
    nomeDono: "Pickett Lee",
    telefoneDono: "(838) 484-3473",
    dataUltimaVezQueTeveNoPet: "08/02/2019"
  },
  {
    raca: "West Highland",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "22/01/2014",
    nome: "Allen",
    nomeDono: "Adriana Sweeney",
    telefoneDono: "(862) 567-3667",
    dataUltimaVezQueTeveNoPet: "15/04/2019"
  },
  {
    raca: "Perdigueiro",
    genero: "macho",
    castrado: "não",
    dataNascimento: "01/12/2014",
    nome: "Knowles",
    nomeDono: "Juliette Sharpe",
    telefoneDono: "(878) 432-2306",
    dataUltimaVezQueTeveNoPet: "02/07/2019"
  },
  {
    raca: "Grande Boiadeiro",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "16/10/2018",
    nome: "Nguyen",
    nomeDono: "Andrews Simpson",
    telefoneDono: "(968) 477-2951",
    dataUltimaVezQueTeveNoPet: "29/05/2019"
  },
  {
    raca: "Pointer",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "12/10/2018",
    nome: "Savage",
    nomeDono: "Collins Britt",
    telefoneDono: "(981) 475-2227",
    dataUltimaVezQueTeveNoPet: "31/12/2018"
  },
  {
    raca: "Terrier",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "22/03/2017",
    nome: "Bradshaw",
    nomeDono: "Diann Espinoza",
    telefoneDono: "(931) 582-2138",
    dataUltimaVezQueTeveNoPet: "09/07/2019"
  },
  {
    raca: "Elkhound",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "18/11/2015",
    nome: "Burch",
    nomeDono: "Blankenship Cleveland",
    telefoneDono: "(907) 460-3283",
    dataUltimaVezQueTeveNoPet: "21/02/2019"
  },
  {
    raca: "Chow Chow",
    genero: "macho",
    castrado: "não",
    dataNascimento: "28/06/2015",
    nome: "Holloway",
    nomeDono: "Burke Hancock",
    telefoneDono: "(919) 599-2214",
    dataUltimaVezQueTeveNoPet: "20/01/2019"
  },
  {
    raca: "Chow Chow",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "02/10/2014",
    nome: "Johnston",
    nomeDono: "Janette Gould",
    telefoneDono: "(991) 473-3189",
    dataUltimaVezQueTeveNoPet: "26/01/2019"
  },
  {
    raca: "São",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "18/09/2018",
    nome: "Houston",
    nomeDono: "Erma Collier",
    telefoneDono: "(997) 456-3940",
    dataUltimaVezQueTeveNoPet: "04/01/2019"
  },
  {
    raca: "Shih Tzu",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "18/12/2017",
    nome: "Gordon",
    nomeDono: "Golden Langley",
    telefoneDono: "(840) 532-2072",
    dataUltimaVezQueTeveNoPet: "20/01/2019"
  },
  {
    raca: "Greyhound",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "18/01/2014",
    nome: "Warner",
    nomeDono: "Donaldson Meadows",
    telefoneDono: "(990) 558-3695",
    dataUltimaVezQueTeveNoPet: "11/03/2019"
  },
  {
    raca: "Pequinês",
    genero: "macho",
    castrado: "não",
    dataNascimento: "14/01/2014",
    nome: "Slater",
    nomeDono: "Sweet Justice",
    telefoneDono: "(942) 419-3255",
    dataUltimaVezQueTeveNoPet: "05/03/2019"
  },
  {
    raca: "Boston Terrier",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "07/05/2016",
    nome: "Mercado",
    nomeDono: "Mosley Rasmussen",
    telefoneDono: "(939) 460-3078",
    dataUltimaVezQueTeveNoPet: "28/01/2019"
  },
  {
    raca: "Labradoodle",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "07/04/2014",
    nome: "Thompson",
    nomeDono: "Rose Cox",
    telefoneDono: "(982) 594-2550",
    dataUltimaVezQueTeveNoPet: "08/07/2019"
  },
  {
    raca: "Bernardo",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "20/03/2016",
    nome: "Guy",
    nomeDono: "Ochoa Haney",
    telefoneDono: "(893) 449-2576",
    dataUltimaVezQueTeveNoPet: "26/01/2019"
  },
  {
    raca: "Komondor",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "24/02/2018",
    nome: "Payne",
    nomeDono: "Ramos Blackburn",
    telefoneDono: "(862) 433-3887",
    dataUltimaVezQueTeveNoPet: "22/07/2019"
  },
  {
    raca: "Setter",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "28/01/2018",
    nome: "Morrow",
    nomeDono: "Earnestine Price",
    telefoneDono: "(937) 484-3622",
    dataUltimaVezQueTeveNoPet: "25/03/2019"
  },
  {
    raca: "Boiadeiro",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "23/12/2016",
    nome: "Sandoval",
    nomeDono: "Peters Moses",
    telefoneDono: "(970) 521-3756",
    dataUltimaVezQueTeveNoPet: "19/04/2019"
  },
  {
    raca: "Beagle",
    genero: "macho",
    castrado: "não",
    dataNascimento: "12/11/2017",
    nome: "Crosby",
    nomeDono: "Nannie Cantrell",
    telefoneDono: "(821) 578-2956",
    dataUltimaVezQueTeveNoPet: "01/05/2019"
  },
  {
    raca: "Foxhound",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "10/10/2014",
    nome: "James",
    nomeDono: "Iris Buchanan",
    telefoneDono: "(940) 523-3936",
    dataUltimaVezQueTeveNoPet: "19/06/2019"
  },
  {
    raca: "Malamute-do-Alasca",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "22/06/2014",
    nome: "Ballard",
    nomeDono: "Pennington Miller",
    telefoneDono: "(863) 536-2954",
    dataUltimaVezQueTeveNoPet: "19/04/2019"
  },
  {
    raca: "Affenpinscher",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "04/10/2015",
    nome: "Ochoa",
    nomeDono: "Battle Hewitt",
    telefoneDono: "(881) 594-3193",
    dataUltimaVezQueTeveNoPet: "23/02/2019"
  },
  {
    raca: "Rottweiler",
    genero: "macho",
    castrado: "não",
    dataNascimento: "16/09/2014",
    nome: "Daugherty",
    nomeDono: "Sears Hood",
    telefoneDono: "(810) 473-2638",
    dataUltimaVezQueTeveNoPet: "01/03/2019"
  },
  {
    raca: "Skye Terrier",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "16/04/2018",
    nome: "Beck",
    nomeDono: "Meyer Fuller",
    telefoneDono: "(947) 554-2192",
    dataUltimaVezQueTeveNoPet: "06/05/2019"
  },
  {
    raca: "Grande Boiadeiro",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "25/02/2016",
    nome: "Chavez",
    nomeDono: "Peggy Abbott",
    telefoneDono: "(936) 490-2998",
    dataUltimaVezQueTeveNoPet: "10/06/2019"
  },
  {
    raca: "Labrador Retriever",
    genero: "macho",
    castrado: "não",
    dataNascimento: "26/11/2015",
    nome: "Shelton",
    nomeDono: "Owens Maldonado",
    telefoneDono: "(871) 499-2614",
    dataUltimaVezQueTeveNoPet: "08/06/2019"
  },
  {
    raca: "Terrier",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "07/05/2017",
    nome: "Lyons",
    nomeDono: "Rodriquez Hughes",
    telefoneDono: "(876) 532-3296",
    dataUltimaVezQueTeveNoPet: "02/06/2019"
  },
  {
    raca: "Barbet",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "24/02/2014",
    nome: "Whitley",
    nomeDono: "Patty Barnett",
    telefoneDono: "(950) 423-3855",
    dataUltimaVezQueTeveNoPet: "12/01/2019"
  },
  {
    raca: "Cane Corso",
    genero: "macho",
    castrado: "não",
    dataNascimento: "03/04/2016",
    nome: "Shields",
    nomeDono: "Wall Larson",
    telefoneDono: "(830) 545-3072",
    dataUltimaVezQueTeveNoPet: "17/05/2019"
  },
  {
    raca: "Setter",
    genero: "macho",
    castrado: "não",
    dataNascimento: "28/04/2018",
    nome: "Bowers",
    nomeDono: "Mcleod Coleman",
    telefoneDono: "(901) 528-2391",
    dataUltimaVezQueTeveNoPet: "30/03/2019"
  },
  {
    raca: "West Highland",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "30/03/2016",
    nome: "Irwin",
    nomeDono: "Kirkland Fuentes",
    telefoneDono: "(850) 444-3494",
    dataUltimaVezQueTeveNoPet: "03/02/2019"
  },
  {
    raca: "Staffordshire Bull Terrier",
    genero: "macho",
    castrado: "não",
    dataNascimento: "20/12/2017",
    nome: "Farmer",
    nomeDono: "Becker Preston",
    telefoneDono: "(964) 408-3774",
    dataUltimaVezQueTeveNoPet: "16/03/2019"
  },
  {
    raca: "Irlandés",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "05/07/2014",
    nome: "Barron",
    nomeDono: "Powers Strong",
    telefoneDono: "(803) 508-2303",
    dataUltimaVezQueTeveNoPet: "01/03/2019"
  },
  {
    raca: "Gos d’Atura",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "04/03/2014",
    nome: "Pate",
    nomeDono: "Martinez Singleton",
    telefoneDono: "(977) 450-3224",
    dataUltimaVezQueTeveNoPet: "11/03/2019"
  },
  {
    raca: "Smooth Collie",
    genero: "macho",
    castrado: "não",
    dataNascimento: "31/05/2019",
    nome: "Gallagher",
    nomeDono: "Brown Hanson",
    telefoneDono: "(956) 591-3907",
    dataUltimaVezQueTeveNoPet: "26/03/2019"
  },
  {
    raca: "Podengo",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "09/01/2016",
    nome: "Mcknight",
    nomeDono: "Jensen Oliver",
    telefoneDono: "(852) 455-2168",
    dataUltimaVezQueTeveNoPet: "05/05/2019"
  },
  {
    raca: "Boiadeiro",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "06/10/2017",
    nome: "Durham",
    nomeDono: "Bauer Dominguez",
    telefoneDono: "(952) 502-3430",
    dataUltimaVezQueTeveNoPet: "20/02/2019"
  },
  {
    raca: "Staffordshire Bull Terrier",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "12/05/2015",
    nome: "Munoz",
    nomeDono: "Delores Juarez",
    telefoneDono: "(849) 410-3736",
    dataUltimaVezQueTeveNoPet: "16/04/2019"
  },
  {
    raca: "Grifo da Bélgica",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "27/10/2016",
    nome: "Gutierrez",
    nomeDono: "Liliana Short",
    telefoneDono: "(932) 477-2270",
    dataUltimaVezQueTeveNoPet: "29/06/2019"
  },
  {
    raca: "Staffordshire Bull Terrier",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "09/07/2019",
    nome: "Hess",
    nomeDono: "Whitney Dennis",
    telefoneDono: "(870) 445-2904",
    dataUltimaVezQueTeveNoPet: "16/07/2019"
  },
  {
    raca: "West Highland",
    genero: "macho",
    castrado: "não",
    dataNascimento: "15/09/2015",
    nome: "Massey",
    nomeDono: "Knowles Mccray",
    telefoneDono: "(869) 453-2996",
    dataUltimaVezQueTeveNoPet: "30/04/2019"
  },
  {
    raca: "Basenji",
    genero: "macho",
    castrado: "não",
    dataNascimento: "09/02/2014",
    nome: "Harvey",
    nomeDono: "Nash Byrd",
    telefoneDono: "(953) 560-3358",
    dataUltimaVezQueTeveNoPet: "22/02/2019"
  },
  {
    raca: "Rough",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "19/12/2015",
    nome: "Freeman",
    nomeDono: "Shari Bartlett",
    telefoneDono: "(810) 444-2401",
    dataUltimaVezQueTeveNoPet: "15/07/2019"
  },
  {
    raca: "Alano",
    genero: "macho",
    castrado: "não",
    dataNascimento: "14/07/2017",
    nome: "Stewart",
    nomeDono: "Caldwell Harrison",
    telefoneDono: "(939) 425-2384",
    dataUltimaVezQueTeveNoPet: "03/02/2019"
  },
  {
    raca: "Bernardo",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "10/06/2016",
    nome: "Welch",
    nomeDono: "Middleton Witt",
    telefoneDono: "(975) 449-2388",
    dataUltimaVezQueTeveNoPet: "03/03/2019"
  },
  {
    raca: "Cairn Terrier",
    genero: "macho",
    castrado: "não",
    dataNascimento: "22/09/2018",
    nome: "Lang",
    nomeDono: "Concetta Carney",
    telefoneDono: "(953) 561-2571",
    dataUltimaVezQueTeveNoPet: "28/07/2019"
  },
  {
    raca: "Dandie Dinmont Terrier",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "02/07/2019",
    nome: "Lawson",
    nomeDono: "Rush Santos",
    telefoneDono: "(997) 548-3531",
    dataUltimaVezQueTeveNoPet: "11/05/2019"
  },
  {
    raca: "Fox Terrier",
    genero: "macho",
    castrado: "não",
    dataNascimento: "30/12/2017",
    nome: "Estes",
    nomeDono: "Sullivan Campos",
    telefoneDono: "(937) 568-2048",
    dataUltimaVezQueTeveNoPet: "05/05/2019"
  },
  {
    raca: "Barbet",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "19/01/2014",
    nome: "Gonzalez",
    nomeDono: "Mckinney Patel",
    telefoneDono: "(922) 483-2533",
    dataUltimaVezQueTeveNoPet: "17/04/2019"
  },
  {
    raca: "Irlandés",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "24/06/2016",
    nome: "Marks",
    nomeDono: "Deanne Malone",
    telefoneDono: "(918) 422-3019",
    dataUltimaVezQueTeveNoPet: "22/07/2019"
  },
  {
    raca: "Grifo da Bélgica",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "26/03/2017",
    nome: "Hinton",
    nomeDono: "Dean Schmidt",
    telefoneDono: "(824) 558-2724",
    dataUltimaVezQueTeveNoPet: "19/01/2019"
  },
  {
    raca: "Lakeland",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "22/01/2018",
    nome: "Ingram",
    nomeDono: "Lauren Adams",
    telefoneDono: "(808) 521-3003",
    dataUltimaVezQueTeveNoPet: "01/07/2019"
  },
  {
    raca: "Tamaskan",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "22/02/2016",
    nome: "Garrison",
    nomeDono: "Kim Mcdonald",
    telefoneDono: "(912) 471-2199",
    dataUltimaVezQueTeveNoPet: "26/03/2019"
  },
  {
    raca: "Spitz Alemão",
    genero: "macho",
    castrado: "não",
    dataNascimento: "25/06/2019",
    nome: "Foreman",
    nomeDono: "Pacheco Sears",
    telefoneDono: "(947) 598-2751",
    dataUltimaVezQueTeveNoPet: "30/03/2019"
  },
  {
    raca: "Golden Retriever",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "31/08/2016",
    nome: "Dunn",
    nomeDono: "Kane Carey",
    telefoneDono: "(960) 570-2309",
    dataUltimaVezQueTeveNoPet: "09/03/2019"
  },
  {
    raca: "Scottish Terrier",
    genero: "macho",
    castrado: "não",
    dataNascimento: "11/01/2019",
    nome: "Andrews",
    nomeDono: "Robbins Gillespie",
    telefoneDono: "(923) 431-3040",
    dataUltimaVezQueTeveNoPet: "13/06/2019"
  },
  {
    raca: "Husky Siberiano",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "25/10/2018",
    nome: "Tucker",
    nomeDono: "Ann Holder",
    telefoneDono: "(869) 488-2440",
    dataUltimaVezQueTeveNoPet: "20/01/2019"
  },
  {
    raca: "Fox Terrier",
    genero: "macho",
    castrado: "não",
    dataNascimento: "11/12/2014",
    nome: "Riddle",
    nomeDono: "Boyle Williams",
    telefoneDono: "(926) 498-2752",
    dataUltimaVezQueTeveNoPet: "12/04/2019"
  },
  {
    raca: "Husky Siberiano",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "22/02/2018",
    nome: "May",
    nomeDono: "Richards Burks",
    telefoneDono: "(813) 524-3677",
    dataUltimaVezQueTeveNoPet: "23/01/2019"
  },
  {
    raca: "Cane Corso",
    genero: "macho",
    castrado: "não",
    dataNascimento: "20/02/2019",
    nome: "Garner",
    nomeDono: "Corina Valdez",
    telefoneDono: "(814) 413-3507",
    dataUltimaVezQueTeveNoPet: "31/05/2019"
  },
  {
    raca: "Husky Siberiano",
    genero: "macho",
    castrado: "não",
    dataNascimento: "09/12/2018",
    nome: "Vincent",
    nomeDono: "Ruiz Mendez",
    telefoneDono: "(853) 517-3749",
    dataUltimaVezQueTeveNoPet: "10/01/2019"
  },
  {
    raca: "Staffordshire Bull Terrier",
    genero: "macho",
    castrado: "não",
    dataNascimento: "09/02/2018",
    nome: "Chang",
    nomeDono: "Carolina Fulton",
    telefoneDono: "(810) 529-2642",
    dataUltimaVezQueTeveNoPet: "04/07/2019"
  },
  {
    raca: "Foxhound",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "15/02/2018",
    nome: "Case",
    nomeDono: "Wynn Diaz",
    telefoneDono: "(916) 412-3101",
    dataUltimaVezQueTeveNoPet: "23/04/2019"
  },
  {
    raca: "Dálmata",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "19/06/2017",
    nome: "Galloway",
    nomeDono: "Slater Horton",
    telefoneDono: "(927) 533-3322",
    dataUltimaVezQueTeveNoPet: "23/04/2019"
  },
  {
    raca: "Pinscher",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "04/05/2018",
    nome: "Maynard",
    nomeDono: "Brooke Rivers",
    telefoneDono: "(922) 412-2897",
    dataUltimaVezQueTeveNoPet: "01/05/2019"
  },
  {
    raca: "Buldogue",
    genero: "macho",
    castrado: "não",
    dataNascimento: "11/11/2015",
    nome: "Clayton",
    nomeDono: "Wilkins Hunt",
    telefoneDono: "(926) 479-2102",
    dataUltimaVezQueTeveNoPet: "22/04/2019"
  },
  {
    raca: "Xoloitzcuintli",
    genero: "macho",
    castrado: "não",
    dataNascimento: "08/03/2015",
    nome: "Romero",
    nomeDono: "Ingram Donaldson",
    telefoneDono: "(948) 505-3305",
    dataUltimaVezQueTeveNoPet: "05/07/2019"
  },
  {
    raca: "Dachshund",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "01/07/2017",
    nome: "Mcgee",
    nomeDono: "Cora Duran",
    telefoneDono: "(995) 468-3701",
    dataUltimaVezQueTeveNoPet: "10/06/2019"
  },
  {
    raca: "Borzoi",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "19/04/2019",
    nome: "Nieves",
    nomeDono: "Mccarty Powers",
    telefoneDono: "(930) 491-2187",
    dataUltimaVezQueTeveNoPet: "13/01/2019"
  },
  {
    raca: "Border Terrier",
    genero: "macho",
    castrado: "não",
    dataNascimento: "17/05/2019",
    nome: "Kent",
    nomeDono: "Johnston Berger",
    telefoneDono: "(973) 519-3427",
    dataUltimaVezQueTeveNoPet: "20/06/2019"
  },
  {
    raca: "Collie",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "28/05/2014",
    nome: "Arnold",
    nomeDono: "Katherine Jenkins",
    telefoneDono: "(929) 464-2566",
    dataUltimaVezQueTeveNoPet: "03/04/2019"
  },
  {
    raca: "Mastife",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "01/01/2014",
    nome: "Hodges",
    nomeDono: "Sophie West",
    telefoneDono: "(891) 480-3877",
    dataUltimaVezQueTeveNoPet: "28/01/2019"
  },
  {
    raca: "Mastin",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "22/07/2018",
    nome: "French",
    nomeDono: "Townsend King",
    telefoneDono: "(939) 533-3193",
    dataUltimaVezQueTeveNoPet: "21/04/2019"
  },
  {
    raca: "Akita Inu",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "08/02/2019",
    nome: "Mcgowan",
    nomeDono: "Lucas Evans",
    telefoneDono: "(962) 447-3165",
    dataUltimaVezQueTeveNoPet: "03/06/2019"
  },
  {
    raca: "Bichon Havanês",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "26/05/2016",
    nome: "Hays",
    nomeDono: "Head Carter",
    telefoneDono: "(984) 568-3138",
    dataUltimaVezQueTeveNoPet: "22/02/2019"
  },
  {
    raca: "Gos d’Atura",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "20/01/2018",
    nome: "Mathews",
    nomeDono: "Laverne Lott",
    telefoneDono: "(889) 515-2521",
    dataUltimaVezQueTeveNoPet: "28/04/2019"
  },
  {
    raca: "Welsh Corgi",
    genero: "macho",
    castrado: "não",
    dataNascimento: "10/11/2014",
    nome: "Jackson",
    nomeDono: "Mcdaniel Clark",
    telefoneDono: "(892) 545-2788",
    dataUltimaVezQueTeveNoPet: "16/02/2019"
  },
  {
    raca: "Jack Russel Terrier",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "22/12/2017",
    nome: "Ashley",
    nomeDono: "Willa Ferrell",
    telefoneDono: "(936) 415-3531",
    dataUltimaVezQueTeveNoPet: "29/07/2019"
  },
  {
    raca: "Beagle Harrier",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "15/11/2018",
    nome: "Walters",
    nomeDono: "Emilia Howe",
    telefoneDono: "(852) 588-2231",
    dataUltimaVezQueTeveNoPet: "21/02/2019"
  },
  {
    raca: "Irlandés",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "29/01/2014",
    nome: "Wheeler",
    nomeDono: "Conrad Stout",
    telefoneDono: "(888) 490-2776",
    dataUltimaVezQueTeveNoPet: "17/01/2019"
  },
  {
    raca: "Pitbull",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "26/06/2015",
    nome: "Pitts",
    nomeDono: "Celina Rivera",
    telefoneDono: "(836) 405-2146",
    dataUltimaVezQueTeveNoPet: "01/07/2019"
  },
  {
    raca: "Afegão",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "28/02/2016",
    nome: "Jefferson",
    nomeDono: "Reeves Hawkins",
    telefoneDono: "(939) 589-2713",
    dataUltimaVezQueTeveNoPet: "19/04/2019"
  },
  {
    raca: "Pastor",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "20/07/2017",
    nome: "Gibbs",
    nomeDono: "Kaufman Stanton",
    telefoneDono: "(823) 404-3938",
    dataUltimaVezQueTeveNoPet: "23/03/2019"
  },
  {
    raca: "Barbet",
    genero: "macho",
    castrado: "não",
    dataNascimento: "30/03/2014",
    nome: "Curry",
    nomeDono: "Durham Henry",
    telefoneDono: "(996) 600-2892",
    dataUltimaVezQueTeveNoPet: "12/05/2019"
  },
  {
    raca: "Dandie Dinmont Terrier",
    genero: "macho",
    castrado: "não",
    dataNascimento: "05/05/2017",
    nome: "Dickerson",
    nomeDono: "Sharp Hurley",
    telefoneDono: "(945) 501-3660",
    dataUltimaVezQueTeveNoPet: "02/02/2019"
  },
  {
    raca: "Basset Hound",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "20/08/2016",
    nome: "Little",
    nomeDono: "Gutierrez Charles",
    telefoneDono: "(944) 558-2713",
    dataUltimaVezQueTeveNoPet: "13/03/2019"
  },
  {
    raca: "Dachshund",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "12/10/2014",
    nome: "Grimes",
    nomeDono: "Bridgette Blair",
    telefoneDono: "(825) 551-2274",
    dataUltimaVezQueTeveNoPet: "15/02/2019"
  },
  {
    raca: "Coton de Tuléar",
    genero: "macho",
    castrado: "não",
    dataNascimento: "20/02/2015",
    nome: "Osborn",
    nomeDono: "Rebekah Newton",
    telefoneDono: "(921) 591-3524",
    dataUltimaVezQueTeveNoPet: "25/02/2019"
  },
  {
    raca: "Lakeland",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "12/05/2019",
    nome: "Dillon",
    nomeDono: "Pamela Stuart",
    telefoneDono: "(999) 475-3927",
    dataUltimaVezQueTeveNoPet: "29/01/2019"
  },
  {
    raca: "Chow Chow",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "23/09/2016",
    nome: "Zimmerman",
    nomeDono: "Rowena Nunez",
    telefoneDono: "(914) 570-3298",
    dataUltimaVezQueTeveNoPet: "08/04/2019"
  },
  {
    raca: "Bichon Bolonhês",
    genero: "macho",
    castrado: "não",
    dataNascimento: "08/12/2018",
    nome: "Mckenzie",
    nomeDono: "Kirby Faulkner",
    telefoneDono: "(877) 458-3633",
    dataUltimaVezQueTeveNoPet: "21/04/2019"
  },
  {
    raca: "Teckel",
    genero: "macho",
    castrado: "não",
    dataNascimento: "12/07/2016",
    nome: "Jordan",
    nomeDono: "Sondra Wall",
    telefoneDono: "(864) 600-2173",
    dataUltimaVezQueTeveNoPet: "07/07/2019"
  },
  {
    raca: "Collie",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "07/06/2014",
    nome: "Larsen",
    nomeDono: "Hale Ford",
    telefoneDono: "(812) 500-3714",
    dataUltimaVezQueTeveNoPet: "25/01/2019"
  },
  {
    raca: "Tamaskan",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "30/12/2017",
    nome: "Blanchard",
    nomeDono: "Brenda Mcdowell",
    telefoneDono: "(844) 521-2717",
    dataUltimaVezQueTeveNoPet: "13/01/2019"
  },
  {
    raca: "Maltês",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "12/10/2017",
    nome: "Kelley",
    nomeDono: "Gracie Santana",
    telefoneDono: "(986) 499-3586",
    dataUltimaVezQueTeveNoPet: "05/05/2019"
  },
  {
    raca: "Bedlington Terrier",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "27/09/2015",
    nome: "Turner",
    nomeDono: "Lillie Mayer",
    telefoneDono: "(821) 418-2914",
    dataUltimaVezQueTeveNoPet: "06/04/2019"
  },
  {
    raca: "Perdigueiro",
    genero: "macho",
    castrado: "não",
    dataNascimento: "05/10/2016",
    nome: "Daniels",
    nomeDono: "Lizzie Randall",
    telefoneDono: "(901) 414-2878",
    dataUltimaVezQueTeveNoPet: "17/01/2019"
  },
  {
    raca: "Saluki",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "05/10/2015",
    nome: "Brennan",
    nomeDono: "Carson Buckley",
    telefoneDono: "(915) 472-2391",
    dataUltimaVezQueTeveNoPet: "14/01/2019"
  },
  {
    raca: "Galgo",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "24/10/2017",
    nome: "Sykes",
    nomeDono: "Gibbs Beasley",
    telefoneDono: "(971) 588-3294",
    dataUltimaVezQueTeveNoPet: "09/05/2019"
  },
  {
    raca: "Bloodhound",
    genero: "macho",
    castrado: "não",
    dataNascimento: "13/09/2016",
    nome: "Bradford",
    nomeDono: "Riggs Dudley",
    telefoneDono: "(987) 419-2835",
    dataUltimaVezQueTeveNoPet: "12/03/2019"
  },
  {
    raca: "Pastor",
    genero: "macho",
    castrado: "não",
    dataNascimento: "23/03/2014",
    nome: "Ramos",
    nomeDono: "Fisher Spears",
    telefoneDono: "(961) 585-3047",
    dataUltimaVezQueTeveNoPet: "15/05/2019"
  },
  {
    raca: "Bearded Collie",
    genero: "macho",
    castrado: "não",
    dataNascimento: "15/05/2016",
    nome: "Willis",
    nomeDono: "Hubbard Hobbs",
    telefoneDono: "(996) 555-2382",
    dataUltimaVezQueTeveNoPet: "21/06/2019"
  },
  {
    raca: "Jack Russel Terrier",
    genero: "macho",
    castrado: "não",
    dataNascimento: "05/11/2015",
    nome: "Williamson",
    nomeDono: "Bentley Barrett",
    telefoneDono: "(978) 468-3041",
    dataUltimaVezQueTeveNoPet: "18/07/2019"
  },
  {
    raca: "Coton de Tuléar",
    genero: "macho",
    castrado: "não",
    dataNascimento: "10/12/2016",
    nome: "Greer",
    nomeDono: "Patsy Goff",
    telefoneDono: "(990) 571-2845",
    dataUltimaVezQueTeveNoPet: "12/03/2019"
  },
  {
    raca: "Shiba Inu",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "07/01/2014",
    nome: "Gardner",
    nomeDono: "Jeannie Holland",
    telefoneDono: "(975) 546-3993",
    dataUltimaVezQueTeveNoPet: "04/01/2019"
  },
  {
    raca: "Pastor",
    genero: "macho",
    castrado: "não",
    dataNascimento: "06/02/2018",
    nome: "Campbell",
    nomeDono: "Frazier Rodriguez",
    telefoneDono: "(883) 465-2721",
    dataUltimaVezQueTeveNoPet: "02/01/2019"
  },
  {
    raca: "Bullmastiff",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "28/08/2018",
    nome: "Higgins",
    nomeDono: "Parks Mathis",
    telefoneDono: "(977) 476-3405",
    dataUltimaVezQueTeveNoPet: "24/01/2019"
  },
  {
    raca: "Cocker Spaniel",
    genero: "macho",
    castrado: "não",
    dataNascimento: "05/09/2018",
    nome: "Delacruz",
    nomeDono: "Mullen Leach",
    telefoneDono: "(834) 429-3073",
    dataUltimaVezQueTeveNoPet: "07/06/2019"
  },
  {
    raca: "Mastife",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "17/01/2018",
    nome: "Smith",
    nomeDono: "Orr Lloyd",
    telefoneDono: "(851) 550-2858",
    dataUltimaVezQueTeveNoPet: "08/03/2019"
  },
  {
    raca: "Maltês",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "29/05/2015",
    nome: "Murray",
    nomeDono: "Janna Nicholson",
    telefoneDono: "(841) 522-3052",
    dataUltimaVezQueTeveNoPet: "02/07/2019"
  },
  {
    raca: "Basset Hound",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "24/08/2017",
    nome: "Riley",
    nomeDono: "Franks Baldwin",
    telefoneDono: "(857) 466-3386",
    dataUltimaVezQueTeveNoPet: "30/01/2019"
  },
  {
    raca: "Dachshund",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "15/05/2015",
    nome: "Sexton",
    nomeDono: "Compton Cole",
    telefoneDono: "(812) 479-2535",
    dataUltimaVezQueTeveNoPet: "25/01/2019"
  },
  {
    raca: "Boston Terrier",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "11/06/2019",
    nome: "Mcclure",
    nomeDono: "Fulton Lowery",
    telefoneDono: "(892) 463-3574",
    dataUltimaVezQueTeveNoPet: "26/05/2019"
  },
  {
    raca: "Cirneco do Etna",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "21/04/2019",
    nome: "Alvarez",
    nomeDono: "Roseann Manning",
    telefoneDono: "(896) 526-3940",
    dataUltimaVezQueTeveNoPet: "25/06/2019"
  },
  {
    raca: "Rottweiler",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "12/07/2019",
    nome: "Maddox",
    nomeDono: "Linda Kane",
    telefoneDono: "(837) 586-2402",
    dataUltimaVezQueTeveNoPet: "05/04/2019"
  },
  {
    raca: "Staffordshire Bull Terrier",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "12/01/2014",
    nome: "Lane",
    nomeDono: "Shelly Green",
    telefoneDono: "(830) 580-2555",
    dataUltimaVezQueTeveNoPet: "08/04/2019"
  },
  {
    raca: "Sabueso",
    genero: "macho",
    castrado: "não",
    dataNascimento: "12/03/2014",
    nome: "Burt",
    nomeDono: "Padilla Vinson",
    telefoneDono: "(853) 458-2172",
    dataUltimaVezQueTeveNoPet: "14/01/2019"
  },
  {
    raca: "Kuvasz",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "09/07/2018",
    nome: "Roman",
    nomeDono: "Huff Navarro",
    telefoneDono: "(812) 552-2755",
    dataUltimaVezQueTeveNoPet: "26/03/2019"
  },
  {
    raca: "São",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "04/07/2018",
    nome: "Snider",
    nomeDono: "Pierce Boone",
    telefoneDono: "(824) 437-2589",
    dataUltimaVezQueTeveNoPet: "27/05/2019"
  },
  {
    raca: "Kuvasz",
    genero: "macho",
    castrado: "não",
    dataNascimento: "13/12/2016",
    nome: "Castillo",
    nomeDono: "Pearlie Grant",
    telefoneDono: "(880) 502-2552",
    dataUltimaVezQueTeveNoPet: "02/03/2019"
  },
  {
    raca: "Border Collie",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "29/04/2014",
    nome: "Prince",
    nomeDono: "Pate Branch",
    telefoneDono: "(854) 594-3007",
    dataUltimaVezQueTeveNoPet: "13/07/2019"
  },
  {
    raca: "Labradoodle",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "19/09/2018",
    nome: "Salas",
    nomeDono: "Raymond Bennett",
    telefoneDono: "(901) 400-2924",
    dataUltimaVezQueTeveNoPet: "11/01/2019"
  },
  {
    raca: "Fila Brasileiro",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "07/07/2017",
    nome: "Clarke",
    nomeDono: "Reese Morgan",
    telefoneDono: "(828) 461-3146",
    dataUltimaVezQueTeveNoPet: "14/02/2019"
  },
  {
    raca: "Sem Raça Definida",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "11/01/2015",
    nome: "Cardenas",
    nomeDono: "Kimberley Griffith",
    telefoneDono: "(920) 500-3595",
    dataUltimaVezQueTeveNoPet: "06/06/2019"
  },
  {
    raca: "King Charles",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "31/03/2014",
    nome: "Peck",
    nomeDono: "Haley Avery",
    telefoneDono: "(937) 434-3933",
    dataUltimaVezQueTeveNoPet: "04/07/2019"
  },
  {
    raca: "Norfolk Terrier",
    genero: "macho",
    castrado: "não",
    dataNascimento: "11/09/2018",
    nome: "Jacobson",
    nomeDono: "Roberson Simon",
    telefoneDono: "(832) 469-2213",
    dataUltimaVezQueTeveNoPet: "19/06/2019"
  },
  {
    raca: "Buldogue",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "18/01/2014",
    nome: "Brady",
    nomeDono: "Greer Mcmahon",
    telefoneDono: "(985) 452-2880",
    dataUltimaVezQueTeveNoPet: "14/04/2019"
  },
  {
    raca: "Collie",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "21/11/2014",
    nome: "Caldwell",
    nomeDono: "Adrienne Gilbert",
    telefoneDono: "(953) 443-3197",
    dataUltimaVezQueTeveNoPet: "03/06/2019"
  },
  {
    raca: "Beagle",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "09/03/2016",
    nome: "Wolfe",
    nomeDono: "Reva Phillips",
    telefoneDono: "(963) 478-3471",
    dataUltimaVezQueTeveNoPet: "22/03/2019"
  },
  {
    raca: "Xoloitzcuintli",
    genero: "macho",
    castrado: "não",
    dataNascimento: "24/01/2015",
    nome: "Cain",
    nomeDono: "Louella Mcdaniel",
    telefoneDono: "(842) 590-3716",
    dataUltimaVezQueTeveNoPet: "05/01/2019"
  },
  {
    raca: "Elkhound",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "07/11/2017",
    nome: "Benton",
    nomeDono: "Meadows Rowland",
    telefoneDono: "(865) 592-3192",
    dataUltimaVezQueTeveNoPet: "13/05/2019"
  },
  {
    raca: "Scottish Terrier",
    genero: "macho",
    castrado: "não",
    dataNascimento: "30/08/2018",
    nome: "Obrien",
    nomeDono: "Day Nixon",
    telefoneDono: "(901) 442-3708",
    dataUltimaVezQueTeveNoPet: "17/02/2019"
  },
  {
    raca: "Chow Chow",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "23/05/2018",
    nome: "Anderson",
    nomeDono: "Glenna Levine",
    telefoneDono: "(913) 598-2245",
    dataUltimaVezQueTeveNoPet: "17/03/2019"
  },
  {
    raca: "Shiba Inu",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "08/01/2014",
    nome: "Duke",
    nomeDono: "Trujillo Steele",
    telefoneDono: "(899) 447-3131",
    dataUltimaVezQueTeveNoPet: "11/04/2019"
  },
  {
    raca: "Pointer",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "28/03/2019",
    nome: "Haley",
    nomeDono: "Blackburn Jimenez",
    telefoneDono: "(944) 478-3061",
    dataUltimaVezQueTeveNoPet: "27/06/2019"
  },
  {
    raca: "Scottish Terrier",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "14/01/2014",
    nome: "Nielsen",
    nomeDono: "Mary Herrera",
    telefoneDono: "(862) 482-2513",
    dataUltimaVezQueTeveNoPet: "22/03/2019"
  },
  {
    raca: "Setter",
    genero: "macho",
    castrado: "não",
    dataNascimento: "09/12/2014",
    nome: "Parsons",
    nomeDono: "Cassie Gates",
    telefoneDono: "(817) 538-3095",
    dataUltimaVezQueTeveNoPet: "13/04/2019"
  },
  {
    raca: "Shar-Pei",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "24/08/2018",
    nome: "Newman",
    nomeDono: "Russell Sharp",
    telefoneDono: "(994) 467-2694",
    dataUltimaVezQueTeveNoPet: "04/04/2019"
  },
  {
    raca: "Rottweiler",
    genero: "macho",
    castrado: "não",
    dataNascimento: "12/06/2019",
    nome: "Horne",
    nomeDono: "Wiggins Mccarty",
    telefoneDono: "(985) 513-2538",
    dataUltimaVezQueTeveNoPet: "09/02/2019"
  },
  {
    raca: "Cocker Spaniel",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "13/11/2014",
    nome: "Vaughan",
    nomeDono: "Hatfield Wong",
    telefoneDono: "(856) 413-2622",
    dataUltimaVezQueTeveNoPet: "13/04/2019"
  },
  {
    raca: "Border Collie",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "21/12/2015",
    nome: "Park",
    nomeDono: "Rosemary Rodgers",
    telefoneDono: "(905) 520-2657",
    dataUltimaVezQueTeveNoPet: "05/05/2019"
  },
  {
    raca: "Smooth Collie",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "23/02/2014",
    nome: "Floyd",
    nomeDono: "Hope Rosario",
    telefoneDono: "(943) 441-3475",
    dataUltimaVezQueTeveNoPet: "10/03/2019"
  },
  {
    raca: "Lakeland",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "17/07/2019",
    nome: "Levy",
    nomeDono: "Connie Molina",
    telefoneDono: "(907) 464-2329",
    dataUltimaVezQueTeveNoPet: "02/06/2019"
  },
  {
    raca: "Norfolk Terrier",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "10/09/2014",
    nome: "Wynn",
    nomeDono: "Chandra Rhodes",
    telefoneDono: "(843) 480-3877",
    dataUltimaVezQueTeveNoPet: "08/04/2019"
  },
  {
    raca: "Beagle",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "15/08/2018",
    nome: "Rose",
    nomeDono: "Eugenia Henderson",
    telefoneDono: "(857) 495-3696",
    dataUltimaVezQueTeveNoPet: "07/03/2019"
  },
  {
    raca: "Fila Brasileiro",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "15/01/2016",
    nome: "Pugh",
    nomeDono: "Angeline Le",
    telefoneDono: "(898) 444-3525",
    dataUltimaVezQueTeveNoPet: "22/07/2019"
  },
  {
    raca: "Foxhound",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "09/08/2016",
    nome: "Neal",
    nomeDono: "Daniels Benjamin",
    telefoneDono: "(902) 542-3237",
    dataUltimaVezQueTeveNoPet: "04/06/2019"
  },
  {
    raca: "Boxer",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "03/12/2018",
    nome: "Schwartz",
    nomeDono: "Ashley Calderon",
    telefoneDono: "(985) 599-3833",
    dataUltimaVezQueTeveNoPet: "22/04/2019"
  },
  {
    raca: "Dachshund",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "28/03/2019",
    nome: "Briggs",
    nomeDono: "Sally Patton",
    telefoneDono: "(900) 479-3388",
    dataUltimaVezQueTeveNoPet: "28/01/2019"
  },
  {
    raca: "Mastife",
    genero: "macho",
    castrado: "não",
    dataNascimento: "27/08/2016",
    nome: "Ramsey",
    nomeDono: "Jean Bailey",
    telefoneDono: "(906) 594-2198",
    dataUltimaVezQueTeveNoPet: "15/01/2019"
  },
  {
    raca: "Bichon Bolonhês",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "21/01/2019",
    nome: "Lindsay",
    nomeDono: "Cross Banks",
    telefoneDono: "(932) 478-2562",
    dataUltimaVezQueTeveNoPet: "08/02/2019"
  },
  {
    raca: "Pointer",
    genero: "macho",
    castrado: "não",
    dataNascimento: "05/06/2019",
    nome: "Dalton",
    nomeDono: "Hays Cooper",
    telefoneDono: "(966) 404-2339",
    dataUltimaVezQueTeveNoPet: "31/03/2019"
  },
  {
    raca: "Mastife",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "08/11/2016",
    nome: "Roth",
    nomeDono: "Wilkinson Lynch",
    telefoneDono: "(861) 441-3811",
    dataUltimaVezQueTeveNoPet: "11/03/2019"
  },
  {
    raca: "Shiba Inu",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "10/02/2015",
    nome: "Kennedy",
    nomeDono: "Rosa Weiss",
    telefoneDono: "(949) 456-3584",
    dataUltimaVezQueTeveNoPet: "06/01/2019"
  },
  {
    raca: "Coton de Tuléar",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "13/04/2014",
    nome: "Noel",
    nomeDono: "Lilia Cohen",
    telefoneDono: "(826) 554-3361",
    dataUltimaVezQueTeveNoPet: "18/01/2019"
  },
  {
    raca: "Golden Retriever",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "23/09/2014",
    nome: "Glenn",
    nomeDono: "Harrington Harris",
    telefoneDono: "(883) 414-2132",
    dataUltimaVezQueTeveNoPet: "10/02/2019"
  },
  {
    raca: "Alemão",
    genero: "macho",
    castrado: "não",
    dataNascimento: "18/07/2019",
    nome: "Stark",
    nomeDono: "Jillian Reeves",
    telefoneDono: "(926) 561-2757",
    dataUltimaVezQueTeveNoPet: "01/07/2019"
  },
  {
    raca: "Caniche",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "23/09/2018",
    nome: "Suarez",
    nomeDono: "Becky Moore",
    telefoneDono: "(884) 523-2793",
    dataUltimaVezQueTeveNoPet: "10/05/2019"
  },
  {
    raca: "Saluki",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "29/06/2017",
    nome: "Clements",
    nomeDono: "Muriel Webster",
    telefoneDono: "(927) 404-2393",
    dataUltimaVezQueTeveNoPet: "12/02/2019"
  },
  {
    raca: "King Charles",
    genero: "macho",
    castrado: "não",
    dataNascimento: "09/11/2014",
    nome: "Martin",
    nomeDono: "Lee Albert",
    telefoneDono: "(974) 458-3762",
    dataUltimaVezQueTeveNoPet: "28/02/2019"
  },
  {
    raca: "Border Terrier",
    genero: "macho",
    castrado: "não",
    dataNascimento: "07/01/2017",
    nome: "Guerra",
    nomeDono: "Willis Mccarthy",
    telefoneDono: "(833) 474-2744",
    dataUltimaVezQueTeveNoPet: "18/01/2019"
  },
  {
    raca: "Dandie Dinmont Terrier",
    genero: "macho",
    castrado: "não",
    dataNascimento: "20/05/2015",
    nome: "Hyde",
    nomeDono: "Cameron Mcconnell",
    telefoneDono: "(832) 460-2825",
    dataUltimaVezQueTeveNoPet: "31/01/2019"
  },
  {
    raca: "Skye Terrier",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "11/05/2016",
    nome: "Pena",
    nomeDono: "Luz Frye",
    telefoneDono: "(866) 494-2652",
    dataUltimaVezQueTeveNoPet: "09/04/2019"
  },
  {
    raca: "Bernardo",
    genero: "macho",
    castrado: "não",
    dataNascimento: "25/08/2016",
    nome: "Figueroa",
    nomeDono: "Humphrey Powell",
    telefoneDono: "(945) 422-3859",
    dataUltimaVezQueTeveNoPet: "08/07/2019"
  },
  {
    raca: "Bichon Frisé",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "02/06/2014",
    nome: "Ellison",
    nomeDono: "Myers Wilkerson",
    telefoneDono: "(924) 427-2821",
    dataUltimaVezQueTeveNoPet: "27/01/2019"
  },
  {
    raca: "Norfolk Terrier",
    genero: "macho",
    castrado: "não",
    dataNascimento: "04/09/2017",
    nome: "Stanley",
    nomeDono: "Sandra Shaw",
    telefoneDono: "(803) 569-3360",
    dataUltimaVezQueTeveNoPet: "14/05/2019"
  },
  {
    raca: "Afegão",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "12/11/2017",
    nome: "Gallegos",
    nomeDono: "Willie Mckinney",
    telefoneDono: "(918) 555-2834",
    dataUltimaVezQueTeveNoPet: "01/04/2019"
  },
  {
    raca: "Mastin",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "17/05/2015",
    nome: "Myers",
    nomeDono: "Barrera Waller",
    telefoneDono: "(886) 589-3701",
    dataUltimaVezQueTeveNoPet: "20/04/2019"
  },
  {
    raca: "Foxhound",
    genero: "macho",
    castrado: "não",
    dataNascimento: "02/06/2017",
    nome: "Wilder",
    nomeDono: "Valentine Johnson",
    telefoneDono: "(868) 497-2934",
    dataUltimaVezQueTeveNoPet: "14/02/2019"
  },
  {
    raca: "Terrier",
    genero: "macho",
    castrado: "não",
    dataNascimento: "07/07/2015",
    nome: "Burnett",
    nomeDono: "Shelby Sheppard",
    telefoneDono: "(978) 477-2887",
    dataUltimaVezQueTeveNoPet: "12/04/2019"
  },
  {
    raca: "Welsh Corgi",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "02/09/2015",
    nome: "Bryant",
    nomeDono: "Amber Mcclain",
    telefoneDono: "(946) 541-2413",
    dataUltimaVezQueTeveNoPet: "11/05/2019"
  },
  {
    raca: "Irlandés",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "03/01/2018",
    nome: "Vazquez",
    nomeDono: "Richmond Berg",
    telefoneDono: "(915) 438-3321",
    dataUltimaVezQueTeveNoPet: "04/07/2019"
  },
  {
    raca: "Bearded Collie",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "13/03/2019",
    nome: "Decker",
    nomeDono: "Stella Jones",
    telefoneDono: "(916) 404-2706",
    dataUltimaVezQueTeveNoPet: "30/05/2019"
  },
  {
    raca: "Bernese Mountain Dog",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "11/04/2017",
    nome: "Velazquez",
    nomeDono: "Yvette Stephenson",
    telefoneDono: "(846) 402-3384",
    dataUltimaVezQueTeveNoPet: "30/03/2019"
  },
  {
    raca: "Weimaraner",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "20/04/2015",
    nome: "Vega",
    nomeDono: "Margery Workman",
    telefoneDono: "(981) 518-3319",
    dataUltimaVezQueTeveNoPet: "21/01/2019"
  },
  {
    raca: "Doberman",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "12/11/2018",
    nome: "Morin",
    nomeDono: "Glass Shannon",
    telefoneDono: "(863) 538-3200",
    dataUltimaVezQueTeveNoPet: "09/07/2019"
  },
  {
    raca: "Sabueso",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "25/11/2017",
    nome: "Anthony",
    nomeDono: "Maryann Bolton",
    telefoneDono: "(854) 476-2613",
    dataUltimaVezQueTeveNoPet: "17/03/2019"
  },
  {
    raca: "West Highland",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "31/08/2014",
    nome: "Olson",
    nomeDono: "York Carlson",
    telefoneDono: "(984) 476-3261",
    dataUltimaVezQueTeveNoPet: "05/05/2019"
  },
  {
    raca: "SilKy Terrier",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "03/12/2015",
    nome: "Dunlap",
    nomeDono: "Stout Burns",
    telefoneDono: "(817) 551-3895",
    dataUltimaVezQueTeveNoPet: "01/04/2019"
  },
  {
    raca: "Yorkshire Terrier",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "28/01/2019",
    nome: "Stein",
    nomeDono: "Marva Hicks",
    telefoneDono: "(913) 591-3981",
    dataUltimaVezQueTeveNoPet: "02/03/2019"
  },
  {
    raca: "Coton de Tuléar",
    genero: "macho",
    castrado: "não",
    dataNascimento: "15/03/2018",
    nome: "Ratliff",
    nomeDono: "Darlene Thornton",
    telefoneDono: "(869) 551-3683",
    dataUltimaVezQueTeveNoPet: "16/07/2019"
  },
  {
    raca: "Foxhound",
    genero: "macho",
    castrado: "não",
    dataNascimento: "20/04/2017",
    nome: "Quinn",
    nomeDono: "Morgan Weaver",
    telefoneDono: "(998) 511-3817",
    dataUltimaVezQueTeveNoPet: "22/01/2019"
  },
  {
    raca: "Shiba Inu",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "01/04/2016",
    nome: "Hubbard",
    nomeDono: "Sanders Flowers",
    telefoneDono: "(982) 530-2653",
    dataUltimaVezQueTeveNoPet: "10/04/2019"
  },
  {
    raca: "Collie",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "27/05/2018",
    nome: "Mclaughlin",
    nomeDono: "Munoz Small",
    telefoneDono: "(801) 523-3807",
    dataUltimaVezQueTeveNoPet: "21/07/2019"
  },
  {
    raca: "Beagle",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "02/04/2015",
    nome: "Conley",
    nomeDono: "Matilda Wilson",
    telefoneDono: "(902) 568-3251",
    dataUltimaVezQueTeveNoPet: "08/03/2019"
  },
  {
    raca: "Whippet",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "27/09/2016",
    nome: "Atkins",
    nomeDono: "Klein Jarvis",
    telefoneDono: "(892) 497-3638",
    dataUltimaVezQueTeveNoPet: "23/02/2019"
  },
  {
    raca: "Bichon Havanês",
    genero: "macho",
    castrado: "não",
    dataNascimento: "16/07/2017",
    nome: "Drake",
    nomeDono: "Anna Hatfield",
    telefoneDono: "(825) 424-3878",
    dataUltimaVezQueTeveNoPet: "26/07/2019"
  },
  {
    raca: "Bull Terrier",
    genero: "macho",
    castrado: "não",
    dataNascimento: "08/03/2018",
    nome: "Hines",
    nomeDono: "Ballard Gross",
    telefoneDono: "(992) 473-2549",
    dataUltimaVezQueTeveNoPet: "03/07/2019"
  },
  {
    raca: "Lhasa Apso",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "18/07/2017",
    nome: "Dixon",
    nomeDono: "Riddle Hamilton",
    telefoneDono: "(873) 589-3282",
    dataUltimaVezQueTeveNoPet: "04/05/2019"
  },
  {
    raca: "Greyhound",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "17/06/2017",
    nome: "Patterson",
    nomeDono: "Olive Farley",
    telefoneDono: "(955) 502-3583",
    dataUltimaVezQueTeveNoPet: "01/01/2019"
  },
  {
    raca: "Mastife",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "01/05/2019",
    nome: "Macias",
    nomeDono: "Nixon Schultz",
    telefoneDono: "(916) 574-2956",
    dataUltimaVezQueTeveNoPet: "17/04/2019"
  },
  {
    raca: "Afegão",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "09/05/2014",
    nome: "Mcintosh",
    nomeDono: "Gaines Barry",
    telefoneDono: "(964) 564-3100",
    dataUltimaVezQueTeveNoPet: "17/05/2019"
  },
  {
    raca: "Chow Chow",
    genero: "macho",
    castrado: "não",
    dataNascimento: "10/04/2014",
    nome: "Sherman",
    nomeDono: "Valencia Fleming",
    telefoneDono: "(836) 559-2852",
    dataUltimaVezQueTeveNoPet: "29/03/2019"
  },
  {
    raca: "Shih Tzu",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "22/10/2017",
    nome: "Silva",
    nomeDono: "Boone Wells",
    telefoneDono: "(803) 532-3587",
    dataUltimaVezQueTeveNoPet: "10/01/2019"
  },
  {
    raca: "Xoloitzcuintli",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "22/06/2017",
    nome: "Skinner",
    nomeDono: "Veronica Pacheco",
    telefoneDono: "(977) 410-2562",
    dataUltimaVezQueTeveNoPet: "11/04/2019"
  },
  {
    raca: "Barbet",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "24/11/2014",
    nome: "Lester",
    nomeDono: "Rowe Morales",
    telefoneDono: "(821) 431-2750",
    dataUltimaVezQueTeveNoPet: "06/01/2019"
  },
  {
    raca: "Irlandés",
    genero: "macho",
    castrado: "não",
    dataNascimento: "27/04/2015",
    nome: "Pittman",
    nomeDono: "Guadalupe Barr",
    telefoneDono: "(879) 442-3495",
    dataUltimaVezQueTeveNoPet: "24/01/2019"
  },
  {
    raca: "Beagle",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "11/10/2018",
    nome: "Guthrie",
    nomeDono: "Helene Pickett",
    telefoneDono: "(985) 543-3473",
    dataUltimaVezQueTeveNoPet: "04/01/2019"
  },
  {
    raca: "Whippet",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "31/01/2019",
    nome: "Rowe",
    nomeDono: "Herrera Ewing",
    telefoneDono: "(972) 535-2097",
    dataUltimaVezQueTeveNoPet: "17/01/2019"
  },
  {
    raca: "Basenji",
    genero: "macho",
    castrado: "não",
    dataNascimento: "12/08/2018",
    nome: "Chambers",
    nomeDono: "Mueller Scott",
    telefoneDono: "(966) 542-2331",
    dataUltimaVezQueTeveNoPet: "23/04/2019"
  },
  {
    raca: "Rhodesian",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "01/04/2015",
    nome: "Woodward",
    nomeDono: "Lula Head",
    telefoneDono: "(966) 556-2173",
    dataUltimaVezQueTeveNoPet: "09/04/2019"
  },
  {
    raca: "Spitz Alemão",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "14/12/2017",
    nome: "Dillard",
    nomeDono: "Booker Eaton",
    telefoneDono: "(954) 575-3761",
    dataUltimaVezQueTeveNoPet: "08/02/2019"
  },
  {
    raca: "Komondor",
    genero: "macho",
    castrado: "não",
    dataNascimento: "12/05/2017",
    nome: "Graves",
    nomeDono: "Dejesus Barnes",
    telefoneDono: "(844) 534-2200",
    dataUltimaVezQueTeveNoPet: "07/04/2019"
  },
  {
    raca: "Shiba Inu",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "16/05/2018",
    nome: "Tillman",
    nomeDono: "Clemons Blackwell",
    telefoneDono: "(937) 488-2254",
    dataUltimaVezQueTeveNoPet: "23/03/2019"
  },
  {
    raca: "Bichon Bolonhês",
    genero: "macho",
    castrado: "não",
    dataNascimento: "07/02/2016",
    nome: "Barker",
    nomeDono: "Espinoza Boyd",
    telefoneDono: "(991) 510-3093",
    dataUltimaVezQueTeveNoPet: "18/04/2019"
  },
  {
    raca: "Boiadeiro",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "23/03/2019",
    nome: "Owen",
    nomeDono: "Yates Wolf",
    telefoneDono: "(846) 588-2917",
    dataUltimaVezQueTeveNoPet: "24/06/2019"
  },
  {
    raca: "Greyhound",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "06/03/2016",
    nome: "Whitfield",
    nomeDono: "Miranda Holden",
    telefoneDono: "(833) 401-2887",
    dataUltimaVezQueTeveNoPet: "21/05/2019"
  },
  {
    raca: "Bernese Mountain Dog",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "14/08/2016",
    nome: "Crane",
    nomeDono: "Sheila Lawrence",
    telefoneDono: "(869) 479-3086",
    dataUltimaVezQueTeveNoPet: "26/02/2019"
  },
  {
    raca: "Pitbull",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "16/04/2017",
    nome: "Guzman",
    nomeDono: "Barbra Walter",
    telefoneDono: "(904) 463-3710",
    dataUltimaVezQueTeveNoPet: "18/05/2019"
  },
  {
    raca: "Mastin",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "07/11/2018",
    nome: "Barton",
    nomeDono: "Fanny Hansen",
    telefoneDono: "(900) 403-2734",
    dataUltimaVezQueTeveNoPet: "01/03/2019"
  },
  {
    raca: "Akita Inu",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "12/04/2015",
    nome: "Kinney",
    nomeDono: "Hardin Hendricks",
    telefoneDono: "(810) 449-3760",
    dataUltimaVezQueTeveNoPet: "10/03/2019"
  },
  {
    raca: "Gos d’Atura",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "04/04/2015",
    nome: "Gilmore",
    nomeDono: "Imogene Greene",
    telefoneDono: "(969) 472-3488",
    dataUltimaVezQueTeveNoPet: "27/04/2019"
  },
  {
    raca: "Caniche",
    genero: "macho",
    castrado: "não",
    dataNascimento: "13/07/2019",
    nome: "Kirby",
    nomeDono: "Mills Torres",
    telefoneDono: "(932) 573-2672",
    dataUltimaVezQueTeveNoPet: "23/03/2019"
  },
  {
    raca: "Bichon Havanês",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "27/05/2019",
    nome: "Cook",
    nomeDono: "Joan Klein",
    telefoneDono: "(903) 420-2435",
    dataUltimaVezQueTeveNoPet: "04/07/2019"
  },
  {
    raca: "Basset Hound",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "23/09/2018",
    nome: "Howell",
    nomeDono: "Lynette Pennington",
    telefoneDono: "(963) 400-3113",
    dataUltimaVezQueTeveNoPet: "21/01/2019"
  },
  {
    raca: "Shih Tzu",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "28/02/2016",
    nome: "Doyle",
    nomeDono: "Ayers Nelson",
    telefoneDono: "(990) 480-3286",
    dataUltimaVezQueTeveNoPet: "06/06/2019"
  },
  {
    raca: "Staffordshire Bull Terrier",
    genero: "macho",
    castrado: "não",
    dataNascimento: "27/02/2017",
    nome: "Webb",
    nomeDono: "Susie Kirk",
    telefoneDono: "(954) 536-3517",
    dataUltimaVezQueTeveNoPet: "06/06/2019"
  },
  {
    raca: "Kuvasz",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "19/05/2018",
    nome: "Davenport",
    nomeDono: "Estelle Moss",
    telefoneDono: "(862) 530-3737",
    dataUltimaVezQueTeveNoPet: "19/06/2019"
  },
  {
    raca: "Rhodesian",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "31/08/2018",
    nome: "Montoya",
    nomeDono: "Agnes Marsh",
    telefoneDono: "(819) 567-3038",
    dataUltimaVezQueTeveNoPet: "21/02/2019"
  },
  {
    raca: "Grifo da Bélgica",
    genero: "macho",
    castrado: "não",
    dataNascimento: "08/08/2017",
    nome: "Wiggins",
    nomeDono: "Valeria Wilkins",
    telefoneDono: "(910) 543-2679",
    dataUltimaVezQueTeveNoPet: "18/01/2019"
  },
  {
    raca: "Border Collie",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "22/01/2017",
    nome: "Pruitt",
    nomeDono: "Terri Cannon",
    telefoneDono: "(928) 450-2968",
    dataUltimaVezQueTeveNoPet: "15/07/2019"
  },
  {
    raca: "Shih Tzu",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "24/12/2017",
    nome: "Robles",
    nomeDono: "Isabelle Zamora",
    telefoneDono: "(984) 442-2190",
    dataUltimaVezQueTeveNoPet: "04/01/2019"
  },
  {
    raca: "Pastor",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "30/07/2015",
    nome: "Rivas",
    nomeDono: "Saundra Whitney",
    telefoneDono: "(920) 415-3330",
    dataUltimaVezQueTeveNoPet: "28/06/2019"
  },
  {
    raca: "Caniche",
    genero: "macho",
    castrado: "não",
    dataNascimento: "21/11/2015",
    nome: "Oneal",
    nomeDono: "Peck Watson",
    telefoneDono: "(989) 562-2700",
    dataUltimaVezQueTeveNoPet: "02/02/2019"
  },
  {
    raca: "Kuvasz",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "14/07/2016",
    nome: "Bates",
    nomeDono: "Jodi Saunders",
    telefoneDono: "(864) 438-2654",
    dataUltimaVezQueTeveNoPet: "09/04/2019"
  },
  {
    raca: "Collie",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "10/06/2015",
    nome: "Wright",
    nomeDono: "Michelle Davidson",
    telefoneDono: "(851) 495-2475",
    dataUltimaVezQueTeveNoPet: "16/05/2019"
  },
  {
    raca: "Shih Tzu",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "14/06/2018",
    nome: "Warren",
    nomeDono: "Aimee Stone",
    telefoneDono: "(896) 470-3310",
    dataUltimaVezQueTeveNoPet: "19/02/2019"
  },
  {
    raca: "Smooth Collie",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "26/08/2016",
    nome: "Hurst",
    nomeDono: "Kerr Mclean",
    telefoneDono: "(904) 513-3935",
    dataUltimaVezQueTeveNoPet: "14/03/2019"
  },
  {
    raca: "Papillon",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "25/08/2014",
    nome: "Reid",
    nomeDono: "Avis Key",
    telefoneDono: "(937) 581-2924",
    dataUltimaVezQueTeveNoPet: "02/03/2019"
  },
  {
    raca: "Terrier",
    genero: "macho",
    castrado: "não",
    dataNascimento: "10/04/2019",
    nome: "Copeland",
    nomeDono: "Vicki Wilcox",
    telefoneDono: "(907) 571-3608",
    dataUltimaVezQueTeveNoPet: "14/01/2019"
  },
  {
    raca: "Basset Hound",
    genero: "macho",
    castrado: "não",
    dataNascimento: "19/10/2014",
    nome: "Cotton",
    nomeDono: "Stokes Wood",
    telefoneDono: "(994) 458-2917",
    dataUltimaVezQueTeveNoPet: "27/02/2019"
  },
  {
    raca: "Bull Terrier",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "05/10/2018",
    nome: "Herring",
    nomeDono: "Mayra Harmon",
    telefoneDono: "(987) 418-2983",
    dataUltimaVezQueTeveNoPet: "26/06/2019"
  },
  {
    raca: "Tamaskan",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "10/11/2014",
    nome: "Patrick",
    nomeDono: "Bass Calhoun",
    telefoneDono: "(835) 452-2649",
    dataUltimaVezQueTeveNoPet: "26/01/2019"
  },
  {
    raca: "Bichon Havanês",
    genero: "macho",
    castrado: "não",
    dataNascimento: "29/06/2014",
    nome: "Holman",
    nomeDono: "Joann Perry",
    telefoneDono: "(934) 551-2809",
    dataUltimaVezQueTeveNoPet: "05/06/2019"
  },
  {
    raca: "Rottweiler",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "17/12/2014",
    nome: "Love",
    nomeDono: "Lavonne Ray",
    telefoneDono: "(842) 471-2244",
    dataUltimaVezQueTeveNoPet: "10/01/2019"
  },
  {
    raca: "Galgo",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "06/08/2015",
    nome: "Stafford",
    nomeDono: "Deanna Velez",
    telefoneDono: "(919) 431-2917",
    dataUltimaVezQueTeveNoPet: "03/02/2019"
  },
  {
    raca: "Chihuahua",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "02/09/2018",
    nome: "Wooten",
    nomeDono: "Mcfadden Compton",
    telefoneDono: "(887) 556-2357",
    dataUltimaVezQueTeveNoPet: "09/07/2019"
  },
  {
    raca: "Akita Americano",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "07/05/2016",
    nome: "Oneill",
    nomeDono: "Whitney Vasquez",
    telefoneDono: "(808) 501-2601",
    dataUltimaVezQueTeveNoPet: "27/04/2019"
  },
  {
    raca: "Cirneco do Etna",
    genero: "macho",
    castrado: "não",
    dataNascimento: "27/10/2015",
    nome: "Moon",
    nomeDono: "Sampson Matthews",
    telefoneDono: "(969) 574-3424",
    dataUltimaVezQueTeveNoPet: "27/01/2019"
  },
  {
    raca: "Beagle",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "30/03/2018",
    nome: "Frank",
    nomeDono: "Kathleen Foley",
    telefoneDono: "(859) 461-2605",
    dataUltimaVezQueTeveNoPet: "04/06/2019"
  },
  {
    raca: "Poodle",
    genero: "macho",
    castrado: "não",
    dataNascimento: "04/10/2014",
    nome: "Jacobs",
    nomeDono: "Dale Fisher",
    telefoneDono: "(830) 447-2621",
    dataUltimaVezQueTeveNoPet: "19/02/2019"
  },
  {
    raca: "Staffordshire Bull Terrier",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "22/02/2016",
    nome: "Noble",
    nomeDono: "Ferguson Cherry",
    telefoneDono: "(944) 442-2893",
    dataUltimaVezQueTeveNoPet: "17/04/2019"
  },
  {
    raca: "King Charles",
    genero: "macho",
    castrado: "não",
    dataNascimento: "17/04/2016",
    nome: "Holmes",
    nomeDono: "Debora Fields",
    telefoneDono: "(977) 512-3373",
    dataUltimaVezQueTeveNoPet: "02/03/2019"
  },
  {
    raca: "Tosa",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "29/11/2018",
    nome: "Robbins",
    nomeDono: "Branch Sims",
    telefoneDono: "(944) 455-2761",
    dataUltimaVezQueTeveNoPet: "23/02/2019"
  },
  {
    raca: "Bloodhound",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "07/05/2017",
    nome: "Young",
    nomeDono: "Charlotte Reese",
    telefoneDono: "(813) 586-3577",
    dataUltimaVezQueTeveNoPet: "20/06/2019"
  },
  {
    raca: "Bichon Bolonhês",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "20/01/2019",
    nome: "Camacho",
    nomeDono: "Schroeder Cruz",
    telefoneDono: "(999) 478-2748",
    dataUltimaVezQueTeveNoPet: "10/05/2019"
  },
  {
    raca: "Collie",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "12/04/2019",
    nome: "Sutton",
    nomeDono: "Odonnell Hoffman",
    telefoneDono: "(921) 588-3758",
    dataUltimaVezQueTeveNoPet: "05/07/2019"
  },
  {
    raca: "Pinscher",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "30/01/2018",
    nome: "Padilla",
    nomeDono: "Gabrielle Horn",
    telefoneDono: "(855) 462-2186",
    dataUltimaVezQueTeveNoPet: "21/07/2019"
  },
  {
    raca: "Alano",
    genero: "macho",
    castrado: "não",
    dataNascimento: "04/11/2016",
    nome: "Potter",
    nomeDono: "Fleming Cote",
    telefoneDono: "(881) 539-3794",
    dataUltimaVezQueTeveNoPet: "18/03/2019"
  },
  {
    raca: "Gos d’Atura",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "01/11/2018",
    nome: "Meyers",
    nomeDono: "Douglas Kelly",
    telefoneDono: "(926) 474-2034",
    dataUltimaVezQueTeveNoPet: "04/04/2019"
  },
  {
    raca: "Alano",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "10/10/2018",
    nome: "Palmer",
    nomeDono: "Talley Knox",
    telefoneDono: "(837) 441-2337",
    dataUltimaVezQueTeveNoPet: "05/01/2019"
  },
  {
    raca: "Podengo",
    genero: "macho",
    castrado: "não",
    dataNascimento: "09/08/2018",
    nome: "Garrett",
    nomeDono: "Kristin Cabrera",
    telefoneDono: "(863) 587-3843",
    dataUltimaVezQueTeveNoPet: "16/03/2019"
  },
  {
    raca: "Tamaskan",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "09/10/2016",
    nome: "Goodman",
    nomeDono: "Marcella Garza",
    telefoneDono: "(940) 478-3382",
    dataUltimaVezQueTeveNoPet: "22/04/2019"
  },
  {
    raca: "Border Terrier",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "23/09/2016",
    nome: "Walton",
    nomeDono: "Krystal Lara",
    telefoneDono: "(846) 538-2831",
    dataUltimaVezQueTeveNoPet: "16/04/2019"
  },
  {
    raca: "Podengo",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "07/01/2018",
    nome: "Tate",
    nomeDono: "Stein Fernandez",
    telefoneDono: "(993) 432-2880",
    dataUltimaVezQueTeveNoPet: "02/02/2019"
  },
  {
    raca: "Shar-Pei",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "29/11/2017",
    nome: "Jensen",
    nomeDono: "Serrano Fitzgerald",
    telefoneDono: "(856) 401-2074",
    dataUltimaVezQueTeveNoPet: "15/06/2019"
  },
  {
    raca: "Dogue",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "14/09/2014",
    nome: "Boyle",
    nomeDono: "Jacobson Huffman",
    telefoneDono: "(922) 522-3535",
    dataUltimaVezQueTeveNoPet: "23/02/2019"
  },
  {
    raca: "Tamaskan",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "01/11/2018",
    nome: "Kidd",
    nomeDono: "Mccall Wiley",
    telefoneDono: "(923) 453-3739",
    dataUltimaVezQueTeveNoPet: "29/01/2019"
  },
  {
    raca: "Samoieda",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "03/07/2015",
    nome: "Goodwin",
    nomeDono: "Leila Murphy",
    telefoneDono: "(941) 569-2200",
    dataUltimaVezQueTeveNoPet: "22/05/2019"
  },
  {
    raca: "Teckel",
    genero: "macho",
    castrado: "não",
    dataNascimento: "26/11/2018",
    nome: "Black",
    nomeDono: "Tracie Leonard",
    telefoneDono: "(981) 590-3867",
    dataUltimaVezQueTeveNoPet: "12/04/2019"
  },
  {
    raca: "Alemão",
    genero: "macho",
    castrado: "não",
    dataNascimento: "28/11/2015",
    nome: "Ayers",
    nomeDono: "Watkins Marshall",
    telefoneDono: "(887) 488-2137",
    dataUltimaVezQueTeveNoPet: "04/01/2019"
  },
  {
    raca: "Lhasa Apso",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "13/10/2016",
    nome: "Taylor",
    nomeDono: "Hannah Frederick",
    telefoneDono: "(809) 528-2517",
    dataUltimaVezQueTeveNoPet: "28/06/2019"
  },
  {
    raca: "Affenpinscher",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "22/05/2017",
    nome: "Waters",
    nomeDono: "Larsen Colon",
    telefoneDono: "(805) 559-2349",
    dataUltimaVezQueTeveNoPet: "08/04/2019"
  },
  {
    raca: "Bedlington Terrier",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "14/12/2018",
    nome: "Thomas",
    nomeDono: "Felicia Roberts",
    telefoneDono: "(873) 508-3229",
    dataUltimaVezQueTeveNoPet: "20/04/2019"
  },
  {
    raca: "Sabueso",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "01/02/2017",
    nome: "Austin",
    nomeDono: "Beatriz Baker",
    telefoneDono: "(880) 556-3508",
    dataUltimaVezQueTeveNoPet: "23/07/2019"
  },
  {
    raca: "Affenpinscher",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "06/04/2014",
    nome: "Martinez",
    nomeDono: "Lee Roberson",
    telefoneDono: "(953) 432-2321",
    dataUltimaVezQueTeveNoPet: "30/04/2019"
  },
  {
    raca: "Alemão",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "13/03/2017",
    nome: "Mckee",
    nomeDono: "Noemi Tyler",
    telefoneDono: "(813) 453-2683",
    dataUltimaVezQueTeveNoPet: "16/04/2019"
  },
  {
    raca: "Terrier",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "24/02/2016",
    nome: "Nash",
    nomeDono: "Keith Rocha",
    telefoneDono: "(974) 597-2170",
    dataUltimaVezQueTeveNoPet: "25/01/2019"
  },
  {
    raca: "Shiba Inu",
    genero: "macho",
    castrado: "não",
    dataNascimento: "20/06/2018",
    nome: "Trujillo",
    nomeDono: "Alford Battle",
    telefoneDono: "(903) 464-2333",
    dataUltimaVezQueTeveNoPet: "19/05/2019"
  },
  {
    raca: "Boxer",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "21/11/2018",
    nome: "Cummings",
    nomeDono: "Leigh Frost",
    telefoneDono: "(860) 408-3874",
    dataUltimaVezQueTeveNoPet: "23/02/2019"
  },
  {
    raca: "Labradoodle",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "29/05/2019",
    nome: "Stephens",
    nomeDono: "Raquel Terry",
    telefoneDono: "(958) 587-3196",
    dataUltimaVezQueTeveNoPet: "20/04/2019"
  },
  {
    raca: "Cane Corso",
    genero: "macho",
    castrado: "não",
    dataNascimento: "14/01/2016",
    nome: "Lopez",
    nomeDono: "Georgia Odonnell",
    telefoneDono: "(904) 403-3852",
    dataUltimaVezQueTeveNoPet: "12/07/2019"
  },
  {
    raca: "Xoloitzcuintli",
    genero: "macho",
    castrado: "não",
    dataNascimento: "28/09/2018",
    nome: "Hickman",
    nomeDono: "Rasmussen Hebert",
    telefoneDono: "(957) 594-3554",
    dataUltimaVezQueTeveNoPet: "05/05/2019"
  },
  {
    raca: "King Charles",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "11/06/2014",
    nome: "Forbes",
    nomeDono: "Mason Daniel",
    telefoneDono: "(922) 403-3010",
    dataUltimaVezQueTeveNoPet: "22/05/2019"
  },
  {
    raca: "Laika",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "01/04/2017",
    nome: "Rodriquez",
    nomeDono: "Cooke Harper",
    telefoneDono: "(943) 418-3365",
    dataUltimaVezQueTeveNoPet: "24/06/2019"
  },
  {
    raca: "Tosa",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "29/08/2018",
    nome: "Mcpherson",
    nomeDono: "Guy Hayden",
    telefoneDono: "(881) 599-2319",
    dataUltimaVezQueTeveNoPet: "25/07/2019"
  },
  {
    raca: "Dandie Dinmont Terrier",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "14/12/2017",
    nome: "Cooley",
    nomeDono: "Jacobs Alexander",
    telefoneDono: "(822) 419-3761",
    dataUltimaVezQueTeveNoPet: "03/07/2019"
  },
  {
    raca: "Pointer",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "12/07/2018",
    nome: "Ruiz",
    nomeDono: "Tiffany Livingston",
    telefoneDono: "(870) 583-3542",
    dataUltimaVezQueTeveNoPet: "31/01/2019"
  },
  {
    raca: "Dogue",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "16/08/2017",
    nome: "Erickson",
    nomeDono: "Grace Pierce",
    telefoneDono: "(907) 462-3569",
    dataUltimaVezQueTeveNoPet: "11/03/2019"
  },
  {
    raca: "Akita Americano",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "29/05/2015",
    nome: "Finley",
    nomeDono: "Stacey Mejia",
    telefoneDono: "(934) 561-3048",
    dataUltimaVezQueTeveNoPet: "07/02/2019"
  },
  {
    raca: "Boiadeiro",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "26/08/2014",
    nome: "Acevedo",
    nomeDono: "Belinda Norman",
    telefoneDono: "(875) 510-3648",
    dataUltimaVezQueTeveNoPet: "03/04/2019"
  },
  {
    raca: "Terrier",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "21/03/2018",
    nome: "Bird",
    nomeDono: "Grant Contreras",
    telefoneDono: "(872) 588-2027",
    dataUltimaVezQueTeveNoPet: "07/05/2019"
  },
  {
    raca: "Shiba Inu",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "29/08/2016",
    nome: "Heath",
    nomeDono: "Christie Rutledge",
    telefoneDono: "(900) 469-3929",
    dataUltimaVezQueTeveNoPet: "27/04/2019"
  },
  {
    raca: "Bernardo",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "28/11/2018",
    nome: "Hart",
    nomeDono: "Iva Pace",
    telefoneDono: "(852) 600-3893",
    dataUltimaVezQueTeveNoPet: "30/03/2019"
  },
  {
    raca: "Elkhound",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "01/09/2017",
    nome: "Brooks",
    nomeDono: "Ursula Knapp",
    telefoneDono: "(994) 477-2620",
    dataUltimaVezQueTeveNoPet: "08/01/2019"
  },
  {
    raca: "Scottish Terrier",
    genero: "macho",
    castrado: "não",
    dataNascimento: "30/12/2017",
    nome: "Rollins",
    nomeDono: "Alissa Mann",
    telefoneDono: "(819) 482-2095",
    dataUltimaVezQueTeveNoPet: "17/03/2019"
  },
  {
    raca: "Kuvasz",
    genero: "macho",
    castrado: "não",
    dataNascimento: "10/06/2016",
    nome: "Chase",
    nomeDono: "Lynne Miles",
    telefoneDono: "(977) 470-3366",
    dataUltimaVezQueTeveNoPet: "09/05/2019"
  },
  {
    raca: "Weimaraner",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "13/05/2014",
    nome: "Ferguson",
    nomeDono: "Daphne Henson",
    telefoneDono: "(929) 509-3445",
    dataUltimaVezQueTeveNoPet: "01/02/2019"
  },
  {
    raca: "Pinscher",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "05/07/2018",
    nome: "Randolph",
    nomeDono: "Roberts Mercer",
    telefoneDono: "(991) 522-2819",
    dataUltimaVezQueTeveNoPet: "15/01/2019"
  },
  {
    raca: "Podengo",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "21/09/2015",
    nome: "Mcleod",
    nomeDono: "Nikki Pratt",
    telefoneDono: "(862) 531-2215",
    dataUltimaVezQueTeveNoPet: "25/01/2019"
  },
  {
    raca: "Spitz Alemão",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "27/04/2014",
    nome: "Baxter",
    nomeDono: "Lillian Chan",
    telefoneDono: "(975) 478-2538",
    dataUltimaVezQueTeveNoPet: "20/04/2019"
  },
  {
    raca: "SilKy Terrier",
    genero: "macho",
    castrado: "não",
    dataNascimento: "23/11/2015",
    nome: "Gonzales",
    nomeDono: "Hollie Blake",
    telefoneDono: "(915) 475-2699",
    dataUltimaVezQueTeveNoPet: "16/02/2019"
  },
  {
    raca: "Bedlington Terrier",
    genero: "macho",
    castrado: "não",
    dataNascimento: "30/06/2016",
    nome: "Flores",
    nomeDono: "Yolanda Adkins",
    telefoneDono: "(917) 442-2008",
    dataUltimaVezQueTeveNoPet: "26/02/2019"
  },
  {
    raca: "Caniche",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "18/11/2015",
    nome: "Mcfarland",
    nomeDono: "Barron Gray",
    telefoneDono: "(912) 435-2965",
    dataUltimaVezQueTeveNoPet: "19/07/2019"
  },
  {
    raca: "Pitbull",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "22/04/2019",
    nome: "Bright",
    nomeDono: "Rowland Gay",
    telefoneDono: "(830) 400-3039",
    dataUltimaVezQueTeveNoPet: "05/07/2019"
  },
  {
    raca: "Weimaraner",
    genero: "macho",
    castrado: "não",
    dataNascimento: "15/04/2019",
    nome: "Deleon",
    nomeDono: "Megan Harrington",
    telefoneDono: "(879) 581-2362",
    dataUltimaVezQueTeveNoPet: "31/01/2019"
  },
  {
    raca: "Boston Terrier",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "16/06/2018",
    nome: "Puckett",
    nomeDono: "Leann Walker",
    telefoneDono: "(872) 534-3363",
    dataUltimaVezQueTeveNoPet: "30/04/2019"
  },
  {
    raca: "Malamute-do-Alasca",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "30/09/2018",
    nome: "Castaneda",
    nomeDono: "Acosta Vaughn",
    telefoneDono: "(923) 567-3419",
    dataUltimaVezQueTeveNoPet: "27/01/2019"
  },
  {
    raca: "Bloodhound",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "28/09/2014",
    nome: "Francis",
    nomeDono: "Amie Richardson",
    telefoneDono: "(800) 406-2817",
    dataUltimaVezQueTeveNoPet: "22/01/2019"
  },
  {
    raca: "Leonberger",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "26/05/2017",
    nome: "Stevenson",
    nomeDono: "Bianca Ward",
    telefoneDono: "(816) 400-3897",
    dataUltimaVezQueTeveNoPet: "28/04/2019"
  },
  {
    raca: "Whippet",
    genero: "macho",
    castrado: "não",
    dataNascimento: "03/08/2014",
    nome: "Stokes",
    nomeDono: "Alba Browning",
    telefoneDono: "(965) 562-2270",
    dataUltimaVezQueTeveNoPet: "20/05/2019"
  },
  {
    raca: "Basenji",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "02/04/2015",
    nome: "Yang",
    nomeDono: "Rogers Fischer",
    telefoneDono: "(885) 460-3692",
    dataUltimaVezQueTeveNoPet: "22/01/2019"
  },
  {
    raca: "Welsh Corgi",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "21/05/2014",
    nome: "Villarreal",
    nomeDono: "Roy Phelps",
    telefoneDono: "(938) 464-2399",
    dataUltimaVezQueTeveNoPet: "28/01/2019"
  },
  {
    raca: "Cirneco do Etna",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "31/05/2017",
    nome: "Todd",
    nomeDono: "Velazquez Vargas",
    telefoneDono: "(940) 439-2598",
    dataUltimaVezQueTeveNoPet: "27/05/2019"
  },
  {
    raca: "Boxer",
    genero: "macho",
    castrado: "não",
    dataNascimento: "16/05/2019",
    nome: "Bishop",
    nomeDono: "Bonner Cash",
    telefoneDono: "(883) 428-3894",
    dataUltimaVezQueTeveNoPet: "22/06/2019"
  },
  {
    raca: "Sabueso",
    genero: "macho",
    castrado: "não",
    dataNascimento: "23/12/2014",
    nome: "Raymond",
    nomeDono: "Calhoun Mcguire",
    telefoneDono: "(977) 529-2199",
    dataUltimaVezQueTeveNoPet: "14/06/2019"
  },
  {
    raca: "Beagle Harrier",
    genero: "macho",
    castrado: "não",
    dataNascimento: "30/01/2015",
    nome: "Mack",
    nomeDono: "Pace Mueller",
    telefoneDono: "(848) 403-3112",
    dataUltimaVezQueTeveNoPet: "19/03/2019"
  },
  {
    raca: "Tosa",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "21/03/2019",
    nome: "Barber",
    nomeDono: "Liz Mcfadden",
    telefoneDono: "(953) 599-2936",
    dataUltimaVezQueTeveNoPet: "10/05/2019"
  },
  {
    raca: "Kuvasz",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "10/10/2017",
    nome: "Meyer",
    nomeDono: "Kerri Franco",
    telefoneDono: "(846) 437-3615",
    dataUltimaVezQueTeveNoPet: "12/03/2019"
  },
  {
    raca: "Dálmata",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "03/04/2018",
    nome: "Mendoza",
    nomeDono: "Araceli Dyer",
    telefoneDono: "(849) 559-3719",
    dataUltimaVezQueTeveNoPet: "31/03/2019"
  },
  {
    raca: "Dogue",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "07/11/2015",
    nome: "Reynolds",
    nomeDono: "Patton Reed",
    telefoneDono: "(984) 571-3190",
    dataUltimaVezQueTeveNoPet: "02/04/2019"
  },
  {
    raca: "Rottweiler",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "27/11/2018",
    nome: "Woodard",
    nomeDono: "Ford Carrillo",
    telefoneDono: "(906) 559-2964",
    dataUltimaVezQueTeveNoPet: "20/05/2019"
  },
  {
    raca: "Laika",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "03/04/2019",
    nome: "Luna",
    nomeDono: "Estes Blankenship",
    telefoneDono: "(991) 556-3996",
    dataUltimaVezQueTeveNoPet: "28/01/2019"
  },
  {
    raca: "Maltês",
    genero: "macho",
    castrado: "não",
    dataNascimento: "13/04/2014",
    nome: "Holt",
    nomeDono: "Hines Guerrero",
    telefoneDono: "(972) 465-3090",
    dataUltimaVezQueTeveNoPet: "23/04/2019"
  },
  {
    raca: "Foxhound",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "23/04/2018",
    nome: "Tran",
    nomeDono: "Blevins Mckay",
    telefoneDono: "(956) 489-3965",
    dataUltimaVezQueTeveNoPet: "01/02/2019"
  },
  {
    raca: "Bichon Havanês",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "27/10/2016",
    nome: "Sosa",
    nomeDono: "Ebony Richmond",
    telefoneDono: "(929) 581-2093",
    dataUltimaVezQueTeveNoPet: "05/07/2019"
  },
  {
    raca: "Leonberger",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "23/01/2018",
    nome: "Coffey",
    nomeDono: "Maxwell Orr",
    telefoneDono: "(818) 538-3716",
    dataUltimaVezQueTeveNoPet: "23/01/2019"
  },
  {
    raca: "Afegão",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "01/11/2018",
    nome: "Huff",
    nomeDono: "Barbara Simmons",
    telefoneDono: "(831) 491-3545",
    dataUltimaVezQueTeveNoPet: "16/02/2019"
  },
  {
    raca: "Mastife",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "05/12/2015",
    nome: "York",
    nomeDono: "Therese Gill",
    telefoneDono: "(864) 472-2168",
    dataUltimaVezQueTeveNoPet: "29/01/2019"
  },
  {
    raca: "Elkhound",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "14/04/2018",
    nome: "Tyson",
    nomeDono: "Angelia William",
    telefoneDono: "(973) 541-2697",
    dataUltimaVezQueTeveNoPet: "28/05/2019"
  },
  {
    raca: "West Highland",
    genero: "macho",
    castrado: "não",
    dataNascimento: "29/05/2018",
    nome: "Crawford",
    nomeDono: "Mandy Bush",
    telefoneDono: "(936) 506-2861",
    dataUltimaVezQueTeveNoPet: "17/03/2019"
  },
  {
    raca: "Akita Inu",
    genero: "macho",
    castrado: "não",
    dataNascimento: "20/11/2017",
    nome: "Kramer",
    nomeDono: "Earlene Sloan",
    telefoneDono: "(958) 408-3929",
    dataUltimaVezQueTeveNoPet: "17/01/2019"
  },
  {
    raca: "Pointer",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "31/12/2013",
    nome: "Weber",
    nomeDono: "Rosalie Richard",
    telefoneDono: "(931) 502-2836",
    dataUltimaVezQueTeveNoPet: "03/01/2019"
  },
  {
    raca: "Galgo",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "13/06/2019",
    nome: "Wagner",
    nomeDono: "Benita Mullen",
    telefoneDono: "(802) 431-2440",
    dataUltimaVezQueTeveNoPet: "20/04/2019"
  },
  {
    raca: "Spitz Alemão",
    genero: "macho",
    castrado: "não",
    dataNascimento: "03/09/2015",
    nome: "Serrano",
    nomeDono: "Judith Franks",
    telefoneDono: "(937) 514-2518",
    dataUltimaVezQueTeveNoPet: "30/01/2019"
  },
  {
    raca: "Labrador Retriever",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "03/05/2018",
    nome: "Michael",
    nomeDono: "Robin Medina",
    telefoneDono: "(888) 551-3213",
    dataUltimaVezQueTeveNoPet: "06/07/2019"
  },
  {
    raca: "Husky Siberiano",
    genero: "macho",
    castrado: "não",
    dataNascimento: "19/11/2016",
    nome: "Lynn",
    nomeDono: "Weiss Sampson",
    telefoneDono: "(991) 556-2522",
    dataUltimaVezQueTeveNoPet: "07/01/2019"
  },
  {
    raca: "Terra Nova",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "19/03/2016",
    nome: "Poole",
    nomeDono: "Marion Whitaker",
    telefoneDono: "(822) 451-3967",
    dataUltimaVezQueTeveNoPet: "12/02/2019"
  },
  {
    raca: "Cane Corso",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "09/11/2014",
    nome: "Cochran",
    nomeDono: "Antonia Hoover",
    telefoneDono: "(897) 501-2908",
    dataUltimaVezQueTeveNoPet: "24/07/2019"
  },
  {
    raca: "Terra Nova",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "21/06/2018",
    nome: "Dean",
    nomeDono: "Dianna Aguilar",
    telefoneDono: "(867) 452-3311",
    dataUltimaVezQueTeveNoPet: "08/01/2019"
  },
  {
    raca: "Foxhound",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "01/04/2018",
    nome: "Rice",
    nomeDono: "Paulette Golden",
    telefoneDono: "(898) 573-3329",
    dataUltimaVezQueTeveNoPet: "20/03/2019"
  },
  {
    raca: "Pequinês",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "15/01/2016",
    nome: "Melendez",
    nomeDono: "Maria Gregory",
    telefoneDono: "(856) 544-3623",
    dataUltimaVezQueTeveNoPet: "07/06/2019"
  },
  {
    raca: "Irlandés",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "29/08/2017",
    nome: "Wade",
    nomeDono: "Jo Best",
    telefoneDono: "(896) 462-3784",
    dataUltimaVezQueTeveNoPet: "10/04/2019"
  },
  {
    raca: "Grande Boiadeiro",
    genero: "macho",
    castrado: "não",
    dataNascimento: "27/10/2017",
    nome: "Fry",
    nomeDono: "Church Bowen",
    telefoneDono: "(868) 404-3778",
    dataUltimaVezQueTeveNoPet: "27/06/2019"
  },
  {
    raca: "Bloodhound",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "09/01/2018",
    nome: "Clemons",
    nomeDono: "Adams Ellis",
    telefoneDono: "(860) 453-2054",
    dataUltimaVezQueTeveNoPet: "27/07/2019"
  },
  {
    raca: "Labradoodle",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "10/02/2016",
    nome: "Chaney",
    nomeDono: "Viola Rogers",
    telefoneDono: "(889) 573-2360",
    dataUltimaVezQueTeveNoPet: "31/05/2019"
  },
  {
    raca: "Rhodesian",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "21/10/2017",
    nome: "Ortega",
    nomeDono: "Christensen Blevins",
    telefoneDono: "(878) 520-3451",
    dataUltimaVezQueTeveNoPet: "03/06/2019"
  },
  {
    raca: "Golden Retriever",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "14/12/2014",
    nome: "Chandler",
    nomeDono: "Calderon Griffin",
    telefoneDono: "(878) 481-3308",
    dataUltimaVezQueTeveNoPet: "05/06/2019"
  },
  {
    raca: "Cairn Terrier",
    genero: "macho",
    castrado: "não",
    dataNascimento: "18/10/2016",
    nome: "Mills",
    nomeDono: "Glenda Sanchez",
    telefoneDono: "(935) 425-3878",
    dataUltimaVezQueTeveNoPet: "09/07/2019"
  },
  {
    raca: "Perdigueiro",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "10/06/2017",
    nome: "Cooke",
    nomeDono: "Kristy Porter",
    telefoneDono: "(804) 557-2366",
    dataUltimaVezQueTeveNoPet: "21/07/2019"
  },
  {
    raca: "Poodle",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "27/03/2019",
    nome: "Duffy",
    nomeDono: "Shaffer Fitzpatrick",
    telefoneDono: "(940) 433-2072",
    dataUltimaVezQueTeveNoPet: "22/02/2019"
  },
  {
    raca: "Foxhound",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "25/04/2019",
    nome: "Bowman",
    nomeDono: "Morse Glass",
    telefoneDono: "(891) 459-2978",
    dataUltimaVezQueTeveNoPet: "23/06/2019"
  },
  {
    raca: "Caniche",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "24/04/2015",
    nome: "Flynn",
    nomeDono: "Tabitha Dodson",
    telefoneDono: "(812) 413-2583",
    dataUltimaVezQueTeveNoPet: "27/05/2019"
  },
  {
    raca: "Teckel",
    genero: "macho",
    castrado: "não",
    dataNascimento: "21/06/2017",
    nome: "Brock",
    nomeDono: "Lois Benson",
    telefoneDono: "(989) 482-3992",
    dataUltimaVezQueTeveNoPet: "22/03/2019"
  },
  {
    raca: "Elkhound",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "16/09/2017",
    nome: "Snow",
    nomeDono: "Ladonna Allison",
    telefoneDono: "(868) 505-3417",
    dataUltimaVezQueTeveNoPet: "28/06/2019"
  },
  {
    raca: "Kuvasz",
    genero: "macho",
    castrado: "não",
    dataNascimento: "06/07/2019",
    nome: "Trevino",
    nomeDono: "Brandi Maxwell",
    telefoneDono: "(944) 446-2119",
    dataUltimaVezQueTeveNoPet: "12/02/2019"
  },
  {
    raca: "Gos d’Atura",
    genero: "macho",
    castrado: "não",
    dataNascimento: "26/02/2015",
    nome: "Estrada",
    nomeDono: "Alexis Salazar",
    telefoneDono: "(946) 430-2768",
    dataUltimaVezQueTeveNoPet: "03/07/2019"
  },
  {
    raca: "Lakeland",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "23/02/2014",
    nome: "Valencia",
    nomeDono: "Lott Hodge",
    telefoneDono: "(939) 457-2061",
    dataUltimaVezQueTeveNoPet: "12/05/2019"
  },
  {
    raca: "Pequinês",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "13/07/2014",
    nome: "Ball",
    nomeDono: "Lou Peterson",
    telefoneDono: "(923) 484-2981",
    dataUltimaVezQueTeveNoPet: "01/02/2019"
  },
  {
    raca: "Affenpinscher",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "18/12/2017",
    nome: "Rojas",
    nomeDono: "Cherry Kim",
    telefoneDono: "(862) 504-3501",
    dataUltimaVezQueTeveNoPet: "12/07/2019"
  },
  {
    raca: "Samoieda",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "22/03/2017",
    nome: "Herman",
    nomeDono: "Kari Hutchinson",
    telefoneDono: "(979) 559-2660",
    dataUltimaVezQueTeveNoPet: "09/02/2019"
  },
  {
    raca: "Mastife",
    genero: "macho",
    castrado: "não",
    dataNascimento: "21/02/2016",
    nome: "Hayes",
    nomeDono: "Frances Leblanc",
    telefoneDono: "(896) 565-2351",
    dataUltimaVezQueTeveNoPet: "27/06/2019"
  },
  {
    raca: "Dogue",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "19/07/2014",
    nome: "Solis",
    nomeDono: "Pitts Petersen",
    telefoneDono: "(877) 434-2595",
    dataUltimaVezQueTeveNoPet: "03/03/2019"
  },
  {
    raca: "Shar-Pei",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "14/02/2014",
    nome: "Sanders",
    nomeDono: "Silvia Atkinson",
    telefoneDono: "(971) 413-2962",
    dataUltimaVezQueTeveNoPet: "18/05/2019"
  },
  {
    raca: "Skye Terrier",
    genero: "macho",
    castrado: "não",
    dataNascimento: "02/12/2015",
    nome: "Reilly",
    nomeDono: "Conway Montgomery",
    telefoneDono: "(805) 524-3681",
    dataUltimaVezQueTeveNoPet: "09/02/2019"
  },
  {
    raca: "Boston Terrier",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "18/12/2018",
    nome: "Reyes",
    nomeDono: "Georgette Dawson",
    telefoneDono: "(991) 497-2035",
    dataUltimaVezQueTeveNoPet: "24/04/2019"
  },
  {
    raca: "Lakeland",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "31/12/2013",
    nome: "Mcmillan",
    nomeDono: "Hernandez Dotson",
    telefoneDono: "(947) 442-2452",
    dataUltimaVezQueTeveNoPet: "27/05/2019"
  },
  {
    raca: "Pequinês",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "21/05/2019",
    nome: "Brewer",
    nomeDono: "Armstrong Bass",
    telefoneDono: "(994) 563-2089",
    dataUltimaVezQueTeveNoPet: "07/03/2019"
  },
  {
    raca: "Basenji",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "05/10/2017",
    nome: "Long",
    nomeDono: "Vaughn Haynes",
    telefoneDono: "(966) 414-2792",
    dataUltimaVezQueTeveNoPet: "02/02/2019"
  },
  {
    raca: "São",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "03/05/2019",
    nome: "Burgess",
    nomeDono: "Howard Swanson",
    telefoneDono: "(817) 508-2476",
    dataUltimaVezQueTeveNoPet: "25/01/2019"
  },
  {
    raca: "Pug",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "12/10/2015",
    nome: "Mosley",
    nomeDono: "Harriet Yates",
    telefoneDono: "(918) 400-3844",
    dataUltimaVezQueTeveNoPet: "08/07/2019"
  },
  {
    raca: "Scottish Terrier",
    genero: "macho",
    castrado: "não",
    dataNascimento: "27/06/2014",
    nome: "Page",
    nomeDono: "Alston Dickson",
    telefoneDono: "(983) 447-3804",
    dataUltimaVezQueTeveNoPet: "29/07/2019"
  },
  {
    raca: "Husky Siberiano",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "24/10/2014",
    nome: "Conway",
    nomeDono: "Dorothea Hampton",
    telefoneDono: "(961) 534-3039",
    dataUltimaVezQueTeveNoPet: "17/04/2019"
  },
  {
    raca: "Whippet",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "12/07/2019",
    nome: "Finch",
    nomeDono: "Salazar Bradley",
    telefoneDono: "(888) 451-2172",
    dataUltimaVezQueTeveNoPet: "16/07/2019"
  },
  {
    raca: "Afegão",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "20/05/2016",
    nome: "Norton",
    nomeDono: "Phelps Tanner",
    telefoneDono: "(875) 589-3359",
    dataUltimaVezQueTeveNoPet: "14/04/2019"
  },
  {
    raca: "Doberman",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "25/08/2014",
    nome: "Cameron",
    nomeDono: "Rebecca Joseph",
    telefoneDono: "(848) 595-3988",
    dataUltimaVezQueTeveNoPet: "29/07/2019"
  },
  {
    raca: "Grifo da Bélgica",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "23/12/2016",
    nome: "Keith",
    nomeDono: "Montoya Bryan",
    telefoneDono: "(920) 408-3226",
    dataUltimaVezQueTeveNoPet: "26/06/2019"
  },
  {
    raca: "SilKy Terrier",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "16/08/2016",
    nome: "Barlow",
    nomeDono: "Jennie Baird",
    telefoneDono: "(939) 442-2610",
    dataUltimaVezQueTeveNoPet: "23/05/2019"
  },
  {
    raca: "Scottish Terrier",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "22/11/2015",
    nome: "Peters",
    nomeDono: "Lucile Hardin",
    telefoneDono: "(854) 489-2935",
    dataUltimaVezQueTeveNoPet: "20/07/2019"
  },
  {
    raca: "Mastin",
    genero: "macho",
    castrado: "não",
    dataNascimento: "18/06/2019",
    nome: "Moody",
    nomeDono: "Francis Madden",
    telefoneDono: "(923) 435-3421",
    dataUltimaVezQueTeveNoPet: "12/05/2019"
  },
  {
    raca: "Shiba Inu",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "22/12/2018",
    nome: "Terrell",
    nomeDono: "Blackwell Moreno",
    telefoneDono: "(939) 534-2259",
    dataUltimaVezQueTeveNoPet: "11/05/2019"
  },
  {
    raca: "Bernese Mountain Dog",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "03/08/2018",
    nome: "Roach",
    nomeDono: "Stephanie Leon",
    telefoneDono: "(959) 477-2308",
    dataUltimaVezQueTeveNoPet: "18/07/2019"
  },
  {
    raca: "Poodle",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "06/05/2016",
    nome: "Hendrix",
    nomeDono: "Jody Beach",
    telefoneDono: "(809) 419-3807",
    dataUltimaVezQueTeveNoPet: "25/05/2019"
  },
  {
    raca: "Boston Terrier",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "01/04/2019",
    nome: "Franklin",
    nomeDono: "Bernard Nolan",
    telefoneDono: "(815) 459-2560",
    dataUltimaVezQueTeveNoPet: "24/03/2019"
  },
  {
    raca: "Laika",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "02/05/2019",
    nome: "Sweet",
    nomeDono: "Walters Keller",
    telefoneDono: "(921) 560-2552",
    dataUltimaVezQueTeveNoPet: "31/05/2019"
  },
  {
    raca: "Dogue",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "19/05/2016",
    nome: "Marquez",
    nomeDono: "Lynnette Casey",
    telefoneDono: "(967) 506-3166",
    dataUltimaVezQueTeveNoPet: "08/01/2019"
  },
  {
    raca: "Saluki",
    genero: "macho",
    castrado: "não",
    dataNascimento: "11/04/2014",
    nome: "Townsend",
    nomeDono: "Barker Rush",
    telefoneDono: "(839) 473-3673",
    dataUltimaVezQueTeveNoPet: "31/05/2019"
  },
  {
    raca: "Galgo",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "28/01/2017",
    nome: "Joyce",
    nomeDono: "Wyatt Melton",
    telefoneDono: "(928) 474-3974",
    dataUltimaVezQueTeveNoPet: "04/07/2019"
  },
  {
    raca: "Alano",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "06/07/2014",
    nome: "Mccullough",
    nomeDono: "Mathis Howard",
    telefoneDono: "(955) 481-2666",
    dataUltimaVezQueTeveNoPet: "13/05/2019"
  },
  {
    raca: "Bichon Havanês",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "30/09/2016",
    nome: "Armstrong",
    nomeDono: "Amanda Dorsey",
    telefoneDono: "(946) 531-3362",
    dataUltimaVezQueTeveNoPet: "18/07/2019"
  },
  {
    raca: "Borzoi",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "24/10/2018",
    nome: "Bridges",
    nomeDono: "Eloise Pollard",
    telefoneDono: "(857) 440-2192",
    dataUltimaVezQueTeveNoPet: "21/04/2019"
  },
  {
    raca: "Alemão",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "25/05/2015",
    nome: "Collins",
    nomeDono: "Whitfield Gomez",
    telefoneDono: "(969) 464-2459",
    dataUltimaVezQueTeveNoPet: "19/02/2019"
  },
  {
    raca: "Saluki",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "29/03/2019",
    nome: "Humphrey",
    nomeDono: "Brigitte Parrish",
    telefoneDono: "(838) 496-2698",
    dataUltimaVezQueTeveNoPet: "30/07/2019"
  },
  {
    raca: "Terra Nova",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "20/01/2019",
    nome: "Parker",
    nomeDono: "Courtney Burton",
    telefoneDono: "(814) 416-3664",
    dataUltimaVezQueTeveNoPet: "27/07/2019"
  },
  {
    raca: "Mastife",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "31/05/2019",
    nome: "Hill",
    nomeDono: "Shaw Douglas",
    telefoneDono: "(803) 417-3176",
    dataUltimaVezQueTeveNoPet: "09/05/2019"
  },
  {
    raca: "Affenpinscher",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "13/05/2014",
    nome: "Hernandez",
    nomeDono: "Lelia Burris",
    telefoneDono: "(949) 572-2772",
    dataUltimaVezQueTeveNoPet: "31/03/2019"
  },
  {
    raca: "Border Collie",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "08/02/2018",
    nome: "Salinas",
    nomeDono: "Park Ayala",
    telefoneDono: "(974) 522-2489",
    dataUltimaVezQueTeveNoPet: "13/05/2019"
  },
  {
    raca: "Rhodesian",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "01/03/2019",
    nome: "Lowe",
    nomeDono: "Craft Mayo",
    telefoneDono: "(996) 404-2436",
    dataUltimaVezQueTeveNoPet: "04/06/2019"
  },
  {
    raca: "Dachshund",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "09/02/2018",
    nome: "Chen",
    nomeDono: "Galloway Shepherd",
    telefoneDono: "(967) 430-3357",
    dataUltimaVezQueTeveNoPet: "26/06/2019"
  },
  {
    raca: "Basset Hound",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "04/12/2016",
    nome: "Mccormick",
    nomeDono: "Kerry Clay",
    telefoneDono: "(928) 402-3532",
    dataUltimaVezQueTeveNoPet: "07/04/2019"
  },
  {
    raca: "Tamaskan",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "20/02/2018",
    nome: "Walls",
    nomeDono: "Cindy Dejesus",
    telefoneDono: "(924) 574-3809",
    dataUltimaVezQueTeveNoPet: "25/04/2019"
  },
  {
    raca: "Basenji",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "02/04/2018",
    nome: "Good",
    nomeDono: "Logan Soto",
    telefoneDono: "(918) 536-3471",
    dataUltimaVezQueTeveNoPet: "06/02/2019"
  },
  {
    raca: "Pug",
    genero: "macho",
    castrado: "não",
    dataNascimento: "18/03/2016",
    nome: "Valenzuela",
    nomeDono: "Luann Shepard",
    telefoneDono: "(916) 600-3162",
    dataUltimaVezQueTeveNoPet: "06/04/2019"
  },
  {
    raca: "Bichon Maltês",
    genero: "macho",
    castrado: "não",
    dataNascimento: "31/10/2015",
    nome: "Osborne",
    nomeDono: "Marilyn Snyder",
    telefoneDono: "(870) 412-3133",
    dataUltimaVezQueTeveNoPet: "29/05/2019"
  },
  {
    raca: "Cirneco do Etna",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "15/12/2014",
    nome: "Summers",
    nomeDono: "Wolfe Delaney",
    telefoneDono: "(935) 447-3440",
    dataUltimaVezQueTeveNoPet: "17/06/2019"
  },
  {
    raca: "Beagle Harrier",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "22/11/2014",
    nome: "Stevens",
    nomeDono: "Carissa Hudson",
    telefoneDono: "(841) 444-2360",
    dataUltimaVezQueTeveNoPet: "10/02/2019"
  },
  {
    raca: "Leonberger",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "27/06/2017",
    nome: "Morton",
    nomeDono: "Mullins Garcia",
    telefoneDono: "(963) 478-3956",
    dataUltimaVezQueTeveNoPet: "28/05/2019"
  },
  {
    raca: "Sem Raça Definida",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "16/09/2015",
    nome: "Byers",
    nomeDono: "Castro England",
    telefoneDono: "(822) 426-3489",
    dataUltimaVezQueTeveNoPet: "05/01/2019"
  },
  {
    raca: "Boxer",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "06/10/2018",
    nome: "Lewis",
    nomeDono: "Hurst Morrison",
    telefoneDono: "(847) 462-2587",
    dataUltimaVezQueTeveNoPet: "01/06/2019"
  },
  {
    raca: "Akita Americano",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "08/07/2016",
    nome: "Hopper",
    nomeDono: "Claire Cortez",
    telefoneDono: "(956) 458-3618",
    dataUltimaVezQueTeveNoPet: "12/04/2019"
  },
  {
    raca: "Laika",
    genero: "macho",
    castrado: "não",
    dataNascimento: "14/03/2019",
    nome: "Macdonald",
    nomeDono: "Kayla Solomon",
    telefoneDono: "(839) 426-2896",
    dataUltimaVezQueTeveNoPet: "02/01/2019"
  },
  {
    raca: "Dachshund",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "12/03/2014",
    nome: "Carroll",
    nomeDono: "Ginger Shaffer",
    telefoneDono: "(910) 490-2138",
    dataUltimaVezQueTeveNoPet: "21/01/2019"
  },
  {
    raca: "Dandie Dinmont Terrier",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "07/09/2016",
    nome: "Mason",
    nomeDono: "Tucker Callahan",
    telefoneDono: "(887) 492-3144",
    dataUltimaVezQueTeveNoPet: "15/02/2019"
  },
  {
    raca: "Shar-Pei",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "28/12/2016",
    nome: "Riggs",
    nomeDono: "Curry Farrell",
    telefoneDono: "(841) 475-2262",
    dataUltimaVezQueTeveNoPet: "13/05/2019"
  },
  {
    raca: "Basenji",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "10/08/2015",
    nome: "Hogan",
    nomeDono: "Ila Valentine",
    telefoneDono: "(815) 562-3789",
    dataUltimaVezQueTeveNoPet: "08/01/2019"
  },
  {
    raca: "Terrier",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "25/11/2018",
    nome: "Rosales",
    nomeDono: "Bell Day",
    telefoneDono: "(909) 530-3946",
    dataUltimaVezQueTeveNoPet: "29/01/2019"
  },
  {
    raca: "Galgo",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "21/04/2019",
    nome: "Watkins",
    nomeDono: "Dona Christian",
    telefoneDono: "(877) 492-2952",
    dataUltimaVezQueTeveNoPet: "27/04/2019"
  },
  {
    raca: "Boxer",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "20/02/2017",
    nome: "Koch",
    nomeDono: "Hull Christensen",
    telefoneDono: "(835) 491-3892",
    dataUltimaVezQueTeveNoPet: "31/12/2018"
  },
  {
    raca: "Alano",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "10/07/2016",
    nome: "Cline",
    nomeDono: "Frankie Oconnor",
    telefoneDono: "(875) 436-2192",
    dataUltimaVezQueTeveNoPet: "13/04/2019"
  },
  {
    raca: "Shar-Pei",
    genero: "macho",
    castrado: "não",
    dataNascimento: "04/06/2017",
    nome: "Cervantes",
    nomeDono: "Melody Bernard",
    telefoneDono: "(862) 430-2279",
    dataUltimaVezQueTeveNoPet: "19/06/2019"
  },
  {
    raca: "Komondor",
    genero: "macho",
    castrado: "não",
    dataNascimento: "02/01/2016",
    nome: "Strickland",
    nomeDono: "Lela Lambert",
    telefoneDono: "(895) 548-3843",
    dataUltimaVezQueTeveNoPet: "16/01/2019"
  },
  {
    raca: "Boston Terrier",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "08/04/2016",
    nome: "Bonner",
    nomeDono: "Darla Odom",
    telefoneDono: "(889) 453-3137",
    dataUltimaVezQueTeveNoPet: "29/07/2019"
  },
  {
    raca: "Sem Raça Definida",
    genero: "macho",
    castrado: "não",
    dataNascimento: "21/03/2018",
    nome: "Russo",
    nomeDono: "Christian Gilliam",
    telefoneDono: "(846) 410-3342",
    dataUltimaVezQueTeveNoPet: "15/07/2019"
  },
  {
    raca: "Whippet",
    genero: "macho",
    castrado: "não",
    dataNascimento: "08/08/2018",
    nome: "Conrad",
    nomeDono: "Smith Booth",
    telefoneDono: "(908) 467-3793",
    dataUltimaVezQueTeveNoPet: "14/04/2019"
  },
  {
    raca: "Alemão",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "04/04/2017",
    nome: "Buck",
    nomeDono: "Nichols Rosa",
    telefoneDono: "(816) 482-3216",
    dataUltimaVezQueTeveNoPet: "31/01/2019"
  },
  {
    raca: "Foxhound",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "30/08/2015",
    nome: "Knight",
    nomeDono: "June Carver",
    telefoneDono: "(859) 494-2707",
    dataUltimaVezQueTeveNoPet: "28/02/2019"
  },
  {
    raca: "Grande Boiadeiro",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "20/08/2014",
    nome: "Ortiz",
    nomeDono: "Elise Mullins",
    telefoneDono: "(938) 480-3169",
    dataUltimaVezQueTeveNoPet: "27/06/2019"
  },
  {
    raca: "Sabueso",
    genero: "macho",
    castrado: "não",
    dataNascimento: "24/08/2017",
    nome: "Boyer",
    nomeDono: "Gloria Woods",
    telefoneDono: "(830) 400-2205",
    dataUltimaVezQueTeveNoPet: "29/04/2019"
  },
  {
    raca: "Yorkshire Terrier",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "11/03/2016",
    nome: "Avila",
    nomeDono: "Graves Landry",
    telefoneDono: "(989) 555-3235",
    dataUltimaVezQueTeveNoPet: "04/04/2019"
  },
  {
    raca: "Tosa",
    genero: "macho",
    castrado: "não",
    dataNascimento: "25/03/2014",
    nome: "Miranda",
    nomeDono: "Watts Gamble",
    telefoneDono: "(996) 476-3800",
    dataUltimaVezQueTeveNoPet: "14/02/2019"
  },
  {
    raca: "Rottweiler",
    genero: "macho",
    castrado: "não",
    dataNascimento: "03/11/2014",
    nome: "Rich",
    nomeDono: "Clarke Buckner",
    telefoneDono: "(925) 534-3340",
    dataUltimaVezQueTeveNoPet: "02/05/2019"
  },
  {
    raca: "Airedale Terrier",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "03/06/2015",
    nome: "Ross",
    nomeDono: "Howe David",
    telefoneDono: "(825) 441-2591",
    dataUltimaVezQueTeveNoPet: "04/02/2019"
  },
  {
    raca: "Chow Chow",
    genero: "macho",
    castrado: "não",
    dataNascimento: "27/04/2019",
    nome: "Chapman",
    nomeDono: "Cline Fox",
    telefoneDono: "(894) 437-2004",
    dataUltimaVezQueTeveNoPet: "20/02/2019"
  },
  {
    raca: "Xoloitzcuintli",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "12/08/2014",
    nome: "Washington",
    nomeDono: "Simpson Sparks",
    telefoneDono: "(945) 552-2185",
    dataUltimaVezQueTeveNoPet: "21/06/2019"
  },
  {
    raca: "Labrador Retriever",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "29/05/2019",
    nome: "Ryan",
    nomeDono: "Roman Huber",
    telefoneDono: "(997) 443-3844",
    dataUltimaVezQueTeveNoPet: "23/05/2019"
  },
  {
    raca: "Whippet",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "16/05/2015",
    nome: "Moran",
    nomeDono: "Marks Hunter",
    telefoneDono: "(987) 486-2141",
    dataUltimaVezQueTeveNoPet: "31/03/2019"
  },
  {
    raca: "Pitbull",
    genero: "macho",
    castrado: "não",
    dataNascimento: "08/09/2015",
    nome: "Giles",
    nomeDono: "Consuelo Foster",
    telefoneDono: "(939) 563-2544",
    dataUltimaVezQueTeveNoPet: "08/06/2019"
  },
  {
    raca: "Cane Corso",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "28/10/2016",
    nome: "Kemp",
    nomeDono: "Socorro Carson",
    telefoneDono: "(925) 575-3006",
    dataUltimaVezQueTeveNoPet: "14/02/2019"
  },
  {
    raca: "Buldogue",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "23/09/2017",
    nome: "Kerr",
    nomeDono: "Curtis Bray",
    telefoneDono: "(835) 408-2072",
    dataUltimaVezQueTeveNoPet: "11/03/2019"
  },
  {
    raca: "Basset Hound",
    genero: "macho",
    castrado: "não",
    dataNascimento: "17/04/2019",
    nome: "Gentry",
    nomeDono: "Cristina Norris",
    telefoneDono: "(949) 530-3836",
    dataUltimaVezQueTeveNoPet: "08/07/2019"
  },
  {
    raca: "Laika",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "12/09/2014",
    nome: "Bond",
    nomeDono: "Luisa Mcneil",
    telefoneDono: "(894) 590-2351",
    dataUltimaVezQueTeveNoPet: "21/07/2019"
  },
  {
    raca: "Buldogue",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "23/09/2016",
    nome: "Monroe",
    nomeDono: "Juanita Brown",
    telefoneDono: "(964) 430-3935",
    dataUltimaVezQueTeveNoPet: "09/04/2019"
  },
  {
    raca: "Terrier",
    genero: "macho",
    castrado: "não",
    dataNascimento: "18/02/2019",
    nome: "Roy",
    nomeDono: "Wendi Craft",
    telefoneDono: "(902) 600-3276",
    dataUltimaVezQueTeveNoPet: "28/02/2019"
  },
  {
    raca: "Labrador Retriever",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "27/03/2015",
    nome: "Schroeder",
    nomeDono: "Sharon House",
    telefoneDono: "(886) 483-3552",
    dataUltimaVezQueTeveNoPet: "19/07/2019"
  },
  {
    raca: "Grande Boiadeiro",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "22/09/2017",
    nome: "Kaufman",
    nomeDono: "Celia English",
    telefoneDono: "(826) 527-2647",
    dataUltimaVezQueTeveNoPet: "29/06/2019"
  },
  {
    raca: "São",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "08/04/2018",
    nome: "Mccall",
    nomeDono: "Danielle Whitehead",
    telefoneDono: "(836) 587-3763",
    dataUltimaVezQueTeveNoPet: "09/06/2019"
  },
  {
    raca: "Husky Siberiano",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "04/12/2017",
    nome: "Perez",
    nomeDono: "Patricia Mcintyre",
    telefoneDono: "(859) 488-2867",
    dataUltimaVezQueTeveNoPet: "18/03/2019"
  },
  {
    raca: "Galgo",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "01/09/2017",
    nome: "Ware",
    nomeDono: "Keller Aguirre",
    telefoneDono: "(871) 404-2630",
    dataUltimaVezQueTeveNoPet: "01/03/2019"
  },
  {
    raca: "Dachshund",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "30/11/2015",
    nome: "Wilkinson",
    nomeDono: "Lawson Hahn",
    telefoneDono: "(820) 580-2750",
    dataUltimaVezQueTeveNoPet: "19/07/2019"
  },
  {
    raca: "Setter",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "19/12/2018",
    nome: "Owens",
    nomeDono: "Mia Potts",
    telefoneDono: "(828) 449-2373",
    dataUltimaVezQueTeveNoPet: "31/03/2019"
  },
  {
    raca: "Dogue",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "18/01/2014",
    nome: "Robertson",
    nomeDono: "Carmella Butler",
    telefoneDono: "(995) 539-3615",
    dataUltimaVezQueTeveNoPet: "16/05/2019"
  },
  {
    raca: "Labrador Retriever",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "15/06/2014",
    nome: "Cunningham",
    nomeDono: "Jacquelyn Cantu",
    telefoneDono: "(891) 409-2973",
    dataUltimaVezQueTeveNoPet: "20/03/2019"
  },
  {
    raca: "Rhodesian",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "28/10/2017",
    nome: "Harrell",
    nomeDono: "Stevens Winters",
    telefoneDono: "(987) 531-2963",
    dataUltimaVezQueTeveNoPet: "26/06/2019"
  },
  {
    raca: "Teckel",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "28/04/2015",
    nome: "Graham",
    nomeDono: "Lydia Hartman",
    telefoneDono: "(952) 569-2210",
    dataUltimaVezQueTeveNoPet: "07/07/2019"
  },
  {
    raca: "Terrier",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "26/03/2014",
    nome: "Sargent",
    nomeDono: "Latasha Frazier",
    telefoneDono: "(815) 536-2124",
    dataUltimaVezQueTeveNoPet: "07/01/2019"
  },
  {
    raca: "Cairn Terrier",
    genero: "macho",
    castrado: "não",
    dataNascimento: "07/04/2015",
    nome: "Davis",
    nomeDono: "Tate Watts",
    telefoneDono: "(848) 519-2947",
    dataUltimaVezQueTeveNoPet: "26/02/2019"
  },
  {
    raca: "Setter",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "01/05/2015",
    nome: "Bell",
    nomeDono: "Karina Elliott",
    telefoneDono: "(993) 468-2176",
    dataUltimaVezQueTeveNoPet: "07/06/2019"
  },
  {
    raca: "Fox Terrier",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "05/07/2018",
    nome: "Pearson",
    nomeDono: "Corinne Bentley",
    telefoneDono: "(987) 423-2045",
    dataUltimaVezQueTeveNoPet: "25/02/2019"
  },
  {
    raca: "Fila Brasileiro",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "17/02/2019",
    nome: "Morris",
    nomeDono: "Hurley Hardy",
    telefoneDono: "(805) 595-2744",
    dataUltimaVezQueTeveNoPet: "16/01/2019"
  },
  {
    raca: "Bloodhound",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "03/08/2017",
    nome: "Hall",
    nomeDono: "Norma Bauer",
    telefoneDono: "(817) 531-3284",
    dataUltimaVezQueTeveNoPet: "20/05/2019"
  },
  {
    raca: "Foxhound",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "02/02/2016",
    nome: "Alvarado",
    nomeDono: "Vivian Emerson",
    telefoneDono: "(885) 523-2076",
    dataUltimaVezQueTeveNoPet: "21/07/2019"
  },
  {
    raca: "Pequinês",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "26/03/2018",
    nome: "Fowler",
    nomeDono: "Lourdes Downs",
    telefoneDono: "(917) 456-3338",
    dataUltimaVezQueTeveNoPet: "09/07/2019"
  },
  {
    raca: "Afegão",
    genero: "macho",
    castrado: "não",
    dataNascimento: "11/05/2015",
    nome: "Sullivan",
    nomeDono: "Mcclure Alston",
    telefoneDono: "(839) 516-2598",
    dataUltimaVezQueTeveNoPet: "08/04/2019"
  },
  {
    raca: "Perdigueiro",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "05/03/2015",
    nome: "Travis",
    nomeDono: "Brooks Mays",
    telefoneDono: "(829) 504-2235",
    dataUltimaVezQueTeveNoPet: "11/07/2019"
  },
  {
    raca: "Skye Terrier",
    genero: "macho",
    castrado: "não",
    dataNascimento: "04/01/2015",
    nome: "Lucas",
    nomeDono: "Burnett Middleton",
    telefoneDono: "(827) 598-3215",
    dataUltimaVezQueTeveNoPet: "08/07/2019"
  },
  {
    raca: "Yorkshire Terrier",
    genero: "macho",
    castrado: "não",
    dataNascimento: "21/10/2017",
    nome: "Rios",
    nomeDono: "Gilliam Lindsey",
    telefoneDono: "(800) 420-3431",
    dataUltimaVezQueTeveNoPet: "30/07/2019"
  },
  {
    raca: "Skye Terrier",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "04/03/2018",
    nome: "Petty",
    nomeDono: "Pugh Mooney",
    telefoneDono: "(819) 426-2688",
    dataUltimaVezQueTeveNoPet: "28/02/2019"
  },
  {
    raca: "Bearded Collie",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "01/03/2017",
    nome: "Jennings",
    nomeDono: "Allison Alford",
    telefoneDono: "(885) 400-3587",
    dataUltimaVezQueTeveNoPet: "09/07/2019"
  },
  {
    raca: "Caniche",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "19/10/2014",
    nome: "Carpenter",
    nomeDono: "Wallace Sellers",
    telefoneDono: "(920) 561-2328",
    dataUltimaVezQueTeveNoPet: "02/02/2019"
  },
  {
    raca: "Irlandés",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "15/05/2016",
    nome: "Richards",
    nomeDono: "Roxanne Gaines",
    telefoneDono: "(883) 451-2321",
    dataUltimaVezQueTeveNoPet: "08/01/2019"
  },
  {
    raca: "Cocker Spaniel",
    genero: "macho",
    castrado: "não",
    dataNascimento: "22/06/2015",
    nome: "George",
    nomeDono: "Millicent Cross",
    telefoneDono: "(833) 520-3232",
    dataUltimaVezQueTeveNoPet: "27/05/2019"
  },
  {
    raca: "Weimaraner",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "24/05/2019",
    nome: "Paul",
    nomeDono: "Cooley Weeks",
    telefoneDono: "(853) 589-3385",
    dataUltimaVezQueTeveNoPet: "23/03/2019"
  },
  {
    raca: "Alano",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "31/07/2014",
    nome: "Holcomb",
    nomeDono: "Angelita Walsh",
    telefoneDono: "(988) 589-2519",
    dataUltimaVezQueTeveNoPet: "05/01/2019"
  },
  {
    raca: "Bullmastiff",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "27/03/2018",
    nome: "Curtis",
    nomeDono: "Blanche Combs",
    telefoneDono: "(987) 444-3961",
    dataUltimaVezQueTeveNoPet: "22/02/2019"
  },
  {
    raca: "Tosa",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "23/02/2015",
    nome: "Mccoy",
    nomeDono: "Pope Wise",
    telefoneDono: "(929) 566-2178",
    dataUltimaVezQueTeveNoPet: "04/04/2019"
  },
  {
    raca: "King Charles",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "03/01/2018",
    nome: "Nichols",
    nomeDono: "Charity Beard",
    telefoneDono: "(988) 499-2226",
    dataUltimaVezQueTeveNoPet: "07/06/2019"
  },
  {
    raca: "Rottweiler",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "03/10/2014",
    nome: "Barrera",
    nomeDono: "Gallegos Spencer",
    telefoneDono: "(839) 484-3062",
    dataUltimaVezQueTeveNoPet: "10/05/2019"
  },
  {
    raca: "Spitz Alemão",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "03/02/2014",
    nome: "Velasquez",
    nomeDono: "Anastasia Dale",
    telefoneDono: "(862) 453-2013",
    dataUltimaVezQueTeveNoPet: "08/05/2019"
  },
  {
    raca: "Beagle",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "28/12/2016",
    nome: "Cobb",
    nomeDono: "Monique Morse",
    telefoneDono: "(865) 419-2418",
    dataUltimaVezQueTeveNoPet: "24/06/2019"
  },
  {
    raca: "Dálmata",
    genero: "macho",
    castrado: "não",
    dataNascimento: "01/06/2019",
    nome: "Bender",
    nomeDono: "Meyers Robinson",
    telefoneDono: "(904) 411-3454",
    dataUltimaVezQueTeveNoPet: "22/07/2019"
  },
  {
    raca: "Cirneco do Etna",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "02/06/2016",
    nome: "Spence",
    nomeDono: "Hanson Wallace",
    telefoneDono: "(813) 471-3037",
    dataUltimaVezQueTeveNoPet: "23/02/2019"
  },
  {
    raca: "Alemão",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "19/05/2015",
    nome: "Fletcher",
    nomeDono: "Shawna Booker",
    telefoneDono: "(911) 548-2115",
    dataUltimaVezQueTeveNoPet: "01/02/2019"
  },
  {
    raca: "Welsh Corgi",
    genero: "macho",
    castrado: "não",
    dataNascimento: "24/04/2016",
    nome: "Bruce",
    nomeDono: "Byers Oneil",
    telefoneDono: "(957) 577-2437",
    dataUltimaVezQueTeveNoPet: "24/02/2019"
  },
  {
    raca: "Bernese Mountain Dog",
    genero: "macho",
    castrado: "não",
    dataNascimento: "09/03/2015",
    nome: "Berry",
    nomeDono: "Soto Harding",
    telefoneDono: "(832) 426-2598",
    dataUltimaVezQueTeveNoPet: "30/03/2019"
  },
  {
    raca: "Fox Terrier",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "03/07/2019",
    nome: "Pope",
    nomeDono: "Dorothy Logan",
    telefoneDono: "(899) 455-3357",
    dataUltimaVezQueTeveNoPet: "19/01/2019"
  },
  {
    raca: "Dachshund",
    genero: "macho",
    castrado: "não",
    dataNascimento: "07/10/2017",
    nome: "Lamb",
    nomeDono: "Bridgett Wyatt",
    telefoneDono: "(950) 552-2565",
    dataUltimaVezQueTeveNoPet: "27/07/2019"
  },
  {
    raca: "Ridgeback",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "03/08/2014",
    nome: "Merrill",
    nomeDono: "Chrystal Schneider",
    telefoneDono: "(912) 558-3717",
    dataUltimaVezQueTeveNoPet: "05/06/2019"
  },
  {
    raca: "Perdigueiro",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "20/01/2019",
    nome: "Kirkland",
    nomeDono: "Burris Olsen",
    telefoneDono: "(936) 573-3403",
    dataUltimaVezQueTeveNoPet: "29/01/2019"
  },
  {
    raca: "Doberman",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "09/04/2016",
    nome: "Acosta",
    nomeDono: "Lane Castro",
    telefoneDono: "(981) 600-3227",
    dataUltimaVezQueTeveNoPet: "14/02/2019"
  },
  {
    raca: "Dachshund",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "18/09/2017",
    nome: "Church",
    nomeDono: "Washington Johns",
    telefoneDono: "(943) 556-2271",
    dataUltimaVezQueTeveNoPet: "28/03/2019"
  },
  {
    raca: "Bearded Collie",
    genero: "macho",
    castrado: "não",
    dataNascimento: "07/09/2017",
    nome: "Burke",
    nomeDono: "Price Donovan",
    telefoneDono: "(880) 518-2388",
    dataUltimaVezQueTeveNoPet: "25/02/2019"
  },
  {
    raca: "Shar-Pei",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "06/04/2015",
    nome: "Ramirez",
    nomeDono: "Hoover Conner",
    telefoneDono: "(848) 596-3407",
    dataUltimaVezQueTeveNoPet: "16/02/2019"
  },
  {
    raca: "Weimaraner",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "04/06/2015",
    nome: "Bean",
    nomeDono: "Eunice Hammond",
    telefoneDono: "(932) 419-2319",
    dataUltimaVezQueTeveNoPet: "29/04/2019"
  },
  {
    raca: "Bearded Collie",
    genero: "macho",
    castrado: "não",
    dataNascimento: "02/03/2018",
    nome: "Underwood",
    nomeDono: "Lucia Sawyer",
    telefoneDono: "(990) 570-3693",
    dataUltimaVezQueTeveNoPet: "30/03/2019"
  },
  {
    raca: "Cirneco do Etna",
    genero: "macho",
    castrado: "não",
    dataNascimento: "28/06/2014",
    nome: "Hale",
    nomeDono: "Victoria Vang",
    telefoneDono: "(867) 522-3152",
    dataUltimaVezQueTeveNoPet: "01/07/2019"
  },
  {
    raca: "Bull Terrier",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "14/05/2019",
    nome: "Russell",
    nomeDono: "Hart Delgado",
    telefoneDono: "(943) 431-3046",
    dataUltimaVezQueTeveNoPet: "10/02/2019"
  },
  {
    raca: "Kuvasz",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "29/03/2014",
    nome: "Merritt",
    nomeDono: "Rene Santiago",
    telefoneDono: "(987) 565-2234",
    dataUltimaVezQueTeveNoPet: "20/07/2019"
  },
  {
    raca: "Kuvasz",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "24/05/2018",
    nome: "Vance",
    nomeDono: "Dina Sanford",
    telefoneDono: "(864) 487-3017",
    dataUltimaVezQueTeveNoPet: "21/04/2019"
  },
  {
    raca: "Welsh Corgi",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "01/04/2015",
    nome: "Hopkins",
    nomeDono: "Stevenson White",
    telefoneDono: "(902) 523-2117",
    dataUltimaVezQueTeveNoPet: "07/05/2019"
  },
  {
    raca: "São",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "23/07/2016",
    nome: "Carr",
    nomeDono: "Evangeline Joyner",
    telefoneDono: "(816) 460-3590",
    dataUltimaVezQueTeveNoPet: "09/07/2019"
  },
  {
    raca: "Bloodhound",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "23/02/2018",
    nome: "Edwards",
    nomeDono: "Ora Gibson",
    telefoneDono: "(926) 449-2337",
    dataUltimaVezQueTeveNoPet: "13/03/2019"
  },
  {
    raca: "Collie",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "26/04/2017",
    nome: "Lancaster",
    nomeDono: "Natasha Everett",
    telefoneDono: "(949) 507-3485",
    dataUltimaVezQueTeveNoPet: "18/06/2019"
  },
  {
    raca: "Weimaraner",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "30/09/2015",
    nome: "Mitchell",
    nomeDono: "Norris Perkins",
    telefoneDono: "(962) 525-2043",
    dataUltimaVezQueTeveNoPet: "18/05/2019"
  },
  {
    raca: "Kuvasz",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "04/08/2014",
    nome: "Glover",
    nomeDono: "Diane Hester",
    telefoneDono: "(882) 407-2520",
    dataUltimaVezQueTeveNoPet: "18/06/2019"
  },
  {
    raca: "Boxer",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "23/04/2016",
    nome: "Parks",
    nomeDono: "King Hensley",
    telefoneDono: "(965) 525-2935",
    dataUltimaVezQueTeveNoPet: "27/01/2019"
  },
  {
    raca: "Akita Americano",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "29/06/2014",
    nome: "Mcbride",
    nomeDono: "Mildred Hull",
    telefoneDono: "(889) 411-3630",
    dataUltimaVezQueTeveNoPet: "22/05/2019"
  },
  {
    raca: "Papillon",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "29/02/2016",
    nome: "Hooper",
    nomeDono: "Manning Craig",
    telefoneDono: "(912) 447-2657",
    dataUltimaVezQueTeveNoPet: "12/06/2019"
  },
  {
    raca: "Pinscher",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "04/06/2019",
    nome: "Bullock",
    nomeDono: "Barry Becker",
    telefoneDono: "(925) 415-2171",
    dataUltimaVezQueTeveNoPet: "21/01/2019"
  },
  {
    raca: "Grande Boiadeiro",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "02/04/2015",
    nome: "Duncan",
    nomeDono: "Bryan Talley",
    telefoneDono: "(878) 527-3802",
    dataUltimaVezQueTeveNoPet: "26/07/2019"
  },
  {
    raca: "Jack Russel Terrier",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "25/05/2015",
    nome: "Lee",
    nomeDono: "Wood Allen",
    telefoneDono: "(988) 539-3368",
    dataUltimaVezQueTeveNoPet: "04/07/2019"
  },
  {
    raca: "Setter",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "09/06/2017",
    nome: "Sweeney",
    nomeDono: "Ruth Knowles",
    telefoneDono: "(933) 563-3007",
    dataUltimaVezQueTeveNoPet: "12/01/2019"
  },
  {
    raca: "Alano",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "28/03/2016",
    nome: "Sharpe",
    nomeDono: "Trina Nguyen",
    telefoneDono: "(887) 401-3394",
    dataUltimaVezQueTeveNoPet: "02/03/2019"
  },
  {
    raca: "Terrier",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "08/06/2015",
    nome: "Simpson",
    nomeDono: "Kate Savage",
    telefoneDono: "(971) 564-2711",
    dataUltimaVezQueTeveNoPet: "25/06/2019"
  },
  {
    raca: "Laika",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "12/10/2017",
    nome: "Britt",
    nomeDono: "Goodwin Bradshaw",
    telefoneDono: "(870) 551-3213",
    dataUltimaVezQueTeveNoPet: "04/02/2019"
  },
  {
    raca: "Dogue",
    genero: "macho",
    castrado: "não",
    dataNascimento: "20/05/2018",
    nome: "Espinoza",
    nomeDono: "Lawanda Burch",
    telefoneDono: "(839) 409-2996",
    dataUltimaVezQueTeveNoPet: "11/04/2019"
  },
  {
    raca: "Dálmata",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "10/01/2019",
    nome: "Cleveland",
    nomeDono: "Barnes Holloway",
    telefoneDono: "(925) 436-2901",
    dataUltimaVezQueTeveNoPet: "17/03/2019"
  },
  {
    raca: "Saluki",
    genero: "macho",
    castrado: "não",
    dataNascimento: "27/07/2015",
    nome: "Hancock",
    nomeDono: "Palmer Johnston",
    telefoneDono: "(982) 583-3122",
    dataUltimaVezQueTeveNoPet: "27/03/2019"
  },
  {
    raca: "Leonberger",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "16/01/2016",
    nome: "Gould",
    nomeDono: "Addie Houston",
    telefoneDono: "(830) 560-2311",
    dataUltimaVezQueTeveNoPet: "11/05/2019"
  },
  {
    raca: "SilKy Terrier",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "25/03/2018",
    nome: "Collier",
    nomeDono: "Christi Gordon",
    telefoneDono: "(952) 535-2608",
    dataUltimaVezQueTeveNoPet: "25/04/2019"
  },
  {
    raca: "Rough",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "12/08/2016",
    nome: "Langley",
    nomeDono: "Rosella Warner",
    telefoneDono: "(998) 591-3045",
    dataUltimaVezQueTeveNoPet: "25/01/2019"
  },
  {
    raca: "Papillon",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "27/04/2017",
    nome: "Meadows",
    nomeDono: "Pena Slater",
    telefoneDono: "(978) 571-2410",
    dataUltimaVezQueTeveNoPet: "06/02/2019"
  },
  {
    raca: "Bearded Collie",
    genero: "macho",
    castrado: "não",
    dataNascimento: "13/07/2016",
    nome: "Justice",
    nomeDono: "Audrey Mercado",
    telefoneDono: "(823) 541-2929",
    dataUltimaVezQueTeveNoPet: "13/03/2019"
  },
  {
    raca: "Mastife",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "24/08/2016",
    nome: "Rasmussen",
    nomeDono: "Garcia Thompson",
    telefoneDono: "(898) 466-2509",
    dataUltimaVezQueTeveNoPet: "13/01/2019"
  },
  {
    raca: "Lhasa Apso",
    genero: "macho",
    castrado: "não",
    dataNascimento: "21/04/2016",
    nome: "Cox",
    nomeDono: "Fannie Guy",
    telefoneDono: "(875) 436-2910",
    dataUltimaVezQueTeveNoPet: "24/04/2019"
  },
  {
    raca: "SilKy Terrier",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "01/12/2015",
    nome: "Haney",
    nomeDono: "Dawn Payne",
    telefoneDono: "(960) 400-3580",
    dataUltimaVezQueTeveNoPet: "30/06/2019"
  },
  {
    raca: "Boxer",
    genero: "macho",
    castrado: "não",
    dataNascimento: "27/11/2016",
    nome: "Blackburn",
    nomeDono: "Virgie Morrow",
    telefoneDono: "(818) 432-2818",
    dataUltimaVezQueTeveNoPet: "06/05/2019"
  },
  {
    raca: "Scottish Terrier",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "26/06/2014",
    nome: "Price",
    nomeDono: "Saunders Sandoval",
    telefoneDono: "(857) 401-2630",
    dataUltimaVezQueTeveNoPet: "31/03/2019"
  },
  {
    raca: "Basset Hound",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "16/04/2014",
    nome: "Moses",
    nomeDono: "Guthrie Crosby",
    telefoneDono: "(830) 590-2521",
    dataUltimaVezQueTeveNoPet: "02/07/2019"
  },
  {
    raca: "Xoloitzcuintli",
    genero: "macho",
    castrado: "não",
    dataNascimento: "20/03/2016",
    nome: "Cantrell",
    nomeDono: "Jodie James",
    telefoneDono: "(830) 552-2788",
    dataUltimaVezQueTeveNoPet: "23/05/2019"
  },
  {
    raca: "Pug",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "22/07/2015",
    nome: "Buchanan",
    nomeDono: "Susanna Ballard",
    telefoneDono: "(992) 489-3296",
    dataUltimaVezQueTeveNoPet: "20/06/2019"
  },
  {
    raca: "Collie",
    genero: "macho",
    castrado: "não",
    dataNascimento: "02/06/2019",
    nome: "Miller",
    nomeDono: "Allison Ochoa",
    telefoneDono: "(823) 519-3350",
    dataUltimaVezQueTeveNoPet: "01/07/2019"
  },
  {
    raca: "Affenpinscher",
    genero: "macho",
    castrado: "não",
    dataNascimento: "25/12/2015",
    nome: "Hewitt",
    nomeDono: "Joanne Daugherty",
    telefoneDono: "(929) 559-3884",
    dataUltimaVezQueTeveNoPet: "20/02/2019"
  },
  {
    raca: "Welsh Corgi",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "07/06/2018",
    nome: "Hood",
    nomeDono: "Della Beck",
    telefoneDono: "(836) 437-3382",
    dataUltimaVezQueTeveNoPet: "19/02/2019"
  },
  {
    raca: "Bichon Havanês",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "15/02/2017",
    nome: "Fuller",
    nomeDono: "Hartman Chavez",
    telefoneDono: "(924) 554-3175",
    dataUltimaVezQueTeveNoPet: "04/07/2019"
  },
  {
    raca: "Pointer",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "11/12/2014",
    nome: "Abbott",
    nomeDono: "Buck Shelton",
    telefoneDono: "(919) 557-2786",
    dataUltimaVezQueTeveNoPet: "12/05/2019"
  },
  {
    raca: "Pug",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "30/07/2016",
    nome: "Maldonado",
    nomeDono: "Langley Lyons",
    telefoneDono: "(811) 444-2465",
    dataUltimaVezQueTeveNoPet: "28/02/2019"
  },
  {
    raca: "Terrier",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "25/02/2019",
    nome: "Hughes",
    nomeDono: "Carr Whitley",
    telefoneDono: "(828) 529-2623",
    dataUltimaVezQueTeveNoPet: "13/01/2019"
  },
  {
    raca: "Podengo",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "10/12/2014",
    nome: "Barnett",
    nomeDono: "Joy Shields",
    telefoneDono: "(872) 489-3641",
    dataUltimaVezQueTeveNoPet: "25/03/2019"
  },
  {
    raca: "Alemão",
    genero: "macho",
    castrado: "não",
    dataNascimento: "13/11/2017",
    nome: "Larson",
    nomeDono: "Bettye Bowers",
    telefoneDono: "(991) 468-3477",
    dataUltimaVezQueTeveNoPet: "26/05/2019"
  },
  {
    raca: "Podengo",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "04/05/2018",
    nome: "Coleman",
    nomeDono: "Mays Irwin",
    telefoneDono: "(846) 540-2899",
    dataUltimaVezQueTeveNoPet: "07/06/2019"
  },
  {
    raca: "Yorkshire Terrier",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "06/11/2014",
    nome: "Fuentes",
    nomeDono: "Lara Farmer",
    telefoneDono: "(818) 531-2529",
    dataUltimaVezQueTeveNoPet: "14/02/2019"
  },
  {
    raca: "Labrador Retriever",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "11/06/2014",
    nome: "Preston",
    nomeDono: "Rosales Barron",
    telefoneDono: "(822) 540-2256",
    dataUltimaVezQueTeveNoPet: "14/04/2019"
  },
  {
    raca: "Mastife",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "28/02/2017",
    nome: "Strong",
    nomeDono: "Latonya Pate",
    telefoneDono: "(802) 522-3482",
    dataUltimaVezQueTeveNoPet: "26/06/2019"
  },
  {
    raca: "Whippet",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "23/06/2016",
    nome: "Singleton",
    nomeDono: "Kara Gallagher",
    telefoneDono: "(854) 468-2121",
    dataUltimaVezQueTeveNoPet: "08/03/2019"
  },
  {
    raca: "Lhasa Apso",
    genero: "macho",
    castrado: "não",
    dataNascimento: "23/03/2018",
    nome: "Hanson",
    nomeDono: "George Mcknight",
    telefoneDono: "(905) 570-3675",
    dataUltimaVezQueTeveNoPet: "16/02/2019"
  },
  {
    raca: "Chow Chow",
    genero: "macho",
    castrado: "não",
    dataNascimento: "16/04/2017",
    nome: "Oliver",
    nomeDono: "Ratliff Durham",
    telefoneDono: "(805) 466-2400",
    dataUltimaVezQueTeveNoPet: "12/02/2019"
  },
  {
    raca: "Mastin",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "13/05/2014",
    nome: "Dominguez",
    nomeDono: "Mabel Munoz",
    telefoneDono: "(945) 598-2868",
    dataUltimaVezQueTeveNoPet: "02/04/2019"
  },
  {
    raca: "Fila Brasileiro",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "15/04/2015",
    nome: "Juarez",
    nomeDono: "Hebert Gutierrez",
    telefoneDono: "(812) 482-3200",
    dataUltimaVezQueTeveNoPet: "08/07/2019"
  },
  {
    raca: "Bullmastiff",
    genero: "macho",
    castrado: "não",
    dataNascimento: "13/05/2018",
    nome: "Short",
    nomeDono: "Pearl Hess",
    telefoneDono: "(963) 537-2629",
    dataUltimaVezQueTeveNoPet: "18/05/2019"
  },
  {
    raca: "Smooth Collie",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "20/02/2015",
    nome: "Dennis",
    nomeDono: "Clark Massey",
    telefoneDono: "(949) 525-2890",
    dataUltimaVezQueTeveNoPet: "17/07/2019"
  },
  {
    raca: "Dogue",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "06/03/2018",
    nome: "Mccray",
    nomeDono: "Katheryn Harvey",
    telefoneDono: "(804) 498-2108",
    dataUltimaVezQueTeveNoPet: "16/02/2019"
  },
  {
    raca: "Tamaskan",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "28/04/2015",
    nome: "Byrd",
    nomeDono: "Cobb Freeman",
    telefoneDono: "(944) 496-3972",
    dataUltimaVezQueTeveNoPet: "21/05/2019"
  },
  {
    raca: "Irlandés",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "14/05/2018",
    nome: "Bartlett",
    nomeDono: "Janice Stewart",
    telefoneDono: "(816) 468-2570",
    dataUltimaVezQueTeveNoPet: "24/01/2019"
  },
  {
    raca: "Rhodesian",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "18/01/2018",
    nome: "Harrison",
    nomeDono: "Nellie Welch",
    telefoneDono: "(826) 400-3979",
    dataUltimaVezQueTeveNoPet: "18/03/2019"
  },
  {
    raca: "Tosa",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "05/09/2018",
    nome: "Witt",
    nomeDono: "Leach Lang",
    telefoneDono: "(997) 593-3271",
    dataUltimaVezQueTeveNoPet: "17/03/2019"
  },
  {
    raca: "Setter",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "29/10/2017",
    nome: "Carney",
    nomeDono: "Reyes Lawson",
    telefoneDono: "(900) 487-2325",
    dataUltimaVezQueTeveNoPet: "05/04/2019"
  },
  {
    raca: "Boxer",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "30/03/2016",
    nome: "Santos",
    nomeDono: "Eliza Estes",
    telefoneDono: "(995) 533-2416",
    dataUltimaVezQueTeveNoPet: "20/03/2019"
  },
  {
    raca: "Irlandés",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "17/06/2019",
    nome: "Campos",
    nomeDono: "Eleanor Gonzalez",
    telefoneDono: "(889) 438-3794",
    dataUltimaVezQueTeveNoPet: "19/02/2019"
  },
  {
    raca: "Laika",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "16/01/2017",
    nome: "Patel",
    nomeDono: "Joyce Marks",
    telefoneDono: "(874) 599-3896",
    dataUltimaVezQueTeveNoPet: "08/06/2019"
  },
  {
    raca: "Leonberger",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "01/12/2018",
    nome: "Malone",
    nomeDono: "Ina Hinton",
    telefoneDono: "(970) 562-3198",
    dataUltimaVezQueTeveNoPet: "28/07/2019"
  },
  {
    raca: "Xoloitzcuintli",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "11/06/2018",
    nome: "Schmidt",
    nomeDono: "Snow Ingram",
    telefoneDono: "(918) 590-2949",
    dataUltimaVezQueTeveNoPet: "25/03/2019"
  },
  {
    raca: "Borzoi",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "04/05/2014",
    nome: "Adams",
    nomeDono: "Susan Garrison",
    telefoneDono: "(955) 442-3148",
    dataUltimaVezQueTeveNoPet: "24/01/2019"
  },
  {
    raca: "Buldogue",
    genero: "macho",
    castrado: "não",
    dataNascimento: "21/04/2015",
    nome: "Mcdonald",
    nomeDono: "Stacie Foreman",
    telefoneDono: "(866) 555-3980",
    dataUltimaVezQueTeveNoPet: "07/05/2019"
  },
  {
    raca: "Smooth Collie",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "26/11/2018",
    nome: "Sears",
    nomeDono: "Holland Dunn",
    telefoneDono: "(845) 528-3249",
    dataUltimaVezQueTeveNoPet: "14/02/2019"
  },
  {
    raca: "Bull Terrier",
    genero: "macho",
    castrado: "não",
    dataNascimento: "29/12/2016",
    nome: "Carey",
    nomeDono: "Stanton Andrews",
    telefoneDono: "(863) 492-2283",
    dataUltimaVezQueTeveNoPet: "07/06/2019"
  },
  {
    raca: "Fila Brasileiro",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "18/01/2014",
    nome: "Gillespie",
    nomeDono: "Amelia Tucker",
    telefoneDono: "(851) 415-3597",
    dataUltimaVezQueTeveNoPet: "16/07/2019"
  },
  {
    raca: "Pug",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "27/02/2014",
    nome: "Holder",
    nomeDono: "Freeman Riddle",
    telefoneDono: "(830) 427-2362",
    dataUltimaVezQueTeveNoPet: "05/04/2019"
  },
  {
    raca: "Basenji",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "12/04/2015",
    nome: "Williams",
    nomeDono: "Mcdowell May",
    telefoneDono: "(913) 497-3052",
    dataUltimaVezQueTeveNoPet: "11/01/2019"
  },
  {
    raca: "Basset Hound",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "04/10/2017",
    nome: "Burks",
    nomeDono: "Lawrence Garner",
    telefoneDono: "(892) 563-2573",
    dataUltimaVezQueTeveNoPet: "28/06/2019"
  },
  {
    raca: "Welsh Corgi",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "28/11/2015",
    nome: "Valdez",
    nomeDono: "Dollie Vincent",
    telefoneDono: "(931) 532-3102",
    dataUltimaVezQueTeveNoPet: "14/06/2019"
  },
  {
    raca: "Jack Russel Terrier",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "19/07/2018",
    nome: "Mendez",
    nomeDono: "Tammie Chang",
    telefoneDono: "(853) 478-3691",
    dataUltimaVezQueTeveNoPet: "27/02/2019"
  },
  {
    raca: "Mastin",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "30/06/2014",
    nome: "Fulton",
    nomeDono: "Strickland Case",
    telefoneDono: "(971) 542-3060",
    dataUltimaVezQueTeveNoPet: "14/03/2019"
  },
  {
    raca: "Poodle",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "07/05/2016",
    nome: "Diaz",
    nomeDono: "Liza Galloway",
    telefoneDono: "(885) 438-2634",
    dataUltimaVezQueTeveNoPet: "20/07/2019"
  },
  {
    raca: "Collie",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "13/10/2015",
    nome: "Horton",
    nomeDono: "Enid Maynard",
    telefoneDono: "(915) 442-2283",
    dataUltimaVezQueTeveNoPet: "01/03/2019"
  },
  {
    raca: "Sabueso",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "02/02/2017",
    nome: "Rivers",
    nomeDono: "Rivas Clayton",
    telefoneDono: "(953) 422-3731",
    dataUltimaVezQueTeveNoPet: "26/04/2019"
  },
  {
    raca: "Grande Boiadeiro",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "27/12/2014",
    nome: "Hunt",
    nomeDono: "Gilbert Romero",
    telefoneDono: "(919) 411-3402",
    dataUltimaVezQueTeveNoPet: "25/06/2019"
  },
  {
    raca: "Lhasa Apso",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "23/06/2014",
    nome: "Donaldson",
    nomeDono: "Gould Mcgee",
    telefoneDono: "(910) 474-3350",
    dataUltimaVezQueTeveNoPet: "04/05/2019"
  },
  {
    raca: "Greyhound",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "05/10/2015",
    nome: "Duran",
    nomeDono: "Arlene Nieves",
    telefoneDono: "(823) 452-2106",
    dataUltimaVezQueTeveNoPet: "16/07/2019"
  },
  {
    raca: "Bull Terrier",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "06/09/2017",
    nome: "Powers",
    nomeDono: "Farrell Kent",
    telefoneDono: "(801) 543-3459",
    dataUltimaVezQueTeveNoPet: "06/06/2019"
  },
  {
    raca: "Beagle",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "05/10/2018",
    nome: "Berger",
    nomeDono: "Bailey Arnold",
    telefoneDono: "(921) 532-3277",
    dataUltimaVezQueTeveNoPet: "19/06/2019"
  },
  {
    raca: "Golden Retriever",
    genero: "macho",
    castrado: "não",
    dataNascimento: "02/10/2017",
    nome: "Jenkins",
    nomeDono: "Clare Hodges",
    telefoneDono: "(872) 400-3126",
    dataUltimaVezQueTeveNoPet: "01/06/2019"
  },
  {
    raca: "Whippet",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "22/07/2016",
    nome: "West",
    nomeDono: "Krista French",
    telefoneDono: "(957) 522-2695",
    dataUltimaVezQueTeveNoPet: "25/05/2019"
  },
  {
    raca: "Cocker Spaniel",
    genero: "macho",
    castrado: "não",
    dataNascimento: "09/03/2019",
    nome: "King",
    nomeDono: "Hahn Mcgowan",
    telefoneDono: "(967) 432-2404",
    dataUltimaVezQueTeveNoPet: "05/05/2019"
  },
  {
    raca: "Rough",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "06/03/2019",
    nome: "Evans",
    nomeDono: "Lenora Hays",
    telefoneDono: "(820) 548-2814",
    dataUltimaVezQueTeveNoPet: "03/01/2019"
  },
  {
    raca: "Pointer",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "26/12/2015",
    nome: "Carter",
    nomeDono: "Sharlene Mathews",
    telefoneDono: "(802) 423-2259",
    dataUltimaVezQueTeveNoPet: "03/03/2019"
  },
  {
    raca: "Fox Terrier",
    genero: "macho",
    castrado: "não",
    dataNascimento: "27/07/2019",
    nome: "Lott",
    nomeDono: "Luella Jackson",
    telefoneDono: "(895) 574-2798",
    dataUltimaVezQueTeveNoPet: "09/03/2019"
  },
  {
    raca: "Staffordshire Bull Terrier",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "17/11/2017",
    nome: "Clark",
    nomeDono: "Ellison Ashley",
    telefoneDono: "(800) 493-2455",
    dataUltimaVezQueTeveNoPet: "20/05/2019"
  },
  {
    raca: "Weimaraner",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "02/06/2019",
    nome: "Ferrell",
    nomeDono: "Alison Walters",
    telefoneDono: "(993) 547-2355",
    dataUltimaVezQueTeveNoPet: "01/02/2019"
  },
  {
    raca: "Pitbull",
    genero: "macho",
    castrado: "não",
    dataNascimento: "10/06/2016",
    nome: "Howe",
    nomeDono: "Deana Wheeler",
    telefoneDono: "(965) 501-3630",
    dataUltimaVezQueTeveNoPet: "02/05/2019"
  },
  {
    raca: "Sem Raça Definida",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "21/10/2017",
    nome: "Stout",
    nomeDono: "Lopez Pitts",
    telefoneDono: "(871) 545-3295",
    dataUltimaVezQueTeveNoPet: "24/07/2019"
  },
  {
    raca: "Barbet",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "31/01/2014",
    nome: "Rivera",
    nomeDono: "Merrill Jefferson",
    telefoneDono: "(922) 402-3763",
    dataUltimaVezQueTeveNoPet: "11/03/2019"
  },
  {
    raca: "Dálmata",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "15/07/2017",
    nome: "Hawkins",
    nomeDono: "Aisha Gibbs",
    telefoneDono: "(835) 469-3956",
    dataUltimaVezQueTeveNoPet: "12/04/2019"
  },
  {
    raca: "Saluki",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "19/06/2018",
    nome: "Stanton",
    nomeDono: "Morin Curry",
    telefoneDono: "(873) 565-2864",
    dataUltimaVezQueTeveNoPet: "15/06/2019"
  },
  {
    raca: "Beagle",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "04/02/2017",
    nome: "Henry",
    nomeDono: "Winters Dickerson",
    telefoneDono: "(819) 452-3634",
    dataUltimaVezQueTeveNoPet: "06/06/2019"
  },
  {
    raca: "Labradoodle",
    genero: "macho",
    castrado: "não",
    dataNascimento: "11/01/2019",
    nome: "Hurley",
    nomeDono: "Watson Little",
    telefoneDono: "(824) 581-3949",
    dataUltimaVezQueTeveNoPet: "04/04/2019"
  },
  {
    raca: "Mastin",
    genero: "macho",
    castrado: "não",
    dataNascimento: "01/10/2017",
    nome: "Charles",
    nomeDono: "Kelli Grimes",
    telefoneDono: "(936) 409-3665",
    dataUltimaVezQueTeveNoPet: "14/05/2019"
  },
  {
    raca: "Boiadeiro",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "14/01/2015",
    nome: "Blair",
    nomeDono: "Pratt Osborn",
    telefoneDono: "(813) 409-3242",
    dataUltimaVezQueTeveNoPet: "08/07/2019"
  },
  {
    raca: "Sabueso",
    genero: "macho",
    castrado: "não",
    dataNascimento: "29/04/2017",
    nome: "Newton",
    nomeDono: "Short Dillon",
    telefoneDono: "(860) 455-2310",
    dataUltimaVezQueTeveNoPet: "15/06/2019"
  },
  {
    raca: "Laika",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "28/08/2016",
    nome: "Stuart",
    nomeDono: "Levy Zimmerman",
    telefoneDono: "(987) 557-2170",
    dataUltimaVezQueTeveNoPet: "02/05/2019"
  },
  {
    raca: "Doberman",
    genero: "macho",
    castrado: "não",
    dataNascimento: "02/09/2016",
    nome: "Nunez",
    nomeDono: "Pauline Mckenzie",
    telefoneDono: "(904) 433-3665",
    dataUltimaVezQueTeveNoPet: "16/06/2019"
  },
  {
    raca: "Pinscher",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "03/10/2014",
    nome: "Faulkner",
    nomeDono: "Mcintosh Jordan",
    telefoneDono: "(935) 564-2962",
    dataUltimaVezQueTeveNoPet: "05/06/2019"
  },
  {
    raca: "Whippet",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "14/03/2018",
    nome: "Wall",
    nomeDono: "Duffy Larsen",
    telefoneDono: "(861) 512-3956",
    dataUltimaVezQueTeveNoPet: "24/05/2019"
  },
  {
    raca: "King Charles",
    genero: "macho",
    castrado: "não",
    dataNascimento: "24/09/2015",
    nome: "Ford",
    nomeDono: "Robertson Blanchard",
    telefoneDono: "(862) 521-3771",
    dataUltimaVezQueTeveNoPet: "27/02/2019"
  },
  {
    raca: "Weimaraner",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "17/10/2017",
    nome: "Mcdowell",
    nomeDono: "Hall Kelley",
    telefoneDono: "(985) 436-3364",
    dataUltimaVezQueTeveNoPet: "25/07/2019"
  },
  {
    raca: "Yorkshire Terrier",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "27/08/2014",
    nome: "Santana",
    nomeDono: "Huffman Turner",
    telefoneDono: "(973) 496-3304",
    dataUltimaVezQueTeveNoPet: "27/04/2019"
  },
  {
    raca: "Bearded Collie",
    genero: "macho",
    castrado: "não",
    dataNascimento: "24/10/2014",
    nome: "Mayer",
    nomeDono: "Vera Daniels",
    telefoneDono: "(961) 477-3695",
    dataUltimaVezQueTeveNoPet: "01/05/2019"
  },
  {
    raca: "Sabueso",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "17/05/2016",
    nome: "Randall",
    nomeDono: "Bean Brennan",
    telefoneDono: "(988) 489-3011",
    dataUltimaVezQueTeveNoPet: "10/07/2019"
  },
  {
    raca: "Shih Tzu",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "11/12/2018",
    nome: "Buckley",
    nomeDono: "Irma Sykes",
    telefoneDono: "(852) 428-3577",
    dataUltimaVezQueTeveNoPet: "13/02/2019"
  },
  {
    raca: "Pequinês",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "05/02/2017",
    nome: "Beasley",
    nomeDono: "Alexander Bradford",
    telefoneDono: "(874) 484-3847",
    dataUltimaVezQueTeveNoPet: "14/01/2019"
  },
  {
    raca: "Fox Terrier",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "08/09/2016",
    nome: "Dudley",
    nomeDono: "Russo Ramos",
    telefoneDono: "(969) 581-3931",
    dataUltimaVezQueTeveNoPet: "18/04/2019"
  },
  {
    raca: "Pointer",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "30/08/2018",
    nome: "Spears",
    nomeDono: "Callie Willis",
    telefoneDono: "(941) 555-2252",
    dataUltimaVezQueTeveNoPet: "01/03/2019"
  },
  {
    raca: "Labrador Retriever",
    genero: "macho",
    castrado: "não",
    dataNascimento: "13/07/2018",
    nome: "Hobbs",
    nomeDono: "Holder Williamson",
    telefoneDono: "(869) 507-3072",
    dataUltimaVezQueTeveNoPet: "02/05/2019"
  },
  {
    raca: "Jack Russel Terrier",
    genero: "macho",
    castrado: "não",
    dataNascimento: "29/06/2014",
    nome: "Barrett",
    nomeDono: "Evelyn Greer",
    telefoneDono: "(959) 412-2387",
    dataUltimaVezQueTeveNoPet: "18/05/2019"
  },
  {
    raca: "Gos d’Atura",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "19/05/2014",
    nome: "Goff",
    nomeDono: "Marianne Gardner",
    telefoneDono: "(989) 575-2780",
    dataUltimaVezQueTeveNoPet: "04/04/2019"
  },
  {
    raca: "Komondor",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "04/02/2015",
    nome: "Holland",
    nomeDono: "Shanna Campbell",
    telefoneDono: "(830) 473-2853",
    dataUltimaVezQueTeveNoPet: "17/03/2019"
  },
  {
    raca: "Poodle",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "23/12/2018",
    nome: "Rodriguez",
    nomeDono: "Katy Higgins",
    telefoneDono: "(815) 577-3488",
    dataUltimaVezQueTeveNoPet: "09/02/2019"
  },
  {
    raca: "Dachshund",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "17/09/2016",
    nome: "Mathis",
    nomeDono: "Ingrid Delacruz",
    telefoneDono: "(915) 485-3874",
    dataUltimaVezQueTeveNoPet: "01/03/2019"
  },
  {
    raca: "Dandie Dinmont Terrier",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "22/07/2016",
    nome: "Leach",
    nomeDono: "Trisha Smith",
    telefoneDono: "(804) 400-2431",
    dataUltimaVezQueTeveNoPet: "08/05/2019"
  },
  {
    raca: "Golden Retriever",
    genero: "macho",
    castrado: "não",
    dataNascimento: "28/10/2015",
    nome: "Lloyd",
    nomeDono: "Darcy Murray",
    telefoneDono: "(899) 593-3581",
    dataUltimaVezQueTeveNoPet: "26/02/2019"
  },
  {
    raca: "Bullmastiff",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "13/01/2018",
    nome: "Nicholson",
    nomeDono: "Bethany Riley",
    telefoneDono: "(857) 504-2717",
    dataUltimaVezQueTeveNoPet: "13/07/2019"
  },
  {
    raca: "Mastin",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "12/05/2016",
    nome: "Baldwin",
    nomeDono: "English Sexton",
    telefoneDono: "(987) 509-2510",
    dataUltimaVezQueTeveNoPet: "11/06/2019"
  },
  {
    raca: "Beagle Harrier",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "04/08/2017",
    nome: "Cole",
    nomeDono: "Boyd Mcclure",
    telefoneDono: "(892) 447-3205",
    dataUltimaVezQueTeveNoPet: "13/02/2019"
  },
  {
    raca: "Sabueso",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "18/05/2016",
    nome: "Lowery",
    nomeDono: "Schultz Alvarez",
    telefoneDono: "(847) 564-3173",
    dataUltimaVezQueTeveNoPet: "08/01/2019"
  },
  {
    raca: "Ridgeback",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "04/05/2014",
    nome: "Manning",
    nomeDono: "Evangelina Maddox",
    telefoneDono: "(856) 513-2257",
    dataUltimaVezQueTeveNoPet: "13/01/2019"
  },
  {
    raca: "Skye Terrier",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "01/07/2017",
    nome: "Kane",
    nomeDono: "Horton Lane",
    telefoneDono: "(894) 574-3700",
    dataUltimaVezQueTeveNoPet: "12/01/2019"
  },
  {
    raca: "Poodle",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "16/01/2014",
    nome: "Green",
    nomeDono: "Bennett Burt",
    telefoneDono: "(806) 514-3625",
    dataUltimaVezQueTeveNoPet: "10/05/2019"
  },
  {
    raca: "São",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "08/11/2014",
    nome: "Vinson",
    nomeDono: "Herminia Roman",
    telefoneDono: "(859) 554-3320",
    dataUltimaVezQueTeveNoPet: "29/05/2019"
  },
  {
    raca: "Coton de Tuléar",
    genero: "macho",
    castrado: "não",
    dataNascimento: "17/11/2016",
    nome: "Navarro",
    nomeDono: "Glover Snider",
    telefoneDono: "(945) 559-2451",
    dataUltimaVezQueTeveNoPet: "10/02/2019"
  },
  {
    raca: "Basset Hound",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "04/08/2015",
    nome: "Boone",
    nomeDono: "Deloris Castillo",
    telefoneDono: "(939) 426-2569",
    dataUltimaVezQueTeveNoPet: "24/06/2019"
  },
  {
    raca: "Chow Chow",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "22/07/2017",
    nome: "Grant",
    nomeDono: "Ellis Prince",
    telefoneDono: "(827) 421-2722",
    dataUltimaVezQueTeveNoPet: "17/03/2019"
  },
  {
    raca: "Pinscher",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "14/03/2019",
    nome: "Branch",
    nomeDono: "Margo Salas",
    telefoneDono: "(853) 590-3139",
    dataUltimaVezQueTeveNoPet: "17/04/2019"
  },
  {
    raca: "Maltês",
    genero: "macho",
    castrado: "não",
    dataNascimento: "12/07/2017",
    nome: "Bennett",
    nomeDono: "Margaret Clarke",
    telefoneDono: "(956) 572-3829",
    dataUltimaVezQueTeveNoPet: "29/05/2019"
  },
  {
    raca: "Shar-Pei",
    genero: "macho",
    castrado: "não",
    dataNascimento: "30/05/2014",
    nome: "Morgan",
    nomeDono: "Chasity Cardenas",
    telefoneDono: "(931) 520-3071",
    dataUltimaVezQueTeveNoPet: "16/03/2019"
  },
  {
    raca: "Cocker Spaniel",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "17/05/2015",
    nome: "Griffith",
    nomeDono: "Duran Peck",
    telefoneDono: "(979) 467-2180",
    dataUltimaVezQueTeveNoPet: "10/01/2019"
  },
  {
    raca: "Dachshund",
    genero: "macho",
    castrado: "não",
    dataNascimento: "20/07/2015",
    nome: "Avery",
    nomeDono: "Hilda Jacobson",
    telefoneDono: "(914) 470-2996",
    dataUltimaVezQueTeveNoPet: "16/02/2019"
  },
  {
    raca: "Poodle",
    genero: "macho",
    castrado: "não",
    dataNascimento: "11/05/2017",
    nome: "Simon",
    nomeDono: "Lottie Brady",
    telefoneDono: "(818) 471-3913",
    dataUltimaVezQueTeveNoPet: "31/03/2019"
  },
  {
    raca: "Scottish Terrier",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "06/09/2018",
    nome: "Mcmahon",
    nomeDono: "Minnie Caldwell",
    telefoneDono: "(990) 499-2991",
    dataUltimaVezQueTeveNoPet: "22/06/2019"
  },
  {
    raca: "Skye Terrier",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "21/10/2018",
    nome: "Gilbert",
    nomeDono: "Janie Wolfe",
    telefoneDono: "(981) 421-2544",
    dataUltimaVezQueTeveNoPet: "16/01/2019"
  },
  {
    raca: "Dachshund",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "08/10/2018",
    nome: "Phillips",
    nomeDono: "Sheree Cain",
    telefoneDono: "(828) 408-3499",
    dataUltimaVezQueTeveNoPet: "27/05/2019"
  },
  {
    raca: "Afegão",
    genero: "macho",
    castrado: "não",
    dataNascimento: "15/02/2019",
    nome: "Mcdaniel",
    nomeDono: "Coffey Benton",
    telefoneDono: "(843) 544-2150",
    dataUltimaVezQueTeveNoPet: "26/02/2019"
  },
  {
    raca: "Collie",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "05/02/2019",
    nome: "Rowland",
    nomeDono: "Leah Obrien",
    telefoneDono: "(882) 424-2351",
    dataUltimaVezQueTeveNoPet: "22/03/2019"
  },
  {
    raca: "Shiba Inu",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "08/10/2016",
    nome: "Nixon",
    nomeDono: "Ward Anderson",
    telefoneDono: "(867) 567-3658",
    dataUltimaVezQueTeveNoPet: "23/07/2019"
  },
  {
    raca: "Setter",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "02/02/2017",
    nome: "Levine",
    nomeDono: "Elisa Duke",
    telefoneDono: "(897) 559-3710",
    dataUltimaVezQueTeveNoPet: "12/02/2019"
  },
  {
    raca: "Leonberger",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "27/12/2015",
    nome: "Steele",
    nomeDono: "Myrtle Haley",
    telefoneDono: "(849) 407-2649",
    dataUltimaVezQueTeveNoPet: "07/03/2019"
  },
  {
    raca: "Dálmata",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "08/08/2017",
    nome: "Jimenez",
    nomeDono: "Cervantes Nielsen",
    telefoneDono: "(862) 475-2359",
    dataUltimaVezQueTeveNoPet: "22/04/2019"
  },
  {
    raca: "Pitbull",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "05/01/2016",
    nome: "Herrera",
    nomeDono: "Selena Parsons",
    telefoneDono: "(800) 456-2860",
    dataUltimaVezQueTeveNoPet: "25/01/2019"
  },
  {
    raca: "Boston Terrier",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "26/07/2015",
    nome: "Gates",
    nomeDono: "Sheppard Newman",
    telefoneDono: "(942) 535-3264",
    dataUltimaVezQueTeveNoPet: "17/06/2019"
  },
  {
    raca: "Norfolk Terrier",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "04/10/2016",
    nome: "Sharp",
    nomeDono: "Celeste Horne",
    telefoneDono: "(994) 450-3028",
    dataUltimaVezQueTeveNoPet: "23/06/2019"
  },
  {
    raca: "Sabueso",
    genero: "macho",
    castrado: "não",
    dataNascimento: "08/12/2018",
    nome: "Mccarty",
    nomeDono: "Cecile Vaughan",
    telefoneDono: "(891) 592-3851",
    dataUltimaVezQueTeveNoPet: "14/05/2019"
  },
  {
    raca: "Barbet",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "27/06/2018",
    nome: "Wong",
    nomeDono: "Jane Park",
    telefoneDono: "(859) 454-2745",
    dataUltimaVezQueTeveNoPet: "31/07/2019"
  },
  {
    raca: "Boston Terrier",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "29/01/2017",
    nome: "Rodgers",
    nomeDono: "Ophelia Floyd",
    telefoneDono: "(926) 582-3925",
    dataUltimaVezQueTeveNoPet: "13/02/2019"
  },
  {
    raca: "Mastin",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "05/06/2016",
    nome: "Rosario",
    nomeDono: "Carey Levy",
    telefoneDono: "(975) 418-3493",
    dataUltimaVezQueTeveNoPet: "30/07/2019"
  },
  {
    raca: "Alano",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "02/09/2015",
    nome: "Molina",
    nomeDono: "Candy Wynn",
    telefoneDono: "(954) 600-2849",
    dataUltimaVezQueTeveNoPet: "05/06/2019"
  },
  {
    raca: "Bichon Havanês",
    genero: "macho",
    castrado: "não",
    dataNascimento: "25/12/2014",
    nome: "Rhodes",
    nomeDono: "Ernestine Rose",
    telefoneDono: "(930) 558-2933",
    dataUltimaVezQueTeveNoPet: "02/04/2019"
  },
  {
    raca: "Ridgeback",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "13/05/2017",
    nome: "Henderson",
    nomeDono: "Karyn Pugh",
    telefoneDono: "(928) 414-2659",
    dataUltimaVezQueTeveNoPet: "09/03/2019"
  },
  {
    raca: "Laika",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "02/11/2018",
    nome: "Le",
    nomeDono: "Ana Neal",
    telefoneDono: "(851) 408-2690",
    dataUltimaVezQueTeveNoPet: "20/03/2019"
  },
  {
    raca: "Leonberger",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "30/07/2018",
    nome: "Benjamin",
    nomeDono: "Deborah Schwartz",
    telefoneDono: "(938) 458-3661",
    dataUltimaVezQueTeveNoPet: "08/02/2019"
  },
  {
    raca: "Skye Terrier",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "19/12/2017",
    nome: "Calderon",
    nomeDono: "Madden Briggs",
    telefoneDono: "(909) 554-3882",
    dataUltimaVezQueTeveNoPet: "15/06/2019"
  },
  {
    raca: "Border Collie",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "05/04/2016",
    nome: "Patton",
    nomeDono: "David Ramsey",
    telefoneDono: "(989) 571-3722",
    dataUltimaVezQueTeveNoPet: "14/01/2019"
  },
  {
    raca: "Pug",
    genero: "macho",
    castrado: "não",
    dataNascimento: "02/05/2015",
    nome: "Bailey",
    nomeDono: "Snyder Lindsay",
    telefoneDono: "(961) 534-3590",
    dataUltimaVezQueTeveNoPet: "04/07/2019"
  },
  {
    raca: "Setter",
    genero: "macho",
    castrado: "sim",
    dataNascimento: "18/09/2014",
    nome: "Banks",
    nomeDono: "Grimes Dalton",
    telefoneDono: "(917) 490-2504",
    dataUltimaVezQueTeveNoPet: "09/02/2019"
  },
  {
    raca: "Bull Terrier",
    genero: "macho",
    castrado: "não",
    dataNascimento: "13/02/2015",
    nome: "Cooper",
    nomeDono: "Zelma Roth",
    telefoneDono: "(913) 582-2749",
    dataUltimaVezQueTeveNoPet: "28/04/2019"
  },
  {
    raca: "Dandie Dinmont Terrier",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "08/02/2017",
    nome: "Lynch",
    nomeDono: "Buckley Kennedy",
    telefoneDono: "(878) 488-2435",
    dataUltimaVezQueTeveNoPet: "10/01/2019"
  },
  {
    raca: "Spitz Alemão",
    genero: "fêmea",
    castrado: "sim",
    dataNascimento: "12/04/2014",
    nome: "Weiss",
    nomeDono: "Coleen Noel",
    telefoneDono: "(949) 550-2540",
    dataUltimaVezQueTeveNoPet: "01/07/2019"
  },
  {
    raca: "Yorkshire Terrier",
    genero: "fêmea",
    castrado: "não",
    dataNascimento: "15/09/2015",
    nome: "Cohen",
    nomeDono: "Swanson Glenn",
    telefoneDono: "(940) 403-3237",
    dataUltimaVezQueTeveNoPet: "06/03/2019"
  },
  {
    raca: "Teckel",
    genero: "macho",
    castrado: "não",
    dataNascimento: "23/08/2017",
    nome: "Harris",
    nomeDono: "Frank Stark",
    telefoneDono: "(904) 428-3128",
    dataUltimaVezQueTeveNoPet: "25/07/2019"
  },
  {
    raca: "Husky Siberiano",
    genero: "macho",
    castrado: "não",
    dataNascimento: "29/06/2019",
    nome: "Reeves",
    nomeDono: "Beverly Suarez",
    telefoneDono: "(918) 554-2412",
    dataUltimaVezQueTeveNoPet: "02/07/2019"
  }
];

app.all('*', (_, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/cachorros', (_, res) => {
  res.json(cachorros);
});
app.post('/cachorros', (res, req) => {
  cachorros.push(req.body);
  res.json(true);
})

app.listen(process.env.PORT || 3412, () => {
  console.log("Listen in port 3412...");
});