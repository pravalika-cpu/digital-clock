var Day=["sunday","monday","tuesday","wednesday","thursday","friday","saturda"]
var myDate=new Date();
var Day=myDate.getDay();
document.write("today is:"+Day[Day])
var hrs=myDate.getHours();
var hr=(hrs)%12
var min=myDate.getMinutes()
if(hrs<12){
document.write("good morning"+"time is"+hr+":"+min+"A.M")

}
else if(hrs>=12&&hrs<=17){
    document.write("good afternoon"+"time is"+hr+":"+min+"P.M")
}
else{
    document.write("good evenging"+"time is"+hr+"min"+"P.M")
}