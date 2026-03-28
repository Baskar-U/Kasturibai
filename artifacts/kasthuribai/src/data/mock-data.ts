export type Category = "Men" | "Women" | "Kids" | "Traditional" | "Festive";

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: Category;
  image: string;
  rating: number;
  reviewCount?: number;
  badges?: string[];
  sizes?: string[];
  description?: string;
  features?: string[];
  material?: string;
  care?: string;
}

export const CATEGORIES = [
  { name: "Women's Wear", icon: "👗", desc: "Sarees, Kurtis & Gowns", filter: "Women" as Category, bg: "from-rose-100 to-pink-200", accent: "#BE185D" },
  { name: "Men's Wear", icon: "👔", desc: "Shirts, Dhotis & Sherwanis", filter: "Men" as Category, bg: "from-blue-100 to-indigo-200", accent: "#1D4ED8" },
  { name: "Kids Wear", icon: "🧸", desc: "Comfortable & Stylish", filter: "Kids" as Category, bg: "from-green-100 to-emerald-200", accent: "#059669" },
  { name: "Traditional Wear", icon: "🪷", desc: "For Every Occasion", filter: "Traditional" as Category, bg: "from-amber-100 to-orange-200", accent: "#D97706" },
];

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Pure Cotton Formal Shirt",
    price: 799,
    originalPrice: 1199,
    category: "Men",
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ1-Lu2pvJDmCnUlKqzIkqKPTO-x4yF8S14ougfRh4fpC4eiq3UXYtApbFoGFfKACnpL02CP5UC1NdCMDgxsqsLjrFZdo0eY9CpBcdlgYQNEbVqkjCEv4WK",
    rating: 4.5,
    reviewCount: 128,
    badges: ["Best Seller"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Crafted from 100% pure cotton, this formal shirt offers unmatched comfort and breathability. Perfect for office wear, family occasions, or casual outings.",
    features: ["100% Pure Cotton", "Machine Washable", "Anti-shrink treated", "Colour-fast dye", "Easy iron finish"],
    material: "100% Cotton",
    care: "Machine wash cold. Do not bleach. Tumble dry low.",
  },
  {
    id: "p2",
    name: "Kanjeevaram Silk Saree",
    price: 2499,
    originalPrice: 3999,
    category: "Traditional",
    image: "https://m.media-amazon.com/images/I/714FtS6L5xL._SY741_.jpg",
    rating: 5.0,
    reviewCount: 89,
    badges: ["Premium"],
    sizes: ["Free Size"],
    description: "An exquisite Kanjeevaram silk saree with intricate gold zari work. A timeless piece for weddings, festivals, and special celebrations.",
    features: ["Pure silk base", "Zari gold border", "6.5 metres length", "Blouse piece included", "Certificate of authenticity"],
    material: "Pure Silk with Zari",
    care: "Dry clean only. Store in muslin cloth.",
  },
  {
    id: "p3",
    name: "Embroidered Kurti Set",
    price: 899,
    originalPrice: 1499,
    category: "Women",
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTnr84C693RIfus_UetbpHVdJtKdHq9jBH7mOynAiXRYdXkt_UlsSTrcbhUgI2P94TIUe1m2HXt5sTYy46ux84dm2VvzxGs86TGGAEhUC4",
    rating: 4.2,
    reviewCount: 74,
    badges: ["Trending"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Beautifully embroidered kurti set in soft cotton fabric. Comes with matching palazzo pants. Ideal for daily wear and festive occasions.",
    features: ["Floral hand embroidery", "Soft cotton blend", "Includes palazzo", "Breathable fabric", "Ethnic prints"],
    material: "Cotton Blend",
    care: "Hand wash separately. Do not wring.",
  },
  {
    id: "p4",
    name: "Kids Essential T-shirt Pack",
    price: 399,
    originalPrice: 699,
    category: "Kids",
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSLNbJkK7X_rzWBycBO_6EjaF3nZejfRLXWUcrAIE0royzu9OzWUrq8W4m-DbF9MN0ZwpB-CWxrnjTioLWWAWP8TZBrZ1FKhu8r9gXW4iN9uHG9XSmRqPL3Jv4",
    rating: 4.8,
    reviewCount: 156,
    badges: ["Sale", "Hot"],
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y"],
    description: "Pack of 3 vibrant, super-soft t-shirts for kids. Designed for active play and all-day comfort. Durable colours that last through multiple washes.",
    features: ["Pack of 3", "100% Cotton", "Tagless comfort", "Vibrant colours", "Machine washable"],
    material: "100% Combed Cotton",
    care: "Machine wash warm. Do not bleach.",
  },
  {
    id: "p5",
    name: "Designer Georgette Saree",
    price: 1499,
    originalPrice: 2299,
    category: "Women",
    image: "https://m.media-amazon.com/images/I/71PQPVuiJfL._SY741_.jpg",
    rating: 4.6,
    reviewCount: 62,
    sizes: ["Free Size"],
    description: "Elegant georgette saree with printed floral pattern and lace border. Light-weight fabric drapes beautifully. Perfect for parties and family gatherings.",
    features: ["Georgette fabric", "Printed pattern", "Lace border", "6 metres length", "Easy drape"],
    material: "Georgette",
    care: "Dry clean recommended.",
  },
  {
    id: "p6",
    name: "Party Wear Evening Gown",
    price: 1999,
    originalPrice: 2999,
    category: "Festive",
    image: "https://rukminim2.flixcart.com/image/1850/1850/xif0q/gown/n/x/q/na-free-3-4-sleeve-semi-stitched-falak-gown-01-new-lady-shopi-na-original-imah8scguebushfu.jpeg?q=90",
    rating: 4.9,
    reviewCount: 43,
    badges: ["Hot"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Stunning party-wear gown with sequin detailing. This floor-length gown is perfect for weddings, receptions, and festive celebrations.",
    features: ["Sequin detailing", "Floor length cut", "Built-in lining", "Side zipper closure", "Premium stitching"],
    material: "Net + Satin lining",
    care: "Dry clean only.",
  },
  {
    id: "p7",
    name: "Premium Dhoti & Shirt Set",
    price: 649,
    originalPrice: 999,
    category: "Traditional",
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTxb_j6Ha9FBk6kAXSqIxq0Z9dN6Ab17J45dOEd6rrFifW31bVlNVhsujplvhw-aZRbpl9qO656ad2ogeYGUdlZWErfx5L0CxYnGguDbmnHd6hNgqtrxtOH",
    rating: 4.7,
    reviewCount: 91,
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Traditional dhoti-shirt set in fine cotton. A classic look for temple visits, family functions and traditional celebrations.",
    features: ["Fine cotton dhoti", "Matching shirt", "Crisp white finish", "Easy to drape", "Durable cloth"],
    material: "Fine Cotton",
    care: "Machine wash cold separately.",
  },
  {
    id: "p8",
    name: "Bridal Lehenga Choli",
    price: 2999,
    originalPrice: 4999,
    category: "Festive",
    image: "https://m.media-amazon.com/images/I/61-zeYsr-AL._SY741_.jpg",
    rating: 5.0,
    reviewCount: 38,
    badges: ["New Arrival"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Opulent bridal lehenga in rich red and gold. Heavily embroidered with traditional motifs, this is the perfect outfit for the most special day of your life.",
    features: ["Heavy embroidery", "Dupatta included", "Padded choli", "Rich zari work", "Fully lined"],
    material: "Velvet with Silk lining",
    care: "Dry clean only. Store in garment bag.",
  },
  {
    id: "p9",
    name: "School Uniform Set",
    price: 549,
    originalPrice: 799,
    category: "Kids",
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQK-dJ8yiOeoAaao5a-g-_3McgdEtbOn5ZcLIj5p3MjEeh9LMqzUbVSaeFIH9URCSub2BXevn0Pfrybh-WF4YxFofyW_oi-tg",
    rating: 4.1,
    reviewCount: 212,
    sizes: ["4Y", "6Y", "8Y", "10Y", "12Y"],
    description: "Durable and comfortable school uniform set with shirt and trousers/skirt. Designed to withstand daily school wear while keeping children looking neat and tidy.",
    features: ["Durable cotton", "Colour-fast fabric", "Easy iron", "Comfortable fit", "Long lasting"],
    material: "Cotton-Polyester Blend",
    care: "Machine wash warm.",
  },
  {
    id: "p10",
    name: "Royal Velvet Sherwani",
    price: 3499,
    originalPrice: 5499,
    category: "Festive",
    image: "https://m.media-amazon.com/images/I/81tFRCasD9L._SX679_.jpg",
    rating: 4.8,
    reviewCount: 55,
    badges: ["Premium"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Majestic royal blue velvet sherwani with intricate gold embroidery. Complete with churidar and dupatta. Make a grand entrance at any celebration.",
    features: ["Premium velvet", "Gold zari embroidery", "Churidar included", "Dupatta included", "Fully lined"],
    material: "Velvet with Brocade",
    care: "Dry clean only.",
  },
  {
    id: "p11",
    name: "Anarkali Suit with Dupatta",
    price: 1799,
    originalPrice: 2799,
    category: "Women",
    image: "https://m.media-amazon.com/images/I/71mX4WATh-L._SX569_.jpg",
    rating: 4.5,
    reviewCount: 67,
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Elegant floor-length anarkali in printed georgette. The churidar and sheer dupatta complete this stunning ensemble for weddings and parties.",
    features: ["Floor length anarkali", "Churidar included", "Sheer dupatta", "Printed georgette", "Fully stitched"],
    material: "Georgette + Churidar Cotton",
    care: "Dry clean recommended.",
  },
  {
    id: "p12",
    name: "Kids Ethnic Kurta Pajama",
    price: 899,
    originalPrice: 1399,
    category: "Kids",
    image: "https://m.media-amazon.com/images/I/41WuR7l2pHL._SY741_.jpg",
    rating: 4.6,
    reviewCount: 83,
    badges: ["Trending"],
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y"],
    description: "Adorable ethnic kurta-pajama set for boys. Perfect for festivals, family functions and traditional celebrations. Comfortable enough for all-day wear.",
    features: ["Soft cotton blend", "Patiala pajama included", "Festive embroidery", "Comfortable fit", "Easy to wear"],
    material: "Cotton Blend",
    care: "Machine wash cold.",
  },
];

export const REVIEWS: Review[] = [
  { id: "r1", name: "Priya S.", rating: 5, text: "Affordable price and super collections! Will definitely visit again. The sarees are absolutely beautiful and the quality is top notch.", date: "March 2026", avatar: "P" },
  { id: "r2", name: "Ramesh K.", rating: 5, text: "Best shop for family shopping, very good service from the staff. Bought outfits for the whole family and everyone loves them!", date: "February 2026", avatar: "R" },
  { id: "r3", name: "Meena R.", rating: 5, text: "Vintage shop but very trendy designs, loved the sarees! The Kanjeevaram silk saree I bought was exactly as described. Stunning quality!", date: "January 2026", avatar: "M" },
  { id: "r4", name: "Kavitha M.", rating: 5, text: "Quality is excellent for the price. Highly recommend to anyone looking for authentic Indian wear in Chidambaram.", date: "March 2026", avatar: "K" },
  { id: "r5", name: "Suresh P.", rating: 5, text: "Best traditional wear collection in Chidambaram! The dhoti-shirt set I got for the temple visit was perfect. Great value for money.", date: "February 2026", avatar: "S" },
  { id: "r6", name: "Anitha L.", rating: 4, text: "Kids wear section is amazing. My kids love their new outfits! The school uniforms are very durable too.", date: "January 2026", avatar: "A" },
];

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  avatar: string;
}
