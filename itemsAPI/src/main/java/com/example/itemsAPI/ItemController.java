package com.example.itemsAPI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.web.bind.annotation.*;
import com.example.itemsAPI.service.ItemService;
import com.example.itemsAPI.repository.entity.Item;
import com.example.itemsAPI.dto.ItemDto;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;


@RestController
@RequestMapping(value = "/item")
public class ItemController{


      private final ItemService itemService;

    private final ItemModelAssembler assembler;


    public ItemController(ItemService itemService,ItemModelAssembler assembler)
    {

        this.itemService = itemService;
        this.assembler = assembler;

    }



    @GetMapping("/all")
    /*
    public List<Item> getItems(){
        return itemService.all();
    }
    */
    CollectionModel<EntityModel<Item>> all() {
        List<EntityModel<Item>> employees = itemService.all().stream() //
                .map(assembler::toModel) //
                .collect(Collectors.toList());

        return CollectionModel.of(employees, linkTo(methodOn(ItemController.class).all()).withSelfRel());
    }
    @PostMapping
    public Item save( @RequestBody ItemDto itemDto )
    {
        return itemService.save( new Item( itemDto ) );
    }
    @GetMapping("/{id}")
    public EntityModel<Item> findItemById(@PathVariable Integer id ){
        Item item = itemService.findById(id)
                .orElseThrow(()->new ItemNotFoundException(id));
        return assembler.toModel(item);
    }
    @PutMapping( "/{id}" )
    public Item update(@RequestBody ItemDto itemDto, @PathVariable Integer id )
    {

                return itemService.findById(id).map(item ->{
                    item.setName(itemDto.getName());
                    item.setDescription(itemDto.getDescription());
                    item.setImageUrl(itemDto.getImageUrl());
                    return itemService.save(item);
                })
                .orElseGet(()->{
                    Item item = new Item(id,itemDto.getName(),itemDto.getDescription(),itemDto.getImageUrl());
                    return itemService.save(item);


                });

    }

    @DeleteMapping( "/{id}" )
    public void delete( @PathVariable Integer id )
    {
        itemService.delete( id );
    }

}

