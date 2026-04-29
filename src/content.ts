const modelsMenu = {
  label: "MODELOS",
  closeLabel: "Cerrar menú de modelos",
  columnLabels: {
    brands: "Marcas",
    categories: "Categorías",
    models: "Modelos",
    engine: "Motor",
    segment: "Segmento",
  },
  brands: [
    {
      name: "Benelli",
      categories: [
        {
          name: "Naked",
          models: [
            {
              name: "TNT 135",
              engineCc: 135,
              segment: "Entry",
              notes: "Popular urban starter",
            },
            {
              name: "TNT 150i / 150S",
              engineCc: 150,
              segment: "Entry",
              notes: "High volume LATAM",
            },
            {
              name: "180S",
              engineCc: 180,
              segment: "Entry+",
              notes: "Sport styling",
            },
            {
              name: "302S",
              engineCc: 300,
              segment: "Mid",
              notes: "Very common",
            },
            {
              name: "752S",
              engineCc: 750,
              segment: "Premium",
              notes: "Niche",
            },
          ],
        },
        {
          name: "Adventure",
          models: [
            {
              name: "TRK 251",
              engineCc: 250,
              segment: "Mid",
              notes: "Growing segment",
            },
            {
              name: "TRK 502",
              engineCc: 500,
              segment: "Mid",
              notes: "Top seller LATAM",
            },
            {
              name: "TRK 502X",
              engineCc: 500,
              segment: "Mid",
              notes: "Off-road variant",
            },
          ],
        },
        {
          name: "Retro",
          models: [
            {
              name: "Leoncino 250",
              engineCc: 250,
              segment: "Mid",
              notes: "Style buyers",
            },
            {
              name: "Leoncino 500",
              engineCc: 500,
              segment: "Mid",
              notes: "Popular",
            },
          ],
        },
        {
          name: "Cruiser",
          models: [
            {
              name: "502C",
              engineCc: 500,
              segment: "Mid",
              notes: "Cruiser niche",
            },
          ],
        },
        {
          name: "Classic",
          models: [
            {
              name: "Imperiale 400",
              engineCc: 400,
              segment: "Mid",
              notes: "Retro appeal",
            },
          ],
        },
        {
          name: "Scooter",
          models: [
            {
              name: "Caffenero 150",
              engineCc: 150,
              segment: "Entry",
              notes: "Limited presence",
            },
            {
              name: "Zafferano 250",
              engineCc: 250,
              segment: "Mid",
              notes: "Low volume",
            },
          ],
        },
      ],
    },
    {
      name: "Kawasaki",
      categories: [
        {
          name: "Sport",
          models: [
            {
              name: "Ninja 300",
              engineCc: 300,
              segment: "Mid",
              notes: "Common LATAM",
            },
            {
              name: "Ninja 400",
              engineCc: 400,
              segment: "Mid",
              notes: "Very popular",
            },
            {
              name: "Ninja 650",
              engineCc: 650,
              segment: "Premium",
              notes: "Strong demand",
            },
          ],
        },
        {
          name: "Naked",
          models: [
            {
              name: "Z125",
              engineCc: 125,
              segment: "Entry",
              notes: "Urban",
            },
            {
              name: "Z400",
              engineCc: 400,
              segment: "Mid",
              notes: "Good seller",
            },
            {
              name: "Z650",
              engineCc: 650,
              segment: "Premium",
              notes: "Popular",
            },
            {
              name: "Z900",
              engineCc: 900,
              segment: "Premium",
              notes: "Niche",
            },
          ],
        },
        {
          name: "Adventure",
          models: [
            {
              name: "Versys-X 300",
              engineCc: 300,
              segment: "Mid",
              notes: "Strong LATAM",
            },
            {
              name: "Versys 650",
              engineCc: 650,
              segment: "Premium",
              notes: "Touring",
            },
          ],
        },
        {
          name: "Dual Sport",
          models: [
            {
              name: "KLR 650",
              engineCc: 650,
              segment: "Mid",
              notes: "Rugged markets",
            },
            {
              name: "KLX 150 / 230",
              engineCc: "150-230",
              segment: "Entry",
              notes: "Rural use",
            },
          ],
        },
        {
          name: "Cruiser",
          models: [
            {
              name: "Vulcan S",
              engineCc: 650,
              segment: "Premium",
              notes: "Niche",
            },
          ],
        },
      ],
    },
    {
      name: "Kymco",
      categories: [
        {
          name: "Scooter",
          models: [
            {
              name: "Agility 125",
              engineCc: 125,
              segment: "Entry",
              notes: "Massive volume",
            },
            {
              name: "Agility 150",
              engineCc: 150,
              segment: "Entry",
              notes: "Delivery use",
            },
            {
              name: "Agility City 125/150/200",
              engineCc: "125-200",
              segment: "Entry",
              notes: "Very common",
            },
            {
              name: "Like 125 / 200",
              engineCc: "125-200",
              segment: "Entry",
              notes: "Urban",
            },
            {
              name: "People 125 / 150",
              engineCc: "125-150",
              segment: "Entry",
              notes: "Practical",
            },
            {
              name: "X-Town 300",
              engineCc: 300,
              segment: "Mid",
              notes: "Growing",
            },
            {
              name: "Downtown 300",
              engineCc: 300,
              segment: "Mid",
              notes: "Premium scooter",
            },
            {
              name: "AK550",
              engineCc: 550,
              segment: "Premium",
              notes: "Niche",
            },
          ],
        },
        {
          name: "Motorcycle",
          models: [
            {
              name: "K-Pipe 125",
              engineCc: 125,
              segment: "Entry",
              notes: "Low volume",
            },
            {
              name: "Venox 250",
              engineCc: 250,
              segment: "Mid",
              notes: "Cruiser niche",
            },
          ],
        },
      ],
    },
    {
      name: "Starker",
      categories: [
        {
          name: "Electric Scooter",
          models: [
            {
              name: "Skuty",
              engineCc: "Electric",
              segment: "Entry",
              notes: "Delivery fleets",
            },
            {
              name: "Avantti",
              engineCc: "Electric",
              segment: "Entry",
              notes: "Urban mobility",
            },
            {
              name: "City models",
              engineCc: "Electric",
              segment: "Entry",
              notes: "Colombia focus",
            },
          ],
        },
      ],
    },
    {
      name: "TVS",
      categories: [
        {
          name: "Commuter",
          models: [
            {
              name: "Sport",
              engineCc: 100,
              segment: "Entry",
              notes: "High volume",
            },
            {
              name: "Star City Plus",
              engineCc: 110,
              segment: "Entry",
              notes: "Reliable",
            },
          ],
        },
        {
          name: "Street",
          models: [
            {
              name: "Apache RTR 160",
              engineCc: 160,
              segment: "Entry+",
              notes: "Very common",
            },
            {
              name: "Apache RTR 180",
              engineCc: 180,
              segment: "Entry+",
              notes: "Strong",
            },
            {
              name: "Apache RTR 200 4V",
              engineCc: 200,
              segment: "Mid",
              notes: "Popular",
            },
          ],
        },
        {
          name: "Sport",
          models: [
            {
              name: "Apache RR 310",
              engineCc: 310,
              segment: "Mid",
              notes: "Premium entry",
            },
          ],
        },
        {
          name: "Utility",
          models: [
            {
              name: "HLX Series",
              engineCc: "125-150",
              segment: "Entry",
              notes: "Rural dominance",
            },
          ],
        },
      ],
    },
    {
      name: "Victory",
      categories: [
        {
          name: "Cruiser",
          models: [
            {
              name: "Various models",
              engineCc: "1000+",
              segment: "Premium",
              notes: "Discontinued brand",
            },
          ],
        },
        {
          name: "Touring",
          models: [
            {
              name: "Various models",
              engineCc: "1000+",
              segment: "Premium",
              notes: "Only used imports",
            },
          ],
        },
      ],
    },
    {
      name: "AKT",
      categories: [
        {
          name: "Commuter",
          models: [
            {
              name: "NKD 125",
              engineCc: 125,
              segment: "Entry",
              notes: "Extremely common",
            },
            {
              name: "AK125",
              engineCc: 125,
              segment: "Entry",
              notes: "High volume",
            },
            {
              name: "AK150",
              engineCc: 150,
              segment: "Entry",
              notes: "Affordable",
            },
          ],
        },
        {
          name: "Street",
          models: [
            {
              name: "CR4 125 / 162",
              engineCc: "125-162",
              segment: "Entry",
              notes: "Popular",
            },
          ],
        },
        {
          name: "Dual Sport",
          models: [
            {
              name: "TT DS 200",
              engineCc: 200,
              segment: "Entry+",
              notes: "Utility",
            },
            {
              name: "TT 200",
              engineCc: 200,
              segment: "Entry+",
              notes: "Strong seller",
            },
            {
              name: "TT 250",
              engineCc: 250,
              segment: "Mid",
              notes: "Growing",
            },
          ],
        },
        {
          name: "Scooter",
          models: [
            {
              name: "Dynamic / Jet",
              engineCc: "125-150",
              segment: "Entry",
              notes: "Urban",
            },
          ],
        },
      ],
    },
  ],
};

