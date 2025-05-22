/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {},
  },
  safelist: [
    // Utilisées dans style.css via @apply
    "bg-green-500", "hover:bg-green-600",
    "bg-blue-600", "hover:bg-blue-700",
    "text-white", "text-blue-700", "text-blue-300", "text-gray-900",
    "rounded", "rounded-lg", "shadow", "shadow-lg",
    "px-4", "py-2", "mx-2", "mb-4", "p-6",
    "text-2xl", "font-bold", "italic", "underline",
    "grid", "grid-cols-1", "sm:grid-cols-2", "md:grid-cols-3", "gap-6",
    "w-full", "h-60", "h-96", "object-cover",
    "transition-transform", "duration-300", "hover:scale-105",
    "max-w-3xl", "max-w-5xl", "max-w-6xl", "mx-auto",
    "bg-white", "bg-gray-50", "bg-blue-900"
  ],
  plugins: [],
}





