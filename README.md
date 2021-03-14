<h1 align="center">🔥 Google Shared Drives Creator 🔥<br></h1> 

<br />

<!-- > ## A simple script to automate the google Shared Drives creation. -->
[![Create-Google-Shared-Drive](https://i.imgur.com/GB6clwg.png)](https://github.com/MsGsuite/MsGsuite)

<br />


## Features
- 🔭 Create Shared Drive from your google account without using it
- 🛠 100% customizable 
- 🖼 User-friendly UI
- ⚙️ Add multiple accounts
- 🔐 Protected thanks to H-captcha 
- 📊 Add statistics

<br />

<!-- [![Indrajeet's github stats](https://github-readme-stats.vercel.app/api?username=msgsuite&count_private=true&include_all_commits=true&theme=radical)](https://t.me/msgsuite)-->

## How to add an account
#### ⚠️ Warnings
 - This is illegal to use hacked account! Add only the accounts you own.
 - You MUST have the right the create team drive into your account else it won't work.
 - I am not responsible of any google restrictions into your account or the subscription (the account may be suspendent by google due to abuse)

#### Add an account
Click on the 🖼 to get the associated image.
- First step : read the [⚠️ warnings](https://github.com/MsGsuite/MsGsuite#%EF%B8%8F-warnings)
- Then go to the [google cloud console](https://console.developers.google.com/apis/credentials), click on "CREATE PROJECT", name it as you want and click on "Create"  [🖼](https://i.imgur.com/Hh8gUSp.png) & [🖼](https://i.imgur.com/xYZjEOt.png)
- Select your project [🖼](https://i.imgur.com/hN2uGwQ.png), go to the [google drive api](https://console.developers.google.com/apis/library/drive.googleapis.com?q=drive) page and enable it.  
- Go to the [OAuth Consent Screen](https://console.cloud.google.com/apis/credentials/consent) and select "External" and click on "Create"  [🖼](https://i.imgur.com/yFPAJu5.png)
- Fulfill all required informations and click on "Save and Continue" 3 times (the "Scopes" and "Test users" parts do not require any inputs)  [🖼](https://i.imgur.com/OCNrO67.png)
- Go the the [Credentials](https://console.cloud.google.com/apis/credentials) tab, click on "Create Credentials" then "OAuth client ID", select "Web application" and name it as you want  [🖼](https://i.imgur.com/jbwRocu.png) & [🖼](https://i.imgur.com/EaUY2us.png)
- Under "Authorized JavaScript origins" click on "ADD URL" and add `https://developers.google.com`  [🖼](https://i.imgur.com/EaUY2us.png)
- Under "Authorized redirect URIs" click on "ADD URL" and add `https://developers.google.com/oauthplayground` then click on "Create"  [🖼](https://i.imgur.com/EaUY2us.png) & [🖼](https://i.imgur.com/9hbrRx3.png)
- Open a new tab and go to the [Developers Playground](https://developers.google.com/oauthplayground), click on the ⚙️ in the upper right corner and select "Use your own OAuth credentials"  [🖼](https://i.imgur.com/Un4QVLC.png) 
- Copy-paste your client ID and client secret from the previous step and press the close button.
- Scroll down the list on the left to "Drive API v3", select it, click on "[https://www.googleapis.com/auth/drive]" and "authorize API"  [🖼](https://i.imgur.com/OGR1CMu.png)
- Select your account and click on "Allow", then "Exchange authorization code for tokens", check "Auto-refresh the token before it expires." and copy your refresh token [🖼](https://i.imgur.com/ThI5f6L.png)
- Put the client secret, client id into the [SharedDriveCreator.js](https://github.com/MsGsuite/MsGsuite/blob/main/SharedDriveCreator.js) file. The refresh token goes to line 597.



## Deploy the website 
* Go to [cloudflare workers](https://workers.cloudflare.com/) and create and confirm your account
* [Set-up your custom subdomain](https://i.imgur.com/5g6MWG7.png), click on "Save" and "[Continue with free](https://i.imgur.com/pFR63in.png)"
* Then click on "Workers" and then "[Create a worker](https://i.imgur.com/8VExHx2.png)"<br />
* Select the code under "Script", delete it and [paste your code](https://i.imgur.com/q2P8Xt5.png)
* Click on "Save and deploy" and your team drive generator is ready to [go](https://td.msgsuite.workers.dev) !
<br />


## Follow us:
[<img align="left" alt="Website Logo" width="22px" src="https://raw.githubusercontent.com/iconic/open-iconic/master/svg/globe.svg" />][website]
[<img align="left" alt="Telegram Logo" width="22px" src="https://upload.wikimedia.org/wikipedia/commons/8/83/Telegram_2019_Logo.svg" />][telegram]
[<img align="left" alt="Telegram Logo" width="22px" src="https://www.searchpng.com/wp-content/uploads/2019/02/Message-Chat-Icon-PNG-Image-1024x941.png" />][telegramchat]
<br />
<!-- Optional if you have blogs -->
## Credits :
* [Parveen Bhadoo](https://github.com/ParveenBhadooOfficial/Create-Google-Shared-Drive)
* The admin of [lvyelanshan](https://t.me/lvyelanshan_share)
<!-- BLOG-POST-LIST:START -->
<!-- BLOG-POST-LIST:END -->
<!-- This section you create this variables that are used above -->
[website]: https://td.msgsuite.workers.dev
[telegram]: https://t.me/MsGsuite
[telegramchat]: https://t.me/MsGsuiteChat
