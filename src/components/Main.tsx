import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";

export function Main() {
  return (
    <main className="flex-1 p-6">
      <div className="flex items-center gap-6">
        <button className="rounded-full bg-black/40 p-1">
          <ChevronLeft />
        </button>
        <button className="rounded-full bg-black/40 p-1">
          <ChevronRight />
        </button>
      </div>
      <h1 className="font-bold text-3xl mt-10">Good Afternoon</h1>

      <div className="grid grid-cols-3 gap-4 mt-4">
        <a
          href="#"
          className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
        >
          <Image
            src="/imagePlaylist.jpg"
            alt="image playlist"
            width={104}
            height={104}
          />
          <strong>Wasting light</strong>
          <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play />
          </button>
        </a>
        <a
          href="#"
          className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
        >
          <Image
            src="/imagePlaylist.jpg"
            alt="image playlist"
            width={104}
            height={104}
          />
          <strong>Wasting light</strong>
          <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play />
          </button>
        </a>
        <a
          href="#"
          className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
        >
          <Image
            src="/imagePlaylist.jpg"
            alt="image playlist"
            width={104}
            height={104}
          />
          <strong>Wasting light</strong>
          <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play />
          </button>
        </a>
        <a
          href="#"
          className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
        >
          <Image
            src="/imagePlaylist.jpg"
            alt="image playlist"
            width={104}
            height={104}
          />
          <strong>Wasting light</strong>
          <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play />
          </button>
        </a>
        <a
          href="#"
          className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
        >
          <Image
            src="/imagePlaylist.jpg"
            alt="image playlist"
            width={104}
            height={104}
          />
          <strong>Wasting light</strong>
          <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play />
          </button>
        </a>
        <a
          href="#"
          className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
        >
          <Image
            src="/imagePlaylist.jpg"
            alt="image playlist"
            width={104}
            height={104}
          />
          <strong>Wasting light</strong>
          <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play />
          </button>
        </a>
      </div>

      <h1 className="font-bold text-2xl mt-10">Made for Nelson Ponte</h1>

      <div className="grid grid-cols-8 gap-4 mt-4">
        <a
          href="#"
          className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
        >
          <Image
            className="w-full"
            src="/imagePlaylist.jpg"
            alt="image playlist"
            width={104}
            height={104}
          />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-400">
            Wallopws, COIN, girl in red and
          </span>
        </a>
        <a
          href="#"
          className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
        >
          <Image
            className="w-full"
            src="/imagePlaylist.jpg"
            alt="image playlist"
            width={104}
            height={104}
          />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-400">
            Wallopws, COIN, girl in red and
          </span>
        </a>
        <a
          href="#"
          className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
        >
          <Image
            className="w-full"
            src="/imagePlaylist.jpg"
            alt="image playlist"
            width={104}
            height={104}
          />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-400">
            Wallopws, COIN, girl in red and
          </span>
        </a>
        <a
          href="#"
          className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
        >
          <Image
            className="w-full"
            src="/imagePlaylist.jpg"
            alt="image playlist"
            width={104}
            height={104}
          />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-400">
            Wallopws, COIN, girl in red and
          </span>
        </a>
        <a
          href="#"
          className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
        >
          <Image
            className="w-full"
            src="/imagePlaylist.jpg"
            alt="image playlist"
            width={104}
            height={104}
          />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-400">
            Wallopws, COIN, girl in red and
          </span>
        </a>
      </div>
    </main>
  );
}
