# NodeJS-tacos-el-chingon


Hola soy Jorge, Tacos el Chingon es un pequeño sistema de gestión de contenido de una pagina web, este sistema MVC fue creado en con Node.js.

/********************************************************************/

- Las vistas son generadas con un preprocesador engine de html llamado jade

- Las imágenes se suben a la nube con el servicio de cloudinary, cloudinary usa su propia dependencia npm para poder realizar la transferencia

- La base de datos es mongoDB


/*******************************************************************/
 
	Lista de módulos npm  instalados para realizar este proyecto:
	
	express      - para la creación y ejecución el servidor web
	body-parser  - para el manejo de variables
 	multer       - para el manejo de archivos a través de un input type file (multer version 0.1.8)
	mongoose     - para la conexión con la base de datos mongodb
	cloudinary   - para la subida de las imágenes a internet



/*****************************************************************/

        npm install express --save

        npm install body-parser --save
        
        npm install mongoose --save
        
        npm install multer@0.1.8 --save
        
        npm install cloudinary --save
        
/*****************************************************************/



en caso de que mongoose mande el error 'cannot find module':

cd node_modules/mongoose/node_modules/mongodb/node_modules/mongodb-core/

$ npm instal


/********************************************************************/

*Proyecto desarrollado con fines didácticos... y recreativos :v  :3
