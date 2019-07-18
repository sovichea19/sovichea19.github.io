package dao;

import model.User;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class UserDAO {

    List<User> users = new ArrayList<>();

    public UserDAO() {
        users.add(new User("sovichea", "password"));
        users.add(new User("admin", "password"));

    }

    public List<User> getUsers() {
        return users;
    }
}
