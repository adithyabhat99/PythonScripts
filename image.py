from PIL import Image,ImageFilter	
try:
	image=Image.open('lenna.png')
	image.load()
	print("The format,size and mode  of the image is", end='\t')
	print(image.format,image.size,image.mode)

	blurred=image.filter(ImageFilter.BLUR)
	image.show()
	blurred.show()
	blurred.save('blurred.png')

	contour=image.filter(ImageFilter.CONTOUR)
	contour.show()
	contour.save('contour.png')

	detail=image.filter(ImageFilter.DETAIL)
	detail.show()
	detail.save('detail.png')

	edge=image.filter(ImageFilter.EDGE_ENHANCE)
	edge.show()
	edge.save('edge.png')

	smooth=image.filter(ImageFilter.SMOOTH)
	smooth.show()
	smooth.save('smooth.png')

	sharp=image.filter(ImageFiter.SHARPEN)
	sharp.show()
	sharp.save('sharp.png')


except:
	print("There is no image!")





    
    
        
    
    

	



