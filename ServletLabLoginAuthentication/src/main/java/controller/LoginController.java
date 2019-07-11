package controller;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;

public class LoginController extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        //super.doGet(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        //super.doPost(req, resp);

        String username = req.getParameter("username");
        String password = req.getParameter("password");

//        PrintWriter out = resp.getWriter();
////        out.print("te");
//        out.print(username);
//        out.print(password);

        if (!username.trim().isEmpty() && !password.trim().isEmpty()) {
            //Success

//            PrintWriter out = resp.getWriter();
////        out.print("te");
//            out.print(username);
//            out.print(password);

            boolean success = Authentication.auth(username.trim(), password.trim());



            if(success) {
                HttpSession session = req.getSession();
                session.setAttribute("username", username.trim());
                RequestDispatcher dispatcher = req.getRequestDispatcher("/welcome.jsp");
                dispatcher.forward(req, resp);

            }

        } else {
            //Fail
            req.getSession().setAttribute("msg", "Please input username and password!");
            req.getRequestDispatcher(req.getContextPath() + "/index.jsp");
        }
    }
}
