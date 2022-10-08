import config from '~/config';

//Layouts
import { HeaderOnly } from '~/layouts';
import { DefaultLayoutv2 } from '~/layouts';

//Pages
import Home from '~/pages/Home/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload/Upload';
import Profile from '~/pages/Profile';
import Live from '~/pages/Live';
import Music from '~/pages/Music';
import Tag from '~/pages/Tag';

//Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.live, component: Live, layout: DefaultLayoutv2},
    { path: config.routes.profile, component: Profile,layout: DefaultLayoutv2 },
    { path: config.routes.music, component: Music, layout: DefaultLayoutv2 },
    { path: config.routes.tag, component: Tag, layout: DefaultLayoutv2 },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
