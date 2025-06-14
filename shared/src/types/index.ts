export type ApiResponse = {
  message: string;
  success: boolean;
};

export type Item = {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: "NGN" | string;
  condition: "new" | "used" | "refurbished";
  category: string;
  images: string[];
  sellerId: string;
  stock: number;
  createdAt: Date;
  updatedAt: Date;
  status: "active" | "sold" | "inactive";
  tags: string[];
};