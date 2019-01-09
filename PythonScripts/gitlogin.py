import requests
url='https://github.com/login'
r=requests.post(url,data={'login_field':'your_username','password':'your_password'})
print(r.text)
#logins to github and returns source code
