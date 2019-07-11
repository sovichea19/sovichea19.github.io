<%--
  Created by IntelliJ IDEA.
  User: sovicheacheth
  Date: 2019-07-10
  Time: 23:12
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Welcome</title>
</head>
<body>
    <p>
        Welcome, <%= session.getAttribute("username") %>! <br/>
        <br/>
        <a href="logout">Logout</a>


    </p>
</body>
</html>
