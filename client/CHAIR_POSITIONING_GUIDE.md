# Dynamic Chair Positioning Guide

## How Angular Class Binding Works

### Syntax Explanation:
```html
[class.chairs-2]="table.capacity === 2"
```

**Breakdown:**
- `[class.` - Angular's class binding syntax
- `chairs-2` - The CSS class name that will be applied
- `="table.capacity === 2"` - The condition that determines if the class is applied

**How it works:**
- If `table.capacity === 2` is **true**, the class `chairs-2` is added to the element
- If `table.capacity === 2` is **false**, the class `chairs-2` is removed from the element

**Multiple class bindings:**
```html
[class.chairs-2]="table.capacity === 2" 
[class.chairs-4]="table.capacity === 4" 
[class.chairs-6]="table.capacity === 6"
```

This means:
- When capacity is 2 → only `chairs-2` class is added
- When capacity is 4 → only `chairs-4` class is added
- When capacity is 6 → only `chairs-6` class is added
- Only ONE class will be active at a time (since capacity can only be one value)

---

## Implementation Steps

### Step 1: Ensure chairs-container has proper positioning

Add this CSS (if not already present):

```css
.chairs-container {
  position: relative;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

**Why?**
- `position: relative` - Allows absolute positioning of child chairs
- `width/height: 120px` - Defines the container size for positioning
- `display: flex` with `align-items/justify-content: center` - Centers the table in the container

### Step 2: Remove or comment out existing generic chair positioning

**Current CSS (lines 1446-1451):**
```css
.chairs-container > .chair:nth-of-type(1) { ... }
.chairs-container > .chair:nth-of-type(2) { ... }
.chairs-container > .chair:nth-of-type(3) { ... }
.chairs-container > .chair:nth-of-type(4) { ... }
.chairs-container > .chair:nth-of-type(5) { ... }
.chairs-container > .chair:nth-of-type(6) { ... }
```

**Action:** Comment these out or remove them, as they will conflict with capacity-specific positioning.

### Step 3: Add capacity-specific CSS rules

Add these CSS rules **AFTER** the `.chair` base styles:

```css
/* 2 Chairs - Face to face (opposite sides) */
.chairs-container.chairs-2 > .chair:nth-of-type(1) {
  animation-delay: 0s;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -100%) !important;
}

.chairs-container.chairs-2 > .chair:nth-of-type(2) {
  animation-delay: 0.2s;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%, 100%) !important;
}

/* 4 Chairs - One on each side (top, right, bottom, left) */
.chairs-container.chairs-4 > .chair:nth-of-type(1) {
  animation-delay: 0s;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -100%) !important;
}

.chairs-container.chairs-4 > .chair:nth-of-type(2) {
  animation-delay: 0.2s;
  top: 50%;
  right: 0%;
  transform: translate(100%, -50%) !important;
}

.chairs-container.chairs-4 > .chair:nth-of-type(3) {
  animation-delay: 0.4s;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%, 100%) !important;
}

.chairs-container.chairs-4 > .chair:nth-of-type(4) {
  animation-delay: 0.6s;
  top: 50%;
  left: 0%;
  transform: translate(-100%, -50%) !important;
}

/* 6 Chairs - Two on longer sides (top/bottom), one on each shorter side */
.chairs-container.chairs-6 > .chair:nth-of-type(1) {
  animation-delay: 0s;
  top: 0%;
  left: 35%;
  transform: translate(-50%, -100%) !important;
}

.chairs-container.chairs-6 > .chair:nth-of-type(2) {
  animation-delay: 0.15s;
  top: 0%;
  left: 65%;
  transform: translate(-50%, -100%) !important;
}

.chairs-container.chairs-6 > .chair:nth-of-type(3) {
  animation-delay: 0.3s;
  top: 50%;
  right: 0%;
  transform: translate(100%, -50%) !important;
}

.chairs-container.chairs-6 > .chair:nth-of-type(4) {
  animation-delay: 0.45s;
  bottom: 0%;
  left: 35%;
  transform: translate(-50%, 100%) !important;
}

.chairs-container.chairs-6 > .chair:nth-of-type(5) {
  animation-delay: 0.6s;
  bottom: 0%;
  left: 65%;
  transform: translate(-50%, 100%) !important;
}

.chairs-container.chairs-6 > .chair:nth-of-type(6) {
  animation-delay: 0.75s;
  top: 50%;
  left: 0%;
  transform: translate(-100%, -50%) !important;
}
```

---

## CSS Selector Explanation

### Selector Breakdown:
```css
.chairs-container.chairs-2 > .chair:nth-of-type(1)
```

**Parts:**
1. `.chairs-container` - Base container class
2. `.chairs-2` - Capacity-specific class (only when capacity === 2)
3. `>` - Direct child selector
4. `.chair` - Chair element
5. `:nth-of-type(1)` - First chair element

**Why use `>` (direct child)?**
- Ensures we only target chairs directly inside the container
- Prevents affecting nested elements

**Why use `:nth-of-type`?**
- Targets chairs by their position in the DOM
- Works with `*ngFor` which creates multiple chair elements

---

## Positioning Values Explained

### Transform Values:
- `translate(-50%, -100%)` - Moves chair up (above table)
- `translate(100%, -50%)` - Moves chair right (beside table)
- `translate(-50%, 100%)` - Moves chair down (below table)
- `translate(-100%, -50%)` - Moves chair left (beside table)

### Position Values:
- `top: 0%` - At the top edge
- `bottom: 0%` - At the bottom edge
- `left: 50%` - At horizontal center
- `left: 35%` / `left: 65%` - Spaced positions for multiple chairs
- `right: 0%` - At the right edge

---

## Testing Checklist

1. ✅ Table with 2 chairs → Chairs face each other (top/bottom)
2. ✅ Table with 4 chairs → Chairs on all 4 sides
3. ✅ Table with 6 chairs → 2 chairs on top, 2 on bottom, 1 on each side
4. ✅ Chairs don't overlap with table
5. ✅ Chairs maintain animation
6. ✅ No layout shifts when capacity changes

---

## Troubleshooting

### Issue: Chairs not positioning correctly
**Solution:** Ensure `.chairs-container` has `position: relative` and proper dimensions

### Issue: Chairs overlapping
**Solution:** Adjust `transform` values or spacing percentages (35%, 65%)

### Issue: Generic positioning still applying
**Solution:** Remove or comment out the generic `.chairs-container > .chair:nth-of-type()` rules

### Issue: Only one capacity working
**Solution:** Check that all three class bindings are in the HTML and CSS selectors match

---

## Complete Example

**HTML:**
```html
<div class="chairs-container" 
     [class.chairs-2]="table.capacity === 2" 
     [class.chairs-4]="table.capacity === 4" 
     [class.chairs-6]="table.capacity === 6">
  <div class="chair" *ngFor="let chair of getChairs(table.capacity); let i = index">
    {{ getChairEmoji() }}
  </div>
</div>
```

**CSS:**
```css
.chairs-container {
  position: relative;
  width: 120px;
  height: 120px;
}

.chair {
  position: absolute;
  /* base styles */
}

/* Capacity-specific positioning */
.chairs-container.chairs-2 > .chair:nth-of-type(1) { /* top */ }
.chairs-container.chairs-2 > .chair:nth-of-type(2) { /* bottom */ }
/* ... and so on */
```

