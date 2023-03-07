using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practica1
{
    public abstract class Empleado
    {
        public string Cedula { get; set; }
        public string Codigo { get; set; }
        
        public string Nombre { get; set; }
        public string Departamento { get; set; }
        public int PrecioXHora { get; set; }
        public int HorasTrabajadas { get; set; }
        public int SalarioNeto { get; set; }

        public string Categoria { get; set; }

        public Empleado(string cedula, string nombre, string departamento, int precioXHora, int horasTrabajadas)
        {
            Cedula = cedula;
            Nombre = nombre;
            Departamento = departamento;
            PrecioXHora = precioXHora;
            HorasTrabajadas = horasTrabajadas;
            this.Codigo = this.Departamento.Substring(0, 3) + GeneradorCodigo.GenerarCodigo();
        }

        public override string ToString()
        {
            return $"{Cedula}, {Codigo}, {Nombre}, {Departamento}, {PrecioXHora}, {HorasTrabajadas}, {Categoria}";
        }
    }
}
