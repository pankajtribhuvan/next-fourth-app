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
