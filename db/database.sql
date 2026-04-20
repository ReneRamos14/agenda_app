CREATE UNIQUE INDEX unique_appointment
ON appointments (date, time)
WHERE status IN ('pending', 'confirmed');

//* tabla 1*//
id (uuid, primary key)
name (text)
phone (text)
date (date)
time (text)
status (text) -- pending, confirmed, cancelled
created_at (timestamp)

//* tabla doble reserva*//
CREATE UNIQUE INDEX unique_appointment
ON appointments (date, time)
WHERE status IN ('pending', 'confirmed');


