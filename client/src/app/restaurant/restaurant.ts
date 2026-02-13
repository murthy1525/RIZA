import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../auth';

interface MenuItem {
  name: string;
  description: string;
  detailedDescription?: string;
  price: string;
  icon?: string;
  badge?: string;
  rating?: number;
  options?: string[];
}

interface MenuCategory {
  id: string;
  label: string;
  description: string;
  icon?: string;
  items: MenuItem[];
}

interface SideMenuItem {
  id: string;
  label: string;
  description: string;
  icon?: string;
}

interface Table {
  id: string;
  number: number;
  capacity: number;
  type: 'table' | 'room';
  status: 'available' | 'booked' | 'selected';
}

interface Booking {
  id: string;
  tableId: string;
  tableNumber: number;
  type: 'table' | 'room';
  mobileNumber: string;
  date: string;
  time: string;
  requests: string;
  bookingDate: string;
}

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './restaurant.html',
  styleUrl: './restaurant.css',
})
export class Restaurant {
  topMenus = ['Home', 'Menu', 'Offers', 'Reservations', 'Gallery', 'Contact', 'About'];
  selectedTopMenu: string = 'Home';
  selectedSideMenuItem: string = '';

  categories: MenuCategory[] = [
    {
      id: 'starters',
      label: 'Starters',
      description: 'Begin your RIZA experience with crispy, tangy and flavour‑packed small bites.',
      icon: '🍽️',
      items: [
        { name: 'Crispy Corn Chaat', icon: '🌽', description: 'Golden fried corn tossed with tangy spices', detailedDescription: 'Fresh sweet corn kernels are deep-fried until golden and crispy, then tossed with a medley of tangy spices, fresh coriander, and a hint of lemon. Served with a side of mint chutney, this dish offers the perfect balance of crunch, sweetness, and spice. A popular street food favorite, elevated with RIZA\'s signature touch.', price: '₹220', rating: 4.5 },
        { name: 'Tandoori Paneer Bites', icon: '🥘', description: 'Smoky cottage cheese with mint chutney', detailedDescription: 'Cubes of fresh paneer are marinated in a blend of yogurt, aromatic spices, and tandoori masala, then grilled to perfection in our clay oven. The result is a smoky, tender texture with a beautiful char. Served with cooling mint chutney and a squeeze of fresh lemon. A vegetarian delight that even meat lovers enjoy.', price: '₹260', badge: 'Chef\'s Special', rating: 4.8, options: ['Extra Mint Chutney', 'Extra Lemon', 'Onion Rings'] },
        { name: 'Chicken 65', icon: '🍗', description: 'Spicy South Indian style fried chicken', detailedDescription: 'Tender chicken pieces are marinated in a secret blend of South Indian spices, including red chili, curry leaves, and garlic, then deep-fried until perfectly crispy. The dish gets its name from the 65 spices used in the original recipe. Served hot with a garnish of fresh curry leaves and green chilies. Bold, fiery, and incredibly addictive.', price: '₹280', rating: 4.6, options: ['Extra Spicy', 'Lemon Wedges', 'Onion Rings'] },
        { name: 'Spring Rolls', icon: '🥟', description: 'Crispy vegetable rolls with sweet chilli sauce', detailedDescription: 'Delicate spring roll wrappers are filled with a colorful mix of finely chopped vegetables including carrots, cabbage, bell peppers, and bean sprouts, seasoned with soy sauce and aromatic spices. Deep-fried until golden and crispy, served with a house-made sweet chili dipping sauce. Light, crunchy, and perfect for sharing.', price: '₹240', rating: 4.4 },
        { name: 'Paneer Tikka', icon: '🧀', description: 'Marinated cottage cheese grilled to perfection', detailedDescription: 'Chunks of premium paneer are marinated overnight in a rich blend of yogurt, ginger-garlic paste, garam masala, and turmeric. Skewered and grilled in the tandoor until slightly charred on the edges while remaining soft and creamy inside. Served with tangy tamarind chutney and fresh onion rings. A classic that never disappoints.', price: '₹270', rating: 4.5, options: ['Extra Chutney', 'Onion Rings', 'Lemon Wedges'] },
        { name: 'Chicken Wings', icon: '🍗', description: 'Spicy buffalo wings with ranch dip', detailedDescription: 'Juicy chicken wings are marinated in a spicy buffalo sauce blend, then baked and finished on the grill for that perfect crispy skin. Each wing is coated in our signature hot sauce that packs just the right amount of heat. Served with a creamy ranch dip, celery sticks, and carrot sticks. Perfect for game nights or casual dining.', price: '₹320', rating: 4.7 },
        { name: 'Bruschetta', icon: '🍞', description: 'Toasted bread with tomato, basil & mozzarella', detailedDescription: 'Artisan bread slices are toasted until golden, then topped with a fresh mixture of diced Roma tomatoes, fresh basil, minced garlic, and extra virgin olive oil. Finished with creamy mozzarella cheese and a drizzle of balsamic reduction. A simple yet elegant Italian classic that celebrates fresh, quality ingredients.', price: '₹250', rating: 4.3 }
      ]
    },
    {
      id: 'mains',
      label: 'Main Course',
      description: 'Hearty mains that bring together Indian favourites and global comfort food.',
      icon: '🍛',
      items: [
        { name: 'RIZA Signature Biryani', icon: '🍛', description: 'Fragrant basmati rice with veg or chicken', detailedDescription: 'Our signature biryani features premium basmati rice, slow-cooked with aromatic whole spices including cardamom, cinnamon, and bay leaves. Choose between tender chicken pieces or a medley of fresh vegetables, both marinated in yogurt and spices. Layered with fried onions, fresh mint, and saffron-infused milk, then dum-cooked to perfection. Served with raita and a side of pickle. A royal feast in every bite.', price: '₹380', badge: 'Best Seller', rating: 4.9, options: ['Extra Raita', 'Thumsup', 'Extra Pickle', 'Boiled Egg'] },
        { name: 'Creamy Tuscan Pasta', icon: '🍝', description: 'Penne in rich sun-dried tomato & cream sauce', detailedDescription: 'Penne pasta is tossed in a luxurious cream sauce enriched with sun-dried tomatoes, garlic, fresh basil, and a hint of white wine. Finished with parmesan cheese and a drizzle of olive oil. The sun-dried tomatoes add a delightful tangy sweetness that balances the rich cream. A comforting Italian classic with a gourmet twist.', price: '₹340', rating: 4.6 },
        { name: 'Grilled Herb Chicken', icon: '🍗', description: 'Served with garlic mash and sautéed veggies', detailedDescription: 'A succulent chicken breast is marinated in fresh herbs including rosemary, thyme, and oregano, then grilled to perfection. The chicken remains juicy and tender with a beautiful herb crust. Served alongside creamy garlic mashed potatoes and a colorful medley of sautéed seasonal vegetables. A wholesome, protein-rich main course.', price: '₹420', rating: 4.7 },
        { name: 'Butter Chicken', icon: '🥘', description: 'Creamy tomato curry with tender chicken pieces', detailedDescription: 'Tender pieces of tandoori chicken are simmered in a rich, velvety tomato-based curry enriched with butter, cream, and aromatic spices. The sauce is smooth, mildly spiced, and slightly sweet. Garnished with fresh cream and coriander leaves. Served with naan or rice. A North Indian classic that has won hearts worldwide.', price: '₹360', rating: 4.7, options: ['Extra Butter', 'Garlic Naan', 'Jeera Rice', 'Extra Cream'] },
        { name: 'Margherita Pizza', icon: '🍕', description: 'Classic pizza with fresh mozzarella and basil', detailedDescription: 'Our wood-fired pizza features a thin, crispy crust topped with San Marzano tomato sauce, fresh mozzarella cheese, and aromatic basil leaves. Baked in our traditional oven until the cheese is perfectly melted and the edges are golden. Simple, authentic, and delicious. Sometimes, the classics are the best.', price: '₹320', rating: 4.5 },
        { name: 'Fish Curry', icon: '🐟', description: 'Traditional fish curry with coconut and spices', detailedDescription: 'Fresh fish fillets are gently cooked in a coconut-based curry infused with tamarind, curry leaves, and a blend of South Indian spices. The curry is tangy, mildly spicy, and incredibly flavorful. The coconut milk adds a creamy richness that balances the tanginess. Served with steamed rice. A coastal favorite that brings the sea to your plate.', price: '₹380', rating: 4.6 },
        { name: 'Vegetable Biryani', icon: '🥗', description: 'Aromatic basmati rice with mixed vegetables', detailedDescription: 'A fragrant vegetarian biryani featuring long-grain basmati rice cooked with a colorful mix of fresh vegetables including carrots, beans, peas, and cauliflower. The vegetables are marinated in yogurt and spices, then layered with partially cooked rice and fried onions. Dum-cooked with saffron and ghee. Served with raita. A complete meal that satisfies vegetarians and non-vegetarians alike.', price: '₹320', rating: 4.6, options: ['Extra Raita', 'Thumsup', 'Extra Pickle', 'Papad'] },
        { name: 'Chicken Tikka Masala', icon: '🍛', description: 'Tender chicken in rich, creamy tomato sauce', detailedDescription: 'Tandoori chicken tikka pieces are simmered in a rich, creamy tomato-based gravy with a perfect balance of spices. The sauce is smooth, slightly sweet, and has a beautiful orange-red color. Finished with cream and fresh coriander. Served with naan or basmati rice. A British-Indian fusion dish that has become a global favorite.', price: '₹350', rating: 4.7 },
        { name: 'Penne Arrabbiata', icon: '🍝', description: 'Spicy pasta with tomatoes, garlic and chilli', detailedDescription: 'Penne pasta is tossed in a fiery tomato sauce made with fresh tomatoes, lots of garlic, red chili flakes, and fresh parsley. The name "arrabbiata" means "angry" in Italian, referring to the spicy heat. Simple, bold, and full of flavor. Finished with a drizzle of olive oil and grated parmesan. For those who love their pasta with a kick.', price: '₹330', rating: 4.4 }
      ]
    },
    {
      id: 'desserts',
      label: 'Desserts',
      description: 'Sweet endings – rich, creamy and indulgent treats to complete your meal.',
      icon: '🍰',
      items: [
        { name: 'Chocolate Lava Cake', icon: '🍫', description: 'Warm chocolate cake with molten center', detailedDescription: 'A decadent chocolate cake with a warm, gooey molten center that oozes out when you cut into it. Made with premium dark chocolate and served warm with a scoop of vanilla ice cream. The contrast between the warm cake and cold ice cream is pure bliss. A dessert that chocolate lovers dream about.', price: '₹220', badge: 'Must Try', rating: 4.8, options: ['Extra Ice Cream', 'Chocolate Sauce', 'Whipped Cream'] },
        { name: 'Matka Kulfi Trio', icon: '🍨', description: 'Assorted traditional kulfi flavours', price: '₹200', rating: 4.5 },
        { name: 'Baked Cheesecake', icon: '🍰', description: 'Classic New York style cheesecake', price: '₹240', rating: 4.6 },
        { name: 'Gulab Jamun', icon: '🍮', description: 'Sweet milk dumplings in rose syrup', price: '₹180', rating: 4.4 },
        { name: 'Tiramisu', icon: '☕', description: 'Italian coffee-flavored dessert', price: '₹260', rating: 4.7 },
        { name: 'Ice Cream Sundae', icon: '🍧', description: 'Vanilla ice cream with chocolate sauce and nuts', price: '₹200', rating: 4.3 }
      ]
    },
    {
      id: 'drinks',
      label: 'Beverages',
      description: 'Coolers, coffees and colourful mocktails crafted to match every mood.',
      icon: '🥤',
      items: [
        { name: 'Masala Lemonade', icon: '🍋', description: 'Refreshing sweet & tangy cooler', price: '₹140', rating: 4.4 },
        { name: 'Classic Cold Coffee', icon: '🥤', description: 'Chilled coffee with vanilla ice-cream', price: '₹180', rating: 4.6 },
        { name: 'Fruit Punch', icon: '🍹', description: 'Mixed fruit mocktail with tropical flavours', price: '₹190', rating: 4.5 },
        { name: 'Mango Lassi', icon: '🥭', description: 'Sweet yogurt drink with fresh mango', price: '₹160', rating: 4.6 },
        { name: 'Fresh Lime Soda', icon: '🥤', description: 'Sparkling lime drink with mint', price: '₹120', rating: 4.3 },
        { name: 'Iced Tea', icon: '🧊', description: 'Refreshing iced tea with lemon', price: '₹150', rating: 4.4 },
        { name: 'Smoothie Bowl', icon: '🍓', description: 'Mixed fruit smoothie with granola', price: '₹220', rating: 4.5 }
      ]
    },
    {
      id: 'breads',
      label: 'Breads & Rice',
      description: 'Soft, buttery breads and fragrant rice to pair perfectly with your favourite curries.',
      icon: '🫓',
      items: [
        { name: 'Garlic Naan', icon: '🫓', description: 'Soft bread with garlic and butter', price: '₹80', rating: 4.5 },
        { name: 'Butter Naan', icon: '🫓', description: 'Classic buttered flatbread', price: '₹70', rating: 4.4 },
        { name: 'Roti', icon: '🫓', description: 'Whole wheat flatbread', price: '₹50', rating: 4.3 },
        { name: 'Jeera Rice', icon: '🍚', description: 'Basmati rice with cumin seeds', price: '₹120', rating: 4.5 },
        { name: 'Fried Rice', icon: '🍚', description: 'Vegetable fried rice with spices', price: '₹180', rating: 4.6 },
        { name: 'Kulcha', icon: '🫓', description: 'Leavened bread with stuffing', price: '₹90', rating: 4.4 }
      ]
    },
    {
      id: 'soups',
      label: 'Soups & Salads',
      description: 'Light, comforting bowls and fresh greens for a warm or refreshing start.',
      icon: '🥗',
      items: [
        { name: 'Tomato Soup', icon: '🥣', description: 'Creamy tomato soup with croutons', price: '₹150', rating: 4.4 },
        { name: 'Chicken Soup', icon: '🍲', description: 'Hearty chicken soup with vegetables', price: '₹180', rating: 4.5 },
        { name: 'Caesar Salad', icon: '🥗', description: 'Fresh romaine with caesar dressing', price: '₹220', rating: 4.6 },
        { name: 'Garden Salad', icon: '🥗', description: 'Mixed greens with vinaigrette', price: '₹180', rating: 4.4 },
        { name: 'Corn Soup', icon: '🌽', description: 'Sweet corn soup with vegetables', price: '₹160', rating: 4.3 }
      ]
    },
    {
      id: 'specials',
      label: 'Chef Specials',
      description: 'Signature creations curated by our chefs, available for a limited time.',
      icon: '⭐',
      items: [
        { name: 'RIZA Tasting Platter', icon: '🍽️', description: 'Selection of our most-loved starters on one platter', detailedDescription: 'Our signature platter features a generous selection of our most popular starters including Tandoori Paneer Bites, Chicken 65, Spring Rolls, Paneer Tikka, and Crispy Corn Chaat. Perfect for sharing with friends or family, this platter gives you a taste of everything. Served with an assortment of chutneys and dips. Great value and perfect for groups!', price: '₹520', badge: 'Signature', rating: 4.8 },
        { name: 'Royal Thali', icon: '🥘', description: 'Grand Indian thali with multiple curries, breads and desserts', price: '₹580', rating: 4.7 },
        { name: 'Smoked BBQ Platter', icon: '🥩', description: 'Assorted grilled meats with house sauces', price: '₹640', rating: 4.8 }
      ]
    },
    {
      id: 'combos',
      label: 'Combos & Family Meals',
      description: 'Perfectly balanced sets for couples, families and busy workdays.',
      icon: '👨‍👩‍👧‍👦',
      items: [
        { name: 'Couple Combo', icon: '👫', description: '2 starters, 2 mains, 1 dessert to share', price: '₹899', rating: 4.7 },
        { name: 'Family Feast', icon: '👨‍👩‍👧‍👦', description: 'Serves 4: starters, mains, breads, rice & dessert', price: '₹1699', rating: 4.8 },
        { name: 'Office Lunch Box', icon: '🍱', description: 'Compact meal box ideal for office lunches', price: '₹260', rating: 4.5 }
      ]
    }
  ];

