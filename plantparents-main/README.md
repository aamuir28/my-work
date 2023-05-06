# plantparents

# Capstone Proposals

## 1. Problem Statement

We're aiming to create a software that will manage a community garden that is handled by multiple individuals from the community. Our system will track essential activities such as watering, harvesting, and categorizing plant beds based on watering frequency and sunlight requirements. This will resolve any miscommunication issues that might arise such as missed watering, and harvesting schedules, which would ultimately negatively affect the growth and yield of the garden. 

Our web-based application will allow multiple users to log in, keep track of the garden's activities, and update the status of each plant bed. Only admin will have the authorization to create and delete plots. The application will feature a user-friendly interface, allowing gardeners to easily track activities and generate reports that will provide a clear overview of the garden's status. 

With the application, gardeners will be able to schedule watering and harvesting activities more effectively, and categorize plant beds based on their needs. The application will ultimately improve the efficiency of the garden's management and positively impact the garden's yield.

## 2. Technical Solution

Briefly describe a technical solution to your problem with a couple concrete scenarios.

A new community member is volunteering to help with the garden but is unsure of where to start. They can access the system to see what activities are due to figure out which tasks need to be completed.

A new plant is added to the system that the community gardeners are unfamiliar with. They can access the system to find additional details of how to care for the plant.

## 3. Glossary

Define key domain terms. This won't map one-to-one with model classes, but it may be close.

Plot:
This will be a garden bed, defined by the type of plants it holds.

Plants:
There will be varying types of plants. The scientific name, common name, watering frequency, sunlight requirements, photo identification.

Gardeners:
Community members that take care of the garden.

## 4. High Level Requirement

Briefly describe what each user role/authority can do. (These are user stories.)

Create a plot: (ADMIN)
Read all plots: (ADMIN, USER)
Update a plot: (ADMIN, USER)
Delete a plot: (ADMIN)

Add a plant: (ADMIN)
Read all plants: (ADMIN, USER)
Update a plant: (ADMIN, USER)
Delete plants: (ADMIN)

## 5. Objective & Learning Goals

The main objective of the capstone project is to integrate the team's existing full stack knowledge (Java, JS, MySQL, HTML, CSS, etc) with cloud based technology (AWS and Elastic Beanstalk) as well as responsive design and development concepts(SVG and Canvas). 

We are using AWS and Elastic Beanstalk for logins and user roles due to their built in security and scalability. SVG and Canvas allow us to create interactive garden plans that are drawn based on information contained in our SQL database. SVG allows us to attach event listeners to specific elements in the community garden such as plants or plots. SVG allows us to draw the complex images needed for the community garden without complex code. Conversely Canvas, a lower level API, is more complex to use but allows for greater flexibility in design.

## 6. User Stories/Scenarios

Elaborate use stories.

Plots:
- location ?
- number of plants it can hold

As an admin, I want to be able to create a new plot so that I can add it to the garden layout.

As an admin or user, I want to be able to view all plots in the garden so that I can see which ones are available and which ones are in use.

As an admin or user, I want to be able to update the details of a plot ( watering frequency, sunlight requirements) so that I can keep track of its status and needs.

As an admin, I want to be able to delete a plot if it is no longer in use or has been abandoned.

Plants:
- name
- watering frequency
- sunlight requirements
- photo

As an admin, I want to be able to add new plant varieties to the garden so that gardeners can select them for their plots.

As an admin or user, I want to be able to view all plants in the garden so that I can see which ones exist in the garden.

As an admin or user, I want to be able to update the details of a plant so that I can keep track of its progress and needs.

As an admin, I want to be able to delete a plant if it is no longer in use, has died, or has been harvested.
