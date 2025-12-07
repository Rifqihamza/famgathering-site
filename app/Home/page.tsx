import Image from "next/image";
import { ChevronDown, MapPin } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <section id="home" className="w-full h-dvh">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="playWrite-font text-white text-4xl font-thin! tracking-wider">Family Gathering</h1>
        <p className="text-white text-2xl tracking-wide raleWay-font mt-1">Karang Taruna Kampung Bulak</p>
        <span className="text-white flex flex-row items-center justify-center gap-2 mt-2">
          <MapPin />
          Kawah Putih, Bandung
        </span>
        <Link href="#about" className="text-white cursor-pointer animate-[bounce_2s_ease-in-out_infinite] mt-4">
          <ChevronDown />
        </Link>
      </div>
      <div>
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 -z-40"></div>
        <Image src="/kawahPutih.jpg" alt="Kawah Putih Img" width={1920} height={1080} className="w-full h-full absolute top-0 left-0 object-cover -z-50" />
      </div>
    </section>
  );
}
