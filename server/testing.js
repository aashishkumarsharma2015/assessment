var input=;

var array=input.split('');
var count=0;

if(input.length<=1)
{
    console.log("pal")
}
else {
        for (var i = 0, j = array.length - 1; i < Math.floor(array.length / 2); i++, j--)
        {
            if (array[i] === array[j]) {
                count++;
            }
        }
        if (count === Math.floor(array.length / 2)) {
            console.log("pal")
        }

        else {
            console.log("not pal")
        }




}