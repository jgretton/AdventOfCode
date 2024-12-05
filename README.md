# Advent of Code 

I am going to do my best to answer each days puzzle. Below I will take notes of the things I had to research and learn to solve them.

## Day 1
- How to read a file using javascripts file system.
- If you add an array item in the map function it uses array deconstruction to get the first element.  

    ``const list_1 = arr.map(([item]) => +item).sort();``

## Day 2
- How to remove specific elements from an array.
  [Found the information here](https://www.freecodecamp.org/news/how-to-remove-an-element-from-a-javascript-array-removing-a-specific-item-in-js/#heading-remove-an-element-at-any-position-of-an-array-with-slice-and-concat)  

   ``row.slice(0, index).concat(row.slice(index + 1))``

## Day 3
 Regex. I found this one very complicated. I tried other methods first and wasn't getting anywhere so I watched a youtube video of someone who solved the puzzle using python to hear their thought process. They mentioned using regex, so I decided to end the video early and see if I could work it out for myeslf.
 - `/mul\(\d{1,3}\,\d{1,3}\)/g`
   - / / - the regex is written between these
   - mul\( - searches for this exact string
   - \d{1,3} - looks for 1-3 digits
   - \ - this is an escape so you are able to search for any character (,)
   - g - (global) putting this at the end searches for every instance rather than the first one.
  
  
  
  
