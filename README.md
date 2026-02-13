1. Static vs Dynamic Pages :<br>

  app\dynamic\page.jsx <br>
  app\static\page.jsx <br>

  In this project we fetch data (10 rows) from mysql db- student table in both routes (static & dynamic). <br>

  After build the project using : <br>

    npm run build   => to build the project. <br>
    ----------------
    npm run start   => to run build project. <br>

  Both pages are static - means they show only data (10 rows) <br>

    Even if we update database table -  <br>
    if we delete row in table,<br>
    It will not reflect on those static & dynamic pages.<br>
    <br>
    NOTE : After build they are static now. <br>
  
  After Using - Route Segment Config - <br>

    export const dynamic = "force-dynamic" <br>

    Then again -  <br>
    
    npm run build.   => to build project. <br>

    Just use above line in dynamic route.<br>
    Now the dynamic/page.jsx is dynamic page now. <br>

  Means the database update will be reflects in dynamic/page.jsx. <br>

<hr />

2. Update Static Pages Without Rebuild using ISR 
    ISR - INCREMENTAL STATIC REGENRATION 
    
    https://nextjs.org/docs/pages/guides/incremental-static-regeneration

    We just add below like in /app/static/page.jsx

    export const revalidate = 30;

    So the because of above line , this page wait for 30 seconds then UPDATE page after refresh. [Not on route changes]


    then again build the project : for final production

    npm run build

    Then run the built project

    npm run start   => final built project.

<hr />

3. React Cache - Boost Performance with Cache.
    <br>
    Link : <br>
    app\CacheDemo\page.jsx <br>

    Only work on Server Component. <br>
    Perticularly useful on the server to avoid the repeated data fetching <br>
    for the same input , specially during  <br>
    SSR (Server Side Rendering) and React Sever Component (RSC) <br>

    --------------------- <br>

    Request Memoization (react.cache)	Avoids calling <br> 
    the same DB query twice on the same page/request.	 <br>
    One single Page Render <br>

    react.cache is scoped to a single "Server Request" (one page render). <br>

    When you click a <Link> and move from Home to CacheDemo, <br>
    Next.js performs a new request to the server  <br>
    to get the RSC (React Server Component) payload for  <br>
    that new page. Because it is a new request, the React  <br>
    cache is completely reset. <br>

<hr />

4. 404 - Not Found Page

    just create not-found.jsx inside app route

    app\not-found.jsx

    Code it and done !!!

    when user open any unknown root like below not-found page will open.
    

    http://localhost:3000/alsdkfjsldka

    It will work for app/ routes and it's nested routes too.

    http://localhost:3000/dynamic/sdf
  
<hr />