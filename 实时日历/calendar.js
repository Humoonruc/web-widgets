//global variables
const MONTH_HASH = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December"
};
// const bigMonth = ["January", "March", "May", "July", "August", "October", "December"];
const smallMonth = ["April", "June", "September", "November"];

let today = new Date();
let year = today.getFullYear();
let month = MONTH_HASH[today.getMonth()];
let day = today.getDate();

//修改DOM树
document.getElementById("yearMonthText").innerHTML = month + '<br><span id = "year">' + year + '</span>';
document.getElementsByClassName("days")[0].innerHTML = createDaysDOM(year, month);

// 建立日历主体部分的DOM树
function createDaysDOM(year, month) {
    let daysHTML = '';
    for (let i = 1; i <= getMonthLength(year, month); i++) {
        let dayHTML = '';
        if (i === day) {
            dayHTML = '<li><span class="active">' + i + '</span></li>';
        } else {
            dayHTML = '<li>' + i + '</li>';
        }
        daysHTML = daysHTML + dayHTML;
    }
    return daysHTML;
}

// 判断该月的天数
function getMonthLength(year, month) {
    let monthLength = 31;
    if (smallMonth.indexOf(month) > -1) {
        monthLength = 30; //小月30天
    }
    if (month === "February") { // 二月
        if (year % 4 === 0) { // 四年一闰
            monthLength = 29;
        } else {
            monthLength = 28;
        }
    }
    return monthLength;
};