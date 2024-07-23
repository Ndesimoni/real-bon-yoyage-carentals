export const NavBar1Data = [
  {
    title: "Help",
    items: ["Get Help", "F-A-Q", "Contact"],
  },

  { title: "USD ($)", items: ["USD", "EUR", "GBP"] },

  { title: "lang (English)", items: ["English", "Spanish", "French"] },
];

//todo // this is data for the nav_bar_2 and its dropdown

export const nav_2_data = [
  {
    title: "Vehicles",
    img: "./navbar-2-dropdown-pictures/bonvoyage-car-rentals-marryLand-vehicles.webp",
    links: [
      {
        heading: " Standard cars",
        linkItems: [
          "our-vehicle-collection",
          "all-cars",
          "suvs",
          "vans",
          "trucks",
          "luxury-cars",
        ],
      },
      {
        heading: "Luxury cars",
        linkItems: ["buy-car", "rent-car", "our-vehicle-collection"],
      },
      {
        heading: "Available suvs",
        linkItems: ["all-cars", "suvs"],
      },
      {
        heading: "Trucks",
        linkItems: ["buy-car", "trucks", "luxury-cars"],
      },
      {
        heading: "Vans",
        linkItems: ["vans", "trucks", "luxury-cars"],
      },
    ],
  },

  {
    title: "Reservation",
    img: "./navbar-2-dropdown-pictures/bonvoyage-car-rentals-reservation-image.avif",
    links: [
      {
        heading: " car rental",
        linkItems: [
          "start-a-car-reservation",
          "third-party-reservations",
          "How-we-work",
          "services",
        ],
      },
      {
        heading: " businesses",
        linkItems: ["buy-a-car", "sell-a-car"],
      },
      {
        heading: " good deals",
        linkItems: ["cars-under-$500", "insured-cars"],
      },
      {
        heading: " promo",
        linkItems: ["special-offers", "for-events"],
      },
    ],
  },

  {
    title: "Locations",
    links: [
      {
        heading: "Maryland",
        linkItems: ["lanham-maryland"],
      },
      {
        heading: "minnesota",
        linkItems: ["bloomington-minnesota"],
      },
      {
        heading: "tennessee",
        linkItems: ["clarksville-tennessee"],
      },
      {
        heading: "Virginia",
        linkItems: ["woodbridge-virginia"],
      },
    ],

    img: "./navbar-2-dropdown-pictures/bonvoyage-car-rentals-marryLand-location.webp",
  },
  {
    title: "Learn",
    links: [
      {
        heading: "blogs",
        linkItems: [
          "accident-in-rental-car",
          "avoid-pay-deposit",
          "knowledge-on-car-crash",
          "what-to-know-on-car-crash-without-insurance",
          "crash-without-insurance",
          "insurance-importance",
          "out-of-state-overview",
          "how-to-pay-tolls",
          "effects-of-taking-rental-car-out-of-state",
          "results-on-stolen-rental-car",
          "who-pays-for-rental-car-repairs",
          "requirements-for-renting-car",
          "when-to-report-stolen-rental-vehicle",
          "best-car-companies-in-lanham",
          "best-short-term-car-rental-in-lanham",
        ],
      },
      {
        heading: "safety",
        linkItems: [
          "accident-in-rental-car",
          "avoid-pay-deposit",
          "knowledge-on-car-crash",
        ],
      },
    ],
    img: "./navbar-2-dropdown-pictures/bonvoyage-car-rentals-learn-image.jpg",
  },
  {
    title: "business",
    links: [
      {
        heading: "buy sell cars",
        linkItems: ["buy-a-car", "sell a car", "our-vehicle-collection"],
      },
      {
        heading: "Rent to own",
        linkItems: ["rent-to-own"],
      },
      {
        heading: "ride share",
        linkItems: ["share-a-ride"],
      },
      {
        heading: "ride share",
        linkItems: ["cars-under-$500"],
      },
    ],
    img: "./navbar-2-dropdown-pictures/bonvoyage-car-rental-business-image.avif",
  },
];

