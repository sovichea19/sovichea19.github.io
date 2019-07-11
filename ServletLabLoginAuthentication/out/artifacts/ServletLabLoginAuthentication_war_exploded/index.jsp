<%--
  Created by IntelliJ IDEA.
  User: sovicheacheth
  Date: 2019-07-09
  Time: 21:41
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Login Form</title>
</head>
<body>

<%
    Cookie[] cookies = request.getCookies();
    String username = "", password = "";
    if (cookies != null) {
        for (Cookie cookie : cookies) {

        }
    }
%>

<h1>Login Form</h1>
<form action="login" name="loginForm" method="POST">
    <label>Username: </label><input type="text" name="username" id="txtUsername"/><br/>
    <label>Password: </label><input type="text" name="password" id="txtPassword"/><br/>
    <input type="checkbox" id="remember" name="remember"/><label for="remember"> Remember username</label><br/>
    <input type="submit" value="Submit"/>
</form>
</body>
</html>
