import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full text-center py-4 text-gray-500 text-sm mt-8 border-t border-gray-200">
      <p>© {new Date().getFullYear()} My Blog. All rights reserved.</p>
    </footer>
  );
}