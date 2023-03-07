using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practica1
{
    public class EmpleadoGerencial : Empleado
    {
        private static EmpleadoGerencial gerencial;

        private EmpleadoGerencial(string cedula, string nombre, string departamento, int precioXHora, int horasTrabajadas) : base(cedula, nombre, departamento, precioXHora, horasTrabajadas)
        {
            this.Categoria = "Gerencial";
        }

        public static EmpleadoGerencial NuevoEmpleado(string cedula, string nombre, string departamento, int precioXhora, int horasTrabajadas)
        {
            if (gerencial == null)
            {
                gerencial = new EmpleadoGerencial(cedula, nombre, departamento, precioXhora, horasTrabajadas);
                return gerencial;
            } else
            {
                return gerencial;
            }
        }
    }
}
