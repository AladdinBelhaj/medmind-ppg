import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { StethoscopeIcon, Search, ArrowRight, Brain, Shield, Save } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Home = () => {
  const { isAuthenticated } = useAuth();
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle AI prompt submission - this would connect to your backend
    console.log('Prompt submitted:', prompt);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <StethoscopeIcon className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Understand your health</span>
              <span className="block text-blue-600">with AI assistance</span>
            </h1>
            
            <p className="mt-6 text-xl text-gray-600">
              Describe your symptoms and get AI-powered insights to better understand 
              your health concerns - all in seconds.
            </p>
            
            <div className="mt-10">
              <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
                <div className="flex rounded-md shadow-sm">
                  <div className="relative flex-grow focus-within:z-10">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      className="focus:ring-blue-500 focus:border-blue-500 block w-full rounded-none rounded-l-md pl-10 sm:text-sm border-gray-300 py-4"
                      placeholder="Describe your symptoms..."
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                    />
                  </div>
                  <button
                    type="submit"
                    className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-transparent text-sm font-medium rounded-r-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <span>Get Insights</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
                <p className="mt-3 text-sm text-gray-500">
                  {isAuthenticated ? (
                    'Your prompts will be saved to your account history.'
                  ) : (
                    <>
                      <Link to="/login" className="text-blue-600 hover:text-blue-500">
                        Sign in
                      </Link> or <Link to="/register" className="text-blue-600 hover:text-blue-500">
                        create an account
                      </Link> to save your history.
                    </>
                  )}
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              How MedMind helps you
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Get AI-powered health insights in seconds, not hours.
            </p>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="bg-blue-50 rounded-lg p-8 text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mx-auto">
                  <Brain className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-medium text-gray-900">
                  AI-Powered Analysis
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  Advanced algorithms analyze your symptoms and provide potential explanations.
                </p>
              </div>

              <div className="bg-blue-50 rounded-lg p-8 text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white mx-auto">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-medium text-gray-900">
                  Health Alerts
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  Get notified when symptoms might require immediate medical attention.
                </p>
              </div>

              <div className="bg-blue-50 rounded-lg p-8 text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600 text-white mx-auto">
                  <Save className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-medium text-gray-900">
                  Save Your History
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  Create an account to save your consultation history for future reference.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-white">
              Ready to understand your health better?
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              Start using MedMind today and get immediate health insights.
            </p>
            <div className="mt-8 flex justify-center">
              {isAuthenticated ? (
                <Link
                  to="/profile"
                  className="px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-8"
                >
                  View Profile
                </Link>
              ) : (
                <Link
                  to="/register"
                  className="px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-8"
                >
                  Create Free Account
                </Link>
              )}
              <button
                className="ml-4 px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-700 md:py-4 md:text-lg md:px-8"
                onClick={() => document.querySelector('input')?.focus()}
              >
                Try Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Trusted by thousands
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              See what our users have to say about MedMind
            </p>
          </div>

          <div className="mt-12 max-w-lg mx-auto grid gap-8 lg:grid-cols-3 lg:max-w-none">
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-blue-600">
                    <span className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </span>
                  </p>
                  <div className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">Quick and Helpful</p>
                    <p className="mt-3 text-base text-gray-600">
                      "MedMind quickly analyzed my symptoms and suggested I see a doctor. It was right - I needed antibiotics for an infection!"
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">JD</span>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      John Doe
                    </p>
                    <p className="text-sm text-gray-500">
                      March 16, 2025
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-blue-600">
                    <span className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </span>
                  </p>
                  <div className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">Peace of Mind</p>
                    <p className="mt-3 text-base text-gray-600">
                      "I was worried about some symptoms, but MedMind helped me understand they were likely just side effects from my medication."
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                      <span className="text-green-600 font-semibold">JS</span>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      Jane Smith
                    </p>
                    <p className="text-sm text-gray-500">
                      February 22, 2025
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-blue-600">
                    <span className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </span>
                  </p>
                  <div className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">Essential Tool</p>
                    <p className="mt-3 text-base text-gray-600">
                      "As someone with chronic conditions, MedMind helps me track my symptoms and know when I should contact my doctor."
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                      <span className="text-purple-600 font-semibold">RB</span>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      Robert Brown
                    </p>
                    <p className="text-sm text-gray-500">
                      January 8, 2025
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;