

let arr = ['\r|  ', '\r/  ', '\r-  ', '\r\\  ', '\r|  ']


const spinner = function(arr) {
let delay = 100;
for (const items of arr) {
  setTimeout(() => {
    process.stdout.write(items);
    }, delay);
delay += 200
}
};
spinner(arr);
