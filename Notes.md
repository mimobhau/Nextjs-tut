# **React Server Components**
React Server Components is a new architecture that was introduced by the React team and quickly adopted by Next.js.<br>
This architecture introduces a new approach to creating **React** componnets by dividing them into two distinct types:
- **Server components**
- **Client components**

### **Server Components**
- By default, Next.js treats all components as **Server** components
- These components can perform server-side tasks like reading files or fetching data directly from a database
- The trade-off is that they can't use *React hooks* or *handle user interactions*

### **Client Components**
- To create a Client component, you will need to add the **"use client** directive at the top of your component file
- While Client component cannot perform *server-side tasks* like readinf files, they can use *hooks* and *handle user interctions*
- Client components are the traditional React components you're already familiar with from orevious versions of React

### **React Server Components & Routing**
We will work with **server components** that wait for certain operations to complete before rendering content.<br>
We will also use **client components** to take advantage of hooks from the routing module.

# **Routing**
Next.js has a file-system based routing system.<br>
URLs you can access in your browser are determined by how you organize your files and folders in your code.

### **Routing conventions**
1. All routes must live inside the app folder
2. Route files must be named either ***page.js*** or ***page.tsx***
3. Each folder represents a segment of the URL path

When these conventions are followed, the file automatically becomes available as a route.

### **Page Structure**
![page structure](image.png)
- all the routes are inside the ***app folder***
- the ***page.tsx*** under the ***app folder*** is the main page (**Home page**)
- to create a different page, appropriate folders are made inside the app folder (for ex, about, profile)
- all the routes are named using ***page.tsx*** file under the appropriate folder
- in Next.js, no need to create perfect routing structure like in React, the **file/folder structure** will handle the ***routing***
- if the user searches for any other routes that do not exist, Next.js will automatically show him a built-in ***"Error 404: Page Not Found"*** page<br>
![alt text](image-1.png)

## **Nested Routes**
![alt text](image-2.png)
-