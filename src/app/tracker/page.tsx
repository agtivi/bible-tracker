

export default function Tracker() {
    
    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            <aside className="w-full bg-gray-100 p-4 border-b md:w-64 md:border-b-0 md:border-r">
                <h2 className="text-lg font-bold mb-4">Books</h2>
                <ul>
                    <li className="mb-2">Genesis</li>
                    <li className="mb-2">Exodus</li>
                    <li className="mb-2">Leviticus</li>
                </ul>
            </aside>
            <main className="flex-1 p-6">
                <h1 className="text-2xl font-bold mb-4">Bible Tracker</h1>
                <p>Select a book to start tracking your progress.</p>
            </main>
        </div>
    );
}
