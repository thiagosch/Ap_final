const obras = [
    {
        img: "https://images.unsplash.com/photo-1578926375605-eaf7559b1458?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1363&q=80",
        description:
            "Esta pintura presenta un hermoso paisaje natural en el que el río es el elemento predominante, fluyendo majestuosamente hacia la izquierda y ocupando gran parte de la composición. En el lado derecho, un árbol parcialmente roto llama la atención, sugiriendo la presencia de fuerzas naturales en el entorno. En la orilla del río, dos botes a remo con personas adineradas ofrecen un contraste interesante con el paisaje natural. ",
        name: "A canoe",
        author: "Guy Whatever",
        id: 1,
        price: 0,
        full: `Esta obra de arte es una pintura al óleo que representa una escena tranquila y hermosa de la naturaleza. El artista ha utilizado una técnica de pincelada suelta para crear una sensación de movimiento y flujo en el río, mientras que el árbol parcialmente roto en el lado derecho añade una sensación de fragilidad y vulnerabilidad al paisaje. Los dos botes a remo y las personas adineradas en la orilla del río ofrecen un contraste interesante con la naturaleza circundante y sugieren una posible temática de la relación entre el hombre y la naturaleza. En general, la pintura es una expresión artística efectiva de la belleza natural y la interacción humana con ella.`,
    },

    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYW35Lpc5X7EpFRHcKjyqRREYFFgmWV32o9A&usqp=CAU",
        description:
            "Se dice que representa la actitud de los pinguinos aunque su autor evita hablar sobre esta obra. ",
        name: "Nvidia",
        author: "Linus Torvalds",
        id: 6,
        price: 0,
        full: `Esta impresionante imagen en tonos azules muestra al famoso programador y creador de Linux, Linus Torvalds, haciendo una declaración poderosa mientras levanta su dedo medio hacia la cámara en señal de protesta. Con una expresión seria en su rostro , es evidente que está expresando una gran frustración con la compañía de tecnología NVIDIA.<br/>
        Esta pintura es sin duda una adición interesante a cualquier colección de arte, no solo por su calidad visual sino también por su importancia cultural e histórica. Capturando un momento poderoso en la carrera de uno de los más grandes innovadores de la tecnología, esta imagen es una declaración de fuerza y determinación en la lucha por la libertad y la justicia en el mundo de la tecnología.`,
    },
    {
        img: "https://images.unsplash.com/photo-1582561424760-0321d75e81fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGludHVyYXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        description:
            "Las batallas navales fueron tan solicitadas que llegaron a constituir un nuevo subgénero dentro de la pintura de paisajes marítimos. La pintura muestra una escena de batalla naval en la que varios barcos de guerra son los protagonistas. El mar se encuentra en un tono oscuro, opacado por el humo de la batalla. En el fondo de la escena, se observa humo y posibles explosiones, lo que denota que la lucha es intensa. ",
        name: "A Boat",
        author: "Arthur Lastneim",
        id: 2,
        price: 0,
        full: `Arthur Lastneim fue un oficial naval que participo en varias batallas y queria documentar su experiencia en el arte. A Boat representa una de las batallas más memorables de su carrera y tiene la intención de capturar la intensidad y el caos del combate.<br/>
        A Boat que representa la batalla naval, es una de las más memorables de su carrera. Fue una batalla en la que su barco, un navío de línea, estaba en el centro de la acción. La lucha fue intensa, y Arthur Lastneim recordaba haberse sentido abrumado por la emoción y la adrenalina de la batalla. Quería capturar ese sentimiento en su arte y, por lo tanto, decidió crear una pintura que mostrara la intensidad y el caos del combate naval.<br/>
        Arthur Lastneim dedicó varios meses a trabajar en la pintura, utilizando su experiencia y conocimientos en la navegación y en la guerra naval para crear una imagen precisa y detallada de la batalla. Pasó horas estudiando los detalles de los barcos de guerra y de las armas navales de la época para asegurarse de que su pintura fuera lo más precisa posible. También se basó en sus propias memorias de la batalla para capturar la emoción del momento.<br/>
        La pintura que resultó de todo este trabajo es una representación dramática y realista de la batalla naval. Los barcos de guerra están representados con gran detalle, con sus velas hinchadas por el viento y sus cañones apuntando a los enemigos. El mar está agitado, con olas altas que se estrellan contra los barcos, y el humo y el fuego de la batalla cubren el cielo. Los personajes están retratados con realismo, con expresiones de determinación y miedo en sus rostros.<br/>
        Después de que Arthur Lastneim completó la pintura, la mostró en una exposición de arte naval. Fue recibida con gran entusiasmo por los amantes de la historia naval y la guerra, y rápidamente se convirtió en una de las obras más populares de la exposición`,
    },
    {
        img: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBpbnR1cmFzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        description:
            "En la imagen se puede ver un grupo de ovejas pastando en una zona periurbana. A pesar de estar en una zona urbana, las ovejas parecen estar disfrutando de su tiempo al aire libre y de la hierba fresca. A pesar de ser animales domesticados, las ovejas todavía tienen un instinto natural para pastar y vivir en manadas. La imagen es una muestra de cómo la naturaleza y la vida silvestre pueden coexistir con el desarrollo urbano.",
        name: "A couple sheep",
        author: "A'neim Anei'lasneim",
        id: 3,
        price: 0,
        full: `En esta imagen, podemos ver un paisaje pastoral de una zona periurbana antigua, rodeado de árboles y campos de hierba verde. En el centro de la imagen, un grupo de ovejas pastan pacíficamente, aprovechando los pastos frescos y la sombra de los árboles.<br/>

        Este paisaje tranquilo nos recuerda una época en que la agricultura y la ganadería eran las principales actividades económicas de las zonas periurbanas. A medida que las ciudades crecían, estas áreas se convirtieron en una transición entre el campo y la ciudad, donde la gente aún podía cultivar la tierra y criar animales para su propio consumo y para vender en los mercados urbanos.<br/>
        
        Las ovejas que pastan en esta imagen son un recordatorio de la importancia de la ganadería en la historia de la región. Durante siglos, las ovejas han sido criadas por su lana y carne, y han desempeñado un papel importante en la economía y la cultura local.<br/>
        
        Esta imagen también nos muestra cómo la naturaleza y la vida silvestre pueden coexistir con el desarrollo urbano en una zona periurbana antigua. En este caso, la agricultura y la ganadería eran la forma principal de desarrollo, y la naturaleza era vista como un recurso valioso para ser utilizado y preservado.`,
    },
    {
        img: "https://cdnb.artstation.com/p/assets/images/images/006/510/801/large/daniel-garcia-daniel-garcia-art-illustration-kim-jong-un-north-korea-war-missile-nuclear-atomic-bomb-01.jpg",
        description:
            "Segun el gobierno chino esta obra no existe. al igual que la plaza de tianmen el 4 de junio de 1989. ",
        name: "Winnie",
        author: "???",
        id: 4,
        price: 0,
        full: "No hay info",
    },
    {
        img: "https://static.boredpanda.com/blog/wp-content/uploads/2018/04/art-haunted-cursed-paintings-5ac3904536263__700.jpg",
        description:
            "Esta es una pintura de gran formato que mide aproximadamente 2 metros de alto por 1,5 metros de ancho. La obra está realizada con óleo sobre lienzo y presenta una composición que llama la atención del espectador desde el primer momento.",

        author: "???",
        name: "El grito de berazategui",
        id: 5,
        price: 0,
        full: `La historia detrás de la pintura es un misterio. Se sabe que el autor era un artista autodidacta que vivía en la pobreza en un pequeño pueblo de América Latina. Se dice que la inspiración para esta obra vino después de una experiencia traumática que tuvo, aunque los detalles de lo que sucedió se perdieron con el tiempo.<br/>

        Lo que se sabe es que después de completar la pintura, su autor la mantuvo escondida en su casa durante años, negándose a mostrarla a nadie. Cuando finalmente fue descubierta, se convirtió en objeto de burla y desprecio por parte de la comunidad artística local, que consideraba la obra como una caricatura grosera de "El Grito" de Munch. Sin embargo, algunos críticos han sugerido que la pintura puede ser una expresión genuina del dolor y el sufrimiento del autor, y que su torpeza y falta de técnica pueden ser vistas como una forma de comunicar la angustia emocional de manera más cruda y directa.<br/>
        
        A pesar de su falta de reconocimiento, "El Grito de berazategui" ha sobrevivido a través de los años, y ha sido comprada por varios coleccionistas privados, aunque su valor sigue siendo relativamente bajo. Hoy en día, la pintura es considerada por algunos como un ejemplo intrigante de la relación entre el arte y el trauma personal.<br/>
        `,
    },
];

