
import html.parser
from bs4 import BeautifulSoup as bs
import requests
import urllib.request
url='https://www.imdb.com/movies-in-theaters/?ref_=nv_tp_inth_1'
html=requests.get(url)
soup=bs(html.text,'html.parser')
print('IMDB')
x=soup.find('h1')
print(x.text.strip())
y=soup.find('h3')
print(y.text.strip())

def list(url):
	t=0
	h=urllib.request.urlopen(url)
	soup=bs(h, "lxml")
	table=soup.find('div')
	rows=table.findAll('table')
	for a in rows:
		tr=a.findAll('tr')
		for b in tr:
			td=b.findAll('td','overview-top')
			for cs in td:
				tdd=cs.find('h4')
				zd=tdd.text.strip()
				print(zd)
				if t==0:
					file=open('movies.txt','w')
					file.write(zd+'\n')
				else:
					file=open('movies.txt','a')
					file.write(zd+'\n')

			t=t+1


				
				
				
	print("The list of movies will be saved in a text file")
	file.close()


list(url)





