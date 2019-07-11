package model;

import java.util.ArrayList;

public class Username {
    private ArrayList<User> username;

    public Username() {
        username = new ArrayList<>();
    }

    public void addUsers(User user) {
        username.add(user);
    }

    public ArrayList<User> getUsername() {
        return username;
    }
}
