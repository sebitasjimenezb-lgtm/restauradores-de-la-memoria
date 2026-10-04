// Función para cambiar de sección en la navegación
function showSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  const buttons = document.querySelectorAll('.nav-btn');

  // Ocultar todas las secciones
  sections.forEach(section => {
    section.classList.remove('active');
  });

  // Quitar estado activo a todos los botones
  buttons.forEach(button => {
    button.classList.remove('active');
  });

  // Mostrar la sección seleccionada y activar el botón correspondiente
  document.getElementById(sectionId).classList.add('active');
  
  if (event && event.currentTarget) {
    event.currentTarget.classList.add('active');
  }
}

// Escuchar el envío del formulario de aportes
document.addEventListener('DOMContentLoaded', () => {
  const formAporte = document.getElementById('formAporte');

  if (formAporte) {
    formAporte.addEventListener('submit', function(e) {
      e.preventDefault();

      const titulo = document.getElementById('titulo').value;
      const categoria = document.getElementById('categoria').value;
      const autor = document.getElementById('autor').value;

      alert(`¡Registro Exitoso!\n\nTítulo: ${titulo}\nCategoría: ${categoria}\nRegistrado por: ${autor}\n\nEl elemento ha sido guardado para revisión.`);

      // Limpiar los campos del formulario
      this.reset();
    });
  }
});