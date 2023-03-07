using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practica2
{
    public static class GeneradorCodigo
    {

        private static Random numerosRandom = new Random();
        private static int codigo;
        private static List<int> codigos = new List<int>();
        public static int GenerarCodigo()
        {
            do
            {
                codigo = numerosRandom.Next(1000, 9999);
            } while (codigos.Contains(codigo));
            codigos.Add(codigo);
            return codigo;
        }
    }
}
