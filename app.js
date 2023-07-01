
/*

const add=function(x=2,y=4){
    return x+y;
}
//arro function***
const add1 =(x)=>{
    return x;
}
//درتابع بالا اگر یک تابع ورودی داشته باشیم میتوانیم ایکس را حذف کنیم
//اگر یک خط کد داشته باشیبم حتی میتوان ریترن با اکولاد را حذف کنیم
const add3=()=> {
    return x;
};
const add4 = x =>x;
const add5=(x,y)=> x+y;
//iife
//تابع را ایجاد کنیم بالافاصله اجرایش کنیم
(
    function(){
        console.log("hiiii")
    })();
    (function(name){
     console.log('hellow'+name)   
    })('ali');
//maps
 let person = new Map();
 person.set('person'//key
 ,{
    //value and object tipe
firstname: 'firstname1',
lastname:'lastname1'

 });
 person.set('person2'
 ,{
firstname: 'firstname1',
lastname:'lastname1'

 });
 console.log(person.get('person1').firstname);
 PermissionStatus.set('string', ' just a text');
 console.log(person.get('string'));
 //تابع نوشتن داخلش
 person.set('Trigger',function(){console.log('hellow')});
 person.get('Trigger')();//مهمممممممممم
 //متد های مپ
 person.has('person2');//برسی میکند ایا پرسن 2 هس یا نه براییش بولین برمیگرداند
 person.delete('person1');
 //پاک کردن کامل مپ با clear ld;kn.
  

///set***
//ست مانند ارایه است با این تفاوت که باید مقدار های یونیک داشته باشد
const set1= new Set();
set1.add(100);
set1.add('  A string');
set.add({name:'haniyeh'});
console.log(set1);
//روش بعد مقدار دهسی ست
const set2= new Set([1,true,'Ali']);
//-delet-has-size=> هز نمیتواند ابجکت ها را پیدا کند.
//diastructaring***
let a,b;
[a,b]=[100,200];
//rest حتما باید المنت اخر باشد.در مثال زیر 3 مقدار اول برای 3 متغیر اول است و بقیه برای رست است.
[a,b,c, ...rest]=[100,200,300,400,500];
//اگر بخواهیم 2 ابجکت را برابر هم قرار دهیم باید یک پارانتز در ابتدا و انتهای انها قرار دهیم.
({a,b}={a:100, b:200,c:300,d:400,e:500});
console.log(a);
//در عبارت بالا ما نمیتوانیم سی را نمایش دهیم چون تعریف نشده
({a,b,...rest}={a:100, b:200,c:300,d:400,e:500});
console.log(rest);
 const people=['ali','haniyeh','navid '];
 const [person11,person22, person33]=people;
 console.log(person11,person22, person33);
 //objects**
const person333={
    name:'haniyeh',
    age:'22',
    city:'marand',
    gender:'femail',
    sayhellow: function(){
        console.log('hellllllllo')
    }
} ;
 const{namee,age,city,sayhellow}=person333;
 console.log(namee,age,city);
 sayhellow();
*/
 /// fine filtter
 /*const products=[
    {name5:'ipad',category:'devices'},
    {name5:'LG',category:'TV'},
    {name5:'iphone',category:'phpnes'},
    {name5:'super vision',category:'TV'}
 ];
 //فیلتر سرچ میکند و ابجکت را میگرداند
  const result= products.filter(function(product){

    return product.category== 'TV'
  });
  console.log(result);
  //اگر در عبارت بالا جای فیلتر مپ قرار دهیم مشخص میکند ابجکت اول تی وی دارد یا نه بعد ترو فالس نشان میدهد
  //find = فایند از ابتدا شروع میکند و اولین مقدار را که ما میخواهیم به ما برمیگرداند.
*/


/*


// ماژول بندی یعنی وقتی ما پروژه های بزرگ داریم وانها را به قسمت های کوچک تقسیم میکنیم به قسمت های کوچک ماژو میگویند.
// ماژ<ل ها در اکمااسکریپت 6*******



 const sum=20;
 //پس برای استفاده از ماژول بندی حتما از لایو سرور استفاده میکنیم و از ایمپورت واکسپورت استفاده میکنیم.مقدار مورد نظر را اکسپورت کرده در مکان مورد نظر ایمپوورت میکنیم.*****
 const othersum=25;
 //پس میتوان هرچقدر میخواهیم اکسپورت اینپورت کنیم
 function random(){
    return Math.random();
 };
  const array=[1,2,3,4];
  const object={a:1 , b:2}
  //اکسپورت هم نام  نباید داشته باشیم
 export{

    sum,
    othersum,
    random,
    array,
    object
 }//در اکسپورت تابع نیاز به پارانتز گزاشتن نیس اما در فراخوانی در سکت ایمپورت باید بگزاریمش
// مهم: ممکن است متغیر یا تابعی که میخواهیم اکسپورت کنیم خودش در پوشه ایمپورت قبلا تعریف شده باشد برای حل این مشکل به صورت زیر عمل میکنیم.
*/
/*
const sum=20;
const othersum=25;
function random(){
   return Math.random();
};
 const array=[1,2,3,4];
 const object={a:1 , b:2}
export{
   sum as sum1,
   othersum,
   random,
   array,
   object
}*/

