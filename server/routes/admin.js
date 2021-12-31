import express from 'express';
const router = express.Router();

router.get('/admin', (req, res) => {
    res.status(201).json({
        error: null,
        data: {
            title: 'Protected route',
            user: req.user
        }
    })
})


export default router;