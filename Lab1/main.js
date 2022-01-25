"use script";

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("business_card").style.display = "none"; //Hides card by default

    //Creates a card based on the user's form
    document.getElementById("print_button").addEventListener("click", function () {
        //Creates the card
        document.getElementById("business_card").style.display = "block";
        document.getElementById("business_card_company").innerHTML = document.getElementById("form_company_input").value;
        document.getElementById("business_card_name").innerHTML = document.getElementById("form_first_name_input").value + " " + document.getElementById("form_last_name_input").value;
        document.getElementById("business_card_title").innerHTML = document.getElementById("form_title_input").value;
        document.getElementById("business_card_phone").innerHTML = "Phone number: " + document.getElementById("form_phone_input").value;
        document.getElementById("business_card_email").innerHTML = "Email: " + document.getElementById("form_email_input").value;
        document.getElementById("business_card").style.backgroundColor = document.getElementById("form_background_color_select").value;
        document.getElementById("business_card").style.color = document.getElementById("form_text_color_select").value;
        document.getElementById("business_card").style.fontFamily = document.getElementById("form_font_select").value;


        // Reset form fields
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



    document.getElementById("reset_button").addEventListener("click", function () { // When reset button clicked; hide card and reset form fields 
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