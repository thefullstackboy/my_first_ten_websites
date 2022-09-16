import axios from 'axios'

export const createAdminUser = async (url, params) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_ADMIN_API_BASEPATH + url,
      params.userBeingAddedOrEdited,
      {
        headers: {
          Authorization: window.localStorage.getItem('token'),
        },
      },
    )
    return await response.data
  } catch (e) {
    throw new Error(e.message)
  }
}

export const postCall = async (url, params) => {
  try {
    const response = await axios.post(url, params.postParams, {
      headers: {
        Authorization: window.localStorage.getItem('token'),
      },
    })
    return await response.data
  } catch (e) {
    throw new Error(e.message)
  }
}
