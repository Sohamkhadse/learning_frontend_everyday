import express from "express"
import { fetchReview, reviewInfo,updateReview, write, deleteReview} from "../controllers/review.controller.js"

const reviewsRouter = express.Router()

reviewsRouter.get("/", reviewInfo)
reviewsRouter.post("/write", write)
reviewsRouter.post("/fetch-all", fetchReview)
reviewsRouter.put("/update/:reviewId", updateReview)
reviewsRouter.delete("/delete/:reviewId", deleteReview)

export { reviewsRouter }