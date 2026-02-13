# Icon Migration Guide

## Status
The application has been updated to use local icon assets from `assets/images/icons/` directory. The code structure is ready, but you need to add the actual icon image files.

## What's Been Done

1. ✅ Created `assets/images/icons/` directory
2. ✅ Updated code to use local asset paths
3. ✅ Added mobile responsive design
4. ✅ Added mobile menu toggle functionality
5. ✅ Side menu hidden by default on mobile, shows on hamburger click

## What You Need to Do

### Step 1: Download Icons
Download appropriate food/restaurant icons and save them in `client/src/assets/images/icons/` with the following naming convention:

**Category Icons:**
- `category-starters.png`
- `category-mains.png`
- `category-desserts.png`
- `category-drinks.png`
- `category-breads.png`
- `category-soups.png`
- `category-specials.png`
- `category-combos.png`

**Menu Item Icons:**
- `item-crispy-corn-chaat.png`
- `item-tandoori-paneer-bites.png`
- `item-chicken-65.png`
- ... (see `assets/images/icons/README.md` for full list)

**Feature Icons:**
- `feature-fine-dining.png`
- `feature-fresh-ingredients.png`
- ... (see `assets/images/icons/README.md` for full list)

**Side Menu Icons:**
- `side-overview.png`
- `side-features.png`
- ... (see `assets/images/icons/README.md` for full list)

**Social Media Icons:**
- `social-instagram.png`
- `social-twitter.png`
- `social-whatsapp.png`
- `social-location.png`

### Step 2: Icon Sources
You can download icons from:
- Unsplash: https://unsplash.com (search for food/restaurant images)
- Pexels: https://pexels.com
- Flaticon: https://flaticon.com (for icon-style images)
- Icons8: https://icons8.com

### Step 3: Icon Specifications
- Format: PNG (preferred) or JPG
- Size: 64x64px to 128x128px recommended
- Style: Food/restaurant themed, consistent style

## Mobile Responsive Features

✅ **Mobile Menu:**
- Hamburger menu button appears on screens < 900px
- Side menu slides in from left when hamburger is clicked
- Overlay appears behind menu
- Menu closes when item is selected or overlay is clicked

✅ **Responsive Breakpoints:**
- Desktop: > 1024px (full layout)
- Tablet: 768px - 1024px (adjusted layout)
- Mobile: < 768px (stacked layout, mobile menu)
- Small Mobile: < 480px (optimized for small screens)

✅ **Responsive Elements:**
- Header adapts to screen size
- Navigation scrolls horizontally on mobile
- Cards stack vertically on mobile
- Forms adapt to screen width
- Tables/grids adjust column count
- Text sizes scale appropriately

## Testing

After adding icons, test the application on:
1. Desktop browser (Chrome, Firefox, Edge)
2. Tablet (iPad, Android tablet)
3. Mobile (iPhone, Android phone)

Check:
- Icons load correctly
- Mobile menu works
- All layouts are responsive
- Touch interactions work
- No horizontal scrolling

## Notes

- If an icon file is missing, the image will show a broken image icon
- You can use placeholder images initially and replace them later
- All icon paths use relative paths from `assets/images/icons/`
- The application will work without icons, but they enhance the user experience