  selectedCategoryId: string = 'starters';
  selectedItem: MenuItem | null = null;

  // Booking system
  bookingTab: 'table' | 'room' = 'table';
  tables: Table[] = [];
  rooms: Table[] = [];
  selectedTable: Table | null = null;
  bookingForm = {
    mobileNumber: '',
    date: '',
    time: '',
    requests: ''
  };
  showBookingForm: boolean = false;
  bookingSuccess: boolean = false;

  // Side menu items for each top menu
  homeSideMenu: SideMenuItem[] = [
    { id: 'overview', label: 'Overview', description: 'Welcome to RIZA - Experience culinary excellence', icon: '🏠' },
    { id: 'features', label: 'Features', description: 'Discover what makes RIZA special', icon: '✨' },
    { id: 'testimonials', label: 'Testimonials', description: 'What our guests say about us', icon: '💬' }
  ];

  menuSideMenu: SideMenuItem[] = [
    { id: 'starters', label: 'Starters', description: 'Crispy, tangy and flavour-packed small bites', icon: '🍽️' },
    { id: 'mains', label: 'Main Course', description: 'Hearty mains with Indian and global favorites', icon: '🍛' },
    { id: 'desserts', label: 'Desserts', description: 'Sweet endings to complete your meal', icon: '🍰' },
    { id: 'drinks', label: 'Beverages', description: 'Coolers, coffees and colourful mocktails', icon: '🥤' },
    { id: 'breads', label: 'Breads & Rice', description: 'Soft breads and fragrant rice', icon: '🫓' },
    { id: 'soups', label: 'Soups & Salads', description: 'Light bowls and fresh greens', icon: '🥗' },
    { id: 'specials', label: 'Chef Specials', description: 'Signature creations by our chefs', icon: '⭐' },
    { id: 'combos', label: 'Combos & Family Meals', description: 'Perfect sets for couples and families', icon: '👨‍👩‍👧‍👦' }
  ];

