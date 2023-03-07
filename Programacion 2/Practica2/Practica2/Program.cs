using Practica2;

public class Program
{
    private static void Main(string[] args)
    {
        // variable del tipo de dato de la interfaz
        IEmpleado empleado;

        // crear archivo al ejecutar el programa
        ManejoArchivoTXT.crearArchivo();

        // variable booleana que mantiene el programa en ejecucion hasta que sea falsa
        bool program = true;

        // variable donde se guarda el empleado gerencial
        EmpleadoGerencial empleadoGerencial = null;

        // lista donde se guardan los empleados administrativos
        List<EmpleadoAdministrativo> empleadosAdministrativos = new List<EmpleadoAdministrativo>();

        // lista donde se guardan los empleados operativos
        List<EmpleadoOperativo> empleadosOperativos = new List<EmpleadoOperativo>();

        // empleados ya creados
        empleadosAdministrativos.Add(new EmpleadoAdministrativo("489463548", "Wilmer", "Seguridad", 180, 6));
        empleadosAdministrativos.Add(new EmpleadoAdministrativo("135316154", "Juan", "Redes", 120, 8));
        empleadosAdministrativos.Add(new EmpleadoAdministrativo("248684864", "Pedro", "Diseño", 150, 7));

        void MostrarOpcionNoValida()
        {
            Console.WriteLine("Esta no es una opcion valida");
        }

        void MostrarNoHayEmpleado()
        {
            Console.WriteLine("No hay empleados de esta categoria");
        }

        // metodo donde se muestra el orden en que se mostraran los datos de los empleados
        void MostrarOrdenDatosEmpleados()
        {
            Console.WriteLine("Cedula-Codigo-Nombre-Departamento-PrecioPorHora-HorasTrabajadas-Categoria");
        }

        // metodo para verificar si hay empleado gerencial
        bool HayEmpleadoGerencial()
        {
            if (empleadoGerencial != null)
            {
                return true;
            }
            return false;
        }

        // metodo para mostrar el empleado gerencial
        void MostrarEmpleadoGerencial()
        {
            Console.WriteLine("1. " + empleadoGerencial.MostrarEmpleado());
        }

        // metodo para verificar si hay empleado administrativo
        bool HayEmpleadoAdministrativo()
        {
            if (empleadosAdministrativos.Any())
            {
                return true;
            }
            return false;
        }

        // metodo para verificar si hay empleado operativo
        bool HayEmpleadoOperativo()
        {
            if (empleadosOperativos.Any())
            {
                return true;
            }
            return false;
        }

        // metodo para mostrar una lista de IEmpleado
        void MostrarEmpleados(List<IEmpleado> empleado)
        {
            for (int i = 0; i < empleado.Count; i++)
            {
                Console.WriteLine($"{i}. " + empleado[i].MostrarEmpleado());
            }
        }

        //  metodo donde se muestra el orden en que se mostraran los datos de los empleados con su salario
        void MostrarOrdenDatosSalario()
        {
            Console.WriteLine("Cedula-Nombre-Departamento-Categoria-SalarioNeto");
        }

        // metodo donde se calcula el salario de los empleados
        void calcularSalario(IEmpleado empleado)
        {
            empleado.SalarioNeto = empleado.PrecioXHora * empleado.HorasTrabajadas;
        }

        // metodo donde se pide los datos del empleado y se añade el empleado
        void IngresarEmpleado(string opcion)
        {
            Console.Write("Ingrese la cedula del empleado: ");
            string cedula = Console.ReadLine();
            Console.Write("Ingrese el nombre del empleado: ");
            string nombre = Console.ReadLine();
            Console.Write("Ingrese el departamento del empleado: ");
            string departamento = Console.ReadLine();
            Console.Write("Ingrese el precio por hora del empleado: ");
            int precioXhora = Convert.ToInt32(Console.ReadLine());
            Console.Write("Ingrese las horas trabajadas del empleado: ");
            int horasTrabajadas = Convert.ToInt32(Console.ReadLine());
            switch (opcion)
            {
                case "1":
                    empleado = FabricaEmpleados.CrearEmpleado(opcion, cedula, nombre, departamento, precioXhora, horasTrabajadas);
                    empleadoGerencial = EmpleadoGerencial.NuevoEmpleado(empleado);
                    break;
                case "2":
                    empleado = FabricaEmpleados.CrearEmpleado(opcion, cedula, nombre, departamento, precioXhora, horasTrabajadas);
                    empleadosAdministrativos.Add(new EmpleadoAdministrativo(empleado));
                    break;
                case "3":
                    empleado = FabricaEmpleados.CrearEmpleado(opcion, cedula, nombre, departamento, precioXhora, horasTrabajadas);
                    empleadosOperativos.Add(new EmpleadoOperativo(empleado));
                    break;
            }
        }

        // metodo donde se pide el empleado que empleado se quiere crear
        void CrearEmpleado()
        {
            bool crearEmpleados = true;
            while (crearEmpleados)
            {
                Console.WriteLine("\nQue tipo de empleado quiere crear?");
                Console.WriteLine("\t1.Gerencial");
                Console.WriteLine("\t2.Administrativo");
                Console.WriteLine("\t3.Operativo");
                Console.WriteLine("\t4.Para volver atras");
                string opcion = Console.ReadLine();

                switch (opcion)
                {
                    case "1":
                        IngresarEmpleado(opcion);
                        break;

                    case "2":
                        IngresarEmpleado(opcion);
                        break;

                    case "3":
                        IngresarEmpleado(opcion);
                        break;
                    case "4":
                        crearEmpleados = false;
                        break;

                    default:
                        MostrarOpcionNoValida();
                        break;
                }
            }
        }

        // metodo donde se pide ver los empleados y se muestran
        void VerEmpleados()
        {
            bool verEmpleados = true;
            while (verEmpleados)
            {
                Console.WriteLine("\nQue tipo de Empleados quiere visualizar: ");
                Console.WriteLine("\t1.Gerencial");
                Console.WriteLine("\t2.Administrativo");
                Console.WriteLine("\t3.Operativo");
                Console.WriteLine("\t4.Para volver atras");
                string opcion = Console.ReadLine();
                switch (opcion)
                {
                    case "1":
                        if (HayEmpleadoGerencial())
                        {
                            MostrarOrdenDatosEmpleados();
                            MostrarEmpleadoGerencial();
                        }
                        else
                        {
                            MostrarNoHayEmpleado();
                        }
                        break;
                    case "2":
                        if (HayEmpleadoAdministrativo())
                        {
                            MostrarOrdenDatosEmpleados();
                            MostrarEmpleados(empleadosAdministrativos);
                        }
                        else
                        {
                            MostrarNoHayEmpleado();
                        }
                        break;
                    case "3":
                        if (HayEmpleadoOperativo())
                        {
                            MostrarOrdenDatosEmpleados();
                            //MostrarEmpleados(empleadosOperativos);
                        }
                        else
                        {
                            MostrarNoHayEmpleado();
                        }
                        break;
                    case "4":
                        verEmpleados = false;
                        break;
                    default:
                        MostrarOpcionNoValida();
                        break;
                }
            }
        }

        // metodo donde se ve el salario de los empleados
        void VerSalarioEmpleados()
        {
            bool salarioEmpleados = true;
            while (salarioEmpleados)
            {
                Console.WriteLine("\nA que tipo de Empleados quiere calcular el salario: ");
                Console.WriteLine("\t1.Gerencial");
                Console.WriteLine("\t2.Administrativo");
                Console.WriteLine("\t3.Operativo");
                Console.WriteLine("\t4.Para volver atras");
                string opcion = Console.ReadLine();
                switch (opcion)
                {
                    case "1":
                        if (HayEmpleadoGerencial())
                        {
                            MostrarOrdenDatosSalario();
                            calcularSalario(empleadoGerencial);
                            Console.WriteLine(empleadoGerencial.MostrarDatosYSalario());
                        }
                        else
                        {
                            MostrarNoHayEmpleado();
                        }
                        break;
                    case "2":
                        if (HayEmpleadoAdministrativo())
                        {
                            MostrarOrdenDatosSalario();
                            for (int i = 0; i < empleadosAdministrativos.Count; i++)
                            {
                                calcularSalario(empleadosAdministrativos[i]);
                                Console.WriteLine(empleadosAdministrativos[i].MostrarDatosYSalario());
                            }
                        }
                        else
                        {
                            MostrarNoHayEmpleado();
                        }
                        break;
                    case "3":
                        if (HayEmpleadoOperativo())
                        {
                            MostrarOrdenDatosSalario();
                            for (int i = 0; i < empleadosOperativos.Count; i++)
                            {
                                calcularSalario(empleadosOperativos[i]);
                                Console.WriteLine(empleadosOperativos[i].MostrarDatosYSalario());
                            }
                        }
                        else
                        {
                            MostrarNoHayEmpleado();
                        }
                        break;
                    case "4":
                        salarioEmpleados = false;
                        break;
                    default:
                        MostrarOpcionNoValida();
                        break;
                }
            }
        }
        // metodo para ingresar un solo empleado al archivo txt
        void IngresarUnSoloEmpleadoATXT()
        {
            bool activeProgram = true;
            while (activeProgram)
            {
                Console.WriteLine("\nQue tipo de Empleado quiere agregar al archivo txt");
                Console.WriteLine("\t1.Gerencial");
                Console.WriteLine("\t2.Administrativo");
                Console.WriteLine("\t3.Operativo");
                Console.WriteLine("\t4.Para volver atras");
                string opcion2 = Console.ReadLine();
                int empleadoElegido;
                switch (opcion2)
                {
                    case "1":
                        if (HayEmpleadoGerencial())
                        {
                            calcularSalario(empleadoGerencial);
                            ManejoArchivoTXT.InsertarTXT(empleadoGerencial.MostrarDatosYSalario());
                        }
                        else
                        {
                            MostrarNoHayEmpleado();
                        }
                        break;
                    case "2":
                        if (HayEmpleadoAdministrativo())
                        {
                            Console.WriteLine("\nCual empleado quiere agregar?");
                            //MostrarEmpleados(empleadosAdministrativos);
                            empleadoElegido = Convert.ToInt32(Console.ReadLine());
                            calcularSalario(empleadosAdministrativos[empleadoElegido]);
                            ManejoArchivoTXT.InsertarTXT(empleadosAdministrativos[empleadoElegido].MostrarDatosYSalario());
                        }
                        else
                        {
                            MostrarNoHayEmpleado();
                        }
                        break;
                    case "3":
                        if (HayEmpleadoOperativo())
                        {
                            Console.WriteLine("\nCual empleado quiere agregar?");
                            //MostrarEmpleados(empleadosOperativos);
                            empleadoElegido = Convert.ToInt32(Console.ReadLine());
                            calcularSalario(empleadosOperativos[empleadoElegido]);
                            ManejoArchivoTXT.InsertarTXT(empleadosOperativos[empleadoElegido].MostrarDatosYSalario());
                        }
                        else
                        {
                            MostrarNoHayEmpleado();
                        }
                        break;
                    case "4":
                        activeProgram = false;
                        break;
                    default:
                        MostrarOpcionNoValida();
                        break;
                }
            }

            // metodo donde se agregan empleados a un archivo txt
            void IngresarEmpleadosATXT()
            {
                bool program = true;
                while (program)
                {
                    Console.WriteLine("\nQuiere agregar todos los Empleados?");
                    Console.WriteLine("\t1. Si");
                    Console.WriteLine("\t2. No");
                    Console.WriteLine("\t3. Volver atras");
                    string opcion = Console.ReadLine();
                    switch (opcion)
                    {
                        case "1":
                            ManejoArchivoTXT.crearArchivo();
                            if (HayEmpleadoGerencial())
                            {
                                calcularSalario(empleadoGerencial);
                                ManejoArchivoTXT.InsertarTXT(empleadoGerencial.MostrarDatosYSalario());
                            }
                            if (HayEmpleadoAdministrativo())
                            {
                                for (int i = 0; i < empleadosAdministrativos.Count; i++)
                                {
                                    calcularSalario(empleadosAdministrativos[i]);
                                    ManejoArchivoTXT.InsertarTXT(empleadosAdministrativos[i].MostrarDatosYSalario());
                                }
                            }
                            if (HayEmpleadoOperativo())
                            {
                                for (int i = 0; i < empleadosOperativos.Count; i++)
                                {
                                    calcularSalario(empleadosOperativos[i]);
                                    ManejoArchivoTXT.InsertarTXT(empleadosOperativos[i].MostrarDatosYSalario());
                                }
                            }
                            break;

                        case "2":
                            IngresarUnSoloEmpleadoATXT();
                            break;

                        case "3":
                            program = false;
                            break;

                        default:
                            MostrarOpcionNoValida();
                            break;
                    }
                }
            }

            // menu principal
            while (program)
            {
                Console.WriteLine("\n------------ Manejo Empleados ------------");
                Console.WriteLine("Elija una opcion");
                Console.WriteLine("\t 1. Crear Empleado");
                Console.WriteLine("\t 2. Ver Empleados");
                Console.WriteLine("\t 3. Calcular Salario Empleados");
                Console.WriteLine("\t 4. Guardar Voucher de pago");
                Console.WriteLine("\t 5. Salir del programa");
                string opcion = Console.ReadLine();

                switch (opcion)
                {
                    case "1":
                        CrearEmpleado();
                        break;
                    case "2":
                        VerEmpleados();
                        break;
                    case "3":
                        VerSalarioEmpleados();
                        break;
                    case "4":
                        IngresarEmpleadosATXT();
                        break;
                    case "5":
                        program = false;
                        break;
                    default:
                        MostrarOpcionNoValida();
                        break;
                }
            }
}
}