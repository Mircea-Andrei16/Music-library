package com.example.music.library;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class CarRentController {

	@GetMapping("/contact")
	public String greetingForm(Model model) {
		model.addAttribute("contact", new FormPerson());
		return "contact";
	}

	@PostMapping("/contact")
	public String greetingSubmit(@ModelAttribute FormPerson greeting, Model model) {
		model.addAttribute("contact", greeting);
		return "result";
	}

	@GetMapping("/music")
	public String cars(Model model) {
		model.addAttribute("music");
		return "cars";
	}
}
