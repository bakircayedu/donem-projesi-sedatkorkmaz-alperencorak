# Small Blog Installation Guide
Small-blog is a social media blog website like medium. This guide prepared for installing local preview of small.

## Tech

Small uses a number of open source projects to work properly:

- [node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework 
- [jQuery] 
- [ejs]


## Installation

Small api and client both requires [Node.js](https://nodejs.org/) v14+ to run.

Before installation please enter a mongo uri to small-blog-project/api/config/env/config.env

If you want to load sample datasets. Sample documents will be found in the JsonData folder. You can insert this documents to your mongodb database. 

Install the dependencies for api and start the api server. 

```sh
cd .\small-blog-project\api
npm i
npm run dev
```
After that API server will be running on port 4000 

Install the dependencies for client and start the client server. 
```sh
cd .\small-blog-project\client
npm i
npm run dev
```
After that Client server will be running on port 8080 


   [node.js]: <http://nodejs.org>
   [jQuery]: <http://jquery.com>
   [express]: <http://expressjs.com>
   [ejs]: <http://ejs.co>
