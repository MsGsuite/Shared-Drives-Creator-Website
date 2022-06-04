var authConfig = {
  version: "4.5",
  dailyLimit: true, // Whether to limit each mailbox to submit requests only once a day
  client_id: 'ClientID', // 400848704873-b7nfe5nft9menii7offt517t6uipn7bu.apps.googleusercontent.com
  client_secret: 'ClientSecret', // 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
  domain: "! ",
  black_list: ["email@gmail.com"]
  };
  var gd;
  
  authConfig.domainCount = 4; //Remplace 4 by the number of different drives you have 
  55
  var today;
  
  // Create an account at https://dashboard.hcaptcha.com/signup and fulfill all details
  var hCaptchaConfig = {
      secret: ' ',6LfM-EQgAAAAAGZwgKHg_hmLgtnOwuBJylo5vlMf
      sitekey: ' '6LfM-EQgAAAAAPIACTpgRZggvSuZapEAPmS-4m_8
  };
  
  
  var html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <title>TeamDrive Generator</title>
      <!-- Logo of the website -->
      <link rel="apple-touch-icon" sizes="180x180" href="https://i.imgur.com/9m7KEx1.png">
      <link rel="icon" type="image/png" sizes="32x32" href="https://i.imgur.com/IFen7sx.png">
      <link rel="icon" type="image/png" sizes="16x16" href="https://i.imgur.com/9GIrFwq.png">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <!-- Bootstrap -->
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
       <!-- Needed Libraries -->
      <script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Jacky-lei1/PicGO/css/classic-button.css" integrity="sha256-2O3BzKqYcXKGjs+J3+o9xNpfM0E2iKYC69I6oI73Yoc=" crossorigin="anonymous">
      <!-- Hcaptcha -->
      <script src="https://hcaptcha.com/1/api.js" async defer></script>
  
       
       <!----------------------------------------------->
       <!-- Configure the theme of the generator here -->
       <!----------------------------------------------->
      <style>
          /*--------------------------------------------------*/
          /*------------------General theme-------------------*/
          /*--------------------------------------------------*/
          *{
              margin: 0;
              padding: 0;
              box-sizing: border-box;
              font-family: 'Lato', 'Arial', sans-serif;
          }
          header{
              background-image: url("https://picsum.photos/2000/2000");
              background-size: cover;
              background-position: center;
              height: 100vh;
          }
          .hidden {
              display: none;
          }
          .btn{
              margin-bottom: 0;
          }
          
          /*--------------------Scrollbar---------------------*/
          /*size of the scrollbar*/
          ::-webkit-scrollbar {
              width: 10px;
          }
          ::-webkit-scrollbar-track {
              box-shadow: inset 0 0 0 pink;
              border-radius: 50px;
          }
          ::-webkit-scrollbar-thumb {
              background: #606060;
              border-radius: 15px;
          }
          ::-webkit-scrollbar-thumb:hover {
              background: #424242;
          }
          /*-----------------End scrollbar--------------------*/
  
  
  
  
          /*----------------------Spinner---------------------*/
          .center{
              left: 42%;
              position: relative;
              max-width: 45px
          }
  
          #nest5 {
            display: block;
            height: 45px;
            width: 45px;
            
            left: 50%;
            right: 50%;
            transform: translate(-50%, -50%);
            border: 3px solid transparent;
            border-top-color: #4285F4;
            border-radius: 50%;
            left: 50%;
            right: 50%;
            margin-bottom: 25px;
            margin-top: 25px;
            transform: translate(-50%, -50%);
            -webkit-animation: spin11 2s linear infinite;
                    animation: spin11 2s linear infinite;
          }
  
          #nest5:before {
            content: "";
            position: absolute;
            top: 7px;
            right: 7px;
            bottom: 7px;
            left: 7px;
            border: 3px solid transparent;
            border-radius: 50%;
            border-top-color: #DB4437;
            -webkit-animation: spin11 3s linear infinite;
                    animation: spin11 3s linear infinite;
          }
  
          #nest5:after {
            content: "";
            top: 15px;
            position: absolute;
            right: 15px;
            bottom: 15px;
            left: 15px;
            border: 3px solid transparent;
            border-radius: 50%;
            border-top-color: #F4B400;
            -webkit-animation: spin11 1.5s linear infinite;
                    animation: spin11 1.5s linear infinite;
          }
  
          @-webkit-keyframes spin11 {
            from {
              -webkit-transform: rotate(0deg);
                      transform: rotate(0deg);
            }
            to {
              -webkit-transform: rotate(359deg);
                      transform: rotate(359deg);
            }
          }
          @keyframes spin11 {
            from {
              -webkit-transform: rotate(0deg);
                      transform: rotate(0deg);
              -webkit-transform: rotate(0deg);
                      transform: rotate(0deg);
            }
            to {
              -webkit-transform: rotate(359deg);
                      transform: rotate(359deg);
              -webkit-transform: rotate(359deg);
                      transform: rotate(359deg);
            }
          }
          /*-----------------End of spinner-------------------*/
  
  
  
  
          /*--------------------- Pop-Up ---------------------*/
          
          .mainbox,
          .popupwindows{
              position: absolute;
              top: 50%;
              left: 50%;
              right: 50%;
              transform: translate(-50%, -50%);
              width: 80%;
              padding: 20px;
              text-align: center;
              border-radius: 20px;
              max-width: 725px;
          }
  
          .mainbox{
              background-color: rgba(34,34,34,0.5);
              z-index: 3;
              backdrop-filter: blur(20px);
          }
  
          .popupwindows{
              background-color: rgba(34,34,34,0.1);
              backdrop-filter: blur(20px);
          }
          
          .popupmaintitle{
              margin-top: 20px;
              margin-bottom: 20px;
          }
          
          /*This is the sub-titles of the popup*/
          .popuptitles{
              font-size: 115%;
              color: white;
              font-weight: bold; /* Add bold effect to the title */
              text-decoration: underline;
          }
  
          /*Set a space between the popup title and the paragraphs*/
          .warnmsg,
          .popuptitles{
              margin-top: 30px;
          }
  
          .warnmessage{
              color: #f4f4f4;
          }
  
          .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.6);
            backdrop-filter: blur(3px);
            z-index: 90;
          }
          /*------------------- End Pop-Up -------------------*/
  
          /*--------------------------------------------------*/
          /*-----------------End General Theme----------------*/
          /*--------------------------------------------------*/
  
  
  
  
          /*--------------------------------------------------*/
          /*------------------ Specific Theme-----------------*/
          /*--------------------------------------------------*/
          
          /*------------------- Main Title -------------------*/
          .titleyellow {
              margin-top: 20px;
              font-size: 160%;
              color: #fcda00;
              text-shadow: 2px 2px #494949;
              margin-bottom: 70px;
          }
  
          /*---------------------- Form ----------------------*/
          .form-group{
              max-width: 400px;
              position: relative;
              text-align: left;
              left: 50%;
              right: 50%;
              transform: translate(-50%, -50%);
          }
          option {
              background-color: #353535;
          }
          input[type=text], select, textarea {
              background-color: rgba(34,34,34,0.6);
              border-radius: 30px;
              color: #a3a3a3;
          }
          input[type=email], select, textarea {
              background-color: rgba(34,34,34,0.6);
              border-radius: 30px;
              color: #a3a3a3;
              padding-left: 10px;
          }
          input[type=text]:focus {
              background-color: rgba(34,34,34,0.9);
              color: white;
          }
          input[type=email]:focus {
              background-color: rgba(34,34,34,0.9);
              color: white;
          }
  
          .dropdownlist{
              max-width: 400px;
          }
          .h-captcha{
              left: 50%;
              margin-top: 50px;
              margin-bottom: -60px;
              transform: translate(11%);
          }
          .btncreate {
              position: relative;
              margin-top: 35px;
              margin-bottom: 10px;
          }
          .form-control{
              margin-top: 3%;
              margin-bottom: 1%;
          }
          /*-------------------- End Form --------------------*/
  
  
  
  
          /*----------------- Telegram Links -----------------*/
          .btntlg {
              margin: 0;
              position: relative;
              margin-bottom: 35px;
          }
          /*--------------- End Telegram Links ---------------*/
  
  
  
  
          /*------------------- Status bar -------------------*/
          .status{
              margin-bottom: -10px;
              position: relative;
              background-color: rgba(0, 0, 0, 0.2);
              border-radius: 30px;
              max-width: 500px;
  
              left: 50%;
              transform: translate(-50%);
          }
          .statop{
              color: lawngreen;
          }
          .statnw{
              color: darkred;
          }
          .statfx{
              color: darkgoldenrod;
          }
          /*----------------- End Status bar -----------------*/
  
  
  
  
          /*------------------- PopUp Create -----------------*/
          .creatingtitle{
              margin-top: 2rem;
              color: #fff;
              font-size: 160%;
          }
          .green{
              color: lawngreen;
          }
          .drivecreated{
              color: #fff;
              font-size: 110%;
              margin-top: 25px;
              margin-bottom: 25px;
          }
          .linkdrivecreated{
              color: #71e002;
          }
          .linkdrivecreated:hover{
              color: #4c9107;
          }
          .aftercreation {
              padding-left: 4%;
              padding-right: 4%;
          }
          /*----------------- End PopUp Create ---------------*/
  jhg
  
  
          /*------------------- PopUp Error ------------------*/
          .popupwindows{
              z-index: 400; 
              background-color: rgba(34,34,34,0.96);
          }
  
          .warn{
              color: cyan;
          }
  
          .closepopup{
              text-align: center;
              font-size: 100%;
              cursor: pointer;
              color: white;
          }
          .btn-lg.round {
              border-radius: 24px;
          }
          .errorsub{
                margin-left: 10px;
                margin-right: 10px;
          }
          /*----------------- End PopUp Error ----------------*/
  
  
  
  
          /*------------------- Pop-Up Info ------------------*/
          .helpbtn{
              font-weight: bold;
              z-index: 399;
              font-size: 110%;
              color: #8f9392;
              
              margin-bottom: -10px;
              position: relative;
              background-color: rgba(0, 0, 0, 0.5);
              border-radius: 30px;
              max-width: 20px;
  
              left: 100%;
              transform: translate(-100%);
          }
          .helpbtn:hover{
              color: #3f3f3f;
              background-color: #191c1b ;
              cursor: help;
          }
  
          /*Sow the modal in the top of the windows*/
          .infopopup{
              z-index: 999;
          }
  
          /* Links */
          .info{
              color: #fcda00;
          }
          .info:hover{
              color: #db8c04;
          }
          .donate{
              margin-top: 20px;
              margin-bottom: -3px;
              color: #8f9392;
              text-shadow: 1px 1px #3f3f3f;
              font-size: 85%;
          }
          .version{
              color: #8f9392;
              margin-bottom: -10px;
          }
          /*----------------- End Pop-Up Info ----------------*/
  
  
  
  
          /*------------------ Pop-Up Error ------------------*/
          .close-modal {
              position: absolute;
              top: 1%;
              right: 2%;
              font-size: 25px;
              color: rgba(255, 255, 255, 0.4);
              cursor: pointer;
              border: none;
              background: none;
          }
          .close-modal:hover,
          .copyerror:hover{
              color: rgba(255, 255, 255, 0.8);
          }
          .errortitle{
              margin-top: 2rem;
              color: #fff;
          }
          .supportbtn{
              margin-bottom: 2rem;
          }
          .copyerror{
              position: absolute;
              border: none;
              background: rgba(32, 32, 32, 0.85);
              color: rgba(255, 255, 255, 0.4); 
              bottom:20px;
              right:32px;
          }
          .errortb{
              border-radius: 7px; 
              margin-bottom: 10px; 
              margin-top: 20px; color:#fff; 
              resize: none;
              outline: none;
              padding-top: 2px;
              width: 100%;
          }
          .textareaerr{
              display:inline-block;
              position:relative;
              padding-left: 5%;
              padding-right: 5%;
              width: 90%;
              max-width: 500px;
          }
  
  
  
  
  
  
  
  
          .modalErr,
          .modalCreate {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 90%;
              max-width: 500px;
  
              text-align: center;
              background-color: rgba(32, 32, 32, 0.85);
              color: rgb(184, 180, 180);
              border-radius: 10px;
              box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.3);
              z-index: 100;
              backdrop-filter: blur(3px);
          }
  
          .modalCreate{
              z-index: 95;
          }
          /*---------------- End Pop-Up Error ----------------*/
  
  
  
  
          /*--------------------Responsive--------------------*/
  
          @media (max-width: 750px ) {
              .mainbox,
              .popupwindows{
                  width: 97%;
                  top: 50%;
                  left: 50%;
                  right: 50%;
              }
              .titleyellow{
                  font-size: 130%;
              }
              .dropdownlist{
                  width: 99%;
              }
          }
  
          @media (max-width: 760px) {
              .h-captcha{
                  margin-top: 50px;
                  margin-bottom: -60px;
              }
              .modalErr{
                  width: 90%;
              }
          }
          /*-----------------End of responsive----------------*/
  
          /*--------------------------------------------------*/
          /*---------------- End Specific Theme---------------*/
          /*--------------------------------------------------*/
  
  
  
  
  
  
  
          
  
  
  
  
  
  
  
  
  
  
  
      </style>1//1//04euqsSXKkF_YCgYIARAAGAQSNwF-L9IrBlzowEnThaZ3z-cxqh3GL6UL_2Bc3rTRPabdceSwTedA0abh52fNaEvv1TpTO0ewq9k
  </head>
  
  
  <body>
  
  
  <header>
      <!-- Warning modal-->
      <div class="popupwindows warnpopup">
          <h1 class="popupmaintitle warn">Before using</h1>
          <p class="warnmessage">
              <br>This website is a free generator of <a class="warn" href="https://support.google.com/a/users/answer/9310156" target="_blank">shared drives</a>. <br>
              But free doesn't mean that you can abuse!<br>
  
              <br></p>
          <h3 class="popuptitles">What is considered as abuse?</h3>
          <p class="warnmessage">
              - Creating <a class="warn" href="https://t.me/msgsuitechat/3011" target="_blank">tens of empty shared drives</a> <br>
              - Storing Tb of data that you will never use<br>
              - Storing illegal stuff or porn
          </p>
          <h3 class="popuptitles">What are the possible consequences due to abuse?</h3>
          <p class="warnmessage">
              - Google will put restrictions as <a class="warn" href="https://t.me/msgsuite/10" target="_blank">they will do on EDU</a><br>
              - University and organizations can delete all team drives<br>
              - University and organizations will cancelled their subscription (worst case scenario)<br><br>
          </p>
          <p class="warnmessage warnmsg">
              Abusing this free service will lead to more google restrictions.
          </p>
          <div class="btncreate">
              <button type="submit" class="btn btn-outline-info btn-sm btn-lg round closepopup">I accept the terms</button>
          </div>
  
      </div>
  
      <!-- Help Modal -->
      <div class="popupwindows infopopup hidden">
          <h1 class="popupmaintitle" style="color: #fcda00;">Help & About</h1>
  
          <h3 class="popuptitles">Common questions</h3>
          <p class="warnmessage">
              <a style="font-weight: bold">Q: What is a shared drive?</a><br>
              A: See <a class="info" href="https://support.google.com/a/users/answer/9310156" target="_blank">this Google Support post</a> learn more about Shared Drives<br>
  
          </p>
          <p class="warnmessage">
              <a style="font-weight: bold">Q: How much data can I put on a shared drive?</a><br>
              A: Just like my drive, the shared drives have limits too. Read <a class="info" href="https://support.google.com/a/answer/7338880" target="_blank">this article</a> to learn <br>more about these restrictions.<br>
          </p>
          <p class="warnmessage">
              <a style="font-weight: bold">Q: How long will last my shared drive?</a><br>
              A: Theoretically, a shared drive is for life. BUT if you store illegal things, porn, or abuse<br> the free storage, your shared drive can be deleted either by Google or by the subscription owner.
          </p>
  
          <h3 class="popuptitles">About this website</h3>
          <p class="warnmessage">
              This website has been created in February 2021 by the MsGsuite Admin.<br>
              Three months after the public launch of it, <a class="info" href="https://t.me/msgsuite/22" target="_blank">70k shared drive has been created</a>.<br>
              I made this free website because I believe that everyone should have free and abundant cloud storage.<br>
          </p>
          <p class="warnmessage warnmsg">
              If you have more questions, do not hesitate to ask them into our <a  class="info" href="https://t.me/msgsuitechat" target="_blank">chat</a>
          </p>
          <div class="btncreate">
              <button type="submit" class="btn btn-outline-warning btn-sm btn-lg round closeinfo">Go back to the generator</button>
          </div>
          <div>
              <p class="donate">Donate : 1EyzXHCLBspmVStE6DohBVWRQUhevwYZW1</p>
              <p class="version">v4.2 - MsGsuite 2021</p>
          </div>
      </div>
  
  
      <!-- Main windows (the generator) -->
      <div class="mainbox">
          <div class="info-form">
              <form id="teamDriveForm">
                  <!-- Button to show the help modal -->
                  <h1 class="status helpbtn">&#63;</h1>
                  <!-- Logo and title -->
                  <h1><img src="https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg" alt="Google Logo" style="width:50px;height:50px;"></h1>
                  <h5 class="titleyellow"><b>Create Google Shared Drives for FREE !</b></h5>
                  <!-- Input area for the shared drive name-->
                  <div class="form-group">
                      <input type="text" class="form-control" id="teamDriveName" placeholder="💬 Shared Drive name" />
                  </div>
                  <!-- Input area for the email address-->
                  <div class="form-group">
                      <input type="email" class="form-control" id="emailAddress" placeholder="✉️ Your Gmail adress" />
                  </div>
  
                  <!-- List of your different domains -->
                  <div class="form-group">
                      <select id="channel" style="height: 27px;"  type="text" list="chlist" class="dropdownlist">
                          <option value="0" selected>🎲 Random</option>
                          <option value="1">01 - Choice 1</option>
                          <option value="2">02 - Choice 2</option>
                          <option value="3">03 - Choice 3</option>
                          <option value="4" disabled>04 - Choice 4</option>
                      </select>
                  </div>
  
                  <!-- Hcaptcha verification -->
                  <div class="form-group">
                      <div class="h-captcha" data-sitekey="`+ hCaptchaConfig.sitekey +`" data-theme="dark"></div>
                  </div>
                  <!-- Function do customize the theme of the created shared drive (disabled by default) -->
                  <div id="customThemeSection" class="d-none">
                      <div id="teamDriveThemePreview"></div>
                      <div id="teamDriveThemeOptions">
                          <div class="form-check">
                              <input class="form-check-input" type="radio" name="teamDriveTheme" id="teamDriveThemeOptionRandom" value="random" checked/>
                          </div>
                      </div>
                  </div>
  
                  <!-- Button create -->
                  <div class="btncreate">
                      <button type="submit" class="btn btn-primary">Create</button>
                  </div>
                  <!-- Telegram Channel & Chat buttons -->
                  <div class="btntlg">
                      <a class="btn btn-danger btn-sm btn-lg round" href="https://www.t.me/msgsuite" target="_blank" role="button">Telegram Channel</a>
                      <a class="btn btn-secondary btn-sm btn-lg round" href="https://www.t.me/msgsuitechat" target="_blank" role="button">Telegram Chat </a>
                  </div>
  
                  <!-- Status bar. You have to change the values manually -->
                  <div class="status">
                      <p class="btn statop">Operational : 150</p>
                      <p class="btn statnw">Non Working : 0</p>
                      <p class="btn statfx">Testing : 0</p>
                  </div>
              </form>
          </div>
      </div>
  
  
  </head>
  
  <!-- Modal Create Shared Drive -->
  <div class="modalCreate hidden">
      <button class="close-modal closecreatesd">&times;</button>
      <h5 class="creatingtitle">Creating your shared drive</h5>
      <div class="beforecreation">
          <p>This can take some time. Please wait.</p>
          <div class="center"><div id="nest5"></div></div>
      </div>
      <div class="aftercreation hidden">
          <p class="drivecreated">You can find your shared drive here : <a class="linkdrivecreated" href="https://drive.google.com/drive/shared-drives" target="_blank">My Shared Drives</a></p>
          <p>Thanks for using our services! To be informed about the last updates and news, follow us on Telegram.</p>
          <a class="btn btn-secondary btn-sm btn-lg round supportbtn" href="https://www.t.me/msgsuite" target="_blank" role="button">Telegram Channel</a>
      </div>
  </div>
  
  <!-- Modal Error -->
  <div class="modalErr hidden">
      <button class="close-modal closeerror">&times;</button>
      <h2 class="errortitle">💀 We've got an error!</h2>
      <div class="textareaerr">
          <textarea id="areaerror" name="myTextBox" class="errortb" readonly>The error message will be displayed here instead of this dummy text</textarea>
          <button onclick="copyMyText()" class="copyerror bi bi-files"></button>
      </div>
      <p class="errorsub">Most of time, trying again solve the problem. If you don't understand the error message, please send it to the support chat. They will help you solve it.</p>    
      <a class="btn btn-secondary btn-sm btn-lg round supportbtn" href="https://www.t.me/msgsuitechat" target="_blank" role="button">Telegram Support Chat</a>
  </div>
  
  
  <div class="overlay hidden"></div>
  
  </body>
  
  <script>
  
      'use strict'
      
      const modal = document.querySelector('.modalErr');
      const modalCreate = document.querySelector('.modalCreate');
      const overlay = document.querySelector('.overlay');
      const btnClose = document.querySelector('.closeerror');
      const btnCloseCreate = document.querySelector('.closecreatesd');
      const popupwindows = document.querySelector('.warnpopup'); // Warining (terms & conditions) PopUp
      const closewarnings = document.querySelector('.closepopup'); // Close the warnings
      const helpbtn = document.querySelector('.helpbtn'); // Help Buton
      const closehelpbtn = document.querySelector('.closeinfo');
      const infopupup = document.querySelector('.infopopup');
      const creatingtitle = document.querySelector('.creatingtitle');
      
      const closewanings = function(){
          popupwindows.classList.add('hidden');
      }
           
      const openinfo = function(){
          infopupup.classList.remove('hidden');
      }
  
      const closeinfo = function(){
          infopupup.classList.add('hidden');
      }
  
      const closeModal = function(){
          modal.classList.add('hidden');
          overlay.classList.add('hidden');
          modalCreate.classList.add('hidden');
      }
      const closeModalCreate = function(){
          modalCreate.classList.add('hidden');
          overlay.classList.add('hidden');
      }
  
      closewarnings.addEventListener('click', closewanings)
      btnClose.addEventListener('click', closeModal)
      btnCloseCreate.addEventListener('click', closeModalCreate)
  
      helpbtn.addEventListener('click', openinfo)
      closehelpbtn.addEventListener('click', closeinfo)
  
      function copyMyText() {
              //select the element with the id "copyMe", must be a text box
          var textToCopy = document.getElementById("areaerror");
              //select the text in the text box
          textToCopy.select();
              //copy the text to the clipboard
          document.execCommand("copy");
      }
  </script>
  <script>
      var teamDriveThemes;
      $("input[id=customTheme]").change(function() {
          if ($(this).is(":checked")) {
              $("#customThemeSection").removeClass("d-none");
          } else {
              $("#customThemeSection").addClass("d-none");
              $("input[name=teamDriveTheme]")[0].click();
          }
      });
      $.get("/teamDriveThemes", function(json) {
          teamDriveThemes = json.teamDriveThemes;
          $.each(json.teamDriveThemes, function(i, item) {
              $("#teamDriveThemeOptions").append(\`
          <div class="form-check">
             <input
              class="form-check-input"
              type="radio"
              name="teamDriveTheme"
              id="teamDriveThemeOption-\${item.id}"
              value="\${item.id}"
            />
            <label class="form-check-label" for="teamDriveThemeOption-\${item.id}">
             \${item.id}
            </label>
          </div>
          \`);
        });
        $("input[name=teamDriveTheme]").change(function() {
          var themeId = this.value;
          if (themeId === "random") {
            $("#teamDriveThemePreview").html("");
          } else {
            var theme = teamDriveThemes.find(function(t) {
              return t.id == themeId;
            });
            $("#teamDriveThemePreview").html(
              \`
            <div class="card" style="background-color: \${theme.colorRgb}">
              <img src="\${theme.backgroundImageLink}" class="card-img-top" alt="\${theme.id}" />
              <div class="card-body">
                <h5 class="card-text" style="color: white">
                  \${theme.id}
                </h5>
              </div>
            </div>
        \`
            );
          }
        });
        $("#teamDriveForm").on("submit", function(event) {
          event.preventDefault();
          document.querySelector('.modalCreate').classList.remove('hidden');
          document.querySelector('.overlay').classList.remove('hidden');
          document.querySelector('.creatingtitle').classList.remove('green');
          document.querySelector('.beforecreation').classList.remove('hidden');
          document.querySelector('.aftercreation').classList.add('hidden');
          creatingtitle.textContent = 'Creating your shared drive';
          $.ajax({
            type: "POST",
            url: "/drive",
            data: JSON.stringify({
              teamDriveName: $("input[id=teamDriveName]").val(),
              teamDriveThemeId: $("input[name=teamDriveTheme]:checked").val(),
              emailAddress: $("input[id=emailAddress]").val(),
        channel: $("select[id=channel]").val(),
        recaptcha: hcaptcha.getResponse()
            }),
            success: function(data) {
              creatingtitle.textContent = '✅ Your shared drive has been created';
              document.querySelector('.creatingtitle').classList.add('green');
              document.querySelector('.beforecreation').classList.add('hidden');
              document.querySelector('.aftercreation').classList.remove('hidden');
            },
            error: function(request, status, error) {
              const errmsg = request.responseText;
              document.getElementById('areaerror').value = errmsg;
              document.querySelector('.modalErr').classList.remove('hidden');
              document.querySelector('.overlay').classList.remove('hidden');
            },
            contentType: "application/json"
          });
        });
      });
  </script>
  </html>
  `;
  
  addEventListener("fetch", (event) => {
    event.respondWith(handleRequest(event.request));
  });
  
  var dailyLimit = [];
  
  /**
   * Fetch and log a request
   * @param {Request} request
   */
  async function handleRequest(request) {
    if (authConfig.dailyLimit) {
      if (!today) today = new Date().getDate();
  
      // Remove email rate limit every day
      if (new Date().getDate() != today) {
        today = new Date().getDate();
        dailyLimit.length = 0;
      }
    }
  
    if (gd == undefined) {
      gd = new googleDrive(authConfig);
    }
    let url = new URL(request.url);
    let path = url.pathname;
  
    switch (path) {
      case "/teamDriveThemes":
        let teamDriveThemes = await gd.getTeamDriveThemes();
        return new Response(JSON.stringify(teamDriveThemes), {
          status: 200,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        });
      case "/drive":
          if (request.method === "POST") {
              const requestBody = await request.json();
              //验证码
              if (requestBody.recaptcha.length == 0) {
                  return new Response("You have to complete the captcha to get a shared drive.", {
                      status: 400,
                  });
              }else{
                  //hCaptcha Verification
                  let hc = new hCaptcha(hCaptchaConfig.secret, hCaptchaConfig.sitekey);
  
                  let verificationResponse = await hc.verify(requestBody.recaptcha);
                  if(!verificationResponse.success){
                    return new Response("Captcha verification: " + verificationResponse["error-codes"], {
                      status: 400,
                    });
                  }
              }
  
  
              //团盘多选
          if (requestBody.channel ==0 ){
              requestBody.channel = getRandomInteger(1,authConfig.domainCount);
          }
          //The client secret and the refresh token used here are the one set in the beginning of the file
          if (requestBody.channel == 1) {
            authConfig.refresh_token = "REFRESH TOKEN";
            authConfig.domain = "NAME OF THE DOMAIN (it can be empty)";
          }
          if (requestBody.channel == 2) {
              authConfig.refresh_token = "REFRESH TOKEN";
              authConfig.domain = "NAME OF THE DOMAIN (it can be empty)";
          }
          if (requestBody.channel == 3) {
              authConfig.refresh_token = "REFRESH TOKEN";
              authConfig.domain = "NAME OF THE DOMAIN (it can be empty)";
          }
          // If you want to use a custom client id & secret :
          if (requestBody.channel == 4) {
              authConfig.client_id = "CLIENT ID";
              authConfig.client_secret = "CLIENT SECRET";
              authConfig.refresh_token = "REFRESH TOKEN";
              authConfig.domain = "NAME OF THE DOMAIN (it can be empty)";
          }
          if (authConfig.dailyLimit) {
            if (dailyLimit.includes(requestBody.emailAddress)) {
              return new Response(
                "⏳ You have reached the maximum number of creations allowed today!",
                {
                  status: 429,
                }
              );
            } else {
              dailyLimit.push(requestBody.emailAddress);
            }
          }
  
          if (authConfig.black_list.includes(requestBody.emailAddress)) {
            return new Response("Please fill in all the fields", {
              status: 429,
            });
          }
  
          try {
            let result = await gd.createAndShareTeamDrive(requestBody);
            return new Response(
              "✅ Your Shared Drive has successfully been created !",
              {
                status: 200,
              }
            );
          } catch (err) {
            return new Response("Domain #" + requestBody.channel + " - " + err.toString(), {
              status: 500,
            });
          }
        } else if (request.method === "OPTIONS") {
          return new Response("", {
            status: 200,
            headers: {
              "Access-Control-Allow-Origin": "*",
            },
          });
        } else {
          return new Response("Bad Request", {
            status: 400,
          });
        }
      default:
        return new Response(html, {
          status: 200,
          headers: {
            "Content-Type": "text/html; charset=utf-8",
            "Access-Control-Allow-Origin": "*",
          },
        });
    }
  }
  // https://stackoverflow.com/a/2117523
  function uuidv4() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      // tslint:disable-next-line:one-variable-per-declaration
      const r = (Math.random() * 16) | 0,
        // tslint:disable-next-line:triple-equals
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
  
  class googleDrive {
    constructor(authConfig) {
      this.authConfig = authConfig;
      this.accessToken();
    }
  
    async getTeamDriveThemes() {
      let url = "https://www.googleapis.com/drive/v3/about";
      let requestOption = await this.requestOption();
      let params = { fields: "teamDriveThemes" };
      url += "?" + this.enQuery(params);
      let response = await fetch(url, requestOption);
      return await response.json();
    }
  
    async createAndShareTeamDrive(requestBody) {
      // Create team drive
      console.log("Creating TeamDrive");
      let url = "https://www.googleapis.com/drive/v3/drives";
      let requestOption = await this.requestOption(
        { "Content-Type": "application/json" },
        "POST"
      );
      let params = { requestId: uuidv4() };
      url += "?" + this.enQuery(params);
      let post_data = {
        name: requestBody.teamDriveName,
      };
      if (
        requestBody.teamDriveThemeId &&
        requestBody.teamDriveThemeId !== "random"
      ) {
        post_data.themeId = requestBody.teamDriveThemeId;
      }
      requestOption.body = JSON.stringify(post_data);
      let response = await fetch(url, requestOption);
      let result = await response.json();
      const teamDriveId = result.id;
      console.log("Created TeamDrive ID", teamDriveId);
  
      // Get created drive user permission ID
      console.log(`Getting creator permission ID`);
      url = `https://www.googleapis.com/drive/v3/files/${teamDriveId}/permissions`;
      params = { supportsAllDrives: true };
      params.fields = "permissions(id,emailAddress)";
      url += "?" + this.enQuery(params);
      requestOption = await this.requestOption();
      response = await fetch(url, requestOption);
      result = await response.json();
      const currentUserPermissionID = result.permissions[0].id;
      console.log(currentUserPermissionID);
  
      // Share team drive with email address
      console.log(`Sharing the team drive to ${requestBody.emailAddress}`);
      url = `https://www.googleapis.com/drive/v3/files/${teamDriveId}/permissions`;
      params = { supportsAllDrives: true };
      url += "?" + this.enQuery(params);
      requestOption = await this.requestOption(
        { "Content-Type": "application/json" },
        "POST"
      );
      post_data = {
        role: "organizer",
        type: "user",
        emailAddress: requestBody.emailAddress,
      };
      requestOption.body = JSON.stringify(post_data);
      response = await fetch(url, requestOption);
      await response.json();
  
      // Delete creator from the team drive
      console.log("Deleting creator from the team drive");
      url = `https://www.googleapis.com/drive/v3/files/${teamDriveId}/permissions/${currentUserPermissionID}`;
      params = { supportsAllDrives: true };
      url += "?" + this.enQuery(params);
      requestOption = await this.requestOption({}, "DELETE");
      response = await fetch(url, requestOption);
      return await response.text();
    }
  
    async accessToken() {
      console.log("accessToken");
      if (
        this.authConfig.expires == undefined ||
        this.authConfig.expires < Date.now()
      ) {
        const obj = await this.fetchAccessToken();
        if (obj.access_token != undefined) {
          this.authConfig.accessToken = obj.access_token;
          this.authConfig.expires = Date.now() + 3500 * 1000;
        }
      }
      return this.authConfig.accessToken;
    }
  
    async fetchAccessToken() {
      console.log("fetchAccessToken");
      const url = "https://www.googleapis.com/oauth2/v4/token";
      const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
      };
      const post_data = {
        client_id: this.authConfig.client_id,
        client_secret: this.authConfig.client_secret,
        refresh_token: this.authConfig.refresh_token,
        grant_type: "refresh_token",
      };
  
      let requestOption = {
        method: "POST",
        headers: headers,
        body: this.enQuery(post_data),
      };
  
      const response = await fetch(url, requestOption);
      return await response.json();
    }
  
    async requestOption(headers = {}, method = "GET") {
      const accessToken = await this.accessToken();
      headers["authorization"] = "Bearer " + accessToken;
      return { method: method, headers: headers };
    }
  
    enQuery(data) {
      const ret = [];
      for (let d in data) {
        ret.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
      }
      return ret.join("&");
    }
  }
  
  //hCaptcha Verification Class
  class hCaptcha{
      constructor(secret, sitekey) {
          this.secret = secret;
          this.sitekey = sitekey;
      }
  
      //Verification function, the result.success flag would be "true" on successful verification
      async verify(response_token) {
  
          console.log("Verifying hCaptcha");
          let url = "https://hcaptcha.com/siteverify";
  
          let post_data = {
              secret: this.secret,
              response: response_token,
              sitekey: this.sitekey
          };
  
          console.log(this.enQuery(post_data));
          let response = await fetch(url, {
              method: 'POST',
              body: this.enQuery(post_data),
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
          });
  
          
          let result = await response.json();        
          return result; //check for result.success for status of verification
      }
  
      //Reusing the googleDrive Object to QueryString Method
      enQuery(data) {
          const ret = [];
          for (let d in data) {
              ret.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
          }
          return ret.join("&");
      }
  }
  
  function getRandomInteger(min, max){
      let rndchoice = Math.floor(Math.random() * Math.floor(max)) + (min-1);
      console.log(rndchoice);
      return rndchoice;
  }
  
