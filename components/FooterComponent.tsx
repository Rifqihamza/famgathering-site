export default function Footer() {
    return (
        <footer className="w-full bg-linear-to-b from-(--color-water)/10 to-(--color-sand)/20 px-6 py-16 rounded-t-4xl">
            <div className="max-w-6xl mx-auto flex flex-col items-center gap-6 text-center">

                <h2 className="text-2xl font-bold tracking-wide">
                    Family Gathering Remaja
                </h2>

                <p className="text-sm md:text-base max-w-2xl leading-relaxed">
                    Terima kasih sudah menjadi bagian dari kebersamaan ini.
                    Sampai jumpa di momen seru dan penuh cerita! ✨
                </p>

                <p className="text-xs text-gray-500">
                    © {new Date().getFullYear()} Coders Project. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