const esContent = {
  whatsappHref:
    "https://api.whatsapp.com/send?phone=573148514466&text=Hola,%20quiero%20conocer%20m%C3%A1s%20sobre%20los%20servicios%20de%20Mi%20Motto.",
  header: {
    logo: "MIMOTTO",
    logoAccent: ".",
    homeLabel: "INICIO",
    homeLabelHref:
      "https://api.whatsapp.com/send?phone=573148514466&text=Hola,%20quiero%20conocer%20m%C3%A1s%20sobre%20los%20servicios%20de%20Mi%20Motto.",
    homeHref: "#",
    modelsMenu,
  },
  hero: {
    eyebrow: "ahorra tiempo  y  dÉjala",
    title: "EN MANOS EXPERTAS",
    videoSrc: "/assets/hero-bg.mp4",
    posterSrc: "/assets/images/hero-poster.jpg",
  },
  cta: {
    label: "CONTÁCTANOS",
    href: "https://api.whatsapp.com/send?phone=573148514466&text=Hola,%20quiero%20conocer%20m%C3%A1s%20sobre%20los%20servicios%20de%20Mi%20Motto.",
  },
  services: [
    {
      title: ["MANTENIMIENTO", "A DOMICILIO"],
      imageSrc: "/assets/images/mantenimiento-domicilio.jpg",
      imageAlt: "Mantenimiento a domicilio",
      linkLabel: "CONOCE MÁS",
      linkHref:
        "https://api.whatsapp.com/send?phone=573148514466&text=Hola,%20quiero%20conocer%20m%C3%A1s%20sobre%20los%20servicios%20de%20Mi%20Motto.",
    },
    {
      title: ["SEGUIMIENTO", "CONSTANTE"],
      imageSrc: "/assets/images/SEGUIMIENTO.jpg",
      imageAlt: "Seguimiento constante",
      linkLabel: "CONOCE MÁS",
      linkHref:
        "https://api.whatsapp.com/send?phone=573148514466&text=Hola,%20quiero%20conocer%20m%C3%A1s%20sobre%20los%20servicios%20de%20Mi%20Motto.",
    },
    {
      title: ["TODO LO QUE", "NECESITAS"],
      imageSrc: "/assets/images/tTodo-lo-que-necesitas.jpg",
      imageAlt: "Todo lo que necesitas",
      linkLabel: "CONOCE MÁS",
      linkHref:
        "https://api.whatsapp.com/send?phone=573148514466&text=Hola,%20quiero%20conocer%20m%C3%A1s%20sobre%20los%20servicios%20de%20Mi%20Motto.",
    },
  ],
  intro: {
    title: "SOMOS EL PRIMER SERVICIO INTEGRAL",
    lines: [
      "Para realizar mantenimientos preventivos y correctivos",
      "de motocicletas a domicilio",
    ],
    ctaLabel: "CONTÁCTANOS",
    ctaHref:
      "https://api.whatsapp.com/send?phone=573148514466&text=Hola,%20quiero%20conocer%20m%C3%A1s%20sobre%20los%20servicios%20de%20Mi%20Motto.",
  },
  showcase: {
    id: "about",
    watermark: {
      top: "EN MANOS",
      bottom: "EXPERTAS",
    },
    imageSrc: "/assets/images/expert-motorcycle-service.png",
    imageAlt: "Expert Motorcycle Service",
    points: [
      "Servicio autorizado de las marcas Benelli, Kawasaki, Kymco, Starker,TVS, Victory y AKT",
      "Operadores Centros de Experiencia Moto Test Auteco ​desde 2022",
      "Ganadores del concurso a mejor ​propuesta de negocio en el Parque ​del Emprendimiento de Medellín ​año 2019",
    ],
  },
  gallery: {
    id: "gallery",
    title: "Nuestro Trabajo",
    images: [
      "/assets/images/g1.jpg",
      "/assets/images/g2.jpg",
      "/assets/images/g3.jpg",
      "/assets/images/g4.jpg",
      "/assets/images/g5.jpg",
      "/assets/images/g6.jpg",
    ],
    imageAltPrefix: "Gallery Image",
  },
  reviews: {
    title: "Lo que dicen nuestros clientes",
    verifiedLabel: "Reseñas verificadas de Google",
    ctaLabel: "Ver más reseñas",
    ctaHref:
      "https://www.google.com/maps/place/Mimotto/@6.2388779,-75.6010303,17z/data=!4m17!1m10!3m9!1s0x8e44294b141825fb:0x7a34ff0ad4edc780!2sMimotto!8m2!3d6.2389734!4d-75.601034!10e5!14m1!1BCgIgAQ!16s%2Fg%2F11rclnppgb!3m5!1s0x8e44294b141825fb:0x7a34ff0ad4edc780!8m2!3d6.2389734!4d-75.601034!16s%2Fg%2F11rclnppgb!5m1!1e1!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDQyNi4wIKXMDSoASAFQAw%3D%3D",
    expandLabel: "Ver más",
    collapseLabel: "Ver menos",
    items: [
      {
        name: "William Wadley",
        date: "Hace 7 meses",
        text: "Great experience both buying and selling a moto with these guys. Lucas and his team were professional, kind, helpful and hard-working. Great communication. They gave me a good deal on the moto I bought from them, and they were able to sell the same moto a year later for more than I expected. Highly recommended!",
        stars: 5,
      },
      {
        name: "Dariem Garcés Urquiza",
        date: "Hace 2 años",
        text: "The right place for my motorcycle",
        stars: 5,
      },
      {
        name: "Carlos Garcia Palau",
        date: "Hace 9 meses",
        text: "Excelente servicio, me sentí como en casa. El negocio fue muy rápido y con mucha claridad. Señores Mimotto, Sr. Lucas, mil gracias por hacer fácil los sueños de la comunidad motera.",
        stars: 5,
      },
      {
        name: "Liliana Monsalve",
        date: "Hace 8 meses",
        text: "Excelente servicio del técnico Kevin, muy buena atención, amabilidad y asesoría, muy recomendado para el servicio.",
        stars: 5,
      },
      {
        name: "Grey Puentes",
        date: "Hace 8 meses",
        text: "Excelente servicio, excelente atención me voy satisfecha. Muchas gracias.",
        stars: 5,
      },
      {
        name: "MiGuEL B. L.",
        date: "Hace 9 meses",
        text: "Excelente servicio. Se ve que tienen personal con buena capacitación en mecánica y atención al cliente.",
        stars: 5,
      },
      {
        name: "Juan Esteban Arango",
        date: "Hace 1 año",
        text: "Un excelente servicio, Lucas demasiado amable y nos ayudó con un problema que traía la moto hace mucho tiempo y nadie había podido solucionar. Demasiado comprometido tanto él como su equipo de trabajo, 100% recomendado.",
        stars: 5,
      },
      {
        name: "Juan David Sanchez Velasquez",
        date: "Hace 9 meses",
        text: "Excelente lugar, excelente atención, me encantó ese lugar. La próxima moto la compraré ahí.",
        stars: 5,
      },
      {
        name: "OKU Design",
        date: "Hace 1 año",
        text: "Excelente asesoría y servicio al cliente. La información y detalle sobre la moto es muy útil para definir tu compra.",
        stars: 5,
      },
      {
        name: "Jo Ga",
        date: "Hace 9 meses",
        text: "Excelente asesoría. Muy ágil todo el trámite. Recomendados.",
        stars: 5,
      },
      {
        name: "Emerson Pinzon",
        date: "Hace 2 años",
        text: "Excelente servicio recomendado 100%.",
        stars: 5,
      },
      {
        name: "Ximena Calazans",
        date: "Hace 9 meses",
        text: "La asesoría es excelente, estoy muy feliz con Mimotto.",
        stars: 5,
      },
      {
        name: "Luz Estella Ruiz Ramirez",
        date: "Hace 4 años",
        text: "Este servicio es solicitado por mucho de mi personal que posee moto. Nuestra empresa es Teñidos y Acabados SAS y están totalmente satisfechos. Calidad, precio y rapidez a su llamado.",
        stars: 5,
      },
      {
        name: "Carlos Ramirez",
        date: "Hace 3 años",
        text: "Excelente servicio, llegaron a tiempo y el técnico muy profesional. Sobre todo me ahorraron el tiempo de meter mi moto a un taller, son muy rápidos y buenos.",
        stars: 5,
      },
      {
        name: "Rober Gaviria",
        date: "Hace 9 meses",
        text: "There is no comparison to the excellent service they provided me.",
        stars: 5,
      },
      {
        name: "Juan Manuel Correa",
        date: "Hace 9 meses",
        text: "Excelente ejercicio, excelente atención, muy buena asesoría y excelente explicación.",
        stars: 5,
      },
      {
        name: "Leidy Daniela Gaviria Piñeros",
        date: "Hace 1 año",
        text: "Me atendieron muy bien. Buen servicio.",
        stars: 5,
      },
      {
        name: "Michael Molina",
        date: "Hace 1 año",
        text: "Les pongo 5 por el servicio, puntualidad y la buena atención.",
        stars: 5,
      },
      {
        name: "Catalina Villa",
        date: "Hace 4 años",
        text: "Buen servicio, el personal es muy atento y dispuesto. El plus que tienen: servicio de mantenimiento a domicilio.",
        stars: 5,
      },
      {
        name: "Pablo Giraldo",
        date: "Hace 1 año",
        text: "Excelente servicio, garantías rápidas y a tiempo, acompañamiento continuo y personalizado.",
        stars: 5,
      },
      {
        name: "Danny Alejandro Barrera Zuluaga",
        date: "Hace 4 años",
        text: "Excelente servicio, confiables, no te tienes que desplazar hasta el taller. Van hasta tu casa y te arreglan la moto.",
        stars: 5,
      },
      {
        name: "Luz Mila Ruiz",
        date: "Hace 4 años",
        text: "Excelente servicio, se ahorra tiempo y dinero además la comodidad, todo impecable, felicitaciones.",
        stars: 5,
      },
      {
        name: "Sofia Araque",
        date: "Hace 1 año",
        text: "Excelente servicio, los mejores, sobre todo Lukas.",
        stars: 5,
      },
      {
        name: "John Uribe",
        date: "Hace 9 meses",
        text: "Excelente servicio 100 por ciento recomendado.",
        stars: 5,
      },
      {
        name: "Camila Galvis",
        date: "Hace 9 meses",
        text: "Excelente servicio en todos los aspectos.",
        stars: 5,
      },
      {
        name: "Frank Zapata",
        date: "Hace 2 años",
        text: "Excelente servicio y calidad de persona. 100% recomendado.",
        stars: 5,
      },
      {
        name: "Gabriel Felipe Pabón Rojas",
        date: "Hace 9 meses",
        text: "Excelente atención y servicio.",
        stars: 5,
      },
      {
        name: "Andres Castaño",
        date: "Hace 9 meses",
        text: "Excelente servicio al cliente.",
        stars: 5,
      },
      {
        name: "Daniel Mazo Cardona",
        date: "Hace 1 año",
        text: "Muy atentos a todas las recomendaciones.",
        stars: 5,
      },
      {
        name: "Rodadas Clandestinas",
        date: "Hace 9 meses",
        text: "Un equipo de trabajo excelente.",
        stars: 5,
      },
      {
        name: "Veronica Castro",
        date: "Hace 4 años",
        text: "I thought the service was very good!",
        stars: 5,
      },
      {
        name: "Juan Camilo Ovalle Galvis",
        date: "Hace 1 año",
        text: "Excelente servicio, muchas gracias.",
        stars: 5,
      },
      {
        name: "Fernando Leon Gutierrez",
        date: "Hace 4 años",
        text: "Muy profesionales en su trabajo. Lo recomiendo.",
        stars: 5,
      },
      {
        name: "Edier Ramirez",
        date: "Hace 3 años",
        text: "Muy buen servicio a domicilio.",
        stars: 5,
      },
      {
        name: "Paula Andrea Merino Ramírez",
        date: "Hace 1 año",
        text: "Excelente servicio.",
        stars: 5,
      },
      {
        name: "Juan Londoño",
        date: "Hace 9 meses",
        text: "El mejor concesionario.",
        stars: 5,
      },
      {
        name: "Myriam Ruiz",
        date: "Hace 4 años",
        text: "Atentos, rápidos, diligentes.",
        stars: 5,
      },
      {
        name: "SteveSegu91 YT_Videos",
        date: "Hace 1 año",
        text: "Excelente atención y servicio.",
        stars: 5,
      },
      {
        name: "Evelyn Layo Gomez",
        date: "Hace 2 años",
        text: "Súper servicio.",
        stars: 5,
      },
      {
        name: "Fabian Vargas",
        date: "Hace 4 años",
        text: "¡Excelente!",
        stars: 5,
      },
      {
        name: "Alejo Castaño",
        date: "Hace 4 años",
        text: "¡¡¡Excelente!!!",
        stars: 5,
      },
    ],
  },
  footer: {
    message: ["Estamos listos para todo lo que necesita tu moto"],
    contactLabel: "¡Contáctanos!!",
    contactHref:
      "https://api.whatsapp.com/send?phone=573148514466&text=Hola,%20quiero%20conocer%20m%C3%A1s%20sobre%20los%20servicios%20de%20Mi%20Motto.",
    schedulesTitle: "HORARIOS",
    schedules: [
      "Lunes a Viernes: 8:00 AM - 5:00 PM",
      "Sábados: 8:00 AM - 1:00 PM",
    ],
    phone: "(+57) 314 851 4466",
    clientEmail: "clientes@mimotto.app",
    infoEmail: "info@mimotto.app",
    copyright: {
      rights: "Todos los derechos",
      site: "mimotto.app",
    },
    socials: [
      {
        label: "WhatsApp",
        href: "https://api.whatsapp.com/send?phone=573148514466&text=Hola,%20quiero%20conocer%20m%C3%A1s%20sobre%20los%20servicios%20de%20Mi%20Motto.",
        type: "whatsapp",
      },
      {
        label: "Instagram",
        href: "https://www.instagram.com/mimotto_oficial/",
        type: "instagram",
      },
      {
        label: "Facebook",
        href: "https://web.facebook.com/mimottooficial",
        type: "facebook",
      },
    ],
  },
};

