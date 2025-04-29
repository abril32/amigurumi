export default function ContactPage() {
  return (
    <div className="py-6">
      <div className="bg-[#cf7d8a] p-2 mb-6 inline-block">
        <h2 className="text-lg font-medium">Contactanos</h2>
      </div>

      <div className="bg-[#cf7d8a] p-6 max-w-md mx-auto rounded">
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-2">
              Nombre y Apellido
            </label>
            <input id="name" type="text" className="w-full p-2 border rounded" />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2">
              Correo electronico
            </label>
            <input id="email" type="email" className="w-full p-2 border rounded" />
          </div>

          <div>
            <label htmlFor="comment" className="block mb-2">
              Comentario
            </label>
            <textarea id="comment" rows={4} className="w-full p-2 border rounded"></textarea>
          </div>

          <div className="text-right">
            <button type="submit" className="bg-[#d5a5d0] px-6 py-2 rounded">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
