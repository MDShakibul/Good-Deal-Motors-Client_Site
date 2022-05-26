import React from "react";

const Blog = () => {
  return (
    <div className="pl-10 pr-10 ml-10 mr-10">
      <div className="mb-2 mt-2">
        <p>
          <span className="text-rose-900">
            Q5. How does prototypical inheritance work?
          </span>
          <br />
          Ans: The Prototypal Inheritance is a feature in javascript used to add
          methods and properties in objects. It is a method by which an object
          can inherit the properties and methods of another object.
          Traditionally, in order to get and set the [[Prototype]] of an object,
          we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in
          modern language, it is being set using __proto__.
        </p>
      </div>
      <br />

      <div>
        <p>
          <span className="text-rose-900">
            Q2. What are the different ways to manage a state in a React
            application?
          </span>
          <br />
          There are four main types of state you need to properly manage in your
          React apps: 1. Local (UI) state – Local state is data we manage in one
          or another component. Local state is most often managed in React using
          the useState hook.
          <br />
          2. Global (UI) state – Global state is data we manage across multiple
          components. Global state is necessary when we want to get and update
          data anywhere in our app, or in multiple components at least.
          <br />
          3. Server state – Data that comes from an external server that must be
          integrated with our UI state. Server state is a simple concept, but
          can be hard to manage alongside all of our local and global UI state.
          <br />
          4. URL state – Data that exists on our URLs, including the pathname
          and query parameters.
        </p>
      </div>
      <hr />
      <div className="mb-2 mt-2">
        <p>
          <span className="text-rose-900">
            Q3. Why should we not update the state directly?
          </span>
          <br />
          Ans: If you update it directly, calling the setState() afterward may
          just replace the update you made. When you directly update the state,
          it does not change this.state immediately. Instead, it creates a
          pending state transition, and accessing it after calling this method
          will only return the present value. You will lose control of the state
          across all components.
        </p>
      </div>
      <div className="mb-2 mt-2">
        <p>
          <span className="text-rose-900">
            Q1. How will you improve the performance of a React Application?
          </span>
          <br />
          Ans: Keeping component state local where necessary. Memoizing React
          components to prevent unnecessary re-renders. Code-splitting in React
          using dynamic import Windowing or list virtualization in React. Lazy
          loading images in React.
        </p>
      </div>
      <hr />
      <hr />
      <div>
        <p>
          <span className="text-rose-900">
            Q4. What is a unit test? Why should write unit tests?
          </span>
          <br />
          UNIT TESTING is a type of software testing where individual units or
          components of a software are tested. Unit testing allows software
          developers to actually think through the design of the software and
          what has to be done before they write the code. This can help them to
          stay focused and can also help them to create much better designs.
        </p>
      </div>
    </div>
  );
};

export default Blog;
