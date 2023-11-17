function disableEditBtn(index){
    document.getElementById(`editBtn-${arr[index]?.id}`).disabled = true;
    document.getElementById(`editBtn-${arr[index]?.id}`).style.backgroundColor = 'grey';
}
function disableDeleteBtn(index){
    document.getElementById(`delBtn-${arr[index]?.id}`).disabled = true;
    document.getElementById(`delBtn-${arr[index]?.id}`).style.backgroundColor = 'grey';
}

function rowBgColor(index) {
    document.getElementById(arr[index]?.id || 'tr_tags' ).style.backgroundColor = 'green';
}

function enableEditBtn(index) {
    document.getElementById(`editBtn-${arr[index]?.id}`).disabled = false;
    document.getElementById(`editBtn-${arr[index]?.id}`).style.backgroundColor = 'green';
}
function enableDeleteBtn(index) {
    document.getElementById(`delBtn-${arr[index]?.id}`).disabled = false;
    document.getElementById(`delBtn-${arr[index]?.id}`).style.backgroundColor = 'red';
}

function removeRowBgColor(index) {
    document.getElementById(arr[index]?.id || 'tr_tags' ).style.backgroundColor = 'white';
}
// function hide(){
//     disableDeleteBtn.hide();
//     disableEditBtn.hide();
//     rowBgColor.hide();
// }