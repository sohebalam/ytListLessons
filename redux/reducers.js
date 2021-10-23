import { combineReducers } from "redux"

import {
  courseEditReducer,
  courseLoadReducer,
  coursePublishedReducer,
  coursesLoadReducer,
  createCourseReducer,
  deleteImageReducer,
  enrollmentCheckReducer,
  freeEnrollReducer,
  paidEnrollReducer,
  selectVideoReducer,
  singleCourseReducer,
  uploadImageReducer,
} from "./reducers/lessonReducers"

const reducer = combineReducers({
  //lessons
  selectVideo: selectVideoReducer,
  createCourse: createCourseReducer,
  uploadImage: uploadImageReducer,
  deleteImage: deleteImageReducer,
  coursesLoad: coursesLoadReducer,
  coursePublished: coursePublishedReducer,
  courseLoad: courseLoadReducer,
  singleCourse: singleCourseReducer,
  paidEnroll: paidEnrollReducer,
  enrollmentCheck: enrollmentCheckReducer,
  freeEnroll: freeEnrollReducer,
  courseEdit: courseEditReducer,
})

export default reducer
