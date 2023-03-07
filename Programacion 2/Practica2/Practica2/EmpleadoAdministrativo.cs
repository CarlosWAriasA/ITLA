using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practica2
{
    public class EmpleadoAdministrativo : IEmpleado
    {
        public string Cedula { get; set; }
        public string Codigo { get; set; }
        public string Nombre { get; set; }
        public string Departamento { get; set; }
        public int PrecioXHora { get; set; }
        public int HorasTrabajadas { get; set; }
        public int SalarioNeto { get; set; }
        public string Categoria { get; set; }

        public EmpleadoAdministrativo(IEmpleado empleado)
        {
            this.Cedula = empleado.Cedula;
            this.Nombre = empleado.Nombre;
            this.Departamento = empleado.Departamento;
            this.PrecioXHora = empleado.PrecioXHora;
            this.HorasTrabajadas = empleado.HorasTrabajadas;
            this.Codigo = this.Departamento.Substring(0, 3) + GeneradorCodigo.GenerarCodigo();
            this.Categoria = "Administrativo";
        }

        public EmpleadoAdministrativo(string cedula, string nombre, string departamento, int precioXHora, int horasTrabajadas)
        {
            this.Cedula = cedula;
            this.Nombre = nombre;
            this.Departamento = departamento;
            this.PrecioXHora = precioXHora;
            this.HorasTrabajadas = horasTrabajadas;
            this.Codigo = this.Departamento.Substring(0, 3) + GeneradorCodigo.GenerarCodigo();
            this.Categoria = "Administrativo";
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
