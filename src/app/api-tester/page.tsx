'use client'

import { useState } from 'react'

export default function ApiTester(): JSX.Element {
  const [response, setResponse] = useState<string>('')

  // Estado independiente para cada sección
  const [getEventId, setGetEventId] = useState<string>('')
  const [postTitle, setPostTitle] = useState<string>('')
  const [postDescription, setPostDescription] = useState<string>('')
  const [postImage, setPostImage] = useState<string>('')

  const [patchEventId, setPatchEventId] = useState<string>('')
  const [patchTitle, setPatchTitle] = useState<string>('')
  const [patchDescription, setPatchDescription] = useState<string>('')
  const [patchImage, setPatchImage] = useState<string>('')

  const [putEventId, setPutEventId] = useState<string>('')
  const [putTitle, setPutTitle] = useState<string>('')
  const [putDescription, setPutDescription] = useState<string>('')
  const [putImage, setPutImage] = useState<string>('')

  const [deleteEventId, setDeleteEventId] = useState<string>('')

  const [isOpen, setIsOpen] = useState({
    get: false,
    post: false,
    patch: false,
    put: false,
    delete: false
  })

  const toggleAccordion = (
    section: 'get' | 'post' | 'patch' | 'put' | 'delete'
  ): void => {
    setIsOpen((prev) => ({ ...prev, [section]: !prev[section] }))
  }

  const handleRequest = async (method: string): Promise<void> => {
    let url = 'http://localhost:3000/api/events'
    const options: RequestInit = {
      method,
      headers: { 'Content-Type': 'application/json' }
    }

    // Manejo de métodos: GET, POST, PATCH, PUT, DELETE
    if (method === 'GET') {
      if (getEventId.length > 0) {
        url += `/${getEventId}` // Obtener un evento específico por ID
      }
    }

    if (method === 'POST') {
      url += `/post`
      options.body = JSON.stringify({
        title: postTitle.length > 0 ? postTitle : 'Nuevo Evento',
        description:
          postDescription.length > 0
            ? postDescription
            : 'Descripción de prueba',
        date: new Date().toISOString(),
        image: postImage.length > 0 ? postImage : 'url-de-imagen'
      })
    }

    if (method === 'PATCH' || method === 'PUT') {
      if (patchEventId.length === 0 && putEventId.length === 0) {
        setResponse('Por favor, ingresa un ID de evento para actualizar.')
        return
      }

      const currentEventId = method === 'PATCH' ? patchEventId : putEventId
      url += `/${currentEventId}`

      if (method === 'PATCH') {
        url += `/patch`
        options.body = JSON.stringify({
          title: patchTitle.length > 0 ? patchTitle : undefined, // Solo se incluye si tiene valor
          description:
            patchDescription.length > 0 ? patchDescription : undefined,
          image: patchImage.length > 0 ? patchImage : undefined
        })
      } else if (method === 'PUT') {
        url += `/put`

        // Validar que todos los campos estén llenos para PUT
        if (
          putTitle.length === 0 ||
          putDescription.length === 0 ||
          putImage.length === 0
        ) {
          setResponse('Todos los campos son obligatorios')
          return
        }

        options.body = JSON.stringify({
          title: putTitle, // Campo obligatorio
          description: putDescription, // Campo obligatorio
          date: new Date().toISOString(), // Campo obligatorio
          image: putImage // Campo obligatorio
        })
      }
    }

    if (method === 'DELETE') {
      if (deleteEventId.length === 0) {
        setResponse('Por favor, ingresa un ID de evento para eliminar.')
        return
      }
      url += `/${deleteEventId}/delete`
    }

    try {
      const res = await fetch(url, options)

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`)
      }

      const data = await res.json()
      setResponse(JSON.stringify(data, null, 2))

      // Limpiar los campos después de enviar la solicitud
      if (method === 'GET') {
        setGetEventId('')
      } else if (method === 'POST') {
        setPostTitle('')
        setPostDescription('')
        setPostImage('')
      } else if (method === 'PATCH') {
        setPatchEventId('')
        setPatchTitle('')
        setPatchDescription('')
        setPatchImage('')
      } else if (method === 'PUT') {
        setPutEventId('')
        setPutTitle('')
        setPutDescription('')
        setPutImage('')
      } else if (method === 'DELETE') {
        setDeleteEventId('')
      }
    } catch (error) {
      setResponse('Error: ' + String(error))
    }
  }

  return (
    <div className="flex justify-between gap-10 max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-xl">
      {/* Formulario a la izquierda */}
      <div className="w-1/2">
        <h1 className="text-3xl font-semibold text-center mb-6">
          Prueba de Rutas de API
        </h1>

        {/* Sección GET */}
        <div className="mb-6">
          <button
            onClick={() => {
              toggleAccordion('get')
            }}
            className="w-full text-left px-5 py-3 bg-black text-white rounded-lg mb-3"
          >
            {isOpen.get ? 'GET' : 'GET'}
          </button>
          {isOpen.get && (
            <div className="space-y-3">
              <input
                type="text"
                placeholder="ID de evento (dejar vacío para todos)"
                value={getEventId}
                onChange={(e) => {
                  setGetEventId(e.target.value)
                }}
                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full p-3 mb-3"
              />
              <button
                onClick={() => {
                  void handleRequest('GET')
                }}
                className="w-full px-5 py-3 bg-black text-white rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                GET
              </button>
            </div>
          )}
        </div>

        {/* Sección POST */}
        <div className="mb-6">
          <button
            onClick={() => {
              toggleAccordion('post')
            }}
            className="w-full text-left px-5 py-3 bg-black text-white rounded-lg mb-3"
          >
            {isOpen.post ? 'POST' : 'POST'}
          </button>
          {isOpen.post && (
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Título"
                value={postTitle}
                onChange={(e) => {
                  setPostTitle(e.target.value)
                }}
                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full p-3 mb-3"
              />
              <input
                type="text"
                placeholder="Descripción"
                value={postDescription}
                onChange={(e) => {
                  setPostDescription(e.target.value)
                }}
                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full p-3 mb-3"
              />
              <input
                type="text"
                placeholder="Imagen (URL)"
                value={postImage}
                onChange={(e) => {
                  setPostImage(e.target.value)
                }}
                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full p-3 mb-3"
              />
              <button
                onClick={() => {
                  void handleRequest('POST')
                }}
                className="w-full px-5 py-3 bg-black text-white rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                POST
              </button>
            </div>
          )}
        </div>

        {/* Sección PATCH */}
        <div className="mb-6">
          <button
            onClick={() => {
              toggleAccordion('patch')
            }}
            className="w-full text-left px-5 py-3 bg-black text-white rounded-lg mb-3"
          >
            {isOpen.patch ? 'PATCH' : 'PATCH'}
          </button>
          {isOpen.patch && (
            <div className="space-y-3">
              <input
                type="text"
                placeholder="ID de evento"
                value={patchEventId}
                onChange={(e) => {
                  setPatchEventId(e.target.value)
                }}
                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full p-3 mb-3"
              />
              <input
                type="text"
                placeholder="Título (opcional)"
                value={patchTitle}
                onChange={(e) => {
                  setPatchTitle(e.target.value)
                }}
                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full p-3 mb-3"
              />
              <input
                type="text"
                placeholder="Descripción (opcional)"
                value={patchDescription}
                onChange={(e) => {
                  setPatchDescription(e.target.value)
                }}
                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full p-3 mb-3"
              />
              <input
                type="text"
                placeholder="Imagen (opcional)"
                value={patchImage}
                onChange={(e) => {
                  setPatchImage(e.target.value)
                }}
                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full p-3 mb-3"
              />
              <button
                onClick={() => {
                  void handleRequest('PATCH')
                }}
                className="w-full px-5 py-3 bg-black text-white rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                PATCH
              </button>
            </div>
          )}
        </div>

        {/* Sección PUT */}
        <div className="mb-6">
          <button
            onClick={() => {
              toggleAccordion('put')
            }}
            className="w-full text-left px-5 py-3 bg-black text-white rounded-lg mb-3"
          >
            {isOpen.put ? 'PUT' : 'PUT'}
          </button>
          {isOpen.put && (
            <div className="space-y-3">
              <input
                type="text"
                placeholder="ID de evento"
                value={putEventId}
                onChange={(e) => {
                  setPutEventId(e.target.value)
                }}
                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full p-3 mb-3"
              />
              <input
                type="text"
                placeholder="Título"
                value={putTitle}
                onChange={(e) => {
                  setPutTitle(e.target.value)
                }}
                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full p-3 mb-3"
              />
              <input
                type="text"
                placeholder="Descripción"
                value={putDescription}
                onChange={(e) => {
                  setPutDescription(e.target.value)
                }}
                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full p-3 mb-3"
              />
              <input
                type="text"
                placeholder="Imagen"
                value={putImage}
                onChange={(e) => {
                  setPutImage(e.target.value)
                }}
                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full p-3 mb-3"
              />
              <button
                onClick={() => {
                  void handleRequest('PUT')
                }}
                className="w-full px-5 py-3 bg-black text-white rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                PUT
              </button>
            </div>
          )}
        </div>

        {/* Sección DELETE */}
        <div className="mb-6">
          <button
            onClick={() => {
              toggleAccordion('delete')
            }}
            className="w-full text-left px-5 py-3 bg-black text-white rounded-lg mb-3"
          >
            {isOpen.delete ? 'DELETE ' : 'DELETE'}
          </button>
          {isOpen.delete && (
            <div className="space-y-3">
              <input
                type="text"
                placeholder="ID de evento"
                value={deleteEventId}
                onChange={(e) => {
                  setDeleteEventId(e.target.value)
                }}
                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full p-3 mb-3"
              />
              <button
                onClick={() => {
                  void handleRequest('DELETE')
                }}
                className="w-full px-5 py-3 bg-black text-white rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                DELETE
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Respuesta de la API a la derecha */}
      <div className="w-1/2 bg-gray-100 rounded-lg p-5">
        <h2 className="text-xl font-semibold mb-4">Respuesta de la API:</h2>
        <pre>{response}</pre>
      </div>
    </div>
  )
}
