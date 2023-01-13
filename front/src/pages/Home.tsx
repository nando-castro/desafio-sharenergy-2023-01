export function Home() {
    return <main className="h-screen w-full flex justify-center items-center  bg-gradient-to-r from-blue-300  to-pink-500">
        <div className="w-full h-screen flex md:w-3/5 md:h-4/6 bg-white md:shadow-2xl md:rounded-2xl md:flex-none">
            <div className="w-24 h-full bg-slate-700 rounded-l-lg">options</div>
            <div className="w-full h-full bg-white rounded-r-lg">Contents</div>
        </div>
    </main>;
}