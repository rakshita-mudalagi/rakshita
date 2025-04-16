// app/deals/page.tsx
import Link from "next/link";

const deals = [
  {
    id: 1,
    title: "50% Off Men's Jackets",
    description: "Winter Collection - Limited Time Offer!",
    image: "https://via.placeholder.com/600x400?text=Men+Jackets",
    discount: "50% OFF",
    slug: "mens-jackets",
  },
  {
    id: 2,
    title: "Up to 40% Off Electronics",
    description: "Grab the best tech deals today!",
    image: "https://via.placeholder.com/600x400?text=Electronics+Sale",
    discount: "40% OFF",
    slug: "electronics-sale",
  },
  {
    id: 3,
    title: "Buy 1 Get 1 Free - Shoes",
    description: "Only this weekend. Don't miss out!",
    image: "https://via.placeholder.com/600x400?text=Shoes+BOGO",
    discount: "BOGO",
    slug: "bogo-shoes",
  },
];

export default function DealsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
        🔥 Today's Hot Deals
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {deals.map((deal) => (
          <Link
            key={deal.id}
            href={`/deals/${deal.slug}`}
            className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300"
          >
            <div className="relative">
              <img
                src={deal.image}
                alt={deal.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-2 left-2 bg-red-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                {deal.discount}
              </span>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {deal.title}
              </h2>
              <p className="text-gray-600 text-sm">{deal.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
