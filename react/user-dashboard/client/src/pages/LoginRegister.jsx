import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import mojaveNightImg from '../assets/mojave-night.jpg';
import { useMessage } from '../context/MessageContext.jsx';

// Stylized geometric AMU Logo matching the design
const AmuLogo = ({ className = "h-5 w-auto" }) => (
  <svg
    viewBox="0 0 76 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="AMU Logo"
  >
    {/* Stylized A (curved arch without horizontal bar) */}
    <path
      d="M3 21 L11.5 4.5 C12.8 2 15 2 16.5 4.5 L20 11.5 L20 21"
      stroke="white"
      strokeWidth="3.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Stylized M */}
    <path
      d="M28 21 V3 L37 14 L46 3 V21"
      stroke="white"
      strokeWidth="3.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Stylized U */}
    <path
      d="M54 3 V14 C54 18.5 57.5 21 62.5 21 C67.5 21 71 18.5 71 14 V3"
      stroke="white"
      strokeWidth="3.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const slides = [
  {
    title: "Discovering Horizons,\nSharing Stories",
    subtitle: "Join thousands of creative visionaries"
  },
  {
    title: "Inspiring Vision,\nBuilding Tomorrow",
    subtitle: "A seamless platform for forward thinkers"
  },
  {
    title: "Capturing Moments,\nCreating Memories",
    subtitle: "Your journey starts here"
  }
];

