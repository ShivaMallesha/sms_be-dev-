const roleModel = require('../../models/role.module');

exports.createRole = async (req, res) => {
    try {
        //const { role_name } = req.body; // get the data from body as json format
        const obj = {
            Role_Name: req.body.Role_Name,
            isActive: req.body.isActive,
            Created_Date:req.body.Created_Date,
            Modified_Date:req.body.Modified_Date
        }
       await roleModel.create(obj);
	
        res.send({ message: 'created Successfully', status: true, status_code: 200 });

    } catch (err){
        res.send({ err })
    }
}
exports.getRole = async (req, res) => {
    try {
        const roleData = await roleModel.find();
        res.send(roleData);
    } catch(err) {
        res.send({ err });
    }
}
exports.updateRole=async(req,res)=>{
    try{
        updtId=req.body._id;
        roleModel.findOneAndUpdate({_id: updtId},{$set:req.body},{new:true}).then((docs)=>{
        if(docs) {
           resolve({success:true,data:docs});
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
exports.deleteRole=async(req,res)=>{
    try{
        dltId=req.body._id;
        roleModel.deleteOne({ _id:dltId}).then(function(){
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
