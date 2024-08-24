import { useEffect } from 'react';

function HtmlBodyGmail( updatedValues, attachment ) {
  const date = new Date();
  const year = date.getFullYear();
  const empresa = 'Contmin S.A.C';

  // Generar el cuerpo del HTML
  const htmlBodyGmail = `
    <div class="email-container" style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
      <div class="email-header" style="background-color: #f4f4f4; padding: 10px; text-align: center;">
          <h1>Solicitud de Trabajo Recibida</h1>
      </div>
      <div class="email-body" style="padding: 20px;">
          <h2>Detalles del Candidato</h2>
          <p>Hemos recibido una nueva solicitud de trabajo. A continuación, los detalles del candidato:</p>
          <ul style="list-style: none; padding: 0;">
              <li><strong>Nombre completo:</strong> ${updatedValues.nombre} ${updatedValues.apellidos}</li>
              <li><strong>Correo electrónico:</strong> ${updatedValues["correo electrónico"] || 'No especificada'}</li>
              <li><strong>Número de teléfono:</strong> ${updatedValues["número de teléfono"] || 'No especificada'}</li>
              <li><strong>Posición solicitada:</strong> ${updatedValues["posición solicitada"] || 'No especificada'}</li>
          </ul>
          <p>El currículum ha sido adjuntado como un archivo PDF.</p>
          <p>${attachment}</p>
      </div>
      <div class="email-footer" style="background-color: #f4f4f4; padding: 10px; text-align: center;">
          <p>Este es un correo automático, por favor no responder.</p>
          <p>&copy; ${year} ${empresa}. Todos los derechos reservados.</p>
      </div>
    </div>
  `;

  return { htmlBodyGmail };
}

export default HtmlBodyGmail;