package controller;

import dao.UserDAO;
import model.User;

import javax.servlet.ServletException;
import javax.servlet.http.*;
import java.io.IOException;
import java.util.List;

public class LoginController extends HttpServlet {

    private UserDAO dao = new UserDAO();

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String username = req.getParameter("username");
        String password = req.getParameter("password");
        List<User> users = dao.getUsers();

        boolean b = false;
        User user =null;

        for (User u: users) {
            if (u.getName().equals(username) && u.getPassword().equals(password)) {
                user = u;
                b = true;
                break;
            }
        }

        if (b) {
            HttpSession session = req.getSession();
            session.setAttribute("username", user);
            Cookie c = new Cookie("username", user.getName());

            c.setMaxAge(7200);
            resp.addCookie(c);

            resp.sendRedirect("/product");

        } else {
            req.setAttribute("msg", "Incorrect password");
            req.getRequestDispatcher("login.jsp").forward(req, resp);
        }
    }
}
