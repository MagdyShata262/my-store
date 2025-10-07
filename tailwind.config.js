const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  // 🧭 الأماكن اللي Tailwind بيفحصها عشان يولّد الكلاسات
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{html,ts}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],

  // 🌗 تفعيل الثيم الداكن (باستخدام كلاس)
  darkMode: 'class', // ممكن تغيرها إلى 'media' لو عايز حسب إعداد الجهاز

  theme: {
    extend: {
      // 🎨 ألوان مخصصة للمشروع
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6', // الأساسي
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        secondary: {
          100: '#f5f3ff',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
        },
        neutral: {
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },

      // 🔠 خطوط مخصصة
      fontFamily: {
        sans: ['Inter', 'Roboto', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },

      // 🧱 الظلال والحدود
      boxShadow: {
        soft: '0 2px 8px rgba(0,0,0,0.05)',
        card: '0 4px 12px rgba(0,0,0,0.1)',
      },

      // 🕶️ أنيميشن خفيفة (ممكن تستخدمها في الـUI)
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out',
        slideUp: 'slideUp 0.4s ease-in-out',
      },
    },
  },

  // 📦 إضافات Tailwind الرسمية
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
