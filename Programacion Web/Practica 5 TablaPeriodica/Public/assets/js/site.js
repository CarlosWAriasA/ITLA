const array = [{ id:"1", name: "Hidrogeno", symbol: "H", group: "otrosNoMetales", column: 1 }, { id:"3", name: "Litio",symbol: "Li", group: "alcalinos", column: 1 }, { id:"11", name: "Sodio", symbol: "Na", group: "alcalinos", column: 1 }, { id:"19", name: "Potasio", symbol: "K", group: "alcalinos", column: 1 }, { id:"37", name: "Rubidio", symbol: "Rb", group: "alcalinos", column: 1 }, { id:"55", name: "Cesio", symbol: "Cs", group: "alcalinos", column: 1 }, { id:"87", name: "Francio", symbol: "Fr", group: "alcalinos", column: 1 }, { id:"4", name: "Berilio", symbol: "Be", group: "alcalinoterreos", column: 2 }, { id:"12", name: "Magnesio", symbol: "Mg", group: "alcalinoterreos", column: 2 }, { id:"20", name: "Calcio", symbol: "Ca", group: "alcalinoterreos", column: 2 }, { id:"38", name: "Estroncio", symbol: "Sr", group: "alcalinoterreos", column: 2 }, { id:"56", name: "Bario", symbol: "Ba", group: "alcalinoterreos", column: 2 }, { id:"88", name: "Radio", symbol: "Ra", group: "alcalinoterreos", column: 2 }, { id:"21", name: "Escandio", symbol: "Sc", group: "metalesDeTransicion", column: 3 }, { id:"39", name: "Itrio", symbol: "Y", group: "metalesDeTransicion", column: 3 }, { id:"57-71", name: "Lantánidos", symbol: "La-Lu", group: "lantanidos", column: 3 }, { id:"89-103", name: "Actínidos", symbol: "Ac-Lr", group: "actinidos", column: 3 }, { id:"22", name: "Titanio", symbol: "Ti", group: "metalesDeTransicion", column: 4 }, { id:"40", name: "Circonio", symbol: "Zr", group: "metalesDeTransicion", column: 4 }, { id:"72", name: "Hafnio", symbol: "Hf", group: "metalesDeTransicion", column: 4 }, { id:"104", name: "Rutherfordio", symbol: "Rf", group: "metalesDeTransicion", column: 4 }, { id:"23", name: "Vanadio", symbol: "V", group: "metalesDeTransicion", column: 5 }, { id:"41", name: "Niobio", symbol: "Nb", group: "metalesDeTransicion", column: 5 }, { id:"73", name: "Tántalo", symbol: "Ta", group: "metalesDeTransicion", column: 5 }, { id:"105", name: "Dubnio", symbol: "Db", group: "metalesDeTransicion", column: 5 }, { id:"24", name: "Cromo", symbol: "Cr", group: "metalesDeTransicion", column: 6 }, { id:"42", name: "Molibdeno", symbol: "Mo", group: "metalesDeTransicion", column: 6 }, { id:"74", name: "Wolframio", symbol: "W", group: "metalesDeTransicion", column: 6 }, { id:"106", name: "Seaborgio", symbol: "Sg", group: "metalesDeTransicion", column: 6 }, { id:"25", name: "Manganeso", symbol: "Mn", group: "metalesDeTransicion", column: 7 }, { id:"43", name: "Tecnecio", symbol: "Tc", group: "metalesDeTransicion", column: 7 }, { id:"75", name: "Renio", symbol: "Re", group: "metalesDeTransicion", column: 7 }, { id:"107", name: "Bohrio", symbol: "Bh", group: "metalesDeTransicion", column: 7 }, { id:"26", name: "Hierro", symbol: "Fe", group: "metalesDeTransicion", column: 8 }, { id:"44", name: "Rutenio", symbol: "Ru", group: "metalesDeTransicion", column: 8 }, { id:"76", name: "Osmio", symbol: "Os", group: "metalesDeTransicion", column: 8 }, { id:"108", name: "Hasio", symbol: "Hs", group: "metalesDeTransicion", column: 8 }, { id:"27", name: "Cobalto", symbol: "Co", group: "metalesDeTransicion", column: 9 }, { id:"45", name: "Rodio", symbol: "Rh", group: "metalesDeTransicion", column: 9 }, { id:"77", name: "Iridio", symbol: "Ir", group: "metalesDeTransicion", column: 9 }, { id:"109", name: "Meitnerio", symbol: "Mt", group: "metalesDeTransicion", column: 9 }, { id:"28", name: "Níquel", symbol: "Ni", group: "metalesDeTransicion", column: 10 }, { id:"46", name: "Paladio", symbol: "Pd", group: "metalesDeTransicion", column: 10 }, { id:"78", name: "Platino", symbol: "Pt", group: "metalesDeTransicion", column: 10 }, { id:"110", name: "Darmstadio", symbol: "Ds", group: "metalesDeTransicion", column: 10 }, { id:"29", name: "Cobre", symbol: "Cu", group: "metalesDeTransicion", column: 11 }, { id:"47", name: "Plata", symbol: "Ag", group: "metalesDeTransicion", column: 11 }, { id:"79", name: "Oro", symbol: "Au", group: "metalesDeTransicion", column: 11 }, { id:"111", name: "Roentgenio", symbol: "Rg", group: "metalesDeTransicion", column: 11 }, { id:"30", name: "Zinc", symbol: "Zn", group: "metalesDeTransicion", column: 12 }, { id:"48", name: "Cadmio", symbol: "Cd", group: "metalesDeTransicion", column: 12 }, { id:"80", name: "Mercurio", symbol: "Hg", group: "metalesDeTransicion", column: 12 }, { id:"112", name: "Copernicio", symbol: "Cn", group: "metalesDeTransicion", column: 12 }, { id:"5", name: "Boro", symbol: "B", group: "metaloides", column: 13 }, { id:"13", name: "Aluminio", symbol: "AI", group: "otrosMetales", column: 13 }, { id:"31", name: "Galio", symbol: "Ga", group: "otrosMetales", column: 13 }, { id:"49", name: "Indio", symbol: "In", group: "otrosMetales", column: 13 }, { id:"81", name: "Talio", symbol: "TI", group: "otrosMetales", column: 13 }, { id:"113", name: "Nihonio", symbol: "Nh", group: "otrosMetales", column: 13 }, { id:"6", name: "Carbono", symbol: "C", group: "otrosNoMetales", column: 14 }, { id:"14", name: "Silicio", symbol: "Si", group: "metaloides", column: 14 }, { id:"32", name: "Germanio",  symbol: "Ge", group: "metaloides", column: 14 }, { id:"50", name: "Estaño", symbol: "Sn", group: "otrosMetales", column: 14 }, { id:"82", name: "Plomo", symbol: "Pb", group: "otrosMetales", column: 14 }, { id:"114", name: "Flerovio", symbol: "FI", group: "otrosMetales", column: 14 }, { id:"7", name: "Nitrógeno", symbol: "N", group: "otrosNoMetales", column: 15 }, { id:"15", name: "Fósforo", symbol: "P", group: "otrosNoMetales", column: 15 }, { id:"33", name: "Arsénico", symbol: "As", group: "metaloides", column: 15 }, { id:"51", name: "Antimonio", symbol: "Sb", group: "metaloides", column: 15 }, { id:"83", name: "Bismuto", symbol: "Bi", group: "otrosMetales", column: 15 }, { id:"115", name: "Moscovio", symbol: "Mc", group: "otrosMetales", column: 15 }, { id:"8", name: "Oxígeno", symbol: "O", group: "otrosNoMetales", column: 16 }, { id:"16", name: "Azufre", symbol: "S", group: "otrosNoMetales", column: 16 }, { id:"34", name: "Selenio", symbol: "Se", group: "otrosNoMetales", column: 16 }, { id:"52", name: "Telurio", symbol: "Te", group: "metaloides", column: 16 }, { id:"84", name: "Polonio", symbol: "Po", group: "metaloides", column: 16 }, { id:"116", name: "Livermorio", symbol: "Lv", group: "otrosMetales", column: 16 }, { id:"9", name: "Flúor", symbol: "F", group: "halogenos", column: 17 }, { id:"17", name: "Cloro", symbol: "CI", group: "halogenos", column: 17 }, { id:"35", name: "Bromo", symbol: "Br", group: "halogenos", column: 17 }, { id:"53", name: "Yodio", symbol: "I", group: "halogenos", column: 17 }, { id:"85", name: "Astato", symbol: "At", group: "halogenos", column: 17 }, { id:"117", name: "Teneso", symbol: "Ts", group: "halogenos", column: 17 }, { id:"2", name: "Helio", symbol: "He", group: "gasesNobles", column: 18 }, { id:"10", name: "Neón", symbol: "Ne", group: "gasesNobles", column: 18 }, { id:"18", name: "Argón", symbol: "Ar", group: "gasesNobles", column: 18 }, { id:"36", name: "Kriptón", symbol: "Kr", group: "gasesNobles", column: 18 }, { id:"54", name: "Xenón", symbol: "Xe", group: "gasesNobles", column: 18 }, { id:"86", name: "Radón", symbol: "Rn", group: "gasesNobles", column: 18 }, { id:"118", name: "Oganesón", symbol: "Og", group: "gasesNobles", column: 18 }, { id:"57", name: "Lantano", symbol: "La", group: "lantanidos", row: 1 }, { id:"58", name: "Cerio", symbol: "Ce", group: "lantanidos", row: 1 }, { id:"59", name: "Praseodimio", symbol: "Pr", group: "lantanidos", row: 1 }, { id:"60", name: "Neodimio", symbol: "Nd", group: "lantanidos", row: 1 }, { id:"61", name: "Prometio", symbol: "Pm", group: "lantanidos", row: 1 }, { id:"62", name: "Samario", symbol: "Sm", group: "lantanidos", row: 1 }, { id:"63", name: "Europio", symbol: "Eu", group: "lantanidos", row: 1 }, { id:"64", name: "Gadolinio", symbol: "Gd", group: "lantanidos", row: 1 }, { id:"65", name: "Terbio", symbol: "Tb", group: "lantanidos", row: 1 }, { id:"66", name: "Disprosio", symbol: "Dy", group: "lantanidos", row: 1 }, { id:"67", name: "Holmio", symbol: "Ho", group: "lantanidos", row: 1 }, { id:"68", name: "Erbio", symbol: "Er", group: "lantanidos", row: 1 }, { id:"69", name: "Tulio", symbol: "Tm", group: "lantanidos", row: 1 }, { id:"70", name: "Iterbio", symbol: "Yb", group: "lantanidos", row: 1 }, { id:"71", name: "Lutecio", symbol: "Lu", group: "lantanidos", row: 1 }, { id:"89", name: "Actinio", symbol: "Ac", group: "actinidos", row: 2 }, { id:"90", name: "Torio", symbol: "Th", group: "actinidos", row: 2 }, { id:"91", name: "Protactinio", symbol: "Pa", group: "actinidos", row: 2 }, { id:"92", name: "Uranio", symbol: "U", group: "actinidos", row: 2 }, { id:"93", name: "Neptunio", symbol: "Np", group: "actinidos", row: 2 }, { id:"94", name: "Plutonio", symbol: "Pu", group: "actinidos", row: 2 }, { id:"95", name: "Americio", symbol: "Am", group: "actinidos", row: 2 }, { id:"96", name: "Curio", symbol: "Cm", group: "actinidos", row: 2 }, { id:"87", name: "Berkelio", symbol: "Bk", group: "actinidos", row: 2 }, { id:"98", name: "Californio", symbol: "Cf", group: "actinidos", row: 2 }, { id:"99", name: "Einstenio", symbol: "Es", group: "actinidos", row: 2 }, { id:"100", name: "Fermio", symbol: "Fm", group: "actinidos", row: 2 }, { id:"101", name: "Mendelevio", symbol: "Md", group: "actinidos", row: 2 }, { id:"102", name: "Nobelio", symbol: "No", group: "actinidos", row: 2 }, { id:"103", name: "Lawrencio", symbol: "Lr", group: "actinidos", row: 2 }];

function areEqual(object1, object2) {
  if (object1.id === object2.id && object1.symbol === object2.symbol && object1.name === object2.name && object1.group === object2.group) {
    return true;
  } else {
    return false;
  }
}

exports.array = array;
exports.areEqual = areEqual;