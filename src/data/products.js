import tomatoImg from '../assets/tomato.png';
import mangoImg from '../assets/mango.png';
import snakePlantImg from '../assets/snake-plant.png';
import rosesImg from '../assets/roses.png';
import mintImg from '../assets/mint.png';
import chilliImg from '../assets/chilli.png';
import petuniaImg from '../assets/petunia.png';
import bougainvilleaImg from '../assets/bougainvillea.png';
import jasmineImg from '../assets/jasmine.png';
import passionFruitImg from '../assets/passionfruit.png';
import strawberryImg from '../assets/strawberry.webp';
import papayaImg from '../assets/papaya.png';
import cabbageImg from '../assets/cabbage.png';
import pothosImg from '../assets/pothos.png';
import succulentImg from '../assets/succulent.png';
import calatheaImg from '../assets/Calathea.png';

export const products = [
  {
    id: 1,
    name: 'Mango Plant (Grafted)',
    price: 950,
    bulkPrice: 850,
    bulkMin: 10,
    category: 'fruit',
    type: 'outdoor',
    image: mangoImg,
    description: 'Grafted mango plant, ready for planting',
    care: 'Plant in full sun and water deeply once a week during dry weather. Enrich soil with compost for strong, healthy growth.',
    size: '2-3 ft',
    rating: 4.8,
    inStock: true
  },
  {
    id: 2,
    name: 'Strawberry Plant',
    price: 350,
    bulkPrice: 300,
    bulkMin: 15,
    category: 'fruit',
    type: 'outdoor',
    image: strawberryImg,
    description: 'Compact berry plant producing sweet, juicy strawberries in containers or beds.',
    care: 'Needs 5–6 hours of sun and consistently moist, well-drained soil. Mulch around plants to keep fruits clean and retain moisture.',
    size: '6–8 inches',
    rating: 4.7,
    inStock: true
  },
  {
    id: 3,
    name: 'Papaya Plant',
    price: 400,
    bulkPrice: 350,
    bulkMin: 25,
    category: 'fruit',
    type: 'outdoor',
    image: papayaImg,
    description: 'Fast-growing tropical fruit plant producing juicy, vitamin-rich papayas.',
    care: 'Loves full sun and consistent moderate watering. Remove lower yellow leaves and feed with organic fertilizer for better fruiting.',
    size: '12–16 inches',
    rating: 4.6,
    inStock: true
  },
  {
    id: 4,
    name: 'Passion Fruit Plant',
    price: 500,
    bulkPrice: 450,
    bulkMin: 15,
    category: 'fruit',
    type: 'outdoor',
    image: passionFruitImg,
    description: 'Fast-growing climber with lush foliage and tangy, aromatic fruits.',
    care: 'Thrives in full sun with regular moderate watering. Provide a trellis for climbing and prune after fruiting season.',
    size: '12–18 inches',
    rating: 4.2,
    inStock: true
  },
  {
    id: 5,
    name: 'Mint Plant',
    price: 100,
    bulkPrice: 80,
    bulkMin: 50,
    category: 'vegetable',
    type: 'outdoor',
    image: mintImg,
    description: 'Fresh mint for cooking and tea',
    care: 'Grows best in partial sun with moist soil. Trim regularly to encourage fresh, bushy growth.',
    size: '4-6 inches',
    rating: 4.3,
    inStock: true
  },
  {
    id: 6,
    name: 'Chilli Plant',
    price: 120,
    bulkPrice: 100,
    bulkMin: 50,
    category: 'vegetable',
    type: 'outdoor',
    image: chilliImg,
    description: 'Spicy chilli plants for your kitchen garden',
    care: 'Requires full sunlight and moderate watering. Harvest often to keep the plant producing more chillies.',
    size: '4-6 inches',
    rating: 4.4,
    inStock: true
  },
  {
    id: 7,
    name: 'Cabbage Plant',
    price: 130,
    bulkPrice: 110,
    bulkMin: 30,
    category: 'vegetable',
    type: 'outdoor',
    image: cabbageImg,
    description: 'Healthy cabbage seedlings ideal for kitchen gardens—produces fresh, crunchy heads.',
    care: 'Prefers full sun and consistently moist, fertile soil. Space plants well for large, healthy heads.',
    size: '6–8 inches',
    rating: 4.5,
    inStock: true
  },
  {
    id: 8,
    name: 'Tomato Plant',
    price: 150,
    bulkPrice: 120,
    bulkMin: 50,
    category: 'vegetable',
    type: 'outdoor',
    image: tomatoImg,
    description: 'Premium tomato seedlings, perfect for home gardens with high-yield fruits.',
    care: 'Needs 6–8 hours of sunlight and regular deep watering. Support with stakes or cages as the plant grows taller.',
    size: '6-8 inches',
    rating: 4.5,
    inStock: true
  },
  {
    id: 9,
    name: 'Snake Plant (Sansevieria)',
    price: 400,
    bulkPrice: 350,
    bulkMin: 20,
    category: 'indoor',
    type: 'indoor',
    image: snakePlantImg,
    description: 'Hardy, air-purifying plant with tall upright leaves. Perfect for low-light indoor spaces.',
    care: 'Water sparingly every 10–14 days, letting the soil dry between waterings. Thrives in low to bright indirect light and is very low maintenance.',
    size: '1-2 ft',
    rating: 4.7,
    inStock: true
  },
  {
    id: 10,
    name: 'Jasmine Plant',
    price: 300,
    bulkPrice: 250,
    bulkMin: 25,
    category: 'outdoor',
    type: 'outdoor',
    image: jasmineImg,
    description: 'Beautiful flowering plant with fragrant white blooms',
    care: 'Prefers full to partial sun with moderate watering. Prune after flowering to keep it neat and bushy.',
    size: '1-1.5 ft',
    rating: 4.6,
    inStock: true
  },
  {
    id: 11,
    name: 'Pothos (Money Plant)',
    price: 200,
    bulkPrice: 180,
    bulkMin: 30,
    category: 'indoor',
    type: 'indoor',
    image: pothosImg,
    description: 'Fast-growing trailing vine with heart-shaped leaves; believed to bring prosperity and good luck.',
    care: 'Keep soil slightly moist and water when the top feels dry. Grows well in bright indirect light but can tolerate low light.',
    size: '8-12 inches',
    rating: 4.8,
    inStock: true
  },
  {
    id: 12,
    name: 'Succulent (Assorted)',
    price: 250,
    bulkPrice: 200,
    bulkMin: 20,
    category: 'indoor',
    type: 'indoor',
    image: succulentImg,
    description: 'Small, decorative desert plants that store water in their leaves—low-maintenance and stylish.',
    care: 'Water sparingly once every 2 weeks. Needs bright light and well-draining soil. Perfect for beginners.',
    size: '3-5 inches',
    rating: 4.5,
    inStock: true
  },
  {
    id: 13,
    name: 'Calathea Plant',
    price: 550,
    bulkPrice: 500,
    bulkMin: 15,
    category: 'indoor',
    type: 'indoor',
    image: calatheaImg,
    description: 'Elegant foliage plant known for its unique patterned leaves and vibrant colors.',
    care: 'Prefers bright indirect light and consistently moist soil. High humidity helps maintain leaf patterns.',
    size: '8-10 inches',
    rating: 4.1,
    inStock: true
  },
  {
    id: 14,
    name: 'Rose Plant',
    price: 250,
    bulkPrice: 200,
    bulkMin: 20,
    category: 'outdoor',
    type: 'outdoor',
    image: rosesImg,
    description: 'Beautiful red roses for your garden',
    care: 'Needs at least 5–6 hours of sunlight and regular deep watering. Prune faded blooms to encourage new growth.',
    size: '1-2 ft',
    rating: 4.6,
    inStock: true
  },
  {
    id: 15,
    name: 'Bougainvillea Plant',
    price: 450,
    bulkPrice: 400,
    bulkMin: 15,
    category: 'outdoor',
    type: 'outdoor',
    image: bougainvilleaImg,
    description: 'Colorful flowering plant with vibrant bracts that brighten any garden or balcony.',
    care: 'Requires full sun and deep watering once or twice weekly. Let soil dry between waterings to encourage vibrant flowers.',
    size: '1-1.5 ft',
    rating: 4.7,
    inStock: true
  },
  {
    id: 16,
    name: 'Petunia Plant',
    price: 120,
    bulkPrice: 100,
    bulkMin: 20,
    category: 'outdoor',
    type: 'outdoor',
    image: petuniaImg,
    description: 'Colorful flowering plant with trumpet-shaped blooms perfect for borders and containers.',
    care: 'Loves full sun and blooms best with 6+ hours of sunlight. Water every 2–3 days and remove faded flowers for continuous blooms.',
    size: '6-8 inches',
    rating: 4.8,
    inStock: true
  }
];



