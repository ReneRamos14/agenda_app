import { supabase } from './supabase.js'

async function prueba() {
  const { data, error } = await supabase
    .from('citas')
    .select('*')

  console.log(data, error)
}

prueba()

const supabaseUrl = "https://agenda_app.supabase.co";
const supabaseKey = "TU_ANON_KEY";

const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

async function pruebaConexion() {
  const { data, error } = await supabase
    .from("appointments")
    .select("*");

  console.log(data, error);
}

pruebaConexion();