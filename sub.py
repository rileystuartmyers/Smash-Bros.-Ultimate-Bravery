# Smash Ultimate Bravery!
#   characters = 76  dlccharacters = 13  total = 89
#   dmoves = 4  airmoves = 4 smashmoves = 3  specialmoves = 5  
# Character numbers are slightly higher due to Pyra/Mythra, and Pokemon Trainer. Pokemon trainer + 2, Pyra/Mythra +1

# conventional would give one move for one character
# lentil would give one move for one character and one objective (teabagginga after kill or sd)
# impossible would only give moves that are hard to kill with/do no damage

import random


charactersnumber = random.randint(1,76)
totalnumber = random.randint(1,89)
movenumber = random.randint(1,15)
lentilnumber = random.randint(1,6)
impossiblenumber = random.randint(1,4)

characters = ('Mario' , 'Donkey Kong' , 'Link' , 'Samus' , 'Yoshi' , 'Kirby' , 'Fox' , 'Pikachu' ,
'Dark Samus' , 'Luigi' , 'Ness' , 'Captain Falcon' , 'Jigglypuff' , 'Princess Peach', 'Princess Daisy',
'Bowser' , 'Ice Climbers' , 'Sheik' , 'Princess Zelda' , 'Dr.Mario' , 'Pichu' , 'Falco' , 'Marth',
'Lucina' , 'Young Link' , 'Ganondorf' , 'Mewtwo' , 'Roy' , 'Chrom' , 'Mr. Game & Watch' , 'Meta Knight',
'Pit' , 'Dark Pit' , 'Zero Suit Samus' , 'Wario' , 'Snake' , 'Ike', 'Charizard' , 'Bulbasaur' , 'Squirtle',
'Diddy Kong' , 'Lucas' , 'Sonic' , 'King Dedede' , 'Olimar' , 'Lucario' , 'R.O.B' , 'Toon Link' , 'Wolf',
'Villager' , 'Mega Man' , 'Wii Fit Trainer' , 'Rosalina' , 'Little Mac' , 'Greninja' , 'Palutena' , 'Pac-Man',
'Robin' , 'Shulk' , 'Bowser Jr.' , 'Duck Hunt' , 'Ryu' , 'Ken' , 'Cloud' , 'Corrin' , 'Bayonetta' , 'Inkling',
'Ridley' , 'Simon' , 'Richter' , 'King K. Rool' , 'Isabelle' , 'Incineroar' , 'Mii Brawler' , 'Mii Swordfighter',
'Mii Gunner' , 'Piranha Plant' , 'Joker' , 'Hero' , 'Banjo and Kazooie' , 'Terry' , 'Byleth' , 'Min Min' , 'Steve',
'Sephiroth' , 'Pyra' , 'Mythra' , 'Kazuya' , 'Sora')

moves = ('Jab' , 'Forward Tilt' , 'Up Tilt' , 'Down Tilt' , 'Up-Air' , 'Down-Air' , 'Forward-Air' , 'Back-Air',
'Foward Smash' , 'Down Smash' , 'Up Smash' , 'Neutral Special' , 'Up Special' , 'Down Special' , 'Side Special')

lentils = ('Teabag after every kill' , 'SD at start of game' , 'Walk only' , 'Pinpoint Accuracy' , 'Comeback' , 'JV3')

impossiblecharacter = ('Mario' , 'Luigi' , 'Captain Falcon' , 'Snake')
impossiblemove = ('Down Special' , 'Down Taunt' , 'Neutral Special' , 'Box Taunt')

playerchoice1 = input("a)I have the DLC characters.  b)I don't have the DLC characters.")
if playerchoice1 == 'a':
    playerchoice2 = input("I am feeling... a)Conventional  b)Lentil  c)Impossible")
    if playerchoice2 == 'a':
        print("Your character is {}, and your move is {}.".format(characters[totalnumber], moves[movenumber]))
    if playerchoice2 == 'b':
        print('Your character is {}, your move is {}, and your objective is "{}".'.format(characters[totalnumber] , moves[movenumber] , lentils[lentilnumber]))
    if playerchoice2 == 'c':
        print('Your character is {}, and your move is {}.'.format(impossiblecharacter[impossiblenumber] , impossiblemove[impossiblenumber]))

if playerchoice1 == 'b':
    playerchoice2 = input("I am feeling... a)Conventional  b)Lentil  c)Impossible")
    if playerchoice2 == 'a':
        print("Your character is {}, and your move is {}.".format(characters[charactersnumber], moves[movenumber]))
    if playerchoice2 == 'b':
        print('Your character is {}, your move is {}, and your objective is "{}".'.format(characters[charactersnumber] , moves[movenumber] , lentils[lentilnumber]))
    if playerchoice2 == 'c':
        print('Your character is {}, and your move is {}.'.format(impossiblecharacter[impossiblenumber] , impossiblemove[impossiblenumber]))
