package dao;

import model.Product;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ProductDAO {

    Map<Integer, Product> products = new HashMap<>();

    {
        products.put(1, new Product(1, "Apple iPhone", "988"));
        products.put(2, new Product(2, "Samsung Galaxy S10", "888"));
        products.put(3, new Product(3, "LG G7", "898"));

    }

    public void addProduct(Product product) {
        products.put(product.getId(), product);
    }

    public void deleteProduct(int id) {
        products.remove(id);
    }

    public void updateProduct(Product product) {
        products.put(product.getId(), product);
    }

    public List<Product> getAllProduct() {
        return new ArrayList<>(products.values());
    }

    public Product getProductById(int productId) {
        return products.get(productId);
    }

    public int generateId() {
        return products.size() + 1;
    }
}
