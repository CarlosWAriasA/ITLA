using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SpreadsheetLight;
using System.Data;

namespace practica_3
{
    class ManejoArchivoEXCEL
    {
        private string path = AppDomain.CurrentDomain.BaseDirectory + "DatosExcel.xlsx";
        private DataTable table;

        public ManejoArchivoEXCEL()
        {
            this.table = new DataTable();
            createColumns();
            saveExcel();
        }

        public void createColumns()
        {
            table.Columns.Add("Nombre Completo", typeof(string));
            table.Columns.Add("Edad", typeof(int));
            table.Columns.Add("Provincia", typeof(string));
        }

        public void updateExcel(Usuario usuario)
        {
            DataRow row = table.NewRow();
            row["Nombre Completo"] = usuario.Nombre + " " + usuario.Apellido;
            row["Edad"] = usuario.Edad;
            row["Provincia"] = usuario.Provincia;
            table.Rows.Add(row);
        }

        public void saveExcel()
        {
            SLDocument newDocument = new SLDocument();
            newDocument.ImportDataTable(1, 1, table, true);
            newDocument.SaveAs(path);
        }
    }
}
