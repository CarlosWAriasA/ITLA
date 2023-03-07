using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SpreadsheetLight;
using System.Data;
using practica4;

namespace practica_3
{
    class ManejoArchivoEXCEL : IArchivo
    {
        public string Path { get; set; }
        private DataTable table;

        public void CrearArchivo()
        {
            Path = AppDomain.CurrentDomain.BaseDirectory + "DatosEXCEL.xlsx";
            this.table = new DataTable();
            CrearColumnas();
        }

        public void CrearColumnas()
        {
            table.Columns.Add("Nombre Completo", typeof(string));
            table.Columns.Add("Edad", typeof(int));
            table.Columns.Add("Provincia", typeof(string));
        }

        public void ActualizarArchivo(Usuario usuario)
        {
            DataRow row = table.NewRow();
            row["Nombre Completo"] = usuario.Nombre;
            row["Edad"] = usuario.Edad;
            row["Provincia"] = usuario.Provincia;
            table.Rows.Add(row);
            SLDocument newDocument = new SLDocument();
            newDocument.ImportDataTable(1, 1, table, true);
            newDocument.SaveAs(Path);
        }
    }
}
