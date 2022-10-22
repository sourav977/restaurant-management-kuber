# restaurant-management-kuber
A Restaurant Management system designed for BITS Pilani first semester(July-Nov 2022) Assignment for course "Database Design and Application", (Group N)

## About RESTAURANT MANAGEMENT SYSTEM: “Kuber”
The Indian food industry is growing at an unprecedented scale, wherein it is projected that the industry will provide employment to 4,00,000 personnel with a market value of 14.9 Billion rupees. In way for further growth, our own dine-in Restaurant ‘Kohinoor’, is further looking to expand its operations by diversifying the services offered presently. 

We decided to adopt a database management system that can help us to organize our day to day restaurant business operation. Presently, ‘Kohinoor’ is surviving on a manual and paper based management system which is prone to manual errors and errors of omission and commission. Also, the present paper based system doesn’t give a correct picture of accounting, pay disbursement to staff and feedback from clients. 

The purpose of this management system is to automate and replace the current paper based system. All tasks previously recorded on paper will be integrated into the new database management system. ‘Kuber’, a restaurant management system, looks not only to effectively manage the day to day operations but will also optimise it to a lean and a mean operating unit.

The Aim of ‘Kuber’ is to provide a system to cater for services provided in a restaurant for both customer and employees. For example, booking a table based on customer request to taking dine-in order either from the customers or from our waiters and processing the bill for the corresponding order, adding special items to our menu on special occasion, everything will be managed by our ‘Kuber’ management system. ‘Kuber’ management system consists of a frontend website along with a backend database.

Our Restaurant Manager will have all the admin rights. He will login to ‘Kuber’ system and will manage workers details, update the menu on daily basis, book the table on customer request, can view the billing amount for a corresponding order and will update the final payment status. Waiter will help to take dine-in orders directly form the customers or we also have a provision to place an order directly by the customer. Every table will have a QR code and by scanning it, customer will redirect to our ‘Kohinoor’ website, customer will select items, provide his basic details and make an order. Both the customer and waiter have the provision to make multiple changes to the order. And finally, the customer or the waiter will initiate to generate bill. Now it’s the responsibility of our Cashier to collect the payment for that order and update the order status accordingly which will be finally acknowledged by the Manager. Manager  can generate Sales per day result. Currently we don’t support any online order deliver system, our only focus is to improve our dine-in management system first. 



Hopefully with all of the changes, it would help us to manage our dine-in restaurant run much more smoothly. Our ‘Kuber’ system will hopefully also be more reliable and user friendly to everyone. While it will require some training for employees, once the system is in place, the benefits will greatly outweigh the costs of implementing the system since using the computer to do most daily tasks will be much faster than a paper based system.


## Syatem Requirements
- frontend -> react v16.3.1
- backend -> Express v4.18.1, npm: '8.19.1', node: '18.9.0',
- mysql -> v5.7
- nginx -> latest
- docker -> latest
- Tool for visualise db -> squel pro/ phpmyadmin
- OS -> Mac/Windows/Ubuntu with above requirement
- for more info, refer `package.json` in `frontend` and `backend` dir

## Steps to Run the application
- Entire application is Dockerized.
- chdir to Project Directory. 
- Run below command in terminal to directly run this applicatioon in your local machine
    -   `docker-compose up -d`

    -   ### Below is the `output`

        `Creating restaurant-management-kuber_frontend_1 ... done`

        `Creating restaurant-management-kuber_mysql_1    ... done`

        `Creating restaurant-management-kuber_backend_1  ... done`

        `Creating restaurant-management-kuber_nginx_1    ... done`

- goto browser `http://localhost:3000/` for Frontend view.