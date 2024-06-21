const express=require('express')
const app=express();
const cors=require('cors')
app.use(cors())
app.listen(4000,()=>
{
    console.log("4000 running")
})



app.get("/data/api", (req,res) => {
    console.log("hi")
  fetch(
    "http://20.244.56.144/test/companies/AMZ/categories/Phone/products?top=10&minPrice=1&maxPrice=10000",

    {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE4OTczNjA5LCJpYXQiOjE3MTg5NzMzMDksImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjQ4MGQyMWY3LTk2ZTctNDBmYi1hNDNlLTA2NGYyYzE3MzkxOCIsInN1YiI6Imdva3Vsc3VzZWxhQGdtYWlsLmNvbSJ9LCJjb21wYW55TmFtZSI6InN1bmFqb1RlY2giLCJjbGllbnRJRCI6IjQ4MGQyMWY3LTk2ZTctNDBmYi1hNDNlLTA2NGYyYzE3MzkxOCIsImNsaWVudFNlY3JldCI6IldEdnZDTW5xYmhLZEplSmsiLCJvd25lck5hbWUiOiJHb2t1bGFzaWdhbWFuaS5OIiwib3duZXJFbWFpbCI6Imdva3Vsc3VzZWxhQGdtYWlsLmNvbSIsInJvbGxObyI6IjcyNzYyQklUMDMxIn0.7T0bV8uttXZYykaaZGXdzZTqpbK9G3mt9jT8kGvUwJc",
        "Content-Type": "application/json",
      },
    }
  )
    .then((res) => {
      return res.json();
    })
    .then((resp) => {
      res.status(200).json(resp);
    })
    .catch((err) => {
      console.log(err);
    });
});
