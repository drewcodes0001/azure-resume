# azure-resume
My own resume, following [ACG project video](https://www.youtube.com/watch?v=ieYrBWmkfno&t=1839s). 

## Frontend
- Frontend folder contains the website.
- main.js contains the visitor counter code.

## Backend
- Set up Azure Cosmos DB account, database, container, and relevant data. 
- Visitor counter data is stored in Cosmos  DB.
- JS code in front end will trigger an Azure Function to retrieve data from Cosmos DB. 
### Issues Encountered
- When creating the Azure Function project use .NET 8.0 LTS if .NET 3.0.10 is not available. Using the isolated version will have a different format from the tutorial video.
- Make sure to add in-process version of Nuget rather than the isolated version. 
