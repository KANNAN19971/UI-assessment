import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Outlet, useLocation } from 'react-router-dom';
import { MENU_SIDEBAR } from '@/config/menu.config';
import { useMenu } from '@/hooks/use-menu';
import { useIsMobile } from '@/hooks/use-mobile';
import { useSettings } from '@/providers/settings-provider';
import { Footer } from './components/footer';

export function Demo1Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const { pathname } = useLocation();
  const { getCurrentItem } = useMenu(pathname);
  const item = getCurrentItem(MENU_SIDEBAR);
  const { settings, setOption } = useSettings();

  useEffect(() => {
    const bodyClass = document.body.classList;

    if (settings.layouts.demo1.sidebarCollapse) {
      bodyClass.add('sidebar-collapse');
    } else {
      bodyClass.remove('sidebar-collapse');
    }
  }, [settings]);

  useEffect(() => {
    setOption('layout', 'demo1');
  }, [setOption]);

  useEffect(() => {
    const bodyClass = document.body.classList;
    bodyClass.add('demo1');
    bodyClass.add('sidebar-fixed');
    bodyClass.add('header-fixed');

    const timer = setTimeout(() => {
      bodyClass.add('layout-initialized');
    }, 1000);

    return () => {
      bodyClass.remove('demo1');
      bodyClass.remove('sidebar-fixed');
      bodyClass.remove('header-fixed');
      bodyClass.remove('layout-initialized');
      clearTimeout(timer);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <Helmet>
        <title>{item?.title}</title>
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 w-full">
        {/* Navigation Bar */}
        <nav className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex items-center">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">M</span>
                </div>
                <span className="text-xl font-bold text-gray-900">Meikannan</span>
              </div>

              {/* Desktop Navigation Links */}
              <div className="hidden md:flex items-center space-x-8">
                <a href="/" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </a>
                <a href="/dashboard" className="text-primary bg-primary/10 px-3 py-2 rounded-md text-sm font-medium">
                  Dashboard
                </a>
                <a href="/chat" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                  Chat
                </a>
                <a href="/users" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                  Users
                </a>
                <a href="/orders" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                  Orders
                </a>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button 
                  onClick={toggleMobileMenu}
                  className="text-gray-700 hover:text-primary p-2"
                >
                  {isMobileMenuOpen ? (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
              <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
                  <a 
                    href="/" 
                    className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Home
                  </a>
                  <a 
                    href="/dashboard" 
                    className="text-primary bg-primary/10 block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Dashboard
                  </a>
                  <a 
                    href="/chat" 
                    className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Chat
                  </a>
                  <a 
                    href="/users" 
                    className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Users
                  </a>
                  <a 
                    href="/orders" 
                    className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Orders
                  </a>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" role="content">
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  );
}
