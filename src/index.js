module.exports = 
  function check(str, bracketsConfig) {
    bracketsConfig = bracketsConfig.map(function(x) { return x.join('');  })
    
  
      function brackets(str) {
        let newStr = str
        for (let i = 0; i < bracketsConfig.length; i++) {
          newStr = newStr.replace(bracketsConfig[i], '')
        }
        if (newStr === str) {
          return newStr
        } else {
         return  brackets(newStr) 
        }
  
  
    }
    
      const result = brackets(str)
      
      if (result.length == 0) {
        return true
      } else return false
  }