# Nodela

A full stack web app that allows users to post their Nodelas (play on the word Novela), dramatized Node.js stories that may
have drove them crazy, and what the solution was. This is a perfect tool to look back at situations that really had you stumped. 
Other users can chime in to share similar accounts, and how they were able to solve their Nodela. Retelling your problem in story form,
and giving a step by step explanation really helps you recall the situation and solution should you ever encounter it again.
Ultimately, this is a social but educational application that will help developers thrive! 

![alt tag](https://i.ibb.co/QFTz0BX/Nodela.png)
![alt tag](https://i.ibb.co/s3J3d2t/profile.png)

**Link to project:** https://nodela1.herokuapp.com/

## How it's made:
**Tech used:** HTML, CSS, Javascript, Express.js, Node.js, EJS, MongoDb, Mongoose

## Optimizations

So far the app allows users to post stories, look at the feed for all users' stories, and you can click on each story individually to visit 
its page and leave a comment for the post. I will add a like button for stories in the near future, and there will also be some visual
changes to the comment and story divs.

## Lesson/Lessons learned:
I learned how important it is to plan your schemas before diving into a project. The database structure is vital to effectively grab
and use the data that is stored. One example I have of this, is the issue I had with comments on my project. I was unable to 
separate comments by users when I had my comment object inside my posts/story objects. Creating an entirely new schema for comments
created an ID for each comment made, which created a method for me to pinpoint specific comments and do what I wanted with them.
There were other things that I learned, but this so far has been my biggest takeaway.



Fractal by HTML5 UP
html5up.net | @ajlkn
