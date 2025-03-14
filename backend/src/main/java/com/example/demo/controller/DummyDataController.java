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
            Map.of("id", "2", "name", "Java for Beginners"),
            Map.of("id", "3", "name", "Clean Architecture"),
            Map.of("id", "4", "name", "Effective Java"),
            Map.of("id", "5", "name", "The Pragmatic Programmer"),
            Map.of("id", "6", "name", "Design Patterns: Elements of Reusable Object-Oriented Software"),
            Map.of("id", "7", "name", "The Clean Coder"),
            Map.of("id", "8", "name", "Refactoring: Improving the Design of Existing Code"),
            Map.of("id", "9", "name", "The Mythical Man-Month"),
            Map.of("id", "10", "name", "Introduction to Algorithms"),
            Map.of("id", "11", "name", "The Art of Computer Programming"),
            Map.of("id", "12", "name", "Code Complete"),
            Map.of("id", "13", "name", "Designing Data-Intensive Applications"),
            Map.of("id", "14", "name", "Domain-Driven Design"),
            Map.of("id", "15", "name", "Structure and Interpretation of Computer Programs") 
        );  
    }  
}  