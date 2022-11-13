const routes = {
    home: '/',
    following: '/following',
    profile: '/:nickname',
    video: '/:nickname/video/:id',
    upload: '/upload',
    live: '/live',
    music: '/music/:name-:id',
    tag: '/tag/:name',
    login: '/login',
    loginPhoneAndEmail: '/login/phone-or-email',
    register: '/register',
    registerPhoneAndEmail: '/register/phone-or-email',
    forgetPassword: '/login/forget-password',
    dashboard: '/admin/dashboard'
}

export default routes;