  offersSideMenu: SideMenuItem[] = [
    { id: 'daily', label: 'Daily Offers', description: 'Today\'s special deals and discounts', icon: '🔥' },
    { id: 'happy-hours', label: 'Happy Hours', description: 'Special timings with great offers', icon: '⏰' },
    { id: 'weekend', label: 'Weekend Specials', description: 'Exclusive weekend offers', icon: '🎉' }
  ];

  reservationsSideMenu: SideMenuItem[] = [
    { id: 'book-table', label: 'Book a Table', description: 'Reserve your table in advance', icon: '📅' },
    { id: 'private-dining', label: 'Private Dining', description: 'Private sections for celebrations', icon: '🎊' },
    { id: 'events', label: 'Events & Catering', description: 'Host your events with us', icon: '🎈' }
  ];

  gallerySideMenu: SideMenuItem[] = [
    { id: 'food', label: 'Food Gallery', description: 'Mouth-watering dishes from our kitchen', icon: '🍽️' },
    { id: 'ambiance', label: 'Ambiance', description: 'Our cozy and warm interiors', icon: '🏛️' },
    { id: 'events', label: 'Events', description: 'Special moments at RIZA', icon: '📸' }
  ];

  contactSideMenu: SideMenuItem[] = [
    { id: 'phone', label: 'Phone', description: 'Call us for reservations and inquiries', icon: '📞' },
    { id: 'email', label: 'Email', description: 'Send us your feedback and queries', icon: '📧' },
    { id: 'location', label: 'Location', description: 'Find us on the map', icon: '📍' }
  ];

