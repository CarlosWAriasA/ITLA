using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practica2
{
    public class EmpleadoGerencial : IEmpleado
    {
        public string Cedula { get; set; }
        public string Codigo { get; set; }
        public string Nombre { get; set; }
        public string Departamento { get; set; }
        public int PrecioXHora { get; set; }
        public int HorasTrabajadas { get; set; }
        public int SalarioNeto { get; set; }
        public string Categoria { get; set; }

        private static EmpleadoGerencial gerencial;

        private EmpleadoGerencial(string cedula, string nombre, string departamento, int precioXHora, int horasTrabajadas)
        {
            this.Cedula = cedula;
            this.Nombre = nombre;
            this.Departamento = departamento;
            this.PrecioXHora = precioXHora;
            this.HorasTrabajadas = horasTrabajadas;
            this.Codigo = this.Departamento.Substring(0, 3) + GeneradorCodigo.GenerarCodigo();
            this.Categoria = "Gerencial";
        }

        public static EmpleadoGerencial? NuevoEmpleado(IEmpleado empleado)
        {
            if (gerencial == null)
            {
                gerencial = new EmpleadoGerencial(empleado.Cedula, empleado.Nombre, empleado.Departamento, empleado.PrecioXHora, empleado.HorasTrabajadas);
                return gerencial;
            }
            else
            {
                return gerencial;
            }
        }

        public static EmpleadoGerencial? NuevoEmpleado(string cedula, string nombre, string departamento, int precioXHora, int horasTrabajadas)
        {
            if (gerencial == null)
            {
                gerencial = new EmpleadoGerencial(cedula, nombre, departamento, precioXHora, horasTrabajadas);
                return gerencial;
            }
            else
            {
                return gerencial;
            }
        }

        public string MostrarEmpleado()
        {
            return $"{this.Cedula}, {this.Codigo}, {this.Nombre}, {this.Departamento}, {this.PrecioXHora}, {this.HorasTrabajadas}, {this.Categoria}";
        }

        public string MostrarDatosYSalario()
        {
            return $"{this.Cedula}, {this.Nombre}, {this.Departamento}, {this.Categoria}, {this.SalarioNeto}";
        }
    }
}
