package com.example.itemsAPI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.itemsAPI.service.ItemService;
import com.example.itemsAPI.repository.entity.Item;
import com.example.itemsAPI.dto.ItemDto;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping(value = "/item")
public class ItemController{


      private final ItemService itemService;



    public ItemController(ItemService itemService)
    {

        this.itemService = itemService;
    }



    @GetMapping("/all")
    public List<Item> getItems(){
        return itemService.all();
    }
    @PostMapping
    public Item save( @RequestBody ItemDto itemDto )
    {
        return itemService.save( new Item( itemDto ) );
    }
    @GetMapping("/{id}")
    public Optional<Item> findItemById(@PathVariable Integer id ){
        return itemService.findById(id);
    }
    @PutMapping( "/{id}" )
    public Optional<Item> update(@RequestBody ItemDto itemDto, @PathVariable Integer id )
    {
        return itemService.findById(id)
                .map(item ->{
                    item.setName(itemDto.getName());
                    item.setDescription(itemDto.getDescription());
                    item.setImageUrl(itemDto.getImageUrl());
                    return itemService.save(item);
                });

    }

    @DeleteMapping( "/{id}" )
    public void delete( @PathVariable Integer id )
    {
        itemService.delete( id );
    }

}

