Static vs Dynamic Pages :

   # app\dynamic\page.jsx
   # app\static\page.jsx

 1. In this project we fetch data (10 rows) from mysql db- student table in both routes (static & dynamic).
 2. After build the project using :
    # npm run build   => to build the project.
    ----------------
    # npm run start   => to run build project.
 3. both pages are static - means they show only data (10 rows) 
    Even if we update database table - 
    if we delete row in table,
    It will not reflect on those static & dynamic pages.

    NOTE : After build they are static now.
  
  4.  After Using - Route Segment Config - 

    # export const dynamic = "force-dynamic"

    Then again - 
    # npm run build.   => to build project.

    Just use above line in dynamic route.
    Now the dynamic/page.jsx is dynamic page now.

    Means the database update will be reflects in dynamic/page.jsx.
