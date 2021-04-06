<h1 align="center">🔥 Google Shared Drives Creator 🔥<br></h1> 

<br />

<!-- > ## A simple script to automate the google Shared Drives creation. -->
[![Create-Google-Shared-Drive](https://i.imgur.com/GB6clwg.png)](https://github.com/MsGsuite/MsGsuite)

<br />

## New tutorial here : https://telegra.ph/Google-Shared-Drives-Creator-Website-03-31 (I will update the github one later)

## 📜 Features
- 🔭 Create Shared Drive from your google account without using it
- 🛠 100% customizable 
- 🖼 User-friendly UI
- ⚙️ Add multiple accounts
- 🔐 Protected thanks to H-captcha 
- 📊 Add statistics
- 🎲 Randomize choice

<br />

<!-- [![Indrajeet's github stats](https://github-readme-stats.vercel.app/api?username=msgsuite&count_private=true&include_all_commits=true&theme=radical)](https://t.me/msgsuite)-->

## 📚 How to add an account
#### ⚠️ Warnings
 - This is illegal to use hacked account! Add only the accounts you own.
 - You MUST have the right the create team drive into your account else it won't work.
 - I am not responsible of any google restrictions into your account or the subscription (the account may be suspended by google due to abuse)

#### 📙 Add one account
[Click me](https://imgur.com/a/0icXBtI)  to get all the pictures 🖼

Video tutorial : https://drive.google.com/file/d/1mn6Hq_tON6ek0u36bWtq0IhOEO6Hfw3v/view?usp=sharing
- First step : read the [⚠️ warnings](https://github.com/MsGsuite/MsGsuite#%EF%B8%8F-warnings)
- Then go to the [google cloud console](https://console.developers.google.com/apis/credentials), click on "CREATE PROJECT", name it as you want and click on "Create"  
- Select your project , go to the [google drive api](https://console.developers.google.com/apis/library/drive.googleapis.com?q=drive) page and enable it.  
- Go to the [OAuth Consent Screen](https://console.cloud.google.com/apis/credentials/consent) and select "External" and click on "Create"
- Fulfill all required informations and click on "Save and Continue" 3 times (the "Scopes" and "Test users" parts do not require any inputs). Click on publish and validate.
- Go the the [Credentials](https://console.cloud.google.com/apis/credentials) tab, click on "Create Credentials" then "OAuth client ID", select "Web application" and name it as you want 
- Under "Authorized JavaScript origins" click on "ADD URL" and add `https://developers.google.com` 
- Under "Authorized redirect URIs" click on "ADD URL" and add `https://developers.google.com/oauthplayground` then click on "Create" 
- Open a new tab and go to the [Developers Playground](https://developers.google.com/oauthplayground), click on the ⚙️ in the upper right corner and select "Use your own OAuth credentials" 
- Copy-paste your client ID and client secret from the previous step and press the close button.
- Scroll down the list on the left to "Drive API v3", select it, click on "[https://www.googleapis.com/auth/drive]" and "authorize API" 
- Select your account and click on "Allow", then "Exchange authorization code for tokens", check "Auto-refresh the token before it expires." and copy your refresh token 
- Put the client secret, client id into the [SharedDriveCreator.js](https://github.com/MsGsuite/MsGsuite/blob/main/SharedDriveCreator.js) file. The refresh token goes to line 605.


#### 🔒 HCaptcha
- Go to https://dashboard.hcaptcha.com/signup and fulfill all required details
- Copy your sitekey and paste it in line 17 & 392
- Go to the settings of your hCaptcha account, copy and paste your secret key to line 16


#### ➕ Add multiple accounts
- After following [this](https://github.com/MsGsuite/MsGsuite#-add-an-account) part, save your client_id and client_secret
- Log in to your new account, go the the [Developers Playground](https://developers.google.com/oauthplayground), click on the ⚙️ in the upper right corner and select "Use your own OAuth credentials" 
- Copy-paste your client ID and client secret created before and press the close button.
- Scroll down the list on the left to "Drive API v3", select it, click on "[https://www.googleapis.com/auth/drive]" and "authorize API" 
- Select your account and click on "Allow", then "Exchange authorization code for tokens", check "Auto-refresh the token before it expires." and copy your refresh token 
- Put the client secret, client id into the [SharedDriveCreator.js](https://github.com/MsGsuite/MsGsuite/blob/main/SharedDriveCreator.js) file. The refresh token goes to line 605.

Your Client ID and Client secret won't change. Only your refresh token will be different. You can use the same client id and client secret on multiple accounts.
<br />




## ⚙️ Deploy the website 
* Go to [cloudflare workers](https://workers.cloudflare.com/) and create and confirm your account
* [Set-up your custom subdomain](https://i.imgur.com/5g6MWG7.png), click on "Save" and "[Continue with free](https://i.imgur.com/pFR63in.png)"
* Then click on "Workers" and then "[Create a worker](https://i.imgur.com/8VExHx2.png)"<br />
* Select the code under "Script", delete it and [paste your code](https://i.imgur.com/q2P8Xt5.png)
* Click on "Save and deploy" and your team drive generator is ready to [go](https://td.msgsuite.workers.dev) !
<br />


## 📢 Follow us:
[<img align="left" alt="Website Logo" width="22px" src="https://raw.githubusercontent.com/iconic/open-iconic/master/svg/globe.svg" />][website]
[<img align="left" alt="Telegram Logo" width="22px" src="https://upload.wikimedia.org/wikipedia/commons/8/83/Telegram_2019_Logo.svg" />][telegram]
[<img align="left" alt="Telegram Logo" width="22px" src="https://www.searchpng.com/wp-content/uploads/2019/02/Message-Chat-Icon-PNG-Image-1024x941.png" />][telegramchat]
<br />
<!-- Optional if you have blogs -->
## ❤️ Credits :
* [Parveen Bhadoo](https://github.com/ParveenBhadooOfficial/Create-Google-Shared-Drive)
* The admin of [lvyelanshan](https://t.me/lvyelanshan_share)
* Albert Einstein for the hCaptcha verification
<!-- BLOG-POST-LIST:START -->
<!-- BLOG-POST-LIST:END -->
<!-- This section you create this variables that are used above -->
[website]: https://td.msgsuite.workers.dev
[telegram]: https://t.me/MsGsuite
[telegramchat]: https://t.me/MsGsuiteChat
