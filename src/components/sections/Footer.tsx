import React from 'react';
import Link from 'next/link';
import Container from '../common/Container';

export default function Footer() {
  return (
    <footer className="hidden md:block bg-transparent py-10 md:py-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zelly-text-tertiary text-sm">
            © 2026 Zelly Team. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/contact" className="text-zelly-text-tertiary hover:text-zelly-text-primary text-sm transition-colors">
              Contact
            </Link>
            <Link href="/privacy" className="text-zelly-text-tertiary hover:text-zelly-text-primary text-sm transition-colors">
              개인정보처리방침
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
