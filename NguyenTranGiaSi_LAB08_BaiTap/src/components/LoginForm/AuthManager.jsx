import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Provider } from 'react-redux';
import { authStore } from './store';
import { login, logout, setUserInfo, setError } from './authSlice';

// Mô phỏng user data có thể đăng nhập
const mockUsers = [
  { username: 'admin', password: 'admin123' },
  { username: 'user', password: 'user123' },
];

const AuthComponent = () => {
  const { user, isLoggedIn, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [editMode, setEditMode] = useState(false);
  const [profileData, setProfileData] = useState({ name: '', email: '', avatar: '👤' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const foundUser = mockUsers.find(
      u => u.username === formData.username && u.password === formData.password
    );

    if (foundUser) {
      dispatch(login({ username: foundUser.username }));
      setFormData({ username: '', password: '' });
    } else {
      dispatch(setError('Invalid username or password'));
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    setEditMode(false);
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    dispatch(setUserInfo(profileData));
    setEditMode(false);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">User Authentication</h2>

      {!isLoggedIn ? (
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          
          {error && <p className="text-red-500">{error}</p>}
          
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
          
          <p className="text-sm text-gray-500">
            Try using username: "admin" with password: "admin123"
          </p>
        </form>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="text-4xl">{user.avatar || '👤'}</div>
            <div>
              <h3 className="text-xl font-semibold">Welcome, {user.name || user.username}!</h3>
              {user.email && <p className="text-gray-600">{user.email}</p>}
            </div>
          </div>
          
          {editMode ? (
            <form onSubmit={handleUpdateProfile} className="space-y-3 mt-4">
              <div>
                <label className="block text-sm font-medium">Display Name</label>
                <input
                  type="text"
                  name="name"
                  value={profileData.name}
                  onChange={handleProfileChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={profileData.email}
                  onChange={handleProfileChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              
              <div className="flex space-x-2">
                <button
                  type="submit"
                  className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
                >
                  Save Profile
                </button>
                <button
                  type="button"
                  onClick={() => setEditMode(false)}
                  className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <div className="flex space-x-2">
              <button
                onClick={() => setEditMode(true)}
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              >
                Edit Profile
              </button>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const AuthManager = () => (
  <Provider store={authStore}>
    <AuthComponent />
  </Provider>
);

export default AuthManager;