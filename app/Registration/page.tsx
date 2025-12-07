export default function Registration() {
    return (
        <section
            id="registration"
            className="
        relative w-full px-20 h-dvh flex flex-col items-center justify-center mx-auto 
        bg-linear-to-b from-(--color-water)/10 to-(--color-sand)/20
      "
        >
            {/* Decorative blob */}
            <div className="absolute -top-24 right-0 w-96 h-96 bg-(--color-sky) blur-3xl opacity-30"></div>

            <div className="flex flex-col items-center text-center gap-6 max-w-2xl">
                <h1 className="text-3xl font-bold tracking-wide">
                    Registration 📝
                </h1>

                <p className="text-gray-700 text-lg leading-relaxed">
                    Yuk, amankan tempat kamu sekarang juga!
                    Daftar dulu biar nggak ketinggalan keseruan Family Gathering ini ✨
                </p>

                <a
                    href="https://forms.gle/gcqDspJZfQhK85Kz8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
            mt-4 inline-flex justify-center items-center 
            px-12 py-4 rounded-full 
            bg-(--color-water-deep)
            text-white font-semibold text-lg
            shadow-lg
            hover:scale-105 hover:shadow-xl
            transition-all duration-300
          "
                >
                    Daftar Sekarang 🚀
                </a>

                <p className="text-sm text-gray-500 italic mt-2">
                    *Pendaftaran akan diarahkan ke Google Form
                </p>
            </div>
        </section>
    );
}
