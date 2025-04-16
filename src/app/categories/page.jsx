// app/categories/page.tsx
import Link from "next/link";

const categories = [
  {
    id: 1,
    name: "Men's Fashion",
    slug: "mens-fashion",
    image: "s2.jpg",
  },
  {
    id: 2,
    name: "Women's Fashion",
    slug: "womens-fashion",
    image: "d3.jpg",
  },
  {
    id: 3,
    name: "Electronics",
    slug: "electronics",
    image: "s3.jpg",
  },
  {
    id: 4,
    name: "Home & Kitchen",
    slug: "home-kitchen",
    image: "s4.jpg",
  },
];

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-10 text-center">
        Shop by Category
      </h1>
      <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/categories/${category.slug}`}
            aria-label={`Go to ${category.name}`}
            className="block bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h2 className="text-xl font-semibold text-gray-700">
                {category.name}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
