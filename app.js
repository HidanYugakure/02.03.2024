// let numbers=[10,5,25,8,15] //Verilmiş int Arrayın ən böyük dəyərə sahib elementini tapın.
// let maxNum = numbers[0];

// for (let i = 1; i < numbers.length; i++) 
// {
//   if (numbers[i] > maxNum) {
//     maxNum = numbers[i];
//   }
// }
// console.log(maxNum);


// let number=[1,2,3,4,5] //Verilmiş Arrayın elementlərinin cəmini ekrana çap edin.
// let sum=0;

// for (let i = 0; i < number.length; i++) 
// {
//     sum+=number[i]    
// }
// console.log(sum);

// let array = [2,8,54,89,52,157]    //Verilmiş Arrayın ilk və son elementlərinin cəmini tapın
// let sumc=0
// if (array.length>=2)
// {
//   sumc=array[0]+array[array.length-1]
// }
// console.log(sumc);

//  let n=5    //Verilmiş n və m (n<m) ədədləri arasında neçə tək ədəd olduğunu tapın
//  let m=15
//  let count=0
// if (m>n) {
//   for (let i = n; i <= m; i++) 
//  {
//    if (i % 2 == 0)
//      {
//        count++
//      }
//     }
// }
// console.log(count);

// let num=6 //Verilmiş n tam ədədinin sadə və ya mürəkkəb ədəd olduğunu tapın.
// let bolunen=0

// for (let bolunen = 1; bolunen <= num; bolunen++) {
//     if (num % bolunen == 0) {
//       console.log(bolunen);
//     }
// }
// let n = 1;       //Verilmiş müsbət tam n ədədinin 2-nin qüvvəti olub-olmamasını tapın.
// if (n / 2 == 2) {
//   console.log("Quvvetidir");
// }
// else {
//   console.log("Quvveti deyil");
// }

// const b = 125;  //Verilmiş n tam ədədinin neçə mərtəbəli olduğunu tapın. alinmadi
// let m=10;
// let counter=0
// while ((m<=1000000) && (m<=1) )
// {
//   if(b/m>0)
//   {
//     counter=b/(m*=10);
//     counter++;
//   } 
// }
// console.log(counter);

// let d=4;          //n - ədədi gəlir, n -in tək və ya cüt olub olmamağını yoxlayın.

// if (d!==0) 
// {
//   if (d%2!==0) {
//     console.log("Tekdir");
//   }
//   else
//   {
//   d%2==0
//   console.log("Cutdur");
//   }
// }

// let e = 121; //Verilmiş n - ədədinin 3-ə və 7-ə bölünüb-bölünməməsini tapın.
// const f= 21;
// if (e!==0) 
// {
//   if (e%=f!==0) {
//     console.log( " 7 ve 3 bolunur");
//   }
//   else(e%=f==0)
//   {
//     console.log( " 7 ve 3 bolunmur");
//   }
// }

// let n=5     //n və m ədədləri verilir. Əgər n və m ədədləri hər ikisi cütdürsə n və m ədədlərinin cəmini hesablayın.
// let m=20
// let combination=0

//   if((n%=2!==0) && (m%=2!==0))
//   {
//      combination = n+m
//      console.log(combination);
//   }
//   else
//   {
//   console.log("dogru ededleri daxil et");
//   }
   
//  let n=5    //Verilmiş n və m (n<m) ədədləri arasında neçə tək ədəd olduğunu tapın
//  let m=15   //Verilmiş n ve m (n<m) ədədləri arasındakı tək ədədlərin sayını tapın. bu tapsirigi cumlede sozu deyiserek qeyd etdiyiniz ucun eyni seyi yaziram
//  let count=0
// if (m>n) {
//   for (let i = n; i <= m; i++) 
//  {
//    if (i % 2 !== 0)
//      {
//        count++
//      }
//     }
// }
// console.log(count);


// let n=8;        //Verilmiş n ve m (n<m) ededleri arasindaki tek ədədlərin cəmini tapin
// let m=35;
// let count = 0;

//     for (let i = 0; i<=m; i++) 
//     {
//         if(i%2!==0){
//          count+=i
//         }
//     }
//     console.log(count);

//   let m=35;        //m -ədədi verilir. 1-dən m-ədədinə kimi olan cüt ədədlərin hasilini tapin
//   let product=1;

//        for (let i = 1; i <= m; i++) 
//       {
//        if (i % 2== 0)
//          {
//            product*=i
//          }
//         }
//      console.log(product);

// let degree = prompt("Enter the degree")               //Havanın temperaturu verilir. Əgər temperatur 15 - dən kiçikdirsə ekrana yazılsın "Hava soyuqdur", 15 - dən böyükdürsə ekrana yazılsın "Hava istidir".
// if( degree>15)
// {
// console.log("Weather so Hot Lamb");
// }
// else if( degree==15)
// {
// console.log("Weather is so fine go to a walk Lamb");
// }
// else
// {
// console.log("Weather is cold breaks your leg at home Lamb");
// }














// function findLongest(str) 
// {
//     let words = str.split(" ");
//     let maxLenght=0;
//     let longestWord="";
//     for (let i = 0; i < words.length; i++) 
//     {
//         if (words[i]>maxLenght) 
//         {
//             maxLenght=words[i].length
//             longestWord=words[i]
//         }
//     }
//     console.log(longestWord);
// }