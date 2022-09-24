# Frontend

I wanted to do this task with a portable web page accessible easily for anyone and so, have created the task in a single HTML page with external CSS and java script files included with <style>, <link> and <script> tags.
This page can be accessible in a browser easily and can be transfer to anyone easily.
Data Fetching:
Data has been fetched using the GET API call using the open URL provided by SpaceX team in readme file ("https://api.spacexdata.com/v4/launches”) without authorization. Sending async = false (makes it synchronous). So, the control waits till the response is received from the API call.
Data is fetched using XMLHttpRequest Object using open() and send() functions inside the <script></script> tags for Java Script code. 
Data fetched is available in the form of JSON text and so using JSON.parse() function, converted the text to JSON list object.
HTML Coding:
For responsive behaviour, used bootstrap and for pagination used jQuery and data tables.
Table has been created with headers and then the data is dynamically fetched from the API call as JSON list object is used to create the table data.
Created rows with different cells of row data and then the data is added to the innerHTML of the cells. 
Data Mapped:
We have 193 objects in the response output and out of them some objects are the future launches planned which has no launch status(from the variable success inside the object) and with date as future date and upcoming is true.
Launch Date & Time:
The launch date is available in date_local variable which is providing the timestamp of the data with time zone.
Payload’s or Client’s Name:
Under name variable, SpaceX provided the details of its internal missions like Starlink project or external clients details in terms of satellite or payload information.
Flight Number:
flight_number variable has information related to related to their rocket’s number of launches.
Rocket:
We don’t have any clear information from the payload regarding the rocket used. In general they have Falcon series of rockets for the launches and most commonly used is Falcon9. We have a rocket variable inside the object which has a code of the rocket( which is called rocket’s id) used and most common one is 5e9d0d95eda69973a809d1ec which is assumed as Falcon9 (since its common usage for their launches).
Description of the launch:
Launch description is available in the variable details, where the data is null for future launches and so a customized message of “No description is available to show” is replaced at null data and the available data is shown as they are.
Rocket Status:
Rocket’s status is available in the variable called success, which has true or false (most of the cases it was true and so the true values are replaced with Success and false with Failed)
Image of the Launch:
Inside the links object we have flickr  and patch objects, the original launch images are available inside the flickr objects in a list of images but only for few launches. So, patch object is considered, and small image is mapped in the cell which has the image of the payload or mission image of the launch.






 
