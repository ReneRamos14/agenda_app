let servicioSeleccionado = "";

function selectService(servicio) {
  servicioSeleccionado = servicio;

  document.querySelectorAll('.service-card').forEach(card => {
    card.classList.remove('active');
  });

  event.currentTarget.classList.add('active');
}

function confirmarCita() {
  const nombre = document.getElementById("nombre").value;
  const telefono = document.getElementById("telefono").value;
  const fecha = document.getElementById("fecha").value;
  const hora = document.getElementById("hora").value;

  if (!nombre || !telefono || !fecha || !hora || !servicioSeleccionado) {
    alert("Completa todos los campos");
    return;
  }

  const mensaje = `Hola, quiero agendar una cita:
Nombre: ${nombre}
Servicio: ${servicioSeleccionado}
Fecha: ${fecha}
Hora: ${hora}`;

  const url = `https://wa.me/5216560000000?text=${encodeURIComponent(mensaje)}`;

  window.open(url, "_blank");
}