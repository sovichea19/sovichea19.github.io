<%--
  Created by IntelliJ IDEA.
  User: sovicheacheth
  Date: 2019-07-17
  Time: 23:21
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Login</title>
</head>
<body>
    <form method="POST" action="login">
        <input type="text" name="username"/><br/>
        <input type="password" name="password" /><br/>
        <input type="submit" text="Submit" />

    </form>

    <p style="color: red">${msg}</p>
</body>
</html>
