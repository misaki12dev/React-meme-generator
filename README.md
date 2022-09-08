## React Learning #3 🦄

### Meme Generator 

Learned the basic concept of how to use <br>
-　useState<br>
-　useEffect<br>
-　form in React<br>
-　API call<br>

![ezgif com-gif-maker](https://user-images.githubusercontent.com/96173629/189047291-de9a64ec-043b-4b75-b487-cb1c0a045fbd.gif)


#### Note ✍️

**useEffect** allows us to handle side effects such as API/database interactions, Timing functions(setTimer/setInterval)..etc

```
useEffect(<function>, <dependency>)
```

```
useEffect(() => {
  //Runs on every render
});
```

```
useEffect(() => {
  //Runs only on the first render
}, []);
```

```
useEffect(() => {
  //Runs on the first render
  //And any time any dependency value changes
}, [prop, state]);
```
