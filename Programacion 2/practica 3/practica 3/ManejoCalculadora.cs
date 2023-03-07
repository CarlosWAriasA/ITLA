using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace practica_3
{
    class ManejoCalculadora
    {
        private OperacionesBasicas operacionesBasicas = new OperacionesBasicas();
        public List<double> pedirNumeros()
        {
            Console.ForegroundColor = ConsoleColor.White;
            Console.Write("\nIngrese el primer numero -> ");
            double num1 = Convert.ToDouble(Console.ReadLine());

            Console.Write("Ingrese el segundo numero numero -> ");
            double num2 = Convert.ToDouble(Console.ReadLine());

            return new List<double> { num1, num2};
        }

        public void sumarNumeros()
        {
            List<double> nums = pedirNumeros();
            Console.ForegroundColor = ConsoleColor.Yellow;
            Console.WriteLine($"\nLa suma entre {nums[0]} y {nums[1]} es " + operacionesBasicas.Sumar(nums[0], nums[1]));
        }

        public void restarNumeros()
        {
            List<double> nums = pedirNumeros();
            Console.ForegroundColor = ConsoleColor.Yellow;
            Console.WriteLine($"\nLa resta entre {nums[0]} y {nums[1]} es " + operacionesBasicas.Restar(nums[0], nums[1]));
        }

        public void multiplicarNumeros()
        {
            List<double> nums = pedirNumeros();
            Console.ForegroundColor = ConsoleColor.Yellow;
            Console.WriteLine($"\nLa multiplicacion entre {nums[0]} y {nums[1]} es " + operacionesBasicas.Multiplicar(nums[0], nums[1]));
        }

        public void dividirNumeros()
        {
            List<double> nums = pedirNumeros();
            Console.ForegroundColor = ConsoleColor.Yellow;
            Console.WriteLine($"\nLa division entre {nums[0]} y {nums[1]} es " + operacionesBasicas.Dividir(nums[0], nums[1]));
        }
    }
}
