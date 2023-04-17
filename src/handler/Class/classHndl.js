const classModel=require("../../models/class.module");
exports.createClass =async(req,res)=>{
    try{
        const classObj={
            Class_name:req.body.Class_name,
            Class_type:req.body.Class_type,
            Class_hrs:req.body.Class_hrs,
            Course_id:req.body.Course_id,
            Created_date:req.body.Created_date,
            Modified_date:req.body.Modified_date,
            isActive:req.body.isActive
        }
        await classModel.create(classObj);
        res.send({message:"Created successfully",status:true,status_code:200})
    }
    catch (err){
        res.send(err)
    }
}
exports.getClass=async(req,res)=>{
    try{
        var classData=await classModel.find();
        res.send(classData);
    }
    catch(err){
        res.send(err);
    }
}
exports.updateClass=async(req,res)=>{
    try{
        updtId=req.body._id;
        classModel.findOneAndUpdate({_id: updtId},{$set:req.body},{new:true}).then((docs)=>{
        if(docs) {
           res.send({message:"Updated successfully"});
        } else {
           reject({success:false,data:"no such user exist"});
        }
    }).catch((err)=>{
       //reject(err);
    });
     }
    catch(err){
        res.send({ message:"Error occured"})
    }
}
exports.deleteClass=async(req,res)=>{
    try{
        dltId=req.body._id;
        classModel.deleteOne({ _id:dltId}).then(function(){
            console.log("Blog deleted"); // Success
         }).catch(function(error){
            console.log(error); // Failure
         });
        res.send({message:"Deleted successfully"})
    }
    catch(err){
        res.send(err);
    }
}