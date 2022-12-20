# MyStore

E-Commerce application That allows you to buy different products and control your cart in an easy way

## Development server
##### 1-Go to project folder 'My-Store' in cmd
##### 2-Run npm install --force
##### 3-Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. 

## Used libraries

#### Angular Material https://material.angular.io/
#### PrimNG https://primefaces.org/primeng/

####Components
##Product Components  (In product package)
#1-product-details contain details of the product
#2-Product-List  loop in the products from provided source
#3-Product-item present one item in the list


##Cart Component (In cart package)
#1-Cart-item contain the table of items in the cart
#2-Cart-info contain stepper that process cart payment 


####Services
#1-Product-service connection to data proviced which is  https://fakestoreapi.com/products and operations for manipulating data
#2-Cart-service contain cart logic operation like add or remove item for cart

####Models

#1-Cart model which contain the cart properties
#1-Product model which contain the cart properties


####Common
#1-tool-bar component
#2-cart-base class contain operations used in diffrent component

####routing 
#Three pathes available (cart ,productDetails,products)
#Wrong or empty path rerouted to products page

