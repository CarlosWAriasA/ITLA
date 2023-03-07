using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using System.Runtime.CompilerServices;
using practica4;
using practica_3;

namespace Practica2
{
    public class ManejoArchivoTXT : IArchivo
    {
        public string Path { get; set; }

        public void CrearArchivo()
        {
            Path = AppDomain.CurrentDomain.BaseDirectory + "DatosTXT.txt";
            TextWriter datos = new StreamWriter(Path);
            datos.WriteLine("Nombre - Edad - Pronvincia\n");
            datos.Close();
        }


        public void ActualizarArchivo(Usuario usuario)
        {
            TextWriter insertarTXT = File.AppendText(Path);
            insertarTXT.WriteLine(usuario.MostrarUsuario());
            insertarTXT.Close();
        }
    }
}
