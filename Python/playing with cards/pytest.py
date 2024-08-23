import sys, pygame, os, random, time
from pprint import pprint
pygame.init()
pygame.font.init()
clock = pygame.time.Clock()

size          = width, height = 900, 800
speed         = [0, 0]
black         = 0, 0, 0
limit         = 0
cardBackBlack = "cards/cardBack_blue1.png"
cardBackRed   = "cards/cardBack_red1.png"
cards         = {}
ball          = {}
ballrect      = {}
x             = 0
y             = 0
HEIGHT        = 190
WIDTH         = 140

screen = pygame.display.set_mode(size)

class Card():
    """docstring for Card"""
    def __init__(self, name, value, back, x, y, left, right):
        
        self.name   = name
        self.value  = value
        self.back   = back
        self.x      = x
        self.y      = y
        self.attr   = [value,back]
        self.memory = [x,y]
        self.left   = left
        self.right  = right


    def createCard(self):

        return pygame.image.load(self.back)

    def drawCard(self, card):

        return card.get_rect(topleft=(self.x,self.y))

class Deck():
    """docstring for Deck"""
    def __init__(self, cards):

        self.cards = cards
    
    def shuffleCards(self):

        keys =  list(self.cards.items())
        random.shuffle(keys)
        self.cards = dict(keys)

    def drawDeck(self, flag):

        x, i = 0, 0

        if flag == 0:
            
            for card in self.cards:
            
                theCard            = self.cards[card].createCard()
                self.cards[card].x = x
                drawCard           = self.cards[card].drawCard(theCard)

                screen.blit(theCard, drawCard)

                x += 3

        else:

            for card in self.cards:

                theCard  = self.cards[card].createCard()
                drawCard = self.cards[card].drawCard(theCard)

                screen.blit(theCard, drawCard)

    def flipCard(self, pos):

        keys = list(self.cards.items())
        #card = keys[-1]
        #i = 0
        for card in keys:
            
            if self.cards[card[0]].x + WIDTH > pos[0] and pos[0] > self.cards[card[0]].x:
                
                if self.cards[card[0]].back == self.cards[card[0]].attr[0]:

                     self.cards[card[0]].back = self.cards[card[0]].attr[1]
                
                else:

                    self.cards[card[0]].back = self.cards[card[0]].attr[0]

            #i += 1

    def moveCard(self, pos):

        keys = list(self.cards.items())
        #card = keys[-1]
        valid = 0

        i = 0
        app = {}
        value = 0

        for card in keys:

        
            if self.cards[card[0]].x + WIDTH > pos[0] and pos[0] > self.cards[card[0]].x and self.cards[card[0]].y + HEIGHT > pos[1] and pos[1] > self.cards[card[0]].y:

                actualCardXAxis =  pos[0] - self.cards[card[0]].x

                app[card[0]] = actualCardXAxis

                if app:

                    value  = min(app.keys())

                i += 1

                continue

                
        c     = keys[i]
        value = c[0]

        for x in app:
            
            av = app[x]
            

        if value != 0:
           
            self.cards[value].x = pos[0]
            self.cards[value].y = pos[1]

           

f = 0

for filename in os.listdir('cards/'):

    if filename != 'cardBack_blue1.png' and filename != 'cardBack_red1.png':

        if f == 0:
            
            left  = False
            right = True

        elif f == 53:

            left  = True
            right = False

        cards[filename] = Card(filename, 'cards/' + filename, cardBackBlack if filename.find('Clubs') > 0 or filename.find('Spades') > 0 else cardBackRed, x, y, left, right);

        x += 3
        f += 1

deck = Deck(cards)
deck.shuffleCards()

flag = 0

while 1:

    for event in pygame.event.get():

        if event.type == pygame.QUIT: 

            sys.exit()

    pos  = pygame.mouse.get_pos()
    keys = pygame.mouse.get_pressed()

    if keys[0] == 1:

       deck.moveCard(pos)

       flag = 1
    
    if event.type == pygame.MOUSEBUTTONUP:

        if event.button == 3:
            
            deck.flipCard(pos)

            event.button = 0


    screen.fill(black)

    deck.drawDeck(flag)

    clock.tick(20)

    pygame.display.flip()