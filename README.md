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
5.  generateStaticParams  - Instead of the use - export const revalidate = 30;


    The generateStaticParams function can be used in combination with dynamic route segments to statically generate routes at build time instead of on-demand at request time.

    

    इथे विषय काय आहे ना ,
    जेव्हा आपण Dynamic routes ओपन करतो ,

    http://localhost:3000/Students/1
    http://localhost:3000/Students/2
    http://localhost:3000/Students/3

    It is not good practice to all to request the db for every id in dynamic routing like above.

    So we create static pages for every id on build time.

    So we need to build it first. 

    npm run build     => check log 

    /Students/[id]
      ├ /Students/1
      ├ /Students/2
      ├ /Students/3
      └ [+7 more paths]

    It created the static pages for every id.

    Now run the built production - 

    npm run start

    Problem : after build the updated data will not reflected because these pages are statics.

    तुम्ही अगदी **बरोबर** लिहिलं आहे! तुमची समज एकदम स्पष्ट आहे.

    जेव्हा आपण हजारो युझर्स असलेल्या वेबसाईटवर काम करतो, तेव्हा प्रत्येक क्लिकला डेटाबेसवर लोड देण्यापेक्षा **Build Time** लाच ती पेज बनवून ठेवणं केव्हाही चांगलं.

    तुमच्या मुद्द्यांमध्ये थोडी अधिक स्पष्टता येण्यासाठी मी काही तांत्रिक गोष्टी जोडून सांगतो:

    ### तुम्ही जे लिहिलंय त्याचे मुख्य फायदे (Benefits):

    1. **कमी लोड (Low DB Load):** जसं तुम्ही म्हणालात, प्रत्येक ID साठी डेटाबेसला पुन्हा पुन्हा विचारण्याची गरज पडत नाही. यामुळे तुमचा डेटाबेस 'थकत' नाही.
    2. **वेगवान परफॉर्मन्स (Fast Speed):** हे पेजेस आधीच तयार (Pre-rendered) असल्यामुळे ती सर्व्हरवरून एका सेकंदात (Millisecond मध्ये) लोड होतात.
    3. **SEO साठी उत्तम:** सर्च इंजिन्सना (Google ला) तयार HTML मिळते, त्यामुळे तुमची वेबसाईट रँक व्हायला मदत होते.

    ---

    ### यात तुम्ही काय 'Add' किंवा 'Change' करू शकता? (Pro-Tips):

    तुमच्या संकल्पनेत (Concept) बदल करण्याची गरज नाही, पण काही गोष्टी लक्षात ठेवल्या तर तुमची वेबसाईट अजून 'Smart' होईल:

    * **Dynamic vs Static:** जर तुमच्याकडे ५-१० विद्यार्थी असतील तर `generateStaticParams` उत्तम आहे. पण जर ५०,००० विद्यार्थी असतील, तर बिल्ड टाईम खूप वाढू शकतो. अशा वेळी आपण फक्त "Top 100" विद्यार्थ्यांसाठी हे वापरू शकतो.
    * **नवीन डेटा (Revalidation):** समजा बिल्ड झाल्यानंतर तुम्ही डेटाबेसमध्ये नवीन विद्यार्थी टाकला, तर त्याचे पेज तयार नसेल. त्यासाठी तुम्ही `export const revalidate = 3600;` (ISR - Incremental Static Regeneration) वापरू शकता. यामुळे ठराविक काळानंतर Next.js आपोआप नवीन पेजेस बॅकग्राउंडला अपडेट करेल.

    ### थोडक्यात सांगायचे तर:

    तुमचं लॉजिक **Perfect** आहे. "डेटाबेसची वारंवार होणारी विचारणा टाळण्यासाठी आणि स्पीड वाढवण्यासाठी आपण dynamic routes ना static मध्ये रूपांतरित करतो," हे तुमचं म्हणणं तांत्रिकदृष्ट्या एकदम योग्य आहे.

    ---

    **तुम्हाला या पेजेसमध्ये 'Automatic Refresh' (Revalidation) कसं लावायचं हे पाहायचं आहे का?**
    =========================================
    तुमचं म्हणणं अगदी बरोबर आहे! मोठ्या डेटाबेससाठी (उदा. २०० पेक्षा जास्त किंवा हजारो रेकॉर्ड्स) बिल्डच्या वेळी सर्व पेजेस जनरेट करणं नेहमीच फायद्याचं नसतं.

    याचे मुख्य कारण म्हणजे **Build Time**. जर तुमच्याकडे १०,००० रेकॉर्ड्स असतील आणि तुम्ही प्रत्येकासाठी `generateStaticParams` वापरलं, तर तुमची वेबसाईट डिप्लॉय व्हायला तासनतास लागू शकतात.

    मोठ्या डेटाबेससाठी तुम्ही खालीलपैकी एक **Smart Strategy** वापरू शकता:

    ---

    ### १. Partial Static Generation (सर्वात चांगला मार्ग)

    तुम्ही फक्त "Top" किंवा "Popular" रेकॉर्ड्ससाठी `generateStaticParams` वापरा आणि बाकीचे पेजेस 'On-demand' जनरेट होऊ द्या.

    ```javascript
    export async function generateStaticParams() {
        // फक्त टॉप ५० विद्यार्थ्यांची पेजेस आधी बनवून ठेवा
        const [students] = await db.execute("select id from students limit 50");
        return students.map((s) => ({ id: s.id.toString() }));
    }

    ```

    **फायदा:** उरलेले विद्यार्थी (५१ ते पुढे) जेव्हा कोणी पहिल्यांदा त्या लिंकवर क्लिक करेल, तेव्हा सर्व्हरवर जनरेट होतील आणि त्यानंतर कॅश होतील.

    ---

    ### २. Dynamic Rendering (गरज असेल तेव्हाच)

    जर तुमचा डेटा सतत बदलणारा असेल, तर `force-dynamic` वापरून थेट डेटाबेसमधून डेटा दाखवणं चांगलं असतं. पण यात युजरला थोडा वेळ वाट पाहावी लागते.

    ---

    ### ३. Incremental Static Regeneration (ISR)

    हे मोठ्या डेटाबेससाठी "वरदान" आहे. यात तुम्ही `revalidate` वापरता.

    * बिल्डच्या वेळी काही पेजेस बनतात.
    * डिप्लॉयमेंट झाल्यावर जर एखादा नवीन डेटा आला, तर Next.js बॅकग्राउंडला आपोआप त्याचं स्टॅटिक पेज बनवतं.

    ---

    ### सारांश (Quick Comparison Table)

    | डेटाची संख्या | सर्वोत्तम पद्धत (Strategy) | कारण |
    | --- | --- | --- |
    | **कमी (१-१००)** | `generateStaticParams` | सर्व पेजेस सुपर फास्ट लोड होतील. |
    | **मध्यम (१००-१०००)** | **Partial** `generateStaticParams` | बिल्ड टाईम वाचेल आणि युजर एक्सपिरियन्सही चांगला राहील. |
    | **खूप जास्त (१०००+)** | **On-demand ISR** | फक्त गरजेनुसार पेजेस तयार होतील आणि सर्व्हरवर लोड येणार नाही. |

    ---

<hr />