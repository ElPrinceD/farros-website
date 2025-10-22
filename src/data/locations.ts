import { Location } from '../types';

export const locations: Location[] = [
  {
    id: '1',
    name: 'Farros House - Central London',
    address: '123 Oxford Street',
    city: 'London',
    postcode: 'W1D 2HX',
    phone: '+44 20 7123 4567',
    email: 'central@farroshouse.com',
    hours: {
      'Monday': '11:00 AM - 10:00 PM',
      'Tuesday': '11:00 AM - 10:00 PM',
      'Wednesday': '11:00 AM - 10:00 PM',
      'Thursday': '11:00 AM - 10:00 PM',
      'Friday': '11:00 AM - 11:00 PM',
      'Saturday': '11:00 AM - 11:00 PM',
      'Sunday': '12:00 PM - 9:00 PM'
    },
    image: 'https://source.unsplash.com/800x600/?restaurant-interior,modern',
    coordinates: {
      lat: 51.5154,
      lng: -0.1419
    },
    features: ['Dine-in', 'Takeaway', 'Delivery', 'WiFi', 'Parking']
  },
  {
    id: '2',
    name: 'Farros House - Canary Wharf',
    address: '45 Canada Square',
    city: 'London',
    postcode: 'E14 5AB',
    phone: '+44 20 7987 6543',
    email: 'canarywharf@farroshouse.com',
    hours: {
      'Monday': '11:00 AM - 9:00 PM',
      'Tuesday': '11:00 AM - 9:00 PM',
      'Wednesday': '11:00 AM - 9:00 PM',
      'Thursday': '11:00 AM - 9:00 PM',
      'Friday': '11:00 AM - 10:00 PM',
      'Saturday': '11:00 AM - 10:00 PM',
      'Sunday': '12:00 PM - 8:00 PM'
    },
    image: 'https://source.unsplash.com/800x600/?restaurant-modern,interior',
    coordinates: {
      lat: 51.5054,
      lng: -0.0235
    },
    features: ['Dine-in', 'Takeaway', 'Delivery', 'WiFi', 'Business Lunch']
  },
  {
    id: '3',
    name: 'Farros House - Camden',
    address: '78 Camden High Street',
    city: 'London',
    postcode: 'NW1 7JR',
    phone: '+44 20 7387 1234',
    email: 'camden@farroshouse.com',
    hours: {
      'Monday': '11:00 AM - 11:00 PM',
      'Tuesday': '11:00 AM - 11:00 PM',
      'Wednesday': '11:00 AM - 11:00 PM',
      'Thursday': '11:00 AM - 11:00 PM',
      'Friday': '11:00 AM - 12:00 AM',
      'Saturday': '11:00 AM - 12:00 AM',
      'Sunday': '12:00 PM - 10:00 PM'
    },
    image: 'https://source.unsplash.com/800x600/?restaurant-casual,interior',
    coordinates: {
      lat: 51.5390,
      lng: -0.1426
    },
    features: ['Dine-in', 'Takeaway', 'Delivery', 'Live Music', 'Outdoor Seating']
  },
  {
    id: '4',
    name: 'Farros House - Manchester',
    address: '12 Deansgate',
    city: 'Manchester',
    postcode: 'M3 2BW',
    phone: '+44 161 832 9876',
    email: 'manchester@farroshouse.com',
    hours: {
      'Monday': '11:00 AM - 10:00 PM',
      'Tuesday': '11:00 AM - 10:00 PM',
      'Wednesday': '11:00 AM - 10:00 PM',
      'Thursday': '11:00 AM - 10:00 PM',
      'Friday': '11:00 AM - 11:00 PM',
      'Saturday': '11:00 AM - 11:00 PM',
      'Sunday': '12:00 PM - 9:00 PM'
    },
    image: 'https://source.unsplash.com/800x600/?restaurant-urban,interior',
    coordinates: {
      lat: 53.4808,
      lng: -2.2426
    },
    features: ['Dine-in', 'Takeaway', 'Delivery', 'WiFi', 'Parking', 'Private Dining']
  },
  {
    id: '5',
    name: 'Farros House - Birmingham',
    address: '89 Bull Street',
    city: 'Birmingham',
    postcode: 'B4 6AD',
    phone: '+44 121 234 5678',
    email: 'birmingham@farroshouse.com',
    hours: {
      'Monday': '11:00 AM - 10:00 PM',
      'Tuesday': '11:00 AM - 10:00 PM',
      'Wednesday': '11:00 AM - 10:00 PM',
      'Thursday': '11:00 AM - 10:00 PM',
      'Friday': '11:00 AM - 11:00 PM',
      'Saturday': '11:00 AM - 11:00 PM',
      'Sunday': '12:00 PM - 9:00 PM'
    },
    image: 'https://source.unsplash.com/800x600/?restaurant-contemporary,interior',
    coordinates: {
      lat: 52.4862,
      lng: -1.8904
    },
    features: ['Dine-in', 'Takeaway', 'Delivery', 'WiFi', 'Family Friendly']
  }
];



