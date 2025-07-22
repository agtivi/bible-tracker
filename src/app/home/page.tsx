'use client'
import { useRouter } from 'next/navigation';

export default function Home() {

  const router = useRouter();

  return (
    <div>
      <main className="min-h-screen flex flex-col items-center justify-center px-6 py-12 text-center">
        <h1 className="text-5xl font-bold mb-6">📖 BibleTracker</h1>

        <p className="text-lg max-w-xl mb-10">
          A simple, peaceful way to track your Bible reading journey, reflect on what God shows you,
          and stay consistent in the Word.
        </p>

        <blockquote className="italic text-md text-gray-600 mb-10">
          “Your word is a lamp to my feet and a light to my path.” - Psalm 119:105
        </blockquote>

        <button
          className="hover:cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition"
          onClick={() => router.push('/tracker')}
        >
          Get Started
        </button>

      </main>
    </div>
  );
}
