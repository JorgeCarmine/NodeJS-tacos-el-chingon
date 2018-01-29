# Tacos El Chingon


Hola soy Jorge Carmine, Tacos el Chingon es un pequeño sistema de gestión de contenido de una pagina web, este sistema MVC fue creado con Node.js.

/********************************************************************/

- Las vistas son generadas con el preprocesador engine de html pug (antes jade)

- Las imágenes se suben a la nube con el servicio de cloudinary, cloudinary usa su propia dependencia npm para poder realizar la transferencia

- La base de datos es mongoDB


/*******************************************************************/
 
	Lista de módulos npm  instalados para realizar este proyecto:
	
	express      - para la creación y ejecución el servidor web
	body-parser  - para obtener los datos dentro del body de solicitudes http
 	multer       - para el manejo de archivos por medio de un form data
	mongoose     - para la conexión con la base de datos mongodb
	cloudinary   - para la subida de las imágenes a internet



en caso de que mongoose mande el error 'cannot find module':

cd node_modules/mongoose/node_modules/mongodb/node_modules/mongodb-core/

$ npm instal


/********************************************************************/

*Proyecto desarrollado con fines didácticos... y recreativos :D
