function Products() {
  const products = [
    { id: 1, name: "Sneakers", price: "$59" },
    { id: 2, name: "Running Shoes", price: "$75" },
    { id: 3, name: "Sandals", price: "$35" },
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.id} className="p-6 border rounded shadow hover:shadow-lg">
            <h3 className="text-lg font-semibold">{p.name}</h3>
            <p className="text-gray-600">{p.price}</p>
            <button className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
