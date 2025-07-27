import React from 'react';
import { Link } from 'react-router-dom';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-body">
      {/* Navigation */}
      <nav className="relative z-50 px-6 py-4 bg-white dark:bg-dark-1 border-b border-gray-200 dark:border-dark-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">Meikannan</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors duration-200">
              Features
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors duration-200">
              Pricing
            </a>
            <a href="#about" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors duration-200">
              About
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              to="/dashboard"
              className="px-6 py-2 text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors duration-200 font-medium"
            >
              Sign In
            </Link>
            <Link
              to="/dashboard"
              className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all duration-200 shadow-lg hover:shadow-xl font-medium"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 py-20 md:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-dark-2 dark:via-dark-1 dark:to-dark-3">
        <div className="max-w-7xl mx-auto text-center">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
          </div>

          {/* Main Content */}
          <div className="relative z-10">
        
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Lorem Ipsum
              <span className="block text-primary">
                Dolor Sit Amet
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>


            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 mt-5 gap-8 max-w-4xl mx-auto">
              <div className="text-center p-6 bg-white dark:bg-dark-2 rounded-2xl shadow-lg border border-gray-200 dark:border-dark-3">
                <div className="text-4xl font-bold text-primary mb-2">10K+</div>
                <div className="text-gray-600 dark:text-gray-400">Lorem ipsum dolor</div>
              </div>
              <div className="text-center p-6 bg-white dark:bg-dark-2 rounded-2xl shadow-lg border border-gray-200 dark:border-dark-3">
                <div className="text-4xl font-bold text-primary mb-2">50M+</div>
                <div className="text-gray-600 dark:text-gray-400">Consectetur adipiscing</div>
              </div>
              <div className="text-center p-6 bg-white dark:bg-dark-2 rounded-2xl shadow-lg border border-gray-200 dark:border-dark-3">
                <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-gray-600 dark:text-gray-400">Sed do eiusmod</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-20 bg-white dark:bg-dark-1">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Lorem Ipsum Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 dark:border-primary/30">
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Lorem Ipsum Dolor</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-secondary/5 to-accent/5 border border-secondary/20 dark:border-secondary/30">
              <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Consectetur Adipiscing</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-accent/5 to-primary/5 border border-accent/20 dark:border-accent/30">
              <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Sed Do Eiusmod</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Lorem Ipsum?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
          </p>
          <Link
            to="/dashboard"
            className="inline-block px-8 py-4 bg-white text-primary rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl text-lg font-semibold"
          >
            Get Started Free
          </Link>
        </div>
      </section>

             {/* Footer */}
       <footer className="px-6 py-6 bg-gray-900 text-gray-400">
         <div className="max-w-7xl mx-auto">
           <div className="flex flex-col md:flex-row justify-between items-center">
            

           </div>
           <div className="mt-4 pt-4 border-t border-gray-800 text-center">
             <p className="text-xs">&copy; 2025 Meikannan. Lorem ipsum dolor sit amet.</p>
           </div>
         </div>
       </footer>
    </div>
  );
} 