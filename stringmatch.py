#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the matchingStrings function below.
def matchingStrings():
    strings=[]
    queries=[]
    n=int(input('Enter size of string'))
    print('Enter strings')
    for i in range(n):
        m=input()
        strings.append(m)
    q=int(input('Enter size of queries'))
    print('Enter queries')
    for i in range(q):
        n=input()
        queries.append(n)
    count=0
    for i in queries:
        for x in strings:
            if i==x:
                count=count+1
        print(count)
        count=0
matchingStrings()