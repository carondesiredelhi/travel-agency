'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';

export default function ConditionalLayout({ children }) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith('/admin');
  const isBookingSuccessRoute = pathname.startsWith('/booking/success');

  if (isAdminRoute || isBookingSuccessRoute) {
    // For admin routes and booking success, render only the children without header and footer
    return (
      <div className="min-h-screen">
        {children}
      </div>
    );
  }

  // For all other routes, render with header and footer
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
