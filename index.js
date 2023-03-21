let hotel = {
    name: "Taj Hotel",
    room_r: 240,
    dicount_r: 15,
    discount: function (r, d) {
        r = this.room_r;
        d = this.dicount_r;
        return (r * (100 - d) / 100);
    }
}
// console.log(hotel.name);
// console.log(hotel.room_r);
// console.log(hotel.dicount_r);
// console.log(hotel.discount());

// for month creating array months
let months = ["Jan", "Feb", "March", "Apr", "May", "Jun", "jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// for days create aray days
let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];

//  we use inbuilt function for take current date

var mydate = new Date(); // it return the date and time 

var day = mydate.getDate(); // it return the only days
var weekd = mydate.getDay()  // it return the  day in numeric value like 0->for sunday so on
var month = +mydate.getMonth();  // it return the month in numeric value 0->jan ,1->feb so on
var year = mydate.getFullYear(); // it return the current year like 2022

let Expired;
// console.log(" " + days[weekd]);
//  console.log("Day :" + day);


Expired = day + 7; // it depend you how many days after discount is closed
if ((year % 4 == 0 && year % 100 != 0) && month == 2 && Expired>29){
   Expired=Expired%29;
   month=month+1;
}
if ((year % 4 == 0 && year % 100 == 0) && month == 2 && Expired > 28)
{
    Expired = Expired % 28;  
    month=month+1;
}

if (month % 2 == 0 && Expired > 31) {
    Expired = Expired % 31;
    month = month + 1;
}
if (month % 2 != 0 && Expired > 30) {

    Expired = Expired % 30;
}
// console.log("Expired: " + Expired)


// set new date
let newdate = new Date();

newdate.setDate(Expired); // it set the days
newdate.setMonth(month);  // set the month
newdate.setFullYear(year);  // set the year

// console.log(newdate.getDate()); 
// console.log(months[newdate.getMonth()]);

if (Expired == day) {
    document.getElementById("discount").textContent = " ";
    // let no_discount = hotel.discount(this.r, 0);
    document.getElementById("room_rate").textContent = "Room Available just: " +"Rs"+hotel.room_r;
    document.getElementById("discount").textContent=" Discount has end .... "

}

else{
document.getElementById("hotel_name").textContent ="welcome our "+hotel.name;

document.getElementById("room_rate").textContent = "Room Available Just : " + "Rs" + hotel.room_r;

document.getElementById("discount").textContent = "Now Discount is      : " + hotel.dicount_r + "%";

document.getElementById("dicountrate").textContent = "Discount Rate:       " + "Rs" + hotel.discount();

document.getElementById("d").textContent = "Offer expire on next " + days[newdate.getDay()]; 


document.getElementById("duration").textContent = "(" + newdate.getDate() +months[newdate.getMonth()]+ newdate.getFullYear()+ ")";

}









