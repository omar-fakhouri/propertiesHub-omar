package com.example.firstWebApp;

import com.example.firstWebApp.entities.user;
//import com.example.firstWebApp.services.FirebaseStorageService;
import com.example.firstWebApp.services.userServices;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.HashMap;
import java.util.Map;

@SpringBootApplication
public class FirstWebAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(FirstWebAppApplication.class, args);
/*
		FirebaseStorageService storageService = new FirebaseStorageService();

		// Bucket name (replace with your Firebase Storage bucket)
		String bucketName = "your-project-id.appspot.com";

		// Object name in the bucket (you can choose a path/name for the image)
		String objectName = "images/my-uploaded-image.jpg";

		// Local path to the image file you want to upload
		String filePath = "resources/static/img/25.png";

		// Upload the image and get the public URL
		String imageUrl = storageService.uploadImage(bucketName, objectName, filePath);

		System.out.println("Image URL: " + imageUrl);
		*/

	}
}
