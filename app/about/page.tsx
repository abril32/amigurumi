import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="py-6">
      <div className="bg-[#cf7d8a] p-2 mb-6 inline-block">
        <h2 className="text-lg font-medium">Sobre nosotros</h2>
      </div>

      <div className="mb-8">
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </div>

      <div className="bg-[#cf7d8a] p-2 mb-6 inline-block">
        <h2 className="text-lg font-medium">Nuestro equipo</h2>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-2/3">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </div>
        <div className="md:w-1/3">
          <Image
            src="/placeholder.svg?height=200&width=300"
            alt="Nuestro equipo"
            width={300}
            height={200}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}
