using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practica2
{
    public interface IEmpleado
    {
        public string Cedula { get; set; }
        public string Codigo { get; set; }

        public string Nombre { get; set; }
        public string Departamento { get; set; }
        public int PrecioXHora { get; set; }
        public int HorasTrabajadas { get; set; }
        public int SalarioNeto { get; set; }

        public string Categoria { get; set; }

        string MostrarEmpleado();
        string MostrarDatosYSalario();

    }
}
