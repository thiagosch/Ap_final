const obras = [
    {
        img: "https://images.unsplash.com/photo-1578926375605-eaf7559b1458?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1363&q=80",
        description:
            "Esta pintura presenta un hermoso paisaje natural en el que el río es el elemento predominante, fluyendo majestuosamente hacia la izquierda y ocupando gran parte de la composición. En el lado derecho, un árbol parcialmente roto llama la atención, sugiriendo la presencia de fuerzas naturales en el entorno. En la orilla del río, dos botes a remo con personas adineradas ofrecen un contraste interesante con el paisaje natural. ",
        name: "A canoe",
        author: "Guy Whatever",
        id: 1,
        price: 0,
    },
    {
        img: "https://images.unsplash.com/photo-1582561424760-0321d75e81fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGludHVyYXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        description:
            "Las batallas navales fueron tan solicitadas que llegaron a constituir un nuevo subgénero dentro de la pintura de paisajes marítimos. La pintura muestra una escena de batalla naval en la que varios barcos de guerra son los protagonistas. El mar se encuentra en un tono oscuro, opacado por el humo de la batalla. En el fondo de la escena, se observa humo y posibles explosiones, lo que denota que la lucha es intensa. ",
        name: "A Boat",
        author: "Arthur Lastneim",
        id: 2,
        price: 0,
    },
    {
        img: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBpbnR1cmFzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        description:
            "En la imagen se puede ver un grupo de ovejas pastando en una zona periurbana. A pesar de estar en una zona urbana, las ovejas parecen estar disfrutando de su tiempo al aire libre y de la hierba fresca. A pesar de ser animales domesticados, las ovejas todavía tienen un instinto natural para pastar y vivir en manadas. La imagen es una muestra de cómo la naturaleza y la vida silvestre pueden coexistir con el desarrollo urbano.",
        name: "A couple sheep",
        author: "A'neim Anei'lasneim",
        id: 3,
        price: 0,
    },
    {
        img: "https://cdnb.artstation.com/p/assets/images/images/006/510/801/large/daniel-garcia-daniel-garcia-art-illustration-kim-jong-un-north-korea-war-missile-nuclear-atomic-bomb-01.jpg",
        description:
            "Segun el gobierno chino esta obra no existe. al igual que la plaza de tianmen el 4 de junio de 1989. ",
        name: "Winnie",
        author: "???",
        id: 4,
        price: 0,
    },
    {
        img: "https://static.boredpanda.com/blog/wp-content/uploads/2018/04/art-haunted-cursed-paintings-5ac3904536263__700.jpg",
        description:
            "Esta es una pintura de gran formato que mide aproximadamente 2 metros de alto por 1,5 metros de ancho. La obra está realizada con óleo sobre lienzo y presenta una composición que llama la atención del espectador desde el primer momento.",
            author: "???",
        name: "El grito de berazategui",
        id: 5,
        price: 0,
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYW35Lpc5X7EpFRHcKjyqRREYFFgmWV32o9A&usqp=CAU",
        description: "Se dice que representa la actitud de los pinguinos aunque su autor evita hablar sobre esta obra. ",
        name: "Nvidia",
        author: "Linus Torvalds",
        id: 6,
        price: 0,
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
    author.innerHTML = obra["author"];
    description_container.appendChild(author);

    const description = document.createElement("p");
    description.innerHTML = obra["description"];
    description_container.appendChild(description);

    const show_more_container = document.createElement("span");
    show_more_container.classList.add("show-more");
    show_more_container.innerHTML = `Mas info <i class="bi bi-arrow-right"></i>`;

    description_container.appendChild(show_more_container);
    container.appendChild(img_container);
    container.appendChild(description_container);
    main.appendChild(container);
}

function show_details(id) {
    console.log(id);
}
