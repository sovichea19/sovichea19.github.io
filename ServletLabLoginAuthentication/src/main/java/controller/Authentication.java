package controller;

import model.User;
import model.Username;

public class Authentication {

    public static boolean auth(String username, String password) {
        User userData = new User("sovichea", "easy123");
        Username user = new Username();
        user.addUsers(userData);

        for(User u: user.getUsername()) {
            if (u.getUsername().equals(username) && u.getPassword().equals(password)) {
                //If the username and password matched
                return true;
            }
        }

        return false;

    }
}
