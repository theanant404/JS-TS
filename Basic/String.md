In JavaScript, a **string** is a sequence of characters used to represent text. You can create strings using single quotes (`''`), double quotes (`""`), or backticks (\`\`\`\`\`\`). A key characteristic of strings is that they are **immutable**, meaning they cannot be changed after they are created; string methods always return a new string.

```javascript
let singleQuote = 'Hello';
let doubleQuote = "World";
let templateLiteral = `Hello, World!`; // Can embed variables
```

-----

## Common String Methods

Here are some of the most useful methods for working with strings.

### Accessing and Finding Characters

These methods help you find or check for characters and substrings.

  * **`.length`**: A property that returns the number of characters in the string.
    ```javascript
    let text = "Hello";
    console.log(text.length); // 5
    ```
  * **`.charAt(index)`** or **`[index]`**: Returns the character at a specific position (index).
    ```javascript
    let text = "World";
    console.log(text.charAt(0)); // 'W'
    console.log(text[1]); // 'o'
    ```
  * **`.indexOf(substring)`**: Returns the index of the first occurrence of a specified substring. Returns `-1` if not found.
    ```javascript
    let greeting = "Hello, world!";
    console.log(greeting.indexOf("world")); // 7
    ```
  * **`.includes(substring)`**: Checks if a string contains a specified substring. Returns `true` or `false`.
    ```javascript
    let message = "Welcome to the future.";
    console.log(message.includes("future")); // true
    ```

-----

### Modifying and Extracting Strings

These methods create new strings by changing the case, trimming, or extracting parts of the original string.

  * **`.toUpperCase()` / `.toLowerCase()`**: Returns a new string converted to uppercase or lowercase.
    ```javascript
    let whisper = "be quiet";
    let shout = "I AM LOUD";
    console.log(whisper.toUpperCase()); // "BE QUIET"
    console.log(shout.toLowerCase()); // "i am loud"
    ```
  * **`.slice(startIndex, endIndex)`**: Extracts a section of a string and returns it as a new string.
    ```javascript
    let fruit = "Apple, Banana, Kiwi";
    console.log(fruit.slice(7, 13)); // "Banana"
    ```
  * **`.replace(searchValue, newValue)`**: Searches for a value and returns a new string with the value replaced. It only replaces the first match.
    ```javascript
    let sentence = "I like cats. Cats are great.";
    console.log(sentence.replace("cats", "dogs")); // "I like dogs. Cats are great."
    ```
  * **`.trim()`**: Removes whitespace from both ends of a string.
    ```javascript
    let paddedText = "   Hello World   ";
    console.log(paddedText.trim()); // "Hello World"
    ```

-----

### Converting Strings

This method is useful for breaking a string into smaller pieces.

  * **`.split(separator)`**: Splits a string into an array of substrings based on a specified separator.
    ```javascript
    let data = "apple,orange,banana";
    let fruits = data.split(',');
    console.log(fruits); // ["apple", "orange", "banana"]

    let words = "Hello world";
    console.log(words.split(' ')); // ["Hello", "world"]
    ```