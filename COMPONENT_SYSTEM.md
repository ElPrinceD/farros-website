# Farros House Component System

This document outlines the comprehensive component system built for the Farros House restaurant website, designed for maximum reusability, maintainability, and consistency.

## 🏗️ Architecture Overview

The component system is organized into three main categories:

- **UI Components** (`/src/components/ui/`) - Basic building blocks
- **Layout Components** (`/src/components/layout/`) - Structural components
- **Form Components** (`/src/components/forms/`) - Form-specific components

## 📦 UI Components

### Button
A versatile button component with multiple variants and states.

```tsx
import { Button } from '../components/ui';

<Button 
  variant="primary" 
  size="lg" 
  loading={isLoading}
  icon={<PlusIcon className="h-4 w-4" />}
  fullWidth
>
  Add to Cart
</Button>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
- `size`: 'sm' | 'md' | 'lg' | 'xl'
- `loading`: boolean
- `icon`: React.ReactNode
- `iconPosition`: 'left' | 'right'
- `fullWidth`: boolean
- `animate`: boolean

### Input
Enhanced input component with validation and icon support.

```tsx
import { Input } from '../components/ui';

<Input
  label="Email Address"
  type="email"
  value={email}
  onChange={setEmail}
  error={emailError}
  helperText="We'll never share your email"
  icon={<EnvelopeIcon className="h-5 w-5" />}
/>
```

### Card
Flexible card component with multiple variants.

```tsx
import { Card } from '../components/ui';

<Card 
  variant="elevated" 
  padding="lg" 
  hover 
  animate
>
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</Card>
```

### Badge
Small status indicators with semantic colors.

```tsx
import { Badge } from '../components/ui';

<Badge variant="success" size="sm">Vegetarian</Badge>
<Badge variant="warning" size="md">Popular</Badge>
```

### Modal
Accessible modal component with backdrop and animations.

```tsx
import { Modal } from '../components/ui';

<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Confirm Action"
  size="md"
>
  <p>Modal content</p>
</Modal>
```

## 🏛️ Layout Components

### Container
Responsive container with consistent max-widths and padding.

```tsx
import { Container } from '../components/layout';

<Container size="lg" padding="md">
  <h1>Page Content</h1>
</Container>
```

### Section
Semantic section wrapper with background and padding options.

```tsx
import { Section } from '../components/layout';

<Section background="charcoal" padding="xl">
  <h2>Hero Section</h2>
</Section>
```

### Grid
Responsive grid system with flexible column layouts.

```tsx
import { Grid } from '../components/layout';

<Grid cols={1} md={3} gap="lg">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Grid>
```

### Flex
Flexbox utility component for quick layouts.

```tsx
import { Flex } from '../components/layout';

<Flex justify="between" align="center" gap="md">
  <span>Left</span>
  <span>Right</span>
</Flex>
```

## 📝 Form Components

### FormField
Unified form field component supporting text, email, tel, and textarea.

```tsx
import { FormField } from '../components/forms';

<FormField
  label="Full Name"
  name="name"
  value={name}
  onChange={setName}
  error={nameError}
  required
/>
```

### Select
Enhanced select component with options array.

```tsx
import { Select } from '../components/forms';

<Select
  label="Country"
  value={country}
  onChange={setCountry}
  options={countryOptions}
  placeholder="Select a country"
/>
```

### RadioGroup
Accessible radio button group component.

```tsx
import { RadioGroup } from '../components/forms';

<RadioGroup
  name="orderType"
  label="Order Type"
  options={orderTypeOptions}
  value={orderType}
  onChange={setOrderType}
/>
```

## 🎨 Design System

### Color Palette
- **Primary**: `#B21F2D` (fh-red)
- **Accent**: `#F08A3D` (fh-accent)
- **Charcoal**: `#222222` (fh-charcoal)
- **Cream**: `#FFF8F0` (fh-cream)

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

### Spacing Scale
- **sm**: 0.5rem (8px)
- **md**: 1rem (16px)
- **lg**: 1.5rem (24px)
- **xl**: 2rem (32px)

## 🚀 Usage Examples

