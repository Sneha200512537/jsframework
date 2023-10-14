
In this assignment, we are  building a personal portfolio website using Node, Express, and HBS views . 


For this first we use the code cd ASSIGNMENT01 to go to the folder we need and then open its terminal to download the necessary npm packages using npm install express and  npm install hbs codes.

Then we create an app.js file.Express and Node.js are used in the development of this application.
For rendering views, we employ Handlebars (hbs) as the template engine.First, we import the necessary dependencies (path, express).
For displaying HTML templates, we set the view engine to hbs and the view directory to view.
Express.static is used to serve static files, such as CSS, JavaScript, and pictures, from the 'public' directory.
The irouter variable, imported from the 'routes/index.js' file, contains the definitions of the routes for your application.

Then we create index.js, which defines routes for different pages of your web application using the Express router.Four paths are established:
The homepage is reached via the first route, '/'. The 'index' view is shown when a user visits.
For the 'About Me' page, use the second path, '/AboutMe'. The 'AboutMe' screen appears when a person visits.
'/Projects' is the third route, and it leads to the 'Projects' page where the 'Projects' view is displayed.
For the 'Contact Me' page, the 'ContactMe' view is shown through the fourth route, '/ContactMe'.
Every route defines a callback function that handles the request and response objects (req and res) to render the relevant view, along with the HTTP method (GET).

We  create a views folder to put all our templates.Inside the views we create our pages, ie home page,about me, contact me and projects and give them templates.We code them using html language.We create a single style.css under public to give css to all our view templates.
index.js and app.js files have been referred from class codes
Some Html codes have been referred from https://www.w3schools.com/html/html_examples.asp

Reference for images
Avatar- retrieved from https://avatarmaker.com/female/
designing.jpg retrieved from https://gracethemes.com/wp-content/uploads/2018/05/How-Web-Development-Framework-Work-for-Business-Progress.png
web.jpg retrieved from https://tse1.mm.bing.net/th?id=OIP.WCsJCxAre5bhgRrbD0dqCgHaDd&pid=Api&P=0&h=180
back.jpg retrieved from https://static.vecteezy.com/system/resources/previews/000/523/309/original/web-development-and-programming-coding-concept-seo-optimization-modern-web-design-on-laptop-screen-vector.jpg
women.jpg retrieved from https://cdn4.iconfinder.com/data/icons/business-people-characters/50/6-1024.png