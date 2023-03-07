using Newtonsoft.Json;
using practica_3;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using System.IO;

namespace practica4
{
    class ManejoArchivoJSON : IArchivo
    {
        public string Path { get; set; }

        public void CrearArchivo()
        {
            Path = AppDomain.CurrentDomain.BaseDirectory + "DatosJSON.json";
            File.WriteAllText(Path, "");
        }

        public void ActualizarArchivo(Usuario usuario)
        {
            string usuarioJSON = JsonConvert.SerializeObject(usuario, Formatting.Indented);
            File.AppendAllText(Path, usuarioJSON);
        }
    }
}
