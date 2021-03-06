const categories = [
  {
    id: "doctors",
    name: "الأطباء",
    tags: ["المهن", "inspirations"],
    count: 147,
    image: require("../assets/icons/plants.png")
  },
  {
    id: "engineers",
    name: "المهندسين",
    tags: ["المهن", "حجز قديم"],
    count: 16,
    image: require("../assets/icons/seeds.png")
  },
  {
    id: "teachers",
    name: "المعلمون",
    tags: ["المهن", "الحجوزات"],
    count: 68,
    image: require("../assets/icons/flowers.png")
  },
  {
    id: "lawyers",
    name: "المحامون",
    tags: ["المهن", "الحجوزات"],
    count: 17,
    image: require("../assets/icons/sprayers.png")
  },
  {
    id: "barber",
    name: "مصففي الشعر",
    tags: ["المهن", "الحجوزات"],
    count: 36,
    image: require("../assets/icons/pots.png")
  },
  {
    id: "mechanic",
    name: "الميكانيكي",
    tags: ["المهن", "الحجوزات"],
    count: 71,
    image: require("../assets/icons/fertilizers.png")
  },
  {
    id: "babysitter",
    name: "جليسه اطفال",
    tags: ["المهن", "الحجوزات"],
    count: 15,
    image: require("../assets/icons/fertilizers.png")
  },
  {
    id: "Plumbers",
    name: "السباكون",
    tags: ["المهن", "الحجوزات"],
    count: 47,
    image: require("../assets/icons/fertilizers.png")
  },
  {
    id: "carpenters",
    name: "النجارين",
    tags: ["المهن", "الحجوزات"],
    count: 34,
    image: require("../assets/icons/fertilizers.png")
  } 
];

const products = [
  {
    id: 1,
    name: "16 Best Plants That Thrive In Your Bedroom",
    description:
      "Bedrooms deserve to be decorated with lush greenery just like every other room in the house – but it can be tricky to find a plant that thrives here. Low light, high humidity and warm temperatures mean only certain houseplants will flourish.",
    tags: ["Interior", "27 m²", "Ideas"],
    images: [
      require("../assets/images/plants_1.png"),
      require("../assets/images/plants_2.png"),
      require("../assets/images/plants_3.png"),
      // showing only 3 images, show +6 for the rest
      require("../assets/images/plants_1.png"),
      require("../assets/images/plants_2.png"),
      require("../assets/images/plants_3.png"),
      require("../assets/images/plants_1.png"),
      require("../assets/images/plants_2.png"),
      require("../assets/images/plants_3.png")
    ]
  }
];

const explore = [
  // images
  require("../assets/images/explore_1.png"),
  require("../assets/images/explore_2.png"),
  require("../assets/images/explore_3.png"),
  require("../assets/images/explore_4.png"),
  require("../assets/images/explore_5.png"),
  require("../assets/images/explore_6.png")
];

const profile = {
  username: "m.abouelsadat",
  location: "Poland",
  email: "m.abouelsadat@gmail.com",
  avatar: require("../assets/images/avatar.png"),
  budget: 1000,
  monthly_cap: 5000,
  notifications: true,
  newsletter: false
};

export { categories, explore, products, profile };
