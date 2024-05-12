$(document).ready(function () {

    $("#email_success").hide();
    $("#email_fail").hide();

    $("#bugTrackerApp").click(function () {
        var url = "https://mcbugtracker.azurewebsites.net/";
        window.open(url, '_blank');
    });


    $("#blogApp").click(function () {
        var url = "https://madozdevblog.azurewebsites.net/";
        window.open(url, '_blank');
    });



    $("#financialApp").click(function () {
        var url = "https://madozdevfinportal.azurewebsites.net/";
        window.open(url, '_blank');
    });


    $("#MyApi").click(function () {
        var url = "https://finappphasetwo.azurewebsites.net/";
        window.open(url, '_blank');
    });

    $("#formCalculations").validate({
        rules: {
            num1: {
                required: true,
                number: true,
                min: 1
            },
            num2: {
                required: true,
                number: true,
                min: 1
            },
            num3: {
                required: true,
                number: true,
                min: 1
            },
            num4: {
                required: true,
                number: true,
                min: 1
            },
            num5: {
                required: true,
                number: true,
                min: 1
            },
            factorialNum: {
                required: true,
                number: true,
                min: 1
            },
            palText: {
                required: true
            }

        },//End of rules for validation form

        messages: {
            num1: {
                required: "<span style=\"color:red;\">Please enter a number.</span>",
                number: "<span style=\"color:red;\">Only numbers are allowed.</span>",
                min: "<span style=\"color:red;\">Enter a number greated than 0.</span>"
            },
            num2: {
                required: "<span style=\"color:red;\">Please enter a number.</span>",
                number: "<span style=\"color:red;\">Only numbers are allowed.</span>",
                min: "<span style=\"color:red;\">Enter a number greated than 0.</span>"
            },
            num3: {
                required: "<span style=\"color:red;\">Please enter a number.</span>",
                number: "<span style=\"color:red;\">Only numbers are allowed.</span>",
                min: "<span style=\"color:red;\">Enter a number greated than 0.</span>"
            },
            num4: {
                required: "<span style=\"color:red;\">Please enter a number.</span>",
                number: "<span style=\"color:red;\">Only numbers are allowed.</span>",
                min: "<span style=\"color:red;\">Enter a number greated than 0.</span>"
            },
            num5: {
                required: "<span style=\"color:red;\">Please enter a number.</span>",
                number: "<span style=\"color:red;\">Only numbers are allowed.</span>",
                min: "<span style=\"color:red;\">Enter a number greated than 0.</span>"
            },
            factorialNum: {
                required: "<span style=\"color:red;\">Please enter a number.</span>",
                number: "<span style=\"color:red;\">Only numbers are allowed.</span>",
                min: "<span style=\"color:red;\">Enter a number greated than 0.</span>"
            },
            palText: {
                required: "<span style=\"color:red;\">Please enter a string.</span>"

            }

        }

    });


    $("#factorialForm").validate({
        rules: {

            factorialNum: {
                required: true,
                number: true,
                min: 1
            }

        },//End of rules for validation form

        messages: {

            factorialNum: {
                required: "<span style=\"color:red;\">Please enter a number.</span>",
                number: "<span style=\"color:red;\">Only numbers are allowed.</span>",
                min: "<span style=\"color:red;\">Enter a number greated than 0.</span>"
            }

        }

    });

    $("#palindromeForm").validate({
        rules: {

            palText: {
                required: true,
                minlength: 2

            }

        },//End of rules for validation form

        messages: {

            palText: {
                required: "<span style=\"color:red;\">Please enter a string.</span>",
                minlength: "<span style=\"color:red;\">Enter a string with more than 2 characters.</span>"
            }

        }

    });

    $("#fizzbuzzForm").validate({
        rules: {

            txtFibNum1: {
                required: true,
                number: true,
                min: 1

            },
            txtFibNum2: {
                required: true,
                number: true,
                min: 1
            }


        },//End of rules for validation form

        messages: {

            txtFibNum1: {
                required: "<span style=\"color:red;\">Please enter a number.</span>",
                number: "<span style=\"color:red;\">Only numbers are allowed.</span>",
                min: "<span style=\"color:red;\">Enter a number greated than 0.</span>"

            },
            txtFibNum2: {
                required: "<span style=\"color:red;\">Please enter a number.</span>",
                number: "<span style=\"color:red;\">Only numbers are allowed.</span>",
                min: "<span style=\"color:red;\">Enter a number greated than 0.</span>"

            }

        }

    });

    $("#sofForm").validate({
        rules: {

            number1: {
                required: true,
                number: true,
                min: 1

            },
            number2: {
                required: true,
                number: true,
                min: 1
            },
            number3: {
                required: true,
                number: true,
                min: 1
            },
            number4: {
                required: true,
                number: true,
                min: 1
            },
            number5: {
                required: true,
                number: true,
                min: 1
            },
            number6: {
                required: true,
                number: true,
                min: 1
            },
            kValue: {
                required: true,
                number: true,
                min: 1
            }


        },//End of rules for validation form

        messages: {

            number1: {
                required: "<span style=\"color:red;\">Please enter a number.</span>",
                number: "<span style=\"color:red;\">Only numbers are allowed.</span>",
                min: "<span style=\"color:red;\">Enter a number greated than 0.</span>"

            },
            number2: {
                required: "<span style=\"color:red;\">Please enter a number.</span>",
                number: "<span style=\"color:red;\">Only numbers are allowed.</span>",
                min: "<span style=\"color:red;\">Enter a number greated than 0.</span>"

            },
            number3: {
                required: "<span style=\"color:red;\">Please enter a number.</span>",
                number: "<span style=\"color:red;\">Only numbers are allowed.</span>",
                min: "<span style=\"color:red;\">Enter a number greated than 0.</span>"

            },
            number4: {
                required: "<span style=\"color:red;\">Please enter a number.</span>",
                number: "<span style=\"color:red;\">Only numbers are allowed.</span>",
                min: "<span style=\"color:red;\">Enter a number greated than 0.</span>"

            },
            number5: {
                required: "<span style=\"color:red;\">Please enter a number.</span>",
                number: "<span style=\"color:red;\">Only numbers are allowed.</span>",
                min: "<span style=\"color:red;\">Enter a number greated than 0.</span>"

            },
            number6: {
                required: "<span style=\"color:red;\">Please enter a number.</span>",
                number: "<span style=\"color:red;\">Only numbers are allowed.</span>",
                min: "<span style=\"color:red;\">Enter a number greated than 0.</span>"

            },
            kValue: {
                required: "<span style=\"color:red;\">Please enter a number.</span>",
                number: "<span style=\"color:red;\">Only numbers are allowed.</span>",
                min: "<span style=\"color:red;\">Enter a number greated than 0.</span>"

            }

        }

    });


    //=============================== Email Section ============================

    $("#myFormEmail").validate({
        rules: {

            name: {
                required: true,
                minlength: 2,

            },
            email: {
                required: true,
                email: true,

            },
            subject: {
                required: true,
                minlength: 2,

            },
            body: {
                required: true,
                minlength: 2,

            }

        },//End of rules for validation form

        messages: {

            name: {
                //required: "<span style=\"color:red;\">Please enter a name.</span>",
                required: "<div class=\"alert alert-danger\" role=\"alert\">The name field is required.</div>",
                minlength: "<div class=\"alert alert-danger\" role=\"alert\">The name is too short, 2 characters minimum.</div>",

            },
            email: {
                required: "<div class=\"alert alert-danger\" role=\"alert\">An email is required.</div>",
                email: "<div class=\"alert alert-danger\" role=\"alert\">Your email address must be in the format of name@domain.com.</div>",
                //required: "I need your email address to contact you, thank you.",
                //email: "Your email address must be in the format of name@domain.com",

            },
            subject: {
                required: "<div class=\"alert alert-danger\" role=\"alert\">The subject field is required.</div>",
                minlength: "<div class=\"alert alert-danger\" role=\"alert\">Subject is too short, 2 characters minimum</div>",

            },
            body: {
                required: "<div class=\"alert alert-danger\" role=\"alert\">The body field is required.</div>",
                minlength: "<span style=\"color:red;\">The body is too short, 2 characters mininum.</span>",

            }

        },//end messages

        errorElement: 'div',
        errorLabelContainer: '#message'

        //     errorPlacement: function(error, element) {
        //         if( element.is(':radio') || element.is(':checkbox')) {
        //             error.appendTo(element.parent());
        //         } else {
        //          error.insertAfter(element);
        //         }
        //     },
        //     showErrors: function(errorMap, errorList) {
        //    if (submitted) {
        //       var summary = "You have the following errors: <br/>";
        //       $.each(errorList, function() { summary += " * " + this.message + "<br/>"; });
        //       $("#message").html(summary);
        //       submitted = false;
        //     }
        // //--> if you dont want to see the errors in line remove this below line?
        //this.defaultShowErrors();
        //     },
        //        invalidHandler: function(form, validator) {
        //        submitted = true;
        //    }

    });
    //==========================================================================
});

$("#sendEmail").click(function () {
    if ($("#myFormEmail").valid()) {


        let name = $("#name").val();
        let email = $("#email").val();
        let subject = $("#subject").val();
        let body = $("#body").val();
        let myEmail = "madozc@gmail.com";
        body = `Hello, <br>My name is ${name} and email address is ${email}.<br> ${body}<br> `;

        Email.send({
            SecureToken: 'eb857f73-f08c-4ca4-a465-211dfe0c24db',
            To: myEmail,
            From: myEmail,
            Subject: subject,
            Body: body
        }).then(
            message => {
                if (message === "OK") {
                    $("#myFormEmail").each(function () { this.reset() })
                    $("#myFormEmail").hide();
                    $("#email_success").show();
                }
                else {
                    $("#email_fail").show();
                }
            }

        );

    }

});


$('#myModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget)
    $("a[href='" + button.data('target-tab') + "']").tab('show');
})

$('body').scrollspy({
    target: '.dotted-scrollspy'
});


$('.navbar-collapse a').click(function () {
    $(".navbar-collapse").collapse('hide');
});

new WOW().init();

SyntaxHighlighter.all();