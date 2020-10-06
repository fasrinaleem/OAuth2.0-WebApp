# OAuth2.0-WebApp

Open the project in a familiar IDE (VSCode)

Execute one of the command in the terminal and Start the web server using the following command from your working directory.
The commands differ according to the version of python.

1) Command for Python 2.x - python -m SimpleHTTPServer 8000
2) Command for Python 3.x - python -m http.server 8000  

![Screenshot (30)](https://user-images.githubusercontent.com/38991771/95214863-f4d30800-080d-11eb-9be0-59d5ff32200b.png)

Load the URL http://localhost:8000 into your browser.
The first time you run the project, it prompts you to authorize access.

Click the Authorize button to open the authorization window.

If you're not already logged in to your Google account, the window prompts you to log in. 

If you are logged in to multiple Google accounts, you must select one account to use for the authorization.

Click the Accept button.

Then you will be directed to the eventlist page where your saved events are displayed.

This will display the last 10 events you have saved.

# Results
Main Homepage screen to Login to gmail account
![1](https://user-images.githubusercontent.com/38991771/95215976-357f5100-080f-11eb-9f6b-5b179de4e197.png)

Showing a warning message since we are accessing it from the localhost (not https protocol)
![2 1](https://user-images.githubusercontent.com/38991771/95215986-387a4180-080f-11eb-85e0-a3ef8a1e2ec9.png)

Gmail Login Screen for the “OAuthApp”
![3](https://user-images.githubusercontent.com/38991771/95215999-3adc9b80-080f-11eb-9116-9e48ed3655a3.png)

Allow permission for our app to view personal calendar data
![4](https://user-images.githubusercontent.com/38991771/95216008-3d3ef580-080f-11eb-9237-ce7983291faa.jpeg)

Grant app permission popup window
![5](https://user-images.githubusercontent.com/38991771/95216018-3fa14f80-080f-11eb-9c1f-abeb10a64d99.jpeg)

Display top 10 recent events for the particular gmail account
![6 1](https://user-images.githubusercontent.com/38991771/95216032-429c4000-080f-11eb-9629-48451fd1b902.png)

Display as no upcoming events message if there are any events for the particular gmail account.
![7](https://user-images.githubusercontent.com/38991771/95216046-44fe9a00-080f-11eb-91d5-8e8752358338.png)

Authorize button will change in to Signout when we login to the gmail
![8](https://user-images.githubusercontent.com/38991771/95216817-21881f00-0810-11eb-9fe5-97c52ae5bb0a.png)
