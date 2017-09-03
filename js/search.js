// preprocess data onload 
window.onload = function(){
  initMap();
  
  $.get('data/OP_DTL_OWNRSHP_PGYR2016_P06302017.csv', function(data){
  processData(Papa.parse(data,{
    header: true
  }).data);
});
}

// load all data
function processData(csvData) {
  console.log(csvData);
    
}

function jsSearch(){
  // search validation
    var lastname = $("#lname").val();
    if (lastname == "") {
        document.getElementById("error").innerHTML = "*Last Name Required";
        return false;
     }
     else{
        document.getElementById("error").innerHTML = "";
     }
}

