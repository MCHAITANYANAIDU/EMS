import express, { json } from "express"
import con from "../utilis/db.js"
import jwt from "jsonwebtoken"
import multer from 'multer';


const router = express.Router()


router.post('/adminlogin', (req, res) => {
    const sql = "select * from admin where email = ? and password = ?"
    con.query(sql, [req.body.email, req.body.password], (err, result) => {
        if (err) return res.json({ loginStatus: false, Error: "Query error" })
        if (result.length > 0) {
            const email = result[0].email;
            const token = jwt.sign({ role: "admin", email: email }, "jwt_secret_key",{expiresIn:'1d'});
            res.cookie('token', token)
            return res.json({ loginStatus: true });
        } else {
            return res.json({ loginStatus: false, Error: "Invalid email or password" });
        }
    })
})

router.get('/category', (req, res) => {
    const sql = "SELECT * FROM category";
    con.query(sql, (err, result) => {
        if(err) return res.json({Status: false, Error: "Query Error"})
        return res.json({Status: true, Result: result})
    })
})




router.post('/add_category', (req, res) => {
    const sql = "INSERT INTO category (`name`) VALUES (?)"
    con.query(sql, [req.body.category], (err, result) => {
        if(err) return res.json({Status: false, Error: "Query Error"})
        return res.json({Status: true})
        
    })
})


// // image upload 
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'Public/Images')
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
//     }
// })
// const upload = multer({
//     storage: storage
// })
// // end imag eupload 


// router.post('/add_employee',upload.single('image'), (req, res) => {
//     const sql = `INSERT INTO employee 
//     (name,email,password, address, salary,image, category_id) 
//     VALUES (?)`;
//     bcrypt.hash(req.body.password, 10, (err, hash) => {
//         if(err) return res.json({Status: false, Error: "Query Error"})
//         const values = [
//             req.body.name,
//             req.body.email,
//             hash,
//             req.body.address,
//             req.body.salary, 
//             req.file.filename,
//             req.body.category_id
//         ]
//         con.query(sql, [values], (err, result) => {
//             if(err) return res.json({Status: false, Error: err})
//             return res.json({Status: true})
//         })
//     })
// })




export { router as adminRouter }

