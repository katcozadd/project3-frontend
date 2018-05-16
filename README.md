# Ā Café Boise - Project 3

## Big Picture:
This website was created for one of my friends who is opening a cafe in Boise Idaho this upcoming summer of 2018. My major goals for this project was to make it mobile responsive and very aesthetically pleasing. Going forward with this project, I would like to create a feature where she has the capability to login as an admin and create blog posts, add a google map api for the location of the restaurant and create a gallery with photos that I will take of the cafe space once it is completely finished.

### Trello & Planning:

Here is a link to my [Trello Board](https://trello.com/b/eehEPsXB/a-cafe-project-3) for this project.

I was very thorough with my planning process for this project. Since this website will be for a "real-life" business. I took the time to really think through all of the different steps users will take on this website.

### Aproach Taken

I started this project by going through and wireframing what I wanted each page to look like. This really helped me as I went back through and made React components for each part of every page. 

While building the basic outline of the website, I went through tons of photos and found ones that made sense for the website. I used a CDN from Skeleton CSS to create responsive grids for my photos.

After getting the fundamentals and photos for the site finished, I tackled my contact form. Creating the form was very easy, but as soon as I had to add the React Logic to the form it became more difficult. I decided to use Google Firebase as my database and spent a lot of time researching how to connect form data to firebase. 

I managed to connect Firebase and my form, but after that decided I wanted to add an Email API called SendGrid to send all of the form data to my email. I had to add Node.js and Express to my project to make this API work. That API and route is hosted on Heroku and I am able to use this API by using Axios in my React App.

### Technical Requirements

**Back-End Requirements**
- This app must contain a Node, Express, and Mongoose backend API with at least 1 model. No associations are required. User authentication is strongly discouraged since it is often a major stumbling block.
- Alternatively, you may create your back end using Firebase! This can potentially be a big time saver. Please note that if you do this, we will be looking for a little more from you on the front end.

**Front-End Requirements**
- This app must use a React front end that leverages the backend API in the above requirement.
- Must use React Router to handle multiple views.
- Must communicate with the back-end API RESTfully to Create, Read, Update, and Destroy resources, using fetch or axios.

### Technologies Used

For this project, I used React, Node, Express and Firebase. 

I also used Skeleton CSS CDN and the SendGrid API

### Obstacles

A few obstacles that I ran into:

- I accidentally pushed my API key for SendGrid to GitHub and had my account suspended. I am currently still waiting to have my account reopened.
- I had some difficulty with making everything responsive
- I ran out of time to finish somethings that I thought would be cool for the project.

### Proud Moments

I am very proud of how aesthetically pleasing this website is and how it is mobile responsive. 

I am also very proud that this website will be used for one of my friend's businesses.

### Project Continuation

1. Create admin blog post functionality
2. Finish gallery
3. Get feedback from client and make changes based on what she wants.

### Deployment

You can find my website deployed on [Surge](http://acafeboise.surge.sh/)

My backend is deployed on Firebase and on [Heroku](https://github.com/katcozadd/project3-backend)

### Personal Flare

I built this website based on what my client/friend needs for her website functionality.

Coming soon with be photos that I have taken of the website.



