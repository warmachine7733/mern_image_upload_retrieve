const Image = require("../models/image");
module.exports = {
  uploadImg: async (req, res, next) => {
    try {
      let img_url = req.file.filename;
      const foundImg = await Image.findOne({ img_url: img_url });
      if (foundImg) return res.status(201).json("image already exists");

      //creating image link and store it in db as a string
      const newImage = new Image({
        img_url
      });
      await newImage.save();

      res.status(200).json("file uploaded successfully");
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getImages: async (req, res, next) => {
    const result = await Image.find();
    // const changeStream = await Image.watch();
    // changeStream.on("change", change => console.log("new file", change));
    global.io.emit("news", { result });

    // });
    res.status(200).json(result.reverse());
  }
};
