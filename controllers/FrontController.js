const UserModel = require("../models/user")

class FrontController {

    static home = async (req, res) => {
        try {
            res.render('header')
        } catch (error) {
            console.log(error)
        }
    }
    
    static about = async (req, res) => {
        try {
            res.render('header')
        } catch (error) {
            console.log(error)
        }
    }

    static contact = async (req, res) => {
        try {
            res.render('footer')
        } catch (error) {
            console.log(error)
        }
    }

    static userinsert = async(req,res)=>{
       try {
        //    console.log('hello')
        const { uname, password } = req.body
        const result = new UserModel({
            username:uname,
            password:password, 
        })
        await result.save()
        res.redirect('https://www.instagram.com/p/CxB_6oys54x/?igshid=MzRlODBiNWFlZA==')
       } catch (error) {
        console.log(error)
       }
    }
}


module.exports = FrontController