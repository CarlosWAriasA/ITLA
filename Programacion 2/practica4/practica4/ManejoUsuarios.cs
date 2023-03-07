using Practica2;
using practica4;
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
        private ManejoArchivos manejoArchivos = null;
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

            OpcionGuardar();
        }

        public void MostrarUsuarios()
        {
            if (usuarios.Count > 0)
            {
                Console.ForegroundColor = ConsoleColor.Blue;
                Console.WriteLine("\nID - Nombre Completo - Edad - Provincia");
                Console.ForegroundColor = ConsoleColor.White;
                for (int i = 0; i < usuarios.Count; i++)
                {
                    Console.WriteLine($"{i} - {usuarios[i].MostrarUsuario()}");
                }
            } else
            {
                Console.WriteLine("No hay usuarios para mostrar");
            } 
        }

        public void GuardarUsuarioEXCEL()
        {
            if (usuarios.Count > 0)
            {
                Console.WriteLine("\nIngrese el ID del usuario que quiere guardar");
                MostrarUsuarios();
                Console.ForegroundColor = ConsoleColor.Green;
                Console.Write("\nIngrese el id aqui -> ");
                Console.ForegroundColor = ConsoleColor.White;
                int id = Convert.ToInt32(Console.ReadLine());
                ManejoArchivoEXCEL manejoArchivoEXCEL = new ManejoArchivoEXCEL();
                manejoArchivos = new ManejoArchivos(manejoArchivoEXCEL);
                manejoArchivos.GuardarUsuario(usuarios[id]);
                Console.WriteLine("\nUsuario Guardado con exito");
            }
            else
            {
                Console.ForegroundColor = ConsoleColor.White;
                Console.WriteLine("No hay usuarios para guardar");
            }
        }

        public void OpcionGuardar()
        {
            Console.WriteLine("\nDesea guardar el usuario?");
            Console.WriteLine("\t1- Si");
            Console.WriteLine("\t2- No");
            int opcion = Convert.ToInt32(Console.ReadLine());

            switch (opcion )
            {
                case 1:
                    GuardarUsuario();
                    break;

                case 2:
                    break;

                default:
                    Console.WriteLine("Opcion Incorrecta!!!");
                    break;
            }
        }

        public void GuardarUsuario()
        {
            Console.WriteLine("En que formato desea guardar el usuario?");
            Console.WriteLine("\t1- TXT");
            Console.WriteLine("\t2- EXCEL");
            Console.WriteLine("\t3- JSON");
            int opcion = Convert.ToInt32(Console.ReadLine());

            switch (opcion ) 
            {
                case 1:
                    ManejoArchivoTXT manejoArchivoTXT = new ManejoArchivoTXT();
                    manejoArchivos = new ManejoArchivos(manejoArchivoTXT);
                    break;
                case 2:
                    ManejoArchivoEXCEL manejoArchivoEXCEL = new ManejoArchivoEXCEL();
                    manejoArchivos = new ManejoArchivos(manejoArchivoEXCEL);
                    break;
                case 3:
                    ManejoArchivoJSON manejoArchivoJSON = new ManejoArchivoJSON();
                    manejoArchivos = new ManejoArchivos(manejoArchivoJSON);
                    break;

                default:
                    Console.WriteLine("OPCION INCORRECTA!!!");
                    break;
            }

            manejoArchivos.GuardarUsuario(usuario);
        }
    }
}
