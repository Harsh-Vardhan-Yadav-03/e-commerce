import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import heroBanner from '@/assets/hero-banner.jpg';
import { ArrowRight, Truck, Shield, RotateCcw } from 'lucide-react';

const Home = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Offer Banner */}
      <div className="bg-gradient-to-r from-primary to-purple-600 text-white text-center py-3">
        <p className="font-bold text-lg">GET EXTRA 15% OFF ON EVERYTHING*</p>
        <p className="text-sm">Jump into the Weekend Sale Madness!</p>
      </div>

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src={heroBanner}
          alt="Hero Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Summer Collection 2024
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Discover the latest trends in athletic wear
          </p>
          <Link to="/products">
            <Button variant="hero" size="lg">
              Shop Now <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 rounded-lg bg-muted/50">
            <Truck className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Free & Fast Delivery</h3>
            <p className="text-muted-foreground">
              Free delivery on orders above ₹999
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-lg bg-muted/50">
            <Shield className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Secure Payments</h3>
            <p className="text-muted-foreground">
              100% secure payment methods
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-lg bg-muted/50">
            <RotateCcw className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Easy Returns</h3>
            <p className="text-muted-foreground">
              7-day hassle-free returns
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-muted-foreground">
            Discover our handpicked selection
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center">
          <Link to="/products">
            <Button variant="outline" size="lg">
              View All Products <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Sale Banner */}
      <section className="bg-gradient-to-r from-secondary to-orange-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Summer Sale - Up to 50% Off
          </h2>
          <p className="text-xl mb-8">
            Limited time offer on selected items
          </p>
          <Link to="/products">
            <Button variant="secondary" size="lg" className="bg-white text-secondary hover:bg-white/90">
              Shop Sale <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
