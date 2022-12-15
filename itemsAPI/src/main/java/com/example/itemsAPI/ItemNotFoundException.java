package com.example.itemsAPI;

public class ItemNotFoundException extends RuntimeException{
    ItemNotFoundException(Integer id) {
        super("Could not find employee " + id);
    }
}
