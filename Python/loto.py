import random

LISTA = {}

#CREACIÓN DE VALOR INICIAL
for x in range(1, 42):
    LISTA["V"+str(x)] = 0

#NUMERO DE VECES QUE SE JUEGA
par = 0
impar = 0
LOOP = 0
while LOOP < 123456:
    NUMERO = random.randrange(1, 42)
    LISTA["V"+str(NUMERO)] = LISTA["V"+str(NUMERO)] + 1
    if NUMERO % 2 == 0:
        par += 1
    else:
        impar += 1

    LOOP += 1

#LISTA DE NUMEROS QUE SE REPITEN

for x in LISTA:
    print(x + ':' + str(LISTA[x]))
    
print('PAR: ' + str(par))
print('IMPAR: ' + str(impar))