//وقتی در پایین از دیفالت استفاده میکنیم  باید در طرف ایمپورت پارانتز برایش نگزاریم.
 //const sum=20;
 //export default sum;//نمیتوانیم 2 تا دیفالت داشته باشم دیفالت فقط 1 دونه میتواند باید.
 
/*
 //میپرسد ایا مطمان هستید یا نه و جواب را چاپ میکند
 if(confirm('Are you sure')){
    console.log('yes'); }
    else{
        console.log('no') ;   }
*/
//Bom: browser object model:(confirm)
//let val;

/* alert and consol از اعضای بام هستند
window.console.log("hi");
*/
//const input=prompt();
//alert(input);
/*
if(confirm('Are you sure?')){
    console.log('yes');
}else{
    console.log('no');
}*/
/*
// ارتفاع بیرونی ویندوز
val=window.outerHeight;
console.log(val);
//ارز بیرونی
 val2=window.outerWidth;
 //راز و ارتفاع داخلی یعنی وقتی کونسول بالاس و و اندازه اونطور اندازه گیری میشود
 val3=innerHeight;
*/
//اسکرول*** یعنی وقتی مارجین داریم و در صفحه پایین میرویم مقدارش را نشان میدهد.همانطور که طی پایین امدن مثلا یکهو انیمیشنی اتفاق می افتد
//val3=window.scrollX;
/*
val=window.location.hostname; //نام هاستی کهخ هست
console.log(val);
 //شماره پورت شما
val3=window.location.host;
console.log(val3);

 //مسیر فایل
 val4=window.location.href;
 console.log(val4);
*/
 
/*//به قسمت سرچ در گوگل درسترسی پیدا کنیم یعنی پارتی که بعد ? می اید
 val=window.location.search;
 console.log(val);
 */
 //redirect زیاد مطمان نیستم چیه فط میدونم به مسیری کهد دادیم میره
 //window.location.href='http://webprog.ir';
 //relode در برنامه پایین براوزر در لوپ افتاده همواره لوپ میکند
 //window.location.reload();
//history
/*
val=window.history.length;
console.log(val);
*/
//navigator  اطلاعاتی در مورد مرورگر میدهد
/*
val=window.navigator.appName;//زیاد قابل استناد نیست و برای همه اینو میزنند
console.log(val);
val2=window.navigator.appVersion;// ورژن کروم در حال ران را میدهد
console.log(val2);
val3=window.navigator.userAgent;//قابل استناد نیس و برای همه جی کو میدهد
console.log(val3);
// برای نویگیتور vendor را هم داریم
*/
// selects:: single select/multy select.
// براساس ایدی کل تگی که ایدی داشت را برمیگرداندconsole.log(document.getElementById('me'));
//اسم کلاس را با ایدی به دست می اوریمconsole.log(document.getElementById('me').className);


//const talk=document.getElementById('me');
//استایل های سی اس اس را پیاده سازی میکنیمtalk.style.background='#333';
//talk.style.display='non';
// به وسیله موارد زیر ما محتووای را تغییر میدهیم.
/*talk.textContent='slam';
talk.innerText='mama'*/
//با این میتوان تگ اضافه کرد.
//talk.innerHTML='<a>ujbfv</a>';
//بهتر از کلاس یا ایدی نیم پایینیه و اگر دنبال کلاس بگردیم قبل اسم نقطه و اگر ایدی باشه هشتگ میزاریم//نکته ی مهم این است که هرچقدر هم باشه این فقط اولی رو برمیگردونه نه همشو
/*console.log(document.querySelector('#me'));
console.log(document.querySelector('.me2'));
console.log(document.querySelector('h1'));
document.querySelector('li:last-child').style.color='red';
document.querySelector('li:nth-child(3)').style.color='red';
*/

let val;

const list = document.querySelector('ul.list-group');
const listItem = document.querySelector('li.list-group-item');

val = listItem;
val = list;

// console.log(list,listItem);

// Get child nodes
// val = list.childNodes;

// console.log(val);

// Get children element nodes
// val = list.children;
// console.log(val);

// val = list.children[1];
// console.log(val);


// list.children[1].textContent = 'Hello';

// Children of children
// val = list.children[2].children[0];
// console.log(val);

// list.children[2].children[0].id = 'test-link';


// First child
// val = list.firstChild;
// console.log(val);

// val = list.firstElementChild;
// console.log(val);

// Last child
// val = list.lastChild;
// console.log(val);


// val = list.lastElementChild;
// console.log(val);

// Count child elements
// val = list.childElementCount;
// console.log(val);

// Get parent node
// val = listItem.parentNode;
// console.log(val);


// val = listItem.parentElement;
// console.log(val);


// val = listItem.parentElement.parentElement;
// console.log(val);

// Get next sibling
// val = listItem.nextSibling;
// console.log(val);

// val = listItem.nextElementSibling;
// console.log(val);


// Get prev sibling
// val = listItem.previousSibling;
// console.log(val);

val = listItem.nextElementSibling.nextElementSibling.nextElementSibling;
console.log(val);





