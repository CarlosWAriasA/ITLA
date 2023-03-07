using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using System.Text;
using System.Runtime.CompilerServices;

namespace Practica2
{
    public static class ManejoArchivoTXT
    {
        private static string path = "Voucher.txt";
        public static void crearArchivo()
        {
            TextWriter voucher = new StreamWriter(path);
            voucher.WriteLine("Cedula-Nombre-Departamento-Categoria-SalarioNeto\n");
            voucher.Close();
        }


        public static void InsertarTXT(string texto)
        {
            TextWriter insertarTXT = File.AppendText(path);
            insertarTXT.WriteLine(texto);
            insertarTXT.Close();
        }
    }
}
