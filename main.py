lista = []

alumnos = int(input("Cuantas personas deseas agregar?: "))

for i in range(alumnos):
    nombre = input("Ingresa el nombre de la persona: ")
    edad = input("Ingresa la edad de la persona: ")
    nota = float(input("Ingresa la nota: "))

    alumno = [nombre, edad, nota]
    lista.append(alumno)

print('Datos ingresados: ', lista)

lista.sort(key=lambda x: x[2], reverse=True)
print('Ordenados por nota: ', lista)