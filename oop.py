class MYCLASS:
		def __init__(self,amount,interest,time):
			self.amount=amount
			self.interest=interest
			self.finamt=0
			self.time=time
		

		def cal(self):
			self.finamt=(self.amount*self.time*self.interest)/100
			return unicode(self).encode('utf-8')

amount=float(input("Enetr amount"))
interest=float(input("Enter interest "))
time=float(input("Enter time"))
a=MYCLASS(amount,interest,time)
x=str(a.cal)
print('The final amount after {b} years is {c}'.format(b=time,c=x)
