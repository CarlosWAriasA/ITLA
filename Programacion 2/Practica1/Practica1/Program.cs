using Practica1;

// variable booleana que mantiene el programa en ejecucion hasta que sea falsa
bool program = true;

// variable donde se guarda el empleado gerencial
EmpleadoGerencial empleadoGerencial = null;

// lista donde se guardan los empleados administrativos
List<EmpleadoAdministrativo> empleadosAdministrativos = new List<EmpleadoAdministrativo>();

// lista donde se guardan los empleados operativos
List<EmpleadoOperativo> empleadosOperativos = new List<EmpleadoOperativo>();

// empleados administrativos ya creados
empleadosAdministrativos.Add(new EmpleadoAdministrativo("489463548", "Wilmer", "Seguridad", 180, 6));
empleadosAdministrativos.Add(new EmpleadoAdministrativo("135316154", "Juan", "Redes", 120, 8));
empleadosAdministrativos.Add(new EmpleadoAdministrativo("248684864", "Pedro", "Diseño", 150, 7));

// metodo donde se pide los datos del empleado y se añade el empleado
void IngresarEmpleado(string opcion) {
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
            empleadoGerencial = EmpleadoGerencial.NuevoEmpleado(cedula, nombre, departamento, precioXhora, horasTrabajadas);
            break;
        case "2":
            empleadosAdministrativos.Add(new EmpleadoAdministrativo(cedula, nombre, departamento, precioXhora, horasTrabajadas));
            break;
        case "3":
            empleadosOperativos.Add(new EmpleadoOperativo(cedula, nombre, departamento, precioXhora, horasTrabajadas));
            break;
    }
}

// metodo donde se pide el empleado que se quiere crear 
void CrearEmpleado()
{
    bool crearEmpleados = true;
    while ( crearEmpleados ) {
        Console.WriteLine("\nQue tipo de empleado quiere crear?");
        Console.WriteLine("\t1.Gerencial");
        Console.WriteLine("\t2.Administrativo");
        Console.WriteLine("\t3.Operativo");
        Console.WriteLine("\t4.Para volver atras");
        string opcion = Console.ReadLine();
        Empleado empleado;

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
                Console.WriteLine("Esta no es una opcion valida");
                break;
        }
    }
}

// metodo donde se muestra el orden en que se mostraran los datos de los empleados
void MostrarOrdenDatosEmpleados()
{
    Console.WriteLine("Cedula-Codigo-Nombre-Departamento-PrecioPorHora-HorasTrabajadas-Categoria");
}

// metodo donde se pide ver los empleados y se muestran
void VerEmpleados()
{
    bool verEmpleados = true;
    while (verEmpleados) {
        Console.WriteLine("\nQue tipo de Empleados quiere visualizar: ");
        Console.WriteLine("\t1.Gerencial");
        Console.WriteLine("\t2.Administrativo");
        Console.WriteLine("\t3.Operativo");
        Console.WriteLine("\t4.Para volver atras");
        string opcion = Console.ReadLine();
        switch (opcion) {
            case "1":
                MostrarOrdenDatosEmpleados();
                if (empleadoGerencial != null)
                {
                    Console.WriteLine(empleadoGerencial);

                }
                break;
            case "2":
                MostrarOrdenDatosEmpleados();
                for (int i = 0; i < empleadosAdministrativos.Count; i++)
                {
                    Console.WriteLine(empleadosAdministrativos[i]);
                }
                break;
            case "3":
                MostrarOrdenDatosEmpleados();
                for (int i = 0; i < empleadosOperativos.Count; i++)
                {
                    Console.WriteLine(empleadosOperativos[i]);
                }
                break;
            case "4":
                verEmpleados = false; 
                break;
            default:
                Console.WriteLine("Esta no es una opcion valida");
                break;
        }
    }
}

//  metodo donde se muestra el orden en que se mostraran los datos de los empleados con su salario
void MostrarOrdenDatosSalario()
{
    Console.WriteLine("Cedula-Nombre-Departamento-SalarioNeto");
}

// metodo donde se calcula el salario de los empleados
void calcularSalarioEmpleados()
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
                MostrarOrdenDatosSalario();
                if (empleadoGerencial != null)
                {
                    empleadoGerencial.SalarioNeto = empleadoGerencial.PrecioXHora * empleadoGerencial.HorasTrabajadas;
                    Console.WriteLine($"{empleadoGerencial.Cedula}, {empleadoGerencial.Nombre}, {empleadoGerencial.Departamento}, {empleadoGerencial.SalarioNeto}");
                }
                break;
            case "2":
                MostrarOrdenDatosSalario();
                for (int i = 0; i < empleadosAdministrativos.Count; i++)
                {
                    empleadosAdministrativos[i].SalarioNeto = empleadosAdministrativos[i].PrecioXHora * empleadosAdministrativos[i].HorasTrabajadas;
                    Console.WriteLine($"{empleadosAdministrativos[i].Cedula}, {empleadosAdministrativos[i].Nombre}, {empleadosAdministrativos[i].Departamento}, {empleadosAdministrativos[i].SalarioNeto}");
                }
                break;
            case "3":
                MostrarOrdenDatosSalario();
                for (int i = 0; i < empleadosOperativos.Count; i++)
                {
                    empleadosOperativos[i].SalarioNeto = empleadosOperativos[i].PrecioXHora * empleadosOperativos[i].HorasTrabajadas;
                    Console.WriteLine($"{empleadosOperativos[i].Cedula}, {empleadosOperativos[i].Nombre}, {empleadosOperativos[i].Departamento}, {empleadosOperativos[i].SalarioNeto}");
                }
                break;
            case "4":
                salarioEmpleados = false;
                break;
            default:
                Console.WriteLine("Esta no es una opcion valida");
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
    Console.WriteLine("\t 3. Ver Salario Empleados");
    Console.WriteLine("\t 4. Salir del programa");
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
            calcularSalarioEmpleados();
            break;
        case "4":
            program = false;
            break;
        default:
            Console.WriteLine("Esta no es una opcion valida");
            break;
    }
}