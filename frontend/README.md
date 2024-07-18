## Prerrequisitos

Antes de comenzar, asegúrate de tener instalada la última versión de Node.js en tu máquina.
Crea un archivo `.env` en la raíz del directorio `/frontend` con la siguiente configuración:

```
VITE_API_BASE_URL=http://localhost:3001/api
```

El valor `http://localhost:3001/api` es un ejemplo y representa la URL base para tu API. Asegúrate de ajustar este valor según la configuración de tu entorno de desarrollo o producción.

## Instalación

Navega al directorio /frontend e instala las dependencias del proyecto:

```
npm install
```

## Uso

Una vez instaladas las dependencias, puedes iniciar el servidor de desarrollo ejecutando:
```
npm run dev
```
## ¡Felicidades!

¡Tu proyecto está en funcionamiento!

## Validación de CORS

Es posible que necesites desactivar la validación de CORS en tu navegador. Sigue estos pasos:

1. Haz clic derecho en tu escritorio y añade un nuevo acceso directo.

<p align="center" ><img width="100%" align="center"src="https://res.cloudinary.com/dvyr2xsqo/image/upload/v1711684567/my_pictures/pic1_uwysh3.png"></p> 

2. Añade el destino como "[RUTA_AL_EJECUTABLE_DEL_NAVEGADOR]" --disable-web-security --disable-gpu --user-data-dir=~/browserTemp

<p align="center" ><img width="100%" align="center"src="https://res.cloudinary.com/dvyr2xsqo/image/upload/v1711684614/my_pictures/pic2_j54uui.png"></p> 

3. Haz clic en Aceptar.

Reemplaza [RUTA_AL_EJECUTABLE_DEL_NAVEGADOR] con la ruta al archivo ejecutable de tu navegador. Esto variará según tu sistema operativo y el navegador que estés utilizando.

Por ejemplo, si estás usando Google Chrome en Windows, el destino podría ser:

```
C:\Program Files\Google\Chrome\Application\chrome.exe" --disable-web-security --disable-gpu --user-data-dir=~/chromeTemp
```

Después de crear el acceso directo, úsalo para abrir el navegador con la validación de CORS desactivada.