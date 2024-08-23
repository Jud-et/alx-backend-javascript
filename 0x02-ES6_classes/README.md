Project 0x02 - ES6 Classes 🚀
Welcome to the 0x02-ES6_classes project! This project focuses on understanding and implementing ES6 classes in JavaScript. Below, you'll find detailed explanations of each task we completed, along with key notes for each.

Tasks Overview
Task 0: You used to attend a place like this at some point 🏫
Objective: Implement a ClassRoom class that takes a maxStudentsSize attribute and assigns it to _maxStudentsSize.

Implementation:

Created the ClassRoom class with a constructor accepting maxStudentsSize.
Stored maxStudentsSize in a private attribute _maxStudentsSize.
Key Notes:

The class is straightforward, focusing on basic class creation and attribute initialization.
Task 1: Let's make some classrooms 🏫
Objective: Implement a function initializeRooms to return an array of ClassRoom instances with sizes 19, 20, and 34.

Implementation:

Imported the ClassRoom class from 0-classroom.js.
Created the initializeRooms function to instantiate and return three ClassRoom objects with the specified sizes.
Key Notes:

Demonstrates the use of class instantiation and function return values.
Task 2: A Course, Getters, and Setters 📚
Objective: Implement a HolbertonCourse class with attributes name, length, and students. Add getters and setters for each attribute.

Implementation:

Defined the HolbertonCourse class with a constructor and private attributes.
Implemented getter and setter methods to access and modify the attributes.
Key Notes:

Showcases the use of getters and setters in classes for controlled access.
Task 3: Methods, static methods, computed method names 💰
Objective: Create a Currency class with attributes code and name, along with a method displayFullCurrency.

Implementation:

Developed the Currency class with attributes code and name.
Added getter and setter methods.
Implemented displayFullCurrency to format and return the currency attributes.
Key Notes:

Introduces methods within a class and demonstrates how to format output.
Task 4: Pricing 💵
Objective: Create a Pricing class that includes amount and currency. Implement displayFullPrice and a static method convertPrice.

Implementation:

Imported the Currency class.
Developed the Pricing class with amount and currency.
Implemented displayFullPrice to return a formatted price.
Added convertPrice as a static method to convert prices based on a given rate.
Key Notes:

Highlights the use of static methods and interactions between classes.
Task 5: A Building 🏢
Objective: Implement a Building class with an abstract method evacuationWarningMessage.

Implementation:

Defined the Building class with a sqft attribute.
Created a method evacuationWarningMessage which must be overridden by subclasses.
Key Notes:

Demonstrates abstract classes and methods that must be implemented by subclasses.
Task 6: Inheritance 🏢🏙️
Objective: Create SkyHighBuilding extending Building, with additional floors attribute and overridden evacuationWarningMessage.

Implementation:

Extended Building to create SkyHighBuilding.
Added the floors attribute and overridden the evacuationWarningMessage method to include floor information.
Key Notes:

Illustrates inheritance and method overriding in classes.
Task 7: Airport ✈️
Objective: Implement an Airport class with name and code attributes. Override the default string representation.

Implementation:

Created the Airport class with attributes name and code.
Modified the string representation to return the airport code.
Key Notes:

Focuses on custom string representations for classes.
Task 8: Primitive - Holberton Class 🏫
Objective: Implement a HolbertonClass with attributes size and location. Handle casting to Number and String.

Implementation:

Developed HolbertonClass with the specified attributes.
Implemented custom casting methods for Number and String.
Key Notes:

Shows how to handle type conversion and casting within a class.
Task 9: Hoisting 🎓
Objective: Fix the given code to ensure proper class definition and usage, including correct instantiation and method calls.

Implementation:

Corrected class definitions and instances.
Ensured that the StudentHolberton class and its interactions with HolbertonClass are properly defined.
Key Notes:

Demonstrates debugging and fixing issues related to class hoisting and instance usage.
Task 10: Vroom 🚗
Objective: Implement a Car class with a method cloneCar that returns a new instance of Car.

Implementation:

Created the Car class with attributes brand, motor, and color.
Added a cloneCar method to return a new instance of Car.
Key Notes:

Illustrates cloning objects and handling instance creation.
Task 100: EVCar 🚘
Objective: Extend the Car class to create an EVCar class with an additional range attribute and override cloneCar to return a Car instance.

Implementation:

Extended Car to create EVCar with range.
Overridden cloneCar to return an instance of Car.
Key Notes:

Shows advanced inheritance and method overriding for specialized object cloning.

