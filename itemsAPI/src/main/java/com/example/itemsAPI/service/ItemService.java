package com.example.itemsAPI.service;

import com.example.itemsAPI.ItemModelAssembler;
import com.example.itemsAPI.ItemRepository;
import com.example.itemsAPI.repository.entity.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@Service
public class ItemService
{
    @Autowired private ItemRepository itemRepository;




    public ItemService( ItemRepository itemRepository)
    {
        this.itemRepository = itemRepository;

    }

    public ItemService() {
    }


    public Item save(Item item )
    {
        //TODO implement this method
        //if(!itemRepository.equals(item)) {
            return itemRepository.save(item);
       // }
        //return null;
    }


    public void delete( int itemId )
    {
        //TODO implement this method
        itemRepository.deleteById(itemId);
    }


    public List<Item> all()
    {
        //TODO implement this method
        return itemRepository.findAll();
    }


    public Optional<Item> findById(int itemId )
    {
        //TODO implement this method
        //if(itemRepository.findById(itemId).isPresent()){
            return itemRepository.findById(itemId);
        //}
       // return null;
    }
}
