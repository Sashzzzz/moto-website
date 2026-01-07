import { TeamMember, Store, ProductCategory, Value, Promise } from './types';

export const COMPANY_INFO = {
  name: "MoTo Company Limited",
  tagline: "Your Trusted Electronics Partner Since 2015",
  industry: "Mobile, IT, & Electronics",
  founded: "2015",
  teamSize: "50+",
  brandCount: "30+",
  facebook: "facebook.com/motomobileaungban",
};

export const STORES: Store[] = [
  {
    name: "Store 1 - Main Branch",
    address: "Corner of Bahtoo Street & Sayar Khaung Street, Aungban Town",
    phone: "09-882333443",
    established: "2015"
  },
  {
    name: "Store 2",
    address: "Corner of Aung Myat Street & Sayar Khaung Street, Aungban Town",
    phone: "09-882333441",
    established: "2022"
  }
];

export const LEADERSHIP: TeamMember[] = [
  {
    name: "U Kyaw Thura Hlaing",
    role: "Founder",
    image: "/Images/About/founder.webp"
  },
  {
    name: "Daw Thuzar Aung",
    role: "CEO",
    image: "/Images/About/ceo.webp"
  }
];

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: "mobile",
    title: "Mobile Devices",
    description: "We carry the latest smartphones and tablets from brands you trust. Whether you're looking for the newest iPhone or iPad, a feature-packed Samsung Galaxy, or a great-value Android device, we have options for every need and budget.",
    brands: ["Apple", "Samsung", "Vivo", "Oppo", "Realme", "Redmi", "Infinix"],
    items: ["Smartphones", "Tablets"],
    image: "/Images/Products/mobile.webp"
  },
  {
    id: "it",
    title: "IT Products",
    description: "From MacBooks and Windows laptops to networking equipment for your home or business, we stock reliable IT products from trusted names.",
    brands: ["Apple MacBook", "Acer", "Dell", "MSI"],
    items: ["Laptops", "IT gadgets and accessories", "WiFi devices and routers", "CCTV systems and security equipment"],
    image: "/Images/Products/it.webp"
  },
  {
    id: "appliances",
    title: "Home Appliances",
    description: "Make your home complete with our range of electronics and appliances. From televisions to refrigerators, washing machines to microwaves, we carry trusted brands that deliver quality and value.",
    brands: ["Sharp", "Samsung", "LG", "Panasonic"],
    items: ["Televisions", "Refrigerators", "Washing machines", "Microwave ovens"],
    image: "/Images/Products/appliances.webp"
  },
  {
    id: "accessories",
    title: "Accessories",
    description: "The little things that make a big difference. We stock a wide range of accessories to complement your devices.",
    brands: ["Apple", "Remax", "Onikuma"],
    items: ["Smart watches (Apple Watch and more)", "AirPods and audio accessories", "Bluetooth speakers", "Power banks", "Gaming accessories", "Phone cases and screen protectors", "Cables, chargers, and more"],
    image: "/Images/Products/accessories.webp"
  }
];

export const VALUES: Value[] = [
  {
    title: "Product Authenticity",
    description: "Every product we sell is brand-new and genuine."
  },
  {
    title: "Fair & Transparent Pricing",
    description: "Honest prices with no hidden costs or surprises."
  },
  {
    title: "Excellent Customer Service",
    description: "A team that listens, guides, and supports you."
  },
  {
    title: "Trust & Reliability",
    description: "Our product quality is guaranteed, and so is our support."
  },
  {
    title: "Continuous Improvement",
    description: "Always growing, learning, and embracing technology to serve you better."
  },
  {
    title: "Convenience",
    description: "Making shopping easy with everything in one place."
  }
];

export const PROMISES: Promise[] = [
  {
    title: "One-Stop Shop",
    description: "Phones, laptops, home appliances. Everything in one place."
  },
  {
    title: "Always Available",
    description: "Questions? Problems? Our team is ready to help."
  },
  {
    title: "After-Sales Support",
    description: "Your purchase is just the beginning. We're here for installation and support."
  },
  {
    title: "Long-Term Relationship",
    description: "Not just for one sale, but for every purchase you make with us."
  },
  {
    title: "Always Improving",
    description: "More products, more locations, better service. Every year."
  },
  {
    title: "Expert Guidance",
    description: "Our knowledgeable staff help you find the perfect product for your needs."
  }
];

export const MISSION = "To offer genuine mobile phones, electronics, and IT products at fair prices with the best customer service, allowing customers to conveniently purchase everything they need in one place.";

export const VISION = "To become a trusted and leading electronics retail brand by expanding branch stores across major cities in Myanmar.";

export const STATS = [
  { value: "2015", label: "Established" },
  { value: "50+", label: "Team Members" },
  { value: "30+", label: "Brands" },
  { value: "100%", label: "Genuine" }
];
