package service;

import com.example.itemsAPI.ItemRepository;
import com.example.itemsAPI.repository.entity.Item;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ItemService
{
    private final ItemRepository itemRepository;

    public ItemService(ItemRepository itemRepository )
    {
        this.itemRepository = itemRepository;
    }


    public Item save(Item item )
    {
        //TODO implement this method
        if(!itemRepository.equals(item)) {
            return itemRepository.save(item);
        }
        return null;
    }


    public void delete( int itemId )
    {
        //TODO implement this method
        itemRepository.deleteById(itemId);
    }


    public List<Item> all()
    {
        //TODO implement this method
        List<Item> result = new ArrayList<>();
        itemRepository.findAll().forEach( result::add );
        return result;
    }


    public Optional<Item> findById(int itemId )
    {
        //TODO implement this method
        if(itemRepository.findById(itemId).isPresent()){
            return itemRepository.findById(itemId);
        }
        return null;
    }
}
