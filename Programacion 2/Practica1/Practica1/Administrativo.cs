using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practica1
{
    public class EmpleadoAdministrativo : Empleado
    {
        public EmpleadoAdministrativo(string cedula, string nombre, string departamento, int precioXHora, int horasTrabajadas) : base(cedula, nombre, departamento, precioXHora, horasTrabajadas)
        {
            this.Categoria = "Administrativo";
        }
    }
}
