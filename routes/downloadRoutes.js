const path = require("path");

module.exports = app => {
    app.get("/api/download/resume", (req, res) => {
        var filePath = path.resolve(__dirname,"../download/Resume_Wenfei Yu.pdf"); 
        var fileName = "Resume_Wenfei Yu.pdf";
        res.download(filePath, fileName);  
    });

    app.get("/api/download/transcripts", (req, res) => {
        var filePath = path.resolve(__dirname,"../download/Fld Acad Career.pdf"); 
        var fileName = "Transcripts_Wenfei Yu.pdf";
        res.download(filePath, fileName);  
    });
};