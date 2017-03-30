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

- ### Isolate Scope:
   If the need is to reuse the component (directive) throughout your app, 
   consider creating isolate scopes using scope option. 
   "The concept of isolate scope is used to separate the scope inside a directive from the scope outside."
   
- ### Clean-up function:
  Consider defining clean-up function by registering an event, element.on( ‘$destroy’, …). 
  It is a good practice to remove event listeners once the ‘$destroy’ event is broadcasted, to avoid instances of memory leaks.   
  Listeners registered to scopes and elements are automatically cleaned up when they are destroyed.
  
- ### link v/s controller:
  It is often confusing to beginners on when to use controller function and when to define link function within the custom directive. 
  Thumb rule is use controller function when there is a need to expose APIs to other directives.
  In other cases, one could use link function.
  
- ### DOM Manipulation:
  Use the “link” option if there is a need to modify the DOM.

- ### Access to Outside Scope Object:
  If there is a need for directives’ content to access content from outer scope object (not defined within directive), 
  one may want to use “transclude: true”.
  
- ### Usage of @attr, =attr, &attr:Following is details related with @attr, =attr and &attr:
  <b>1).</b> @attr:@ binds a directive scope property to the evaluated value of the DOM attribute. 
  If you use name="name1" or name="name1", the value of DOM attribute name is simply the string "name1". 
  If you use name="{{name}}", the value of the DOM attribute name is the interpolated value of {{name}}. Simply speaking, with @attr,   
  one can bind a isolated scope property to a DOM attribute. This sets up a one-way databinding from the parent scope to the isolated 
  scope. If the parent scope changes, the isolated scope will reflect that change, but not the other way around.

  <b>2).</b> =attr:= binds a directive scope property to a parent scope property. 
  So with =, you use the parent scope property name as the value of the DOM attribute.
  And if isolated scope property changes, then it will update the property that exists in parent scope.

  <b>3).</b> &attr:The & symbol is used to to call an expression on the parent scope from the isolated scope.

## restrict:
- Used to define the type of the directive to be used<br/>
  <b>1. </b>  A : Attribute<br>
  <b>2. </b>  C : Class<br>
  <b>3. </b>  E : Element<br>
  <b>4. </b>  M : Comment<br>

## Some of the behaviours(functions) in angularJs are:
- Compile
- controller
- pre-link
- post-link
