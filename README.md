# 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

    -getElementById uses id and return one element
    -getElementsByClassName uses class and return many element
    -querySelector uses CSS selector and return the first match
    -querySelectorAll uses CSS selector and return all matches

# 2. How to create and insert a new element?

    first we need to create element by createElement() method, then add the content after that we just need to insert it into dom.

# 3. What is Event Bubbling?

    whenever a child element is clicked than if goes up to it's parent than it's grandparent and finally it goes to body.

# 4. What is Event Delegation?

    In event bubling we add event to many child elements but in delegation we add event to parent

# 5. Difference between preventDefault() and stopPropagation()

        - preventDefault() stops the default browser behaviour
        - stopPropagation() stops event from bubling
