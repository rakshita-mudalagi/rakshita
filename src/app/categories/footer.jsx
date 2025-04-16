// components/Footer.tsx
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company */}
        <div>
          <h3 className="text-xl font-semibold mb-4">ShopEase</h3>
          <p className="text-sm">
            Your one-stop shop for all things fashion, tech, and lifestyle.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-white">Home</Link>
            </li>
            <li>
              <Link href="/categories" className="hover:text-white">Categories</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">Contact Us</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">About</Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Customer Support</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/faq" className="hover:text-white">FAQs</Link>
            </li>
            <li>
              <Link href="/shipping" className="hover:text-white">Shipping Info</Link>
            </li>
            <li>
              <Link href="/returns" className="hover:text-white">Returns</Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-white">
              <Facebook size={20} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-white">
              <Instagram size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-white">
              <Twitter size={20} />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 py-4 text-center text-sm">
        &copy; {new Date().getFullYear()} ShopEase. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
// components/Footer.tsx
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

