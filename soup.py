from bs4 import BeautifulSoup as bs
import requests
import html.parser
hin='https://www.indiatoday.in/news.html'
pdata=requests.get(hin)
soup=bs(pdata.text,'html.parser')
x=soup.title
print(x.text.strip())