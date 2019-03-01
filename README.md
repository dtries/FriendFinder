# FriendFinder
A Compatibility Application

## Individual Project 11 (Friend Finder) 

The assignment was to implement Node JS, Express JS, and Path JS to create and friend finder compatibility application employing servers to run the app as a website. The home screen introduces the user to the site, includes a fun friend related video, and a link to the compatibility survey. The survey itself asks for the users first name and a link to a photo, followed by 10 questions answered using a select menu to gather user responses. The app compares the answers to each question to those of each other person in the data base. The person in the database with a score most similar to the user is selected as the most compatible. The first name of the most compatiable person along with that persons image are displayed for the user in a modal. The user can select to take the survey again from within the modal. Links are also provided at the bottom of each page which are routed to the JSON api of the friends database and to this github repo, respectively.

## Screen Shots


 
## Getting Started on Your Own Machine
1. Clone [repo](https://github.com/dtries/Bamazon) to your machine. 
1. Enter 'npm install' in GitBash or your terminal.
   * This will install the proper js package files from a package JSON file.
1.
   
## Customer Portal
1. Enter 'node bamazonCustomer.js'for the customer portal. 
1. Look over the items for sale in the table produced upon entering the app.
1. At item purchase prompt enter item to order using the corresponding item number from the table.
1. Another prompt will appear asking how many of that item you would like to purchase, enter the desired quantity.
   * Possible results:
     1. Desired amount of the item requested is less than the stock on hand.
          * Order processing appears.
          * Customer is given the total cost.
          * Thank you message is displayed.
          * Transaction complete message is displayed.
          * The inventory in the database is updated by subtracting out the number of an item that was purchased.
          
     1. Desired amount of the item requested is greater than the stock on hand. 
          * Message is displayed indicating that not enough of the desired item is in stock.
          * The item purchase prompt is displayed again.
          

## Tech Employed
* Node.js - (see below)
* Express.js - https://www.npmjs.com/package/express
* Path.js - https://www.npmjs.com/package/path
* JQuery - https://jquery.com/
* Materialize - https://materializecss.com/

## Prerequisites
* Node.js - The latest version of Node is available at: https://nodejs.org/en/

## Built With
VS Code - Text Editor
## Authored and Maintained By:
Dennis Ries

Contact: dtries@gmail.com

© 2019 GitHub, Inc.
Terms
Privacy
Security
Status
