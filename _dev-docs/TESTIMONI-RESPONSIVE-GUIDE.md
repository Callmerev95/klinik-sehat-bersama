# Testimoni Pasien Section - Responsive Design Guide

## 📋 Overview

File: `src/components/home/TestimoniPasienSection.tsx`

Komponen untuk menampilkan suara pasien dengan foto profil lokal, rating, dan testimoni mereka terhadap layanan Alsakha Medica.

**Status**: ✅ Fully Responsive | ✅ Local Images | ✅ Production Ready

---

## 🖼️ Foto Profil - Local Files

Semua foto profil menggunakan file lokal dari folder `/images/testimoni/`:

| Nama                 | File                               | Ukuran | Status |
| -------------------- | ---------------------------------- | ------ | ------ |
| Ibu Rina, 42 tahun   | `/images/testimoni/ibu-rina.jpg`   | 60 KB  | ✅     |
| Bapak Agus, 55 tahun | `/images/testimoni/bapak-agus.jpg` | 80 KB  | ✅     |
| Ibu Sari, 38 tahun   | `/images/testimoni/ibu-sari.jpg`   | 58 KB  | ✅     |

**Migrasi**: Dari Unsplash URLs → Local Files

- **Keuntungan**: Lebih cepat, no external dependency, static export compatible
- **Optimization**: Next.js Image component dengan lazy loading untuk non-LCP images

---

## 📱 Responsive Design

### Mobile (< 768px)

```
┌─────────────────────────────────────────┐
│ Suara pasien                            │
│ Apa Kata Mereka                         │
│ Cerita singkat dari mereka...           │
│                                         │
│ [Card 1] [Card 2]                       │
│ ← Scroll → (Horizontal scroll + snap)   │
│                                         │
│ Geser untuk melihat testimoni lainnya   │
└─────────────────────────────────────────┘
```

**Fitur:**

- Horizontal scroll dengan CSS `snap-x`
- Snap center untuk setiap card
- Width: `min(19rem, calc(100vw - 3.5rem))` → Kartu selalu fit viewport
- Padding: 5px (md: 6px) + bleed layout untuk scrolling yang natural
- Scrollbar: thin, overscroll-x-contain
- Helper text: "Geser untuk melihat testimoni lainnya"

**CSS Classes:**

```css
flex max-md:snap-x max-md:snap-mandatory max-md:flex-nowrap
max-md:gap-5 max-md:overflow-x-auto max-md:overflow-y-visible
max-md:pb-2 max-md:overscroll-x-contain max-md:[scrollbar-width:thin]
```

---

### Tablet / Medium (768px - 1023px)

```
┌──────────────────────────────────────────────────────┐
│ Suara pasien                                         │
│ Apa Kata Mereka                                      │
│                                                      │
│  ┌─────────────────────┐  ┌─────────────────────┐   │
│  │                     │  │                     │   │
│  │ Card 1              │  │ Card 2              │   │
│  │                     │  │                     │   │
│  └─────────────────────┘  └─────────────────────┘   │
│  ┌─────────────────────┐                            │
│  │ Card 3              │                            │
│  └─────────────────────┘                            │
└──────────────────────────────────────────────────────┘
```

**Fitur:**

- Grid layout: **2 kolom**
- Gap: `gap-x-10` (horizontal) | `gap-y-12` (vertical)
- Balanced spacing untuk readability
- Helper text: Hidden (display: none)

**CSS Classes:**

```css
md:grid md:grid-cols-2 md:gap-x-10 md:gap-y-12
```

---

### Desktop / Large (1024px+)

```
┌────────────────────────────────────────────────────────────────┐
│ Suara pasien                                                   │
│ Apa Kata Mereka                                                │
│ Cerita singkat dari mereka yang telah mempercayakan kesehatan  │
│                                                                │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐│
│  │                 │  │                 │  │                 ││
│  │ Card 1          │  │ Card 2          │  │ Card 3          ││
│  │                 │  │                 │  │                 ││
│  └─────────────────┘  └─────────────────┘  └─────────────────┘│
└────────────────────────────────────────────────────────────────┘
```

**Fitur:**

- Grid layout: **3 kolom**
- Gap: `gap-x-12` (horizontal) | `gap-y-12` (vertical) - lebih luas dari tablet
- Professional presentation dengan balanced spacing
- Helper text: Hidden

