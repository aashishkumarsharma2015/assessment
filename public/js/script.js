function palindrome(){
        console.log("palindrome working");
            var rs="";
            var is=document.getElementById("text").value;
            for(var i=is.length;i>=0;i--){
                rs=rs+is.charAt(i);
            }
            if(is===rs){
                alert(is+ " is a palindrome");
                // var a=document.write(is+" a palinodrome");
            }
            else{
                alert(is+ "is not palindrome");
                // var a=document.write(is+" a  not palinodrome");
            }
        }