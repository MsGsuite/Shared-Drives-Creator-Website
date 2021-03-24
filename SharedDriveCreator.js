var authConfig = {
    version: "2.0",
    dailyLimit: true, // Whether to limit each mailbox to submit requests only once a day
    dailyLimitCount: 1, //Number of TDs an Email can create per Day
    enable_black_list: true, //Option to Enable the Blacklist of Emails to block abuse of the service
    black_list_management_password: "SOMEPASSWORD123", //Password to manage blacklist via /admin/blacklist route
    email_sha_salt: "A_RANDOM_STRING", //Using salt while generating the digests prevents revealing of emails if there is a data leak 
    client_id: '', // Google Client ID
    client_secret: '', // Google Client Secret
    refresh_token: '', // Refresh token
    domain: "! ", //College name to display
    domainCount: 4, //Replace 4 by the number of different drives you have
};

var gd;

// Create an account at https://dashboard.hcaptcha.com/signup and fulfill all details
var hCaptchaConfig = {  
    secret: '',
    sitekey: ''
};

//Moved the Domain Specific Configuration from the IF-Condition blocks in the code to an array of configurations
var domainConfigs = [
    {
        domain: "DOMAIN 1 NAME",
        client_id: "CLIENT ID", // Google Client ID
        client_secret: "CLIENT SECRET", // Google Client Secret
        refresh_token: "REFRESH TOKEN", // Refresh token
    },

    {
        domain: "DOMAIN 2 NAME",
        client_id: "CLIENT ID",
        client_secret: "CLIENT SECRET",
        refresh_token: "REFRESH TOKEN",
    },

    {
        domain: "DOMAIN 3 NAME",
        client_id: "CLIENT ID",
        client_secret: "CLIENT SECRET",
        refresh_token: "REFRESH TOKEN",
    },

    {
        domain: "DOMAIN 4 NAME",
        client_id: "CLIENT ID",
        client_secret: "CLIENT SECRET",
        refresh_token: "REFRESH TOKEN",
    },
];


