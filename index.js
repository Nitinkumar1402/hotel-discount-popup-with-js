let hotel = {
    name: "Taj Hotel",
    room_r: 300,
    dicount_r: 15,
    discount: function(r, d) {
        r = this.room_r;
        d = this.dicount_r;
        return (r * (100 - d) / 100);
    }
}



let months = ["Jan", "Feb", "March", "Apr", "May", "Jun", "jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];



var mydate = new Date();

var day = mydate.getDate();
var weekd = mydate.getDay()
var month = +mydate.getMonth();
var year = mydate.getFullYear();
let Expired;



Expired = day + 7;
if ((year % 4 == 0 && year % 100 != 0) && month == 2 && Expired > 29) {
    Expired = Expired % 29;
    month = month + 1;
}
if ((year % 4 == 0 && year % 100 == 0) && month == 2 && Expired > 28) {
    Expired = Expired % 28;
    month = month + 1;
}

if (month % 2 == 0 && Expired > 31) {
    Expired = Expired % 31;
    month = month + 1;
}
if (month % 2 != 0 && Expired > 30) {

    Expired = Expired % 30;
}

let newdate = new Date();

newdate.setDate(Expired);
newdate.setMonth(month);
newdate.setFullYear(year);

if (Expired == day) {
    document.getElementById("discount").textContent = " ";

    document.getElementById("room_rate").textContent = "Room Available just: " + "Rs" + hotel.room_r;
    document.getElementById("discount").textContent = " Discount has end .... "

} else {
    document.getElementById("hotel_name").textContent = "Welcome to " + hotel.name;

    document.getElementById("room_rate").textContent = "Room Available Just : " + "Rs" + hotel.room_r.toFixed(2);

    document.getElementById("discount").textContent = "Now Discount is      : " + hotel.dicount_r + "%";

    document.getElementById("dicountrate").textContent = "Discount Rate:       " + "Rs" + hotel.discount();

    document.getElementById("d").textContent = "Offer expire on next " + days[newdate.getDay()];


    document.getElementById("duration").textContent = "(" + newdate.getDate() + months[newdate.getMonth()] + newdate.getFullYear() + ")";

}