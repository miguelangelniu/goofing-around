import random

base_nitrogenada = ['A','T','G','C']

class Human:
    myDna = []

    def __init__(self, dna):
        self.dna = dna
    
    def getDna(self):
        self.myDna = []
        for _ in range(1,11):
            self.myDna.append(random.choice(self.dna))

        self.dna = self.myDna
        return self.myDna

class Man(Human):
    pass

class Woman(Human):
    childDna = []
    
    def setNewDna(self, maleDna):
        femaleCountBases = 0
        maleCountBases = 0
        for _ in range(1, 11):
            if random.randrange(1, 3) == 1:
                self.childDna.append(random.choice(self.myDna))
                femaleCountBases += 1
            else:
                self.childDna.append(random.choice(maleDna))
                maleCountBases += 1
        
        print(f'Man contribute: {maleCountBases*10} % | Woman contribute: {femaleCountBases*10} %')
        if random.randrange(1,3) == 1:
            return Woman(self.childDna)
        else:
            return Man(self.childDna)

if __name__ == "__main__":
    man = Man(base_nitrogenada)
    woman = Woman(base_nitrogenada)

    maleDna = man.getDna()
    femaleDna = woman.getDna()

    child = woman.setNewDna(maleDna)

    print(f'Woman DNA: {woman.getDna()}')
    print(f'Man   DNA: {man.getDna()}')
    print(f'Child DNA: {child.dna}')