# Business-Listing (Jolly Party)
Project by Ganesh and Shubham


## Joint Contribution of

- Ganeshraja
- Shubham Printe
- Abdula Sheikh (Mentor)
- Mr. Sundeep Charan (Instructor)

### About Our Project

Our Project is based on uniting all the vendors related to Celebration Party's Organisation on the same platform. These Vendors include: Photographers, Convention's Hall, Florists, Bakers, Caterers, Outfits, Jewellers, DJ On Hire, Dance Groups, Dhol Players, Event Organisers, Flower Decorators, Generators and Power Backup Providers, Guest Houses , Horses providers, Juice Providers, Mehendi Artists, Pandits, Pan Suppliers, Invitivation Card Suppliers, Sound System Providers, Grand Entry Planners, Bridal Makeup Artists, etc.
This idea striked my mind to build a party Dedicated app, to ease the party related hunt of customers. This app will provide users to have their budget friendly plans with maximum understanding and fulfilment of their need.
Success of all other online businesses inspired me to bring this business idea in existance. This Project includes features like Rating of vendors to make choices easier to cutomers, reccomendations according to past and present searches of users, etc.

## Context Diagram

<a href="#"><img src="https://res.cloudinary.com/dlaad0dt0/image/upload/v1586710312/WhatsApp_Image_2020-04-10_at_19.40.30_oxkxmf.jpg" 
alt="Context Diagram" width="500" height="450" border="10" /></a>

### Flow Chart-1 (Administrator Work flow)

<a href="#"><img src="https://res.cloudinary.com/dlaad0dt0/image/upload/v1586710312/WhatsApp_Image_2020-04-12_at_22.17.25_2_fnmuye.jpg" 
alt="Flow Chart 1" width="500" height="450" border="10" /></a>

### Flow Chart-2 (Vendor's Registration Approval Flow)

<a href="#"><img src="https://res.cloudinary.com/dlaad0dt0/image/upload/v1586710312/WhatsApp_Image_2020-04-12_at_22.17.25_3_ukosol.jpg" 
alt="Flow Chart 2" width="500" height="450" border="10" /></a>

### Flow Chart-3 (Vendor's Work Flow)

<a href="#"><img src="https://res.cloudinary.com/dlaad0dt0/image/upload/v1586710312/WhatsApp_Image_2020-04-12_at_22.17.25_1_armx32.jpg" 
alt="Flow Chart 3" width="500" height="450" border="10" /></a>

### Flow Chart-4 (Client's Work Flow)

<a href="#"><img src="https://res.cloudinary.com/dlaad0dt0/image/upload/v1586710312/WhatsApp_Image_2020-04-12_at_22.17.25_bhcshl.jpg" 
alt="Flow Chart 4" width="500" height="450" border="10" /></a>

### Types of Users and their Roles

| Role      | Rights                                                                                                                      |
| --------- | --------------------------------------------------------------------------------------------------------------------------- |
| Admin     | Will approve Vendors registration on the app, Can, View, Modify, Delete Vendors as well as coustomers as per his descretion |
| Vendor    | Can create and delete their account as per their need. Can see all the details related to their services.                   |
| Customers | Can create and delete account. Can view vendors, book services and cancel orders.                                           |

### End Points of APIs

1. Administrator's Routes

- Register Admin's Account
   > localhost:3000/api/v1/admin/register
- Admin's Login
   > localhost:3000/api/v1/admin/login
- Get vendors Business request by id
   > localhost:3000/api/v1/admin/activate/5e8cbd2bf5620d0ceb68c3b9
- Get All Businesses
   > localhost:3000/api/v1/admin/fetch/vendors
- Delete vendor request
   > localhost:3000/api/v1/admin/remove/vendor/5e848a5fb7c26d04cc6ebe54
- Get vendor requests (review)
   > localhost:3000/api/v1/admin/activate
- Get all clients
  > localhost:3000/api/v1/admin/fetch/clients
-Remove users
  > localhost:3000/api/v1/admin/remove/user/5e82214adbc8bd2acdfc903c
- Index page
  > localhost:3000/

2. User's Route

- Register
  > localhost:3000/v1/users/register
- GET Verify Email
  > localhost:3000api/v1/users/verify_email/91f49926-b387-481e-8cec-b808e2ed8116?email=ganeshrajamaddi@gmail.com
- POST Login
  > localhost:3000/api/v1/users/login
- GET Find logged in user
  > localhost:3000/api/v1/users/me
- POST Forgot password
  > localhost:3000/api/v1/users/create-password/3nw9e7jtk8r7zg2a
- PUT Verify forgot password token
  > localhost:3000/api/v1/users/create-password/3nw9e7jtk8r7zg2a
- PUT Modify password
  > localhost:3000/api/v1/users/modify-password/
- GET view all
  > localhost:3000/api/v1/users/view-all
- POST place an order
  > localhost:3000/api/v1/users/send-request/5e848d07fc964a05f96d26e9
- POST Post Ratings
  > localhost:3000/api/v1/users/ratings/5e882d56bc20ab16c221862a

3. Service's Rotes

- GET Get all services
  > localhost:3000/api/v1/services
- POST Create New service for business
  > localhost:3000/api/v1/business/5e8c4c5264f49b085abde2b9/services/
- GET Get service for Business
  > localhost:3000/api/v1/business/5e7f36e6d04ac1518cb02665/services
- GET Get single service
  > localhost:3000/api/v1/services/5e7f36e6d04ac1518cb02665
- PUT Update course
  > localhost:3000/api/v1/services/5e7f36e6d04ac1518cb02665
- DEL Delete service
  > localhost:3000/api/v1/services/5e8050ae39deb20969a96331

4. Business List's Route

- GET Get Single Business
  > localhost:3000/api/v1/business/id
- POST Create New Business
  > localhost:3000/api/v1/business/
- PUT Update Business
  > localhost:3000/api/v1/business/5e8c4c5264f49b085abde2b9
- DEL Delete Business
  > localhost:3000/api/v1/business/5e82396100149234d3beefb8
- PUT Update banner Image
  > localhost:3000/api/v1/business/image_banner/5e848d07fc964a05f96d26e9
- PUT Update Image Gallery
  > localhost:3000/api/v1/business/image_collections/5e848d07fc964a05f96d26e9
- DEL Delete Images from Gallery
  > localhost:3000/api/v1/business/image_collections/5e848d07fc964a05f96d26e9?gallery=gallery-1.jpg,gallery-2.jpg,gallery-6.jpg
- GET Get Recommendations
  > localhost:3000/api/v1/business/recommendations/5e848d07fc964a05f96d26e9
- GET Get Orders
  > localhost:3000/api/v1/business/orders
- POST Accept Orders
  > localhost:3000/api/v1/business/orders/id

# Technologies used:

- Nodemailer (_To send system generated emails_)
- Multer + Cloudinary (_Converting System Image into URL_)
- Express Js (_Framework for node Js_)
- Json Web token (_For Authentication_)
- Bcrypt Js (_For Hashing_)
- Helmet (_To Secure all Headings and Status_)
- Compressor (_To compress the size of the data_)
- Mongoose (_To Connect to NoSQL Database_)
- Mark Down (_To Make our read me file look better_)

## Features to be added as Future Goals are:

- Accepting Payments
- Mobile OTP Authentications
- Confirmation Message via Whats App
- Automatics Location Selection
- Push Notifications
- Offers on Services
- Staging of Order process visibility to the Clients
