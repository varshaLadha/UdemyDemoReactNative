import {Platform} from 'react-native'

let url = ''
//let url = 'http://192.168.200.129:3000'

if(Platform.OS === 'ios'){
    url = 'http://192.168.200.45:3005'
} else{
    //url = 'http://10.0.2.2:3000'
    url = 'http://192.168.200.45:3005'
}

export const baseURL = url

export const urls = {
    userLogin: '/user/login',
    userSignUp: '/user/signUp',
    categoryData: '/category',
    popularCourses: '/course/popularCourse',
    subcategory: '/subcategory/category/',
    categoryPopularCourse: '/course/popularCourse/',
    subCategoryDetailData: '/course/subcategory/',
    allCoursesData: '/course/',
    searchData: '/course/searchCourse/'
}