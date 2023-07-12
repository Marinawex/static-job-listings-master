# Frontend Mentor - Job listings with filtering solution

This is a solution to the [Job listings with filtering challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 


## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Acknowledgments](#acknowledgments)



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Filter job listings based on the categories

### Screenshot

![](./screenshot.jpg)



### Links
- Live Site URL: [https://static-job-listings-master-mu.vercel.app/](https://static-job-listings-master-mu.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Static typing for JavaScript
- [Tailwindcss](https://tailwindcss.com/) - For styles


### What I learned

This project was a great opportunity to practice and reinforce my knowledge of Next.js, TypeScript, and React. I found the filter function to be a particularly interesting challenge, which led me to learn more about JavaScript's built-in array methods.

Here's a code snippet of the filtering function:

```js
const jobsFilterdBy = jobsList.filter((job) => 
  job.role === filter ||
  job.level === filter ||
  job.tools.includes(filter) ||
  job.languages.includes(filter)
);

```

### Continued development

In future projects, I aim to continue using TypeScript as it greatly helps in catching errors and enhancing code maintainability. I would also like to deepen my understanding of state management in large-scale applications.

One feature I would like to explore further is the ability to add filters in a more freestyle manner. Currently, the filters are limited to the predefined categories (role, level, tools, languages). However, an interesting avenue for development would be to allow users to add their own filters by typing into an input field. This would likely involve a more complex filtering algorithm and would present a great opportunity to further improve my JavaScript and UX design skills.

Lastly, I'm interested in exploring the integration of external APIs to extend the functionality and robustness of my applications. For instance, incorporating a job search API could make the job listings dynamic and continually updated.


### Useful resources

- [TypeScript in React](https://www.typescriptlang.org/docs/handbook/react.html)  - This helped me get started with using TypeScript in my React projects.
- [Next.js Documentation](https://nextjs.org/docs) - The official Next.js docs were invaluable in understanding how to structure my project.


## Acknowledgments

I would like to thank the Frontend Mentor team for creating these challenges. They are a great way to improve coding skills by working on realistic projects.
