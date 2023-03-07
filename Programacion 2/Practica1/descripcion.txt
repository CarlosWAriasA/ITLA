CREAR APLICACION CON LOS SIGUIENTES REQUERIMIENTOS

Aplicación que maneje la creacion de empleados. 

Para cada empleado, al ser ingresado al sistema, se requieren los siguientes datos:

Cedula
Codigo (Generado por la aplicacion)
Nombre
Departamento
Precio por hora
Horas trabajadas
Salario Neto (Calculado por la aplicacion)
Nota 1: Para generar el codigo del empleado, la nomenclatura requerida es: las 3 primeras letras del departamento + una secuencia de 4 digitos.

Nota 2: La organizacion clasifica a los empleados en tres categorías, con las siguientes especificaciones:

Gerencial
Administrativo
Operativo
Requerimientos de diseño:

a)    Por políticas de la organización, únicamente puede haber un empleado de la categoria gerencial activo en la empresa. De las demás categorías, puede haber múltiples empleados. Aplicando el patrón de diseño Singleton, asegúrese de que no se pueda crear una segunda instancia de la referida clase.

b)    Elabore un diagrama UML donde presente su propuesta de diseño para esta aplicación.

Requerimientos de funcionalidad:

Incluya las siguientes funcionalidades:

Crear: Crear un empleado
Ver: Visualizar los empleados que hayan sido creados
Cobrar: Aquí debe realizar el cálculo del salario tomando en cuenta el precio x hora y las horas trabajadas. 
(No olvide el método para generar los códigos)
SUGERENCIA: Haga uso de listas para almacenar de manera estática los datos de los empleados durante la ejecución de la aplicación.