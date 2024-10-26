'use client'; // Este componente se ejecutará en el lado del cliente en Next.js.
import React, { useState, useRef } from 'react'; // Importa React y algunos hooks que vamos a usar.

const Contact: React.FC = () => {
  // Estado para guardar los datos del formulario
  const [formData, setFormData] = useState({
    name: '', // Nombre
    email: '', // Correo electrónico
    message: '', // Mensaje
  });

  // Estado para saber si el formulario fue enviado
  const [submitted, setSubmitted] = useState(false);

  // Estado para manejar errores
  const [error, setError] = useState('');

  // Referencia para el botón de enviar
  const submitButtonRef = useRef<HTMLButtonElement>(null);

  // Maneja los cambios en los campos del formulario
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target; // Obtiene el nombre y valor del campo que cambió
    setFormData({
      ...formData,
      [name]: value, // Actualiza el estado con el nuevo valor
    });

    // Desplaza el scroll hacia el botón de enviar cuando se escribe en el mensaje
    if (submitButtonRef.current != null) {
      submitButtonRef.current.scrollIntoView({ behavior: 'smooth' }); // Desplaza suavemente
    }
  };

  // Maneja el envío del formulario
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault(); // Evita que la página se recargue al enviar el formulario

    // Verifica si todos los campos están completos
    if ((formData.name.length === 0) || (formData.email.length === 0) || (formData.message.length === 0)) {
      setError('Por favor, completa todos los campos.'); // Establece un mensaje de error
      return; // Evita el envío del formulario
    }

    // Aquí es donde puedes enviar los datos del formulario a tu servidor
    console.log('Datos del formulario:', formData); // Muestra los datos en la consola para verlos

    // Simulando un envío exitoso
    setSubmitted(true); // Cambia el estado a enviado
    setError(''); // Limpia el mensaje de error

    // Limpia el formulario después de enviarlo
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-16 mx-auto flex sm:flex-nowrap flex-wrap">
        {/* Mapa de Google */}
        <div className="lg:w-2/3 md:w-1/2 mt-10 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative h-[450px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3344.401838737673!2d-71.61316889999999!3d-33.0458861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689e0da3d49d357%3A0x82a39b4be3b5eed8!2sFabLab%20UV!5e0!3m2!1ses-419!2scl!4v1729929637653!5m2!1ses-419!2scl"
            className="absolute inset-0 w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Formulario de contacto */}
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-1 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contáctanos</h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Si deseas agendar una visita o realizar una consulta, rellena el formulario que se encuentra a continuación.
          </p>
          <p className="leading-relaxed mb-5 text-gray-600">
            IMPORTANTE: horario de atención a público general (no residentes ni becados) es de 14:00 a 18:00hrs.
          </p>
          <form onSubmit={handleSubmit}> {/* Cuando se envía el formulario, ejecuta handleSubmit */}
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name} // Valor del campo de nombre
                onChange={handleChange} // Maneja el cambio en el campo
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Correo electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email} // Valor del campo de correo
                onChange={handleChange} // Maneja el cambio en el campo
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">Tu mensaje:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message} // Valor del campo de mensaje
                onChange={handleChange} // Maneja el cambio en el campo
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            {(error.length > 0) && <p className="text-red-500 mt-3">{error}</p>} {/* Mensaje de error */}
            <button
              ref={submitButtonRef} // Referencia para el botón de enviar
              type="submit" // El tipo de este botón es "submit"
              className="text-white bg-[#210a3e] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" // Cambia el color aquí
            >
              Enviar
            </button>
            {submitted && (
              <p className="text-green-500 mt-3">¡Tu mensaje ha sido enviado correctamente!</p> // Mensaje de confirmación
            )}
            <p className="text-xs text-gray-500 mt-3">Tiempo estimado de respuesta: 24 horas hábiles.</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact; // Exporta el componente Contact para usarlo en otras partes de la aplicación.
