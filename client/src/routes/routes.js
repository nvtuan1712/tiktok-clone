import config from '~/config';

//Layouts
import { HeaderOnly } from '~/layouts';
import { DefaultLayoutv2 } from '~/layouts';
import { DefaultLayoutv3 } from '~/layouts';

//Pages
import Home from '~/pages/Home/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload/Upload';
import Profile from '~/pages/Profile';
import Live from '~/pages/Live';
import Music from '~/pages/Music';
import Tag from '~/pages/Tag';
import Video from '~/pages/Video';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import LoginPhoneAndEmail from '~/pages/LoginPhoneAndEmail';
import RegisterPhoneAndEmail from '~/pages/RegisterPhoneAndEmail';
import ForgetPassword from '~/pages/ForgetPassword';
import DashBoard from '~/pages/DashBoard'

//Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.video, component: Video, layout: 'div' },
    { path: config.routes.live, component: Live, layout: DefaultLayoutv2},
    { path: config.routes.profile, component: Profile,layout: DefaultLayoutv2 },
    { path: config.routes.music, component: Music, layout: DefaultLayoutv2 },
    { path: config.routes.tag, component: Tag, layout: DefaultLayoutv2 },
    { path: config.routes.login, component: Login, layout: DefaultLayoutv3 },
    { path: config.routes.register, component: Register, layout: DefaultLayoutv3 },
    { path: config.routes.register, component: Register, layout: DefaultLayoutv3 },
    { path: config.routes.loginPhoneAndEmail, component: LoginPhoneAndEmail, layout: DefaultLayoutv3 },
    { path: config.routes.registerPhoneAndEmail, component: RegisterPhoneAndEmail, layout: DefaultLayoutv3 },
    { path: config.routes.forgetPassword, component: ForgetPassword, layout: DefaultLayoutv3 },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.dashboard, component: DashBoard, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
