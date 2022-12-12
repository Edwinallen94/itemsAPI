package com.example.itemsAPI;
import org.springframework.web.bind.annotation.*;
import service.ItemService;
import com.example.itemsAPI.repository.entity.Item;
import com.example.itemsAPI.dto.ItemDto;

import java.util.Optional;

@RestController
@RequestMapping("/item")
public class ItemController{

    final ItemRepository itemRepository;
    final ItemService itemService;


    public ItemController(ItemService itemService, ItemRepository itemRepository)
    {
        this.itemRepository = itemRepository;
        this.itemService = itemService;
    }

    @GetMapping("/all/items")
    public Iterable<Item> getItems(){
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
    public Item update( @RequestBody ItemDto itemDto, @PathVariable Integer id )
    {
        Optional<Item> item = itemService.findById(id);
        item.setName( itemDto.getName() );
        item.setDescription( itemDto.getDescription() );
        item.setImageUrl( itemDto.getImageUrl() );
        return itemService.save(item);
    }

    @DeleteMapping( "/{id}" )
    public void delete( @PathVariable Integer id )
    {
        itemService.delete( id );
    }

}

