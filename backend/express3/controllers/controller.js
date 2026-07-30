let data = []

const welcome = (req, res) => {
    // res.status(200).json({ message: "welcome to root route!" })
    res.status(200).render("index",{inputData: data })
}

const handelPostWelcome = (req, res) => {
    console.log(req.body)
    data.push(req.body)
    // res.status(200).render("index")
    res.status(300).redirect("/api/")
}

const handleDelete = (req, res) => {
    try {

        const { id } = req.params;

        data = data.filter((item, index) => index !== Number(id));

        res.status(200).json({
            message: "Deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: "Something went wrong",
            error: error.message
        });

    }
};
    
const handleUpdate = (req, res) => {

}

const message = (req, res) => {
    res.status(200).json({ message: "welcome to message route!" })
}

const learnMore = (req, res) => {
    res.status(200).json({ message: "welcome to learn more route!" })
}

const handelAbout = (req, res) => {
    res.status(200).render("about")
}

export { welcome, message, learnMore, handelAbout, handelPostWelcome, handleDelete, handleUpdate }