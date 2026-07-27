export interface ServiceItem {
  id: string;
  title: string;
  hindiTitle: string;
  description: string;
  fullDetails: string;
  price: string;
  duration?: string;
  popular?: boolean;
  image: string;
  features: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'chowki' | 'jagran' | 'jhanki' | 'khatu' | 'sai' | 'sunderkand' | 'video';
  type: 'image' | 'video';
  url: string;
  thumbnail?: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  eventType: string;
  rating: number;
  date: string;
  comment: string;
}
