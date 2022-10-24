function display(num){
    // 24-10-22
    result.value+=num
}
function allclear(){
    result.value=""
    // so an empty string appears when AC is pressed
}
function evaluateexp(){
exp=result.value
res=eval(exp)
result.value=res
// result.value=eval(result.value)
}

// s="hello"
// slicing
function back(){
    curr_exp=result.value
    result.value=curr_exp.slice(0,-1)
}