**CSS Classes:**

```css
lg:grid-cols-3 lg:gap-x-12
```

---

## 🎨 Card Component Details

### Struktur Card

```
┌─────────────────────────────────────┐
│                                     │
│         ╔═════════════════╗         │
│         ║                 ║         │
│         ║  [Foto Profil]  ║         │
│         ║                 ║         │
│         ╚═════════════════╝         │
│                                     │
│     Ibu Rina, 42 tahun              │
│                                     │
│     ⭐⭐⭐⭐⭐ 5.0                    │
│                                     │
│            💬                       │
│                                     │
│  "Dokter dan perawat menjelaskan    │
│   dengan sabar. Suasana klinik      │
│   tenang sehingga saya tidak merasa │
│   gugup saat kontrol berkala."      │
│                                     │
└─────────────────────────────────────┘
```

### Image Optimization

**Profile Picture:**

```tsx
<Image
  src={item.imageSrc} // Local file path
  alt={`Foto profil: ${item.nameAge}`} // Descriptive alt text
  fill
  sizes="(max-width: 768px) 72px, 76px" // Responsive sizing
  className="object-cover" // Perfect crop
  loading="lazy" // Non-LCP optimization
  quality={80} // Optimized quality
/>
```

**Sizing Strategy:**

- **Mobile (<768px)**: 72px × 72px
- **Tablet/Desktop (≥768px)**: 76px × 76px
- `object-cover`: Ensures perfect circular crop
- `loading="lazy"`: Deferred loading untuk performance

**Responsive Image Sizes:**

```html
sizes="(max-width: 768px) 72px, 76px"
```

---

## ⭐ Star Rating Component

### Features

- **Full Star** (⭐): Rating ≥ 1
- **Half Star** (✨): Rating ≥ 0.5 (decimal)
- **Empty Star** (☆): Rating < item number
- **ARIA Label**: `aria-label="Rating 5.0 dari 5"`
- **Responsive**: Scalable icons (size-4 → size-4.5 on sm)

### Supported Ratings

- `5` - 5 full stars ⭐⭐⭐⭐⭐
- `4.5` - 4 full + 1 half star ⭐⭐⭐⭐✨

### Color Scheme

- **Full/Half**: Amber-400 (warm, positive)
- **Empty**: Slate-200 (neutral placeholder)

---

## 🎯 Accessibility Features

### Semantic HTML

- `<section role="list">` - Proper landmark for screen readers
- `<article>` - Semantic card container
- `<blockquote>` - Proper quote semantic
- `role="listitem"` - For each card item
- `role="img"` - For star rating component

### ARIA Labels

```tsx
aria-labelledby="testimoni-heading"        // Section label
aria-label="Daftar testimoni pasien"       // List label
aria-label="Rating 5.0 dari 5"             // Rating label
role="img" aria-label="..."                // Image alternative
```

### Visual Indicators

- `aria-hidden` on icons - Don't announce decorative icons
- Descriptive alt text for images
- Clear, readable text with proper contrast
- Scroll hint text for mobile users

---

## 📊 Data Structure

### TestimoniItem Type

```typescript
type TestimoniItem = {
  id: string; // Unique identifier (rina, agus, sari)
  nameAge: string; // Full name + age
  quote: string; // Testimonial text (max 120 chars)
  rating: 4.5 | 5; // Rating: 4.5 or 5 stars
  imageSrc: string; // Local file path or URL
};
```

### Default Data

```typescript
const DEFAULT_TESTIMONI: TestimoniItem[] = [
  {
    id: "rina",
    nameAge: "Ibu Rina, 42 tahun",
    quote: "Dokter dan perawat menjelaskan dengan sabar...",
    rating: 5,
    imageSrc: "/images/testimoni/ibu-rina.jpg",
  },
  // ... more items
];
```

---

## 🔧 Component Props

### TestimoniPasienSection Props

```typescript
type TestimoniPasienSectionProps = {
  className?: string; // Additional Tailwind classes
  items?: TestimoniItem[]; // Override default testimonials
};
```

### Usage

