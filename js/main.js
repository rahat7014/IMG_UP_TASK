$(document)
    .ready(function () {
        $("#input-file").hide();

        $("#upload-btn").on('click', function () {
            $("#input-file").click();
        });

        // DISPLAY IMG IN BANNER AREA...
        $("#input-file").change(function () {
            var file = this.files[0];
            var reader = new FileReader();
            reader.onloadend = function () {
                $('.banner').css('background-image', 'url("' + reader.result + '")');
            }
            if (file) {
                reader.readAsDataURL(file);
            } else {}
        });

        //DISPLAY DYNAMIC TEXT INTO IMG...
        $("#input-text").keyup(function () {
            const text_input = $("#input-text").val();

            $("#dynamic-text").html(text_input);
        });


        //FONT STYLE ON DYNAMIC TEXT

        $("#btn1").click(function () {

            var test = document.getElementById("btn1");
            main_family = getComputedStyle(test).getPropertyValue("font-family");

            $("#dynamic-text").css("font-family", main_family);
            $("#btn1")
                .addClass('active')
                .siblings()
                .removeClass('active');

        });


        $("#btn2").click(function () {

            var test = document.getElementById("btn2");
            main_family = getComputedStyle(test).getPropertyValue("font-family");

            $("#dynamic-text").css("font-family", main_family);
            $("#btn2")
                .addClass('active')
                .siblings()
                .removeClass('active');

        });

        $("#btn3").click(function () {

            var test = document.getElementById("btn3");
            main_family = getComputedStyle(test).getPropertyValue("font-family");

            $("#dynamic-text").css("font-family", main_family);
            $("#btn3")
                .addClass('active')
                .siblings()
                .removeClass('active');

        });

        $("#btn4").click(function () {

            var test = document.getElementById("btn4");
            main_family = getComputedStyle(test).getPropertyValue("font-family");

            $("#dynamic-text").css("font-family", main_family);
            $("#btn4")
                .addClass('active')
                .siblings()
                .removeClass('active');

        });


        $("#btn5").click(function () {

            var test = document.getElementById("btn5");
            main_family = getComputedStyle(test).getPropertyValue("font-family");

            $("#dynamic-text").css("font-family", main_family);
            $("#btn5")
                .addClass('active')
                .siblings()
                .removeClass('active');

        });

        $("#btn6").click(function () {

            var test = document.getElementById("btn6");
            main_family = getComputedStyle(test).getPropertyValue("font-family");

            $("#dynamic-text").css("font-family", main_family);
            $("#btn6")
                .addClass('active')
                .siblings()
                .removeClass('active');

        });




        //ANIMATION ON DYNAMIC TEXT
        $("#anm-btn1").on("click", function () {
            $("#dynamic-text").css("animation", "none");
            $("#anm-btn1")
                .addClass('active')
                .siblings()
                .removeClass('active');
        });

        $("#anm-btn2").on("click", function () {
            $("#dynamic-text").css("animation", "fadeUp 1s infinite");
            $("#anm-btn2")
                .addClass('active')
                .siblings()
                .removeClass('active');
        });

        $("#anm-btn3").on("click", function () {
            $("#dynamic-text").css("animation", "fadeDown  1s infinite");
            $("#anm-btn3")
                .addClass('active')
                .siblings()
                .removeClass('active');
        });

        $("#anm-btn4").on("click", function () {
            $("#dynamic-text").css("animation", "zoomIn  1s infinite");
            $("#anm-btn4")
                .addClass('active')
                .siblings()
                .removeClass('active');
        });

        $("#anm-btn5").on("click", function () {
            $("#dynamic-text").css("animation", "flash 1s infinite");
            $("#anm-btn5")
                .addClass('active')
                .siblings()
                .removeClass('active');
        });

        $("#anm-btn6").on("click", function () {
            $("#dynamic-text").css("animation", "rainbow 1s infinite");
            $("#anm-btn6")
                .addClass('active')
                .siblings()
                .removeClass('active');
        });
    });