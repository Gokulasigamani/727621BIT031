import NavBar from "../Components/NavBar";


function Home()
{
    
    function ProductHandler()
    { 
       
        fetch(
           ' http://20.244.56.144/test/companies/AMZ/categories/${categoryname}/products?top=${n}&minPrice=1&maxPrice=100000',
            {
              method: "GET",
              headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE4OTUxMzgwLCJpYXQiOjE3MTg5NTEwODAsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjQ4MGQyMWY3LTk2ZTctNDBmYi1hNDNlLTA2NGYyYzE3MzkxOCIsInN1YiI6Imdva3Vsc3VzZWxhQGdtYWlsLmNvbSJ9LCJjb21wYW55TmFtZSI6InN1bmFqb1RlY2giLCJjbGllbnRJRCI6IjQ4MGQyMWY3LTk2ZTctNDBmYi1hNDNlLTA2NGYyYzE3MzkxOCIsImNsaWVudFNlY3JldCI6IldEdnZDTW5xYmhLZEplSmsiLCJvd25lck5hbWUiOiJHb2t1bGFzaWdhbWFuaS5OIiwib3duZXJFbWFpbCI6Imdva3Vsc3VzZWxhQGdtYWlsLmNvbSIsInJvbGxObyI6IjcyNzYyQklUMDMxIn0.IEuWZPFTcY4iwRHPLufG7uL3NAME0fI2AXk9cjsP9fo",
                "Content-Type": "application/json",
              },
            }
          ).then((products)=>{
            console.log(products.data);
          }).catch((err)=>{
            console.log(err);
          })
        
    }
    

   

    return(
        <>
        <NavBar/>
      
          <button onClick={ProductHandler} >Onclick</button>

           
        </>
    )
}
export default Home;