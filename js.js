

/* const data = {
    flores: [
        { nombre: "El resto de Pablo", direccion: "Calle falsa 123, Flores", image: "restos/image1.png" },
        { nombre: "CARRIZO", direccion: "Calle falsa 456, Flores", image: "restos/image1.png" },
        { nombre: "Felsch Café", direccion: "Avenida falsa 789, Flores", image: "restos/felschcafe.jpg" },
        { nombre: "Mc Donalds", direccion: "Calle falsa 123, Flores", image: "restos/image1.png" },
        { nombre: "Las arepas de Charly", direccion: "Calle falsa 456, Flores", image: "restos/image1.png" },
    ],
    caballito: [
        { nombre: "Granja Agroecológica de Guernica", direccion: "Neuquén 1020, Caballito", image: "restos/image1.png" },
        { nombre: "Comida", direccion: "Gaona 203", image: "restos/image1.png" },
        { nombre: "LO DEL PELA", direccion: "Avenida re trucha 123, Flores", image: "restos/image1.png" },
        { nombre: "El Asador Criollo", direccion: "Calle Segurola 567, Caballito", image: "restos/image1.png" },
        { nombre: "La Pizzería del Parque", direccion: "Avenida Rivadavia 890, Caballito", image: "restos/image1.png" },
        { nombre: "Café de la Plaza", direccion: "Calle Rojas 123, Caballito", image: "restos/image1.png" },
        { nombre: "Burger Heaven", direccion: "Avenida Avellaneda 456, Caballito", image: "restos/image1.png" },
        { nombre: "Sushi Time", direccion: "Calle Nicasio Oroño 789, Caballito", image: "restos/image1.png" },
    ],
    pch: [
        { nombre: "Churros El Topo", direccion: "Abbey Road 729, Parque Chacabuco", image: "restos/image1.png" },
        { nombre: "El Chino por peso", direccion: "Calle dobla a la derecha 333, Parque Chacabuco", image: "restos/image1.png" },
        { nombre: "Mercado Hernan", direccion: "Avenida falsa 789, Parque Chacabuco", image: "restos/image1.png" },
    ],
    almagro: [
        { nombre: "Hardcodeado", direccion: "La Oficina 473", image: "restos/image1.png" },
        { nombre: "Las arepas de Charly II", direccion: "Calle falsa 456, Almagro", image: "restos/image1.png" },
        { nombre: "Empanaditas", direccion: "A la vuelta de la oficina", image: "restos/image1.png" },
        { nombre: "Pasteleria Kollmann", direccion: "Avenida re trucha 123, Almagro", image: "restos/image1.png" },

    ],
};
 
*/

fetch('http://localhost:8081/restaurante/getBarrios')
    .then(response => response.json())
    .then(data => {
        const select = document.getElementById('opcionesbarrio');

        data.forEach(nombre => {
            const option = document.createElement('option');
            option.value = nombre;
            option.textContent = nombre;
            select.appendChild(option);
        });
    })
    .catch(error => {
        console.error('Error al obtener los nombres:', error);
    });



const cardContainer = document.getElementById("cardContainer");
const opcionesBarrio = document.getElementById("opcionesbarrio");
opcionesBarrio.addEventListener("change", mostrarRestos);

function mostrarRestos(e) {
    fetch(`http://localhost:8081/restaurante/getRestaurantePorBarrio/${e.target.value}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
          

            cardContainer.innerHTML = "";

            data.forEach(item => {
                const card = document.createElement("div");
                card.classList.add("card");
                card.innerHTML = `
                <img src="${item.imagen}" alt="${item.nombre}" class="cardimg">
                <h3>${item.nombre}</h3>
                <p>${item.direccion}</p>
                `;
                cardContainer.appendChild(card);
            });

        })


}

mostrarRestos();
