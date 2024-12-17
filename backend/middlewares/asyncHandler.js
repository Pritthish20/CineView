const asyncHandler= (f) =>(req,res,nex)=>{
    Promise.resolve(f(req,res,nex)).catch((error) =>{
        res.status(500).json({message:error.message});
    })
}
export default asyncHandler;