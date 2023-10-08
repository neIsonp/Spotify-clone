import {
  Shuffle,
  SkipBack,
  Play,
  SkipForward,
  Repeat,
  Mic2,
  LayoutList,
  Laptop2,
  Volume,
  Maximize2,
} from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Image
          src="/imagePlaylist.jpg"
          alt="image playlist"
          width={56}
          height={56}
        />
        <div className="flex flex-col gap-3">
          <strong className="font-normal">Rope</strong>
          <span className="text-xs text-zinc-500">Ehdasd asda</span>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-6">
          <Shuffle className="text-zinc-200" size={20} />
          <SkipBack className="text-zinc-200" size={20} />
          <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-white text-black">
            <Play />
          </button>
          <SkipForward className="text-zinc-200" size={20} />
          <Repeat className="text-zinc-200" size={20} />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-400">0:21</span>
          <div className="h-1 rounded-full w-96 bg-zinc-600">
            <div className="bg-zinc-200 h-1 rounded-full w-24"></div>
          </div>
          <span className="text-xs text-zinc-400">02:34</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Mic2 />
        <LayoutList />
        <Laptop2 />

        <div className="flex items-center gap-2">
          <Volume size={20} />
          <div className="h-1 rounded-full w-24 bg-zinc-600">
            <div className="bg-zinc-200 h-1 rounded-full w-10"></div>
          </div>
        </div>
        <Maximize2 size={20} />
      </div>
    </footer>
  );
}
