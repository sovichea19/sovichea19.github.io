package filter;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class AuthFilter implements Filter {

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest request = (HttpServletRequest) servletRequest;
        HttpServletResponse response = (HttpServletResponse) servletResponse;
        String loginURL = request.getContextPath() + "/index.jsp";
        boolean loggedin = request.getSession().getAttribute("username") != null;
        boolean logginRequest = request.getSession().equals(loginURL);

        if(logginRequest || loggedin) {
            filterChain.doFilter(request, response);
        } else {
            request.getSession().setAttribute("msg", "Please login first!");
            response.sendRedirect(loginURL);
        }
    }

    @Override
    public void destroy() {

    }
}
