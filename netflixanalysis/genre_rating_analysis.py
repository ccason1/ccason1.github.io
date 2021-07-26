
#Question: is there a correlation between genre and IMDB score?
#Question: is there a correlation between IMDB score and runtime?
#Hypothesis: all ratings are above average

import csv
from collections import defaultdict
import matplotlib.pyplot as plt

min_films = 20 #the value is arbitrary, not based on anything mathematical

def csv_to_dictionary(csv_file):
   with open(csv_file) as csvfile:
      genres = defaultdict(list)
      rows = csv.reader(csvfile)
      next(rows, None) #skip header
      for row in rows:
         for genre in row[1].split('/'):
            genre = genre.replace('-',' ')
            genres[genre.strip()].append(float(row[4]))
   return genres
	
	
genres = csv_to_dictionary("NetflixOriginals.csv")

#eliminate genres with fewer than the minimum number of films
for genre in sorted(genres.keys()):
   if len(genres[genre]) < min_films:
      del genres[genre]

#fill a dictionary with the ratings averaged	  
genres_with_avg_rating = {}
for genre in genres.keys():
   genres_with_avg_rating.update({genre : sum(genres[genre])/len(genres[genre])})
   print(genre, genres_with_avg_rating[genre])

#generate a bar chart
keys = list(genres_with_avg_rating.keys())
values = list(genres_with_avg_rating.values())
plt.bar(range(len(genres_with_avg_rating)), values, tick_label=keys)
plt.show()



