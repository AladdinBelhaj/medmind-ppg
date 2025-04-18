import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { AlertCircle, Save, User } from 'lucide-react';

const Profile = () => {
  const { user, logout } = useAuth();
  const [displayName, setDisplayName] = useState(user?.displayName || '');
  const [isEditing, setIsEditing] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [saveError, setSaveError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // This would connect to your API to update the user profile
    try {
      // Mock successful API call
      setTimeout(() => {
        setSaveSuccess(true);
        setIsEditing(false);
        setTimeout(() => setSaveSuccess(false), 3000);
      }, 500);
    } catch (error) {
      setSaveError('Failed to update profile. Please try again.');
    }
  };

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 max-w-3xl">
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="bg-blue-600 px-4 py-5 sm:px-6">
          <h1 className="text-xl leading-6 font-bold text-white">Your Profile</h1>
          <p className="mt-1 max-w-2xl text-sm text-blue-100">
            Manage your personal information and view your saved histories
          </p>
        </div>
        
        <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
          {saveSuccess && (
            <div className="bg-green-50 p-4 rounded-md mb-6">
              <p className="text-sm text-green-700">Profile updated successfully!</p>
            </div>
          )}
          
          {saveError && (
            <div className="bg-red-50 p-4 rounded-md mb-6 flex items-start">
              <AlertCircle className="h-5 w-5 text-red-400 mt-0.5 mr-3" />
              <p className="text-sm text-red-700">{saveError}</p>
            </div>
          )}
          
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 rounded-full p-6 inline-flex items-center justify-center">
              <User size={48} className="text-gray-500" />
            </div>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    disabled
                    value={user?.email}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm 
                              border-gray-300 rounded-md bg-gray-50"
                  />
                </div>
              </div>
              
              <div className="sm:col-span-3">
                <label htmlFor="display-name" className="block text-sm font-medium text-gray-700">
                  Display name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="display-name"
                    id="display-name"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    disabled={!isEditing}
                    className={`shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm 
                              border-gray-300 rounded-md ${!isEditing ? 'bg-gray-50' : 'bg-white'}`}
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex justify-end">
              {!isEditing ? (
                <button
                  type="button"
                  onClick={() => setIsEditing(true)}
                  className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm 
                            text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Edit profile
                </button>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium 
                              text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 
                              focus:ring-blue-500"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm 
                              text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 
                              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    Save
                  </button>
                </>
              )}
            </div>
          </form>
        </div>
        
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <h2 className="text-lg leading-6 font-medium text-gray-900">Your MedMind History</h2>
          <div className="mt-4">
            {/* This would fetch from your backend API */}
            <div className="bg-gray-50 rounded-md p-6 text-center">
              <p className="text-gray-500 text-sm">No saved histories found.</p>
              <p className="text-gray-700 mt-2">
                Start a consultation to see your history here.
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 px-4 py-4 sm:px-6 bg-gray-50">
          <button
            onClick={() => logout()}
            className="w-full text-center text-sm text-red-600 hover:text-red-800 font-medium"
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;