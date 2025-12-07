import Image from "next/image";

export default function Details() {
    return (
        <section
            id="about"
            className="
        relative w-full px-20 h-dvh flex flex-col justify-center 
        bg-linear-to-b from-(--color-sky)/10 to-(--color-water)/10
      "
        >
            {/* Decorative blob */}
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-(--color-water) opacity-40 blur-3xl"></div>

            <h1 className="text-3xl text-center font-bold uppercase tracking-wider mb-12">
                Tentang Acara
            </h1>

            <div className="flex flex-row justify-between gap-12 items-center">
                <Image
                    src="/kawahPutih.jpg"
                    alt="Kawah Putih"
                    width={500}
                    height={500}
                    className="aspect-video object-cover rounded-2xl shadow-lg"
                />

                <div className="max-w-xl">
                    <p className="text-base text-justify leading-relaxed text-gray-700">
                        <span className="text-lg font-semibold">
                            Halo, teman-teman remaja Kampung Bulak Kendar! 😊
                        </span>
                        <br /><br />
                        Family Gathering ini adalah acara spesial yang dibuat untuk
                        mempererat tali silaturahmi, memperkuat rasa persaudaraan, dan
                        membangun solidaritas antar remaja di Kampung Bulak Kendar.
                        <br /><br />
                        Dalam acara ini akan ada berbagai kegiatan seru seperti games
                        kebersamaan, sesi sharing santai, makan bersama, serta aktivitas
                        rekreatif yang dirancang untuk menciptakan momen kebahagiaan dan
                        kenangan yang gak terlupakan.
                        <br /><br />
                        Harapannya, melalui kegiatan ini kita semua bisa saling mengenal
                        lebih dekat, menumbuhkan rasa kebersamaan, dan memperkuat semangat
                        gotong royong dalam kehidupan sehari-hari.
                    </p>
                </div>
            </div>
        </section>
    );
}
