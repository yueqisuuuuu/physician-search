<?php 
    session_start();
    $servername = getenv('IP');
    $username = getenv('C9_USER');
    $password = "";
    $database = "c9";
    $dbport = 3306;
    
    // Create connection
    $db = new mysqli($servername, $username, $password, $database, $dbport);
    
    // Check connection
    if ($db->connect_error) {
        die("Connection failed: " . $db->connect_error);
    }

    $l_name = $_POST['lname'];
    $f_name = $_POST['fname'];
    $m_name = $_POST['mname'];


    $select = "SELECT Physician_Last_Name, Physician_First_Name, Physician_Middle_Name, Physician_Profile_ID, Recipient_Primary_Business_Street_Address_Line1, Recipient_Primary_Business_Street_Address_Line2, Recipient_City, Recipient_State, Recipient_Zip_Code";
    $where = " WHERE Physician_Last_Name = '$l_name'";
    
    if ($f_name != NULL){
        $where .= " AND Physician_First_Name = '$f_name'";
    }
    if ($m_name != NULL){
        $where .= " AND Physician_Middle_Name = '$m_name'";
    }
    
    $sql = "$select FROM PHYSICIANS $where";
    
    $row = array();
    
    $result = $db->query($sql);
    if ($result->num_rows > 0) {
        while($post = $result->fetch_assoc()) {
            $row[] = $post;
        }
    } else {
        $row = NULL;
    }
    
    $someJSON = json_encode($row);
    
    echo $someJSON;

     $db->close(); ?>
