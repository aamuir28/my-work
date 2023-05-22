#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sun Oct 20 08:50:32 2019

@author: Giles
"""

'''
Question 1
Ask the user for two numbers between 1 and 100. Then count from the
lower number to the higher number. Print the results to the screen.
'''
# number1 = int(input('Enter a number between 1 and 100: '))
# number2 = int(input('Enter a number between 1 and 100: '))

# while number1 < 0 or number2 < 0 or number1 > 100 or number2 > 100 or number1 == number2:
#     print('Numbers can not be the same. Select again.') 
#     number1 = int(input('Enter a number between 1 and 100: '))
#     number2 = int(input('Enter a number between 1 and 100: '))
    
# if number1 < number2:
#     for i in range(number1, number2+1):
#         print(i, end=' ')
# else:
#     for i in range(number2, number1+1):
#         print(i,end=' ')

'''
Question 2
Ask the user to input a string and then print it out to the screen in
reverse order (use a for loop).
'''

# answer = input('Enter a phrase here: ')
# reverse = ''
# for char in answer:
#     reverse = char + reverse
    
# print (reverse)
    

'''
Question 3
Ask the user for a number between 1 and 12 and then display a times
table for that number.
'''
# number = int(input('Please enter a number between 1 and 12: '))
# for i in range(1,13):
#     print(f'{i} x {number} = {i*number}')



'''
Question 4
Can you amend the solution to question 3 so that it just prints out all
times tables between 1 and 12? (no  need to ask user for input)
'''
# for i in range(1,13):
#     print(f'{i} x {i} = {i*(i+1)}')

'''
Question 5
Ask the user to input a sequence of numbers. Then calculate the mean
and print the result
'''

# answer = input('Please enter a number: ')
# numbers = []
# while answer.lower() != 'stop':
#     while not answer.isdigit():
#         print('That is not a number.')
#         answer = input('Try again: ')
#     numbers.append(int(answer))
#     answer = input('Please enter next number: ')

# total = 0
# for number in numbers:
#     total += number

# print(f'Mean is {total/len(numbers)}')


'''
Question 6
Write code that will calculate 15 factorial. (factorial is product of
positive ints up to a given number. e.g 5 factorial is 5x4x3x2x1)
'''
n = 15
factorial = 1
for i in range(1,n+1):
    factorial = factorial * i
    
print(factorial)

'''
Question 7
Write code to calculate Fibonacci numbers. Create list containing
first 20 Fibonacci numbers, (Fib  numbers made by sum of preceeding
two. Series starts 0 1 1 2 3 5 8 13 ....)
'''

n = 20 

a = 0
b = 1

fib_nums = []

for i in range(n):
    fib_nums.append(a)
    a,b = b,a+b
    
print (f'The {n} Fibonacci numbers are, {fib_nums}')

'''
Question 8
The previous question was the first to contain comments. Go back
through the other questions in this file and add comments to the
solutions.
'''

'''
Question 9

     *****
     *
     ****
     *
     *
     *
Can you draw this using python? (comment the solution code)
'''



'''
Question 10
Write some code that will determine all odd and even numbers
between 1 and 100. Put the odds in a list named odd and the evens
in a list named even.
'''
