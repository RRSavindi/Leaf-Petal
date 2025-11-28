import React, { useState, useEffect } from 'react';
import { User, Settings, Package, MapPin, Heart, LogOut, Edit3, Save, X, Camera, Upload } from 'lucide-react';
import bg2 from '../assets/image 2.png';

const DashboardPage = ({ user, setUser, setCurrentPage }) => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState({
    name: user?.name || 'John Doe',
    email: user?.email || 'john.doe@example.com',
    phone: user?.phone || '+94 77 123 4567',
    address: user?.address || '123 Main Street, Colombo, Sri Lanka',
    dateOfBirth: user?.dateOfBirth || '1990-01-01',
    gender: user?.gender || 'male',
    profilePicture: user?.profilePicture || null
  });

  const handleSaveProfile = () => {
    // Merge the edited profile into the existing user object (functional update to avoid stale state)
    setUser((prev) => ({ ...(prev || {}), ...editedProfile }));
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditedProfile({
      name: user?.name || 'John Doe',
      email: user?.email || 'john.doe@example.com',
      phone: user?.phone || '+94 77 123 4567',
      address: user?.address || '123 Main Street, Colombo, Sri Lanka',
      dateOfBirth: user?.dateOfBirth || '1990-01-01',
      gender: user?.gender || 'male',
      profilePicture: user?.profilePicture || null
    });
    setIsEditing(false);
  };

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const dataUrl = e.target.result;
        setEditedProfile((prev) => ({ ...prev, profilePicture: dataUrl }));
      };
      reader.readAsDataURL(file);
    }
  };

  const removeProfilePicture = () => {
    setEditedProfile({ ...editedProfile, profilePicture: null });
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('home');
  };

  return (
    <div
      className="min-h-screen py-8"
      style={{
        backgroundImage: `url(${bg2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 px-6 py-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center overflow-hidden">
                  {user?.profilePicture ? (
                    <img src={user.profilePicture} alt="avatar" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <User className="h-8 w-8 text-green-600" />
                    </div>
                  )}
                </div>
                <div className="text-white">
                  <h1 className="text-2xl font-bold">{editedProfile.name}</h1>
                  <p className="text-green-100">{editedProfile.email}</p>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>

          <div className="flex">
            {/* Sidebar */}
            <div className="w-64 bg-gray-50 p-6">
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    activeTab === 'profile' ? 'bg-green-100 text-green-700' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <User className="h-5 w-5" />
                  <span>My Profile</span>
                </button>
                <button
                  onClick={() => setActiveTab('orders')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    activeTab === 'orders' ? 'bg-green-100 text-green-700' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Package className="h-5 w-5" />
                  <span>My Orders</span>
                </button>
                <button
                  onClick={() => setActiveTab('addresses')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    activeTab === 'addresses' ? 'bg-green-100 text-green-700' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <MapPin className="h-5 w-5" />
                  <span>Addresses</span>
                </button>
                <button
                  onClick={() => setActiveTab('wishlist')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    activeTab === 'wishlist' ? 'bg-green-100 text-green-700' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Heart className="h-5 w-5" />
                  <span>Wishlist</span>
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    activeTab === 'settings' ? 'bg-green-100 text-green-700' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Settings className="h-5 w-5" />
                  <span>Settings</span>
                </button>
              </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6">
              {activeTab === 'profile' && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">My Profile</h2>
                    {!isEditing ? (
                      <button
                        onClick={() => setIsEditing(true)}
                        className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                      >
                        <Edit3 className="h-4 w-4" />
                        <span>Edit Profile</span>
                      </button>
                    ) : (
                      <div className="flex space-x-2">
                        <button
                          onClick={handleSaveProfile}
                          className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                        >
                          <Save className="h-4 w-4" />
                          <span>Save</span>
                        </button>
                        <button
                          onClick={handleCancelEdit}
                          className="flex items-center space-x-2 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
                        >
                          <X className="h-4 w-4" />
                          <span>Cancel</span>
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="bg-white rounded-lg shadow-sm p-6">
                    {/* Profile Picture Section */}
                    <div className="flex flex-col items-center mb-8">
                      <div className="relative">
                        <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200 border-4 border-white shadow-lg">
                          {editedProfile.profilePicture ? (
                            <img
                              src={editedProfile.profilePicture}
                              alt="Profile"
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-400 to-green-600">
                              <User className="w-16 h-16 text-white" />
                            </div>
                          )}
                        </div>
                        
                        {isEditing && (
                          <div className="absolute bottom-0 right-0">
                            <label
                              aria-label="Upload profile photo"
                              title="Upload photo"
                              className="cursor-pointer bg-white border-2 border-green-600 hover:border-green-700 text-green-700 rounded-full p-2 shadow-md transition-colors flex items-center justify-center"
                              style={{ transform: 'translate(25%, 25%)' }}
                            >
                              <Camera className="w-4 h-4" />
                              <input
                                type="file"
                                accept="image/*"
                                onChange={handleProfilePictureChange}
                                className="hidden"
                              />
                            </label>
                          </div>
                        )}
                      </div>
                      
                      <div className="text-center mt-4">
                        <h3 className="text-xl font-semibold text-gray-900">{editedProfile.name}</h3>
                        <p className="text-gray-600">{editedProfile.email}</p>
                        
                        {isEditing && editedProfile.profilePicture && (
                          <button
                            onClick={removeProfilePicture}
                            className="mt-2 text-red-600 hover:text-red-700 text-sm font-medium"
                          >
                            Remove Photo
                          </button>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                        {isEditing ? (
                          <input
                            type="text"
                            value={editedProfile.name}
                            onChange={(e) => setEditedProfile({ ...editedProfile, name: e.target.value })}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                          />
                        ) : (
                          <p className="text-gray-900 py-2">{editedProfile.name}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                        {isEditing ? (
                          <input
                            type="email"
                            value={editedProfile.email}
                            onChange={(e) => setEditedProfile({ ...editedProfile, email: e.target.value })}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                          />
                        ) : (
                          <p className="text-gray-900 py-2">{editedProfile.email}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                        {isEditing ? (
                          <input
                            type="tel"
                            value={editedProfile.phone}
                            onChange={(e) => setEditedProfile({ ...editedProfile, phone: e.target.value })}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                          />
                        ) : (
                          <p className="text-gray-900 py-2">{editedProfile.phone}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                        {isEditing ? (
                          <input
                            type="date"
                            value={editedProfile.dateOfBirth}
                            onChange={(e) => setEditedProfile({ ...editedProfile, dateOfBirth: e.target.value })}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                          />
                        ) : (
                          <p className="text-gray-900 py-2">{new Date(editedProfile.dateOfBirth).toLocaleDateString()}</p>
                        )}
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                        {isEditing ? (
                          <textarea
                            value={editedProfile.address}
                            onChange={(e) => setEditedProfile({ ...editedProfile, address: e.target.value })}
                            rows="3"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                          />
                        ) : (
                          <p className="text-gray-900 py-2">{editedProfile.address}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                        {isEditing ? (
                          <select
                            value={editedProfile.gender}
                            onChange={(e) => setEditedProfile({ ...editedProfile, gender: e.target.value })}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                          >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                          </select>
                        ) : (
                          <p className="text-gray-900 py-2 capitalize">{editedProfile.gender}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'orders' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">My Orders</h2>
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="text-center py-8">
                      <Package className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">No Orders Yet</h3>
                      <p className="text-gray-600 mb-4">You haven't placed any orders yet.</p>
                      <button
                        onClick={() => setCurrentPage('shop')}
                        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors"
                      >
                        Start Shopping
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'addresses' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Saved Addresses</h2>
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="text-center py-8">
                      <MapPin className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">No Saved Addresses</h3>
                      <p className="text-gray-600 mb-4">Add addresses to make checkout faster.</p>
                      <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors">
                        Add Address
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'wishlist' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">My Wishlist</h2>
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="text-center py-8">
                      <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">Your Wishlist is Empty</h3>
                      <p className="text-gray-600 mb-4">Save your favorite plants to buy them later.</p>
                      <button
                        onClick={() => setCurrentPage('shop')}
                        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors"
                      >
                        Browse Plants
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'settings' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Account Settings</h2>
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Privacy Settings</h3>
                        <div className="space-y-3">
                          <label className="flex items-center">
                            <input type="checkbox" className="rounded border-gray-300 text-green-600 focus:ring-green-500" />
                            <span className="ml-2 text-gray-700">Email notifications for orders</span>
                          </label>
                          <label className="flex items-center">
                            <input type="checkbox" className="rounded border-gray-300 text-green-600 focus:ring-green-500" />
                            <span className="ml-2 text-gray-700">SMS notifications for orders</span>
                          </label>
                          <label className="flex items-center">
                            <input type="checkbox" className="rounded border-gray-300 text-green-600 focus:ring-green-500" />
                            <span className="ml-2 text-gray-700">Marketing emails</span>
                          </label>
                        </div>
                      </div>
                      
                      <div className="border-t pt-6">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Danger Zone</h3>
                        <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors">
                          Delete Account
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;