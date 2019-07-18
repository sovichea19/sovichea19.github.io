package controller;

import com.fasterxml.jackson.core.JsonGenerationException;
import com.fasterxml.jackson.databind.ObjectMapper;
import dao.ProductDAO;
import model.Product;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/product")
public class ProductController extends HttpServlet {

    private static final long serialVersionUID = 1L;

    private ProductDAO dao;
    ObjectMapper mapper = new ObjectMapper();

    @Override
    public void init() throws ServletException {
        dao = new ProductDAO();
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        req.setAttribute("products", dao.getAllProduct());
        RequestDispatcher view = req.getRequestDispatcher("product.jsp");
        view.forward(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String jsonString = req.getParameter("product");
        Product product = mapper.readValue(req.getParameter("product"));

        product.setId(dao.generateId());
        dao.addProduct(product);

        PrintWriter out = resp.getWriter();

        try {
            out.print(mapper.writeValueAsBytes(product));
        } catch (JsonGenerationException e) {
            e.printStackTrace();
        }
    }
}
