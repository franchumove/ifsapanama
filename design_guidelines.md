# IFSA PANAMÁ - Design Guidelines

## Design Approach
**Reference-Based Approach**: Construction/industrial sector with focus on trust and control. Draw inspiration from enterprise-grade B2B platforms that emphasize credibility, precision, and professionalism. Think Stripe's restraint + linear minimalism with industrial photography.

## Core Design Principles
1. **Minimalista Industrial**: Clean, controlled aesthetic that communicates precision and expertise
2. **Photo-Driven Authority**: Heavy use of real construction photography (machinery, site work, topography, personnel)
3. **Gold as Signal**: Use gold (#C9A227) exclusively for CTAs, icons, accents, and numbers - never for body text
4. **Control & Clarity**: Every element serves to reduce perceived risk and communicate competence

## Color System

### Primary Palette
- **Black**: `#0B0B0B` - Hero backgrounds, header, strong text, footer
- **Gold**: `#C9A227` - CTAs, icons, accents, numbers, lines (signals only)
- **White**: `#FFFFFF` - Reading backgrounds, cards
- **Light Gray**: `#F5F5F5` - Alternating sections
- **Text Gray**: `#2B2B2B` - Body text

### Usage Rules
- Gold reserved for actionable elements and visual hierarchy markers
- Black backgrounds for hero and footer create visual weight
- Alternate white and light gray sections for rhythm
- High contrast for readability and professional appearance

## Typography

### Font Families (Google Fonts)
- **Headers**: Montserrat or Poppins (weights: 700/800)
- **Body**: Inter (weights: 400/500)

### Hierarchy
- **H1**: Bold, commanding presence in hero sections
- **H2**: Section titles with clear visual break
- **H3**: Card titles and subsection headers
- **Body**: Inter 400 for readability, 500 for emphasis
- **Numbers/Stats**: Gold color, bold weight for impact

## Layout System

### Spacing Scale (Tailwind)
Primary spacing units: `2, 4, 6, 8, 12, 16, 20, 24`
- Tight spacing: `p-2, m-4` for compact elements
- Standard: `p-6, p-8` for cards and components
- Generous: `py-12, py-16, py-20` for section padding
- Extra generous: `py-24, py-32` for major section breaks

### Grid Structure
- **Desktop**: Max-width containers `max-w-7xl` with `px-8`
- **Cards Grid**: 3 columns on desktop, 2 on tablet, 1 on mobile
- **Content**: `max-w-prose` for text-heavy sections
- **Asymmetric layouts**: 2-column splits (60/40 or 50/50) for capabilities/services

## Component Library

### Cards
- Subtle border: `border border-gray-200`
- Soft shadow: `shadow-sm hover:shadow-md`
- Rounded corners: `rounded-lg`
- White background over gray sections
- Padding: `p-6 md:p-8`

### Buttons
- **Primary (Gold)**: Background `#C9A227`, white text, `px-8 py-3`, bold
- **Secondary (Outline)**: Border gold, gold text, transparent background
- **Hover**: Subtle darkening, no dramatic transforms
- Consistent sizing: `px-6 py-3` or `px-8 py-4` for emphasis

### CTAs
- Always visible "Solicitar visita técnica" in header (gold button)
- Floating WhatsApp button bottom-right (gold accent)
- CTA sections with black backgrounds and centered content

### Icons
- Use Heroicons or Lucide (consistent library)
- Gold color for emphasis icons
- Gray for secondary/decorative icons
- Size: `h-6 w-6` standard, `h-8 w-8` for emphasis

### Navigation
- Sticky header with subtle shadow on scroll
- Clean horizontal menu (max 7 items)
- Gold CTA button stands out in header
- Mobile: hamburger menu, full-screen overlay

## Photography Integration

### Required Image Placement
1. **Hero Section**: Large background image (overlay with black at 40-60% opacity)
2. **Project Cards**: Thumbnail for each project
3. **Project Gallery**: Multiple images per project detail page
4. **Capabilities Section**: Right-column image showing machinery/topography
5. **Service Sections**: Supporting imagery where appropriate

### Image Treatment
- Professional construction photography (machinery, sites, personnel)
- Consistent aspect ratios within sections
- Lazy loading for galleries
- Alt text for accessibility

## Animations & Interactions

### Animation Principles
- **Discrete and professional** - no exaggerated effects
- Fade-in on scroll for sections
- Subtle slide-up for cards
- Smooth transitions (200-300ms)
- Framer Motion for implementation

### Specific Animations
- Hero: Fade-in text with slight upward movement
- Cards: Fade-in on scroll, scale slightly on hover
- Buttons: Subtle color shift on hover
- Images: Lazy fade-in as they enter viewport

### Prohibited
- No distracting parallax effects
- No excessive bouncing or sliding
- No auto-playing carousels
- No flashy transitions

## Page-Specific Layouts

### Home Page
- Full-width hero with black background overlay
- Alternating white/gray sections for rhythm
- 3-card grids for features/benefits
- Project grid (6 featured projects)
- FAQ accordion with clean expansion
- Black background CTA finale

### Projects Page
- Clean filter bar at top
- Grid layout for project cards
- Clear category tags on each card
- Hover states reveal "Ver ficha" button

### Project Detail
- Large hero image
- Structured sections: Reto → Solución → Alcance → Resultado
- Image gallery (slider or grid)
- Sticky CTA sidebar/button

### Services/Capabilities
- Icon + title + description cards
- 2-column layouts where appropriate
- Bulleted lists for scope items
- Supporting imagery

## Responsive Behavior
- Mobile-first approach
- Breakpoints: `sm: 640px, md: 768px, lg: 1024px, xl: 1280px`
- Single column on mobile for all grids
- Simplified navigation on mobile (hamburger)
- Touch-friendly button sizes (min 44px height)

## Forms
- Clean, minimal styling
- Clear labels above inputs
- Validation with subtle error states
- Gold submit button
- WhatsApp alternative always visible

## Quality Standards
- High-contrast text (WCAG AA minimum)
- Consistent component spacing
- Real photography, no stock photos if possible
- Professional, trustworthy aesthetic throughout
- Every section has clear purpose - no filler content