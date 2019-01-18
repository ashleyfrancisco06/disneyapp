# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 1| Wireframes / Priority Matrix / Functional Components | Complete
|Day 2| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 2| Pseudocode / actual code | Complete
|Day 3| Initial Clickable Model  | Complete
|Day 3| MVP | Complete
|Day 3| Present | Complete


## Project Description
This App is a Disney Touring App. It allows you to check out the rides in Disney's Magic Kingdom as well as Disney Hotels and the dining spots in Magic Kingdom.

## Wireframes

https://photos.app.goo.gl/2b5x7cqPK4DvhDTs6


## Priority Matrix

https://photos.app.goo.gl/2b5x7cqPK4DvhDTs6


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 

- Find and use external api 
- Render data on page 
- create basic components
- put data on page 
- nest routing
- grid out page(s)
- style

#### PostMVP 

- add slideshow to Home page
- add a cart page that links to cart icon
- add recently viewed slideshow on tours page 
- add map for entire park on main page

## React Architectural Design

Define the the React components and the architectural design of your app.

#### [SAMPLE FROM A MAP BASED PROJECT](https://res.cloudinary.com/dvjtpejbw/image/upload/v1540221204/20181022_111216.jpg)

## Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 


| Component | Description | 
| --- | :---: |  
| Header | This will render the header include the nav and title | 
| Main/Tour Pages | This will render the main  which renders the # Tour Pages (dining, attractions, hotels)| 
| Footer | This will render the footer with soical media icons| 



Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.


| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| Adding Components| H | 5hrs| 2 |
| Working with API | H | 5hrs|3 |
| Routing and Nested Routing | H | 3hrs | 4 |
| Grid out touring pages | H | 3hrs | 3.20min|
| Style | H | 3hrs | 7 | 
| Total | H | 19hrs| 19.20hrs | 

## Helper Functions

| Function | Description | 
| --- | :---: |  
| componentdidmount | set the state of my api? or return my data | 
| fetchdata| fetch api data |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 
 
 #### SAMPLE.....
| Library | What it Does | 
| --- | :---: |  
|Disney Dining API | Used to  get dining API | 
| Disney Atrractions API| used to get magic kingdoms rides data | 
|Font Awesome | added the social media icons on footer | 
| Google Fonts | added external fonts| 


## Code Snippet

// mapping through the attractions array and setting index 
        const renderBoth = this.state.attractions.map((eachAtt, index) => {
            // now grabbing the images and setting index to match the index for each attraction.
            const att = attractionImg[index].image 



## Change Log
 - created new "page" with second api
 - react routing added
 - mapping through api and images  


| Original Plan | Outcome | 
| --- | :---: |  
| make separate component for images | mapped through api and images in order to group them on a grid | 

## Issues and Resolutions
 My biggest resolution has been resolving the issue of getting my api data and my array of images to show together.

