
const asyncHandler = (requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next))
        .catch((err)=>next(err))
    }
    
}

export {asyncHandler}

// const asyncHandler = (funct)=>{}
// const asyncHandler= (funct)=>{()=>{}}  
// const asyncHandler = (funct)=> async()=>{}    here passing async function in another fucntion



// const asyncHandler = (funct)=> async(req,res,next)=>{
//    try {
//       await funct(req,res,next)
//    } catch (error) {
//       res.status(err.code|| 500).json({
//         success:false,
//         message:err.message
//       })
//    }

// }
