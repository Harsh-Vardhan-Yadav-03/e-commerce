import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { useCart } from '@/contexts/CartContext';
import { ShoppingCart } from 'lucide-react';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <Card className="group overflow-hidden hover:shadow-medium transition-all duration-300">
      <CardContent className="p-0">
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start p-4 gap-2">
        <div className="w-full">
          <p className="text-sm text-muted-foreground">{product.category}</p>
          <h3 className="font-semibold text-lg">{product.name}</h3>
          <p className="text-lg font-bold text-primary mt-1">₹{product.price}</p>
        </div>
        <Button
          variant="cart"
          className="w-full"
          onClick={() => addToCart(product)}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
