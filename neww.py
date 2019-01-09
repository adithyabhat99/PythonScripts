class Adithya:
    a=10
    def __init__(self,name):
        self.name=name


name=Adithya("adithya")
print(name.name)
print(name.a)

class Adi(Adithya):
    def __init__(self,msg):
        self.msg=msg
    def aa(self,l):
        self.l=l
mm=Adi('hi')
mm.aa('lol')
print(mm.msg)
print(mm.l)