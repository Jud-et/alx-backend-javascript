0x03. ES6 Data Manipulation
Project Overview
This project focuses on ES6 features for data manipulation using arrays, typed arrays, and different data structures like Set, Map, and WeakMap. The tasks involve implementing functions that use these features to solve various problems, helping to understand and apply ES6 concepts effectively.

Learning Objectives
Utilize map, filter, and reduce methods on arrays.
Understand and work with typed arrays.
Implement and use Set, Map, and WeakMap data structures.
Requirements
NodeJS 12.11.x
Jest for testing
ESLint for linting
Setup
Install NodeJS 12.11.x:

bash
Copy code
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
Install Jest, Babel, and ESLint:

bash
Copy code
npm install
Run tests and lint:

bash
Copy code
npm run full-test
Tasks
Task 0: Basic List of Objects
Objective: Create a function getListStudents that returns an array of student objects with id, firstName, and location attributes.

Implementation:

Defined getListStudents to return a hardcoded array of student objects.
Key Notes:

Simple usage of arrays and object literals to store and retrieve data.
File: 0-get_list_students.js

Task 1: More Mapping
Objective: Create getListStudentIds that returns an array of student IDs from the list provided by getListStudents.

Implementation:

Used the map method to extract IDs from the student objects.
Key Notes:

Demonstrated the use of map for transforming arrays.
File: 1-get_list_student_ids.js

Task 2: Filtering Data
Objective: Create getStudentsByLocation to filter students based on a specific city.

Implementation:

Used the filter method to select students based on their location.
Key Notes:

Showcased filtering arrays based on conditionals.
File: 2-get_students_by_loc.js

Task 3: Reducing Data
Objective: Create getStudentIdsSum to return the sum of all student IDs.

Implementation:

Utilized the reduce method to calculate the sum of IDs.
Key Notes:

Demonstrated the power of reduce for aggregating values.
File: 3-get_ids_sum.js

Task 4: Combining Filter and Map
Objective: Create updateStudentGradeByCity to update student grades in a specific city with new grades.

Implementation:

Combined filter to select students by city and map to update grades.
Key Notes:

Illustrated the use of multiple array methods in combination.
File: 4-update_grade_by_city.js

Task 5: Typed Arrays
Objective: Create createInt8TypedArray to return an ArrayBuffer with an Int8 value at a specific position.

Implementation:

Used ArrayBuffer and DataView to manipulate binary data.
Key Notes:

Provided insight into handling binary data with typed arrays.
File: 5-typed_arrays.js

Task 6: Set Data Structure
Objective: Create setFromArray to return a Set from an array.

Implementation:

Converted an array to a Set to remove duplicates.
Key Notes:

Introduced Set for unique element storage.
File: 6-set.js

Task 7: More Set Operations
Objective: Create hasValuesFromArray to check if all elements of an array exist in a set.

Implementation:

Implemented a function to validate set membership for array elements.
Key Notes:

Demonstrated set operations and membership checking.
File: 7-has_array_values.js

Task 8: Clean Set
Objective: Create cleanSet to return a string of all set values that start with a specific string.

Implementation:

Filtered and concatenated set values based on a prefix.
Key Notes:

Showcased string manipulation and set operations.
File: 8-clean_set.js

Task 9: Map Data Structure
Objective: Create groceriesList to return a Map of grocery items with their quantities.

Implementation:

Used Map to store key-value pairs of grocery items.
Key Notes:

Provided insight into using Map for key-value storage.
File: 9-groceries_list.js

Task 10: Update Map Data Structure
Objective: Create updateUniqueItems to update quantities of items in a map where the quantity is 1.

Implementation:

Updated map entries with specific conditions and threw errors for invalid inputs.
Key Notes:

Demonstrated updating and error handling in Map.
File: 10-update_uniq_items.js

Task 11: Weak Map Data Structure
Objective: Export a WeakMap instance and implement queryAPI to track query counts and throw an error if a count reaches 5.

Implementation:

Created a WeakMap for tracking and implemented error handling based on query counts.
Key Notes:

Illustrated the use of WeakMap for tracking object usage.
File: 100-weak.js
