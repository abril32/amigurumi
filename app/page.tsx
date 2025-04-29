import Image from "next/image"

export default function Home() {
  return (
    <div className="py-6">
      <div className="relative mb-8">
        <input type="text" placeholder="Buscar..." className="w-full max-w-xs px-4 py-2 border rounded-md bg-white" />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <div className="w-6 h-3 bg-white rounded-full"></div>
        </div>
        <div className="absolute inset-0 bg-[#cf7d8a] opacity-80 rounded-md -z-10"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col">
          <div className="bg-[#fffafa] p-4 h-64 flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Amigurumi de mamá canguro y bebé"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
          <div className="bg-[#cf7d8a] p-2 text-center">
            <div className="font-bold">$$$</div>
            <div className="text-sm">amigurumi de mamá canguro y bebé</div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="bg-white p-4 h-64 flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Amigurumi de conejos"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
          <div className="bg-[#cf7d8a] p-2 text-center">
            <div className="font-bold">$$$</div>
            <div className="text-sm">amigurumi de conejos</div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="bg-white p-4 h-64 flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Amigurumi de osito"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
          <div className="bg-[#cf7d8a] p-2 text-center">
            <div className="font-bold">$$$</div>
            <div className="text-sm">amigurumi de osito</div>
          </div>
        </div>
      </div>
    </div>
  )
}
