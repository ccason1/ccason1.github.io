#Hypothesis: the average rating is significantly above 5

import csv
import numpy as np
import scipy.stats as stats

ratings = []

with open("NetflixOriginals.csv") as csvfile:
   rows = csv.reader(csvfile)
   next(rows, None) #skip header
   for row in rows:
      ratings.append(float(row[4]))

avg_rating = sum(ratings) / len(ratings)

stdev = stats.norm.interval(alpha=0.99, loc=avg_rating, scale=stats.sem(ratings))

print("Average: ", str(avg_rating))
print("stdev: ", stdev)
