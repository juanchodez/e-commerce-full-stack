// navigation Data
export const navItems = [
    {
      title: "Inicio",
      url: "/",
    },
    {
      title: "Más vendidos",
      url: "/best-selling",
    },
    {
      title: "Servicios",
      url: "/products",
    },
    {
      title: "Eventos",
      url: "/events",
    },
    {
      title: "FAQ",
      url: "/faq",
    },
  ];
  
  // branding data
  export const brandingData = [
    {
      id: 1,
      title: "Encuentra amigos ",
      Description: "mientras juegas",
      icon: (
        <svg fill="#000000" width="50px" height="50px" viewBox="0 -64 640 640" xmlns="http://www.w3.org/2000/svg"><path d="M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48 0-61.9-50.1-112-112-112z"/></svg>
      ),
    },
    {
      id: 2,
      title: "Participa en torneos",
      Description: "Constantemente",
      icon: (
        <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6 6C5.17157 6 4.5 6.67157 4.5 7.5C4.5 8.32843 5.17157 9 6 9L6 6ZM6 10.5C4.34315 10.5 3 9.15685 3 7.5C3 5.84315 4.34315 4.5 6 4.5H18C19.6569 4.5 21 5.84315 21 7.5C21 9.15685 19.6569 10.5 18 10.5V11.3308C18 13.9668 15.7097 16.142 12.75 16.46V18.75H15V20.25H9V18.75H11.25V16.46C8.29027 16.142 6 13.9668 6 11.3308L6 10.5ZM12 15C14.7029 15 16.5 13.1552 16.5 11.3308V6H7.5V11.3308C7.5 13.1552 9.29713 15 12 15ZM19.5 7.5C19.5 8.32843 18.8284 9 18 9V6C18.8284 6 19.5 6.67157 19.5 7.5Z" fill="#080341"/>
        </svg>
      ),
    },
    {
      id: 4,
      title: "Buscamos escenarios",
      Description: "cerca a tu ubicación",
      icon: (
        <svg fill="#000000" width="50px" height="50px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">

        <title/>
        <g data-name="Layer 2" id="Layer_2">
        <path d="M2,20H22V4H2Zm11-9.72a2,2,0,0,1,0,3.44Zm-2,3.44a2,2,0,0,1,0-3.44ZM20,14H19V10h1Zm0-6H17v8h3v2H13V15.86a4,4,0,0,0,0-7.72V6h7ZM11,6V8.14a4,4,0,0,0,0,7.72V18H4V16H7V8H4V6ZM4,14V10H5v4Z"/>
        </g>
        </svg>
      ),
    },
    {
      id: 5,
      title: "Compite por",
      Description: "premios",
      icon: (
        <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.9201 12.8959L19.2583 8.89003C19.533 8.5604 19.6704 8.39557 19.7681 8.21065C19.8548 8.0466 19.9183 7.87128 19.9567 7.68973C20 7.48508 20 7.27053 20 6.84144V6.2C20 5.07989 20 4.51984 19.782 4.09202C19.5903 3.71569 19.2843 3.40973 18.908 3.21799C18.4802 3 17.9201 3 16.8 3H7.2C6.0799 3 5.51984 3 5.09202 3.21799C4.71569 3.40973 4.40973 3.71569 4.21799 4.09202C4 4.51984 4 5.07989 4 6.2V6.84144C4 7.27053 4 7.48508 4.04328 7.68973C4.08168 7.87128 4.14515 8.0466 4.23188 8.21065C4.32964 8.39557 4.467 8.5604 4.74169 8.89003L8.07995 12.8959M13.4009 11.1989L19.3668 3.53988M10.5991 11.1989L4.6394 3.53414M6.55673 6H17.4505M17 16C17 18.7614 14.7614 21 12 21C9.23858 21 7 18.7614 7 16C7 13.2386 9.23858 11 12 11C14.7614 11 17 13.2386 17 16Z" stroke="#000000" stroke-width="2" stroke-linejoin="round"/>
        </svg>
      ),
    },
  ];
  
  // categories data
  export const categoriesData = [
    {
      id: 1,
      title: "Tennis",
      subTitle: "",
      image_Url:
        "https://res.cloudinary.com/damn7aehg/image/upload/c_fill,w_50,h_50/v1731789131/tennis_icon_124456_dpmvny.png",
    },
    {
      id: 2,
      title: "Futbol",
      subTitle: "",
      image_Url:
        "https://res.cloudinary.com/damn7aehg/image/upload/c_fill,w_50,h_50/v1731789174/Football_2-57_icon-icons.com_72103_m93tst.png",
    },
    {
      id: 3,
      title: "Baloncesto",
      subTitle: "",
      image_Url:
        "https://cdn-icons-png.flaticon.com/512/4533/4533602.png",
    },
    {
      id: 4,
      title: "Ciclismo",
      subTitle: "",
      image_Url:
        "https://res.cloudinary.com/damn7aehg/image/upload/c_fill,w_50,h_50/v1731789749/3601647_klfagn.png",
    },
    {
      id: 5,
      title: "Natación",
      subTitle: "",
      image_Url:
        "https://res.cloudinary.com/damn7aehg/image/upload/c_fill,w_50,h_50/v1731789264/5222367_tyroe1.png",
    },
    {
      id: 6,
      title: "Ping Pong",
      subTitle: "",
      image_Url:
        "https://res.cloudinary.com/damn7aehg/image/upload/c_fill,w_50,h_50/v1731789296/2119006_mdicug.png",
    },
    {
      id: 7,
      title: "Padel",
      subTitle: "",
      image_Url: "https://res.cloudinary.com/damn7aehg/image/upload/c_fill,w_50,h_50/v1731789410/8842175_jdwnrc.png",
    },
    {
      id: 8,
      title: "Squash",
      subTitle: "",
      image_Url:
        "https://res.cloudinary.com/damn7aehg/image/upload/c_fill,w_50,h_50/v1731789452/7225480_rqscaw.png",
    },
    {
      id: 9,
      title: "Runnig",
      subTitle: "",
      image_Url:
        "https://res.cloudinary.com/damn7aehg/image/upload/c_fill,w_50,h_50/v1731789472/4357645_vtov3v.png",
    },
    {
      id: 10,
      title: "Otros",
      subTitle: "",
      image_Url:
        "https://res.cloudinary.com/damn7aehg/image/upload/c_fill,w_50,h_50/v1731786451/2048px-Sport_balls.svg_vokmio.png",
    },
  ];
  
  // product Data
  export const productData = [
    {
      id: 1,
      category:"Computers and Laptops",
      name: "MacBook pro M2 chipset 256gb ssd 8gb ram space-gray color with apple 1 year warranty",
      description:
        "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
      image_Url: [
        {
          public_id: "test",
          url: "https://www.istorebangladesh.com/images/thumbs/0000286_macbook-pro-m1_550.png",
        },
        {
          public_id: "test",
          url: "https://www.istorebangladesh.com/images/thumbs/0000286_macbook-pro-m1_550.png",
        },
      ],
      shop: {
        name: "Apple inc.",
        shop_avatar: {
          public_id: "test",
          url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
        },
        ratings: 4.2,
      },
      price: 1099,
      discount_price: 1049,
      rating: 4,
      total_sell: 35,
      stock: 10,
    },
    {
      id: 2,
      category:"Mobile and Tablets",
      name: "Iphone 14 pro max 256 gb ssd and 8 gb ram silver colour",
      description:
        "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
      image_Url: [
        {
          public_id: "test",
          url: "https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg",
        },
        {
          public_id: "test",
          url: "https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg",
        },
      ],
      shop: {
        name: "Amazon Ltd",
        shop_avatar: {
          public_id: "test",
          url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
        },
        ratings: 4.2,
      },
      discount_price: 1099,
      rating: 5,
      total_sell: 80,
      stock: 10,
      category:"Mobile & Tablets"
    },
    {
      id: 1,
      category:"Computers and Laptop",
      name: "MacBook pro M2 chipset 256gb ssd 8gb ram space gray color with apple 1 year warranty",
      description:
        "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
      image_Url: [
        {
          public_id: "test",
          url: "https://www.istorebangladesh.com/images/thumbs/0000286_macbook-pro-m1_550.png",
        },
        {
          public_id: "test",
          url: "https://www.istorebangladesh.com/images/thumbs/0000286_macbook-pro-m1_550.png",
        },
      ],
      shop: {
        name: "Apple inc.",
        shop_avatar: {
          public_id: "test",
          url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
        },
        ratings: 4.2,
      },
      price: 1099,
      discount_price: 1049,
      rating: 4,
      total_sell: 75,
      stock: 10,
      category:"Computers & Laptop"
    },
    {
      id: 4,
      category:"Others",
      name: "New Fashionable Watch for men 2023 with multiple colors",
      description:
        "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
      image_Url: [
        {
          public_id: "test",
          url: "https://i0.wp.com/eccocibd.com/wp-content/uploads/2022/01/1802NL02_1.png?fit=550%2C550&ssl=1",
        },
        {
          public_id: "test",
          url: "https://i0.wp.com/eccocibd.com/wp-content/uploads/2022/01/1802NL02_1.png?fit=550%2C550&ssl=1",
        },
      ],
      shop: {
        name: "Shahriar Watch House",
        shop_avatar: {
          public_id: "test",
          url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
        },
        ratings: 4.2,
      category:"Others"
      },
      price: 100,
      discount_price: 79,
      rating: 4,
      total_sell: 12,
      stock: 10,
    },
    {
      id: 5,
      category:"Shoes",
      name: "New Trend shoes for gents with all sizes",
      description:
        "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
      image_Url: [
        {
          public_id: "test",
          url: "https://mirzacdns3.s3.ap-south-1.amazonaws.com/cache/catalog/RLV0015/2-800x800.jpg",
        },
        {
          public_id: "test",
          url: "https://mirzacdns3.s3.ap-south-1.amazonaws.com/cache/catalog/RLV0015/2-800x800.jpg",
        },
      ],
      shop: {
        name: "Alisha Shoes Mart",
        shop_avatar: {
          public_id: "test",
          url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
        },
        ratings: 4.2,
      },
      price: 120,
      discount_price: 89,
      rating: 5,
      total_sell: 49,
      stock: 10,
      category:"Shoes"
    },
    {
      id: 1,
      name: "Gaming Headphone Asus with mutiple color and free delivery",
      description:
        "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
      image_Url: [
        {
          public_id: "test",
          url: "https://www.startech.com.bd/image/cache/catalog/headphone/havit/h763d/h763d-02-500x500.jpg",
        },
        {
          public_id: "test",
          url: "https://eratablet.com/wp-content/uploads/2022/08/H51ba6537405f4948972e293927673546u.jpg",
        },
      ],
      shop: {
        name: "Asus Ltd",
        shop_avatar: {
          public_id: "test",
          url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
        },
        ratings: 4.2,
      },
      price: 300,
      discount_price: 239,
      rating: 4.5,
      reviews: [
        {
          user: {
            // user object will be here
          },
          comment: "IT's so cool!",
          rating: 5,
        },
      ],
      total_sell: 20,
      stock: 10,
      category:"Music and Gaming"
    },
    {
      id: 4,
      name: "New Fashionable Watch for men 2023 with multiple colors",
      description:
        "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
      image_Url: [
        {
          public_id: "test",
          url: "https://i0.wp.com/eccocibd.com/wp-content/uploads/2022/01/1802NL02_1.png?fit=550%2C550&ssl=1",
        },
        {
          public_id: "test",
          url: "https://i0.wp.com/eccocibd.com/wp-content/uploads/2022/01/1802NL02_1.png?fit=550%2C550&ssl=1",
        },
      ],
      shop: {
        name: "Shahriar Watch House",
        shop_avatar: {
          public_id: "test",
          url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
        },
        ratings: 4.2,
      },
      price: 100,
      discount_price: 79,
      rating: 4,
      total_sell: 62,
      stock: 10,
    },
    {
      id: 1,
      name: "Gaming Headphone Asus with mutiple color and free delivery",
      description:
        "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
      image_Url: [
        {
          public_id: "test",
          url: "https://www.startech.com.bd/image/cache/catalog/headphone/havit/h763d/h763d-02-500x500.jpg",
        },
        {
          public_id: "test",
          url: "https://eratablet.com/wp-content/uploads/2022/08/H51ba6537405f4948972e293927673546u.jpg",
        },
      ],
      shop: {
        name: "Asus Ltd",
        shop_avatar: {
          public_id: "test",
          url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
        },
        ratings: 4.2,
      },
      price: 300,
      discount_price: 239,
      rating: 4.5,
      reviews: [
        {
          user: {
            // user object will be here
          },
          comment: "IT's so cool!",
          rating: 5,
        },
      ],
      total_sell: 20,
      stock: 10,
    },
    {
      id: 2,
      category:"Mobile and Tablets",
      name: "Iphone 14 pro max 256 gb ssd and 8 gb ram silver colour",
      description:
        "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
      image_Url: [
        {
          public_id: "test",
          url: "https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg",
        },
        {
          public_id: "test",
          url: "https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg",
        },
      ],
      shop: {
        name: "Amazon Ltd",
        shop_avatar: {
          public_id: "test",
          url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
        },
        ratings: 4.2,
      },
      discount_price: 1099,
      rating: 5,
      total_sell: 20,
      stock: 10,
    },
    {
      id: 1,
      category:"Music and Gaming",
      name: "Gaming Headphone Asus with mutiple color and free delivery",
      description:
        "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
      image_Url: [
        {
          public_id: "test",
          url: "https://www.startech.com.bd/image/cache/catalog/headphone/havit/h763d/h763d-02-500x500.jpg",
        },
        {
          public_id: "test",
          url: "https://eratablet.com/wp-content/uploads/2022/08/H51ba6537405f4948972e293927673546u.jpg",
        },
      ],
      shop: {
        name: "Asus Ltd",
        shop_avatar: {
          public_id: "test",
          url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
        },
        ratings: 4.2,
      },
      price: 300,
      discount_price: 239,
      rating: 4.5,
      reviews: [
        {
          user: {
            // user object will be here
          },
          comment: "IT's so cool!",
          rating: 5,
        },
      ],
      total_sell: 20,
      stock: 10,
    },
  ];
  
  export const footerProductLinks = [
    {
      name: "Sobre nosotros",
      link: "/about"
    },
    {
      name: "Nuestro blog",
    },
  ];
  
  export const footercompanyLinks = [
    {
      name: "Con raqueta",
    },
    {
      name: "Con Balón",
    },
    {
      name: "De Exterior",
    },
    {
      name: "De Equipo",
    },
    {
      name: "Eventos",
    },
  ];
  
  export const footerSupportLinks = [
    {
      name: "FAQ",
    },
    {
      name: "Reseña",
    },
    {
      name: "Contactenos",
    },
    {
      name: "Envíos",
    },
  ];
  