#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Thu Oct 17 13:04:18 2019

@author: Giles
"""

'''
Question 1
Write code that asks the user to input a number between 1 and 5 inclusive.
The code will take the integer value and print out the string value. So for
example if the user inputs 2 the code will print two. Reject any input that
is not a number in that range
'''

# number = int(input('Please enter a number between 1 and 5: '))

# if number == 1:
#     print('one')
# elif number == 2:
#     print('two')
# elif number == 3:
#     print('three')
# elif number == 4:
#     print('four')
# elif number == 5:
#     print('five')
# else:
#     print('out of range')



'''
Question 2
Repeat the previous task but this time the user will input a string and the
code will ouput the integer value. Convert the string to lowercase first.
'''

# word = input('Please type a number between 1 and 5: ')
# word = word.lower()

# if word == 'one':
#     print('1')
# elif word == 'two':
#     print('2')
# elif word == 'three':
#     print('3')
# elif word == 'four':
#     print('4')
# elif word == 'five':
#     print('5')
# else:
#     print('out of range')
    



'''
Question 3
Create a variable containing an integer between 1 and 10 inclusive. Ask the
user to guess the number. If they guess too high or too low, tell them they
have not won. Tell them they win if they guess the correct number.
'''

# my_number = 3
# guess = input('Guess a number between 1 and 10: ')

# if guess.isdigit():
#     guess = int(guess)
#     if guess == my_number:
#         print('You win! That\'s the right number!')
#     elif guess <= 10 and guess > my_number:
#         print('You lose! You guess too high')
#     elif guess >= 1 and guess < my_number:
#         print('You lose! You guess too low')
#     else:
#         print('Out of Range')
# else:
#     print("That\'s not a number!")
    


'''
Question 4
Ask the user to input their name. Check the length of the name. If it is
greater than 5 characters long, write a message telling them how many characters
otherwise write a message saying the length of their name is a secret
'''
name = input('Please type your name: ')
length = len(name)

if length > 5:
     print('The length of your name is', length)
else:
     print('The length of your name is a secret')


'''
Question 5
Ask the user for two integers between 1 and 20. If they are both greater than
15 return their product. If only one is greater than 15 return their sum, if
neither are greater than 15 return zero
'''
#int_1 = int(input('Please enter an integer between 1-20:> '))
#int_2 = int(input('Please enter another integer between 1-20:> '))
#
#if int_1 > 15 and int_2 > 15:
    print(int_1 * int_2)
elif int_1 > 15 or int_2 > 15:
    print(int_1 + int_2)
#else:
    print(0)

'''
Question 6
Ask the user for two integers, then swap the contents of the variables. So if
var_1 = 1 and var_2 = 2 initially, once the code has run var_1 should equal 2
and var_2 should equal 1.
'''