const LoginRegister = () => {
  const { triggerMessage } = useMessage?.() || { triggerMessage: () => {} };
  const [mode, setMode] = useState('signup'); // 'signup' or 'login'
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [activeSlide, setActiveSlide] = useState(2); // Slide 3 is active in screenshot
  const [focusedField, setFocusedField] = useState('firstName');

  const [formData, setFormData] = useState({
    firstName: '', // Initialized as in the design screenshot
    lastName: '',
    email: '',
    password: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === 'signup' && !agreeTerms) {
      triggerMessage('warning', 'Please accept the Terms & Conditions.');
      return;
    }
    const action = mode === 'signup' ? 'Account created successfully!' : 'Logged in successfully!';
    triggerMessage('success', action);
  };

  return (
    <div className="min-h-screen w-full bg-[#1F1A29] flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10 antialiased selection:bg-brand selection:text-white">
      {/* Outer Card Container */}
      <div className="w-full max-w-[1020px] bg-card rounded-[28px] md:rounded-[32px] p-3 sm:p-4 md:p-5 shadow-[0_30px_90px_rgba(15,12,25,0.7)] border border-border/30 overflow-hidden transition-all duration-300">
        <div className="flex flex-col md:flex-row min-h-[560px] lg:min-h-[580px] gap-4 md:gap-2">
          
          {/* ================= LEFT COLUMN: SCENE PANE ================= */}
          <div className="scene relative w-full md:w-[48%] lg:w-[46%] rounded-[22px] md:rounded-[26px] overflow-hidden min-h-[380px] md:min-h-[540px] flex flex-col justify-between p-6 sm:p-8 md:p-9 select-none shrink-0">
            {/* Background Image: Mojave Night Dunes */}
            <img
              src={mojaveNightImg}
              alt="Night Desert Dunes"
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none transform scale-105 transition-transform duration-1000 ease-out"
            />

            {/* Ambient Dark & Purple Gradient Overlays for High Contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/25 to-card/50 pointer-events-none" />
            <div className="absolute inset-0 bg-brand-deep/20 mix-blend-color pointer-events-none" />

            {/* Top Row: Logo & Back to Website button */}
            <div className="relative z-10 flex items-center justify-between">
              <AmuLogo className="h-4 sm:h-5 w-auto" />

              <Link
                to="/home"
                className="group inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-white/90 bg-white/10 hover:bg-white/20 active:bg-white/25 backdrop-blur-md border border-white/20 shadow-sm transition-all duration-200"
              >
                <span>Back to website</span>
                <span className="transform group-hover:translate-x-0.5 transition-transform duration-200">→</span>
              </Link>
            </div>

            {/* Bottom Content: Headline & Slider Dots */}
            <div className="relative z-10 pt-16">
              <h2 className="text-2xl sm:text-[27px] font-semibold text-white tracking-tight leading-snug whitespace-pre-line drop-shadow-md">
                {slides[activeSlide].title}
              </h2>

              {/* Slider Indicator Pills */}
              <div className="flex items-center gap-2 mt-6">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActiveSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
                      activeSlide === index
                        ? 'w-10 bg-white shadow-sm'
                        : 'w-6 bg-white/35 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: FORM PANE ================= */}
          <div className="form w-full md:w-[52%] lg:w-[54%] px-4 py-6 sm:px-8 sm:py-8 md:px-10 lg:px-12 flex flex-col justify-center">
            <div className="w-full max-w-[430px] mx-auto">
              
              {/* Form Title & Subtitle */}
              <div className="mb-6 sm:mb-7">
                <h1 className="text-3xl sm:text-[34px] font-bold text-text-primary tracking-tight leading-tight">
                  {mode === 'signup' ? 'Create an account' : 'Welcome back'}
                </h1>
                <p className="mt-2 text-sm text-text-muted">
                  {mode === 'signup' ? (
                    <>
                      Already have an account?{' '}
                      <button
                        type="button"
                        onClick={() => setMode('login')}
                        className="text-text-primary underline hover:text-brand-hover font-medium cursor-pointer transition-colors"
                      >
                        Log in
                      </button>
                    </>
                  ) : (
                    <>
                      Don't have an account?{' '}
                      <button
                        type="button"
                        onClick={() => setMode('signup')}
                        className="text-text-primary underline hover:text-brand-hover font-medium cursor-pointer transition-colors"
                      >
                        Sign up
                      </button>
                    </>
                  )}
                </p>
              </div>

              {/* Input Form */}
              <form onSubmit={handleSubmit} className="space-y-3.5">
                
                {/* First Name & Last Name (Visible in Sign up mode) */}
                {mode === 'signup' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {/* First Name */}
                    <div>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        onFocus={() => setFocusedField('firstName')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="First name"
                        className={`w-full bg-input rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/60 outline-none transition-all duration-200 border ${
                          focusedField === 'firstName'
                            ? 'border-brand ring-1 ring-brand'
                            : 'border-border/40 hover:border-border/70'
                        }`}
                      />
                    </div>

                    {/* Last Name */}
                    <div>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        onFocus={() => setFocusedField('lastName')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Last name"
                        className={`w-full bg-input rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/60 outline-none transition-all duration-200 border ${
                          focusedField === 'lastName'
                            ? 'border-brand ring-1 ring-brand'
                            : 'border-border/40 hover:border-border/70'
                        }`}
                      />
                    </div>
                  </div>
                )}

                {/* Email Field */}
                <div>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Email"
                    required
                    className={`w-full bg-input rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/60 outline-none transition-all duration-200 border ${
                      focusedField === 'email'
                        ? 'border-brand ring-1 ring-brand'
                        : 'border-border/40 hover:border-border/70'
                    }`}
                  />
                </div>

                {/* Password Field with Toggle Eye */}
                <div className="relative flex items-center">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    onFocus={() => setFocusedField('password')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Enter your password"
                    required
                    className={`w-full bg-input rounded-xl px-4 py-3 pr-11 text-sm text-text-primary placeholder:text-text-muted/60 outline-none transition-all duration-200 border ${
                      focusedField === 'password'
                        ? 'border-brand ring-1 ring-brand'
                        : 'border-border/40 hover:border-border/70'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 p-1 text-text-muted hover:text-text-primary focus:outline-none transition-colors cursor-pointer"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? (
                      // Eye Off SVG
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                      </svg>
                    ) : (
                      // Eye On SVG matching screenshot
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>

                {/* Terms and Conditions Checkbox (Sign up mode) */}
                {mode === 'signup' && (
                  <div className="flex items-center gap-2.5 pt-1 select-none">
                    <button
                      type="button"
                      role="checkbox"
                      aria-checked={agreeTerms}
                      onClick={() => setAgreeTerms(!agreeTerms)}
                      className={`w-[18px] h-[18px] rounded-[5px] flex items-center justify-center transition-all duration-200 cursor-pointer shrink-0 ${
                        agreeTerms
                          ? 'bg-brand border border-brand text-white'
                          : 'bg-input border border-border/70 text-transparent'
                      }`}
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    <span className="text-xs text-text-muted">
                      I agree to the{' '}
                      <a
                        href="#terms"
                        onClick={(e) => { e.preventDefault(); triggerMessage('info', 'Terms & Conditions modal'); }}
                        className="text-text-primary underline hover:text-brand-hover transition-colors"
                      >
                        Terms & Conditions
                      </a>
                    </span>
                  </div>
                )}

                {/* Primary Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-xl font-medium text-sm text-text-primary bg-brand hover:bg-brand-hover active:bg-brand-deep transition-all duration-200 shadow-md shadow-brand/20 cursor-pointer flex items-center justify-center"
                  >
                    {mode === 'signup' ? 'Create account' : 'Log in'}
                  </button>
                </div>
              </form>

              {/* Divider: "Or register with" / "Or log in with" */}
              <div className="relative flex items-center justify-center my-6">
                <div className="border-t border-border/40 w-full" />
                <span className="bg-card px-3 text-xs text-text-muted shrink-0">
                  {mode === 'signup' ? 'Or register with' : 'Or log in with'}
                </span>
                <div className="border-t border-border/40 w-full" />
              </div>

              {/* Social Login Buttons: Google & Apple */}
              <div className="grid grid-cols-2 gap-3.5">
                {/* Google Button */}
                <button
                  type="button"
                  onClick={() => triggerMessage('info', 'Google authentication initiated')}
                  className="py-2.5 px-4 rounded-xl border border-border/50 bg-transparent hover:bg-input/60 hover:border-border transition-all duration-200 flex items-center justify-center gap-2.5 text-sm font-medium text-text-primary cursor-pointer active:scale-[0.98]"
                >
                  {/* Google Multicolor 'G' Icon */}
                  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                  <span>Google</span>
                </button>

                {/* Apple Button */}
                <button
                  type="button"
                  onClick={() => triggerMessage('info', 'Apple authentication initiated')}
                  className="py-2.5 px-4 rounded-xl border border-border/50 bg-transparent hover:bg-input/60 hover:border-border transition-all duration-200 flex items-center justify-center gap-2.5 text-sm font-medium text-text-primary cursor-pointer active:scale-[0.98]"
                >
                  {/* Apple White Icon */}
                  <svg className="w-4 h-4 shrink-0 fill-current text-white" viewBox="0 0 170 170">
                    <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.6-7.85-11.7-14.43-6.19-9.88-11.03-21.57-14.52-35.06-3.48-13.48-5.23-26.04-5.23-37.66 0-16.14 4.02-29.56 12.06-40.26 8.04-10.7 18.23-16.19 30.57-16.48 5.43 0 11.4 1.48 17.9 4.43 6.51 2.96 10.63 4.49 12.37 4.59 1.3 0 5.69-1.63 13.16-4.89 7.48-3.26 13.91-4.7 19.3-4.32 14.55.87 26.24 6.2 35.06 15.98-12.6 7.61-18.79 18.15-18.57 31.62.22 10.43 4.13 19.13 11.74 26.09 7.61 6.96 16.74 11.08 27.39 12.39-2.61 7.61-5.76 15.22-9.46 22.84zM119.22 31.84c0-7.39 2.61-14.35 7.83-20.87 5.22-6.52 11.85-10.43 19.89-11.74.22 1.09.33 2.17.33 3.26 0 7.39-2.72 14.57-8.15 21.52-5.43 6.96-12.06 10.87-19.89 11.74-.01-1.3-.01-2.61-.01-3.91z" />
                  </svg>
                  <span>Apple</span>
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
