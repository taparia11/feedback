const express = require('express');
const router = express.Router();
const Fablab = require('../models/Fablab');
const Siiec = require('../models/Siiec');

// ROUTE 1: Get all the notes using GET "/api/notes/fetchallnotes" Login required
router.get('/fetchallfeedback', async (req, res)=>{
    try {
        const feedback = await Fablab.find();
        res.json(feedback)    
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 2: Add a New Note using POST "/api/notes/addnote" Login required
router.post('/fablabfeedback', async (req, res)=>{

    try {
    
    const{name,email,subject, message} = req.body;
    // if there are error return bad request and error

    const feedback = new Fablab({
        name,email,subject, message
    })

    const saveFeedback = await feedback.save()

    res.json(saveFeedback) 
        
} catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
}
})


router.post('/siiecfeedback', async (req, res)=>{

    try {
    
        const{name,email,subject, message} = req.body;
        // if there are error return bad request and error
    
        const feedback = new Siiec({
            name,email,subject, message
        })
    
        const saveFeedback = await feedback.save()
    
        res.json(saveFeedback) 
            
    } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
}
})


// ROUTE 4: Delete existing Note using DELETE "/api/notes/deletenote" Login required
// router.delete('/deletenote/:id',fetchuser, async (req, res)=>{
  
// try {
//     // find the note to be delete and delete it
//     let note = await Note.findById(req.params.id);
//     if(!note){return res.status(400).send("Not Found")}
//     // Allow delete only if user owns this note
//     if (note.user.toString() !== req.user.id) {
//         return res.status(401).send("Not Allowed");
//     }

//     note = await Note.findByIdAndDelete(req.params.id)
//     res.json({"Success": "Note has been deleted", note: note});
// } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Internal Server Error");
// }
// })

module.exports = router