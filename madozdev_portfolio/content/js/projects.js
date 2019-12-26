

$("#code").hide();
$("#btnShowCode").click(() => {
    $("#code").toggle();

    if ($("#btnShowCode").text() == "Show Code") {
        $("#btnShowCode").text("Hide Code");
    }
    else {
        $("#btnShowCode").text("Show Code");
    }
});

$("#codeGeolocation").hide();
$("#btnWeatherShowCode").click(() => {
    $("#codeGeolocation").toggle();

    if ($("#btnWeatherShowCode").text() == "Show Code") {
        $("#btnWeatherShowCode").text("Hide Code");
    }
    else {
        $("#btnWeatherShowCode").text("Show Code");
    }
});





$("#codeFactorial").hide();
$("#btnShowCodeFact").click(() => {
    $("#codeFactorial").toggle();
    if ($("#btnShowCodeFact").text() == "Show Code") {
        $("#btnShowCodeFact").text("Hide Code");

    }
    else {
        $("#btnShowCodeFact").text("Show Code");
    }
});

$("#codePalindrom").hide();
$("#btnShowCodePal").click(() => {
    $("#codePalindrom").toggle();
    if ($("#btnShowCodePal").text() == "Show Code") {
        $("#btnShowCodePal").text("Hide Code");

    }
    else {
        $("#btnShowCodePal").text("Show Code");
    }
});


$("#codeFizzBuzz").hide();
$("#btnShowCodeFizzBuzz").click(() => {
    $("#codeFizzBuzz").toggle();
    if ($("#btnShowCodeFizzBuzz").text() == "Show Code") {
        $("#btnShowCodeFizzBuzz").text("Hide Code");

    }
    else {
        $("#btnShowCodeFizzBuzz").text("Show Code");
    }
});

//Calculation section
$("#btnCalculation").click(() => {




    console.log($("#formCalculations").valid());
    if ($("#formCalculations").valid())
    {
        var numb1 = Number($("#num1").val());
        var numb2 = Number($("#num2").val());
        var numb3 = Number($("#num3").val());
        var numb4 = Number($("#num4").val());
        var numb5 = Number($("#num5").val());


        if ($("#num1").val().length == 0 ||
            $("#num2").val().length == 0 ||
            $("#num3").val().length == 0 ||
            $("#num4").val().length == 0 ||
            $("#num5").val().length == 0) {

        }
        else {
            var maxValue = Math.max(numb1, numb2, numb3, numb4, numb5);
            var minValue = Math.min(numb1, numb2, numb3, numb4, numb5);
            var maxValue = Math.max(numb1, numb2, numb3, numb4, numb5);

            var prodValue = Number(numb1 * numb2 * numb3 * numb4 * numb5);

            var sumValue = Number(numb1 + numb2 + numb3 + numb4 + numb5);

            var averageValue = Number((numb1 + numb2 + numb3 + numb4 + numb5) / 5);

            $("#maxValue").html("The Max value is : <span class=\"mathResult\">" + maxValue + "</span>");


            $("#minValue").html("The Min value is : <span class=\"mathResult\">" + minValue + "</span>");


            $("#productValue").html("The product value is : <span class=\"mathResult\">" + prodValue + "</span>");


            $("#sumValue").html("The sum value is : <span class=\"mathResult\">" + sumValue + "</span>");


            $("#averageValue").html("The average value is : <span class=\"mathResult\">" + averageValue + "</span>");
        }
       
    }
    else
    {
        BootstrapDialog.alert('I want banana!');
    }

   
});

$("#btnClearForm").click(() => {
    $(".clearField").val("");
    $(".clearResult").text("");
});

//Factorial section
$("#btnPalCal").click(() => {

    if ($("#factorialForm").valid()) {

        var factorialNumber = $("#factorialNum").val();
        var initialNumber = factorialNumber;
        var result = 1;

        while (factorialNumber > 1) {

            result *= factorialNumber;
            factorialNumber--;
        }

        $("#facResult").html("The factorial of " + initialNumber + " is <span class=\"greenFont\">" + result + "</span>"); 
    }
    else
    {
       //TBD
    }
   

});

$("#btnFacClear").click(() => {
    $(".clearFacField").val("");
    $(".clearFacResult").text("");

});

