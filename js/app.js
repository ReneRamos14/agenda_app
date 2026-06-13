console.log("STATUS:", res.status)
console.log("app conectado 🔥")

// 🔌 CONEXIÓN SUPABASE
const supabaseUrl = "https://lkvotmqmiqjjjapflyov.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxrdm90bXFtaXFqamphcGZseW92Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY1NTg1NTMsImV4cCI6MjA5MjEzNDU1M30.XhgrlsY2oU3u5pW3iqjmp5AxtjT4x8DRvi3IIFNQVp0"
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey)


// 🧪 PRUEBA
async function prueba() {
  console.log("probando conexión...")

  try {
    const res = await supabase.from('citas').select('*')

    console.log("STATUS:", res.status)
    console.log("DATA:", res.data)
    console.log("ERROR:", res.error)

  } catch (e) {
    console.error("ERROR GENERAL:", e)
  }
}

prueba()

// 🧠 VARIABLES
let servicioSeleccionado = ""


// ✂️ SELECCIONAR SERVICIO
window.selectService = function(servicio) {
  servicioSeleccionado = servicio
  console.log("Servicio:", servicio)
}


// 📅 CONFIRMAR CITA
window.confirmarCita = async function() {
  const nombre = document.getElementById('nombre').value
  const fecha = document.getElementById('fecha').value
  const hora = document.getElementById('hora').value

  if (!nombre || !fecha || !hora || !servicioSeleccionado) {
    alert("Completa todos los campos")
    return
  }

  const { error } = await supabase
    .from('citas')
    .insert([
      { nombre, fecha, hora, servicio: servicioSeleccionado }
    ])

  if (error) {
    alert("Ese horario ya está ocupado")
    console.error(error)
  } else {
    alert("Cita reservada ✅")
  }
}