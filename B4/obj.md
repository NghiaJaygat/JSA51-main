# khai báo
> cách 1 : `const obj = {'full-name': 'abc', age: 10 }`
> Cách 2 : khai báo bằng Object constructor `const obj = Object'
> cách 3 : `const obj = Object.create({name:'abc'})`
# Truy xuất thuộc tính
> Cách 1: dùng dấu call (.) `obj.name`
-**LƯU Ý**: chỉ sử dụng cho thuộc tính có tên đúng quy tắc, gọi trong trường hợp biết trước tên thuộc tính.
> Cách 2: dùng dấu bracket `obj['name']`
- **LƯU Ý**: sử dụng khi tên thuộc tính đặt không đúng quy tắc / không biết trước tên thuộc tính cần gọi

# Duyệt object
- for in: duyệt qua từng thuộc tính trong object
```js
for(const key in obj){
    console.log(key, obj[key])
}
```
# Thêm thuộc tính
> cách 1: dùng dầu call `obj.name = 'abc'`
> cách 2: dùng dấu bracket `obj['full-name'] = 'abc'`

# Cập nhật giá trị thuộc tính

> cách 1: dùng dầu call `obj.name = 'def'`
> cách 2: dùng dấu bracket `obj['full-name'] = 'nak'`

# Tìm kiếm giá trị thuộc tính
> Cách 1: dùng tóa tử `in`
```js
if('age ' in obj){
    console.log(true);
}
```
> Cách 2: dùng phương thức `hasOwnProperty()`  
```js  
if (obj.hasOwnProperty('age')) {  
    console.log(true);  
}  
```
# Xóa thuộc tính
- Sau khi xóa xong thuộc tính, return `true`
```js
delete obj['full-name']; 
delete obj.age
```
# Tạo bản sao
> **GIẢI THÍCH**: do object và array là **kiểu dữ liệu tham chiếu** (chỉ lưu địa chỉ, không lưu giá trị) => nếu `const new_obj = old_obj` thì **không tạo bản sao mà chỉ lưu địa chỉ** của old_obj vào new_obj => khi **thay đổi old_obj thì new_obj cũng thay đổi**, và ngược lại
> Cách 1: dùng phương thức `Object.asign()`
```js
const obj2 = Object.assign({}, obj);
```
> Cách 2: dùng spread operator (toán tử ...)
```js
const obj2 = {...obj, ...obj1}; // gộp obj và obj1
```
