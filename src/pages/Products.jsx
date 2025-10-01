import { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Footwear', 'Clothing', 'Accessories'];

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl text-muted-foreground">
            Discover our complete collection
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className="min-w-[120px]"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground">
              No products found in this category
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