### Complete Form
```tsx
import { 
  Container, 
  Section, 
  Card, 
  FormField, 
  Select, 
  RadioGroup, 
  Button 
} from '../components';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    message: ''
  });

  return (
    <Section background="white" padding="xl">
      <Container>
        <Card padding="lg">
          <h2>Contact Us</h2>
          <Grid cols={1} md={2} gap="md">
            <FormField
              label="Name"
              name="name"
              value={formData.name}
              onChange={(value) => setFormData(prev => ({ ...prev, name: value }))}
              required
            />
            <FormField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={(value) => setFormData(prev => ({ ...prev, email: value }))}
              required
            />
          </Grid>
          <FormField
            label="Message"
            name="message"
            type="textarea"
            value={formData.message}
            onChange={(value) => setFormData(prev => ({ ...prev, message: value }))}
            className="mt-4"
          />
          <Flex justify="end" className="mt-6">
            <Button variant="primary" size="lg">
              Send Message
            </Button>
          </Flex>
        </Card>
      </Container>
    </Section>
  );
};
```

### Product Card
```tsx
import { Card, Badge, Button } from '../components';

const ProductCard = ({ product }) => (
  <Card hover animate className="cursor-pointer">
    <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold">{product.name}</h3>
        <span className="text-fh-red font-bold">{formatPrice(product.price)}</span>
      </div>
      <p className="text-gray-600 text-sm mb-4">{product.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {product.isVegetarian && <Badge variant="success" size="sm">Vegetarian</Badge>}
        {product.isPopular && <Badge variant="accent" size="sm">Popular</Badge>}
      </div>
      <Button variant="primary" fullWidth icon={<PlusIcon className="h-4 w-4" />}>
        Add to Cart
      </Button>
    </div>
  </Card>
);
```

## 🔧 Best Practices

### 1. Component Composition
Always compose components using the base components rather than creating custom styles.

```tsx
// ✅ Good
<Card padding="lg">
  <Flex justify="between" align="center">
    <h3>Title</h3>
    <Button variant="outline" size="sm">Action</Button>
  </Flex>
</Card>

// ❌ Avoid
<div className="bg-white p-6 rounded-lg shadow-lg">
  <div className="flex justify-between items-center">
    <h3>Title</h3>
    <button className="btn-outline">Action</button>
  </div>
</div>
```

### 2. Consistent Spacing
Use the layout components for consistent spacing rather than custom margins/padding.

```tsx
// ✅ Good
<Section padding="xl">
  <Container>
    <Grid cols={1} md={2} gap="lg">
      {/* content */}
    </Grid>
  </Container>
</Section>

// ❌ Avoid
<div className="py-24">
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* content */}
    </div>
  </div>
</div>
```

### 3. Form Validation
Use the built-in error handling in form components.

```tsx
// ✅ Good
<FormField
  label="Email"
  name="email"
  type="email"
  value={email}
  onChange={setEmail}
  error={emailError}
  helperText="We'll never share your email"
/>

// ❌ Avoid
<div>
  <label>Email</label>
  <input type="email" value={email} onChange={handleEmailChange} />
  {emailError && <span className="text-red-500">{emailError}</span>}
</div>
```

## 📱 Responsive Design

All components are built with mobile-first responsive design:

- **Grid**: Automatically adjusts columns based on screen size
- **Container**: Responsive max-widths and padding
- **Button**: Scales appropriately on different screen sizes
- **Form**: Stacks vertically on mobile, side-by-side on desktop

## ♿ Accessibility

Components include built-in accessibility features:

- **Semantic HTML**: Proper use of semantic elements
- **ARIA Labels**: Screen reader support
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Management**: Proper focus handling in modals
- **Color Contrast**: Meets WCAG guidelines

## 🎯 Performance

- **Tree Shaking**: Only import what you need
- **Lazy Loading**: Components are code-split
- **Memoization**: Optimized re-renders
- **Bundle Size**: Minimal impact on bundle size

## 🔄 Migration Guide

To migrate existing components to the new system:

1. **Replace custom buttons** with the `Button` component
2. **Replace form inputs** with `FormField` or `Input` components
3. **Replace custom cards** with the `Card` component
4. **Replace layout divs** with `Container`, `Section`, `Grid`, or `Flex`
5. **Update imports** to use the new component system

## 📚 Demo

Visit `/components` to see all components in action with live examples and code snippets.

## 🤝 Contributing

When adding new components:

1. Follow the established patterns
2. Include TypeScript types
3. Add comprehensive props
4. Include accessibility features
5. Write documentation
6. Add to the demo page

This component system provides a solid foundation for building consistent, maintainable, and accessible user interfaces across the Farros House website.