export const navBar2Data = [
  // { route: "/", menuName: "Home", image: "./134.png" },

  {
    menuName: "Reservation",
    image:
      "./navbar-2-dropdown-pictures/bonvoyage-car-rentals-reservation-image.avif",

    header: [
      {
        title: "CAR RENTAL",
        items: [
          "Start-a-car-reservation",
          "third-party-reservation",
          "How-we-operate",
          "Services",
        ],
      },

      {
        title: "BUSINESSES",
        items: ["Buy-a-car", "Sell-a-car"],
      },

      {
        title: "GOOD DEALS",
        items: ["Cars-under-$5000", "Insured-cars"],
      },

      {
        title: "PROMO",
        items: ["Special-offers", "For-events"],
      },
    ],
  },

  {
    menuName: "Locations",
    image:
      "./navbar-2-dropdown-pictures/bonvoyage-car-rentals-marryLand-location.webp",
    header: [
      {
        title: "MARRY LAND ",

        items: ["Lanham-MD", "Laurel-MD"],
      },

      {
        title: "MINNESOTA",
        items: ["Bloomington-MT"],
      },

      {
        title: "TENNESSEE, ",
        items: ["Clarksville-TN"],
      },

      {
        title: "VIRGINIA, ",
        items: ["Woodbridge-VA"],
      },

      {
        title: "Coming Soon",
        items: ["Texas, TX", "ATlanta, AT"],
      },
    ],
  },

  {
    menuName: "Vehicles",
    image:
      "./navbar-2-dropdown-pictures/bonvoyage-car-rentals-marryLand-vehicles.webp",

    header: [
      {
        title: "Standard Cars",
        items: ["Compact-Cars", "Standard-Cars", "Intermediate-Cars"],
      },

      {
        title: "Luxury Cars",
        items: ["Luxury-Cars", "Premium-Cars", "Sports-cars"],
      },

      {
        title: "Available  SUVs",
        items: ["SUVs"],
      },

      {
        title: "Trucks",
        items: ["Pickup-Trucks"],
      },

      {
        title: "Vans",
        items: ["Available-Vans", "Full Size-Cars"],
      },
    ],
  },

  {
    menuName: "Business",
    image:
      "./navbar-2-dropdown-pictures/bonvoyage-car-rental-business-image.avif",

    header: [
      {
        title: "Buy Sell Cars",
        items: ["View-All-Cars", "Buy-a-car", "Sell-a-car"],
      },

      {
        title: "Rent to Own ",
        items: ["rent-to-own"],
      },

      {
        title: "Ride Share",
        items: ["share-a-ride"],
      },

      {
        title: "Offers",
        items: ["Cars-under-$5000"],
      },
    ],
  },

  {
    menuName: "Learn",
    image: "./navbar-2-dropdown-pictures/bonvoyage-car-rentals-learn-image.jpg",

    header: [
      {
        title: "About Us",
        items: ["Learn-about-company", "How-we-operate", "Our-offerings"],
      },

      {
        title: "Safety",
        items: ["Our-safety-policy"],
      },

      {
        title: "Holidays",
        items: ["holiday-offers"],
      },

      {
        title: "Customer Support",
        items: ["Contact-Us"],
      },

      {
        title: "Blog",
        items: [
          "Accident",
          "Avoid-Paying-Deposits",
          // "Best-Car-companies",
          "Car-crash-without-insurance",
          "Driver-fault",
          "Insurance-Importance",
          "No-Insurance-crash",
          // "Overview",
          "Pay-tolls",
          "Rental-car-state",
          "Rental-car-stolen",
          "See-More",
          // "Repairs",
          // "Requirements",
          // "Time-to-report-stolen",
          // "knowledge-on-car-crash",
          // "best-short-term-car-rental-in-lanham",
        ],
      },
    ],
  },
];

