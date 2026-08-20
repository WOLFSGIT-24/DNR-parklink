import { AmenityItem, FloorPlanUnit, CommuteDestination } from "./types";

export const amenitiesData: AmenityItem[] = [
  {
    id: "arrival",
    title: "Ground Level",
    level: "Ground",
    levelNumber: "01",
    description: "Interactive spaces where children play, neighbours connect and families spend quality time together.",
    imageUrl: "/ground2.jpg",
    images: ["/am1.png", "/am2.png", "/am3.png", "/am4.png"],
    bullets: [
      "Double-height Lobby with custom Italian marble finishing",
      "Reflective Water Cascades & signature arrival sculpture",
      "24/7 Dedicated Concierge & Valet services",
      "Pristine landscaped walkways and drop-off canopy"
    ]
  },
  {
    id: "wellness",
    title: "Podium Level",
    level: "Podium",
    levelNumber: "02",
    description: "Clubhouse, yoga deck, wellness spaces and community zones designed for relaxation, fitness and celebrations.",
    imageUrl: "/podium2.jpg",
    images: ["/podium2.jpg", "/podium3.jpg", "/podium4.jpg"],
    bullets: [
      "High-performance Gymnasium with premium equipment",
      "Zen Yoga & Meditation Studio with acoustic padding",
      "Indoor Temperature-controlled Pool & thermal jacuzzi",
      "Aromatherapy steam rooms and massage chambers"
    ]
  },
  {
    id: "rooftop",
    title: "Rooftop Level",
    level: "Rooftop",
    levelNumber: "03",
    description: "Recreation, leisure spaces and panoramic skyline views that elevate everyday living.",
    imageUrl: "/roof5.jpg",
    images: ["/roof5.jpg", "/roof2.jpg", "/roof3.jpg", "/roof4.jpg"],
    bullets: [
      "Infinity Edge lap pool overlooking the city skyline",
      "Sunset Lounge & open-air Barbecue deck",
      "Stargazing Observatory with professional telescopes",
      "Bespoke private dining pods and sky deck"
    ]
  }
];

export const locationsData: CommuteDestination[] = [
  {
    id: "hospital",
    name: "Motherhood Hospital",
    distance: "9 KM",
    icon: "local_hospital",
    times: {
      driving: 15,
      transit: 25,
      walking: 90
    }
  },
  {
    id: "leela",
    name: "The Leela by Bhartiya City",
    distance: "2.5 KM",
    icon: "hotel",
    times: {
      driving: 5,
      transit: 10,
      walking: 30
    }
  },
  {
    id: "manyata",
    name: "Manyata Tech Park",
    distance: "9.5 KM",
    icon: "business_center",
    times: {
      driving: 20,
      transit: 35,
      walking: 100
    }
  },
  {
    id: "reva",
    name: "Reva College",
    distance: "5 KM",
    icon: "school",
    times: {
      driving: 10,
      transit: 20,
      walking: 60
    }
  },
  {
    id: "bhartiya-mall",
    name: "Bhartiya City Mall",
    distance: "2.5 KM",
    icon: "shopping_bag",
    times: {
      driving: 5,
      transit: 10,
      walking: 30
    }
  }
];

export const floorPlansData: FloorPlanUnit[] = [
  {
    id: "ground",
    title: "Master Plan Project",
    type: "Ground",
    area: "Amenities",
    imageUrl: "/Ground-floor-plan.png",
    bedrooms: 0,
    bathrooms: 0,
    balconies: 0,
    highlights: [
      "Located on the Main Road",
      "Spacious Residencies",
      "Well Ventilated Flats",
      "Singapore Based Landscaping",
      "40,000 sqft fully loaded Clubhouse + Amenities",
      "70% Open Spaces"
    ]
  },
  {
    id: "podium",
    title: "Podium Level Plan",
    type: "Podium",
    area: "Amenities",
    imageUrl: "/podium-floor-plan.png",
    bedrooms: 0,
    bathrooms: 0,
    balconies: 0,
    highlights: [
      "1. Lift Lobby/Reception",
      "2. Association Room",
      "3. Pre-function Space",
      "4. Double Height Party Hall",
      "5. Spillover Party Deck/Party Lawn",
      "6. Indoor Games",
      "7. Multi-purpose Deck",
      "8. Gym",
      "9. Seating Lawn and Covered Pavilion",
      "10. Al Fresco Dining/Barbecue",
      "11. Guest Rooms",
      "12. WFH/Tuition Centre",
      "13. Restrooms",
      "14. Lawn With Stepped Seating",
      "15. Gravel Path",
      "16. Wellness Lawn",
      "17. Yoga Deck With Pergola Above",
      "18. Connection Bridge to Elevated Walkway",
      "19. Elevated Walkway",
      "20. Steps to Ground floor"
    ]
  },
  {
    id: "rooftop",
    title: "Rooftop Level Plan",
    type: "Rooftop",
    area: "Amenities",
    imageUrl: "/rooftop-plan.png",
    bedrooms: 0,
    bathrooms: 0,
    balconies: 0,
    highlights: [
      "1. Covered Walkway",
      "2. Futsal Court",
      "3. Double Heighted Badminton Court",
      "4. Kids Play Area",
      "5. Seating",
      "6. Play Wall",
      "7. Changing Room/Spa",
      "8. Main Pool",
      "9. Kids Pool",
      "10. Pool Deck",
      "11. Pool Loungers",
      "12. Covered Seating",
      "13. Sculpture"
    ]
  }
];

export const projectSnapshot = {
  landArea: "8.35 Acres",
  totalUnits: "784 units",
  configuration: "2.5, 3 BHK & 2BHK+Study",
  possession: "Launch Soon",
  rera: "PRM/KA/RERA/1251/446/PR/040823/006113",
  developer: "DNR Group",
  locationName: "Hennur – Baglur Main Road (New Airport Road)"
};
