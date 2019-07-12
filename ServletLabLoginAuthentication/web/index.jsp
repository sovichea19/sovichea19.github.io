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
    Cookie[] cookies=request.getCookies();
    String username = "", password = "", remember = "";
    if (cookies != null) {
        for (Cookie cookie : cookies) {
            if(cookie.getName().equals("username")) {
                username = cookie.getValue();
            }
            if(cookie.getName().equals("remember")){
                remember = cookie.getValue();
            }
        }
    }
%>

<h1>Login Form</h1>
<form action="login" name="loginForm" method="POST">
    <label>Username: </label><input type="text" name="username" id="txtUsername" value="<%=username%>"/><br/>
    <label>Password: </label><input type="password" name="password" id="txtPassword"/><br/>
    <input type="checkbox" id="remember" name="remember" value="1"
            <%= "1".equals(remember.trim()) ? "checked='checked'" : "" %>/><label for="remember"> Remember Me</label><br/>
    <input type="submit" value="Submit"/>

</form>

<label style="font-weight: bold;"><%=request.getSession().getAttribute("msg") != null ? request.getSession().getAttribute("msg") : ""%></label>
<label style="font-weight: bold;"><%=request.getAttribute("msg") != null ? request.getAttribute("msg") : ""%></label>
<% request.getSession().setAttribute("msg","");%>
</body>
</html>
