import re
exp=re.compile(r'^a.*\.$') #starts with a endswith .
res=exp.match('adi.')
if res:
	print(res.span()) # .group() can also be used,it'll show the matching expression instead of tupple
else:
	print("Nope")