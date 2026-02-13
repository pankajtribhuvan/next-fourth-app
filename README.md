Static vs Dynamic Pages :<br>

  app\dynamic\page.jsx <br>
  app\static\page.jsx <br>

 1. In this project we fetch data (10 rows) from mysql db- student table in both routes (static & dynamic). <br>

 2. After build the project using : <br>

    npm run build   => to build the project. <br>
    ----------------
    npm run start   => to run build project. <br>

 3. both pages are static - means they show only data (10 rows) <br>

    Even if we update database table -  <br>
    if we delete row in table,<br>
    It will not reflect on those static & dynamic pages.<br>
    <br>
    NOTE : After build they are static now. <br>
  

  4.  After Using - Route Segment Config - <br>

    export const dynamic = "force-dynamic" <br>

    Then again -  <br>
    
    npm run build.   => to build project. <br>

    Just use above line in dynamic route.<br>
    Now the dynamic/page.jsx is dynamic page now. <br>

    Means the database update will be reflects in dynamic/page.jsx. <br>
