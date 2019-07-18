package model;

public class User {

    private String username;
    private String password;
    private String name;

    public User(String username, String password) {
        this.username = username;
        this.password = password;
        //this.name = name;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public String getName() {
        return name;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setName(String name) {
        this.name = name;
    }
}
