using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace practica_3
{
    class Usuario
    {
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public int Edad { get; set; }
        public string Provincia { get; set; }
        
        public Usuario() { }
        public Usuario(string nombre, string apellido, int edad, string provincia)
        {
            Nombre = nombre;
            Apellido = apellido;
            Edad = edad;
            Provincia = provincia;
        }

        public int CalcularEdad(int dia, int mes, int año)
        {
            DateTime currentDate = DateTime.Now;
            DateTime birthDate = new DateTime(año, mes, dia);
            TimeSpan difference = currentDate - birthDate;
            int age = (int)(difference.TotalDays / 365.25);
            return age;
        }

        public string MostrarUsuario()
        {
            return $"{this.Nombre} {this.Apellido}, {this.Edad}, {this.Provincia}";
        }
    }
}
