### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

    -getElementById uses id and return one element
    -getElementsByClassName uses class and return many element
    -querySelector uses CSS selector and return the first match
    -querySelectorAll uses CSS selector and return all matches

### 2. How to create and insert a new element into the DOM?

    First we need to create element by createElement() method, 
    then add the content after that we just need to insert it into dom.

### 3. What is Event Bubbling? And how does it work?

    Whenever a child element is clicked than it goes up to it's parent than it's grandparent and finally it goes to body.
    First we need to create element by createElement() method,
    then add the content after that we just need to insert it into dom.

### 3. What is Event Bubbling? And how does it work?

    Whenever a child element is clicked than it goes up to it's parent
    than it's grandparent
    and finally it goes to body.
>>>>>>> 5fe7cfa (readme file final finishing)

    When an event happens, the browser handles it in 3 phases:

    - First, the event starts from the top of the dom tree, then it moves downward toward the element that was clicked.
    - then comes target phase where the event reaches the actual element that was clicked
    -then after reaching the target the event moves back upward,
    for example: child -> parent -> grandparent -> body -> html -> document

### 4. What is Event Delegation in Java Script? Why is it useful?

    In event bubling we add event to many child elements but in delegation we add event to parent
    It is useful for performance efficiency like instead of adding 100 event listners, 
    we will just add only one. If new elements are added later using Java Script that will still work automatically. 
    It is useful for performance efficiency like instead of adding 20 or 50 event listners,
    we will just add only one. If new elements are added later using Java Script that will still work automatically.
    We don't need to add new event listners again.

### 5. What is the difference between preventDefault() and stopPropagation() methods?

        - preventDefault() stops the default browser behaviour
        - stopPropagation() stops event from bubling
