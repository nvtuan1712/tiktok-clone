const routes = {
    home: '/',
    following: '/following',
    profile: '/:nickname',
    upload: '/upload',
    live: '/live',
    music: '/music/:name',
    tag: '/tag/:name',
    video: '/@:nickname/video',
    login: '/login',
    loginPhoneAndEmail: '/login/phone-or-email',
    register: '/register',
    registerPhoneAndEmail: '/register/phone-or-email',
    forgetPassword: '/login/forget-password',
    dashboard: '/admin/dashboard'
}

export default routes;