using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace practica_3
{
    class AccionesMenu
    {
        // Variables de referencia
        ManejoUsuarios manejoUsuarios = new ManejoUsuarios();
        ManejoConvertidorGrados manejoConvertidorGrados = new ManejoConvertidorGrados();
        ManejoCalculadora manejoCalculadora = new ManejoCalculadora();

        public void menuConvertidor()
        {
            bool program = true;

            while (program)
            {
                Console.ForegroundColor = ConsoleColor.White;
                Console.WriteLine("\t1- Convertir Farenheit A Celsius");
                Console.WriteLine("\t2- Volver Atras");

                Console.ForegroundColor = ConsoleColor.Green;
                Console.Write("\nIngrese el numero aqui -> ");
                Console.ForegroundColor = ConsoleColor.White;
                int opcion = Convert.ToInt32(Console.ReadLine());

                switch (opcion)
                {
                    case 1:
                        manejoConvertidorGrados.mostrarGradoFaC();
                        break;
                    case 2:
                        program = false;
                        break;

                    default:
                        Console.WriteLine("Opcion Invalida!!!!");
                        break;
                }
            }
        }

        public void menuUsuarios()
        {
            bool program = true;

            while (program)
            {
                Console.ForegroundColor = ConsoleColor.Blue;
                Console.WriteLine("\n Que desea realizar?");
                Console.ForegroundColor = ConsoleColor.White;
                Console.WriteLine("\t1- Crear Usuario");
                Console.WriteLine("\t2- Mostrar Usuarios");
                Console.WriteLine("\t3- Volver Atras");

                Console.ForegroundColor = ConsoleColor.Green;
                Console.Write("\nIngrese el numero aqui -> ");
                Console.ForegroundColor = ConsoleColor.White;
                int opcion = Convert.ToInt32(Console.ReadLine());

                switch (opcion) 
                { 
                    case 1:
                        manejoUsuarios.CrearUsuario();
                        break;
                    case 2:
                        manejoUsuarios.MostrarUsuarios();
                        break;

                    case 3:
                        program = false;
                        break;

                    default:
                        Console.WriteLine("Opcion Invalida!!!!");
                        break;
                }
            }
        }

        public void menuCalculadora()
        {
            bool program = true;

            while (program)
            {
                Console.ForegroundColor = ConsoleColor.Blue;
                Console.WriteLine("\n Que desea realizar?");
                Console.ForegroundColor = ConsoleColor.White;
                Console.WriteLine("\t1- Sumar");
                Console.WriteLine("\t2- Volver Atras");

                Console.ForegroundColor = ConsoleColor.Green;
                Console.Write("\nIngrese el numero aqui -> ");
                Console.ForegroundColor = ConsoleColor.White;
                int opcion = Convert.ToInt32(Console.ReadLine());

                switch (opcion)
                {
                    case 1:
                        manejoCalculadora.sumarNumeros();
                        break;

                    case 2:
                        program = false;
                        break;

                    default:
                        Console.WriteLine("Opcion Invalida!!!!");
                        break;
                }
            }
        }
    }
}
