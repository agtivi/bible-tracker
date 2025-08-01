'use client'
import { useState } from "react";

const books = ["Genesis", "Exodus", "Leviticus"];

export default function Tracker() {
    const [selectedBook, setSelectedBook] = useState("Genesis");
    const [sidebarOpen, setSidebarOpen] = useState(false);
    
    return (
        <div className="min-h-screen flex flex-row">
            <aside className={`w-full transition-all bg-gray-100 p-4 border-b ${sidebarOpen? "translate-x-0" : "-translate-x-full"} md:w-64 md:border-b-0 md:border-r`}>
                <h2 className="text-lg font-bold mb-4">Books</h2>
                <div className="p-4 space-y-2">
                    {books.map((book) => (
                        <button
                            key={book}
                            onClick={() => setSelectedBook(book)}
                            className={`block w-full text-left px-4 py-2 rounded hover:cursor-pointer hover:bg-gray-100 ${
                                selectedBook === book ? "bg-gray-200 font-semibold" : ""
                            }`}
                        >
                            {book}
                        </button>
                    ))}
                </div>
            </aside>
            <main className="flex-1 p-6">
                <div className="flex flex-row-2 mb-4 relative justify-center">
                    <div className="w-1/2">
                        <button 
                            className="px-2 py-1 mb-2 rounded bg-gray-100 hover:bg-gray-200 hover:cursor-pointer left-0 top-0"
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                        >
                            ☰
                        </button>
                    </div>
                    <div className="w-full">
                        <h1 className="text-2xl font-bold">Bible Tracker</h1>
                    </div>
                </div>
                <p className="mt-4 text-gray-700">
                    Welcome to the Book of {selectedBook}. Start taking notes here soon!
                </p>
            </main>
        </div>
    );
}
