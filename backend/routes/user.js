const {Router} = require('express');
const zod = require('zod');
const jwt = require('jsonwebtoken');
const { User, Account } = require('../db');
const JWT_SECRET = require('../config');
const { authMiddleware } = require('../middleware');

const router = Router();

//signup
const signupSchema = zod.object({
    username: zod.string().email(),
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string(),
});

router.post('/signup', async (req,res) => {
    const body = req.body;

    const {success} = signupSchema.safeParse(body);

    if(!success) {
        return res.status(411).json({
            message: 'Invalid inputs'
        })
    };

    const user = await User.findOne({
        username: body.username,
    });

    if(user?._id){
        return res.status(411).json({
            message: 'user already exists',
        })
    };

    const newUser = await User.create({
        username: body.username,
        password: body.password,
        firstName: body.firstName,
        lastName: body.lastName,
    })

    const userId = newUser._id;

    await Account.create({
        userId,
        balance: 1 + Math.random()*10000,
    })

    const token = jwt.sign({
        userId
    },JWT_SECRET);

    res.status(200).json({
        message: 'User created successfully',
        token: 'Bearer ' + token,
    })

})

//signin
const signinSchema = zod.object({
    username: zod.string().email(),
    password: zod.string(),
    
});

router.post('/signin', async (req,res) => {
    const body = req.body;

    const {success} = signinSchema.safeParse(body);

    if(!success) {
        return res.status(411).json({
            message: 'Enter valid email address'
        })
    };

    const user = await User.findOne({
        username: body.username,
        password: body.password
    });

    if(!user){
        return res.status(411).json({
            message: 'Incorrect username/password',
        })
    };


    const token = jwt.sign({
        userId: user._id
    },JWT_SECRET);

    res.status(200).json({
        message: 'Logged in successfully',
        token: 'Bearer ' + token,
    })

})

//update

const updatedObject = zod.object({
    password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
});

router.put('/update',authMiddleware, async (req,res) => {
    const body = req.body;

    const {success} = updatedObject.safeParse(body);

    if(!success){
        return res.status(411).json({
            message: 'Error while updating',
        })
    }
    console.log(body);

   await User.updateOne({
    _id: req.userId,
   },body)

    

    res.status(200).json({
        message: 'Updated successfully',
    })

})

//get users

router.get('/bulk',authMiddleware, async (req, res) => {
    const filter = req.query.filter || "";
    

    const users = await User.find({
        $or: [
            {firstName : {'$regex': filter}},
            {lastName : {'$regex': filter}},
        ]
    })
    const filteredUsers = users.filter((user) => user._id != req.userId);
    res.status(200).json({
        user: filteredUsers.map(user => ({
            username : user.username,
            firstName : user.firstName,
            lastName : user.lastName,
            _id: user._id
        }))
    })
})

router.get('/details',authMiddleware, async (req, res) => {

    const user = await User.findOne({
        _id : req.userId
    })
    res.status(200).json({
        user: {
            username : user.username,
            firstName : user.firstName,
            lastName : user.lastName,
            _id: user._id
        }
    })
})

module.exports = router;