//Palindrom section
$("#btnCheckPal").click(() => {

    

    if ($("#palindromeForm").valid()) {

        var initalText = $("#palText").val();
        var parseText = "";
        var palText = "";
        var arrayTest = "";


        for (var i = initalText.length - 1; i >= 0; i--) {
            parseText += initalText[i];
        }

        if (initalText.localeCompare(parseText) == 0) {
            $("#palAnswer").html("The result after reversing " + initalText + " is <span class=\"palResult\">" + parseText + "</span>");
            $("#palMessage").addClass("show");
            $("#palMessage").removeClass("hide");

            $("#palFailMessage").removeClass("show");
            $("#palFailMessage").addClass("hide");
        }
        else {
            $("#palAnswer").html("The result after reversing " + initalText + " is <span class=\"mathResult\">" + parseText + "</span>");
            $("#palFailMessage").addClass("show");
            $("#palFailMessage").removeClass("hide");

            $("#palMessage").removeClass("show");
            $("#palMessage").addClass("hide");
        }

    }
    else
    {
       //TBD
    }


});

$("#btnClearPal").click(() => {

    $(".clearPalField").val("");
    $(".clearPalResult").text("");

    $("#palFailMessage").removeClass("show");
    $("#palFailMessage").addClass("hide");

    $("#palMessage").removeClass("show");
    $("#palMessage").addClass("hide");

});

//FizzBuzz section
$("#btnFbStart").click(() => {


    if ($("#fizzbuzzForm").valid())
    {
       var number1 = Number($("#txtFibNum1").val());
       var number2 = Number($("#txtFibNum2").val());
        clearFBanswerField();
        let strResultFb = "";

        for (var i = 1; i <= 100; i++) {
            if ((i % number1 == 0) && (i % number2 == 0)) {
                strResultFb += "<span class=\"redFont\" >FizzBuzz</span>";
            }
            else if (i % number1 == 0) {
                strResultFb += "<span class=\"greenFont\">Fizz</span>";
            }
            else if (i % number2 == 0) {
                strResultFb += "<span class=\"blueFont\">Buzz</span>";
            }
            else {
                strResultFb += ("<span class=\"greyFont\">" + i + "</span>");
            }

            //Add a period if the end of the iteration has been reached.
            strResultFb += (i < 100) ? ", " : ".";

        }

        //Render HTML tags wihtin the string.
        var html = $.parseHTML(strResultFb);

        //Display string.            
        $("#fbAnswer").append(html);


    }
    else
    {
       //TBD
    }

});

function clearFBanswerField()
{
    $("#fbAnswer").text("");
}

$("#btnClearFB").click(() => {

    $(".clearFBField").val("");
    $(".clearFBResult").text("");
});


//Sum of All Fear section
$("#codeSOF").hide();

$("#btnShowCodeFSOF").click(() => {

      $("#codeSOF").toggle();
     if ($("#btnShowCodeFSOF").text() == "Show Code")
     {
       $("#btnShowCodeFSOF").text("Hide Code");
     }
     else
     {
       $("#btnShowCodeFSOF").text("Show Code");
     }
 });


$("#btnSOFStart").click(() => {

            //Collect values from user.
            //Warn user if no values are entered.
    


    if ($("#sofForm").valid())
    {
        var numbList = [];

        //Populate array with numerical values.
        numbList.push(Number($("#number1").val()));
        numbList.push(Number($("#number2").val()));
        numbList.push(Number($("#number3").val()));
        numbList.push(Number($("#number4").val()));
        numbList.push(Number($("#number5").val()));
        numbList.push(Number($("#number6").val()));
        var kValue = Number($("#kValue").val())
        var foundSet;

        //Iterate through array using brute force method.
        for (var i = 0, foundSet = false; i < numbList.length - 1 && foundSet != true; i++) {
            for (var j = i + 1; j <= numbList.length - 1; j++) {
                if (numbList[i] + numbList[j] == kValue) {
                    //Display result
                    clearSOFfields();
                    $("#sofAnswer").append($.parseHTML("<span class=\"greenFont\">" + kValue + "</span>  was found by adding array member <span class=\"redFont\">" + numbList[i] + "</span> and <span class=\"redFont\">" + numbList[j] + "</span>"));
                    foundSet = true;
                }
                //Exit all loops if set is found.
                if (foundSet) break;
            }
        }

        if (!foundSet) {
            clearSOFfields();
            $("#sofAnswer").append($.parseHTML("No set were found. Try again!"));
        }


    }
    else
    {
       //TBD
    }





           
});

$("#btnClearSOF").click(() => {
   
    $(".clearSOFfield").val("");
    $(".clearSOFresult").text("");
});

function clearSOFfields() {
   
    $("#sofAnswer").text("");
}