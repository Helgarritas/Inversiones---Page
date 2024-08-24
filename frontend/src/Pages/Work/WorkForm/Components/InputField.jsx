import { useEffect,useRef } from "react";

function InputField({ label , handleListen }) {
  const input = useRef({});

  useEffect(() => {
    // Obtén el elemento de referencia específico para el label actual
    const inputRoll = input.current[label];
    if (inputRoll) {
      // Verifica si el atributo 'name' coincide antes de establecer 'max'
      if (inputRoll.getAttribute('name') === 'Número de teléfono:') {
        inputRoll.minLength =  '9'
        inputRoll.maxLength =  '9'
        inputRoll.placeholder = '+51'
      }

      if (inputRoll.getAttribute('name') === 'Correo electrónico:') {
        inputRoll.placeholder = '@gmail'
      }
    }
  }, [label]); // El efecto se ejecutará si cambia el `label`

  return (
    <>
      <div className="flex flex-col gap-1">
        <label className='text-black dark:text-white'>{ label }</label>
        <input 
          className="px-4 py-1 w-full border rounded-lg outline-none bg-zinc-100 border-black/10 dark:bg-white/10 dark:border-white/10" 
          onChange={( event ) => handleListen( event, label )}
          name={ label }
          required={ true }
          ref={(el) => (input.current[label] = el)}
        />
      </div>
    </>
  )
}

export default InputField;
