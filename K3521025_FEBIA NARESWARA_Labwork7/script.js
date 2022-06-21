var display = document.formAngka.isiText;
function ins(num) {
 display.value += num;
}
function samaDengan() {
 display.value = eval(display.value);
}
function dlte() {
 display.value = display.value.substr(0,display.value.length-1);
}
function hapusSemua() {
 display.value = "";
}