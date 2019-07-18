<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: sovicheacheth
  Date: 2019-07-17
  Time: 23:23
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Product</title>
</head>
<body>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>

            </tr>
        </thead>
        <tbody>
            <c:forEach items="${product}" var="product">
            <tr>
                <td><c:out value="${product.id}"/> </td>
                <td><c:out value="${product.name}"/> </td>
                <td><c:out value="${product.price}"/> </td>
            </tr>
            </c:forEach>

        </tbody>

        <label>Product ID</label>
        <input type="text" id="productId" readonly/><br/>
        <label>Product Name</label>
        <input type="text" id="productName"/><br/>
        <label>Price</label>
        <input type="text" id="productPrice"></table>


        <button id="btnAdd">Add</button>

    </table>
</body>
</html>
