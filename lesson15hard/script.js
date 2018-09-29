var name = prompt('Как вас зовут?', );
var age = prompt(name+ ', сколько вам лет?', );
var signed = confirm (name+ ', вы подписаны на рассылку?', );

if (parseInt(age) <= 18) {
  alert("Доступ запрещён");
}
else if (signed == true) {
  alert(name+", доступ разрешён");
}
else {
  alert(name+", доступ разрешён");
}

