using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace practica_3
{
    class ConvertidorGrados
    {
        public double CelsiusAFarenheit(double grado)
        {
            return (grado * 9 / 5) + 32;
        } 

        public double FarenheitACelsius(double grado)
        {
            return (grado - 32) * 5 / 9;
        }

        public double CelsiusAKelvin(double grado)
        {
            return grado + 273.15;
        }

        public double FarenheitAKelvin(double grado)
        {
            return (grado - 32) * 5 / 9 + 273.15;
        }

        public double KelvinAFarenheit(double grado)
        {
            return (grado - 273.15) * 9 / 5 + 32;
        }

        public double KelvinACelsius(double grado)
        {
            return grado - 273.15;
        }
    }
}
