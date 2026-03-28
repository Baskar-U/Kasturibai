export type Category = "Men" | "Women" | "Kids" | "Traditional" | "Festive";

export interface Product {
  id: string;
  name: string;
  price: number;
  category: Category;
  image: string;
  rating: number;
  badges?: string[];
}

export const CATEGORIES = [
  { name: "Women's Wear", icon: "👗", desc: "Sarees, Kurtis & Gowns" },
  { name: "Men's Wear", icon: "👔", desc: "Shirts, Dhotis & Sherwanis" },
  { name: "Kids Wear", icon: "🧸", desc: "Comfortable & Stylish" },
  { name: "Traditional Wear", icon: "✨", desc: "For Every Occasion" },
];

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Pure Cotton Formal Shirt",
    price: 799,
    category: "Men",
    image: "https://images.unsplash.com/photo-1620012253295-c15ce3e24342?w=800&q=80",
    rating: 4.5,
    badges: ["Best Seller"],
  },
  {
    id: "p2",
    name: "Kanjeevaram Silk Saree",
    price: 2499,
    category: "Traditional",
    image: "https://images.unsplash.com/photo-1610189014603-81b4b1a437c9?w=800&q=80",
    rating: 5.0,
    badges: ["Premium"],
  },
  {
    id: "p3",
    name: "Embroidered Kurti Set",
    price: 899,
    category: "Women",
    image: "https://images.unsplash.com/photo-1583391733958-d65105e45a27?w=800&q=80",
    rating: 4.2,
    badges: ["Trending"],
  },
  {
    id: "p4",
    name: "Kids Essential T-shirt Pack",
    price: 399,
    category: "Kids",
    image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=800&q=80",
    rating: 4.8,
    badges: ["Sale"],
  },
  {
    id: "p5",
    name: "Designer Georgette Saree",
    price: 1499,
    category: "Women",
    image: "https://images.unsplash.com/photo-1596455607563-ad6193f78b5c?w=800&q=80",
    rating: 4.6,
  },
  {
    id: "p6",
    name: "Party Wear Evening Gown",
    price: 1999,
    category: "Festive",
    image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&q=80",
    rating: 4.9,
    badges: ["Hot"],
  },
  {
    id: "p7",
    name: "Premium Dhoti & Shirt Set",
    price: 649,
    category: "Traditional",
    image: "https://images.unsplash.com/photo-1598032895397-b9472444bf93?w=800&q=80",
    rating: 4.7,
  },
  {
    id: "p8",
    name: "Bridal Lehenga Choli",
    price: 2999,
    category: "Festive",
    image: "https://images.unsplash.com/photo-1622380590408-5ce0b22a00bd?w=800&q=80",
    rating: 5.0,
    badges: ["New Arrival"],
  },
  {
    id: "p9",
    name: "School Uniform Set",
    price: 549,
    category: "Kids",
    image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=800&q=80",
    rating: 4.1,
  },
  {
    id: "p10",
    name: "Royal Velvet Sherwani",
    price: 3499,
    category: "Festive",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
    rating: 4.8,
    badges: ["Premium"],
  },
  {
    id: "p11",
    name: "Anarkali Suit with Dupatta",
    price: 1799,
    category: "Women",
    image: "https://images.unsplash.com/photo-1550639524-a6f58345a278?w=800&q=80",
    rating: 4.5,
  },
  {
    id: "p12",
    name: "Kids Ethnic Kurta Pajama",
    price: 899,
    category: "Kids",
    image: "https://images.unsplash.com/photo-1574621100236-d25b64bbc199?w=800&q=80",
    rating: 4.6,
    badges: ["Trending"],
  },
];

export const REVIEWS = [
  { name: "Priya S.", rating: 5, text: "Affordable price and super collections! Will definitely visit again." },
  { name: "Ramesh K.", rating: 5, text: "Best shop for family shopping, very good service from the staff." },
  { name: "Meena R.", rating: 5, text: "Vintage shop but very trendy designs, loved the sarees!" },
  { name: "Kavitha M.", rating: 5, text: "Quality is excellent for the price. Highly recommend!" },
  { name: "Suresh P.", rating: 5, text: "Best traditional wear collection in Chidambaram!" },
  { name: "Anitha L.", rating: 4, text: "Kids wear section is amazing. My kids love their new outfits!" },
];
