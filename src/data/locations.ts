import { Location } from '../types';

export const locations: Location[] = [
  {
    id: '1',
    name: 'Farros Nottingham',
    address: '171 Mansfield Rd',
    city: 'Nottingham',
    postcode: 'NG1 3FR',
    phone: '0115 845 9754',
    email: 'info@farros.co.uk',
    hours: {
      'Monday': '11:00 AM - 10:00 PM',
      'Tuesday': '11:00 AM - 10:00 PM',
      'Wednesday': '11:00 AM - 10:00 PM',
      'Thursday': '11:00 AM - 10:00 PM',
      'Friday': '11:00 AM - 11:00 PM',
      'Saturday': '11:00 AM - 11:00 PM',
      'Sunday': '12:00 PM - 9:00 PM'
    },
    image: 'https://images.unsplash.com/photo-1577303935007-0d306ee638cf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=700',
    coordinates: {
      lat: 52.9548,
      lng: -1.1581
    },
    features: ['Dine-in', 'Takeaway', 'Delivery', 'WiFi', 'Family Friendly', 'Alcohol-Free']
  },
  {
    id: '2',
    name: 'Farros Birmingham',
    address: '402 - 406 Stratford Rd',
    city: 'Birmingham',
    postcode: 'B11 4AD',
    phone: '0121 772 52 53',
    email: 'info@farros.co.uk',
    hours: {
      'Monday': '11:00 AM - 10:00 PM',
      'Tuesday': '11:00 AM - 10:00 PM',
      'Wednesday': '11:00 AM - 10:00 PM',
      'Thursday': '11:00 AM - 10:00 PM',
      'Friday': '11:00 AM - 11:00 PM',
      'Saturday': '11:00 AM - 11:00 PM',
      'Sunday': '12:00 PM - 9:00 PM'
    },
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1760',
    coordinates: {
      lat: 52.4862,
      lng: -1.8904
    },
    features: ['Dine-in', 'Takeaway', 'Delivery', 'WiFi', 'Family Friendly', 'Alcohol-Free']
  }
];



