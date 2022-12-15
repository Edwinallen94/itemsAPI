package com.example.itemsAPI;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.*;

import com.example.itemsAPI.repository.entity.Item;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.stereotype.Component;

@Component
public class ItemModelAssembler implements RepresentationModelAssembler<Item, EntityModel<Item>>  {
    @Override
    public EntityModel<Item> toModel(Item item) {

        return EntityModel.of(item, //
                linkTo(methodOn(ItemController.class).findItemById(item.getId())).withSelfRel(),
                linkTo(methodOn(ItemController.class).all()).withRel("items"));
    }

}
