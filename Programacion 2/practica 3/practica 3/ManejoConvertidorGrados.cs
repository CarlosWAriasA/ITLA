using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace practica_3
{
    class ManejoConvertidorGrados
    {
        private ConvertidorGrados convertidorGrados = new ConvertidorGrados();
        public void mostrarGradoCaF() 
        {
            Console.ForegroundColor = ConsoleColor.White;
            Console.Write("Ingrese el grado celsius: ");
            int grado = Convert.ToInt32(Console.ReadLine());
            Console.ForegroundColor = ConsoleColor.Yellow;
            Console.WriteLine($"\n{grado}°C son {Math.Round(convertidorGrados.CelsiusAFarenheit(grado))}°F");
        }

        public void mostrarGradoCaK()
        {
            Console.ForegroundColor = ConsoleColor.White;
            Console.Write("Ingrese el grado celsius: ");
            int grado = Convert.ToInt32(Console.ReadLine());
            Console.ForegroundColor = ConsoleColor.Yellow;
            Console.WriteLine($"\n{grado}°C son {Math.Round(convertidorGrados.CelsiusAKelvin(grado))}°K");
        }

        public void mostrarGradoFaC()
        {
            Console.ForegroundColor = ConsoleColor.White;
            Console.Write("Ingrese el grado farenheit: ");
            int grado = Convert.ToInt32(Console.ReadLine());
            Console.ForegroundColor = ConsoleColor.Yellow;
            Console.WriteLine($"\n{grado}°F son {Math.Round(convertidorGrados.FarenheitACelsius(grado))}°C");
        }

        public void mostrarGradoFaK()
        {
            Console.ForegroundColor = ConsoleColor.White;
            Console.Write("Ingrese el grado farenheit: ");
            int grado = Convert.ToInt32(Console.ReadLine());
            Console.ForegroundColor = ConsoleColor.Yellow;
            Console.WriteLine($"\n{grado}°F son {Math.Round(convertidorGrados.FarenheitAKelvin(grado))}°K");
        }

        public void mostrarGradoKaC()
        {
            Console.ForegroundColor = ConsoleColor.White;
            Console.Write("Ingrese el grado kelvin: ");
            int grado = Convert.ToInt32(Console.ReadLine());
            Console.ForegroundColor = ConsoleColor.Yellow;
            Console.WriteLine($"\n{grado}°K son {Math.Round(convertidorGrados.KelvinACelsius(grado))}°C");
        }

        public void mostrarGradoKaF()
        {
            Console.ForegroundColor = ConsoleColor.White;
            Console.Write("Ingrese el grado kelvin: ");
            int grado = Convert.ToInt32(Console.ReadLine());
            Console.ForegroundColor = ConsoleColor.Yellow;
            Console.WriteLine($"\n{grado}°K son {Math.Round(convertidorGrados.KelvinAFarenheit(grado))}°F");
        }
    }
}
