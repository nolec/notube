import routes from "./routes";
import multer from "multer";

const multerVideo = multer({ dest: "uploads/videos/" });

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Notube";
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: 5
  };
  next();
};

export const uploadVideo = multerVideo.single("videoFile");
