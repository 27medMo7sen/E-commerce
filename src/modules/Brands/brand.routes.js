import { Router } from "express";
import { asyncHandler } from "../../utils/errorhandling.js";
import * as bc from "./brand.controller.js";
import { multerCloudFunction } from "../../services/multerCloud.js";
import { allowedExtensions } from "../../utils/allowedExtensions.js";
const router = Router();
router.post(
  "/",
  multerCloudFunction(allowedExtensions.Image).single("logo"),
  asyncHandler(bc.addBrand)
);

export default router;
