# if - else
- câu điều kiện - cấu trúc rẽ nhánh (nếu thì)
```js
const x = 10
if (x == "10"){
    console.log(true);
} else if (x == 11){
    console.log("x là 11");
} else {
    console.log(false); // áp dụng cho tất cả các trường hợp còn lại
}
```
# Loops
## for loop
```js
for (; x < 10; x++){
    console.log(x); // chạy vòng lặp từ 1 đến 9
    x++;
}
```
## while loop
```js
let m = 0;
while (m < 10) {
    console.log(m); // chạy vòng lặp từ 0 đến 9
    m++;
}
```
## do while loop
- **LƯU Ý**: chắc chắn dc thực thi code ít nhất 1 lần trong vòng lặp
```js
let n = 0;
do {
    console.log(n); // chạy vòng lặp in số 10 -> 5
}while (n >= 5);
```