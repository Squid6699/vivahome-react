-AGREGAR LOADING A LOGIN Y REGISTRARSE ✅
-FILTROS. ✅
-PAGINACION. ✅
-PUBLICAR PROPIEDAD
-VER TUS PROPIEDADES (con estado de DISPONIBLE, NO AUTORIZADA O VENDIDA). ✅
-VER CITAS AGENDADAS.
-SOLICITAR AYUDA DE VENDEDOR.

NIVEL ADMINISTRADOR
-DAR DE ALTA VENDEDOR
-DAR DE ALTA ADMINISTRADORES
-AUTORIZAR PROPIEDADES
-ASIGNAR VENDEDOR
-PROPIEDADES VENDIDAS

NIVEL VENDEDOR
-PROPIEDADES ASIGNADAS
-SUBIR FOTO



QUITAR ObjectId en misPropiedades.js
Cambiar de string a ObjectId en el schema de Propiedades


const propiedades = await Propiedades.find({idUsuario: "ObjectId("+idUsuario._id+")"});
const propiedades = await Propiedades.find({idUsuario: idUsuario._id});
