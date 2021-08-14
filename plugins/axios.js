export default function({ store, redirect, req, router, app: { $axios } }) {
  // 数据访问前缀
  $axios.defaults.baseURL = 'http://127.0.0.1:3001'
  $axios.defaults.headers.common.Authorization = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhhcmRpbmdjaGVuZyU0MDE2My5jb20iLCJpYXQiOjE2Mjg4OTg3NjQsImV4cCI6MTYzMDUzMTI2Mjk5NH0.CHHqFDSUxnr7j0_l10vR5QGpyS4sNTNViRQoVCh9Mv8'

}