export const siteContent = {
  es: esContent,
  en: {
    ...esContent,
    header: {
      ...esContent.header,
      homeLabel: "START",
      modelsMenu: {
        ...modelsMenu,
        label: "MODELS",
        closeLabel: "Close models menu",
        columnLabels: {
          brands: "Brands",
          categories: "Categories",
          models: "Models",
          engine: "Engine",
          segment: "Segment",
        },
      },
    },
    hero: {
      ...esContent.hero,
      eyebrow: "save time and leave it",
      title: "IN EXPERT HANDS",
    },
    cta: {
      ...esContent.cta,
      label: "CONTACT US",
    },
    services: [
      {
        ...esContent.services[0],
        title: ["AT-HOME", "MAINTENANCE"],
        linkLabel: "LEARN MORE",
      },
      {
        ...esContent.services[1],
        title: ["CONSTANT", "FOLLOW-UP"],
        linkLabel: "LEARN MORE",
      },
      {
        ...esContent.services[2],
        title: ["EVERYTHING", "YOU NEED"],
        linkLabel: "LEARN MORE",
      },
    ],
    intro: {
      ...esContent.intro,
      title: "WE ARE THE FIRST INTEGRAL SERVICE",
      lines: [
        "For preventive and corrective maintenance",
        "of motorcycles at home",
      ],
      ctaLabel: "CONTACT US",
    },
    showcase: {
      ...esContent.showcase,
      watermark: {
        top: "EXPERT",
        bottom: "HANDS",
      },
      points: [
        "Authorized service for Benelli, Kawasaki, Kymco, Starker, TVS, Victory and AKT brands",
        "Auteco Moto Test Experience Center operators since 2022",
        "Winners of the best business proposal contest at Parque del Emprendimiento de Medellín in 2019",
      ],
    },
    gallery: {
      ...esContent.gallery,
      title: "Our Work",
    },
    reviews: {
      ...esContent.reviews,
      title: "What our clients say",
      verifiedLabel: "Verified Google reviews",
      ctaLabel: "See more reviews",
      expandLabel: "Read more",
      collapseLabel: "Show less",
      items: [
        {
          name: "William Wadley",
          date: "7 months ago",
          text: "Great experience both buying and selling a moto with these guys. Lucas and his team were professional, kind, helpful and hard-working. Great communication. They gave me a good deal on the moto I bought from them, and they were able to sell the same moto a year later for more than I expected. Highly recommended!",
          stars: 5,
        },
        {
          name: "Dariem Garcés Urquiza",
          date: "2 years ago",
          text: "The right place for my motorcycle",
          stars: 5,
        },
        {
          name: "Carlos Garcia Palau",
          date: "9 months ago",
          text: "Excellent service, I felt at home. The deal was very fast and very clear. Mimotto team, Mr. Lucas, thank you so much for making the dreams of the motorcycle community easier.",
          stars: 5,
        },
        {
          name: "Liliana Monsalve",
          date: "8 months ago",
          text: "Excellent service from technician Kevin, very good attention, kindness and advice. Highly recommended for the service.",
          stars: 5,
        },
        {
          name: "Grey Puentes",
          date: "8 months ago",
          text: "Excellent service, excellent attention. I left satisfied. Thank you very much.",
          stars: 5,
        },
        {
          name: "MiGuEL B. L.",
          date: "9 months ago",
          text: "Excellent service. You can tell they have staff with good training in mechanics and customer service.",
          stars: 5,
        },
        {
          name: "Juan Esteban Arango",
          date: "1 year ago",
          text: "Excellent service. Lucas was extremely kind and helped us with a problem the motorcycle had for a long time that nobody had been able to solve. He and his team are very committed, 100% recommended.",
          stars: 5,
        },
        {
          name: "Juan David Sanchez Velasquez",
          date: "9 months ago",
          text: "Excellent place, excellent attention, I loved it. I will buy my next motorcycle there.",
          stars: 5,
        },
        {
          name: "OKU Design",
          date: "1 year ago",
          text: "Excellent advice and customer service. The information and details about the motorcycle are very useful when deciding your purchase.",
          stars: 5,
        },
        {
          name: "Jo Ga",
          date: "9 months ago",
          text: "Excellent advice. The whole process was very agile. Recommended.",
          stars: 5,
        },
        {
          name: "Emerson Pinzon",
          date: "2 years ago",
          text: "Excellent service, 100% recommended.",
          stars: 5,
        },
        {
          name: "Ximena Calazans",
          date: "9 months ago",
          text: "The advice is excellent, I am very happy with Mimotto.",
          stars: 5,
        },
        {
          name: "Luz Estella Ruiz Ramirez",
          date: "4 years ago",
          text: "This service is requested by many of my staff who own motorcycles. Our company is Teñidos y Acabados SAS and they are completely satisfied. Quality, price and speed when called.",
          stars: 5,
        },
        {
          name: "Carlos Ramirez",
          date: "3 years ago",
          text: "Excellent service, they arrived on time and the technician was very professional. Above all, they saved me the time of taking my motorcycle to a shop. They are very fast and good.",
          stars: 5,
        },
        {
          name: "Rober Gaviria",
          date: "9 months ago",
          text: "There is no comparison to the excellent service they provided me.",
          stars: 5,
        },
        {
          name: "Juan Manuel Correa",
          date: "9 months ago",
          text: "Excellent work, excellent attention, very good advice and excellent explanation.",
          stars: 5,
        },
        {
          name: "Leidy Daniela Gaviria Piñeros",
          date: "1 year ago",
          text: "They treated me very well. Good service.",
          stars: 5,
        },
        {
          name: "Michael Molina",
          date: "1 year ago",
          text: "I give them 5 stars for the service, punctuality and good attention.",
          stars: 5,
        },
        {
          name: "Catalina Villa",
          date: "4 years ago",
          text: "Good service, the staff is very attentive and willing to help. Their plus: at-home maintenance service.",
          stars: 5,
        },
        {
          name: "Pablo Giraldo",
          date: "1 year ago",
          text: "Excellent service, fast and timely warranties, continuous and personalized support.",
          stars: 5,
        },
        {
          name: "Danny Alejandro Barrera Zuluaga",
          date: "4 years ago",
          text: "Excellent service, trustworthy, you do not have to go to the workshop. They come to your house and fix your motorcycle.",
          stars: 5,
        },
        {
          name: "Luz Mila Ruiz",
          date: "4 years ago",
          text: "Excellent service, saves time and money, plus the comfort. Everything was impeccable, congratulations.",
          stars: 5,
        },
        {
          name: "Sofia Araque",
          date: "1 year ago",
          text: "Excellent service, the best, especially Lukas.",
          stars: 5,
        },
        {
          name: "John Uribe",
          date: "9 months ago",
          text: "Excellent service, 100 percent recommended.",
          stars: 5,
        },
        {
          name: "Camila Galvis",
          date: "9 months ago",
          text: "Excellent service in every aspect.",
          stars: 5,
        },
        {
          name: "Frank Zapata",
          date: "2 years ago",
          text: "Excellent service and quality as people. 100% recommended.",
          stars: 5,
        },
        {
          name: "Gabriel Felipe Pabón Rojas",
          date: "9 months ago",
          text: "Excellent attention and service.",
          stars: 5,
        },
        {
          name: "Andres Castaño",
          date: "9 months ago",
          text: "Excellent customer service.",
          stars: 5,
        },
        {
          name: "Daniel Mazo Cardona",
          date: "1 year ago",
          text: "Very attentive to all recommendations.",
          stars: 5,
        },
        {
          name: "Rodadas Clandestinas",
          date: "9 months ago",
          text: "An excellent work team.",
          stars: 5,
        },
        {
          name: "Veronica Castro",
          date: "4 years ago",
          text: "I thought the service was very good!",
          stars: 5,
        },
        {
          name: "Juan Camilo Ovalle Galvis",
          date: "1 year ago",
          text: "Excellent service, thank you very much.",
          stars: 5,
        },
        {
          name: "Fernando Leon Gutierrez",
          date: "4 years ago",
          text: "Very professional in their work. I recommend them.",
          stars: 5,
        },
        {
          name: "Edier Ramirez",
          date: "3 years ago",
          text: "Very good at-home service.",
          stars: 5,
        },
        {
          name: "Paula Andrea Merino Ramírez",
          date: "1 year ago",
          text: "Excellent service.",
          stars: 5,
        },
        {
          name: "Juan Londoño",
          date: "9 months ago",
          text: "The best dealership.",
          stars: 5,
        },
        {
          name: "Myriam Ruiz",
          date: "4 years ago",
          text: "Attentive, fast, diligent.",
          stars: 5,
        },
        {
          name: "SteveSegu91 YT_Videos",
          date: "1 year ago",
          text: "Excellent attention and service.",
          stars: 5,
        },
        {
          name: "Evelyn Layo Gomez",
          date: "2 years ago",
          text: "Super service.",
          stars: 5,
        },
        {
          name: "Fabian Vargas",
          date: "4 years ago",
          text: "Excellent!",
          stars: 5,
        },
        {
          name: "Alejo Castaño",
          date: "4 years ago",
          text: "Excellent!",
          stars: 5,
        },
      ],
    },
    footer: {
      ...esContent.footer,
      message: ["We're ready for everything your motorcycle needs"],
      contactLabel: "Contact us",
      schedulesTitle: "SCHEDULES",
      schedules: [
        "Monday to Friday: 8:00 AM - 5:00 PM",
        "Saturdays: 8:00 AM - 1:00 PM",
      ],
      clientEmail: "customers@mimotto.app",
      copyright: {
        rights: "All rights reserved",
        site: "mimotto.app",
      },
    },
  },
};

export type SiteLanguage = keyof typeof siteContent;
