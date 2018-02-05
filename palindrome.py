from mod_python import apache
from mod_python import util


def reverse(s):
    return s[::-1]
 
def isPalindrome(s):

    rev = reverse(s)
    return rev

def index(req):
    req.content_type = "text/html"
    info = req.form
    strr = info['usr']
    
    ans = isPalindrome(strr)
    if ans == strr:
        req.write("given string is palindrome")
        
    else:
        req.write("given string is not palindrome")
    
    
    
        

