# ToDoListDemoUI
Simple RESTful API to manages todo list. ASP.NET Core Web API .NET 6.0  

I probably spent about 2 hours in total working on this project as REACT is not my primary language.
As REACT is not my primary language there may be some areas where I have not used the absolute best techniques, but hope I have shown an ability/willingness to get up to speed with this language and run with it while applying  good general coding practices.  

To build and run the solution, copy code locally, and from the route of the project folder run npm install to set up the project, and then npm run to run the project.  
You may need to update the following URLs in the src/Services/FetchService.js file to join at the correct port for the API  
const ToDoApiUrl = "https://localhost:7231/api/ToDo";  
const ToDoGruopsApiUrl = "https://localhost:7231/api/ToDoGroups";  

My technical design was to keep the JSX as simple as possible by splitting the application into logic bite sized components.  This makes the application easy to update and maintain and meant I could reuse components without duplicating code. 
I separated out the API functionality into its own service so this could be reused and not mixed up in the code.  
I chose this as the best approach as it's simple to implement, easy to understand and easy to maintain and expand.  
  
Although I completed the user stories, I did not complete the 'nice to have' or TypeScript and Jest.  This was due to taking a bit longer to complete the React application with it not being my primary coding language.  If I had time, I had intended to come back and add those things, and also style it up with Material UI. I may still continue and complete those tasks in my own time for the experience.  
Given more time, I also would have implemented some of the additional feature I'd built into the API such as additional ToDo data and custom ToDoGroups

 ## 1 - Initial  set up
Created React Application for UI

Added folders names Components and Services

Added FetchService to handle generic API GET, POST, PUT and DELETE calls.

Added Hook useEffect to App.js to load ToDo Data and ToDo Group Data

Output data to screen with simple select drop down filter

## Tagged - Version 0.1.1 - User story 1

Refactored react app into components

Added AddNewToDo component.

Manually update todo list in UI while posting message back to API.

## Tagged - Version 0.1.2 - User story 2

Added todo list item component

Added functionality to update ToDo groups and keep UI in correct state

##  Tagged - Version 0.1.3 - User story 3




