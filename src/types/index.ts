export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'cakes' | 'cupcakes' | 'cookies' | 'pastries';
  popular?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface OrderFormData {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  deliveryMethod: 'pickup' | 'delivery';
  paymentMethod: 'cash' | 'card';
  comment: string;
  agreement: boolean;
}