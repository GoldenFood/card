const quesoImage = './images/queso.jpg';
const queso_PolloChoclo = './images/queso_pollo_choclo.jpg';
const quesoChocloImage = './images/queso_choclo.jpg';
const quesoChampinon = './images/queso_champinon.jpg';
const quesoChampinonChoclo = './images/queso_champinon_choclo.jpg';
const napolitana = './images/napolitana.jpg';
const queso = './images/queso.jpg';
const quesoEspinaca = './images/queso_espinaca.jpg';
const quesoAceituna = './images/queso_aceituna.jpg';
const jamonQueso = './images/jamon_queso.jpg';
const quesoCamaron = './images/queso_camaron.jpg';
const quesoMechada = './images/mechada_queso.jpg';
const mariscos = './images/pino_marisco.jpg';
const Chaparrita = './images/chaparrita.jpg';


const papaIndividual = './images/IMG-20230816-WA0058.jpg';

const menuData = [
    {
      title: 'Empanadas',
      items: [
        {
            title: 'Pino / Pino Merkén',
            price: '$2.500',
            image: ""
        },
        {
            title: 'Pino Queso',
            price: '$2.700',
            image: ""
        },
        {
            title: 'Napolitana',
            price: '$2.500',
            image: napolitana
        },
        {
            title: 'Queso',
            price: '$2.100',
            image: queso
        },
        {
            title: 'Queso Aceituna',
            price: '$2.400',
            image: quesoAceituna
        },
        {
            title: 'Queso Espinaca',
            price: '$2.400',
            image: quesoEspinaca
        },
        {
            title: 'Queso Choclo',
            price: '$2.400',
            image: quesoChocloImage
        },
        {
            title: 'Queso Pollo Choclo',
            price: '$2.700',
            image: queso_PolloChoclo
        },
        {
            title: 'Queso Pollo',
            price: '$2.500',
            image: ""
        },
        {
            title: 'Queso Champiñon Choclo',
            price: '$2.700',
            image: quesoChampinonChoclo
        },
        {
            title: 'Queso Champiñon',
            price: '$2.500',
            image: quesoChampinon
        },
        {
            title: 'Queso Jamón',
            price: '$2.300',
            image: jamonQueso
        },
        {
            title: 'Queso Camarón',
            price: '$2.800',
            image: quesoCamaron
        },
        {
            title: 'Mariscos',
            price: '$2.700',
            image: mariscos
        },
        {
            title: 'Mechada Queso',
            price: '$2.800',
            image: quesoMechada
        },
        {
            title: 'Chaparrita',
            price: '$2.000',
            image: Chaparrita
        },
      ],
    },
    {
        title: 'Colaciones',
        items: [
          {
            title: 'Aji de Gallina Con Agregado + Pote de Ensalada',
            price: '$6.000',
            image: 'ruta_imagen_hand_roll_salmon.jpg',
          },
          {
              title: 'Carne Mechada Con Agregado + Pote de Ensalada',
              price: '$6.000',
              image: 'ruta_imagen_hand_roll_salmon.jpg',
          },
          {
            title: 'Pollo Al Jugo Con Agregado + Pote de Ensalada',
            price: '$5.500',
            image: 'ruta_imagen_hand_roll_atun.jpg',
          },
          {
            title: 'Fideos Con Salsa Bolognesa + Pote de Ensalada',
            price: '$4.000',
            image: 'ruta_imagen_hand_roll_salmon.jpg',
          },
          {
            title: 'Chuleta Con Agregado + Pote de Ensalada',
            price: '$5.000',
            image: 'ruta_imagen_hand_roll_salmon.jpg',
          },
          {
            title: 'Ensalada Hipocalorica (A eleccion: Pollo, Atun, Champiñon o Carne Mechada)',
            price: '$5.500',
            image: 'ruta_imagen_hand_roll_salmon.jpg',
          },
          {
            title: 'Pastel de Choclo (320gr) + Pote de Ensalada',
            price: '$4.500',
            image: 'ruta_imagen_hand_roll_salmon.jpg',
          },
          {
            title: 'Pastel de Choclo (500gr) + Pote de Ensalada',
            price: '$6.000',
            image: 'ruta_imagen_hand_roll_salmon.jpg',
          },
          {
            title: 'Lasaña (320gr) + Pote de Ensalada',
            price: '$4.500',
            image: 'ruta_imagen_hand_roll_salmon.jpg',
        },
        {
            title: 'Lasaña (500gr) + Pote de Ensalada',
            price: '$6.000',
            image: 'ruta_imagen_hand_roll_salmon.jpg',
        },
        {
            title: 'Pastel de Papas (320gr) + Pote de Ensalada',
            price: '$4.500',
            image: 'ruta_imagen_hand_roll_salmon.jpg',
        },
        {
            title: 'Pastel de Papas (500gr) + Pote de Ensalada',
            price: '$6.000',
            image: 'ruta_imagen_hand_roll_salmon.jpg',
        },
        ],
    },
    {
      title: 'Hand Rolls',
      items: [
        {
          title: 'Pollo',
          description: 'Hand Roll relleno de Pollo, Queso Crema y Cebollín',
          price: '$2.500 - 3 X $7.000',
          image: 'ruta_imagen_hand_roll_salmon.jpg',
        },
        {
            title: 'Champiñon',
            description: 'Hand Roll relleno de Champiñón, Queso Crema y Cebollín',
            price: '$2.300 - 3 X $7.000',
            image: 'ruta_imagen_hand_roll_salmon.jpg',
        },
        {
          title: 'Camarón',
          description: 'Hand Roll Relleno con Camarones picado en trozos, queso crema y cebollín.',
          price: '$2.700 - 3 X $8.000',
          image: 'ruta_imagen_hand_roll_atun.jpg',
        },
      ],
    },
    {
        title:"Papas Fritas",
        items:[
            {
                title: 'Papas Fritas Tamaño Normal',
                description:'Deliciosas Papas Fritas cortadas en tiras finas.',
                price :' $2.000',
                image: papaIndividual
            },
            {
                title: 'Papas Fritas Tamaño Grande',
                description:'Deliciosas Papas Fritas cortadas en tiras finas.',
                price :' $4.000',
                image: papaIndividual
            },
            {
                title: 'Salchipapas Tamaño Normal',
                description:'Deliciosas Papas Fritas cortadas en tiras finas con vienesas cortada en trozos.',
                price :' $2.500',
                image: "ruta_imagen_papasfritas.jpeg"
            },
            {
                title: 'Salchipapas Tamaño Grande',
                description:'Deliciosas Papas Fritas cortadas en tiras finas con vienesas cortada en trozos.',
                price :' $4.800',
                image: "ruta_imagen_papasfritas.jpeg"
            },
        ],
    },
    {
        title: 'Mechadas',
        items:[
            {
                title: 'Mechada Only',
                description:'Marraqueta, carne desmechada y mayonesa.',
                price :'$4.000',
                image: "ruta_imagen_bebidas_pepsi.png"
            },
            {
                title: 'Mechada Luco',
                description:'Marraqueta, carne desmechada y queso.',
                price :'$4.500',
                image: "ruta_imagen_bebidas_pepsi.png"
            },
            {
                title: 'Mechada Tomate Mayo',
                description:'Marraqueta, carne desmechada, tomate y mayonesa.',
                price :' $4.500',
                image: papaIndividual
            },
            {
                title: 'Mechada Champiñon',
                description:'Marraqueta, carne desmechada, champiñon y mayonesa.',
                price :' $4.500',
                image: papaIndividual
            },
            {
                title: 'Mechada Italiana',
                description:'Marraqueta, carne desmechada, tomate, palta y mayonesa.',
                price :' $4.700',
                image: papaIndividual
            },
            {
                title: 'Mechada Chacarera',
                description:'Marraqueta, carne desmechada, tomate, poroto verde, aji y mayonesa.',
                price :' $4.700',
                image: papaIndividual
            },
            {
                title: 'Mechada Brasileña',
                description:'Marraqueta, carne desmechada, palta, queso y mayonesa.',
                price :' $4.800',
                image: papaIndividual
            },
            {
                title: 'Mechada Criolla',
                description:'Marraqueta, carne desmechada, tomate, cebolla morada, lechuga, pepinillo  y mayonesa.',
                price :' $4.800',
                image: papaIndividual
            },
            {
                title: 'Mechada Golden',
                description:'Marraqueta, carne desmechada, queso chedar, lechuga, aros de cebolla, tocino, pepinillos y salsa GOLDEN.',
                price :' $5.200',
                image: papaIndividual
            },
        ],
    },
    {
        title: 'Promo Mechadas',
        items:[
            {
                title: 'Mechada Only',
                description:'Marraqueta, carne desmechada y mayonesa, porcion de papas y bebida en lata.',
                price :'$5.800',
                image: "ruta_imagen_bebidas_pepsi.png"
            },
            {
                title: 'Mechada Luco',
                description:'Marraqueta, carne desmechada y queso, porcion de papas y bebida en lata.',
                price :'$6.300',
                image: "ruta_imagen_bebidas_pepsi.png"
            },
            {
                title: 'Mechada Tomate Mayo',
                description:'Marraqueta, carne desmechada, tomate y mayonesa, porcion de papas y bebida en lata.',
                price :' $6.300',
                image: papaIndividual
            },
            {
                title: 'Mechada Champiñon',
                description:'Marraqueta, carne desmechada, champiñon y mayonesa, porcion de papas y bebida en lata.',
                price :' $6.300',
                image: papaIndividual
            },
            {
                title: 'Mechada Italiana',
                description:'Marraqueta, carne desmechada, tomate, palta y mayonesa, porcion de papas y bebida en lata.',
                price :' $6.500',
                image: papaIndividual
            },
            {
                title: 'Mechada Chacarera',
                description:'Marraqueta, carne desmechada, tomate, poroto verde, aji y mayonesa, porcion de papas y bebida en lata.',
                price :' $6.500',
                image: papaIndividual
            },
            {
                title: 'Mechada Brasileña',
                description:'Marraqueta, carne desmechada, palta, queso y mayonesa, porcion de papas y bebida en lata.',
                price :' $6.600',
                image: papaIndividual
            },
            {
                title: 'Mechada Criolla',
                description:'Marraqueta, carne desmechada, tomate, cebolla morada, lechuga, pepinillo  y mayonesa, porcion de papas y bebida en lata.',
                price :' $6.500',
                image: papaIndividual
            },
            {
                title: 'Mechada Golden',
                description:'Marraqueta, carne desmechada, queso chedar, lechuga, aros de cebolla, tocino, pepinillos y salsa GOLDEN, porcion de papas y bebida en lata.',
                price :' $7.000',
                image: papaIndividual
            },
        ],
    },
    {
        title: 'Mechadas con Papas',
        items:[
            {
                title: 'Mechada Only',
                description:'Marraqueta, carne desmechada y mayonesa, porcion de papas.',
                price :'$4.900',
                image: "ruta_imagen_bebidas_pepsi.png"
            },
            {
                title: 'Mechada Luco',
                description:'Marraqueta, carne desmechada y queso, porcion de papas.',
                price :'$5.400',
                image: "ruta_imagen_bebidas_pepsi.png"
            },
            {
                title: 'Mechada Tomate Mayo',
                description:'Marraqueta, carne desmechada, tomate y mayonesa, porcion de papas.',
                price :' $5.400',
                image: papaIndividual
            },
            {
                title: 'Mechada Champiñon',
                description:'Marraqueta, carne desmechada, champiñon y mayonesa, porcion de papas.',
                price :' $5.400',
                image: papaIndividual
            },
            {
                title: 'Mechada Italiana',
                description:'Marraqueta, carne desmechada, tomate, palta y mayonesa, porcion de papas.',
                price :' $5.600',
                image: papaIndividual
            },
            {
                title: 'Mechada Chacarera',
                description:'Marraqueta, carne desmechada, tomate, poroto verde, aji y mayonesa, porcion de papas.',
                price :' $5.600',
                image: papaIndividual
            },
            {
                title: 'Mechada Brasileña',
                description:'Marraqueta, carne desmechada, palta, queso y mayonesa, porcion de papas.',
                price :' $5.700',
                image: papaIndividual
            },
            {
                title: 'Mechada Criolla',
                description:'Marraqueta, carne desmechada, tomate, cebolla morada, lechuga, pepinillo  y mayonesa, porcion de papas.',
                price :' $5.700',
                image: papaIndividual
            },
            {
                title: 'Mechada Golden',
                description:'Marraqueta, carne desmechada, queso chedar, lechuga, aros de cebolla, tocino, pepinillos y salsa GOLDEN, porcion de papas.',
                price :' $6.100',
                image: papaIndividual
            },
        ],
    },
    {
        title: 'AS (25CM)',
        items:[
            {
                title: 'Tomate Mayo',
                price :'$3.100',
                image: "ruta_imagen_bebidas_pepsi.png"
            },
            {
                title: 'Luco',
                price :'$3.300',
                image: "ruta_imagen_bebidas_pepsi.png"
            },
            {
                title: 'Completo',
                price :' $3.400',
                image: papaIndividual
            },
            {
                title: 'Italiano',
                price :' $3.500',
                image: papaIndividual
            },
            {
                title: 'Chacarera',
                price :' $3.500',
                image: papaIndividual
            },
            {
                title: 'Dinamico',
                price :' $3.600',
                image: papaIndividual
            },
            {
                title: 'Armalo a tu Gusto (Pan + Churrasco + 3 ingredientes a eleccion + Mayonesa)',
                price :' $3.900',
                image: papaIndividual
            },
            {
                title: 'Ingredientes: Tomate - Palta - Queso - Queso Chedar - Huevo Revuelto - Repollo - Americana - Champiñon - Chucrut - Poroto verde - Choclo - Lechuga - Aros de Cebolla - Pepinillos - Aji Verde - Aceituna - Cebolla Morada - Papas Fritas - Papas al Hilo - Tocino',
                price :' $500',
                image: papaIndividual
            },
            {
                title: 'Agregar Papas Y Bebida (Lata 350ml + 100gr papas)',
                price :' $1.800',
                image: papaIndividual
            },
        ],
    },
    {
        title: 'Churrasco',
        items:[
            {
                title: 'Tomate Mayo',
                price :'$4.100',
                image: "ruta_imagen_bebidas_pepsi.png"
            },
            {
                title: 'Luco',
                price :'$4.300',
                image: "ruta_imagen_bebidas_pepsi.png"
            },
            {
                title: 'Completo',
                price :' $4.400',
                image: papaIndividual
            },
            {
                title: 'Italiano',
                price :' $4.500',
                image: papaIndividual
            },
            {
                title: 'Chacarera',
                price :' $4.500',
                image: papaIndividual
            },
            {
                title: 'Dinamico',
                price :' $4.600',
                image: papaIndividual
            },
            {
                title: 'Armalo a tu Gusto (Pan + Churrasco + 3 ingredientes a eleccion + Mayonesa)',
                price :' $4.900',
                image: papaIndividual
            },
            {
                title: 'Ingredientes: Tomate - Palta - Queso - Queso Chedar - Huevo Revuelto - Repollo - Americana - Champiñon - Chucrut - Poroto verde - Choclo - Lechuga - Aros de Cebolla - Pepinillos - Aji Verde - Aceituna - Cebolla Morada - Papas Fritas - Papas al Hilo - Tocino',
                price :' $500',
                image: papaIndividual
            },
            {
                title: 'Agregar Papas Y Bebida (Lata 350ml + 100gr papas)',
                price :' $1.800',
                image: papaIndividual
            },
        ],
    },
    {
        title: 'Vienesas (25cm)',
        items:[
            {
                title: 'Tomate Mayo',
                price :'$2.100',
                image: "ruta_imagen_bebidas_pepsi.png"
            },
            {
                title: 'Luco',
                price :'$2.300',
                image: "ruta_imagen_bebidas_pepsi.png"
            },
            {
                title: 'Completo',
                price :' $2.400',
                image: papaIndividual
            },
            {
                title: 'Italiano',
                price :' $2.500',
                image: papaIndividual
            },
            {
                title: 'Chacarera',
                price :' $2.500',
                image: papaIndividual
            },
            {
                title: 'Dinamico',
                price :' $2.600',
                image: papaIndividual
            },
            {
                title: 'Armalo a tu Gusto (Pan + Vienesa + 3 ingredientes a eleccion + Mayonesa)',
                price :' $2.900',
                image: papaIndividual
            },
            {
                title: 'Ingredientes: Tomate - Palta - Queso - Queso Chedar - Huevo Revuelto - Repollo - Americana - Champiñon - Chucrut - Poroto verde - Choclo - Lechuga - Aros de Cebolla - Pepinillos - Aji Verde - Aceituna - Cebolla Morada - Papas Fritas - Papas al Hilo - Tocino',
                price :' $500',
                image: papaIndividual
            },
            {
                title: 'Agregar Papas Y Bebida (Lata 350ml + 100gr papas)',
                price :' $1.800',
                image: papaIndividual
            },
        ],
    },
    {
        title: 'Gohan',
        items:[
            {
                title: 'Pollo Teriyaki (500gr)',
                price :'$6.500',
                image: "ruta_imagen_bebidas_pepsi.png"
            },
            {
                title: 'Pollo Furai (500gr)',
                price :'$6.500',
                image: "ruta_imagen_bebidas_pepsi.png"
            },
            {
                title: 'Camaron',
                price :' $7.000',
                image: papaIndividual
            },
        ],
    },
    {
        title: 'Bebidas',
        items:[
            {
                title: 'Bebida Lata Regular Variedades',
                price :'$1.000',
                image: "ruta_imagen_bebidas_pepsi.png"
            },
            {
                title: '1.5 Litros Variedades',
                price :'$2.200',
                image: "ruta_imagen_bebidas_pepsi.png"
            },
            {
                title: '3 Litros Variedades',
                price :' $3.200',
                image: papaIndividual
            },
        ],
    },
    {
        title: 'Salsas y Aderezos',
        items:[
            {
                title: 'Pocillo de Pebre',
                description:'Salsa típica chilena, que contiene tomate, cebolla, cilantro y ajo picado finamente, todo muy bien condimentado y aliñado. Recuerda que también puedes añadir tu pocillo de pebre al pedir tu empanada.',
                price: '$590',
                image :"ruta_imagen_salsas.jpg",
            }
        ]
    },
    
  ];
  
  const menuItemsContainer = document.getElementById("menu-items");

  menuData.forEach(category => {
      const categoryId = category.title.toLowerCase().replace(/ /g, '-');
  
      const categoryTitle = document.createElement("h2");
      categoryTitle.textContent = category.title;
      categoryTitle.id = categoryId; // Asigna el ID a la categoría
      menuItemsContainer.appendChild(categoryTitle);
  
      category.items.forEach(item => {
          const menuItem = document.createElement("div");
          menuItem.className = "menu-item";
  
          
          const itemText = document.createElement("div");
          itemText.className = "menu-item-text";
  
          const itemTitle = document.createElement("h3");
          itemTitle.className = "item-title";
          itemTitle.textContent = item.title;
          itemText.appendChild(itemTitle);
  
          const itemDescription = document.createElement("p");
          itemDescription.className = "item-description";
          itemDescription.textContent = item.description;
          itemText.appendChild(itemDescription);
  
          const itemPrice = document.createElement("p");
          itemPrice.className = "item-price";
          itemPrice.textContent = `Precio: ${item.price}`;
          itemText.appendChild(itemPrice);
  
          menuItem.appendChild(itemText);
          menuItemsContainer.appendChild(menuItem);

          const itemImage = document.createElement("img");
          itemImage.className = "menu-item-image";
          itemImage.src = item.image;
          itemImage.alt = item.title;
          menuItem.appendChild(itemImage);
  
      });
  });
  
  menuData.forEach(category => {
      const categoryLink = document.createElement("a");
      categoryLink.href = `#${category.title.toLowerCase().replace(/ /g, '-')}`;
      categoryLink.textContent = category.title;
      categoryLink.classList.add("navbar-link"); // Agrega una clase para estilizar los enlaces del navbar
      document.querySelector(".navbar-links").appendChild(categoryLink);
  });
  