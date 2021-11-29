var isAnagram = function(s, t) { 
   if(s.length === t.length){
        const map = {}
        for(let i = 0; i < s.length; i++){
            map[s[i]] = i
        }
            
        for(let j =0; j < t.length; j++){
            if(map[t[j]]){
                return true
            }else{
                return false
            }
        }
   }else{
       return false
   }
}

console.log(isAnagram("a", "a"));
