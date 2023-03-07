using practica_3;

bool program = true;

// Fachada
AccionesMenu accionesMenu = new AccionesMenu();

while (program)
{
    Console.ForegroundColor = ConsoleColor.White;
    Console.WriteLine("\n****************************************************");
    Console.WriteLine("************** BiENVENIDO AL MENU ******************");
    Console.WriteLine("****************************************************");

    Console.ForegroundColor = ConsoleColor.Blue;
    Console.WriteLine("\nQue desea realizar?");
    Console.ForegroundColor = ConsoleColor.White;
    Console.WriteLine("\t1- Registro Usuarios");
    Console.WriteLine("\t2- Usar la Calculadora");
    Console.WriteLine("\t3- Usar el Convertidor de grados");
    Console.WriteLine("\t4- Salir del programa");

    Console.ForegroundColor = ConsoleColor.Green;
    Console.Write("\nIngrese el numero aqui -> ");
    Console.ForegroundColor = ConsoleColor.White;
    int opcion = Convert.ToInt32(Console.ReadLine());

    switch (opcion)
    {
        case 1:
            accionesMenu.menuUsuarios();
            break;
        case 2:
            accionesMenu.menuCalculadora();
            break;
        case 3:
            accionesMenu.menuConvertidor();
            break;
        case 4:
            program = false;
            break;

        default:
            Console.WriteLine("Opcion Invalida!!!!");
            break;
    }
}


