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
- Nested routes refers to the pages located in their parent pages
- like pages **'first'** and **'second'** (with their own *page.tsx* files) are located within the **'blog'** page [folder]
- so the parent route is ***localhost:3000/blog***
- while the nested (children) routes are ***localhost:3000/blog/first*** and ***localhost:3000/blog/second***

## **Dynamic Routes**
This is required when we need to create indefinte number of pages (for example, profiles, item descriptions, products), we cannot manually create folders(pages) for each one of them, so we need to create routes **dynamically** than manually

![alt text](image-3.png)
- we write the folder's name in '[]' (square brackets) to signify the ***dynamic segment*** in the project
- here, **[productId]** is the **dynamic** folder, making the url **"localhost:3000/products/:id"**
- whether we write **':id'** as 1 or 100, i's going to show a new page with the same details, thus creating dynamic routing

## **Dynamic Nested Routes**
![alt text](image-4.png)<br>
works the same way as Nested routes and Dynamic routes **combined** together<br>
URL - ***localhost:3000/products/1/reviews/1***

## **Catch-all Segments**
![alt text](image-5.png)
#### Intro
- as shown in here, if we had *20 features* and *20 concepts* for **each feature**, if we didn't use Dynamic Routing, we would have needed (20*20 =)400 seperate files
- but using Dynamic Routing, we use a *single file* for the features and a *single file* for the concepts, making the URL - *localhost:3000/features/20/concepts/20*, which makes file handling much easier
- but if we were to add another layer of nesting- 20 examples for each concept of each feature, it can become **complicated**
- **catch-all segments** is used to solve the nesting problem, requiring only **1 file** to handle all the nested files/urls

#### Implementation
![alt text](image-6.png)
1. create a new folder in the app folder, let's name it *docs*
2. then create another folder in the *docs* folder, the naming being ***[...(anything)]***, let's call it ***[...slug]***
    - the name should be in *square brackets* ([]) and should start with *three dots*
    - *"slug"* is a common term for "urls"
3. then create a page.tsx file under the ***[...slug]*** folder with a return statement
4. now whenever you type in a url with the parent folder name (here, *docs*) in it followed by something, example, ***localhost:3000/home/docs/features/concepts***; it wil return the content of the *page.tsx* file
    - the url shouldn't be ending with the parent folder name, ex - ***localhost:3000/home/docs***, or it will show error.
5. therefore, this is the **"catch-all segments"** that catches all the urls containing the parent folder name, thus, requiring only 1 file for handling the rest of the nested links
6. if we want to make sure that the url - ***localhost:3000/home/docs*** also works (and doesn't return with an error message), we need to change **[...slug]** to **[[...slug]]** *(adding extra square brackets)*
7. adding this extra square brackets to the *[...slug]* to *[[...slug]]*, makes the [...slug] path optional, thus allowing urls to directly jump to the **page.tsx** content

how to know to use just a *page.tsx* file and/or a *catch-all segments* concept
- if there are no changes in UI irresepective of the path/url, use just a *page.tsx* file
- if there are changes in UI resepective of the path/url (here), use *catch-all segments* concept

#### Code Snippet
- this code snippet stores the params/url in **string array**
- if there is only *1 element* after the parent folder name (here, docs) seperated by a "/", it will execute the "else if" section
   - url - ***localhost:3000/docs/element1***
   - outcome - ***Viewing docs for feature element1***
- if there is are *2 elements* after the parent folder name seperated by two "/", it will execute the "if" section
   - url - ***localhost:3000/docs/element1/element2***
   - outcome - ***Viewing docs for feature element1 and concept element2***

## **Not-Found Page**
- if we write a url that doesn't correspond to any built route, Next automatically shows a "404: Not Found Page"
- but if we wanted a custom not-found page, we create a **not-found.tsx** file under the app folder
    - as shown in "src/app/not-found.tsx
- so whenever a non-appropriate url is entered, Next automatically returns the *not-found.tsx*
- the name **not-found** should be exact with a hyphen (-)
- the *custom not-found page* can also be rendered depending on a trigger/action
    - as shown in "src/app/products/[productId]/reviews/[reviewId]/page.tsx
- also a **seperate** custom not-found page can be made for different paths
    - as shown in "src/app/products/[productId]/reviews/[reviewId]/not-found.tsx
- not-found.tsx doesn't pass any **props**
- therefore, we use usePathname hook, which is a client-side hook and cannot be used in server components.