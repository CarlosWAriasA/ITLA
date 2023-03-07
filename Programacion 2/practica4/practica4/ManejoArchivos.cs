using practica_3;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace practica4
{
    class ManejoArchivos
    {
        private IArchivo archivo;

        public ManejoArchivos(IArchivo archivo) 
        {
            this.archivo = archivo;
            this.archivo.CrearArchivo();
        }

        public void GuardarUsuario(Usuario usuario)
        {
            this.archivo.ActualizarArchivo(usuario);
        }
    }
}
