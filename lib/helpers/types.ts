export interface Store {
  id: string;
  name: string;
  userId: string;
}

export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  billboardId: string;
  billboardLabel: string;
  name: string;
}

export interface Size {
  id: string;
  name: string;
  value: string;
}

export interface Kitchen {
  id: string;
  name: string;
  value: string;
}

export interface Cuisine {
  id: string;
  name: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  qty?: number;
  images: { url: string }[];
  isFeatured: boolean;
  isArchived: boolean;
  category: string;
  size: string;
  kitchen: string;
  cuisine: string;
}

export interface Order {
  id: string;
  isPaid: boolean;
  phone: string;
  orderItems: Product[];
  address: string;
  order_status: string;
  userId?: string;
}
