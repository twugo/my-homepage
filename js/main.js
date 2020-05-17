$(document).ready(function(){
    $('#myAge').text('年齢：' + getAge(1998, 6, 24) + '歳');
})

/**
 * calculate age.
 * @param {number} year - birth year
 * @param {number} month - birth month
 * @param {number} day - birth day
 * @returns {number} age
 */
function getAge(year, month, day){
  var birthday  = new Date(year, month-1, day);
  var today = new Date();
  var thisYearBirthday =
      new Date(today.getFullYear(), month-1, day);  

  var age = today.getFullYear() - birthday.getFullYear();
  if(today < thisYearBirthday) age -= 1;
 
  return age;
}