var html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <title>TeamDrive Generator</title>
    <meta name="robots" content="noindex">
    <link rel="apple-touch-icon" sizes="180x180" href="https://i.imgur.com/9m7KEx1.png">
    <link rel="icon" type="image/png" sizes="32x32" href="https://i.imgur.com/IFen7sx.png">
    <link rel="icon" type="image/png" sizes="16x16" href="https://i.imgur.com/9GIrFwq.png">
    <link rel="mask-icon" href="https://cdn.jsdelivr.net/gh/Jacky-lei1/PicGO/images/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Jacky-lei1/PicGO/css/classic-button.css" integrity="sha256-2O3BzKqYcXKGjs+J3+o9xNpfM0E2iKYC69I6oI73Yoc=" crossorigin="anonymous">
    <script src="https://hcaptcha.com/1/api.js" async defer></script>

    <style>


        /*----------------------------------------------------
        --------------------General theme---------------------
        ----------------------------------------------------*/

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
        /*End General Theme*/
        /*----------------------------------------------------
        ----------------------------------------------------*/



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
            max-width: 800px;
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

        /*-------------------Main Title-----------------------*/
        .titleyellow {
            margin-top: 20px;
            font-size: 160%;
            color: #fcda00;
            text-shadow: 2px 2px #494949;
            margin-bottom: 70px;
        }



        /*----------------------------------------------------
        ----------------------Responsive----------------------
        ----------------------------------------------------*/
        /*Responsive Part of the website*/
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
        }
        /*end of responsive*/
        /*----------------------------------------------------
        ----------------------------------------------------*/
        .form-group{
            max-width: 400px;
            position: relative;
            text-align: left;
            left: 50%;
            right: 50%;
            transform: translate(-50%, -50%);
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

        /*if the text inside of the dropdown list is too long, the dropdown list will not exceed 400px*/
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
            margin-top: 10px;
            margin-bottom: 10px;
        }
        .btntlg {
            margin: 0;
            position: relative;
        }

        .donate{
            margin-top: 20px;
            color: #8f9392;
            text-shadow: 1px 1px #3f3f3f; /*I've added a little shadow in order to make the text more visible on bright backgrounds*/
        }
        .status{
            margin-bottom: -10px;
            position: relative;
            background-color: rgba(0, 0, 0, 0.2);
            border-radius: 30px;
            max-width: 500px;

            /*Align to the right*/
            /*left: 100%;*/
            /*transform: translate(-100%);*/

            /*Align in the center*/
            left: 50%;
            transform: translate(-50%);
        }
        .btn{
            margin-bottom: 0;
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

        option {
            background-color: #353535;
        }


        /*----------------------------------------------------
        ----------------------scrollbar-----------------------
        ----------------------------------------------------*/
        /*size of the scrollbar*/
        ::-webkit-scrollbar {
            width: 10px;
        }
        ::-webkit-scrollbar-track {
            box-shadow: inset 0 0 0 pink;
            border-radius: 50px;
        }
        ::-webkit-scrollbar-thumb {
            background: #424242;
            border-radius: 15px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #606060;
        }
        /*endscrollbar*/

        /*----------------------------------------------------
        ----------------------------------------------------*/





        /*----------------------------------------------------
        -------------------------Pop-Up-----------------------
        ----------------------------------------------------*/
        /*Set the theme of the popup*/
        .popupwindows{
            z-index: 4; /* Put the pop-up windows at the top*/
            background-color: rgba(34,34,34,0.96); /*Set the background color of the popup and the opacity*/
        }

        /*Defines the style of the popup main title*/
        .popupmaintitle{
            margin-top: 20px;
            color: cyan; /* Change the text of the pop-up title to cyan*/
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
            margin-top: 50px;
        }

        /* The main message of the warinig popup*/
        .warnmessage{
            color: #f4f4f4; /* This is a really clear grey that looks like white*/

        }

        /*Button I accept the terms*/
        .closepopup{
            text-align: center;
            font-size: 100%;
            cursor: pointer;
            color: white;
        }

        /*make the "i accept the terms" button rounded*/
        .btn-lg.round {
            border-radius: 24px;
        }
        /*End Button accept the terms*/
        /*----------------------------------------------------
        ----------------------------------------------------*/

    </style>

</head>


<body>
<header>
    <div class="popupwindows">
        <h1 class="popupmaintitle">Before using</h1>
        <p class="warnmessage">
            This website is a free generator of <a style="color: #9efaff" href="https://support.google.com/a/users/answer/9310156" target="_blank">shared drives</a>. <br>
            But free doesn't mean that you can abuse!

            <br></p>
        <h3 class="popuptitles">What is considered as abuse ?</h3>
        <p class="warnmessage">
            - Creating <a style="color: #9efaff" href="https://t.me/msgsuitechat/3011" target="_blank">tens of empty shared drives</a> <br>
            - Storing Tb of data that you will never use<br>
            - Storing illegal stuff or porn
        </p>
        <h3 class="popuptitles">What are the possible consequences due to abuse ?</h3>
        <p class="warnmessage">
            - Google will put restrictions like <a style="color: #9efaff" href="https://t.me/msgsuite/10" target="_blank">they will do on edu</a><br>
            - University and organisations can delete all team drives<br>
            - University and organisations will cancelled their subscription (worst case scenario)
        </p>
        <p class="warnmessage warnmsg">
            Abusing this free service will lead to google restrictions.
        </p>
        <div class="btncreate">
            <button type="submit" class="btn btn-outline-light btn-sm btn-lg round closepopup">I accept the terms</button>
        </div>


        <script>
            let modalBtns = [...document.querySelectorAll(".button")];
            modalBtns.forEach(function(btn) {
                btn.onclick = function() {
                    let popupwindows = btn.getAttribute('data-popupwindows');
                    document.getElementById(popupwindows)
                        .style.display = "block";
                }
            });
            let closepopupBtns = [...document.querySelectorAll(".closepopup")];
            closepopupBtns.forEach(function(btn) {
                btn.onclick = function() {
                    let popupwindows = btn.closest('.popupwindows');
                    popupwindows.style.display = "none";
                }
            });
            window.onclick = function(event) {
                if(event.target.className === "popupwindows") {
                    event.target.style.display = "none";
                }
            }
        </script>
    </div>

    <div class="mainbox">
        <div class="info-form">
            <form id="teamDriveForm">
                <h1><img src="https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg" alt="Google Logo" style="width:50px;height:50px;"></h1>
                <h5 class="titleyellow"><b>Create Google Shared Drives for FREE !</b></h5>

                <div class="form-group">
                    <label for="teamDriveName" class="sr-only">
                        💬 Share Drive Name (can be changed later)
                    </label>
                    <input type="text" class="form-control" id="teamDriveName" placeholder="💬 Shared Drive name" />
                </div>
                <div class="form-group">
                    <label for="emailAddress" class="sr-only">
                        ✉️ Your GMail Address
                    </label>
                    <input type="email" class="form-control" id="emailAddress" placeholder="✉️ Your Gmail adress" />
                </div>
                <div class="form-group">
                    <select id="channel" style="height: 27px;"  type="text" list="chlist" class="dropdownlist">
                        <option value="0" selected>Random</option>
                        <!--Name it as you want-->
                        <option value="1">01 - Choice 1</option>
                        <option value="2">02 - Choice 2</option>
                        <option value="3">03 - Choice 3</option>
                        <option value="4">04 - Choice 4e</option>
                    </select>
                </div>
                <div class="form-group">
                    <div class="h-captcha" data-sitekey="`+ hCaptchaConfig.sitekey +`" data-theme="dark"></div>
                </div>
                <div class="form-check" style="visibility:hidden;">
                    <input type="checkbox" class="form-check-input" id="customTheme" value="" />
                    <label class="form-check-label" for="customTheme">
                    </label>
                </div>

                <div id="customThemeSection" class="d-none">
                    <div id="teamDriveThemePreview"></div>
                    <div id="teamDriveThemeOptions">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="teamDriveTheme" id="teamDriveThemeOptionRandom" value="random" checked />
                            <label class="form-check-label" for="teamDriveThemeOptionRandom">
                                Random
                            </label>
                        </div>
                    </div>
                </div>

                <div class="btncreate">
                    <button type="submit" class="btn btn-primary">Create</button>
                </div>
                <div class="btntlg">
                    <a class="btn btn-danger btn-sm btn-lg round" href="https://www.t.me/msgsuite" target="_blank" role="button">Telegram Channel</a>
                    <a class="btn btn-secondary btn-sm btn-lg round" href="https://www.t.me/msgsuitechat" target="_blank" role="button">Telegram Chat </a>
                </div>

                <div>
                    <p class="donate">Add the text you want</p>
                </div>
                <div class="status">
                    <p class="btn statop">Operational : 4</p>
                    <p class="btn statnw">Non Working : 0</p>
                    <p class="btn statfx">Testing : 0</p>
                </div>
            </form>
        </div>
    </div>
</header>



<div class="modal fade" id="loadMe" tabindex="-1" role="dialog" aria-labelledby="loadMeLabel">
    <div class="modal-dialog modal-sm" role="document">
        <div class="modal-content">
            <div class="modal-body text-center">
                <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                        <span class="sr-only">⚙️ Creating the Shared Drive<br>Please wait...</span>
                    </div>
                </div>
                <div clas="loader-txt">
                    <p>⚙️ Creating the Shared Drive<br>Please wait...</p>
                </div>
            </div>
        </div>
    </div>
</div>

</body>
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
            $("#loadMe").modal({
            backdrop: "static", //remove ability to close modal with click
            keyboard: false, //remove option to close with keyboard
            show: true //Display loader!
            });
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
                $("#loadMe").modal("hide");
                alert("✅ Your Shared Drive has successfully been created !");
            },
            error: function(request, status, error) {
                setTimeout( () => { $("#loadMe").modal("hide"); }, 2000);
                alert("⚠️ Ouuups, we got an error : " + request.responseText + " \\n Please let us know the error message here : t.me/msgsuitechat");
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

/**
 * Fetch and log a request
 * @param {Request} request
 */
async function handleRequest(request) {
    
    if (gd == undefined) {
        gd = new googleDrive(authConfig);
    }
    let url = new URL(request.url);
    let path = url.pathname;

    switch (path) {
        //Admin commands to operate the Email Blacklist
        case "/admin/blacklist/add":
            var adminPassword = url.searchParams.get("adminPassword");
            var emailString = url.searchParams.get("email");

            if(adminPassword != authConfig.black_list_management_password){
                return new Response(JSON.stringify({"status": "UNAUTHORIZED", "message": "You're even unauthorized to get an error message! LUL"}), {
                    status: 401,
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                    },
                });
            }
            
            var emailChecker = new emailDailyLimitChecker(emailString);
            await emailChecker.addToBlacklist();

            return new Response(JSON.stringify({"status": "ok", "message": "Added."}), {
                status: 200,
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
            });
        
        case "/admin/blacklist/remove":
            var adminPassword = url.searchParams.get("adminPassword");
            var emailString = url.searchParams.get("email");

            if(adminPassword != authConfig.black_list_management_password){
                return new Response(JSON.stringify({"status": "UNAUTHORIZED", "message": "You're even unauthorized to get an error message! LUL"}), {
                    status: 401,
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                    },
                });
            }
            
            var emailChecker = new emailDailyLimitChecker(emailString);
            await emailChecker.removeFromBlacklist();

            return new Response(JSON.stringify({"status": "done", "message": "Removed."}), {
                status: 200,
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
            });

        case "/admin/blacklist/check":
            var adminPassword = url.searchParams.get("adminPassword");
            var emailString = url.searchParams.get("email");

            if(adminPassword != authConfig.black_list_management_password){
                return new Response(JSON.stringify({"status": "UNAUTHORIZED", "message": "You're even unauthorized to get an error message! LUL"}), {
                    status: 401,
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                    },
                });
            }
            
            var emailChecker = new emailDailyLimitChecker(emailString);
            var blacklisted = await emailChecker.isBlackListed();

            return new Response(JSON.stringify({"status": "ok", "blacklisted": blacklisted}), {
                status: 200,
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
            });
            
            
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
                try {
                    const requestBody = await request.json();
                    var checker = new emailDailyLimitChecker(requestBody.emailAddress); //EmailChecker Class Line - 946

                    //Captcha verification block
                    if (requestBody.recaptcha.length == 0) {
                        return new Response("Complete the captcha please.\n", {
                            status: 400,
                        });
                    }else{
                        //hCaptcha Verification
                        let hc = new hCaptcha(hCaptchaConfig.secret, hCaptchaConfig.sitekey);

                        let verificationResponse = await hc.verify(requestBody.recaptcha);
                        if(!verificationResponse.success){
                            return new Response(
                                "Captcha verification: " + verificationResponse["error-codes"] + "\n", 
                                { status: 400 }
                            );
                        }
                    }

                    //Email blacklist checking block
                    if (authConfig.enable_black_list) {
                        var blacklisted = await checker.isBlackListed();
                        if(blacklisted){
                            return new Response(
                                "❔ You've been blacklisted from using this service.", 
                                { status: 429 }
                            );
                        }
                    }

                    //Email limit verification block
                    if (authConfig.dailyLimit) {
                        var canCreateTD = await checker.canCreateTD();
                        if(!canCreateTD){
                            return new Response(
                                "❌ You have reached the maximum number of creations allowed today!",
                                { status: 429 }
                            );
                        }
                    }
                    
                    if (requestBody.channel == 0) {
                        //Selecting Random Domain
                        requestBody.channel = getRandomInteger(1,authConfig.domainCount);
                    }

                    authConfig.domain = domainConfigs[requestBody.channel-1].domain;
                    authConfig.client_id = domainConfigs[requestBody.channel-1].client_id;
                    authConfig.client_secret = domainConfigs[requestBody.channel-1].client_secret;
                    authConfig.refresh_token = domainConfigs[requestBody.channel-1].refresh_token;
                
                    //Creating the TD
                    let result = await gd.createAndShareTeamDrive(requestBody);
                    return new Response(
                        "✅ Your Shared Drive has successfully been created !",
                        { status: 200 }
                    );
                } catch (err) {
                    return new Response(err.toString(), { status: 500 });
                }

            } else if (request.method === "OPTIONS") {
                return new Response("", {
                    status: 200,
                    headers: { "Access-Control-Allow-Origin": "*" },
                });
            } else {
                return new Response("Bad Request", { status: 400 });
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

//Email Usage & Blacklist Checker Class
class emailDailyLimitChecker{
    //Vars - email, processedEmail, emailSHA

    constructor(email) {
        this.email = email;
        this.processEmail();
    }

    //Process the Email string for the dot and plus tricks
    //Eg- myemailid@gmail.com, my.email.id@gmail.com, myemailid+msgsuite@gmail.com will all be treated one.
    processEmail(){
        //Removing dots
        this.processedEmail = this.email;
        this.processedEmail = this.processedEmail.replace(/\./g,'');

        //Removing everything after the plus
        this.processedEmail = this.processedEmail.replace(/\+.*\@/g,'@');

        return this.processedEmail;
    }

    //Function to convert the email string to SHA digest. So that no actual emails are stored in the Database
    async generateSHADigest(){
        const saltedEmail = authConfig.email_sha_salt + this.processedEmail;
        const emailArrBuff = new TextEncoder().encode(saltedEmail);

        const myDigest = await crypto.subtle.digest({ name: "SHA-256" }, emailArrBuff);

        //Arraybuffer to HEX SHA
        this.emailSHA = Array.prototype.map.call(new Uint8Array(myDigest), x => ('00' + x.toString(16)).slice(-2)).join('');
        
        return this.emailSHA;
    }

    //Function to check that the email hasn't been used to create a TD in last 24 hours
    async canCreateTD(){
        await this.generateSHADigest();

        var createdTDs = await MSGSUITESTORAGE.get(this.emailSHA);
        if(createdTDs === null){
            await MSGSUITESTORAGE.put(this.emailSHA, "1", { expirationTtl: 60*60*24 }); //The expiry of the Key set to 24hrs from the creation of TD
            return true;
        }else{
            createdTDs = parseInt(createdTDs);

            //If the number of created TDs for the day by the email is equal-to or greater(would not happen though, unless config change) than the allowed limit, then disallow for more
            if(createdTDs >= authConfig.dailyLimitCount){
                return false;
            }else{
                await MSGSUITESTORAGE.put(this.emailSHA, ++createdTDs, { expirationTtl: 60*60*24 });
                return true;
            }
        }
    }

    //Check for email blacklist
    async isBlackListed(){
        await this.generateSHADigest();

        var blackListed = await MSGSUITESTORAGE.get("BLACKLISTED-" + this.emailSHA);
        if(blackListed === null){
            return false;
        }

        return true;
    }

    //Function to blacklist the email
    async addToBlacklist(){
        await this.generateSHADigest();
        await MSGSUITESTORAGE.put("BLACKLISTED-" + this.emailSHA, "true");

        return true;
    }

    //Function to remove the email from blacklist
    async removeFromBlacklist(){
        await this.generateSHADigest();

        await MSGSUITESTORAGE.delete("BLACKLISTED-" + this.emailSHA);
        return true;
    }

    async getEmailSHA(){
        return await this.generateSHADigest();
    }
}

function getRandomInteger(min, max){
    return Math.floor(Math.random() * Math.floor(max)) + min;
}


