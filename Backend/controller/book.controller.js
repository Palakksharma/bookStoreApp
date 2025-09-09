import Book from "../model/book.model.js"
export const getBook=async(req,res)=>{
    try{
       const book= await Book.find()                  //model mai data find kr rhe hai
     res.status(200) .json(book)                                   //data mil jaye to response send kr denge
    
    } catch(error){
        console.log("Error:" ,error)
        res.status(500).json(error)

    }
};
