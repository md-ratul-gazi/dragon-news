<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A: `{}`

<i>The output is an empty object {} because the code assigns an empty object to the greeting variable and then logs the value of greeting, which is that empty object.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A: `NaN`

<i>The output is `NaN` when console the sum() function because JavaScript attempts to add a number (1) and a string ("2"), but it cannot directly convert the string to a number, so it produces "NaN" (Not-a-Number) as the result.</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A: `['🍕', '🍫', '🥑', '🍔']`

<i>The output shows the food array because the console.log(food) statement is explicitly logging the food array, and no modifications have been made to it. The change to the info.favoriteFood property doesn't affect the food array itself; it only changes the value of the favoriteFood property within the info object. </i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: `Hi there, undefined`

<i>When the function is called with sayHi() inside console.log, it is missing the required name argument.the name parameter within the function is assigned the default value of undefined. Thats why the function constructs a greeting string that includes this undefined value, resulting in the output `Hi there, undefined`. </i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: 3

<i>The code iterates through the nums array using the forEach method. For each element in the array, the code checks if the element is truthy (meaning it's not 0). In this case, the elements 1, 2, and 3 are truthy. For each truthy element, the count variable is incremented by 1. Therefore, the final value of count is 3.</i>

</p>
</details>

# Website Name: DVENTS

# Website Link: [DVENTS](https://dvents-e13c5.web.app)

# Here given some my website features and functionalities

- User Authentication: The website offers a comprehensive user authentication system, including both registration and login functionalities. Users can create new accounts to personalize their experience and securely log in to access member-exclusive features.

- Google Account Integration: Users have the convenience of logging in using their Google accounts, simplifying the login process while maintaining security. This feature making it easier for users to access the site.

- Dynamic Data Loading: Our website dynamically loads data, ensuring a seamless and responsive user experience. Through this dynamic approach, content is fetched and displayed in real-time, optimizing the speed and interactivity of the site. Users can enjoy a fluid browsing experience .

- Access Control: To enhance security and privacy, certain pages or sections of the website are restricted to authenticated users. Visitors who are not logged in are redirected or prompted to sign in, ensuring that sensitive or member-exclusive content remains protected.

- Action Confirmation Alerts: Our website utilizes alert notifications to inform users when actions such as logging in, registering, or logging out are successfully completed. These alerts provide immediate feedback, ensuring users are aware of the status of their login, registration, or logout processes. This transparent communication enhances user confidence and provides a clear indication that their actions have been successfully executed on the platform.
