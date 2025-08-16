
# 📋 Attendace App Hybrid

Aplicación híbrida desarrollada con **Ionic + React** para el **registro y consulta de asistencias** de usuarios.
La app se conecta a una API externa para autenticar usuarios y obtener datos de asistencia en tiempo real:

**API utilizada:** [`https://puce.estudioika.com/api/examen.php`](https://puce.estudioika.com/api/examen.php)

## 🔍 Funcionalidades

* **Login** mediante usuario y contraseña (conexión a API).
* Consulta de registros de asistencia asociados al usuario autenticado.
* Interfaz optimizada para **navegador y dispositivos Android**.
* Uso de **Capacitor** para integración con Android Studio.

---

## ⚙️ Instalación y configuración

```bash
# 1️⃣ Clonar el repositorio
git clone https://github.com/ArielU10/attendace-app-hybrid.git
cd attendace-app-hybrid

# 2️⃣ Instalar dependencias
npm install

# 3️⃣ Ejecutar en navegador (modo desarrollo)
ionic serve
```

---

## 📱 Comandos para Android

```bash
# 1️⃣ Construir la app
ionic build

# 2️⃣ Sincronizar cambios con Android
npx cap sync android

# 3️⃣ Abrir en Android Studio
npx cap open android

# 4️⃣ Ejecutar en dispositivo o emulador
ionic capacitor run android
```

---

## 🌐 Migración y despliegue

Si realizas cambios en el código, sigue estos pasos para reflejarlos en Android:

```bash
ionic build       # Genera la carpeta www
npx cap copy      # Copia los archivos web al proyecto nativo
npx cap sync      # Sincroniza plugins y configuraciones
npx cap open android  # Abre en Android Studio para compilar y ejecutar
```

---

## 📂 Estructura del proyecto

* `src/` → Código fuente React + Ionic
* `public/` → Recursos estáticos
* `android/` → Proyecto nativo Android generado por Capacitor

