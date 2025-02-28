import { Product } from '../types';

// Helper function to generate random prices
const randomPrice = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Helper function to generate random discounts (some products will have no discount)
const randomDiscount = () => {
  const shouldHaveDiscount = Math.random() > 0.7;
  if (shouldHaveDiscount) {
    return Math.floor(Math.random() * 3) * 5 + 10; // 10%, 15%, or 20%
  }
  return 0;
};

// Categories
const categories = [
  'Buquês',
  'Arranjos',
  'Cestas',
  'Plantas',
  'Rosas',
  'Orquídeas',
  'Girassóis',
  'Lírios',
  'Decoração'
];

// Flower types for product names
const flowerTypes = [
  'Rosas', 'Girassóis', 'Lírios', 'Margaridas', 'Tulipas', 
  'Orquídeas', 'Gérberas', 'Cravos', 'Astromélias', 'Hortênsias'
];

// Adjectives for product names
const adjectives = [
  'Encantador', 'Elegante', 'Delicado', 'Luxuoso', 'Especial',
  'Romântico', 'Vibrante', 'Clássico', 'Exótico', 'Sofisticado'
];

// Occasions
const occasions = [
  'Aniversário', 'Casamento', 'Formatura', 'Dia dos Namorados', 
  'Dia das Mães', 'Natal', 'Ano Novo', 'Páscoa'
];

// Colors
const colors = [
  'Vermelho', 'Rosa', 'Branco', 'Amarelo', 'Laranja',
  'Roxo', 'Azul', 'Multicolorido'
];

// Unsplash image collections for flowers
const flowerImageUrls = [
  'https://images.unsplash.com/photo-1562690868-60bbe7293e94?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1508610048659-a06b669e3321?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1533616688419-b7a585564566?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1561181286-d3fee7d55364?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1567696153798-9111f9cd3d0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1509719662184-96603fc0fdb8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1502977249166-824b3a8a4d6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1494336934272-f0efcedfc8d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1508188609340-d61e1a07b1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1530092285049-1c42085fd395?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1550236520-7050f3582da0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1586968793406-78d80ae133d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1589123053646-4e8b0c603d7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1591886960571-74d43a9d4166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1596438459194-f275f413d6ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
];

// Generate product descriptions
const generateDescription = (name: string, category: string) => {
  const descriptions = [
    `Lindo arranjo de ${name.toLowerCase()} perfeito para presentear em ocasiões especiais.`,
    `${name} cuidadosamente selecionadas e arranjadas com muito carinho.`,
    `Surpreenda quem você ama com este belíssimo ${category.toLowerCase()} de ${name.toLowerCase()}.`,
    `Arranjo exclusivo de ${name.toLowerCase()} que transmite elegância e sofisticação.`,
    `${name} frescas e de alta qualidade para decorar qualquer ambiente.`
  ];
  
  return descriptions[Math.floor(Math.random() * descriptions.length)];
};

// Generate product names
const generateProductName = () => {
  const namePatterns = [
    `Buquê de ${flowerTypes[Math.floor(Math.random() * flowerTypes.length)]} ${colors[Math.floor(Math.random() * colors.length)]}`,
    `Arranjo ${adjectives[Math.floor(Math.random() * adjectives.length)]} de ${flowerTypes[Math.floor(Math.random() * flowerTypes.length)]}`,
    `${flowerTypes[Math.floor(Math.random() * flowerTypes.length)]} para ${occasions[Math.floor(Math.random() * occasions.length)]}`,
    `Cesta de ${flowerTypes[Math.floor(Math.random() * flowerTypes.length)]} ${adjectives[Math.floor(Math.random() * adjectives.length)]}`,
    `${flowerTypes[Math.floor(Math.random() * flowerTypes.length)]} ${colors[Math.floor(Math.random() * colors.length)]} Especial`
  ];
  
  return namePatterns[Math.floor(Math.random() * namePatterns.length)];
};

// Generate 100 products
export const products: Product[] = Array.from({ length: 100 }, (_, i) => {
  const category = categories[Math.floor(Math.random() * categories.length)];
  const name = generateProductName();
  const price = randomPrice(50, 300);
  const discount = randomDiscount();
  const imageIndex = Math.floor(Math.random() * flowerImageUrls.length);
  
  return {
    id: i + 1,
    name,
    price,
    discount,
    category,
    image: flowerImageUrls[imageIndex],
    description: generateDescription(name, category)
  };
});