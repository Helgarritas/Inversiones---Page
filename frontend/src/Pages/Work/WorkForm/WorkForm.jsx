import React, { useEffect, useState } from 'react';
import axios from 'axios';
// Componentes
import HtmlBodyGmail from './Components/HtmlBodyGmail';
import InputField from './Components/InputField';


const WorkForm = () => {
  const [htmlBody, setHtmlBody] = useState('');
  const [attachment, setAttachment] = useState('Subir archivo');
  const [formValues, setFormValues] = useState({ // Todas las propiedades tiene que estar en minúscula
    nombre: '',
    apellidos: '',
    "correo electrónico": '',
    "número de teléfono": '',
  });

  //* Manejar cambio en inputs de form
  const handleListen = (event, label) => {
    const value = event.target.value;
    const key   = label.toLowerCase().replace(':', '');

    setFormValues((prevValues) => {
      const updatedValues = { ...prevValues, [key]: value };

      // Actualizar htmlBody en el mismo setState
      const htmlBodyGmail = HtmlBodyGmail( updatedValues, attachment );

      setHtmlBody(htmlBodyGmail.htmlBodyGmail);
      
      return updatedValues;
    });
  };

  //* Manejar cambio en archivo abjunto
  const handleFileChange = (event) => {
    setAttachment(event.target.files[0]?.name || 'Subir un archivo');
  };

  //* Manejar envio de form
  const handleSubmit = async (e) => {
    e.preventDefault();

    const to = 'poppingpleace@gmail.com';
    const subject = "Recepción de Solicitud de Empleo - [Nombre Completo del Candidato]"
    try {
      const response = await axios.post('http://localhost:5000/api/send-email/', {
        from: 'poppingpleace@gmail.com',
        to: to,
        subject: subject,
        html: htmlBody,
      });
      console.log('enviado');;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {  
    console.log(attachment);

  }, [ htmlBody, attachment ]);

  return (
    <article className="h-[100vh] px-[130px] flex items-center justify-end">
      <section className="px-20 py-8 border rounded-lg bg-zinc-200 border-black/10 dark:bg-white/10 dark:border-white/10">
        <form onSubmit={handleSubmit} className="w-72 flex flex-col gap-3">
          {/* Renderizar campos de entrada utilizando el componente  */}
          {['Nombre:', 'Apellidos:', 'Correo electrónico:', 'Número de teléfono:'].map((label, index) => (
            <InputField 
              key={index}
              label={label} 
              handleListen={handleListen}   
            />
          ))}
          
          {/* Campo para seleccionar archivo */}
          <div className="flex flex-col gap-1">
            <label className="text-black dark:text-white" htmlFor="fileInput">Documento:</label>
            <div className="px-4 py-1 flex items-center gap-2 relative rounded-lg border bg-zinc-100 border-black/10 dark:bg-white/10 dark:border-white/10 cursor-pointer">
              <svg className="fill-transparent" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z"/>
                <path className="fill-black/75 dark:fill-white/75" d="M11.5 4C8.851 4 6.739 6.38 7.027 9a1.01 1.01 0 0 1-.758 1.09A3.002 3.002 0 0 0 7 16h1a1 1 0 1 1 0 2H7a5 5 0 0 1-2-9.584 6.5 6.5 0 0 1 12.586-2.204A6.002 6.002 0 0 1 16 18a1 1 0 1 1 0-2 4 4 0 0 0 .655-7.947 1.01 1.01 0 0 1-.81-.732A4.502 4.502 0 0 0 11.5 4Zm1.5 8.416 1.293 1.292a1 1 0 0 0 1.414-1.416l-2.824-2.819a1.25 1.25 0 0 0-1.766 0l-2.824 2.82a1 1 0 0 0 1.414 1.415L11 12.416V21a1 1 0 1 0 2 0v-8.584Z"/>
              </svg>
              {attachment === 'Subir un archivo' // No acepta la condicion verdadera 
                ? <p className="text-black/75 dark:text-white/75 cursor-pointer z-10">{attachment}</p>
                : <p className="text-[#9CA3AF] dark:text-[#9CA3AF] cursor-pointer z-10">{attachment}</p>
              }
              <input
                className="absolute top-0 left-0 w-full h-full opacity-0 z-0"
                onChange={handleFileChange}
                type="file"
              />
            </div>
          </div>
          {/* Botón para enviar el formulario */}
          <button
            type="submit"
            className="mt-7 px-4 py-2 bg-colorPrimary hover:bg-colorHover transition duration-300 ease rounded-lg"
          >
            Enviar
          </button>
        </form>
      </section>
    </article>
  );
};

export default WorkForm;
