import React, { useState } from 'react';
import { 
  Button, 
  Input, 
  Card, 
  Badge, 
  Modal,
  Container,
  Section,
  Grid,
  Flex,
  FormField,
  Select,
  RadioGroup
} from '../components';
import { PlusIcon, HeartIcon, StarIcon } from '@heroicons/react/24/outline';

const ComponentDemo: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    orderType: 'delivery'
  });

  const countryOptions = [
    { value: 'uk', label: 'United Kingdom' },
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' }
  ];

  const orderTypeOptions = [
    { value: 'delivery', label: 'Delivery', description: 'Delivered to your address' },
    { value: 'pickup', label: 'Pickup', description: 'Ready for pickup' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Section background="gray" padding="xl">
        <Container>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-playfair font-bold text-fh-charcoal mb-4">
              Component Library Demo
            </h1>
            <p className="text-xl text-gray-600">
              Reusable components for the Farros House website
            </p>
          </div>

          {/* Buttons Section */}
          <Card padding="lg" className="mb-8">
            <h2 className="text-2xl font-playfair font-semibold text-fh-charcoal mb-6">
              Buttons
            </h2>
            <Grid cols={2} md={4} gap="md">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="danger">Danger</Button>
              <Button variant="primary" loading>Loading</Button>
              <Button variant="primary" icon={<PlusIcon className="h-4 w-4" />}>
                With Icon
              </Button>
              <Button variant="primary" fullWidth>Full Width</Button>
            </Grid>
          </Card>

          {/* Form Components */}
          <Card padding="lg" className="mb-8">
            <h2 className="text-2xl font-playfair font-semibold text-fh-charcoal mb-6">
              Form Components
            </h2>
            <Grid cols={1} md={2} gap="lg">
              <div className="space-y-4">
                <FormField
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={(value) => setFormData(prev => ({ ...prev, name: value }))}
                  placeholder="Enter your name"
                />
                
                <FormField
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={(value) => setFormData(prev => ({ ...prev, email: value }))}
                  placeholder="Enter your email"
                />
                
                <Select
                  label="Country"
                  value={formData.country}
                  onChange={(e) => setFormData(prev => ({ ...prev, country: e.target.value }))}
                  options={countryOptions}
                  placeholder="Select a country"
                />
              </div>
              
              <div>
                <RadioGroup
                  name="orderType"
                  label="Order Type"
                  options={orderTypeOptions}
                  value={formData.orderType}
                  onChange={(value) => setFormData(prev => ({ ...prev, orderType: value }))}
                />
              </div>
            </Grid>
          </Card>

          {/* Badges and Cards */}
          <Card padding="lg" className="mb-8">
            <h2 className="text-2xl font-playfair font-semibold text-fh-charcoal mb-6">
              Badges & Cards
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Badges</h3>
                <Flex gap="md" wrap>
                  <Badge variant="default">Default</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="warning">Warning</Badge>
                  <Badge variant="error">Error</Badge>
                  <Badge variant="info">Info</Badge>
                  <Badge variant="accent">Accent</Badge>
                </Flex>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Card Variants</h3>
                <Grid cols={1} md={3} gap="md">
                  <Card variant="default" padding="md">
                    <h4 className="font-semibold mb-2">Default Card</h4>
                    <p className="text-gray-600 text-sm">This is a default card with standard styling.</p>
                  </Card>
                  
                  <Card variant="elevated" padding="md">
                    <h4 className="font-semibold mb-2">Elevated Card</h4>
                    <p className="text-gray-600 text-sm">This card has enhanced shadow and hover effects.</p>
                  </Card>
                  
                  <Card variant="outlined" padding="md">
                    <h4 className="font-semibold mb-2">Outlined Card</h4>
                    <p className="text-gray-600 text-sm">This card has a border instead of shadow.</p>
                  </Card>
                </Grid>
              </div>
            </div>
          </Card>

          {/* Layout Components */}
          <Card padding="lg" className="mb-8">
            <h2 className="text-2xl font-playfair font-semibold text-fh-charcoal mb-6">
              Layout Components
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Grid System</h3>
                <Grid cols={1} md={3} gap="md">
                  <div className="bg-fh-red text-white p-4 rounded text-center">1</div>
                  <div className="bg-fh-accent text-white p-4 rounded text-center">2</div>
                  <div className="bg-fh-charcoal text-white p-4 rounded text-center">3</div>
                </Grid>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Flex Layout</h3>
                <Flex justify="between" align="center" className="bg-gray-100 p-4 rounded">
                  <span>Left</span>
                  <span>Center</span>
                  <span>Right</span>
                </Flex>
              </div>
            </div>
          </Card>

          {/* Modal Demo */}
          <Card padding="lg" className="mb-8">
            <h2 className="text-2xl font-playfair font-semibold text-fh-charcoal mb-6">
              Modal Component
            </h2>
            <Button
              variant="primary"
              onClick={() => setIsModalOpen(true)}
              icon={<StarIcon className="h-4 w-4" />}
            >
              Open Modal
            </Button>
          </Card>

          {/* Interactive Demo */}
          <Card padding="lg">
            <h2 className="text-2xl font-playfair font-semibold text-fh-charcoal mb-6">
              Interactive Demo
            </h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                This demonstrates how components work together to create a cohesive user experience.
              </p>
              <Flex gap="md" wrap>
                <Button variant="primary" icon={<HeartIcon className="h-4 w-4" />}>
                  Like
                </Button>
                <Button variant="outline" icon={<PlusIcon className="h-4 w-4" />}>
                  Add to Cart
                </Button>
                <Button variant="ghost">
                  Learn More
                </Button>
              </Flex>
            </div>
          </Card>
        </Container>
      </Section>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Component Demo Modal"
        size="md"
      >
        <div className="space-y-4">
          <p className="text-gray-600">
            This is a modal component demonstrating the reusable UI system.
          </p>
          <Flex gap="md" justify="end">
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={() => setIsModalOpen(false)}>
              Confirm
            </Button>
          </Flex>
        </div>
      </Modal>
    </div>
  );
};

export default ComponentDemo;
