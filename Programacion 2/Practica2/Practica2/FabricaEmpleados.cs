using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practica2
{
    public class FabricaEmpleados
    {
        public static IEmpleado CrearEmpleado(string opcion, string cedula, string nombre, string departamento, int precioXHora, int horasTrabajadas)
        {
            switch (opcion)
            {
                case "1":
                    return EmpleadoGerencial.NuevoEmpleado(cedula, nombre, departamento, precioXHora, horasTrabajadas);
                case "2":
                    return new EmpleadoAdministrativo(cedula, nombre, departamento, precioXHora, horasTrabajadas);
                default:
                    return new EmpleadoOperativo(cedula, nombre, departamento, precioXHora, horasTrabajadas);
            }
        }
    }
}
