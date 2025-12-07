export default function Rundown() {
    const timeline = [
        { time: "06.00", text: "Kumpul di titik keberangkatan" },
        { time: "06.30", text: "Berangkat menuju Kawah Putih" },
        { time: "10.00", text: "Tiba di lokasi & foto bersama" },
        { time: "12.00", text: "Ishoma (Istirahat, Sholat, Makan)" },
        { time: "13.00", text: "Games seru & kebersamaan" },
        { time: "15.00", text: "Persiapan pulang" },
        { time: "18.00", text: "Tiba kembali di Kampung Bulak" },
    ];

    return (
        <section
            id="rundown"
            className="w-full px-20 flex flex-col mx-auto bg-linear-to-b from-(--color-water)/10 to-(--color-sand)/20
"
        >
            {/* LOCATION */}
            <div className="flex flex-col items-center justify-center gap-8 h-dvh">
                <h2 className="text-3xl font-bold">
                    📍 Location
                </h2>

                <p className="text-center text-gray-600 max-w-2xl">
                    Perjalanan kita akan menuju salah satu destinasi paling indah di Bandung,
                    yaitu Kawah Putih. Udara sejuk, pemandangan cantik, dan suasana alam yang
                    bikin fresh pikiran siap menemani hari kebersamaan kita.
                </p>

                <div className="flex flex-row justify-between gap-12 w-full items-center">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1979.326057873507!2d107.40085218852974!3d-7.166154048209648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e688c1383dc510f%3A0xfab41bb8e4a3a83e!2sKawah%20Putih!5e0!3m2!1sid!2sid!4v1765072248979!5m2!1sid!2sid"
                        className="w-full h-96 rounded-2xl shadow-lg"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />

                    <div className="space-y-3 max-w-md">
                        <h3 className="text-lg font-semibold text-gray-800">
                            Kawah Putih — Bandung
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Jalan Raya Ciwidey–Patengan KM 11, Lebakmuncang, Ciwidey, Kabupaten Bandung, Jawa Barat
                        </p>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Lokasi ini terkenal dengan kawah berwarna putih kehijauan dan suasana
                            sejuk khas pegunungan.
                        </p>
                    </div>
                </div>
            </div>

            {/* RUNDOWN TIMELINE */}
            <div className="flex flex-col items-center justify-center gap-10 h-dvh">
                <h2 className="text-3xl font-bold">
                    🗓️ Rundown Acara
                </h2>

                <p className="text-center text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Siap-siap buat hari yang penuh cerita! 🎉
                    Dari pagi sampai malam, setiap momen sudah diatur supaya perjalanan kita
                    tetap tertib, nyaman, dan tentunya super seru. Waktunya kumpul,
                    ketawa bareng, dan bikin kenangan yang susah dilupain.
                </p>

                {/* Timeline */}
                <div className="relative w-full overflow-x-auto pt-10">
                    {/* Horizontal line */}
                    <div className="absolute top-14 left-0 w-full h-0.5 bg-(--color-water-deep)/60" />

                    <div className="relative flex flex-row items-start gap-20 min-w-max px-10">
                        {timeline.map((item, i) => (
                            <div
                                key={i}
                                className="relative flex flex-col items-center min-w-40"
                            >
                                {/* Dot */}
                                <span className="w-4 h-4 rounded-full bg-(--color-sky) z-10 translate-y-2" />

                                {/* Time */}
                                <span className="mt-8 font-semibold text-black">
                                    {item.time}
                                </span>

                                {/* Text */}
                                <p className="mt-2 text-sm text-gray-700 text-center leading-relaxed max-w-44">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
