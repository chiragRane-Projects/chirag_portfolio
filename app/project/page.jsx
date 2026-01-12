export default function TestPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gold-500 mb-4">Project Route Test</h1>
        <p className="text-stone-400">If you can see this, the routing is working!</p>
        <div className="mt-8">
          <p className="text-sm text-stone-500">Try these URLs:</p>
          <ul className="text-stone-300 mt-2">
            <li>/project/01</li>
            <li>/project/02</li>
            <li>/project/03</li>
            <li>/project/04</li>
          </ul>
        </div>
      </div>
    </div>
  );
}