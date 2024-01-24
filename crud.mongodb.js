
// crud opration


use("curdDb")


// create data 
db.createCollection("mydata")


// // create one data

db.mydata.insertOne({

name:"kushal web dev",
price:0,
assignments:12,

project:45


})


// create many data

db.mydata.insertMany(

    [
        {
          "name": "Kushal Web Dev",
          "price": 0,
          "assignments": 12,
          "project": 45
        },
        {
          "name": "Sarah Web Development",
          "price": 0,
          "assignments": 14,
          "project": 50
        },
        {
          "name": "Alex Web Developer",
          "price": 0,
          "assignments": 10,
          "project": 40
        },
        {
          "name": "Emily Web Dev",
          "price": 0,
          "assignments": 11,
          "project": 48
        },
        {
          "name": "David Web Development",
          "price": 0,
          "assignments": 13,
          "project": 42
        },
        {
          "name": "Megan Web Developer",
          "price": 0,
          "assignments": 9,
          "project": 38
        },
        {
          "name": "Ryan Web Dev",
          "price": 0,
          "assignments": 14,
          "project": 55
        },
        {
          "name": "Sophie Web Development",
          "price": 0,
          "assignments": 11,
          "project": 47
        },
        {
          "name": "Chris Web Developer",
          "price": 0,
          "assignments": 12,
          "project": 43
        },
        {
          "name": "Olivia Web Dev",
          "price": 0,
          "assignments": 10,
          "project": 36
        }
      ]
      

)

// find data 

let a =db.mydata.find({price:0})

console.log(a.count()); // count data

console.log(a.toArray()); // data show array from


let b= db.mydata.findOne({price:0}) // find one data

console.log(b); 


// update data 
                     // contition  // update value
db.mydata.updateOne({price:0},{$set:{price:100}})

db.mydata.updateMany({price:0},{$set:{price:1000}})


// DELETE

db.mydata.deleteOne({price:100})

db.mydata.deleteMany({price:1000})