//todo // this is data for the all cars
export const cars = [
  {
    type: "car",
    image: "car-1.jpg",
    name: "Hyundai Genesis Black",
    price: 120,
  },

  {
    type: "car",
    image: "car-2.jpg",
    description: "luxury",
    name: "Chevrolet Camaro Convertible Yellow",
    price: 150,
  },
  {
    type: "car",
    image: "car-3.jpg",
    description: "SUVs",
    name: "Hyundai Genesis White",
    price: 120,
  },
  {
    type: "car",
    image: "car-4.jpg",
    name: "Suzuki Kizashi Silver",
    price: 70,
  },
  {
    type: "car",
    image: "car-5.jpg",
    description: "luxury",
    name: "Subaru Legacy Premium",
    price: 70,
  },
  {
    type: "car",
    image: "car-13.jpg",
    name: "Toyota Corolla White",
    price: 80,
  },
  {
    type: "suv",
    image: "suv-2.jpg",
    name: "Dodge Grand Caravan Red",
    description: "Economy",
    price: 100,
  },
  {
    type: "suv",
    image: "suv-3.jpg",
    description: "luxury",
    name: "Chevrolet Captiva Sport",
    price: 80,
  },
  {
    type: "car",
    image: "car-14.jpg",
    description: "luxury",
    name: "Chevrolet Sonic Ltz",
    price: 70,
  },
  {
    type: "suv",
    image: "suv-5.jpg",
    description: "SUVs",
    name: "Dodge Journey Black",
    price: 80,
  },
  {
    type: "suv",
    image: "suv-6.jpg",
    name: "Dodge Journey Red",
    price: 80,
  },
  {
    type: "car",
    image: "car-15.jpg",
    name: "Toyota Corolla Black",
    price: 120,
  },
  {
    type: "suv",
    image: "suv-8.jpg",
    description: "luxury SUVs",
    name: "Mercedes MI350 Red",
    price: 180,
  },
  {
    type: "car",
    image: "car-6.jpg",
    name: "Hyundai Elantra Grey",
    price: 80,
  },
  {
    type: "car",
    image: "car-7.jpg",
    description: "luxury",
    name: "Mustang Premium",
    price: 100,
  },
  {
    type: "car",
    image: "car-8.jpg",
    name: "SXT Dodge Charger",
    price: 120,
  },
  {
    type: "suv",
    image: "suv-9.jpg",
    name: "Ford Escape Sport",
    price: 80,
  },
  {
    type: "car",
    image: "car-9.jpg",
    name: "SXT Dodge Challenger",
    price: 150,
  },
  {
    type: "suv",
    image: "suv-10.jpg",
    description: "luxury SUVs",
    name: "Mercedes Gle black",
    price: 200,
  },
  {
    type: "suv",
    image: "suv-11.jpg",
    description: "luxury SUVs",
    name: "Mercedes Gle White",
    price: 160,
  },
  {
    type: "car",
    image: "car-10.jpg",
    name: "Toyota Camry Black",
    price: 89,
  },
  {
    type: "car",
    image: "car-11.jpg",
    name: "Buick Lacrosse Black",
    price: 140,
  },
  {
    type: "car",
    image: "car-12.jpg",
    description: "luxury SUVs",
    name: "Chrysler 300 Silver",
    price: 140,
  },
  {
    type: "suv",
    image: "suv-12.jpg",
    name: "Ford Focus Black",
    price: 70,
  },
  {
    type: "truck",
    image: "truck-1.jpg",
    name: "Dodge Dakota Red",
    price: 100,
  },
  {
    type: "suv",
    image: "suv-13.jpg",
    name: "Nissan Rogue White",
    price: 80,
  },
  {
    type: "car",
    image: "car-16.jpg",
    name: "Toyota Venza",
    price: 75,
  },
];

//todo // this is for the car fleet svg section which is only 5 pictures

