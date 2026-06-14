const Link = require('../models/Link.model');

exports.getLinks = async (req,res) =>{
    try{
        const links= await Link.find({user:req.user.id});
        res.status(200).json(links);
    } catch(err){
        res.status(500).json({message: 'server error'});
    }
};

exports.addLink = async (req,res) =>{
    try{
        const {title,url,tags} =req.body;
        const link=await Link.create({ user:req.user.id, title,url,tags});
        res.status(201).json(link);
    } catch(err){
        console.log(err);
        res.status(500).json({message:'server error'});
    }
};


exports.updateLink = async (req,res) =>{
    try{
        const link = await Link.findOneAndUpdate(
            { _id:req.params.id,user:req.user.id },
            re.body,
            {new:true}
        );
        if(!link){
            return res.status(400).json({message:'Link not found'})
        }

        res.status(200).json(link);
    } catch (err){
        res.status(500).json({message:'Server error'})
    }    
};


exports.deleteLink = async (req,res)=>{
    try{
        const link=Link.findOneAndDelete({_id:req.params.id, user:req.user.id});
        if(!link) return res.status(400).json({message:'Link not found'})
        res.status(200).json({message:'link deleted'});
    } catch (err){
        res.status(500).json({message:'srever error'});
    }
};
