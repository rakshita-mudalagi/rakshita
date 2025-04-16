'use client'

import { useState } from 'react';
import SearchFilter from '@/Components/SearchFilter'
import Header from "@/Components/Header";
import ProductCard from '@/Components/ProductCard';
import ProductModal from '@/Components/ProductModal';
import Image from "next/image";



const allProducts = [{
  id: '1',
  title: 'Trendy Kurti for Women',
  image: '/d1.jpg',
  price: 399,
  rating: 4.5,
},
{
  id: '2',
  title: 'Stylish Handbag Combo Set',
  image: '/a1.jpg',
  price: 699,
  rating: 4.2,
},
{
  id: '3',
  title: 'Designer Saree with Blouse',
  image: '/c3.jpg',
  price: 999,
  rating: 4.7,
},
{
  id: '4',
  title: 'Casual Men’s Shirt',
  image: '/c4.jpg',
  price: 499,
  rating: 4.1,
},
{
  id: '5',
  title: 'Women’s Fashion Sandals',
  image: '/d3.jpg',
  price: 349,
  rating: 4.3,
},
{
  id: '6',
  title: 'Ethnic Jewellery Set',
  image: '/d2.jpg',
  price: 259,
  rating: 4.6,
},];
;
export default function Home() {
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSearch = (query) => {
    const filtered = allProducts.filter(product =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };


  const products = [

  ];

  return (
    <>
     
      <div className="min-h-screen bg-gradient-to-br from-white to-pink-50 py-10 px-6">
        <div className="min-h-screen bg-gradient-to-br from-white to-pink-50 py-10 px-6">
          <h1 className="text-3xl font-bold text-center text-pink-700 mb-4">Featured Products</h1>
          <SearchFilter onSearch={handleSearch} />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          
          {selectedProduct && (
            <ProductModal
              product={selectedProduct}
              onClose={() => setSelectedProduct(null)}
            />
          )}
        </div>
      </div>
    </>

  );
}
