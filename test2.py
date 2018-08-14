def func():

    swift={'name':'swift','price':300,'year':2018} 
    wagonr={'name':'wagonr','price':400,'year':2017}
    db={}
    db['swift']=swift
    db['wagonr']=wagonr    
    print(db)
    print('hi')
    if __name__=='__main__':
        for key in db:
	        print(key,'=\n',db[key])
    

