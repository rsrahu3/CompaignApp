To Setup the code , run below command over node...<br>
  Step 1:npm install<br>
  Step 2:npm run dev<br>
  Step 3:Double click on index.html and open in browser<br>

Using webpack to bundle the code.Generated final output file will be in "dist/bundle.js".
included Bundled file in index.html file.

There are two ways to render the compaign list ...
1.Using Static data : 
Created Global function 'startApp', which will be used to pass static data, static data can be passed from index.html or from console.<br>Ex.. <br>startApp([{"id":1,"name":"Divavu","startDate":"9/19/2017","endDate":"3/9/2019","Budget":88377,"userId":201},{"id":2,"name":"Jaxspan","startDate":"11/21/2017","endDate":"2/21/2018", "Budget":608715,"userId":202}]).

2.Using Dynamic Data:If user don't pass any data in startApp function, bydefault it will call 'https://my-json-server.typicode.com/rsrahu3/Compaign5/data' and compaigns will render with that.