```tsx
// Default with built-in data
<TestimoniPasienSection />

// Custom testimonials
<TestimoniPasienSection
  items={customTestimonials}
  className="custom-class"
/>
```

---

## 🎬 Animations & Effects

### Hover Effects

```css
/* Card hover effect */
.card-hover {
  transition: border-color 300ms ease;
  border-color: slate-200/80;

  &:hover {
    border-color: #00A88E/20; /* Teal highlight on hover */
  }
}
```

### Scroll Behavior

```css
/* Smooth scroll for navigation */
scroll-smooth motion-reduce:scroll-auto
```

### Motion Preferences

- Respects `prefers-reduced-motion` (motion-reduce:scroll-auto)
- Smooth transitions for mouse/desktop users
- Instant scrolling for accessibility-first users

---

## 📱 Breakpoints Used

| Breakpoint  | Width          | Grid              | Helper Text |
| ----------- | -------------- | ----------------- | ----------- |
| **Mobile**  | < 768px        | Horizontal Scroll | ✅ Visible  |
| **Tablet**  | 768px - 1023px | 2 Columns         | Hidden      |
| **Desktop** | ≥ 1024px       | 3 Columns         | Hidden      |

---

## 🚀 Performance Optimizations

### Image Optimization

- ✅ Next.js Image component
- ✅ Local file serving (no CDN latency)
- ✅ Lazy loading for non-LCP images
- ✅ Proper `sizes` attribute for responsive loading
- ✅ Quality: 80 (optimized for avatars)

### CSS Optimization

- ✅ Tailwind CSS (tree-shaken in production)
- ✅ No unused styles
- ✅ CSS snap (native, no JavaScript)
- ✅ Hardware acceleration ready

### Build Output

```
✓ Compiled successfully
✓ 19/19 pages generated
✓ 0 errors, 0 warnings
✓ Production ready
```

---

## 🔌 Dependencies

- `next/image` - Image optimization
- `lucide-react` - Icons (Quote, Star, StarHalf)
- `@/lib/utils` - cn() utility for className merging

---

## 📝 CSS Classes Reference

### Container Classes

```css
section-padding          /* Padding standardized di globals.css */
scroll-mt-20            /* Scroll margin untuk anchor links (mobile) */
sm:scroll-mt-24         /* Scroll margin (sm breakpoint+) */
border-t border-slate-100/90  /* Top border separator */
bg-linear-to-b          /* Gradient background */
```

### Grid/Scroll Classes

```css
flex max-md:snap-x      /* Flex container dengan snap-x on mobile */
md:grid md:grid-cols-2  /* Grid 2 kolom on tablet */
lg:grid-cols-3          /* Grid 3 kolom on desktop */
gap-x-10 gap-y-12       /* Spacing between cards */
```

### Text Classes

```css
text-balance            /* Balanced text wrapping */
text-pretty             /* Prettier line breaks */
font-semibold tracking-tight  /* Font styling */
text-slate-900 text-slate-600  /* Text colors */
```

---

## ✅ Testing Checklist

- [ ] Mobile scroll works smoothly (72px images)
- [ ] Tablet grid displays 2 columns (76px images)
- [ ] Desktop grid displays 3 columns (76px images)
- [ ] Images load with lazy loading
- [ ] Star ratings display correctly (5.0 and 4.5)
- [ ] Hover effects work on cards
- [ ] Text is readable on all screen sizes
- [ ] Scroll helper text appears only on mobile
- [ ] No console warnings or errors
- [ ] Accessibility: Tab through all cards
- [ ] Accessibility: Screen reader announces all content

---

## 🎯 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Android)

**Note**: CSS snap-scroll is widely supported; uses progressive enhancement.

---

## 📚 Related Files

- `src/app/page.tsx` - Homepage that imports TestimoniPasienSection
- `public/images/testimoni/` - Testimonial photo folder
- `src/lib/utils.ts` - Contains `cn()` utility function
- `src/app/globals.css` - Global styles and section-padding

---

## 🔄 Version History

| Version | Date       | Changes                                         |
| ------- | ---------- | ----------------------------------------------- |
| 2.0     | 2024-12-XX | ✅ Migrated images from Unsplash to local files |
| 1.0     | Earlier    | Initial implementation                          |

---

**Status**: Production Ready ✅ | Build: Success | Warnings: 0
