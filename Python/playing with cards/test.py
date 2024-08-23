import pygame, os, random
import random
import os

baraja = []
pintas = ['♥','♦','♣','♠']

class Baraja():
	"""docstring for ClassName"""
	def __init__(self):

		self.baraja = []
		self.pintas = ['♥','♦','♣','♠']
		
	def crearBaraja(self):

		for x in range(len(self.pintas)):
			
			for y in range(1,14):
				
				if y == 11:

					y = 'J'

				elif y == 12:

					y = 'Q'

				elif y == 13:

					y = 'K'

				elif y == 1:

					y = 'A'

				self.baraja.append(str(y) + '' + self.pintas[x])

		random.shuffle(self.baraja)

class Jugador():

	def __init__(self, nombre):
		
		self.nombre = nombre
		self.mano   = []

	def manoInicial(self, baraja):

		for x in range(1,6):
			
			self.mano.append(baraja.pop())

	def descartar(self, carta):

		self.mano.pop(int(carta) - 1)
			
	def robarCarta(self, baraja):

		self.mano.append(baraja.pop())

	def mostrarMano(self):

		print(self.nombre + ': ' + str(self.mano))


baraja = Baraja()
baraja.crearBaraja()

barajaJuego = baraja.baraja

jugador1 = Jugador('ramon')
jugador1.manoInicial(barajaJuego)

jugador1.mostrarMano()

jugador2 = Jugador('chavo')
jugador2.manoInicial(barajaJuego)

jugador2.mostrarMano()

i = 0

class Card():
    """docstring for Card"""
    def __init__(self, name, value, back, x, y):
        
        self.name  = name
        self.value = value
        self.back  = back
        self.x     = x
        self.y     = y


    def createCard(self):

        return pygame.image.load(self.back)

    def drawCard(self, card):

        return card.get_rect(topleft=(self.x,self.y))

cards = {}
x, y = 0,0

for filename in os.listdir('cards/'):
	if filename != 'cardBack_blue1.png' and filename != 'cardBack_red1.png':
		cards[filename]    = Card(filename, 'cards/' + filename, 'cards/cardBack_blue1.png' if filename.find('Clubs') > 0 or filename.find('Spades') > 0 else 'cards/cardBack_red1.png', x, y)
		
		x += 2


for card in cards:
	
	theCard  = cards[card].createCard()
	drawCard = cards[card].drawCard(theCard)

    #print(cards[card].back)

	while True:
		if barajaJuego:
			descarte1 = input(jugador1.nombre + ' ¿que carta quieres descartar? ')
			jugador1.descartar(descarte1)

			jugador1.robarCarta(barajaJuego)

			jugador1.mostrarMano()

			descarte2 = input(jugador2.nombre + ' ¿que carta quieres descartar? ')
			jugador2.descartar(descarte2)

			jugador2.robarCarta(barajaJuego)

			jugador2.mostrarMano()

		else:

			print('Se acabaron las cartas')
			break