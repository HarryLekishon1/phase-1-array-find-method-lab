// code your solution here
function superbowlWin(record) {

    function test(w){
        return(w.result === 'W')
    }
    if(record.find(test)){
        return record.find(test).year;
    }
}