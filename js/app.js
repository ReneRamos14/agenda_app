let servicioSeleccionado = "";

function selectService(servicio) {
  servicioSeleccionado = servicio;

  document.querySelectorAll('.service-card').forEach(card => {
    card.classList.remove('active');
  });

  event.currentTarget.classList.add('active');
}

const diasCerrados = [1, 2]; // lunes=1, martes=2

function validarHorario(fecha, hora) {
  const dia = new Date(fecha).getDay();

  // Domingo=0, Lunes=1...
  if (diasCerrados.includes(dia)) {
    return "Cerrado ese día";
  }

  const horaNum = parseInt(hora.split(":")[0]);

  if (horaNum < 8 || horaNum >= 20) {
    return "Fuera de horario laboral (8am - 8pm)";
  }

  return null;
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

  // 🔥 VALIDAR SI YA ESTÁ OCUPADO
  const ocupado = citasOcupadas.some(cita =>
    cita.fecha === fecha && cita.hora === hora
  );

  if (ocupado) {
    alert("Ese horario ya está ocupado, elige otro");
    return;
  }

  // GUARDAR SIMULADO
  citasOcupadas.push({ fecha, hora });

  const mensaje = `Hola, quiero agendar una cita:
Nombre: ${nombre}
Servicio: ${servicioSeleccionado}
Fecha: ${fecha}
Hora: ${hora}`;

  const url = `https://wa.me/5216560000000?text=${encodeURIComponent(mensaje)}`;

  window.open(url, "_blank");

  const errorHorario = validarHorario(fecha, hora);
if (errorHorario) {
  alert(errorHorario);
  return;
}
}

  const mensaje = `Hola, quiero agendar una cita:
Nombre: ${nombre}
Servicio: ${servicioSeleccionado}
Fecha: ${fecha}
Hora: ${hora}`;

  const url = `https://wa.me/5216561375652?text=${encodeURIComponent(mensaje)}`;

  window.open(url, "_blank");
}

let citasOcupadas = [
  { fecha: "2026-04-20", hora: "13:00" },
  { fecha: "2026-04-20", hora: "15:00" }
];