export const CarFleetSVGs = [
  {
    title: "Pickup-Trucks",
    image: "./car-fleet-svgs-pictures/bonvoyage-trucks-cars.avif",
  },

  {
    title: "Standard-Cars",
    image: "./car-fleet-svgs-pictures/bonvoyage-compact-nissan-cars.avif",
  },

  {
    title: "SUVs",
    image: "./car-fleet-svgs-pictures/bovoyage-suvs.avif",
  },

  {
    title: "Luxury-Cars",
    image: "./car-fleet-svgs-pictures/bonvoyage-luxury-cars.avif",
  },

  {
    title: "Full-Size-Cars",
    image: "./car-fleet-svgs-pictures/bonvoyage-van-cars.avif",
  },
];

//todo // this is for the footer items

export const FooterItems = [
  {
    title: "Blogs",
    item: ["Rent Car", "F.A.Q", "WH: 800am - 9:30pm"],
  },

  {
    title: "Blogs",
    item: ["Rent Car", "F.A.Q", "WH: 800am - 9:30pm"],
  },

  {
    title: "Blogs",
    item: ["Rent Car", "F.A.Q", "WH: 800am - 9:30pm"],
  },

  {
    title: "Blogs",
    item: ["Rent Car", "F.A.Q", "WH: 800am - 9:30pm"],
  },

  {
    title: "Blogs",
    item: ["Rent Car", "F.A.Q", "WH: 800am - 9:30pm"],
  },
];

//todo  car make list
export const carMakeList = [
  { category: " " },
  { category: "SUVs" },
  { category: "Luxury-Cars" },
  { category: "Economy-Cars" },
  { category: "Standard-Cars" },
  { category: "Full Size-Cars" },
  { category: "Compact-Cars" },
  { category: "Intermediate-Cars" },
  { category: "Premium-Cars" },
];

//todo ///////////////////////////////////////////////////////
export const carTypeCategory = [
  //todo this is for the toyota
  {
    title: "SUVs",
    description:
      "Cars offer great comfort as you tour around the country. Automatic vehicles which can take up to 5 people and carry more baggage with ease. Choose your favorite car brand and model every time you need to rent a car.",
    carImage: "/car.jpg",
    type: "Luxury suv",
  },

  {
    title: "Luxury-Cars",
    description:
      "Cars offer great comfort as you tour around the country. Automatic vehicles which can take up to 5 people and carry more baggage with ease. Choose your favorite car brand and model every time you need to rent a car.",
    carImage: "/luxury-car.jpg",
    type: "Luxury sedans",
  },

  {
    title: "Economy-Cars",
    description:
      "Cars offer great comfort as you tour around the country. Automatic vehicles which can take up to 5 people and carry more baggage with ease. Choose your favorite car brand and model every time you need to rent a car.",
    carImage: "/suv.jpg",
    type: "Luxury sports cars",
  },

  //todo this is for the BMW
  {
    title: "Standard-Cars",
    description:
      "Cars offer great comfort as you tour around the country. Automatic vehicles which can take up to 5 people and carry more baggage with ease. Choose your favorite car brand and model every time you need to rent a car.",
    carImage: "/van.jpg",
    type: "Bmw suv",
  },

  {
    title: "Full Size-Cars",
    description:
      "Cars offer great comfort as you tour around the country. Automatic vehicles which can take up to 5 people and carry more baggage with ease. Choose your favorite car brand and model every time you need to rent a car.",
    carImage: "/luxury-car.jpg",
    type: "Bmw sedans",
  },

  {
    title: "Compact-Cars",
    description:
      "Cars offer great comfort as you tour around the country. Automatic vehicles which can take up to 5 people and carry more baggage with ease. Choose your favorite car brand and model every time you need to rent a car.",
    carImage: "/car.jpg",
    type: "bmw sport cars",
  },

  //todo this is for the chevrolet
  {
    title: "Intermediate-Cars",
    description:
      "Cars offer great comfort as you tour around the country. Automatic vehicles which can take up to 5 people and carry more baggage with ease. Choose your favorite car brand and model every time you need to rent a car.",
    carImage: "/van.jpg",
    type: "chevrolet suv",
  },

  {
    title: "Premium-Cars",
    description:
      "Cars offer great comfort as you tour around the country. Automatic vehicles which can take up to 5 people and carry more baggage with ease. Choose your favorite car brand and model every time you need to rent a car.",
    carImage: "/luxury-car.jpg",
    type: "chevrolet sedans",
  },
];