const main = document.querySelector("main");

for (var i = 0; i < obras.length; i++) {
    let obra = obras[i];
    const container = document.createElement("section");
    container.classList.add("section", "row", "mb-5", "px-4", "hover-section");
    container.setAttribute("onclick", `show_details(${obra["id"]})`);

    const img_container = document.createElement("div");
    img_container.classList.add("col-lg-3", "d-flex", "align-items-center", "flex-column");

    const img = document.createElement("img");
    img.classList.add("rounded", "float-start", "img-fluid", "max-image-size");
    img.setAttribute("src", obra["img"]);
    img_container.appendChild(img);
    const name = document.createElement("p");
    name.innerHTML = obra["name"];
    img_container.appendChild(name);

    const description_container = document.createElement("div");
    description_container.classList.add("col", "fs-5", "relative");

    const author = document.createElement("h2");
    author.innerHTML = "Autor: " + obra["author"];
    description_container.appendChild(author);

    const description = document.createElement("p");
    description.innerHTML = obra["description"];
    description_container.appendChild(description);

    const show_more_container = document.createElement("span");
    show_more_container.classList.add("show-more");
    show_more_container.setAttribute("id", "show-more" + obra["id"]);
    show_more_container.innerHTML = `Mas info <i class="bi bi-arrow-right"></i>`;

    const modal = document.createElement("div");
    modal.setAttribute("id", "modal" + obra["id"]);
    modal.classList.add("modal-show-more");
    modal.innerHTML = obra["full"];
    const modal_degrade = document.createElement("div");
    modal_degrade.classList.add("modal-degrade");
    modal.prepend(modal_degrade);

    description_container.appendChild(show_more_container);
    container.appendChild(img_container);
    container.appendChild(description_container);
    container.appendChild(modal);
    main.appendChild(container);
}

function show_details(id) {
    modal = document.getElementById("modal" + id);
    show_more = document.getElementById("show-more" + id);
    if (modal.classList.contains("active")) {
        show_more.innerHTML = 'Mas info <i class="bi bi-arrow-right"></i>';
        modal.classList.remove("active");
    } else {
        show_more.innerHTML = 'Menos info <i class="bi bi-arrow-right"></i>';
        modal.classList.add("active");
    }
}
