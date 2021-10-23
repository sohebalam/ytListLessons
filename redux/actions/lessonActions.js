import {
  CHECK_ENROLL_FAIL,
  CHECK_ENROLL_REQUEST,
  CHECK_ENROLL_SUCCESS,
  CREATE_COURSE_FAIL,
  CREATE_COURSE_REQUEST,
  CREATE_COURSE_SUCCESS,
  DELETE_IMAGE_FAIL,
  DELETE_IMAGE_REQUEST,
  DELETE_IMAGE_SUCCESS,
  FREE_ENROLL_FAIL,
  FREE_ENROLL_REQUEST,
  FREE_ENROLL_SUCCESS,
  LOAD_COURSES_FAIL,
  LOAD_COURSES_REQUEST,
  LOAD_COURSES_SUCCESS,
  LOAD_COURSE_FAIL,
  LOAD_COURSE_REQUEST,
  LOAD_COURSE_SUCCESS,
  PAID_ENROLL_FAIL,
  PAID_ENROLL_REQUEST,
  PAID_ENROLL_SUCCESS,
  PUBLISHED_COURSES_FAIL,
  PUBLISHED_COURSES_REQUEST,
  PUBLISHED_COURSES_SUCCESS,
  SELECT_VIDEO_FAIL,
  SELECT_VIDEO_REQUEST,
  SELECT_VIDEO_SUCCESS,
  SINGLE_COURSE_FAIL,
  SINGLE_COURSE_REQUEST,
  SINGLE_COURSE_SUCCESS,
  UPLOAD_IMAGE_FAIL,
  UPLOAD_IMAGE_REQUEST,
  UPLOAD_IMAGE_SUCCESS,
} from "../constants/lessonTypes"
import absoluteUrl from "next-absolute-url"

import axios from "axios"

export const courseEdit = (image, values, slug) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_COURSE_REQUEST })

    // var strNum = values.price
    // strNum = strNum.toString().replace("£", "")
    // values.price = parseFloat(strNum)

    const { data } = await axios.put(`/api/course/update/${slug}`, {
      ...values,
      image,
    })

    console.log(data)

    dispatch({
      type: CREATE_COURSE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: CREATE_COURSE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const freeEnroll = (course) => async (dispatch) => {
  try {
    dispatch({ type: FREE_ENROLL_REQUEST })

    const { data } = await axios.post(
      `/api/course/enrollment/free/${course._id}`
    )

    dispatch({
      type: FREE_ENROLL_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: FREE_ENROLL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const checkEnrollment = (course) => async (dispatch) => {
  try {
    dispatch({ type: CHECK_ENROLL_REQUEST })

    const { data } = await axios.get(
      `/api/course/enrollment/check/${course._id}`
    )

    dispatch({
      type: CHECK_ENROLL_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: CHECK_ENROLL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getSingleCourse = (req, slug) => async (dispatch) => {
  try {
    dispatch({ type: SINGLE_COURSE_REQUEST })

    // console.log(req)
    console.log(slug)

    const { origin } = absoluteUrl(req)

    const { data } = await axios.get(`${origin}/api/course/single/${slug}`)

    console.log(data)

    dispatch({
      type: SINGLE_COURSE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: SINGLE_COURSE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const loadCourse = (authCookie, req, slug) => async (dispatch) => {
  try {
    dispatch({ type: LOAD_COURSE_REQUEST })

    const config = {
      headers: {
        cookie: authCookie,
      },
    }

    const { origin } = absoluteUrl(req)

    const { data } = await axios.get(`${origin}/api/course/${slug}`, config)

    dispatch({
      type: LOAD_COURSE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: LOAD_COURSE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const publishedCourse = (req) => async (dispatch) => {
  try {
    dispatch({ type: PUBLISHED_COURSES_REQUEST })

    const { origin } = absoluteUrl(req)

    const { data } = await axios.get(`${origin}/api/course/publish/all`)

    dispatch({
      type: PUBLISHED_COURSES_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PUBLISHED_COURSES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const imageDelete = (image) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_IMAGE_REQUEST })

    const { data } = await axios.post("/api/course/delete", { image })

    dispatch({
      type: DELETE_IMAGE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: DELETE_IMAGE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const imageUpload = (uri) => async (dispatch) => {
  try {
    dispatch({ type: UPLOAD_IMAGE_REQUEST })

    let { data } = await axios.post("/api/course/image", {
      image: uri,
    })

    dispatch({
      type: UPLOAD_IMAGE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: UPLOAD_IMAGE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const selectLesson = (video) => async (dispatch) => {
  try {
    dispatch({ type: SELECT_VIDEO_REQUEST })

    const data = video

    dispatch({
      type: SELECT_VIDEO_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: SELECT_VIDEO_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const courseCreate = (image, values) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_COURSE_REQUEST })

    var strNum = values.price
    strNum = strNum.toString().replace("£", "")
    values.price = parseFloat(strNum)

    const { data } = await axios.post("/api/course/course", {
      ...values,
      image,
    })

    dispatch({
      type: CREATE_COURSE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: CREATE_COURSE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const loadCourses = (authCookie, req) => async (dispatch) => {
  try {
    const { origin } = absoluteUrl(req)
    dispatch({ type: LOAD_COURSES_REQUEST })

    const config = {
      headers: {
        cookie: authCookie,
      },
    }

    const { data } = await axios.get(`${origin}/api/course/instructor`, config)

    // console.log(data)

    dispatch({
      type: LOAD_COURSES_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: LOAD_COURSES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