  aboutSideMenu: SideMenuItem[] = [
    { id: 'story', label: 'Our Story', description: 'The journey of RIZA', icon: '📖' },
    { id: 'team', label: 'Our Team', description: 'Meet the people behind RIZA', icon: '👥' },
    { id: 'values', label: 'Our Values', description: 'What we stand for', icon: '💎' }
  ];

  constructor(
    private authService: Auth,
    private router: Router
  ) {
    this.initializeTables();
    this.loadBookings();
  }

  initializeTables(): void {
    // Regular tables (like bus seats)
    this.tables = [
      { id: 't1', number: 1, capacity: 2, type: 'table', status: 'available' },
      { id: 't2', number: 2, capacity: 2, type: 'table', status: 'available' },
      { id: 't3', number: 3, capacity: 4, type: 'table', status: 'available' },
      { id: 't4', number: 4, capacity: 4, type: 'table', status: 'available' },
      { id: 't5', number: 5, capacity: 2, type: 'table', status: 'available' },
      { id: 't6', number: 6, capacity: 4, type: 'table', status: 'available' },
      { id: 't7', number: 7, capacity: 6, type: 'table', status: 'available' },
      { id: 't8', number: 8, capacity: 2, type: 'table', status: 'available' },
      { id: 't9', number: 9, capacity: 4, type: 'table', status: 'available' },
      { id: 't10', number: 10, capacity: 4, type: 'table', status: 'available' },
      { id: 't11', number: 11, capacity: 2, type: 'table', status: 'available' },
      { id: 't12', number: 12, capacity: 6, type: 'table', status: 'available' }
    ];

    // Private rooms
    this.rooms = [
      { id: 'r1', number: 1, capacity: 8, type: 'room', status: 'available' },
      { id: 'r2', number: 2, capacity: 10, type: 'room', status: 'available' },
      { id: 'r3', number: 3, capacity: 12, type: 'room', status: 'available' },
      { id: 'r4', number: 4, capacity: 15, type: 'room', status: 'available' },
      { id: 'r5', number: 5, capacity: 20, type: 'room', status: 'available' }
    ];
  }

