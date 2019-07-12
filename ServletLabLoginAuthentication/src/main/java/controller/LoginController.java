package controller;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.*;
import java.io.IOException;
import java.io.PrintWriter;

public class LoginController extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        //super.doPost(req, resp);

        String username = req.getParameter("username");
        String password = req.getParameter("password");
        String remember = req.getParameter("remember");
        String promo = "100USD";

//        PrintWriter out = resp.getWriter();
//        out.print("te");
//        out.print(username);
//        out.print(password);

        if (!username.trim().isEmpty() && !password.trim().isEmpty()) {
            //Success

            boolean success = Authentication.auth(username.trim(), password.trim());

            if(success) {

                //If the user check remember me
                if (remember != null) {
                    Cookie user = new Cookie("username", username.trim());
                    Cookie rem = new Cookie("remember", remember.trim());
                    Cookie promotion = new Cookie("promocode", promo);
                    //Set cookie max age to 1 month
                    user.setMaxAge(60 * 60 * 24 * 30);
                    rem.setMaxAge(60 * 60 *24 * 30);
                    promotion.setMaxAge(60 * 60 * 24 * 30);
                    resp.addCookie(user);
                    resp.addCookie(rem);
                    resp.addCookie(promotion);
                } else {
                    //Clear cookie
                    Cookie user = new Cookie("username", null);
                    Cookie rem = new Cookie("remember", null);
                    Cookie promotion = new Cookie("promocode", null);
                    user.setMaxAge(0);
                    rem.setMaxAge(0);
                    promotion.setMaxAge(0);

                    resp.addCookie(user);
                    resp.addCookie(rem);
                    resp.addCookie(promotion);
                }

                HttpSession session = req.getSession();
                session.setAttribute("username", username.trim());
                RequestDispatcher dispatcher = req.getRequestDispatcher("/welcome.jsp");
                dispatcher.forward(req, resp);

            } else {
                //Incorrect username or password
                req.getSession().setAttribute("msg", "Incorrect Username or Password!");
                resp.sendRedirect(req.getContextPath() + "/index.jsp");
            }

        } else {
            //Fail
            req.getSession().setAttribute("msg", "Please input username and password!");
            req.getRequestDispatcher(req.getContextPath() + "/index.jsp");
        }
    }
}
