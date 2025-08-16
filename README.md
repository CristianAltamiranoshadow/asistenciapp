📋 App Híbrida de Asistencias
Aplicación híbrida hecha con Ionic + React para el registro y consulta de asistencias.
La app se conecta a una API externa para validar usuarios y mostrar en tiempo real los datos de asistencia:
👉 API: https://puce.estudioika.com/api/examen.php
🔍 ¿Qué hace esta app?
Inicio de sesión con usuario y clave (validado contra la API).
Consulta de los registros de asistencia de cada usuario que entra.
Interfaz pensada para usarla en navegador, teléfonos Android y también en Mac.
Uso de Capacitor para integrarla con Android Studio y con Xcode en Mac.
⚙️ Cómo instalar y correr el proyecto
# 1️⃣ Clonar el repositorio
git clone https://github.com/CristianAltamiranoshadow/asistenciapp.git)
cd attendace-app-hybrid

# 2️⃣ Instalar dependencias
npm install

# 3️⃣ Correr en navegador (modo desarrollo)
ionic serve
📱 Para Android (pasos típicos)
# 1️⃣ Generar la app
ionic build

# 2️⃣ Sincronizar con Android
npx cap sync android

# 3️⃣ Abrir en Android Studio
npx cap open android

# 4️⃣ Ejecutar en el celu o emulador
ionic capacitor run android
🍏 Para MacOS / iOS
Si quieres correrlo en MacOS (y generar un .ipa para iPhone/iPad), necesitas tener instalado Xcode:
# 1️⃣ Generar la app
ionic build

# 2️⃣ Sincronizar con iOS
npx cap sync ios

# 3️⃣ Abrir en Xcode
npx cap open ios

# 4️⃣ Ejecutar en un simulador de iPhone o en tu Mac
ionic capacitor run ios
⚠️ Nota: en Mac solo podrás compilar para iOS si tienes Xcode configurado. Para probarlo en Mac de escritorio basta con usar ionic serve.
🌐 Para actualizar y desplegar
Si cambias código, sigue este orden para que los cambios pasen al proyecto nativo:
ionic build       # Genera la carpeta www
npx cap copy      # Copia los archivos web al proyecto nativo
npx cap sync      # Sincroniza plugins y configuraciones
npx cap open android  # O "npx cap open ios" en Mac
📂 Organización del proyecto
src/ → Código fuente (React + Ionic)
public/ → Archivos estáticos (imágenes, íconos, etc.)
android/ → Proyecto nativo Android creado por Capacitor
ios/ → Proyecto nativo iOS generado por Capacitor (si corres en Mac)
