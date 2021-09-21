function timeConversion(s) {
    let h12 = s.substring(0,3);
    let st = s.substring(2,8);
    let h24 = parseInt(h12) + 12;
    console.log(h24 + st);
}
timeConversion('07:05:45PM')