  loadBookings(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      const bookingsJson = localStorage.getItem('rizaBookings');
      if (bookingsJson) {
        const bookings: Booking[] = JSON.parse(bookingsJson);
        this.updateTableAvailability(bookings);
      }
    }
  }

  updateTableAvailability(bookings: Booking[]): void {
    const today = new Date().toISOString().split('T')[0];
    const now = new Date().toTimeString().split(':').slice(0, 2).join(':');

    bookings.forEach(booking => {
      const bookingDateTime = new Date(`${booking.date}T${booking.time}`);
      const isPast = booking.date < today || (booking.date === today && booking.time < now);

      if (!isPast) {
        const targetList = booking.type === 'table' ? this.tables : this.rooms;
        const table = targetList.find(t => t.id === booking.tableId);
        if (table) {
          table.status = 'booked';
        }
      }
    });
  }

  getBookings(): Booking[] {
    if (typeof window !== 'undefined' && window.localStorage) {
      const bookingsJson = localStorage.getItem('rizaBookings');
      return bookingsJson ? JSON.parse(bookingsJson) : [];
    }
    return [];
  }

  saveBooking(booking: Booking): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      const bookings = this.getBookings();
      bookings.push(booking);
      localStorage.setItem('rizaBookings', JSON.stringify(bookings));
    }
  }

  isTableAvailable(table: Table, date: string, time: string): boolean {
    if (table.status === 'booked') {
      const bookings = this.getBookings();
      const conflictingBooking = bookings.find(b => 
        b.tableId === table.id && 
        b.date === date && 
        b.time === time
      );
      return !conflictingBooking;
    }
    return table.status === 'available';
  }

  selectBookingTab(tab: 'table' | 'room'): void {
    this.bookingTab = tab;
    this.selectedTable = null;
    this.showBookingForm = false;
    this.bookingSuccess = false;
  }

  selectTable(table: Table): void {
    if (table.status === 'booked') {
      return;
    }

    // Reset previous selection
    if (this.bookingTab === 'table') {
      this.tables.forEach(t => {
        if (t.status === 'selected' && t.id !== table.id) {
          t.status = 'available';
        }
      });
    } else {
      this.rooms.forEach(r => {
        if (r.status === 'selected' && r.id !== table.id) {
          r.status = 'available';
        }
      });
    }

    table.status = 'selected';
    this.selectedTable = table;
    this.showBookingForm = true;
    this.bookingSuccess = false;
    this.bookingForm = {
      mobileNumber: '',
      date: '',
      time: '',
      requests: ''
    };
  }

  submitBooking(): void {
    if (!this.selectedTable) return;

    if (!this.bookingForm.mobileNumber.trim()) {
      alert('Please enter your mobile number');
      return;
    }

    if (!this.bookingForm.date) {
      alert('Please select a date');
      return;
    }

    if (!this.bookingForm.time) {
      alert('Please select a time');
      return;
    }

    // Check if table is available for selected date/time
    if (!this.isTableAvailable(this.selectedTable, this.bookingForm.date, this.bookingForm.time)) {
      alert('This table is already booked for the selected date and time. Please choose another time or table.');
      return;
    }

    const booking: Booking = {
      id: `booking_${Date.now()}`,
      tableId: this.selectedTable.id,
      tableNumber: this.selectedTable.number,
      type: this.selectedTable.type,
      mobileNumber: this.bookingForm.mobileNumber,
      date: this.bookingForm.date,
      time: this.bookingForm.time,
      requests: this.bookingForm.requests || '',
      bookingDate: new Date().toISOString()
    };

    this.saveBooking(booking);
    this.selectedTable.status = 'booked';
    this.bookingSuccess = true;
    this.showBookingForm = false;

    // Reset after 3 seconds
    setTimeout(() => {
      this.selectedTable = null;
      this.bookingSuccess = false;
      this.bookingForm = {
        mobileNumber: '',
        date: '',
        time: '',
        requests: ''
      };
    }, 3000);
  }

  cancelBooking(): void {
    if (this.selectedTable) {
      this.selectedTable.status = 'available';
    }
    this.selectedTable = null;
    this.showBookingForm = false;
    this.bookingSuccess = false;
    this.bookingForm = {
      mobileNumber: '',
      date: '',
      time: '',
      requests: ''
    };
  }

  getMinDate(): string {
    const today = new Date();
    return today.toISOString().split('T')[0];
  }

  get selectedCategory(): MenuCategory | undefined {
    return this.categories.find(c => c.id === this.selectedCategoryId);
  }

  get currentSideMenu(): SideMenuItem[] {
    switch (this.selectedTopMenu) {
      case 'Home':
        return this.homeSideMenu;
      case 'Menu':
        return this.menuSideMenu;
      case 'Offers':
        return this.offersSideMenu;
      case 'Reservations':
        return this.reservationsSideMenu;
      case 'Gallery':
        return this.gallerySideMenu;
      case 'Contact':
        return this.contactSideMenu;
      case 'About':
        return this.aboutSideMenu;
      default:
        return this.homeSideMenu;
    }
  }

  get sideMenuTitle(): string {
    switch (this.selectedTopMenu) {
      case 'Home':
        return 'Home Sections';
      case 'Menu':
        return 'Menu Categories';
      case 'Offers':
        return 'Offer Types';
      case 'Reservations':
        return 'Reservation Options';
      case 'Gallery':
        return 'Gallery Sections';
      case 'Contact':
        return 'Contact Options';
      case 'About':
        return 'About Sections';
      default:
        return 'Sections';
    }
  }

  get selectedSideMenuItemData(): SideMenuItem | undefined {
    return this.currentSideMenu.find(item => item.id === this.selectedSideMenuItem);
  }

  selectTopMenu(menu: string): void {
    this.selectedTopMenu = menu;
    this.selectedSideMenuItem = '';
    this.selectedItem = null;
    if (menu === 'Menu') {
      this.selectedCategoryId = 'starters';
      this.selectedSideMenuItem = 'starters';
    }
  }

  selectCategory(id: string): void {
    this.selectedCategoryId = id;
    this.selectedTopMenu = 'Menu';
    this.selectedSideMenuItem = id;
    this.selectedItem = null;
  }

  selectSideMenuItem(item: SideMenuItem): void {
    this.selectedSideMenuItem = item.id;
    if (this.selectedTopMenu === 'Menu') {
      this.selectCategory(item.id);
    }
  }

  selectItem(item: MenuItem): void {
    this.selectedItem = item;
  }

  getRatingStars(rating: number): string {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let stars = '⭐'.repeat(fullStars);
    if (hasHalfStar) {
      stars += '⭐';
    }
    return stars;
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