//todo ///////////////////////////////////////////////////////
export const vehicleCategory = [
  {
    type: "car",
    image: "car-1.jpg",
    name: "Hyundai Genesis Black",
    price: 120,
  },

  {
    type: "car",
    image: "car-2.jpg",
    description: "Luxury-Cars",
    name: "Chevrolet Camaro Convertible Yellow",
    price: 150,
  },
  {
    type: "car",
    image: "car-3.jpg",
    description: "SUVs",
    name: "Hyundai Genesis White",
    price: 120,
  },
  {
    type: "car",
    image: "car-4.jpg",
    name: "Suzuki Kizashi Silver",
    price: 70,
  },
  {
    type: "car",
    image: "car-5.jpg",
    description: "luxury",
    name: "Subaru Legacy Premium",
    price: 70,
  },
  {
    type: "car",
    image: "car-13.jpg",
    name: "Toyota Corolla White",
    price: 80,
  },
  {
    type: "suv",
    image: "suv-2.jpg",
    name: "Dodge Grand Caravan Red",
    description: "Economy",
    price: 100,
  },
  {
    type: "suv",
    image: "suv-3.jpg",
    description: "SUVs",
    name: "Chevrolet Captiva Sport",
    price: 80,
  },
  {
    type: "car",
    image: "car-14.jpg",
    description: "SUVs",
    name: "Chevrolet Sonic Ltz",
    price: 70,
  },
  {
    type: "suv",
    image: "suv-5.jpg",
    description: "SUVs",
    name: "Dodge Journey Black",
    price: 80,
  },
  {
    type: "suv",
    image: "suv-6.jpg",
    description: "Luxury-Cars",
    name: "Dodge Journey Red",
    price: 80,
  },
  {
    type: "car",
    image: "car-15.jpg",
    description: "Luxury-Cars",
    name: "Toyota Corolla Black",
    price: 120,
  },
  {
    type: "suv",
    image: "suv-8.jpg",
    description: "Luxury-Cars",
    name: "Mercedes MI350 Red",
    price: 180,
  },
  {
    type: "car",
    image: "car-6.jpg",
    name: "Hyundai Elantra Grey",
    price: 80,
  },
  {
    type: "car",
    image: "car-7.jpg",

    name: "Mustang Premium",
    price: 100,
  },
  {
    type: "car",
    image: "car-8.jpg",
    name: "SXT Dodge Charger",
    price: 120,
  },
  {
    type: "suv",
    image: "suv-9.jpg",
    name: "Ford Escape Sport",
    price: 80,
  },
  {
    type: "car",
    image: "car-9.jpg",
    name: "SXT Dodge Challenger",
    price: 150,
  },
  {
    type: "suv",
    image: "suv-10.jpg",
    description: "luxury SUVs",
    name: "Mercedes Gle black",
    price: 200,
  },
  {
    type: "suv",
    image: "suv-11.jpg",
    description: "luxury SUVs",
    name: "Mercedes Gle White",
    price: 160,
  },
  {
    type: "car",
    image: "car-10.jpg",
    name: "Toyota Camry Black",
    price: 89,
  },
  {
    type: "car",
    image: "car-11.jpg",
    name: "Buick Lacrosse Black",
    price: 140,
  },
  {
    type: "car",
    image: "car-12.jpg",
    description: "luxury SUVs",
    name: "Chrysler 300 Silver",
    price: 140,
  },
  {
    type: "suv",
    image: "suv-12.jpg",
    name: "Ford Focus Black",
    price: 70,
  },
  {
    type: "truck",
    image: "truck-1.jpg",
    name: "Dodge Dakota Red",
    price: 100,
  },
  {
    type: "suv",
    image: "suv-13.jpg",
    name: "Nissan Rogue White",
    price: 80,
  },
  {
    type: "car",
    image: "car-16.jpg",
    name: "Toyota Venza",
    price: 75,
  },
];
