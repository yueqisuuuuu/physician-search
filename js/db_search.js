function dbSearch(){
    // search validation
    var lastname = $("#lname").val();
    if (lastname == "") {
        document.getElementById("error").innerHTML = "*Last Name Required";
        return false;
     }
     else{
        document.getElementById("error").innerHTML = "";
     }
    
    
    $.ajax({
        type: "POST",
        data: {
          "lname": $("#lname").val(),
          "fname": $("#fname").val(),
          "mname": $("#mname").val(),
        },
        url: "search.php",
        dataType: "json",
        success: function(result) {
            // check for NULL
            if (result){
              var table = "";
              var address = [];
              // loop through result
              for (var key in result) {
                if (result.hasOwnProperty(key)) {
                    var val = result[key];
                    console.log(val);
                    var address1 = val["Recipient_Primary_Business_Street_Address_Line1"] + " " + val["Recipient_Primary_Business_Street_Address_Line2"];
                    var address2 = val["Recipient_City"] + " " + val["Recipient_State"] + " " + val["Recipient_Zip_Code"];
                    var name=val["Physician_Last_Name"] + ", " + val["Physician_First_Name"] + " " + val["Physician_Middle_Name"];
                    var row = "<hr/> <div class='phy_result'> <p class='phy_name'>" + name + " </p> <p class='phy_addr1'>" + address1 + "</p><p class='phy_addr2'>" + address2 + "</p> </div>";
                    console.log(row);
                    table += row;    
                    address.push(val["Recipient_Primary_Business_Street_Address_Line1"] + ", " + val["Recipient_City"] + ", " + val["Recipient_State"]);
                    }
                }
                console.log(table);
                document.getElementById("result").innerHTML = table;
                console.log(address);
                updateMap(address);
            }
            // if NULL return no result
            else{
                document.getElementById("result").innerHTML = "<hr/> No Result Found";
                initMap();
            }
        }
    });
}