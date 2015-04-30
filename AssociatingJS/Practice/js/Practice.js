/**
 * Created by williamkoepp on 4/20/15.
 */

do{
    var user = prompt("Please enter your user name:");
    var count;
    count ++;
}while(count == 0);


writeUserWelcome(user);
function writeUserWelcome(userName){
    document.write("Welcome to my website "+ userName +"<br/>");
    document.write("Hope you enjoy it!");
}

