using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace practica_3
{
    class ManejoUsuarios
    {
        private Usuario usuario;
        private List<Usuario> usuarios = new List<Usuario>();
        private ManejoArchivoEXCEL manejoArchivoEXCEL = new ManejoArchivoEXCEL();
        public void CrearUsuario()
        {
            Console.ForegroundColor = ConsoleColor.White;
            Console.Write("\nIngrese su nombre: ");
            string nombre = Console.ReadLine();

            Console.Write("Ingrese su apellido: ");
            string apellido = Console.ReadLine();

            Console.Write("Ingrese su dia de nacimiento: ");
            int diaNacimiento = Convert.ToInt32(Console.ReadLine());

            Console.Write("Ingrese su mes(numero del mes) de nacimiento: ");
            int mesNacimiento = Convert.ToInt32(Console.ReadLine());

            Console.Write("Ingrese su año de nacimiento: ");
            int añoNacimiento = Convert.ToInt32(Console.ReadLine());

            Console.Write("Ingrese la provincia en la que vive: ");
            string provincia = Console.ReadLine();

            this.usuario = new Usuario();
            int edad = this.usuario.CalcularEdad(diaNacimiento, mesNacimiento, añoNacimiento);

            this.usuario = new Usuario(nombre, apellido, edad, provincia);
            usuarios.Add(usuario);
        }

        public void MostrarUsuarios()
        {
            Console.ForegroundColor = ConsoleColor.Blue;
            Console.WriteLine("\nID - Nombre Completo - Edad - Provincia");
            Console.ForegroundColor = ConsoleColor.White;
            for (int i = 0; i < usuarios.Count; i++)
            {
                Console.WriteLine($"{i} - {usuarios[i].MostrarUsuario()}");
            }
        }

        public void GuardarUsuario()
        {
            if (usuarios.Count > 0)
            {
            Console.WriteLine("\nIngrese el ID del usuario que quiere guardar");
            MostrarUsuarios();
            Console.ForegroundColor = ConsoleColor.Green;
            Console.Write("\nIngrese el id aqui -> ");
            Console.ForegroundColor = ConsoleColor.White;
            int id = Convert.ToInt32(Console.ReadLine());
            manejoArchivoEXCEL.updateExcel(usuarios[id]);
            manejoArchivoEXCEL.saveExcel();
            Console.WriteLine("\nUsuario Guardado con exito");
            } else
            {
                Console.ForegroundColor = ConsoleColor.White;
                Console.WriteLine("No hay usuarios para guardar");
            }
        }
    }
}
