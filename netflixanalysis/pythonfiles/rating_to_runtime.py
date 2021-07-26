import pandas as pd
import plotly.express as px

def graph():
	df = pd.read_csv("NetflixOriginals.csv")
	fig = px.scatter(df, x = 'IMDB Score', y = 'Runtime', title='Rating to Runtimes')
	fig.write_html('first_figure.html', auto_open=True)
	
		
graph()
