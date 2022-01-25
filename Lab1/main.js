"use script";

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("business_card").style.display = "none"; //Hides card by default

    //Skapar ett visitkort utifrån inmatade värden när skriv ut-knappen trycks
    document.getElementById("print_button").addEventListener("click", function () {
        //Skapar själva kortet
        document.getElementById("business_card").style.display = "block";
        document.getElementById("business_card_company").innerHTML = document.getElementById("form_company_input").value;
        document.getElementById("business_card_name").innerHTML = document.getElementById("form_first_name_input").value + " " + document.getElementById("form_last_name_input").value;
        document.getElementById("business_card_title").innerHTML = document.getElementById("form_title_input").value;
        document.getElementById("business_card_phone").innerHTML = "Tfn: " + document.getElementById("form_phone_input").value;
        document.getElementById("business_card_email").innerHTML = "Epost: " + document.getElementById("form_email_input").value;
        document.getElementById("business_card").style.backgroundColor = document.getElementById("form_background_color_select").value;
        document.getElementById("business_card").style.color = document.getElementById("form_text_color_select").value;
        document.getElementById("business_card").style.fontFamily = document.getElementById("form_font_select").value;


        // Tidigare kod som återställde inputfälten men kände att reset-knappen var nog
        /*
        document.getElementById("form_company_input").value = "";
        document.getElementById("form_last_name_input").value = "";
        document.getElementById("form_first_name_input").value = "";
        document.getElementById("form_title_input").value = "";
        document.getElementById("form_phone_input").value = "";
        document.getElementById("form_email_input").value = "";
        document.getElementById("form_background_color_select").value = "Lightblue";
        document.getElementById("form_text_color_select").value = "Black";
        document.getElementById("form_font_select").value = "Verdana";
        */
    });


    // Gömmer kortet och återsätter inputfälten när nollställ-knappen trycks
    document.getElementById("reset_button").addEventListener("click", function () {
        document.getElementById("business_card").style.display = "none";
        document.getElementById("form_company_input").value = "";
        document.getElementById("form_first_name_input").value = "";
        document.getElementById("form_last_name_input").value = "";
        document.getElementById("form_title_input").value = "";
        document.getElementById("form_phone_input").value = "";
        document.getElementById("form_email_input").value = "";
        document.getElementById("form_background_color_select").value = "Lightblue";
        document.getElementById("form_text_color_select").value = "Black";
        document.getElementById("form_font_select").value = "Verdana";
    })
})