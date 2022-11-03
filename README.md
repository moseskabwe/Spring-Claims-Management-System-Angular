# Claims Management System

This claims management system is a web application based on the Spring framework. The application is built using Spring Boot and Maven. The presentation layer uses Angular 14, HTML and CSS. The application connects to a MySQL database and uses the Hibernate framework to provide object-relational mapping.

## Tools and Technologies
* Java 1.8
* Spring MVC
* Hibernate ORM
* JDBC
* MySQL
* Angular 14
* TypeScript and JavaScript
* HTML and CSS
* Maven
* Git

## Entity Relationship Diagram
<p align="center">
  <img src="images/ERD6.png" width=600>
</p>

## Background

Simple Home Insurance needs a system to provide a way for its employees to manage policyholder claims efficiently. It should allow employees to create, view, decline and finalise claims. In addition, employees should be able record payments for approved claims. This claims management system will attempt to meet these requirements.

![](images/dashboard.JPG)

## Features

The claims management system has two actors: 

**Customer service representatives**: A user that has the responsibility of creating new claims on behalf of policyholders. They record all the relevant details of claims on a form and save it on the system. 

**Adjusters**: A user that manages claims by viewing the details of the claim, investigating the claim, and making a final decision. An adjuster can either decline a claim or approve and finalise a claim by recording the payment amount on the system. The adjuster can also view a list of all the claims they have managed.

Both actors can:
* search for policyholders
* view a list of all claims
* view all claim payments

## Screenshots

### Viewing all claims and claim payments:

![](images/all-claims.JPG)

![](images/payments.JPG)

### Viewing all policyholders and policyholder details:

![](images/policyholders.JPG)

![](images/policyholder-details.JPG)

### Viewing claim details:

![](images/claim-details.JPG)

### Creating a new claim:

![](images/add-claim.JPG)

### Declining a claim:

![](images/decline-claim.JPG)

### Finalising a claim:

![](images/finalise-claim.JPG)


