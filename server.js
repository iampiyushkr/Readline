const readline = require("readline")

const readline1 = readline.createInterface({
    input: process.stdin,
    output:process.stdout,
})

var Books=["JavaScript","React","Dsa"]

// readline1.question(" select Option 1 - Show all books 2 - Add a new book 3 - Quit\n", (num) => {
//     if (num == 1) {
//         console.log(Books)
        
//     }else if (num == 2) {
//          readline1.question(" Add books\n", (newBook) => {
//              Books.push(newBook)
//              console.log(Books)
//               readline1.question(" select Option 1 - Show all books 2 - Add a new book 3 - Quit\n", (num) => {
//     if (num == 1) {
//         console.log(Books)
        
//     }else if (num == 2) {
//          readline1.question(" Add books\n", (newBook) => {
//              Books.push(newBook)
//              console.log(Books)
        
//     })
//     } else if (num == 3) {
//          readline1.question(" Are you want to quit press Y to quit\n", (ans) => {
//              if (ans == "y") {
//              readline1.close()
//         }
       
//     })
//     }
    
   
// })
        
//     })
//     } else if (num == 3) {
//          readline1.question(" Are you want to quit press Y to quit\n", (ans) => {
//              if (ans == "y") {
//              readline1.close()
//         }
       
//     })
//     }
//     readline1.question(" select Option 1 - Show all books 2 - Add a new book 3 - Quit\n", (num) => {
//     if (num == 1) {
//         console.log(Books)
        
//     }else if (num == 2) {
//          readline1.question(" Add books\n", (newBook) => {
//              Books.push(newBook)
//              console.log(Books)
//               readline1.question(" select Option 1 - Show all books 2 - Add a new book 3 - Quit\n", (num) => {
//     if (num == 1) {
//         console.log(Books)
        
//     }else if (num == 2) {
//          readline1.question(" Add books\n", (newBook) => {
//              Books.push(newBook)
//              console.log(Books)
        
//     })
//     } else if (num == 3) {
//          readline1.question(" Are you want to quit press Y to quit\n", (ans) => {
//              if (ans == "y") {
//              readline1.close()
//         }
       
//     })
//     }
    
   
// })
        
//     })
//     } else if (num == 3) {
//          readline1.question(" Are you want to quit press Y to quit\n", (ans) => {
//              if (ans == "y") {
//              readline1.close()
//         }
       
//     })
//         }
       
    
   
// })
   
// })

function read(n) {
      readline1.question(`${n} select Option 1 - Show all books 2 - Add a new book 3 - Quit\n`, (num) => {
    if (num == 1) {
        console.log(Books)
        read("")
        
    }else if (num == 2) {
         readline1.question(" Add books\n", (newBook) => {
             Books.push(newBook)
             console.log(Books)
             read("")
        
    })
    } else if (num == 3) {
         readline1.question(" Are you want to quit press Y to quit\n", (ans) => {
             if (ans == "y") {
             readline1.close()
        }
       
    })
    } else {
        read("You have enter incorrect please enter 1,2or3")
    }
    
   
})
}
read("")

readline1.on("close", () => {
    console.log("Bye Bye")
})