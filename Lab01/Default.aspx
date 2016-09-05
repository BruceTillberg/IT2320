<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Bruce Tillberg Lab 01</title>
    <style type="text/css">
        .auto-style1 {
            width: 100%;
            background-color: #00FFFF;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <h1>Hello, World!</h1>
        <p>Bruce, welcome to the Lab 01 website. The time is <%: DateTime.Now.ToString() %>.</p>
    </div>
    <div>  
        <table class="auto-style1">
            <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>

            <tr><td>&nbsp;</td><td><a href="http://www.google.com/">www.google.com</a></td><td>&nbsp;</td></tr>

            <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
        </table>
    </div>
    </form>
</body>
</html>
