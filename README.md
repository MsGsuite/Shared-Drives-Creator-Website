<h1 align="center">🔥 Google Shared Drives Creator 🔥<br></h1> 

<br />

<!-- > ## A simple script to automate the google Shared Drives creation. -->
[![Create-Google-Shared-Drive](https://i.imgur.com/GB6clwg.png)](https://github.com/MsGsuite/MsGsuite)

<br />


## 📜 Features
- 🔭 Create Shared Drive with your google account 
- 🛠 100% customizable
- 🖼 User-friendly UI
- ⚙️ Add multiple accounts
- 📊 Add statistics
- 🎲 Randomize choice
- ⚠ Warning pop-up
- 🔐 Protected thanks to H-captcha

<br />

<!-- [![Indrajeet's github stats](https://github-readme-stats.vercel.app/api?username=msgsuite&count_private=true&include_all_commits=true&theme=radical)](https://t.me/msgsuite)-->

## 📚 How to add an account
#### ⚠️ Warnings
 - This is illegal to use hacked/cracked accounts! Add only the accounts you own.
 - You MUST have the right the create team drive into your account else it won't work.
 - I am not responsible of any google restrictions into your account or the subscription (the account may be suspended by google due to abuse)

#### 📙 Add one account
[🎬 Click me](https://drive.google.com/file/d/1mn6Hq_tON6ek0u36bWtq0IhOEO6Hfw3v)  to see the video tutorial

<br/>

- First step : read the [⚠️ warnings](https://github.com/MsGsuite/MsGsuite#%EF%B8%8F-warnings)
> ⏣ The steps bellow does not require any gsuite/workspace accounts. They can be done with your own account.


- Go to the [google cloud console](https://console.developers.google.com/apis/credentials) and create a project  
- Then, enable the [google drive api](https://console.developers.google.com/apis/library/drive.googleapis.com?q=drive)
- Go to the [OAuth Consent Screen](https://console.cloud.google.com/apis/credentials/consent) and select "External" and click on "Create"
- Fulfill all required informations (the one with a red *) and click on "Save and Continue" 3 times (the "Scopes" and "Test users" parts do not require any inputs) 
- Click on publish and validate (important)
- On the [Credentials](https://console.cloud.google.com/apis/credentials) tab, click on "Create Credentials" then "OAuth client ID", select "Web application"
- Under "Authorized JavaScript origins" click on "ADD URL" and add `https://developers.google.com` 
- Under "Authorized redirect URIs" click on "ADD URL" and add `https://developers.google.com/oauthplayground`
- Save and note down your Client ID and Secret
> ⏣ From now you need to be logged with your gsuite/workspace account (how can create team drives)
- Go to the [Developers Playground](https://developers.google.com/oauthplayground), click on the ⚙️ in the upper right corner and select "Use your own OAuth credentials" 
- Copy-paste your client ID and client secret from the previous step and press the close button.
- Scroll down the list on the left to "Drive API v3", select it, click on "https://www.googleapis.com/auth/drive" and "authorize API"
- Select your gsuite/workspace account give permissions using your google account, then "Exchange authorization code for tokens", check "Auto-refresh the token before it expires." and note your refresh token.
- Open/download the [SharedDriveCreator.js](https://github.com/MsGsuite/MsGsuite/blob/main/SharedDriveCreator.js) file and put your :
    - Client ID at line 4
    - Client Secret at line 5
    - Refresh token at line 587
- Change the number at line 12 with the number of different drives you have (this number is useful for the random choice)
- Change the name of the choices of the dropdown list by the name of your domains or whatever you want at line 374



<br />

#### 🔒 HCaptcha
- Go to https://dashboard.hcaptcha.com/signup and fulfill all required details
- Copy your sitekey and paste it in line 17
- Go to the settings of your hCaptcha account, copy and paste your secret key to line 16

<br />

#### ➕ Add multiple accounts
If you want to add multiple accounts, it's possible!

- After following the [📙  Add one account](https://github.com/MsGsuite/MsGsuite#-add-an-account) part, log in to your new account, go the the [Developers Playground](https://developers.google.com/oauthplayground), click on the ⚙️ in the upper right corner and select "Use your own OAuth credentials"
- Copy-paste your client ID and client secret created before and press the close button.
- Scroll down the list on the left to "Drive API v3", select it, click on "https://www.googleapis.com/auth/drive" and "authorize API"
- Select your gsuite/workspace account give permissions using your google account, then "Exchange authorization code for tokens", check "Auto-refresh the token before it expires." and note your refresh token.
- Open/download the SharedDriveCreator.js  file and put your :
    - Refresh token at line 587
    - Change the number at line 12 with the number of different drives you have (this number is useful for the random choice)
    - Change the name of the choices of the dropdown list by the name of your domains or whatever you want at line 375 and following

Your Client ID and Client secret won't change. Only your refresh token will be different. You can use the same client id and client secret on multiple accounts.
<br />
<br />




## ⚙️ Deploy the website 
* Go to [cloudflare workers](https://workers.cloudflare.com/) and create and confirm your account
* [Set-up your custom subdomain](https://i.imgur.com/5g6MWG7.png), click on "Save" and "[Continue with free](https://i.imgur.com/pFR63in.png)"
* Then click on "Workers" and then "[Create a worker](https://i.imgur.com/8VExHx2.png)"<br />
* Select the code under "Script", delete it and [paste your code](https://i.imgur.com/q2P8Xt5.png)
* Click on "Save and deploy" and your team drive generator is ready to [go](https://td.msgsuite.workers.dev) !
<br />


## 📢 Follow us:
- Team drive generator : https://td.msgsuite.workers.dev/
- Telegram channel : https://t.me/MsGsuite
- Telegram chat : https://t.me/MsGsuiteChat

<br />

## ❤️ Credits :
* [Parveen Bhadoo](https://gitlab.com/ParveenBhadooOfficial/create-google-shared-drive)
* The admin of [lvyelanshan](https://t.me/lvyelanshan_share)
* Albert Einstein for the hCaptcha verification + making the code cleaner

