# angularJs-Directives

<p align="center">
    <img  src="https://blog.semaphore-software.com/wp-content/uploads/2015/08/3-Ways-to-Master-Angular-js-Directives.jpg?136c6e">
  <p align="center">**AngularJS-Directive**</p>
</p>

## What are Directives?
- At a high level, directives are markers on a DOM element (such as an attribute, element name, comment or CSS class) 
  that tell AngularJS's HTML compiler ($compile) to attach a specified behavior to that DOM element 
  (e.g. via event listeners), or even to transform the DOM element and its children.

## What does it mean to "compile" an HTML template? 
- For AngularJS, "compilation" means attaching directives to the HTML to make it interactive.
- The reason we use the term "compile" is that the recursive process of attaching directives mirrors the process of compiling source code   in compiled programming languages.

## Following is listed the best practices for creating custom directives:
- ### Naming Convention: 
  Prefer using two or three letter prefix (except ng) while naming directives to avoid collision with future HTML   
  releases. Using “ng” as prefix might collide with AngularJS OOTB directives in future.

- ### Directive Definition Object (DDO): 
  Prefer returning DDO rather than a function.

- ### TemplateUrl Usage: 
  Prefer storing HTML template code in a seperate file and assign the path to templateUrl variable.

- ### Attribute vs Element: 
  Whether to create custom directive as an attribute or an element is tricky. 
  If the need is to create a component with core behavior and possibility to decorate the component with additional behavior in future,     you would want to make the directive as element (E). However, if the need is to decorate existing element with some custom behavior,
  you could create dirrective of attribute (A) type.
