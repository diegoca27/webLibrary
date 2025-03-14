package com.example.demo.controller;  
  
import org.springframework.web.bind.annotation.GetMapping;  
import org.springframework.web.bind.annotation.RestController;  
  
import java.util.List;  
import java.util.Map;  
  
@RestController  
public class DummyDataController {  
  
    @GetMapping("/api/data")  
    public List<Map<String, String>> getDummyData() {  
        return List.of(  
            Map.of("id", "1", "name", "El Mundo y sus Demonios"),  
            Map.of("id", "2", "name", "Java for Begginers"),  
            Map.of("id", "3", "name", "Clean Architecture")  
        );  
    }  
}  