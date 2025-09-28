export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-8">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Hello World</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300">
        Welcome to Next.js with App Router!
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Toggle between light and dark mode using the button in the navigation bar.
      </p>
    </main>
  )
}