using practica_3;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace practica4
{
    public interface IArchivo
    {
        public string Path { get; set; }
        void CrearArchivo();
        void ActualizarArchivo(Usuario usuario);
    }
}
