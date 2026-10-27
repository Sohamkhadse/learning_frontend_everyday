import React, { useState } from 'react';
import mountainLakeImg from './assets/mountain-lake.jpg';

export default function App() {
  const [mode, setMode] = useState('signup'); // 'signup' or 'login'
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [focusedField, setFocusedField] = useState('password');
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
  };

  const toggleMode = () => {
    setMode((prev) => (prev === 'signup' ? 'login' : 'signup'));
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 sm:p-6 md:p-10 bg-gradient-to-br from-[#edf2f7] via-[#e2e8f0] to-[#edf3f8]">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-100/50 rounded-full blur-3xl"></div>
      </div>

      {/* Main Floating Card */}
      <div className="relative w-full max-w-[1020px] bg-white rounded-[32px] md:rounded-[38px] shadow-[0_25px_70px_-15px_rgba(15,23,42,0.12),0_10px_30px_-10px_rgba(15,23,42,0.06)] overflow-hidden border border-white/80 transition-all duration-300">
        
        {/* Card Grid / Layout */}
        <div className="flex flex-col md:flex-row relative min-h-[580px] lg:min-h-[610px]">
          
          {/* LEFT COLUMN: Form & Content */}
          <div className="w-full md:w-[54%] lg:w-[52%] p-6 sm:p-9 md:p-11 lg:p-12 flex flex-col justify-between z-10 bg-white">
            
            {/* Top Navigation */}
            <div>
              <div className="flex items-center space-x-7 sm:space-x-10 mb-8 sm:mb-12">
                {/* Brand Logo */}
                <div className="flex items-center space-x-2.5 cursor-pointer select-none">
                  <div className="w-6 h-6 rounded-full bg-blue-600 shadow-[0_2px_8px_rgba(37,99,235,0.4)] flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white/30"></div>
                  </div>
                  <span className="text-[17px] font-bold text-gray-900 tracking-tight">
                    Anywhere <span className="font-semibold text-gray-800">app.</span>
                  </span>
                </div>

                {/* Nav Links */}
                <div className="flex items-center space-x-5 text-sm font-semibold text-gray-400">
                  <button 
                    type="button" 
                    className="hover:text-gray-800 transition-colors cursor-pointer"
                  >
                    Home
                  </button>
                  <button 
                    type="button" 
                    onClick={() => setMode('signup')}
                    className={`transition-colors cursor-pointer ${mode === 'signup' ? 'text-gray-800' : 'hover:text-gray-800'}`}
                  >
                    Join
                  </button>
                </div>
              </div>

              {/* Header Title Section */}
              <div className="mb-6 sm:mb-8">
                <span className="block text-[11px] font-extrabold uppercase tracking-[0.16em] text-gray-400 mb-2">
                  {mode === 'signup' ? 'Start for free' : 'Welcome back'}
                </span>
                
                <h1 className="text-3xl sm:text-[34px] lg:text-[37px] font-extrabold text-gray-900 tracking-tight leading-tight">
                  {mode === 'signup' ? (
                    <>
                      Create new account<span className="text-blue-600">.</span>
                    </>
                  ) : (
                    <>
                      Sign in to account<span className="text-blue-600">.</span>
                    </>
                  )}
                </h1>

                <div className="mt-2 text-[13px] font-medium text-gray-400 flex items-center">
                  <span>{mode === 'signup' ? 'Already A Member?' : "Don't have an account?"}</span>
                  <button
                    type="button"
                    onClick={toggleMode}
                    className="ml-1.5 text-blue-600 font-bold hover:text-blue-700 hover:underline transition-all cursor-pointer"
                  >
                    {mode === 'signup' ? 'Log In' : 'Sign Up'}
                  </button>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3.5 max-w-[430px]">
                {/* First Name & Last Name (visible in signup mode) */}
                {mode === 'signup' && (
                  <div className="grid grid-cols-2 gap-3.5">
                    {/* First name */}
                    <div
                      className={`relative px-4 py-2 rounded-2xl transition-all duration-200 ${
                        focusedField === 'firstName'
                          ? 'bg-white border border-blue-500 ring-2 ring-blue-500/20 shadow-sm'
                          : 'bg-[#f1f4f8] border border-transparent hover:bg-[#eaf0f6]'
                      }`}
                      onClick={() => setFocusedField('firstName')}
                    >
                      <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5 select-none">
                        First name
                      </label>
                      <div className="flex items-center justify-between">
                        <input
                          type="text"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          onFocus={() => setFocusedField('firstName')}
                          placeholder="First name"
                          className="w-full bg-transparent text-sm font-bold text-gray-900 outline-none placeholder:text-gray-400 placeholder:font-normal"
                        />
                        <div className="text-gray-400 ml-2 shrink-0">
                          {/* ID badge icon */}
                          <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect width="18" height="14" x="3" y="5" rx="3" />
                            <circle cx="8" cy="11" r="2" />
                            <path d="M14 9h3" />
                            <path d="M14 13h3" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Last name */}
                    <div
                      className={`relative px-4 py-2 rounded-2xl transition-all duration-200 ${
                        focusedField === 'lastName'
                          ? 'bg-white border border-blue-500 ring-2 ring-blue-500/20 shadow-sm'
                          : 'bg-[#f1f4f8] border border-transparent hover:bg-[#eaf0f6]'
                      }`}
                      onClick={() => setFocusedField('lastName')}
                    >
                      <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5 select-none">
                        Last name
                      </label>
                      <div className="flex items-center justify-between">
                        <input
                          type="text"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          onFocus={() => setFocusedField('lastName')}
                          placeholder="Last name"
                          className="w-full bg-transparent text-sm font-bold text-gray-900 outline-none placeholder:text-gray-400 placeholder:font-normal"
                        />
                        <div className="text-gray-400 ml-2 shrink-0">
                          {/* ID badge icon */}
                          <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect width="18" height="14" x="3" y="5" rx="3" />
                            <circle cx="8" cy="11" r="2" />
                            <path d="M14 9h3" />
                            <path d="M14 13h3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Email Input */}
                <div
                  className={`relative px-4 py-2 rounded-2xl transition-all duration-200 ${
                    focusedField === 'email'
                      ? 'bg-white border border-blue-500 ring-2 ring-blue-500/20 shadow-sm'
                      : 'bg-[#f1f4f8] border border-transparent hover:bg-[#eaf0f6]'
                  }`}
                  onClick={() => setFocusedField('email')}
                >
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5 select-none">
                    Email
                  </label>
                  <div className="flex items-center justify-between">
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      onFocus={() => setFocusedField('email')}
                      placeholder="Email address"
                      className="w-full bg-transparent text-sm font-bold text-gray-900 outline-none placeholder:text-gray-400 placeholder:font-normal"
                    />
                    <div className="text-gray-400 ml-2 shrink-0">
                      {/* Envelope icon */}
                      <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="18" height="14" x="3" y="5" rx="2" />
                        <path d="m3 7 8.35 5.22a1.2 1.2 0 0 0 1.3 0L21 7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Password Input (Styled as the focused field in the reference mockup) */}
                <div
                  className={`relative px-4 py-2 rounded-2xl transition-all duration-200 ${
                    focusedField === 'password'
                      ? 'bg-white border border-blue-500 ring-2 ring-blue-500/20 shadow-sm'
                      : 'bg-[#f1f4f8] border border-transparent hover:bg-[#eaf0f6]'
                  }`}
                  onClick={() => setFocusedField('password')}
                >
                  <label className="block text-[10px] font-bold text-blue-600 uppercase tracking-wider mb-0.5 select-none">
                    Password
                  </label>
                  <div className="flex items-center justify-between">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={formData.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                      onFocus={() => setFocusedField('password')}
                      placeholder="Password"
                      className="w-full bg-transparent text-sm font-bold text-gray-900 outline-none tracking-wider placeholder:text-gray-400 placeholder:font-normal placeholder:tracking-normal"
                    />
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowPassword(!showPassword);
                      }}
                      className="text-gray-400 hover:text-gray-600 ml-2 shrink-0 p-0.5 rounded cursor-pointer transition-colors"
                      title={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {/* Eye / Eye-off icon */}
                      {showPassword ? (
                        <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                          <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                          <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                          <line x1="2" x2="22" y1="2" y2="22" />
                        </svg>
                      ) : (
                        <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="3" />
                          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                {/* Success Notification */}
                {submitted && (
                  <div className="py-2 px-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold flex items-center space-x-2 animate-fadeIn">
                    <svg className="w-4 h-4 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      {mode === 'signup'
                        ? 'Account created successfully! Welcome aboard.'
                        : 'Welcome back! Logged in successfully.'}
                    </span>
                  </div>
                )}

                {/* Bottom Action Buttons */}
                <div className="pt-4 flex items-center space-x-3.5">
                  <button
                    type="button"
                    onClick={() => {
                      // Switch input focus or alternative login method
                      alert('Alternative sign in: Google / Apple / Passkey option');
                    }}
                    className="px-5 py-2.5 rounded-full text-[13px] font-bold text-gray-500 bg-[#edf2f7] hover:bg-gray-200 hover:text-gray-700 transition-all active:scale-95 cursor-pointer shadow-sm"
                  >
                    Change method
                  </button>

                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-full text-[13px] font-bold text-white bg-blue-600 hover:bg-blue-500 active:scale-95 transition-all shadow-[0_8px_20px_-3px_rgba(37,99,235,0.4)] cursor-pointer"
                  >
                    {mode === 'signup' ? 'Create account' : 'Sign in'}
                  </button>
                </div>
              </form>
            </div>

            {/* Bottom spacer / footer note */}
            <div className="mt-8 pt-2">
              <p className="text-[11px] text-gray-400">
                By continuing, you agree to Anywhere app's{' '}
                <a href="#terms" className="text-gray-500 hover:text-blue-600 underline">Terms</a> &amp;{' '}
                <a href="#privacy" className="text-gray-500 hover:text-blue-600 underline">Privacy Policy</a>.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Scenic Mountain Lake with Curvy Wave */}
          <div className="w-full md:w-[46%] lg:w-[48%] relative min-h-[300px] md:min-h-full overflow-hidden">
            {/* The Mountain Lake Image */}
            <img
              src={mountainLakeImg}
              alt="Mountain Lake scenery"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />

            {/* The SVG Mask / Cutout creating the smooth organic S-curve and dashed guideline */}
            <svg
              className="hidden md:block absolute top-0 left-0 h-full w-[160px] pointer-events-none z-10"
              viewBox="0 0 160 620"
              preserveAspectRatio="none"
              fill="none"
            >
              {/* White wave body expanding smoothly over the left edge of the image */}
              <path
                d="M 0,0 
                   L 0,620 
                   L 10,620 
                   C 35,530 8,430 45,350 
                   C 80,280 145,210 125,120 
                   C 112,65 50,30 20,0 
                   Z"
                fill="#ffffff"
              />

              {/* Decorative dashed contour line echoing the organic wave */}
              <path
                d="M 5,0 
                   C 32,28 92,60 102,115 
                   C 120,200 60,270 28,340 
                   C -5,420 20,520 -2,620"
                stroke="#cbd5e1"
                strokeWidth="1.5"
                strokeDasharray="5 5"
                fill="none"
              />
            </svg>

            {/* Subtle natural gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/5 pointer-events-none"></div>

            {/* Stylized Anywhere App Monogram Logo at Bottom-Right */}
            <div className="absolute bottom-7 right-8 z-20 flex items-center space-x-1.5 select-none pointer-events-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
              {/* Dot left */}
              <span className="w-2.5 h-2.5 rounded-full bg-white inline-block"></span>
              {/* Stylized Angled Bars */}
              <div className="flex items-center space-x-1 font-black text-white text-3xl tracking-tighter leading-none italic">
                <span>/</span>
                <span>/</span>
                <span>\</span>
              </div>
              {/* Dot right */}
              <span className="w-2.5 h-2.5 rounded-full bg-white inline-block"></span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
