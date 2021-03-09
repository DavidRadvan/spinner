let count = 100;
const arr = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];
for (let i = 0; i < arr.length; i++) {
  setTimeout(() => {
    process.stdout.write(arr[i]);
  }, count);
  count += 200;
}
