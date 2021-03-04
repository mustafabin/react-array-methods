# React and Array Methods

## Goals

By the end of this exercise, you should have something that looks like the following:

![complete gif](./complete.gif)

## Setup

1. Fork,
2. Clone,
3. Install dependencies,
4. Get hacking!

## Instructions

Inside of this repository, there's a React App with a few components. Your job is to use the array methods `filter`, `reduce`, `find`, and `some` to render some information about the flavors at **Ye Olde Ice Creame Shoppe**. The `.map()` has already been implemented in the `Map.jsx` component, as a demonstration. Each time you complete a component, check it in App.js. If you need a reference for any of these methods, use [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods).

### Filter

Open the `components` folder and open `Filter.jsx`. Within this component, filter over the `flavors` props for only flavors with chocolate chips. Take these filtered flavors and render a `Flavor` component for each one.

### Reduce

Open the `components` folder and open `Reduce.jsx`. Within this component, reduce the `flavors` array to a number—specifically the total number of flavors with chocolate chips. Take this number, and render how many flavors have chocolate chips.

### Some

Open the `components` folder and open `Some.jsx`. Within this component, use the `some` method to find out if there are any flavors without chocolate chips. If there are flavors without chocolate chips, you should render the word "yes", otherwise render the word "no".

### Find

Open the `components` folder and open `Find.jsx`. Within this component, `find` a flavor with the word "Sorbet" in its `name`. Render the `name` of this flavor.
