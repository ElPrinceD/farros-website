import React from 'react';
import ImageCard from '../components/ui/ImageCard';
import SimpleImageCard from '../components/ui/SimpleImageCard';
import { Container, Section, Grid } from '../components/layout';

const ImageCardDemo: React.FC = () => {
  const sampleData = [
    {
      image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=300&fit=crop",
      title: "White Fort Coffee",
      location: "Gaziosmanpaşa (Söğüt Caddesi)",
      distance: "1 mi",
      hours: "8.00-16.00",
      rating: 4.5,
      reviewCount: 20,
      tags: ["Burger", "Tavuk", "FastFood"]
    },
    {
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=300&fit=crop",
      title: "Mediterranean Bistro",
      location: "Downtown District",
      distance: "0.5 mi",
      hours: "9.00-22.00",
      rating: 4.8,
      reviewCount: 45,
      tags: ["Mediterranean", "Fresh", "Healthy"]
    },
    {
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
      title: "Artisan Bakery",
      location: "Historic Quarter",
      distance: "2.1 mi",
      hours: "7.00-18.00",
      rating: 4.3,
      reviewCount: 32,
      tags: ["Bakery", "Organic", "Local"]
    }
  ];

  const handleFavorite = (isFavorited: boolean) => {
    console.log('Favorite toggled:', isFavorited);
  };

  const handleCheck = () => {
    console.log('Check button clicked');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Section background="gray" padding="xl">
        <Container>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-playfair font-bold text-fh-charcoal mb-4">
              Image Card Component Demo
            </h1>
            <p className="text-xl text-gray-600">
              Replicating the exact UI design from the reference image
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Original ImageCard</h2>
            <Grid cols={1} md={2} lg={3} gap="lg">
              {sampleData.map((item, index) => (
                <ImageCard
                  key={index}
                  image={item.image}
                  title={item.title}
                  location={item.location}
                  distance={item.distance}
                  hours={item.hours}
                  rating={item.rating}
                  reviewCount={item.reviewCount}
                  tags={item.tags}
                  onFavorite={handleFavorite}
                  onCheck={handleCheck}
                />
              ))}
            </Grid>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Simplified ImageCard</h2>
            <Grid cols={1} md={2} lg={3} gap="lg">
              {sampleData.map((item, index) => (
                <SimpleImageCard
                  key={`simple-${index}`}
                  image={item.image}
                  title={item.title}
                  location={item.location}
                  distance={item.distance}
                  hours={item.hours}
                  rating={item.rating}
                  reviewCount={item.reviewCount}
                  tags={item.tags}
                />
              ))}
            </Grid>
          </div>

          {/* Code Example */}
          <div className="mt-16 bg-gray-900 rounded-lg p-6 text-white">
            <h3 className="text-xl font-semibold mb-4">Usage Example:</h3>
            <pre className="text-sm overflow-x-auto">
{`import ImageCard from '../components/ui/ImageCard';

<ImageCard
  image="https://example.com/image.jpg"
  title="White Fort Coffee"
  location="Gaziosmanpaşa (Söğüt Caddesi)"
  distance="1 mi"
  hours="8.00-16.00"
  rating={4.5}
  reviewCount={20}
  tags={["Burger", "Tavuk", "FastFood"]}
  onFavorite={(isFavorited) => console.log('Favorite:', isFavorited)}
  onCheck={() => console.log('Check clicked')}
/>`}
            </pre>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default ImageCardDemo;
